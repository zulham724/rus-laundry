<template>
  <q-layout class="mbl"> </q-layout>
</template>

<script>
import ScanAttendance from "src/components/ScanAttendance.vue";
export default {
  data() {
    return {
      scanOut: false,
    };
  },
  mounted() {
    this.ScanAttendanceIn();
  },
  methods: {
    ScanAttendanceIn() {
      // window.history.pushState(null, null, window.location.href);
      if (this.$q.platform.is.nativeMobile) {
        console.log("nativeMobile");
        cordova.plugins.barcodeScanner.scan(
          (result) => {
            if (result.cancelled == true) {
              this.$q.notify("Gagal absen");
              return;
            }
            this.$store
              .dispatch("Employee/attendanceIn", parseInt(result.text))
              .then((res) => {
                this.$router.push(`/employee`);
                this.$q.notify("Berhasil Absen");
              })
              .catch((err) => {
                if (err.response.data.message == "Anda sudah absen") {
                  this.scanAttendanceOut();
                  this.$q.notify("melakukan absen keluar");
                }
              });
          },
          (error) => {
            this.$router.push("/");
            this.$q.notify("gagal absen");
            // alert("Scanning failed: " + error);
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
        console.log("bukan native mobile");
        this.$q.notify("Scan Absensi");
        this.$q.dialog({
          component: ScanAttendance,
          // props forwarded to your custom component
        });
      }
    },
    scanAttendanceOut() {
      cordova.plugins.barcodeScanner.scan(
        (result) => {
          if (result.cancelled == true) {
            this.$q.notify("Gagal absen");
            return;
          }
          this.$store
            .dispatch("Employee/attendanceOut", parseInt(result.text))
            .then((res) => {
              this.$router.push(`/employee`);
              this.$q.notify("Berhasil Absen keluar");
            })
            .catch((err) => {
              this.$router.push(`/employee`);
              this.$q.notify("Anda sudah absen keluar");
            });
        },
        (error) => {
          this.$router.push("/");
          this.$q.notify("gagal absen");
          // alert("Scanning failed: " + error);
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
    },
  },
};
</script>

<style></style>
