<template>
  <q-layout class="mbl">
    <div class="fixed-top" style="z-index: 999">
      <q-header class="text-center shadow-1">
        <q-toolbar class="bg-white">
          <q-btn flat round @click="$router.back()">
            <q-avatar size="20px" icon="fas fa-arrow-left" style="color: black">
            </q-avatar>
          </q-btn>
          <q-toolbar-title
            class="text-left text-weight-medium"
            style="color: #3a3838; font-size: 18px"
            >Disukai
          </q-toolbar-title>
          <q-item-section
            side
            class="text-left text-weight-medium"
            style="color: #5a5656; font-size: 15px"
          >
          </q-item-section>
        </q-toolbar>
      </q-header>
    </div>
    <q-page-container>
      <q-page>
        <q-pull-to-refresh @refresh="refresh">
          <!-- Search bar -->
          <q-input
            dense
            bg-color="white"
            class="q-mx-sm q-mt-md shadow-1"
            type="search"
            style="border-radius: 20px"
            rounded
            outlined
            v-model="search"
            label="Cari"
            @update:model-value="searchProduct(search)"
          >
            <template v-slot:prepend>
              <q-icon
                name="search"
                class="self-center"
                size="25px"
                color="grey"
              />
            </template>
          </q-input>

          <!-- Skeleton -->
          <div v-if="isLoad" class="row q-mt-md">
            <div v-for="product in 8" :key="product" class="col-6 q-pa-sm">
              <q-card class="full-width">
                <!--Image -->
                <q-skeleton height="150px" square />
                <div class="q-pa-sm">
                  <!-- Text nama barang -->
                  <q-skeleton type="text" />
                  <q-skeleton type="text" />
                  <q-skeleton type="text" width="100px" />
                  <q-skeleton type="text" width="80px" />
                </div>
              </q-card>
            </div>
          </div>

          <div
            v-else-if="isLoad == false && productLiked.length"
            class="row q-mt-md"
          >
            <div
              v-for="product in productLiked"
              :key="product.id"
              class="col-6 q-pa-sm"
            >
              <q-card
                class="q-pb-sm"
                style="border-radius: 5px"
                @click="$router.push(`/marketplace-detail/${product.id}`)"
              >
                <q-img
                  no-spinner
                  class="bg-white"
                  :src="`${STORAGE_URL}/${product.images[0].src}`"
                  style="height: 150px"
                />
                <q-separator></q-separator>
                <div class="q-px-sm">
                  <div
                    class="text-weight-medium q-pl-xs"
                    style="color: #5f5f5f; font-size: medium"
                  >
                    {{ product.tittle }}
                  </div>
                  <div
                    class="text-caption text-weight-regular q-pl-xs"
                    style="color: #c5c5c5"
                  >
                    {{
                      new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(product.price)
                    }}
                  </div>
                  <div class="text-caption q-pl-xs row q-gutter-x-sm">
                    <div class="self-center">
                      <q-icon name="fas fa-map-marker-alt" color="red" />
                    </div>

                    <div class="self-center">Kota Kudus</div>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
          <!-- Empty Product -->
          <!-- <div
            v-else-if="isLoad == false && !productLiked.length"
            class="text-center justify-center fixed-center full-width"
          >
            <q-img
              no-spinner
              src="~/assets/not-found.gif"
              style="width: 200px"
            />
            <div
              class="text-center justify-center text-weight-medium row"
              style="color: #b1b1b1; font-size: larger"
            >
              Belum ada produk yang disukai
            </div>
          </div> -->
        </q-pull-to-refresh>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      productLiked: [],
      productLikedTemp: [],
      isLoad: false,
      STORAGE_URL: STORAGE_URL,
      search: "",
    };
  },
  computed: {
    auth() {
      return this.$store.getters["Auth/auth"];
    },
  },
  mounted() {
    this.getLikedProductByUser();
  },
  methods: {
    searchProduct(value) {
      console.log('cek id', this.auth.id)
      if (value.length) {
        const payload = {
          id: this.auth.id,
          value: value,
        };
        this.$store
          .dispatch("Product/searchProductLiked", payload)
          .then((res) => {
            // console.log("hasil search", res.data);
            this.productLiked = res.data;
          })
          .catch((err) => {
            this.$q.notify({
                type: "negative",
                message: "Data tidak ditemukan!",
              });
          });
      } else {
        this.getLikedProductByUser();
        // this.button_add_category = true;
      }
    },
    getLikedProductByUser() {
      this.isLoad = true;
      return new Promise((resolve, reject) => {
        let user_id = this.auth.id;
        this.$store
          .dispatch("Product/getLikedProductByUser", user_id)
          .then((res) => {
            this.productLiked = res.data;
            console.log('this.productLiked', this.productLiked)
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    refresh(done) {
      this.getLikedProductByUser().then((res) => {
        if (done) done();
      });
    },
  },
};
</script>

<style></style>
