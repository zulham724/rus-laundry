<template>
  <q-layout>
    <q-page-container
      class="mbl"
      view="lHh lpR fFf"
      style="background-color: #fafafa"
    > 
    <!-- tombol back dan judul invoice pesanan -->
      <q-header class="shadow-1">
        <q-toolbar class="bg-white q-py-md">
          <q-btn flat round size="10px" @click="$router.back()">
            <q-avatar
              size="25px"
              icon="fas fa-arrow-left"
              style="color: #888888"
            >
            </q-avatar
            >{{}}
          </q-btn>
          <q-toolbar-title
            class="text-left text-weight-medium"
            style="color: #888888; font-size: 16px"
            >Invoice pesanan</q-toolbar-title
          >
        </q-toolbar>
      </q-header>
      <q-page class="q-pt-lg">
        <q-card class="q-mx-md" v-if="order" id="printpage" ref="printpage">
          <div class="row q-py-md">
            <div
              class="col-6 text-left q-pl-md text-weight-bolder"
              style="font-size: 16px; color: #106571"
            >
              <q-img
                src="~/assets/laundry-digital-logo.png"
                style="width: 50%"
              />
            </div>
            <div
              class="col-6 text-right q-pr-md text-weight-medium self-center"
              style="font-size: 16px"
            >
              #INV0408123
            </div>
          </div>
          <q-separator class="q-mx-sm"></q-separator>
          <div class="row q-pt-md">
            <div class="col-6 q-pl-xs self text-left">
              <div class="q-pl-xs self text-left" style="font-size: 15px">
                Nama Pemesan
              </div>
              <div class="q-pl-xs text-left" style="font-size: 12px">
                {{ order.customer.name }}
              </div>
            </div>
            <div class="col-6 q-pr-xs text-right">
              <div class="q-pr-xs self text-right" style="font-size: 15px">
                Tanggal pemesanan
              </div>
              <div class="q-pl-xs self text-right" style="font-size: 12px">
                {{ moment(order.created_at).format("ll") }}
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6 q-pl-xs self text-left">
              <div class="q-pl-xs self text-left" style="font-size: 15px">
                No Telepon
              </div>
              <div class="q-pl-xs text-left" style="font-size: 12px">
                {{ order.customer.contact_number }}
              </div>
            </div>
            <div class="col-6 q-pr-xs text-right">
              <div class="q-pr-xs self text-right" style="font-size: 15px">
                Total Harga
              </div>
              <div class="q-pl-xs self text-right" style="font-size: 12px">
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(order.total_sum)
                }}
              </div>
            </div>
          </div>

          <div class="row q-mx-md q-mt-lg">
            <div class="col-3 text-weight-regular" style="font-size: 12px">
              Layanan
            </div>
            <div
              class="col-3 text-weight-regular text-center"
              style="font-size: 12px"
            >
              Harga
            </div>
            <div
              class="col-3 text-weight-regular text-center"
              style="font-size: 12px"
            >
              Jumlah
            </div>
            <div
              class="col-3 text-weight-regular text-center"
              style="font-size: 12px"
            >
              Subtotal
            </div>
          </div>
          <q-separator class="q-mx-sm"></q-separator>
          <div
            class="row q-mx-md"
            v-for="service in order.services"
            :key="service.id"
          >
            <div
              class="col-3 text-weight-regular"
              style="font-size: 10px; color: #313131"
            >
              {{ service.name }}
            </div>
            <div
              class="col-3 text-weight-regular text-center"
              style="font-size: 10px; color: #313131"
            >
              {{
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(service.price)
              }}/{{ service.service_unit }}
            </div>
            <div
              class="col-3 text-weight-regular text-center"
              style="font-size: 10px; color: #313131"
            >
              {{ service.quantity }}
            </div>
            <div
              class="col-3 text-weight-regular text-center"
              style="font-size: 10px; color: #313131"
            >
              {{
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(service.price * service.quantity)
              }}
            </div>
          </div>

          <q-separator class="q-mx-sm q-mt-xl"></q-separator>
          <div class="row q-pb-md">
            <div class="col-6">
              <div class="col q-mx-md q-mt-sm" style="font-size: 15px">
                Kasir
              </div>
              <div class="col q-mx-md" style="color: #31313; font-size: 12px">
                {{ order.employee.name }}
              </div>
              <div class="col q-mx-md q-mt-sm" style="font-size: 12px">
                ID : {{ order.employee.id }}
              </div>
            </div>
            <div class="col-6 text-right">
              <div class="col q-mx-md q-mt-sm" style="font-size: 15px">
                Total Harga
              </div>
              <div class="col q-mx-md" style="color: #31313; font-size: 12px">
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(order.total_sum)
                }}
              </div>
            </div>
          </div>
        </q-card>
        <div class="row q-mt-lg absolute-bottom">
          <q-btn
            @click="buttonConfirm()"
            flat
            no-caps
            class="full-width q-py-sm text-weight-regular"
            label="Cetak Invoice"
            style="color: #fafafa; background-color: #49c2c0; font-size: 16px"
          ></q-btn>
        </div>

        <q-dialog v-model="dialogConfirm">
          <q-card style="width: 300px">
            <q-card-section>
              <div class="text-weight-bold text-left" style="font-size: 15px">
                Cetak pesanan
              </div>
              <div class="text-weight-light text-left" style="font-size: 10px">
                yakin ingin mencetak paket?
              </div>
            </q-card-section>

            <q-card-actions>
              <div class="row col-12">
                <div class="col-9 text-right q-pr-sm">
                  <q-btn
                    class="shadow-1"
                    no-caps
                    flat
                    label="Batal"
                    style="color: #888888"
                    v-close-popup
                  />
                </div>
                <div class="col-3 text-left q-pr-sm">
                  <q-btn
                    :loading="loading"
                    :disable="loading"
                    @click="printOrder()"
                    class="shadow-1"
                    no-caps
                    flat
                    label="Cetak"
                    style="background-color: #49c2c0; color: white"
                  />
                </div>
              </div>
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="dialogPrinter" persistent>
          <q-card style="width: 300px">
            <q-card-section>
              <div class="text-weight-bold text-center" style="font-size: 15px">
                Belum ada printer yang terhubung
              </div>
              <div
                class="text-weight-light text-center q-px-md"
                style="font-size: 12px"
              >
                Hubungkan device ke printer terlebih dahulu sebelum anda
                mencetak invoice
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import moment from "moment";
import * as htmlToImage from "html-to-image";
import Error404Vue from "./Error404.vue";
import PreviewPhotoComponentVue from "src/components/PreviewPhotoComponent.vue";
import MustConnectPrinterComponentVue from "src/components/MustConnectPrinterComponent.vue";

