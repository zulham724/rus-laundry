<template>
  <q-layout class="mbl">
    <div></div>
  </q-layout>
</template>

<script>
import ScanOrder from "src/components/ScanOrder.vue";
export default {
  data() {
    return {};
  },
  mounted() {
    this.doScanOrder();
  },
  methods: {
    doScanOrder() {
      // window.history.pushState(null, null, window.location.href);
      console.log("scan pesanan");
      if (this.$q.platform.is.nativeMobile) {
        cordova.plugins.barcodeScanner.scan(
          (result) => {
            if (result.cancelled == true) {
              this.$q.notify("Gagal absen");
              return;
            }
            console.log("cek result", result);
            this.$store
              .dispatch("Orders/show", parseInt(result.text))
              .then((res) => {
                // window.history.pushState(null, null, window.location.href);
                if (res) {
                  if (res.data != null) {
                    this.$q.notify("berhasil scan barang");
                    this.$router.push(
                      `/detail-transaksi/${parseInt(result.text)}`
                    );
                  } else {
                    this.$q.notify("gagal scan barang");
                    this.$router.push("/");
                  }
                } else {
                  this.$q.notify("gagal scan barang");
                  this.$router.push("/");
                }

                // this.$router.push(`/detail-transaksi/${parseInt(result.text)}`);
              });
          },
          (error) => {
            alert("Gagal scan barang");
            // console.log("rudi membeli bakso");
            // this.$q.notify("gagal scan barang");
            this.$router.push("/");
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
  },
};
</script>

<style></style>
