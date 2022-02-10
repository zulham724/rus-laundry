<template>
  <q-layout class="mbl">
    <q-header class="text-center shadow-1">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: black">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #3a3838; font-size: 17px"
          >Produk Anda
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <q-input
          dense
          style="border-radius: 20px; width: 95%"
          class="q-ml-sm q-mt-md bg-white shadow-1"
          type="search"
          rounded
          outlined
          v-model="search"
          label="Cari"
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
        <div>
          <q-btn
            class="q-ml-md q-mt-md"
            style="
              border-radius: 10px;
              background-color: #9b27f1;
              width: 92%;
              color: white;
            "
            @click="$router.push('/marketplace-add-product-item')"
            no-caps
            label="Tambah Produk"
          ></q-btn>
        </div>
        <div class="row q-mt-md">
          <div class="col-6" v-for="product in products" :key="product.id">
            <q-card class="q-pb-lg q-mx-sm">
              <img
                v-if="product.images.length"
                class="bg-red"
                :src="STORAGE_URL+`/`+product.images[0].src"
                style="height: 150px"
              />
              <img
                v-else
                class="bg-red"
                style="height: 150px"
              />
              <div
                class="text-caption text-weight-medium q-pl-xs"
                style="color: #5f5f5f"
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
              <div
                class="text-subtitle2 text-weight-medium q-pl-xs"
                style="color: #161952"
              >
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(product.price)
                }}
              </div>
              <div class="text-caption q-pl-xs">
                <q-icon name="fas fa-map-marker-alt" color="red" />{{ product.shop.user.home_address }}
              </div>
              <div class="text-center">
                <q-btn
                  padding="none"
                  flat
                  dense
                  style="
                    background-color: #9b27f1;
                    width: 90%;
                    color: white;
                    font-size: 10px;
                  "
                  no-caps
                  label="Edit produk"
                ></q-btn>
                <q-btn
                  padding="none"
                  flat
                  dense
                  style="
                    background-color: #ababab;
                    width: 90%;
                    color: white;
                    font-size: 10px;
                  "
                  no-caps
                  label="Hapus"
                ></q-btn>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      STORAGE_URL: STORAGE_URL
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.$store.dispatch("Product/getProductByShop").then((res) => {
        this.products = res.data;
      });
    },
  },
};
</script>

<style>
</style>