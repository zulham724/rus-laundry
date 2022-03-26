<template view="lHh lpR fFf">
  <q-layout class="mbl" style="background-color: #fafafa">
    <q-page>
      <!--Header Pagi-->
      <div
        v-if="backgroundSetter >= 0 && backgroundSetter <= 10"
        class="row bg-pagi"
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
                v-if="dataAuth"
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
                    v-if="dataAuth.name"
                    class="text-weight-medium"
                    style="color: #313131; font-size: 13px"
                  >
                    {{ dataAuth.name }}
                  </div>
                  <div
                    v-if="!dataAuth.name"
                    class="text-weight-medium"
                    style="color: #313131; font-size: 13px"
                  >
                    Laundry Digital
                  </div>
                </div>

                <!--Avatar-->
                <div class="self-center q-pl-sm">
                  <q-avatar>
                    <q-img no-spinner src="~/assets/ld.png" size="40px"></q-img>
                  </q-avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <saldo-scan class="full-width"></saldo-scan>
      </div>

      <!--Header Siang-->
      <div
        v-else-if="backgroundSetter >= 11 && backgroundSetter <= 17"
        class="row bg-siang"
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
                v-if="dataAuth"
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
                    v-if="dataAuth.name"
                    class="text-weight-medium"
                    style="color: #313131; font-size: 13px"
                  >
                    {{ dataAuth.name }}
                  </div>
                  <div
                    v-if="!dataAuth.name"
                    class="text-weight-medium"
                    style="color: #313131; font-size: 13px"
                  >
                    Laundry Digital
                  </div>
                </div>

                <!--Avatar-->
                <div v-if="!dataAuth.avatar" class="self-center q-pl-sm">
                  <q-avatar>
                    <q-img no-spinner src="~/assets/ld.png" size="40px"></q-img>
                  </q-avatar>
                </div>
                <div v-else-if="dataAuth.avatar" class="self-center q-pl-sm">
                  <q-avatar v-if="dataAuth.avatar == 'users/default.png'">
                    <q-img no-spinner src="~/assets/ld.png" size="40px"></q-img>
                  </q-avatar>
                  <q-avatar v-if="dataAuth.avatar != 'users/default.png'">
                    <q-img no-spinner :src="dataAuth.avatar" size="40px"></q-img>
                  </q-avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <saldo-scan class="full-width"></saldo-scan>
      </div>

      <!--Header Malam-->
      <div
        v-else-if="backgroundSetter >= 18 && backgroundSetter <= 23"
        class="row bg-malam"
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
                v-if="dataAuth"
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
                    v-if="dataAuth.name"
                    class="text-weight-medium"
                    style="color: #313131; font-size: 13px"
                  >
                    {{ dataAuth.name }}
                  </div>
                  <div
                    v-if="!dataAuth.name"
                    class="text-weight-medium"
                    style="color: #313131; font-size: 13px"
                  >
                    Laundry Digital
                  </div>
                  
                </div>

                <!--Avatar-->
                <div class="self-center q-pl-sm">
                  <q-avatar>
                    <q-img no-spinner src="~/assets/ld.png" size="40px"></q-img>
                  </q-avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <saldo-scan class="full-width"></saldo-scan>
      </div>

      <!-- Transaksi Hari ini -->
      <div class="shadow-1 bg-white q-pa-md">
        <!-- <q-btn class="full-width" flat no-caps dense @click="$router.push('/transaction')"> -->
        <div class="row full-width self-center">
          <div
            class="col-8 text-weight-medium text-left self-center"
            style="color: #313131; font-size: 15px"
          >
            Antrian Pesanan hari ini
          </div>
        </div>
        <!-- </q-btn> -->
        <div class="text-weight-medium" style="color: #a3a3a3; font-size: 12px">
          {{ moment().locale("ID").format("dddd, DD MMMM YYYY") }}
        </div>
        <div
          class="row q-mt-md"
          style="background-color: #ebebeb; border-radius: 5px"
          @click="$router.push('/transaction')"
        >
          <div
            v-if="this.dailyOrderCounter > 0"
            class="text-weight-medium q-pa-sm"
            style="color: #313131; font-size: 15px"
          >
            {{ this.dailyOrderCounter }} Antrian Baru
          </div>
          <div
            v-else
            class="text-weight-medium q-pa-sm"
            style="color: #313131; font-size: 15px"
          >
            Belum Ada Antrian Hari Ini
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
                  style="color: #313131; font-size: small"
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
                  style="color: #313131; font-size: small"
                >
                  Komunitas
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
                  style="color: #313131; font-size: small"
                >
                  Marketplace
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>

      <!--Kategori Layanan-->
      <div class="q-mt-xs q-pa-md" style="background-color: white">
        <div class="q-pb-xs text-weight-medium">Kategori Layanan</div>
        <div class="row">
          <!--Button item-->
          <div class="col-6 text-center q-px-md" style="height: 180px">
            <q-btn
              @click="$router.push('/add-clothes')"
              no-caps
              class="shadow-2 full-height full-width"
              style="border-radius: 10px"
            >
              <div class="self-center text-center">
                <q-img
                  no-spinner
                  src="~/assets/Group5579.png"
                  width="150px"
                  height="170px"
                >
                </q-img>
              </div>
            </q-btn>
          </div>
          <!--Button layanan-->
          <div class="col-6 text-center q-px-md" style="height: 180px">
            <q-btn
              @click="$router.push('package-list-first')"
              no-caps
              class="shadow-2 full-height full-width"
              style="border-radius: 10px"
            >
              <div class="self-center text-center">
                <q-img
                  no-spinner
                  src="~/assets/Group5580.png"
                  width="150px"
                  height="170px"
                >
                </q-img>
              </div>
            </q-btn>
          </div>
        </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import moment from "moment";
