<template>
  <q-layout class="mbl">
    <q-page-container>
      <q-page v-if="product">
        <q-carousel animated v-model="slide" arrows navigation infinite>
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
        <q-btn
          @click="$router.back()"
          round
          dense
          class="absolute-top-left q-mt-md q-ml-md"
          style="background-color: RGB(0, 0, 50%)"
          size="15px"
        >
          <q-icon color="white" name="fas fa-arrow-left" />
        </q-btn>
        <label style="font-family: roboto; font-size: 23px" class="q-pl-sm"
          >Rp 2.000.000</label
        >
        <div class="float-right q-mt-xs">
          <q-btn size="12px" dense flat
            ><q-icon style="color: #6a6a6a" name="far fa-heart"
          /></q-btn>
          <q-btn class="q-ml-sm" dense flat
            ><Icon style="font-size: 20px; color: #6a6a6a" icon="cil:share"
          /></q-btn>
        </div>
        <div class="q-pb-xs">
          <label
            class="q-py-xs q-px-xs q-mx-sm"
            style="
              font-size: 8px;
              background: rgba(211, 35, 204, 0.63);
              border-radius: 5px;
              color: #ffffff;
            "
            for=""
            >40%</label
          >
          <label
            class=""
            style="text-decoration: line-through; color: #cdcdcd"
            for=""
          >
            {{
              new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(product.price)
            }}
          </label>
        </div>
        {{}}
        <div
          class="q-ml-sm text-subtitle2"
          style="font-size: 20px; color: #5f5f5f"
        >
          {{ product.tittle }}
        </div>
        <div
          class="text-caption q-ml-sm"
          style="font-size: 10px; color: #cdcdcd"
        >
          2M orang suka
        </div>
        <q-separator class="q-mb-sm"> </q-separator>
        <div class="flex">
          <q-avatar class="q-ml-sm q-mt-sm">
            <img src="~/assets/Avatar.png" />
          </q-avatar>
          <div class="column q-ml-sm">
            <label
              v-if="product.shop"
              class=""
              style="font-family: roboto; font-size: 17px; color: #5f5f5f"
              for=""
              >{{ product.shop.name }}
            </label>
            <div>
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
            </div>
            <q-btn
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
            >
          </div>
        </div>
        <q-separator></q-separator>
        <div class="q-ml-sm column">
          <div class="text-subtitle2" style="color: #5f5f5f; font-size: 20px">
            Detail Produk
          </div>
          <div class="row">
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
                  class="text-subtitle2 text-right q-pr-sm"
                >
                  Baru
                </div>
                <div
                  v-else
                  style="color: #cdcdcd"
                  class="text-subtitle2 text-right q-pr-sm"
                >
                  Second
                </div>
                <div
                  style="color: #cdcdcd"
                  class="text-subtitle2 text-right q-pr-sm"
                >
                  {{ product.weight }} KG
                </div>
              </div>
            </div>
          </div>
        </div>
        <q-separator></q-separator>
        <div class="q-ml-sm">
          <div style="font-size: 20px; color: #5f5f5f; font-family: roboto">
            Deskripsi Barang
          </div>
          <div class="q-pb-sm" style="font-size: 10px">
            {{ product.description }}
          </div>
        </div>
        <div class="row">
          <div
            class="col-6 q-pl-sm text-weight-bold q-pb-md"
            style="background-color: #f5f7f9; font-size: 12px"
          >
            Produk Lainnya dari toko ini
          </div>
          <div
            class="col-6 text-right q-pr-sm text-weight-regular q-pb-md"
            style="background-color: #f5f7f9; color: #707070; font-size: 12px"
          >
            Lihat selengkapnya
          </div>
        </div>

        <div class="row" v-if="another_products.length">
          <div
            class="col-6"
            v-for="another_product in another_products"
            :key="another_product.id"
          >
            <q-card
              class="q-pb-xl q-mx-sm"
              @click="detailProduct(another_product.id)"
            >
              <img
                class="bg-red"
                src="~/assets/jualan1.svg"
                style="height: 150px"
              />
              <div
                class="text-caption text-weight-medium q-pl-xs"
                style="color: #5f5f5f"
              >
                {{ another_product.tittle }}
              </div>
              <div
                class="text-caption text-weight-regular q-pl-xs"
                style="color: #c5c5c5"
              >
                Rp.15.000
              </div>
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
              <div class="text-caption q-pl-xs">
                <q-icon name="fas fa-map-marker-alt" color="red" />{{
                  another_product.shop.user.home_address
                }}
              </div>
            </q-card>
          </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[7, 10]">
          <q-btn
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
import { ref } from "vue";

export default {
  props: ["productid"],
  components: {
    Icon,
  },
  data() {
    return {
      slide: ref(1),
      product: null,
      another_products: [],
    };
  },
  mounted() {
    this.getDetailProduct();
  },
  methods: {
    getDetailProduct() {
      this.$store.dispatch("Product/show", this.productid).then((res) => {
        this.product = res.data;
        this.getAnotherProducts(res.data.shop.id);
        this.$forceUpdate()
      });
    },
    getAnotherProducts(id) {
      this.$store.dispatch("Product/getAnotherProducts", id).then((res) => {
        this.another_products = res.data;
        this.$forceUpdate()
      });
    },
    detailProduct(id) {
      this.product = null;
      this.another_products = [];
      this.$router.push(`/marketplace-detail/${id}`);
      this.$nextTick().then(() => {
         this.getDetailProduct();
      });
      this.$forceUpdate();
    },
  },
};
</script>

<style></style>
