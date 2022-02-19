<template view="lHh lpR fFf">
  <q-layout class="mbl" style="background-color: #fafafa">
    <q-page>
      <!--Header Pagi-->
      <div
        v-if="backgroundSetter >= 0 && backgroundSetter <= 10"
        class="row"
        style="
          min-height: 220px;
          background-image: linear-gradient(
            to top right,
            #ffffff,
            #ffecc1,
            #b4e6ea
          );
        "
      >
        <div class="row full-width">
          <!--Waktu sekarang-->
          <div class="q-py-md" style="height: 80px; min-width: 75vw">
            <div
              class="row full-width bg-white q-pr-xs shadow-3 mbl-child"
              style="
                width: 80px;
                height: 50px;
                border-radius: 0px 50px 50px 0px;
              "
            >
              <!--Image-->
              <div class="self-center">
                <q-img
                  no-spinner
                  src="~/assets/cuaca-pagi.svg"
                  style="width: 80px; height: 50px"
                ></q-img>
              </div>
              <div
                class="row col justify-end"
                style="border-radius: 0px 50px 50px 0px"
              >
                <!--Text-->
                <div class="self-center">
                  <div
                    class="text-weight-bold"
                    style="color: #ffa85a; font-size: 15px"
                  >
                    Selamat Pagi
                  </div>
                  <div
                    class="text-weight-medium"
                    style="color: #313131; font-size: 13px"
                  >
                    IndonesiaLaundry
                  </div>
                </div>

                <!--Avatar-->
                <div class="self-center q-pl-sm">
                  <q-avatar>
                    <q-img
                      no-spinner
                      src="~/assets/Avatar.png"
                      size="40px"
                    ></q-img>
                  </q-avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--info saldo-->
        <div
          class="full-width row bg-white"
          style="opacity: 0.8; height: 100px"
        >
          <div
            class="col-6 q-px-sm self-center"
            style="
              border-right: solid;
              border-width: 2px;
              border-color: #f3f3f3;
              opacity: 1;
            "
          >
            <div class="full-width">
              <div
                class="text-weight-medium"
                style="color: #313131; font-size: 15px"
              >
                Saldo masuk hari ini
              </div>
              <div
                class="text-weight-medium"
                style="color: #a3a3a3; font-size: 12px"
              >
                {{ moment().format("DD MMMM YYYY") }}
              </div>
              <div v-if="isLoad">
                <q-skeleton type="text" />
              </div>
              <div
                v-else
                class="text-weight-bold"
                style="color: #313131; font-size: 18px"
              >
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(total_profit)
                }}
              </div>
            </div>
          </div>
          <div class="col-6 q-px-sm self-center" style="opacity: 1">
            <div class="full-width">
              <div
                class="text-weight-medium"
                style="color: #313131; font-size: 15px"
              >
                Saldo keluar hari ini
              </div>
              <div
                class="text-weight-medium"
                style="color: #a3a3a3; font-size: 12px"
              >
                {{ moment().format("DD MMMM YYYY") }}
              </div>
              <div v-if="isLoad">
                <q-skeleton type="text" />
              </div>
              <div
                v-else
                class="text-weight-bold"
                style="color: #313131; font-size: 18px"
              >
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(total_spend)
                }}
              </div>
            </div>
          </div>
        </div>

        <!-- Scan Area -->
        <div class="row full-width">
          <div class="col-6">
            <q-btn
              @click="ScanAttendance()"
              style="
                background-image: linear-gradient(to bottom right, #f6d365, #fda085);
                width: 100%;
                height: 50px;
                color: white;
              "
              flat
              no-caps
            >
              <div class="row self-center">
                <q-img
                  no-spinner
                  src="~/assets/icon_scan_button.svg"
                  class="self-center"
                  style="width: 40px"
                ></q-img>
                <div
                  class="text-weight-medium self-center q-pl-sm"
                  style="color: white; font-size: 14px"
                >
                  Scan Absen
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col-6">
            <q-btn
              
              style="
                background-image: linear-gradient(to bottom right, #4ecebf, #3fafb6);
                width: 100%;
                height: 50px;
                color: white;
              "
              flat
              no-caps
            >
              <div class="row self-center">
                <q-img
                  no-spinner
                  src="~/assets/icon_scan_barcode.svg"
                  class="self-center justify-center"
                  style="width: 50px; height: 40px; color: white"
                ></q-img>
                <div
                  class="text-weight-medium self-center q-pl-sm"
                  style="color: white; font-size: 14px"
                >
                  Scan Barang asdas
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>

      <!--Header Siang-->
      <div
        v-else-if="backgroundSetter >= 11 && backgroundSetter <= 17"
        class="row"
        style="
          min-height: 220px;
          background-image: linear-gradient(
            to top right,
            #ffffff,
            #70c7e2,
            #4ca6e5
          );
        "
      >
        <div class="row full-width">
          <!--Waktu sekarang-->
          <div class="q-py-md" style="height: 80px; min-width: 75vw">
            <div
              class="row full-width bg-white q-pr-xs shadow-3 mbl-child"
              style="
                width: 80px;
                height: 50px;
                border-radius: 0px 50px 50px 0px;
              "
            >
              <!--Image-->
              <div class="self-center">
                <q-img
                  no-spinner
                  src="~/assets/cuaca_siang.svg"
                  style="width: 80px; height: 50px"
                ></q-img>
              </div>
              <div
                class="row col justify-end"
                style="border-radius: 0px 50px 50px 0px"
              >
                <!--Text-->
                <div class="self-center">
                  <div
                    class="text-weight-bold"
                    style="color: #70c7e2; font-size: 15px"
                  >
                    Selamat Siang
                  </div>
                  <div
                    class="text-weight-medium"
                    style="color: #313131; font-size: 13px"
                  >
                    IndonesiaLaundry
                  </div>
                </div>

                <!--Avatar-->
                <div class="self-center q-pl-sm">
                  <q-avatar>
                    <q-img
                      no-spinner
                      src="~/assets/Avatar.png"
                      size="40px"
                    ></q-img>
                  </q-avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--info saldo-->
        <div
          class="full-width row bg-white"
          style="opacity: 0.8; height: 100px"
        >
          <div
            class="col-6 q-px-sm self-center"
            style="
              border-right: solid;
              border-width: 2px;
              border-color: #f3f3f3;
              opacity: 1;
            "
          >
            <div class="full-width">
              <div
                class="text-weight-medium"
                style="color: #313131; font-size: 15px"
              >
                Saldo masuk hari ini
              </div>
              <div
                class="text-weight-medium"
                style="color: #a3a3a3; font-size: 12px"
              >
                {{ moment().locale("ID").format("dddd, DD MMMM YYYY") }}
              </div>
              <div v-if="isLoad">
                <q-skeleton type="text" />
              </div>
              <div
                v-else
                class="text-weight-bold"
                style="color: #313131; font-size: 18px"
              >
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(total_profit)
                }}
              </div>
            </div>
          </div>
          <div class="col-6 q-px-sm self-center" style="opacity: 1">
            <div class="full-width">
              <div
                class="text-weight-medium"
                style="color: #313131; font-size: 15px"
              >
                Saldo keluar hari ini
              </div>
              <div
                class="text-weight-medium"
                style="color: #a3a3a3; font-size: 12px"
              >
                {{ moment().locale("ID").format("dddd, DD MMMM YYYY") }}
              </div>
              <div v-if="isLoad">
                <q-skeleton type="text" />
              </div>
              <div
                v-else
                class="text-weight-bold"
                style="color: #313131; font-size: 18px"
              >
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(total_spend)
                }}
              </div>
            </div>
          </div>
        </div>

        <!-- Scan Area -->
        <div class="row full-width">
          <div class="col-6">
            <q-btn
              @click="ScanAttendance()"
              style="
                background-image: linear-gradient(
                  to bottom right,
                  #f6d365,
                  #fda085
                );
                width: 100%;
                height: 50px;
                color: white;
              "
              flat
              no-caps
            >
              <div class="row self-center">
                <q-img
                  no-spinner
                  src="~/assets/icon_scan_button.svg"
                  class="self-center"
                  style="width: 40px"
                ></q-img>
                <div
                  class="text-weight-medium self-center q-pl-sm"
                  style="color: white; font-size: 14px"
                >
                  Scan Absen
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col-6">
            <q-btn
                @click="doScanOrder()"
              style="
                background-image: linear-gradient(
                  to bottom right,
                  #4ecebf,
                  #3fafb6
                );
                width: 100%;
                height: 50px;
                color: white;
              "
              flat
              no-caps
            >
              <div class="row self-center">
                <q-img
                  no-spinner
                  src="~/assets/icon_scan_barcode.svg"
                  class="self-center justify-center"
                  style="width: 50px; height: 40px; color: white"
                ></q-img>
                <div
                  class="text-weight-medium self-center q-pl-sm"
                  style="color: white; font-size: 14px"
                >
                  Scan Barang
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>

      <!--Header Malam-->
      <div
        v-else-if="backgroundSetter >= 18 && backgroundSetter <= 23"
        class="row"
        style="
          min-height: 220px;
          background-image: linear-gradient(
            to top right,
            #ffffff,
            #505483,
            #000650
          );
        "
      >
        <div class="row full-width">
          <!--Waktu sekarang-->
          <div class="q-py-md" style="height: 80px; min-width: 75vw">
            <div
              class="row full-width bg-white q-pr-xs shadow-3 mbl-child"
              style="
                width: 80px;
                height: 50px;
                border-radius: 0px 50px 50px 0px;
              "
            >
              <!--Image-->
              <div class="self-center">
                <q-img
                  no-spinner
                  src="~/assets/cuaca_malam.svg"
                  style="width: 80px; height: 50px"
                ></q-img>
              </div>
              <div
                class="row col justify-end"
                style="border-radius: 0px 50px 50px 0px"
              >
                <!--Text-->
                <div class="self-center">
                  <div
                    class="text-weight-bold"
                    style="color: #515583; font-size: 15px"
                  >
                    Selamat Malam
                  </div>
                  <div
                    class="text-weight-medium"
                    style="color: #313131; font-size: 13px"
                  >
                    IndonesiaLaundry
                  </div>
                </div>

                <!--Avatar-->
                <div class="self-center q-pl-sm">
                  <q-avatar>
                    <q-img
                      no-spinner
                      src="~/assets/Avatar.png"
                      size="40px"
                    ></q-img>
                  </q-avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--info saldo-->
        <div
          class="full-width row bg-white"
          style="opacity: 0.8; height: 100px"
        >
          <div
            class="col-6 q-px-sm self-center"
            style="
              border-right: solid;
              border-width: 2px;
              border-color: #f3f3f3;
              opacity: 1;
            "
          >
            <div class="full-width">
              <div
                class="text-weight-medium"
                style="color: #313131; font-size: 15px"
              >
                Saldo masuk hari ini
              </div>
              <div
                class="text-weight-medium"
                style="color: #a3a3a3; font-size: 12px"
              >
                {{ moment().locale("ID").format("dddd, DD MMMM YYYY") }}
              </div>
              <div v-if="isLoad">
                <q-skeleton type="text" />
              </div>
              <div
                class="text-weight-bold"
                style="color: #313131; font-size: 18px"
              >
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(total_profit)
                }}
              </div>
            </div>
          </div>
          <div class="col-6 q-px-sm self-center" style="opacity: 1">
            <div class="full-width">
              <div
                class="text-weight-medium"
                style="color: #313131; font-size: 15px"
              >
                Saldo keluar hari ini
              </div>
              <div
                class="text-weight-medium"
                style="color: #a3a3a3; font-size: 12px"
              >
                {{ moment().locale("ID").format("dddd, DD MMMM YYYY") }}
              </div>
              <div v-if="isLoad">
                <q-skeleton type="text" />
              </div>
              <div
                v-else
                class="text-weight-bold"
                style="color: #313131; font-size: 18px"
              >
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(total_spend)
                }}
              </div>
            </div>
          </div>
        </div>

        <!-- Scan Area -->
        <div class="row full-width">
          <div class="col-6">
            <q-btn
              style="
                background-image: linear-gradient(
                  to bottom right,
                  #f6d365,
                  #fda085
                );
                width: 100%;
                height: 50px;
                color: white;
              "
              flat
              no-caps
            >
              <div class="row self-center">
                <q-img
                  no-spinner
                  src="~/assets/icon_scan_button.svg"
                  class="self-center"
                  style="width: 40px"
                ></q-img>
                <div
                  class="text-weight-medium self-center q-pl-sm"
                  style="color: white; font-size: 14px"
                >
                  Scan Absen
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col-6">
            <q-btn
              style="
                background-image: linear-gradient(
                  to bottom right,
                  #4ecebf,
                  #3fafb6
                );
                width: 100%;
                height: 50px;
                color: white;
              "
              flat
              no-caps
            >
              <div class="row self-center">
                <q-img
                  no-spinner
                  src="~/assets/icon_scan_barcode.svg"
                  class="self-center justify-center"
                  style="width: 50px; height: 40px; color: white"
                ></q-img>
                <div
                  class="text-weight-medium self-center q-pl-sm"
                  style="color: white; font-size: 14px"
                >
                  Scan Barang
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>

      <!-- Transaksi Hari ini -->
      <div class="shadow-1 bg-white q-mt-sm q-pa-md">
        <!-- <q-btn class="full-width" flat no-caps dense @click="$router.push('/transaction')"> -->
        <div class="row full-width self-center">
          <div
            class="col-6 text-weight-medium text-left self-center"
            style="color: #313131; font-size: 15px"
          >
            Transaksi hari ini
          </div>
          <!-- <div class="col-6 self-center text-right">
              <q-icon
                name="fas fa-angle-right"
                size="20px"
                color="black"
              ></q-icon>
            </div> -->
        </div>
        <!-- </q-btn> -->
        <div class="text-weight-medium" style="color: #a3a3a3; font-size: 12px">
          {{ moment().locale("ID").format("dddd, DD MMMM YYYY") }}
        </div>
        <div
          class="row q-mt-md"
          style="background-color: #ebebeb; border-radius: 5px"
        >
          <div
            v-if="this.dailyOrderCounter > 0"
            class="text-weight-medium q-pa-sm"
            style="color: #313131; font-size: 15px"
          >
            {{ this.dailyOrderCounter }} Pesanan Baru
          </div>
          <div
            v-else
            class="text-weight-medium q-pa-sm"
            style="color: #313131; font-size: 15px"
          >
            Belum Ada Pesanan Hari Ini
          </div>
        </div>
      </div>

      <!-- Komunitas -->
      <div class="q-mt-xs q-pa-md" style="background-color: white">
        <div class="q-pb-xs text-weight-medium">Komunitas</div>
        <div class="row">
          <!--Button Kursus-->
          <div class="col-4 text-center q-px-xs" style="height: 150px">
            <q-btn
              @click="$router.push('/course-of-home')"
              no-caps
              class="shadow-2 q-px-md full-height full-width"
              style="border-radius: 10px"
            >
              <div class="self-center text-center full-height">
                <div class="q-pt-lg">
                  <q-img
                    no-spinner
                    src="~/assets/button_kursus.svg"
                    width="50px"
                    height="50px"
                  >
                  </q-img>
                </div>

                <div
                  class="text-weight-medium q-pt-md text-center"
                  style="color: #31313; font-size: 15px"
                >
                  Kursus
                </div>
              </div>
            </q-btn>
          </div>
          <!--Button Postingan-->
          <div class="col-4 text-center q-px-xs" style="height: 150px">
            <q-btn
              @click="$router.push('/community')"
              no-caps
              class="shadow-2 q-px-md full-height full-width"
              style="border-radius: 10px"
            >
              <div class="self-center text-center full-height">
                <div class="q-pt-lg">
                  <q-img
                    no-spinner
                    src="~/assets/button_post.svg"
                    width="35px"
                    height="50px"
                  >
                  </q-img>
                </div>

                <div
                  class="text-weight-medium q-pt-md text-center"
                  style="color: #31313; font-size: 15px"
                >
                  Postingan
                </div>
              </div>
            </q-btn>
          </div>
          <!--Button Marketplace-->
          <div class="col-4 text-center q-px-xs" style="height: 150px">
            <q-btn
              @click="$router.push('/marketplace-home')"
              no-caps
              class="shadow-2 q-px-md full-height full-width"
              style="border-radius: 10px"
            >
              <div class="self-center text-center full-height">
                <div class="q-pt-lg">
                  <q-img
                    no-spinner
                    src="~/assets/button_marketplace.svg"
                    width="50px"
                    height="50px"
                  >
                  </q-img>
                </div>

                <div
                  class="text-weight-medium q-pt-md text-center"
                  style="color: #31313; font-size: 15px"
                >
                  Marketplace
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>

      <!--Kategori Layanan-->
      <div class="full-width">
        <q-img
          no-spinner
          src="~/assets/bg_kategori_layanan_new.svg"
          width="100vw"
          height="220px"
          class="row full-width"
        >
          <div
            class="row full-width full-height bg-transparent justify-end q-pa-none self-center"
          >
            <div class="col-2 bg-transparent self-start">
              <q-img
                no-spinner
                src="~/assets/logo_kategori_layanan.svg"
                width="70px"
              ></q-img>
            </div>
            <div
              class="col-5 bg-transparent text-center justify-center self-center"
              style="border-radius: 10px"
            >
              <q-img
                @click="$router.push('/add-clothes')"
                no-spinner
                src="~/assets/card_item.svg"
              ></q-img>
            </div>
            <div
              class="col-5 bg-transparent self-center"
              style="border-radius: 20px"
            >
              <q-img
                @click="$router.push('/package-list-first')"
                no-spinner
                src="~/assets/card_layanan.svg"
                width="100%"
                height="100%"
              ></q-img>
            </div>
          </div>
        </q-img>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import moment from "moment";