export default {
  props: ["orderid"],
  data() {
    return {
      dialogConfirm: false,
      order: null,
      loading: false,
      dialogPrinter: false,
      disableBtn: false,
      connectedPrinterProfile: null,
      id: null,
      printerList: [],
    };
  },
  mounted() {
    this.getOrder().then((res) => {
      // console.log(this.$refs.printpage.$el.clientHeight);
      console.log('ini data order',this.order);
    });


  },
  methods: {
    //untuk menampilkan dialog saat klik tombol cetak invoice
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

    moment() {
      return moment();
    },

    getOrder() {
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch("Orders/show", this.orderid)
          .then((res) => {
            this.order = res.data;
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    printDiv(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;
    },

    print() {
      return new Promise((resolve, reject) => {
        console.log(document.getElementById("printpage"));
        htmlToImage
          .toJpeg(document.getElementById("printpage"), {
            quality: 1,
            backgroundColor: "#FFFFFF",
            height: this.$refs.printpage.$el.clientHeight,
            width: this.$refs.printpage.$el.clientWidth,
          })
          .then((dataUrl) => {
            // let res = this.imageToDataUri(dataUrl,300,300)
            // console.log(dataUrl);
            this.$q.dialog({
              component: PreviewPhotoComponentVue,
              componentProps: {
                src: dataUrl,
              },
            });
            window.BTPrinter.printBase64(
              (data) => {
                console.log("Printing");
                console.log(data);
                resolve(data);
              },
              (err) => {
                console.log("Error");
                console.log(err);
                reject(err);
              },
              dataUrl,
              0
            );
          });
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
    printDiv(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;

      window.print();

      document.body.innerHTML = originalContents;
    },
  },
};
</script>

<style></style>
