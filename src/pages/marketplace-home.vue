<template>
  <q-layout class="mbl">
    <q-header
      class="row"
      style="
        background-image: linear-gradient(to right, #ff9ac5, #7900ff);
        border-radius: 0 0 30px 30px;
        height: 75px;
      "
    >
      <div class="col-10 q-mt-md">
        <q-input
          dense
          style="border-radius: 20px; width: 95%"
          class="q-ml-sm bg-white"
          type="search"
          rounded
          outlined
          v-model="search"
          label="Cari Produk"
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
      <div class="col-2 q-pl-sm q-mt-md">
        <q-avatar size="40px">
          <img src="~/assets/Avatar.png" />
        </q-avatar>
      </div>
    </q-header>
    <q-page-container>
      <q-page class="q-px-md">
        <div class="text-caption q-py-sm">Untuk kamu hari ini</div>
        <div class="row">
          <div class="col-6" v-for="product in products" :key="product.id"> 
            <q-card class="q-pb-xl q-mx-sm" @click="$router.push(`/marketplace-detail/${product.id}`)">
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
            </q-card>
          </div>
        </div>

        <!-- Dialog Welcome -->
        <q-dialog v-model="dialogWelcome" persistent>
          <q-card class="full-width">
            <!-- Gif Warning -->
            <div class="row justify-center">
              <div class="row justify-center q-pt-sm">
                <q-img
                  no-spinner
                  src="~/assets/animasi-proses-cuci.gif"
                  style="width: 100px"
                ></q-img>
              </div>

              <div
                class="row q-px-md text-weight-medium q-pt-md"
                style="color: #393939; font-size: 17px"
              >
                SELAMAT DATANG DI MARKETPLACE
              </div>
              <div
                class="row q-px-sm text-weight-medium text-center q-pt-md"
                style="color: #747474; font-size: 12px"
              >
                NOTE: Segala bentuk transaksi di marketplace merupakan tanggung
                jawab pengguna. Laundry digital tidak bertanggung jawab jika
                terdapat penipuan di dalam transaksi.
              </div>
            </div>

            <!-- Button confirm -->
            <div class="row justify-end q-pa-md">
              <q-btn dense flat no-caps v-close-popup @click="dialogWhatsapp = true">
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
            <div class="row justify-center">
              <div class="row justify-center q-pt-sm">
                <q-img
                  no-spinner
                  src="~/assets/animasi-proses-cuci.gif"
                  style="width: 100px"
                ></q-img>
              </div>

              <div
                class="row q-px-md text-weight-medium q-pt-md"
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
              <q-btn dense flat no-caps class="q-ml-sm" @click="$router.push('/marketplace-input-whatsapp')">
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
            <div class="row justify-center">
              <div class="row justify-center q-pt-sm">
                <q-img
                  no-spinner
                  src="~/assets/animasi-proses-cuci.gif"
                  style="width: 100px"
                ></q-img>
              </div>

              <div
                class="row q-px-md text-weight-medium q-pt-md"
                style="color: #393939; font-size: 17px"
              >
                NOMOR TELAH DITAMBAHKAN 
              </div>
              <div
                class="row q-px-sm text-weight-medium text-center q-pt-md"
                style="color: #747474; font-size: 12px"
              >
                Nomor Whatsapp kamu berhasil di tambahkan. jika kamu mau merubahnya bisa akses di menu nomor Whatsapp.
              </div>
            </div>

            <!-- Button confirm -->
            <div class="row justify-end q-pa-md">
              <q-btn dense flat no-caps v-close-popup>
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
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      dialogWelcome: true,
      dialogWhatsapp: false,
      dialogAfterInputWhatsapp: false,
      products: [],
      STORAGE_URL: STORAGE_URL
    };
  },
  mounted(){
    this.getProducts()
  },
  methods:{
    getProducts(){
      this.$store.dispatch("Product/index").then(res => {
        this.products = res.data
      })
    }
  }
};
</script>

<style></style>
