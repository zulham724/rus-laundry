<template>
  <q-layout class="mbl">
    <q-page-container>
      <q-page v-if="product">
        <q-carousel swipeable  animated v-model="slide" arrows navigation v-if="product.images">
          <q-carousel-slide
            v-for="(image, i) in product.images"
            :key="image.id"
            :name="i"
            :img-src="`${STORAGE_URL}/${image.src}`"
          />
        </q-carousel>
        <q-carousel swipeable  animated v-model="slide2" arrows navigation v-else>
          <q-carousel-slide name="empty"
          >
          <div class="q-mt-md text-center" style="color: black">
           Tidak ada gambar
          </div>
          </q-carousel-slide>
          
        </q-carousel>
        <q-btn
          @click="$router.back()"
          round
          dense
          class="absolute-top-left q-mt-md q-ml-md "
          style="background-color: rgba(0, 0, 0, 50%)"
          
        >
          <q-icon color="white" name="fas fa-arrow-left" size="20px"/>
        </q-btn>
        <label style="font-family: roboto; font-size: 23px" class="q-pl-sm">
          {{
            new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(product.price)
          }}
        </label>
        <div class="float-right q-mt-xs ">
          <q-btn
            size="16px"
            dense
            round
            flat
            :color="product.liked_count ? 'red' : 'grey'"
            :icon="product.liked_count ? 'favorite' : 'favorite_border'"
            @click="product.liked_count ? dislike() : like()"
          >
          </q-btn>
          <!-- <q-btn class="q-ml-sm" dense flat
            ><Icon style="font-size: 20px; color: #6a6a6a" icon="cil:share"
          /></q-btn> -->
        </div>
        <div
          class="q-ml-sm text-subtitle2"
          style="font-size: 20px; color: #5f5f5f"
        >
          {{ product.tittle }}
        </div>
        <div
          v-if="!product.likes_count"
          class="text-caption q-ml-sm"
          style="font-size: 10px; color: #cdcdcd"
        >
          0 orang suka
        </div>
        <div
          v-if="product.likes_count"
          class="text-caption q-ml-sm"
          style="font-size: 10px; color: #cdcdcd"
        >
          {{ product.likes_count }} orang suka
        </div>
        <q-separator> </q-separator>
        <div class="flex">
          <q-avatar class="q-ma-sm">
            <img :src="STORAGE_URL + `/` + product.shop.user.avatar" />
          </q-avatar>
          <div class="column q-ma-sm  self-center">
            <label
              v-if="product.shop"
              style="font-family: roboto; font-size: 17px; color: #5f5f5f"
              >{{ product.shop.name }}
            </label>
            <!-- <div>
              <img
                style="width: 10px; height: 12px"
                src="~/assets/locate.svg"
                alt=""
              />
              <label
                v-if="product.shop"
                class="text-caption q-ml-xs"
                style="font-size: 13px; font-family: roboto; color: #c5c5c5"
                >{{ product.shop.user.home_address }}</label
              >
            </div> -->
            <!-- <q-btn
              class="q-mb-sm"
              no-caps
              dense
              style="
                background: rgba(211, 35, 204, 0.63);
                color: #ffffff;
                width: 49px;
              "
              size="70%"
              >Ikuti</q-btn
            > -->
          </div>
        </div>
        <q-separator></q-separator>
        <div class="column ">
          <div class="text-subtitle2 q-ma-sm" style="color: #5f5f5f; font-size: 20px">
            Detail Produk
          </div>
          <div class="row q-ma-sm">
            <div class="col-3">
              <div class="column">
                <div style="color: #cdcdcd" class="text-subtitle2">Kondisi</div>
                <div style="color: #cdcdcd" class="text-subtitle2">Berat</div>
              </div>
            </div>
            <div class="col-6"></div>
            <div class="col-3">
              <div class="column">
                <div
                  v-if="product.is_new"
                  style="color: #cdcdcd"
                  class="text-subtitle2 text-right"
                >
                  Baru
                </div>
                <div
                  v-else
                  style="color: #cdcdcd"
                  class="text-subtitle2 text-right"
                >
                  Second
                </div>
                <div
                  style="color: #cdcdcd"
                  class="text-subtitle2 text-right "
                >
                  {{ product.weight }} KG
                </div>
              </div>
            </div>
          </div>
        </div>
        <q-separator></q-separator>
        <div>
          <div class="text-subtitle2 q-ma-sm" style="color: #5f5f5f; font-size: 20px">
            Deskripsi Barang
          </div>
          <div class="q-ma-sm" style="font-size: 10px; color:#CDCDCD">
            {{ product.description }}
          </div>
        </div>
        <div class="row" v-if="another_products.length">
          <div
            class="col-6 q-pl-sm q-py-sm text-weight-bold"
            style="background-color: #f5f7f9; font-size: 12px"
          >
            Produk Lainnya dari toko ini
          </div>
          <div
            class="col-6 text-right q-pr-sm q-py-sm text-weight-regular "
            style="background-color: #f5f7f9; color: #707070; font-size: 12px"
          >
            Lihat selengkapnya
          </div>
        </div>

        <div class="row " style="background-color: #f5f7f9;" v-if="another_products.length">
          <div
            class="col-6 q-pa-md "
            v-for="another_product in another_products"
            :key="another_product.id"
          >
            <q-card
              v-if="another_product.id != product.id"
              class="q-pb-md"
              style="border-radius: 8px"
              @click="detailProduct(another_product.id)"
            >
              <q-img
                v-if="another_product.images.length"
                class="bg-white"
                :src="STORAGE_URL + `/` + another_product.images[0].src"
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
              <img v-else class="bg-red" style="height: 150px" />
              <div
                class="text-caption text-weight-medium q-pl-xs"
                style="color: #5f5f5f"
              >
                {{ another_product.tittle }}
              </div>
              <!-- <div
                class="text-caption text-weight-regular q-pl-xs"
                style="color: #c5c5c5"
              >
                Rp.15.000
              </div> -->
              <div
                class="text-subtitle2 text-weight-medium q-pl-xs"
                style="color: #161952"
              >
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(another_product.price)
                }}
              </div>
              <!-- <div class="text-caption q-pl-xs">
                <q-icon name="fas fa-map-marker-alt" color="red" />{{
                  another_product.shop.user.home_address
                }}
              </div> -->
            </q-card>
          </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[7, 10]">
          <q-btn
            @click="submitMessage()"
            no-caps
            color="green"
            icon="fab fa-whatsapp"
            label="Pesan Sekarang"
            style="
              width: 240px;
              height: 45px;
              background-color: #49c958;
              border-radius: 0 15px 0 15px;
            "
          />
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { Icon } from "@iconify/vue";
import { mapState } from "vuex";
export default {
  props: ["productid"],
  computed: {
    ...mapState(["Auth"]),
  },
  components: {
    Icon,
  },
  data() {
    return {
      slide: 0,
      slide2: "empty",
      product: null,
      another_products: [],
      STORAGE_URL: STORAGE_URL,
      message: "",
      order: {},
      APP_URL: APP_URL
    };
  },
  mounted() {
    this.detailProduct(this.productid);
  },
  methods: {
    likeList() {
      product.likes_count;
    },
    getRoutePath() {
      let props = this.$router.resolve({
        name: "UserInvoice",
        params: { order_ref: this.order.order_ref },
      });

      return location.origin + props.href;
    },
    submitMessage() {
      // return console.log(encodeURI(this.message))
      this.order.shop_id = this.product.shop.id;
      this.order.customer_id = this.Auth.auth.id;
      this.order.product_id = this.product.id;
      this.order.quantity = 1;
      this.order.total_price = this.product.price;

      this.$store.dispatch("Orders/orderProduct", this.order).then((res) => {
        this.setTextMessage();

        let url = `https://api.whatsapp.com/send?phone=${this.formatPhoneNumber(
          this.product.shop.user.contact_number
        )}&text=${encodeURI(this.message)}`;
        window.open(url, "_blank");
      });
    },
    money(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    },
    formatPhoneNumber(number) {
      // console.log(typeof(String(number)))
      let formatted = String(number).replace(/\D/g, "");

      if (formatted.startsWith("0")) {
        formatted = "+62" + formatted.substr(1);
      }

      if (formatted.startsWith("62")) {
        formatted = "+62" + formatted.substr(2);
      }

      return formatted;
    },
    setTextMessage() {
      if (this.order) {
        let url = `${this.APP_URL}/marketplace-detail/${this.product.id}`;
        let tmp = `
          Order via Whatsapp
          \nNama Produk : ${this.product.tittle}
          \nHarga : ${this.money(this.product.price)}
          \nJumlah : ${1}
          \nUrl : ${url}`;
        this.message = tmp;
      }
    },
    async getDetailProduct() {
      await this.$store.dispatch("Product/show", this.productid).then((res) => {
        this.product = res.data;
        this.getAnotherProducts(res.data.shop.id);
        console.log('ini data', res.data)
      });
    },
    getAnotherProducts(id) {
      this.$store.dispatch("Product/getAnotherProducts", id).then((res) => {
        this.another_products = res.data;
        // console.log('ini data lain', this.another_products)
        this.$forceUpdate();
      });
    },
    async detailProduct(id) {
      this.product = null;
      this.another_products = [];
      await this.$router.push(`/marketplace-detail/${id}`);
      this.$nextTick().then(() => {
        this.getDetailProduct();
      });
      this.$forceUpdate();
    },
    like() {
      this.product.liked_count = 1;
      this.$store.dispatch("Product/like", this.product.id).then((res) => {
        this.product.liked_count = res.data.liked_count;
        this.product.likes_count = res.data.likes_count;
        this.$forceUpdate();
      });
    },
    dislike() {
      this.product.liked_count = 0;
      this.$store.dispatch("Product/dislike", this.product.id).then((res) => {
        this.product.liked_count = res.data.liked_count;
        this.product.likes_count = res.data.likes_count;
        this.$forceUpdate();
      });
    },
  },
};
</script>

<style></style>
