<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header class="bg-transparent">
      <div class="row">
        <div class="col-2">
          <q-btn
            @click="$router.back()"
            flat
            class="text-subtitle2 text-weight-light float-left q-pa-md"
          >
            <q-icon name="fas fa-arrow-left" size="20px"/>
          </q-btn>
        </div>
        <div class="col-10">
          <div class="text-subtitle2q-pl-md float-left q-pt-sm q-pa-md">
            Kode Pesanan
          </div>
        </div>
      </div>
    </q-header>
    <q-page-container
      style="background-image: linear-gradient(to top left, #179ce7, #a3f2f1)"
    >
      <q-page v-if="order">
        <div
          class="bg-white q-mx-sm shadow-7"
          style="border-radius: 15px"
          ref="order"
          id="order"
        >
          <div class="full-width text-center">
            <q-img
              src="~/assets/laundry-digital-logo.png"
              width="20%"
              class="q-my-md"
            />
          </div>
          <div class="q-pl-md">No Pesanan</div>
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
          <div class="row">
            <div class="col">
              <div class="text-caption q-pl-md text-grey">Nama Pelanggan</div>
              <div class="q-pl-md text-weight-medium">
                {{ order.customer.name }}
              </div>
            </div>
            <div class="col">
              <div class="text-caption q-pl-md text-grey">
                Tanggal Pemesanan
              </div>
              <div class="q-pl-md text-weight-medium">
                {{ moment(order.created_at).format("ll") }}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="text-caption q-pl-md text-grey">No Telepon</div>
              <div class="q-pl-md text-weight-medium">
                {{ order.customer.contact_number }}
              </div>
            </div>
            <div class="col">
              <div class="text-caption q-pl-md text-grey">Total Harga</div>
              <div class="q-pl-md text-weight-medium">
                {{ order.total_sum }}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col q-py-md">
              <div class="text-center text-grey  q-px-sm">
                Cek status pesanan anda melalui link dibawah
              </div>
              <div class="text-center text-weight-medium q-px-sm">
                {{link}}
              </div>
            </div>
          </div>
        </div>
        <div class="text-center q-pa-sm">
          <q-btn
            @click="buttonConfirm()"
            :disable="loading"
            no-caps
            class="bg-grey-9 q-mt-sm"
            dense
            style="width: 80%; height: 45px; border-radius: 10px"
          >
            <div class="text-white">Cetak</div>
          </q-btn>
        </div>
        <div class="bg-red"></div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import moment from "moment";
import vueQr from "vue-qr/src/packages/vue-qr.vue";
import * as htmlToImage from "html-to-image";
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import MustConnectPrinterComponentVue from "src/components/MustConnectPrinterComponent.vue";

export default {
  props: ["orderid"],
  components: {
    vueQr,
  },
  data() {
    return {
      order: null,
      loading: false,
      link: null,
      APP_URL: APP_URL,
    };
  },
  mounted() {
    this.getOrder(this.orderid);
    console.log('order-code-orderid',this.orderid);
  },
  methods: {
    moment() {
      return moment();
    },
    getOrder(orderid) {
      console.log('getOrder',orderid);
      this.$store.dispatch("Orders/getOrder", orderid).then((res) => {
        this.order = res.data;
        console.log('sadfadsf', res.data)
        console.log('asd',this.order);
        this.link = `${this.APP_URL}/preview-detail-transaksi-3/${this.order.id}`;
      });
    },
    getData(dataUrl, id) {
      console.log(dataUrl, id);
    },
    printDiv(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;
    },
    buttonConfirm() {
      if (this.$q.platform.is.android) {
        this.$store
          .dispatch("Printer/run")
          .then((res) => {
            if (res.connected) {
              this.print()
            } else {
              this.dialogPrinterMustConnect();
            }
          })
          .catch((err) => {
            this.dialogPrinterMustConnect();
          });
      } else {
        this.printDiv()
      }
    },
    //untuk menampilkan dialog harus konek ke printer
    dialogPrinterMustConnect() {
      this.$q.dialog({
        component: MustConnectPrinterComponentVue,
        componentProps: {
          sendId: this.id,
        },
      });
    },
    print() {
      htmlToImage
        .toJpeg(this.$refs.order, {
          quality: 1,
          backgroundColor: "#FFFFFF",
          height: 500,
          width: 350,
        })
        .then((dataUrl) => {
          // let res = this.imageToDataUri(dataUrl,300,300)
          // console.log(dataUrl)
          this.$store.dispatch("Printer/print",dataUrl)
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
  
};
</script>

<style></style>
