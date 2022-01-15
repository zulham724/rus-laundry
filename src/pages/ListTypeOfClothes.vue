<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Pilih Jenis Pakaian</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div class="q-my-sm">
          <q-card class="no-shadow">
            <q-card-section>
              <div class="row">
                <div class="col-6">
                  <q-input
                    dense
                    v-model="search"
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
        <div v-if="categories.length">
          <q-card
            flat
            class="q-mt-sm full-width"
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
        </div>
        <div v-if="!categories.length">
          <div class="text-center" style="margin-top: 80px">
            <q-img
              src="~/assets/paket-kosong-unscreen.gif"
              style="width: 205px; height: 205px"
            />
          </div>
        </div>
        <!-- <q-page-sticky position="bottom" :offset="[18, 18]"> -->
        <q-btn class="full-width q-pt-sm fixed-bottom" to="/basket">
          <q-avatar>
            <img src="~/assets/cart-pesanan.svg" style="width: 50%" />
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
      notif: false,
    };
  },
  methods: {
    getCategoriesByShop() {
      this.$store.dispatch("ServiceCategories/index").then((res) => {
        this.categories = res.data.map((category) => {
          this.Orders.order.charts.forEach((item2) => {
            if (category.id == item2.id) {
              category.added = true;
            }
          });
          return category;
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
  },
  mounted() {
    this.getCategoriesByShop();
  },
};
</script>

<style></style>