import { mapState } from "vuex";
import ScanAttendance from "src/components/ScanAttendance.vue";
import ScanOrder from "src/components/ScanOrder.vue";
import SaldoScan from "src/components/InfoSaldoComponent.vue";
import { QrcodeStream } from "qrcode-reader-vue3";

export default {
  name: "HomePage",
  keepalive: true,
  computed: {
    ...mapState(["Auth", "Orders"]),
  },
  components: {
    "saldo-scan": SaldoScan,
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
      //ini untuk menyimpan data auth
      dataAuth: null,
    };
  },

  mounted() {
    this.dataAuth = this.Auth.auth;
    console.log('dataAuth', this.dataAuth);
    this.timeChecker();
    this.getProfitByDay();
    this.getSpendToday();
    this.getDailyTransaction();
  },
  methods: {
    moment,
    timeChecker() {
      this.backgroundSetter = new Date().getHours();
    },
    getDailyTransaction() {
      this.$store
        .dispatch("Orders/dailyTransactionCounter", this.Auth.auth.shop.id)
        .then((res) => {
          this.dailyOrderCounter = res.data;
        })
        .finally(() => {});
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
        this.$q.notify("Scan Absensi");
        this.$q.dialog({
          component: ScanAttendance,

          // props forwarded to your custom component
        });
      }
    },
    doScanOrder() {
      console.log("scan pesanan");
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
        this.$q.notify("Scan Pesanan");
        this.$q.dialog({
          component: ScanOrder,

          // props forwarded to your custom component
        });
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

<style>
.btn-scan-1 {
  background: linear-gradient(to bottom right, #f6d365, #fda085);
  width: 100%;
  height: 50px;
  color: white;
}

.btn-scan-2 {
  background: linear-gradient(to bottom right, #4ecebf, #3fafb6);
  width: 100%;
  height: 50px;
  color: white;
}

.bg-pagi {
  min-height: 220px;
  background: linear-gradient(to top right, #ffffff, #ffecc1, #b4e6ea);
}

.bg-siang {
  min-height: 220px;
  background: linear-gradient(to top right, #ffffff, #70c7e2, #4ca6e5);
}

.bg-malam {
  min-height: 220px;
  background: linear-gradient(to top right, #ffffff, #505483, #000650);
}
</style>
