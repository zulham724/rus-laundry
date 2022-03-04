<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" @click="$router.push('/make-an-order')">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Pilih Jenis Item</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div class="q-my-sm">
          <q-card class="no-shadow">
            <q-card-section>
              <div class="row">
                <div class="col-12">
                  <q-input
                    dense
                    v-model="search"
                    @update:model-value="filterCategory(search)"
                    outlined
                    rounded
                    type="search"
                    label="Cari"
                  >
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </div>
                <div class="col-6"></div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Skeleton -->
        <div v-if="isLoad == true">
          <q-card flat class="q-mt-sm full-width" v-for="n in 10" :key="n">
            <q-card-section>
              <div class="row">
                <div class="col-6">
                  <div
                    class="text-weight-medium text-left"
                    style="color: #888888"
                  >
                    <q-skeleton type="text" width="100px"></q-skeleton>
                  </div>
                  <div class="text-caption q-pr-md" style="color: #d0caca">
                    <q-skeleton type="text" width="30px"></q-skeleton>
                  </div>
                </div>

                <div class="col-6 self-center">
                  <div class="row justify-end">
                    <div class="q-pr-md">
                      <q-skeleton type="text" width="60px"></q-skeleton>
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div v-else-if="isLoad == false && categories.length">
          <q-card
            flat
            class="q-mt-sm full-width q-mt-sm"
            v-for="category in categories"
            :key="category.id"
          >
            <q-card-section>
              <div class="row">
                <div class="col-6">
                  <div
                    class="text-weight-medium text-left"
                    style="color: #888888"
                  >
                    {{ category.name }}
                  </div>
                  <div class="text-caption q-pr-md" style="color: #d0caca">
                    {{ category.service_unit.name }}
                  </div>
                </div>

                <div class="col-6">
                  <div class="row justify-end">
                    <div v-if="!category.added" class="q-pr-sm">
                      <q-btn
                        no-caps
                        flat
                        @click="addCart(category)"
                        style="color: #ffd200"
                        label="Tambah"
                      >
                      </q-btn>
                    </div>
                    <div v-else class="q-pr-sm"></div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>

          <q-btn
            disable
            flat
            no-caps
            class="full-width q-mt-sm"
            style="z-index: 999; background-color: #fafafa"
          >
            <div
              style="color: #fafafa"
              class="text-caption q-mt-sm q-py-md q-pl-sm"
            >
              Tampilkan Menu Keranjang
            </div>
          </q-btn>
          <!-- <div style="color: #fafafa">test</div> -->
        </div>

        <div v-else>
          <div class="text-center" style="margin-top: 80px">
            <q-img
              no-spinner
              src="~/assets/paket-kosong-unscreen.gif"
              style="width: 205px; height: 205px"
            />
          </div>
        </div>
        <!-- <q-page-sticky position="bottom" :offset="[18, 18]"> -->
        <!-- button tampilkan menu keranjang-->
        <q-btn
          no-caps
          class="full-width q-pt-sm fixed-bottom bg-white"
          to="/basket"
          style="z-index: 999"
        >
          <q-avatar>
            <q-img
              no-spinner
              src="~/assets/cart-pesanan.svg"
              style="width: 50%"
            />
            <q-badge color="orange" floating>{{
              Orders.order.charts.length
            }}</q-badge>
          </q-avatar>
          <div class="text-caption q-pl-sm">Tampilkan Menu Keranjang</div>
        </q-btn>
        <!-- </q-page-sticky> -->

        <q-dialog v-model="notif">
          <q-card style="width: 18rem">
            <q-card-section>
              <div class="text-subtitle1">
                Pakaian telah ditambahkan ke keranjang
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none text-caption">
              cek keranjang untuk melihat detailnya
            </q-card-section>

            <q-card-actions align="right">
              <q-btn label="OK" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Auth", "Orders"]),
  },
  data() {
    return {
      search: null,
      categories: [],
      categories_temp: [],
      notif: false,
      isLoad: false,
    };
  },
  methods: {
    getCategoriesByShop() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("ServiceCategories/index")
          .then((res) => {
            this.categories = this.categories_temp = res.data.map(
              (category) => {
                this.Orders.order.charts.forEach((item2) => {
                  if (category.id == item2.id) {
                    category.added = true;
                  }
                });
                return category;
              }
            );
          })
          .catch((err) => {
            reject(err);
            // console.log(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    addCart(item) {
      this.$store.commit("Orders/add_order_cart", { data: item });
      this.notif = true;
      this.categories = this.categories.map((category) => {
        this.Orders.order.charts.forEach((item2) => {
          if (category.id == item2.id) {
            category.added = true;
          }
        });
        return category;
      });
    },
    update(val) {
      if (val == "") {
        this.categories = this.categories_temp;
      }

      const needle = val.toLowerCase();
      this.categories = this.categories_temp.filter(
        (v) => v.name.toLowerCase().indexOf(needle) > -1
      );
    },

    filterCategory(value) {
      this.update(value);
    },
  },
  mounted() {
    this.getCategoriesByShop();
  },
};
</script>

<style></style>
