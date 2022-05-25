<template>
  <div>
    <!--info saldo-->
    <div class="full-width row bg-container-saldo-scan">
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
          <div v-if="isLoad2">
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
          @click="this.$router.push('/attendanceScanPage')"
          class="btn-scan-1"
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
      <div class="col-6 col-lt-sm-12">
        <q-btn
          class="btn-scan-2"
          @click="this.$router.push('/OrderScanPage')"
          flat
          no-caps
        >
          <div class="row self-center">
            <q-img
              no-spinner
              src="~/assets/icon_scan_barcode.svg"
              class="self-center justify-center"
              style="width: 40px; height: 40px; color: white"
            ></q-img>
            <div
              class="text-weight-medium self-center q-pl-xs"
              style="color: white; font-size: 14px"
            >
              Scan Barang
            </div>
          </div>
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import ScanAttendance from "src/components/ScanAttendance.vue";
import ScanOrder from "src/components/ScanOrder.vue";
import { mapState } from "vuex";
import { QrcodeStream } from "qrcode-reader-vue3";
export default {
  data() {
    return {
      total_spend: null,
      total_profit: null,
      isLoad: false,
      isLoad2: false,
    };
  },
  computed: {
    ...mapState(["Auth", "Orders"]),
  },
  mounted() {
    document.addEventListener(
      "backbutton",
      function (e) {
        e.preventDefault();
      },
      false
    );
    this.getProfitByDay();
    this.getSpendToday();
  },
  methods: {
    moment,
    getProfitByDay() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Orders/countProfitOrdersByDay", this.Auth.auth.shop.id)
          .then((res) => {
            this.total_profit = res.data;
            console.log("total profit", this.total_profit);
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
        this.isLoad2 = true;
        this.$store
          .dispatch("Orders/countSpendOrdersByDay", this.Auth.auth.shop.id)
          .then((res) => {
            this.total_spend = res.data;
          })
          .finally(() => {
            this.isLoad2 = false;
          });
      });
    },
    ScanAttendance() {
      window.history.pushState(null, null, window.location.href);
      console.log("test absen");
      if (this.$q.platform.is.android) {
        cordova.plugins.barcodeScanner.scan(
          (result) => {
            if (result.cancelled == true) {
              this.$router.push("/transaction");
              this.$q.notify("Gagal absen");
              return;
            }
            this.$store
              .dispatch("Attendance/storeAttendance", parseInt(result.text))
              .then((res) => {
                this.$q.notify("berhasil absen");
                console.log("kondisi then ketika berhasil");
                this.$router.push(
                  `/attendance-details/${parseInt(result.text)}`
                  // "/transaction"
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

    // doScanOrder() {
    //   window.history.pushState(null, null, window.location.href);
    //   console.log("scan pesanan");
    //   if (this.$q.platform.is.android) {
    //     cordova.plugins.barcodeScanner.scan(
    //       (result) => {
    //         if (result.cancelled == true) {
    //           this.$q.notify("Gagal absen");
    //           return;
    //         }
    //         this.$store
    //           .dispatch("Orders/show", parseInt(result.text))
    //           .then((res) => {
    //             // this.$router.push(`/detail-transaksi/${parseInt(result.text)}`);
    //             this.$router.push(
    //               `/preview-detail-transaksi-2/${parseInt(result.text)}`
    //             );
    //           });
    //       },
    //       (error) => {
    //         alert("Scanning failed: " + error);
    //       },
    //       {
    //         preferFrontCamera: false, // iOS and Android
    //         showFlipCameraButton: true, // iOS and Android
    //         showTorchButton: true, // iOS and Android
    //         torchOn: false, // Android, launch with the torch switched on (if available)
    //         saveHistory: true, // Android, save scan history (default false)
    //         prompt: "Place a barcode inside the scan area", // Android
    //         resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
    //         formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
    //         orientation: "potrait", // Android only (portrait|landscape), default unset so it rotates with the device
    //         disableAnimations: true, // iOS
    //         disableSuccessBeep: false, // iOS and Android
    //       }
    //     );
    //   } else {
    //     this.$q.notify("Scan Pesanan");
    //     this.$q.dialog({
    //       component: ScanOrder,

    //       // props forwarded to your custom component
    //     });
    //   }
    // },
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

.bg-container-saldo-scan {
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.45)
  );
}
</style>
