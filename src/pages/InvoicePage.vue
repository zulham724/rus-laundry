<template>
  <q-layout>
    <q-page-container
      class="mbl"
      view="lHh lpR fFf"
      style="background-color: #fafafa"
    >
      <q-header class="shadow-1">
        <q-toolbar class="bg-white q-py-md">
          <q-toolbar-title
            class="text-left text-weight-medium"
            style="color: #888888; font-size: 16px"
            >Invoise pesanan</q-toolbar-title
          >
        </q-toolbar>
      </q-header>
      <q-page class="q-pt-lg">
        <q-card class="q-mx-md" v-if="order" id="order">
          <div class="row q-py-md">
            <div
              class="col-6 text-left q-pl-md text-weight-bolder"
              style="font-size: 16px; color: #106571"
            >
              ArdaLaundry
            </div>
            <div
              class="col-6 text-right q-pr-md text-weight-medium"
              style="font-size: 16px"
            >
              #INV0408123
            </div>
          </div>
          <q-separator class="q-mx-sm"></q-separator>
          <div class="row q-pt-md">
            <div
              class="col-8 text-weight-medium q-pl-md"
              style="font-size: 15px"
            >
              Detail Pemesan
            </div>
            <div class="col-4" style="font-size: 13px">Kasir</div>
          </div>
          <div class="row q-pt-xs">
            <div
              class="col-8 text-weight-regular q-pl-md"
              style="font-size: 12px; color: #c9c9c9"
            >
              {{ order.customer.name }}
            </div>
            <div
              class="col-4 text-weight-regular"
              style="font-size: 12px; color: #c9c9c9"
            >
              Indri Lestary
            </div>
          </div>
          <div class="row">
            <div
              class="col-8 text-weight-regular q-pl-md"
              style="font-size: 12px; color: #c9c9c9"
            >
              {{ moment(order.created_at).format("ll") }}
            </div>
            <div
              class="col-4 text-weight-regular"
              style="font-size: 10px; color: #c9c9c9"
            >
              ID : 3149319434
            </div>
          </div>
          <div class="row">
            <div
              class="col-8 text-weight-regular q-pl-md"
              style="font-size: 12px; color: #c9c9c9"
            >
              {{ order.customer.contact_number }}
            </div>
          </div>

          <div class="row q-mx-md q-mt-xl">
            <div
              class="col-4 text-weight-regular"
              style="font-size: 12px; color: #c9c9c9"
            >
              Jenis Pesanan
            </div>
            <div
              class="col-3 text-weight-regular text-center"
              style="font-size: 12px; color: #c9c9c9"
            >
              Harga
            </div>
            <div
              class="col-2 text-weight-regular text-center"
              style="font-size: 12px; color: #c9c9c9"
            >
              Jumlah
            </div>
            <div
              class="col-3 text-weight-regular text-center"
              style="font-size: 12px; color: #c9c9c9"
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
              class="col-4 text-weight-regular"
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
              }}/{{ service.category.service_unit.name }}
            </div>
            <div
              class="col-2 text-weight-regular text-center"
              style="font-size: 10px; color: #313131"
            >
              {{ service.pivot.quantity }}
            </div>
            <div
              class="col-3 text-weight-regular text-center"
              style="font-size: 10px; color: #313131"
            >
              {{
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(service.price*service.pivot.quantity)
              }}
            </div>
          </div>

          <div class="row q-pt-xl q-mx-lg">
            <div
              class="col-12 text-right text-weight-medium"
              style="font-size: 14px; color: #313131"
            >
              Total Harga
            </div>
          </div>
          <q-separator class="q-mx-sm"></q-separator>
          <div class="row q-pb-md">
            <div class="col-6">
              <div
                class="col-6 q-mx-md q-mt-sm"
                style="color: #c9c9c9; font-size: 12px"
              >
                Tanggal Pembayaran
              </div>
              <div class="col-4 q-mx-md" style="color: #31313; font-size: 10px">
                {{ moment(order.updated_at).format('ll') }}
              </div>

              <div
                class="col-6 q-mx-md q-mt-xs"
                style="color: #c9c9c9; font-size: 12px"
              >
                Metode Pembayaran
              </div>
              <div class="col-4 q-mx-md" style="color: #31313; font-size: 10px">
                Uang Tunai
              </div>
            </div>
            <div
              class="col-6 text-right q-pr-lg q-pt-sm text-weight-medium"
              style="color: #313131"
            >
              {{
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(order.total_sum)
              }}
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
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import moment from "moment";

export default {
  props: ["orderid"],
  data() {
    return {
      dialogConfirm: false,
      order: null,
    };
  },
  mounted() {
    this.getOrder();
    // console.log(this.orderid)
  },
  methods: {
    moment() {
      return moment();
    },

    buttonConfirm() {
      this.dialogConfirm = true;
    },
    getOrder() {
      this.$store.dispatch("Orders/show", this.orderid).then((res) => {
        this.order = res.data;
      });
    },
    printOrder() {
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
        this.printDiv('order')
        this.$q.notify("Hanya bisa di android");
      }
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
