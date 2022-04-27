<template>
  <q-layout class="mbl">
    <div class="fixed-top" style="z-index: 999">
      <q-header
        class="row"
        style="
          background-image: linear-gradient(to right, #ff9ac5, #7900ff);
          border-radius: 0 0 30px 30px;
          height: 75px;
        "
      >
        <div class="row full-width q-px-md">
          <div class="col-1 self-center text-center">
            <q-btn
              @click="$router.push('/home-owner')"
              no-caps
              dense
              flat
              style="color: white"
            >
              <q-icon
                size="20px"
                name="fas fa-arrow-left"
                style="color: #ffffff"
              >
              </q-icon>
            </q-btn>
          </div>
          <div class="col-9 self-center justify-center">
            <q-input
              dense
              style="border-radius: 20px; width: 95%"
              class="q-ml-sm bg-white"
              type="search"
              rounded
              outlined
              v-model="search"
              placeholder="Cari Produk"
              @update:model-value="filterProducts(search)"
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
          </div>
          <div class="col-2 self-center text-center" v-if="dataAuth">
            <!--Avatar-->
            <div v-if="!dataAuth.avatar" class="self-center">
              <q-avatar
                @click="$router.push('/marketplace-detail-user')"
                size="50px"
                style="background-color: #fff"
              >
                <q-img no-spinner src="~/assets/ld.png"></q-img>
              </q-avatar>
            </div>
            <div v-else-if="dataAuth.avatar" class="self-center">
              <q-avatar
                @click="$router.push('/marketplace-detail-user')"
                size="50px"
                style="background-color: #fff"
              >
                <q-img
                  no-spinner
                  :src="STORAGE_URL + `/` + dataAuth.avatar"
                ></q-img>
              </q-avatar>
            </div>
            <!-- <q-avatar
              size="50px"
              @click="$router.push('/marketplace-detail-user')"
            >
              <q-img src="~/assets/Avatar.png" no-spinner />
            </q-avatar> -->
          </div>
        </div>
      </q-header>
    </div>
    <q-page-container>
      <q-page class="q-px-md">
        <q-pull-to-refresh @refresh="refresh">
          <!-- Empty Product -->
          <div v-if="emptySearch">
            <q-img no-spinner src="~/assets/animasi-proses-cuci.gif" />
            <div class="text-h6">
              Maaf produk Kosong pindah shopee ae akeh promo
            </div>
          </div>

          <!-- Skeleton -->
          <div v-if="isLoad">
            <div class="row q-my-md" v-for="n in 4" :key="n">
              <div class="col-6 q-px-sm">
                <q-card class="full-width q-pb-xl">
                  <q-item class="q-pa-none q-ma-none full-width">
                    <!-- Image -->
                    <q-card-section class="full-width q-pa-none">
                      <q-skeleton class="full-width" height="150px" />
                    </q-card-section>
                  </q-item>
                  <div class="q-px-sm q-pt-xs">
                    <!-- Nama produk -->
                    <q-skeleton type="text" height="20px" />
                    <q-skeleton type="text" height="20px" />
                    <!-- Harga Produk -->
                    <q-skeleton type="text" width="90px" height="22px" />
                    <!-- Location -->
                    <q-skeleton type="text" width="60px" height="18px" />
                  </div>
                </q-card>
              </div>
              <div class="col-6 q-px-sm">
                <q-card class="full-width q-pb-xl">
                  <q-item class="q-pa-none q-ma-none full-width">
                    <!-- Image -->
                    <q-card-section class="full-width q-pa-none">
                      <q-skeleton class="full-width" height="150px" />
                    </q-card-section>
                  </q-item>
                  <div class="q-px-sm q-pt-xs">
                    <!-- Nama produk -->
                    <q-skeleton type="text" height="20px" />
                    <q-skeleton type="text" height="20px" />
                    <!-- Harga Produk -->
                    <q-skeleton type="text" width="90px" height="22px" />
                    <!-- Location -->
                    <q-skeleton type="text" width="60px" height="18px" />
                  </div>
                </q-card>
              </div>
            </div>
          </div>

          <div v-else>
            <div class="text-caption q-py-sm">Untuk kamu hari ini</div>
            <div class="row">
              <div class="col-6" v-for="product in products" :key="product.id">
                <q-card
                  class="q-pb-md q-mx-sm q-my-sm"
                  @click="
                    $router.push(`/marketplace-detail-owner/${product.id}`)
                  "
                >
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
                  <div
                    class="row q-pt-md justify-center text-center self-center"
                    v-else
                    style="
                      height: 150px;
                      display: block;
                      width: 100%;
                      background-color: #fafafa;
                    "
                  >
                    <q-avatar text-color="white" size="100px">
                      <q-img
                        width="200px"
                        no-spinner
                        src="~/assets/avatar-box.png"
                        alt="avatar-box"
                      />
                    </q-avatar>
                    <div
                      class="justify-center text-center self-center text-weight-medium"
                      style="font-size: x-small"
                    >
                      Tidak ada gambar
                    </div>
                  </div>
                  <div
                    class="text-caption text-weight-medium q-pl-xs"
                    style="color: #5f5f5f"
                  >
                    {{ product.tittle }}
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
                  <div
                    class="text-caption q-pl-xs"
                    v-if="product.shop.user.home"
                  >
                    <q-icon name="fas fa-map-marker-alt" color="red" />{{
                      product.shop.user.home_address
                    }}
                  </div>
                </q-card>
              </div>
            </div>
          </div>

          <!-- Dialog Welcome -->
          <q-dialog v-model="dialogWelcome" persistent>
            <q-card class="full-width">
              <!-- Gif Warning -->
              <div class="justify-center full-width">
                <div class="row justify-center q-pt-sm">
                  <q-img
                    no-spinner
                    src="~/assets/alert_gif.gif"
                    style="width: 100px"
                  ></q-img>
                </div>

                <div
                  class="row text-weight-medium q-pt-md text-center justify-center"
                  style="color: #393939; font-size: 17px"
                >
                  SELAMAT DATANG DI MARKETPLACE
                </div>
                <div
                  class="row q-px-sm text-weight-medium text-center q-pt-md"
                  style="color: #747474; font-size: 12px"
                >
                  NOTE: Segala bentuk transaksi di marketplace merupakan
                  tanggung jawab pengguna. Laundry digital tidak bertanggung
                  jawab jika terdapat penipuan di dalam transaksi.
                </div>
              </div>

              <!-- Button confirm -->
              <div class="row justify-end q-pa-md">
                <q-btn dense flat no-caps v-close-popup @click="openDialogWA()">
                  <div
                    class="text-weight-bold"
                    style="color: #393939; font-size: 14px"
                  >
                    Oke
                  </div>
                </q-btn>
              </div>
            </q-card>
          </q-dialog>

          <!-- Dialog Whatsapp -->
          <q-dialog v-model="dialogWhatsapp" persistent>
            <q-card class="full-width">
              <!-- Gif Warning -->
              <div class="justify-center">
                <div class="row justify-center q-pt-sm">
                  <q-img
                    no-spinner
                    src="~/assets/wa_gif.gif"
                    style="width: 100px"
                  ></q-img>
                </div>

                <div
                  class="row q-px-md text-weight-medium q-pt-md text-center justify-center"
                  style="color: #393939; font-size: 17px"
                >
                  MASUKKAN NOMOR WHATSAPP
                </div>
                <div
                  class="row q-px-sm text-weight-medium text-center q-pt-md"
                  style="color: #747474; font-size: 12px"
                >
                  Silahkan masukan nomor WhatsApp aktif. Nomor tsb akan
                  digunakan sebagai media transaksi oleh penjual dan pembeli.
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
                  @click="$router.push('/marketplace-owner-input-whatsapp')"
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

          <!-- Dialog After input Whatsapp -->
          <q-dialog v-model="dialogAfterInputWhatsapp" persistent>
            <q-card class="full-width">
              <!-- Gif Warning -->
              <div class="justify-center">
                <div class="row justify-center q-pt-sm">
                  <q-img
                    no-spinner
                    src="~/assets/wa_gif.gif"
                    style="width: 100px"
                  ></q-img>
                </div>

                <div
                  class="row q-px-md text-weight-medium q-pt-md text-center justify-center"
                  style="color: #393939; font-size: 17px"
                >
                  NOMOR TELAH DITAMBAHKAN
                </div>
                <div
                  class="row q-px-sm text-weight-medium text-center q-pt-md"
                  style="color: #747474; font-size: 12px"
                >
                  Nomor Whatsapp kamu berhasil di tambahkan. jika kamu mau
                  merubahnya bisa akses di menu nomor Whatsapp.
                </div>
              </div>

              <!-- Button confirm -->
              <div class="row justify-end q-pa-md">
                <q-btn dense flat no-caps v-close-popup @click="openDialogWA()">
                  <div
                    class="text-weight-bold"
                    style="color: #393939; font-size: 14px"
                  >
                    Oke
                  </div>
                </q-btn>
              </div>
            </q-card>
          </q-dialog>
        </q-pull-to-refresh>
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
      isLoad: false,
      dialogWelcome: true,
      dialogWhatsapp: false,
      dialogAfterInputWhatsapp: false,
      products: [],
      products_temp: [],
      search: "",
      emptySearch: false,
      //ini untuk menyimpan data auth
      dataAuth: null,
      STORAGE_URL: STORAGE_URL,
    };
  },
  mounted() {
    this.dataAuth = this.Auth.auth;
    console.log("ini dataAuth", this.dataAuth);
    this.getProducts();
  },
  methods: {
    filterProducts(value) {
      this.updateProducts(value);
    },
    updateProducts(cari) {
      if (cari === "") {
        this.products = this.products_temp;
      }

      const needle = cari.toLowerCase();
      this.products = this.products_temp.filter(
        (v) => v.tittle.toLowerCase().indexOf(needle) > -1
      );
    },
    openDialogWA() {
      if (!this.Auth.auth.contact_number) {
        this.dialogWhatsapp = true;
      }
    },
    getProducts() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("MasterProduct/index")
          .then((res) => {
            this.products = this.products_temp = res.data;
            console.log("produk", res);
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
      this.getProducts().then((res) => {
        if (done) done();
      });
    },
  },
};
</script>

<style></style>