import { mapState } from "vuex";
import ScanAttendance from "src/components/ScanAttendance.vue";
import { QrcodeStream } from "qrcode-reader-vue3";

export default {
  name: "HomePage",
  keepalive: true,
  computed: {
    ...mapState(["Auth", "Orders"]),
  },

  data() {
    return {
      //ini untuk mengatur background header
      backgroundSetter: null,
      //ini untuk menyimpan saldo masuk hari ini
      total_profit: 0,
      //ini untuk menyimpan saldo keluar hari ini
      total_spend: 0,
      //ini untuk skeleton saldo masuk hari ini
      isLoad: false,
      //ini untuk skeleton saldo keluar hari ini
      isLoad2: false,
      //ini untuk menyimpan data pesanan baru
      dailyOrderCounter: null,
    };
  },

  mounted() {
    this.timeChecker();
    this.getProfitByDay();
    this.getSpendToday();
    this.getDailyTransaction();
  },
  methods: {
    moment,
    timeChecker() {
      this.backgroundSetter = new Date().getHours();
      // console.log(this.d.getHours() > 10 && this.d.getHours() < 17)
    },
    getDailyTransaction() {
      this.$store
        .dispatch("Orders/dailyTransactionCounter", this.Auth.auth.shop.id)
        .then((res) => {
          this.dailyOrderCounter = res.data;
        })
        .finally(() => {
          console.log(this.trtest);
        });
    },
    getProfitByDay() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Orders/countProfitOrdersByDay", this.Auth.auth.shop.id)
          .then((res) => {
            this.total_profit = res.data;
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    getSpendToday() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Orders/countSpendOrdersByDay", this.Auth.auth.shop.id)
          .then((res) => {
            this.total_spend = res.data;
            console.log("ini data spend harian", res.data);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    print() {
      if (this.$q.platform.is.android) {
        window.BTPrinter.printText(
          function (data) {
            console.log("Success");
            console.log(data);
          },
          function (err) {
            console.log("Error");
            console.log(err);
          },
          "Firos Bupati sidoarjo"
        );
      } else {
        this.$q.notify("Hanya bisa di android");
      }
    },

    ScanAttendance() {
      console.log("test absen");
      if (this.$q.platform.is.android) {
        cordova.plugins.barcodeScanner.scan(
          (result) => {
            this.$store
              .dispatch("attendance/show", parseInt(result.text))
              .then((res) => {
                this.$router.push(
                  `/attendance-details/${parseInt(result.text)}`
                );
              });
          },
          (error) => {
            alert("Scanning failed: " + error);
          },
          {
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: true, // iOS and Android
            showTorchButton: true, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            saveHistory: true, // Android, save scan history (default false)
            prompt: "Scan barcode Absensi disini", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            orientation: "potrait", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations: true, // iOS
            disableSuccessBeep: false, // iOS and Android
          }
        );
      } else {
        this.$q.notify("Scan Browser");
        this.$q.dialog({
          component: ScanAttendance,

          // props forwarded to your custom component
        });
      }
    },

    doScanOrder() {
      if (this.$q.platform.is.android) {
        cordova.plugins.barcodeScanner.scan(
          (result) => {
            this.$store
              .dispatch("Orders/show", parseInt(result.text))
              .then((res) => {
                this.$router.push(`/detail-transaksi/${parseInt(result.text)}`);
              });
          },
          (error) => {
            alert("Scanning failed: " + error);
          },
          {
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: true, // iOS and Android
            showTorchButton: true, // iOS and Android
            torchOn: false, // Android, launch with the torch switched on (if available)
            saveHistory: true, // Android, save scan history (default false)
            prompt: "Place a barcode inside the scan area", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            orientation: "potrait", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations: true, // iOS
            disableSuccessBeep: false, // iOS and Android
          }
        );
      } else {
        this.$q.notify("Hanya bisa di android");
      }
    },
    refresh(done) {
      this.getProfitByDay().then((res) => {
        if (done) done();
      });
    },
  },
};
</script>

<style></style>
