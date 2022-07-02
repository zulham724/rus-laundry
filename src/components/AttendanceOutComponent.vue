<template>
  <q-dialog v-model="show" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="info" color="yellow-8" text-color="white" />
        <span class="q-ml-sm">Anda sudah absen masuk</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Cancel" color="primary" v-close-popup />
        <q-btn
          flat
          label="Absen Keluar"
          color="primary"
          @click="attendanceOutEmployee()"
          v-close-popup
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    show: true,
  },
  methods: {
    attendanceOutEmployee() {
      cordova.plugins.barcodeScanner.scan(
        (result) => {
          this.$store
            .dispatch("Employee/attendanceOut", parseInt(result.text))
            .then((res) => {
              console.log(res.data);
              this.$router.push(`/employee`);
              this.$q.notify("Berhasil Absen");
            })
            .catch((err) => {
              this.dialogAttendance = true;
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
    },
  },
};
</script>
