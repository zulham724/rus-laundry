<template>
  <q-layout class="bg-red">
    <div>
      <q-btn @click="ScanAttendance()">click scan</q-btn>
    </div>
  </q-layout>
</template>

<script>
import ScanAttendance from "src/components/ScanAttendance.vue";
import { QrcodeStream } from "qrcode-reader-vue3";
export default {
  data() {
    return {};
  },
  mounted() {
    document.addEventListener(
      "backbutton",
      function (e) {
        console.log("inii e", e);
        console.log("inii 2", e);
        console.log("inii 3", e);
        e.preventDefault();
      },
      false
    );
  },
  methods: {
    ScanAttendance() {
      window.history.pushState(null, null, window.location.href);
      console.log("test absen");
      if (this.$q.platform.is.android) {
        cordova.plugins.barcodeScanner.scan(
          (result) => {
            console.log("cek result", result);
            if (result.cancelled == true) {
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
                  //   "/transaction"
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
  },
};
</script>

<style></style>
