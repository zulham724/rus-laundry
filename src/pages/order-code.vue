<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header class="bg-transparent">
      <q-btn
        @click="$router.push('/')"
        flat
        class="bg-transparent text-subtitle2 text-weight-light float-left q-pa-md"
      >
        <q-icon name="fas fa-arrow-left" />
      </q-btn>
      <div class="text-subtitle2 q-pl-md float-left q-pt-sm q-pa-md">
        Kode Pesanan
      </div>
    </q-header>
    <q-page-container
      style="background-image: linear-gradient(to top left, #179ce7, #a3f2f1)"
    >
      <q-page v-if="order">
        <div class="q-pl-lg q-pt-xl text-white text-body1">
          Cetak Kode QR untuk <br />
          Merubah Status Pesanan
        </div>

        <div
          class="bg-grey-1 shadow-7"
          style="border-radius: 5px;"
          ref="order"
        >
          <div class="text-grey text-caption q-pl-md q-pt-sm">No Pesanan</div>
          <div class="text-subtitle1 q-pl-md">
            {{ order.id }}
          </div>
          <div class="text-center q-pt-md q-pb-sm">
            <vue-qr
              :text="order.id.toString()"
              :callback="getData"
              :qid="order.id"
            ></vue-qr>
          </div>
          <div class="text-caption q-pl-md q-pt-md text-grey">
            Nama Pelanggan
          </div>
          <div class="q-pl-md text-weight-medium">
            {{ order.customer.name }}
          </div>
          <div class="text-caption q-pl-md q-pt-sm text-grey">Paket</div>
          <div
            v-for="service in order.services"
            :key="service.id"
            class="q-pl-md q-pb-md text-weight-medium"
          >
            <div class="q-py-xs">- {{ service.name }}</div>
          </div>
        </div>
        <div class="text-center q-pa-sm">
          <q-btn
            @click="resetOrder()"
            no-caps
            class="bg-grey-9"
            dense
            style="width: 368px; height: 45px; border-radius: 10px"
          >
            <div class="text-white">Cetak</div>
          </q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import vueQr from "vue-qr/src/packages/vue-qr.vue";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
export default {
  components: {
    vueQr,
  },
  data() {
    return {
      order: null,
    };
  },
  methods: {
    getOrder() {
      this.$store.dispatch("Orders/getOrder").then((res) => {
        this.order = res.data;
        console.log(this.order);
      });
    },
    getData(dataUrl, id) {
      console.log(dataUrl, id);
    },
    resetOrder() {
      // this.$store.commit("Orders/delete_order");
      // this.$router.push("/make-an-order");
        // this.print()
      if (this.$q.platform.is.android) {
        window.BTPrinter.connect(
          (data) => {
            console.log("connecting");
            console.log(data);
            this.print();
          },
          (err) => {
            console.log("Error");
            console.log(err);
          },
          "RPP02N"
        );
      } else {
        this.$q.notify("Hanya bisa di android");
      }
    },
    print() {
      htmlToImage
        .toJpeg(this.$refs.order, { quality: 1, backgroundColor: "#FFFFFF", height: 500, width: 350 })
        .then( (dataUrl) => {
          // let res = this.imageToDataUri(dataUrl,300,300)
          // console.log(dataUrl)
          window.BTPrinter.printBase64(
            function (data) {
              console.log("Printing");
              console.log(data);
            },
            function (err) {
              console.log("Error");
              console.log(err);
            },
            dataUrl,
            1
          );
        });
    },
    imageToDataUri(img, width, height) {
      // create an off-screen canvas
      var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d");

      // set its dimension to target size
      canvas.width = width;
      canvas.height = height;

      // draw source image into the off-screen canvas:
      ctx.drawImage(img, 0, 0, width, height);

      // encode image to data-uri with base64 version of compressed image
      return canvas.toDataURL();
    },
  },
  mounted() {
    this.getOrder();
  },
};
</script>

<style></style>
