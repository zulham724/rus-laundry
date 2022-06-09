<template>
  <q-layout class="mbl">
    <div class="fixed-top" style="z-index: 999">
      <q-header class="text-center shadow-1">
        <q-toolbar class="bg-white">
          <q-btn
            flat
            round
            @click="$router.push('/marketplace-detail-user-owner')"
          >
            <q-avatar
              size="20px"
              icon="fas fa-arrow-left"
              style="color: black"
            ></q-avatar>
          </q-btn>
          <q-toolbar-title
            class="text-left text-weight-medium"
            style="color: #3a3838; font-size: 17px"
            >Produk Anda</q-toolbar-title
          >
        </q-toolbar>
      </q-header>
    </div>
    <q-page-container>
      <q-page>
        <q-input
          dense
          style="border-radius: 20px; "
          class="q-mx-sm q-mt-sm bg-white shadow-1"
          type="search"
          rounded
          outlined
          v-model="search"
          label="Cari"
          @update:model-value="filterAddProducts(search)"
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
        <div class="q-mx-sm ">
          <q-btn
            v-if="this.Auth.auth.shop"
            class="full-width q-mt-sm"
            style="
              border-radius: 10px;
              background-color: #9b27f1;
              color: white;
            "
            @click="addProduct()"
            no-caps
            label="Tambah Produk"
          ></q-btn>
          <q-btn
            v-if="!this.Auth.auth.shop"
            class="full-width q-mt-sm"
            style="
              border-radius: 10px;
              background-color: #9b27f1;
              color: white;
            "
            @click="mustHaveShop()"
            no-caps
            label="Tambah Produk"
          ></q-btn>
        </div>

        <!-- Skeleton -->
        <div v-if="isLoad">
          <div v-for="n in 4" :key="n" class="row q-my-sm">
            <div class="col-6 q-pa-sm">
              <q-card class="full-width q-pa-md">
                <!--Image -->
                <q-skeleton height="150px" square />

                <!-- Text nama barang -->
                <q-skeleton type="text" />
                <q-skeleton type="text" />
                <q-skeleton type="text" width="100px" />
                <q-skeleton type="text" width="80px" />
              </q-card>
            </div>
            <div class="col-6 q-pa-sm">
              <q-card class="full-width q-pa-md">
                <!--Image -->
                <q-skeleton height="150px" square />

                <!-- Text nama barang -->
                <q-skeleton type="text" />
                <q-skeleton type="text" />
                <q-skeleton type="text" width="100px" />
                <q-skeleton type="text" width="80px" />
              </q-card>
            </div>
          </div>
        </div>

        <div v-else class="row q-my-sm ">
          <div
            class="col-6 q-pa-sm"
            v-for="(product, p) in products"
            :key="product.id"
          >
            <q-card class="q-pa-md" style="min-height: 280px">
              <div style="height: 150px" class="self-center bg-black">
                <q-img
                  v-if="product.images.length"
                  class="bg-white"
                  :src="STORAGE_URL + `/` + product.images[0].src"
                  style="height: 150px"
                >
                  <template v-slot:error>
                    <div
                      class="absolute-full flex flex-center bg-grey-5 text-white"
                    >
                      Gagal mendapatkan Gambar
                    </div>
                  </template>
                </q-img>

                <q-img
                  v-else
                  class="bg-white"
                  style="height: 50%; width: 100%"
                  src="~/assets/ld.png"
                />
              </div>
              <div
                class="text-caption text-weight-medium q-pl-xs"
                style="color: #5f5f5f"
              >
                {{ product.tittle.substring(0, 15) }}..
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
              <!-- <div
                class="text-caption q-pl-xs"
                v-if="product.shop.user.home_address"
              >
                <q-icon name="fas fa-map-marker-alt" color="red" />
                {{ product.shop.user.home_address }}
              </div> -->
              <div class="text-center q-gutter-y-xs">
                <q-btn
                  padding="none"
                  flat
                  dense
                  style="
                    background-color: #9b27f1;
                    width: 90%;
                    color: white;
                    font-size: 12px;
                  "
                  no-caps
                  label="Edit produk"
                  @click="
                    $router.push(
                      `/marketplace-add-product-edit-owner/${product.id}`
                    )
                  "
                ></q-btn>
                <!-- Dialog Hapus Product -->
                <q-dialog v-model="dialog_deleteProduct">
                  <q-card>
                    <q-card-section>
                      <div
                        class="text-weight-bold text-left"
                        style="font-size: 16px"
                      >
                        Hapus Produk?
                      </div>

                      <div
                        class="text-weight-light text-left q-mt-none"
                        style="width: 300px; font-size: 12px"
                      >
                        yakin ingin menghapus produk?
                      </div>
                    </q-card-section>

                    <q-card-actions class="text-primary" vertical>
                      <div class="row justify-end q-x-gutter-sm">
                        <q-btn
                          v-close-popup
                          class="text-white"
                          no-caps
                          label="Batal"
                          flat
                          text-color="grey-8"
                          style="width: 30px; background-color: white"
                        />
                        <q-btn
                          v-close-popup
                          class="text-white"
                          no-caps
                          flat
                          @click="deleteProduct()"
                          label="Oke"
                          style="
                            width: 30px;
                            background-color: #49c2c0;
                            color: white;
                          "
                        />
                      </div>
                    </q-card-actions>
                  </q-card>
                </q-dialog>

                <q-btn
                  padding="none"
                  flat
                  dense
                  style="
                    background-color: #ababab;
                    width: 90%;
                    color: white;
                    font-size: 12px;
                  "
                  no-caps
                  @click="deleteFunction(p, product.id)"
                  label="Hapus"
                ></q-btn>
              </div>
            </q-card>
          </div>
        </div>

        <!-- Dialog Whatsapp -->
        <q-dialog v-model="dialogWhatsapp" persistent>
          <q-card class="full-width">
            <!-- Gif Warning -->
            <div class="justify-center">
              <div class="row justify-center q-pt-sm">
                <q-img
                  no-spinner
                  src="~/assets/animasi-proses-cuci.gif"
                  style="width: 100px"
                ></q-img>
              </div>

              <div
                class="row q-px-md text-weight-medium q-pt-md justify-center"
                style="color: #393939; font-size: 17px"
              >
                MASUKAN NOMOR WHATSAPP
              </div>
              <div
                class="row q-px-sm text-weight-medium text-center q-pt-md"
                style="color: #747474; font-size: 12px"
              >
                Silahkan masukan nomor WhatsApp aktif. Nomor tsb akan digunakan
                sebagai media transaksi oleh penjual dan pembeli.
              </div>
            </div>

            <!-- Button -->
            <div class="row justify-end q-pa-md">
              <!-- Button Abaikan -->
              <q-btn dense flat no-caps v-close-popup>
                <div
                  class="text-weight-bold"
                  style="color: #393939; font-size: 14px"
                >
                  Abaikan
                </div>
              </q-btn>
              <!-- Button Input wa -->
              <q-btn
                dense
                flat
                no-caps
                class="q-ml-sm"
                @click="$router.push('/marketplace-input-whatsapp')"
              >
                <div
                  class="text-weight-bold"
                  style="color: #393939; font-size: 14px"
                >
                  Lanjutkan
                </div>
              </q-btn>
            </div>
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
    ...mapState(["Auth"]),
  },
  data() {
    return {
      products: [],
      STORAGE_URL: STORAGE_URL,
      dialogWhatsapp: false,
      products_temp: [],
      dialog_deleteProduct: false,
      chooseMode: false,
      search: "",
      isLoad: false,

      deleteid: null,
      deleteindex: null,
    };
  },
  mounted() {
    console.log("auth gan", this.Auth.auth);
    this.getProducts();
  },
  methods: {
    mustHaveShop() {
      this.$q.notify({
        position: "bottom",
        message: "Pastikan anda memiliki toko terlebih dahulu",
      });
    },
    deleteFunction(index, id) {
      this.deleteid = null;
      this.deleteindex = null;
      this.deleteid = id;
      this.deleteindex = index;
      console.log("id", id);
      console.log("index", index);
      this.dialog_deleteProduct = true;
    },
    deleteProduct() {
      console.log("id", this.deleteid);
      console.log("index", this.deleteindex);
      this.$store
        .dispatch("MasterProduct/destroy", this.deleteid)
        .then((res) => {
          this.products.splice(this.deleteindex, 1);
          this.$q.notify("Berhasil");
        });
    },
    getProducts() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("MasterProduct/getProductByShop")
          .then((res) => {
            console.log("product", res.data);
            this.products = this.products_temp = res.data;
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    addProduct() {
      if (!this.Auth.auth.contact_number) {
        this.dialogWhatsapp = true;
      } else {
        this.$router.push("/marketplace-add-product-item-owner");
      }
    },
    filterAddProducts(value) {
      this.updateAddProducts(value);
    },
    updateAddProducts(cari) {
      if (cari === "") {
        this.products = this.products_temp;
      }

      const needle = cari.toLowerCase();
      this.products = this.products_temp.filter(
        (v) => v.tittle.toLowerCase().indexOf(needle) > -1
      );
    },
  },
};
</script>

<style></style>
