<template>
  <div>
    <q-dialog
      v-model="dialogDisable"
      ref="dialog"
      @hide="onDialogHide"
      maximized
    >
      <q-card class="full-width">
        <qrcode-stream @decode="scanIn"></qrcode-stream>
      </q-card>
    </q-dialog>
    <q-dialog v-model="scanOut" persistent>
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
  </div>
</template>

<script>
import { QrcodeStream } from "qrcode-reader-vue3";
export default {
  components: {
    "qrcode-stream": QrcodeStream,
  },
  data() {
    return {
      dialogDisable: true,
      scanOut: false,
    };
  },
  props: {
    // ...your custom props
  },

  mounted() {},

  methods: {
    scanIn(decodedString) {
      console.log("decoded bisa", decodedString);
      this.$store
        .dispatch("Employee/attendanceIn", parseInt(decodedString))
        .then((res) => {
          console.log("res", res);
          this.$router.push(`/employee`);
          this.$q.notify("Berhasil Absen");
        })
        .catch((err) => {
          console.log("err", err.response.data);
          if (err.response.data.message == "Anda sudah absen") {
            this.absenOut(decodedString);
            this.$q.notify("melakukan absen keluar");
          }
        });
    },
    absenOut(decodedString) {
      console.log("decoded bisa", decodedString);
      this.$store
        .dispatch("Employee/attendanceOut", parseInt(decodedString))
        .then((res) => {
          console.log("res", res);
          this.$router.push(`/employee`);
          console.log("berhasil absen keluar");
        })
        .catch((err) => {
          console.log("err", err.response.data);
          this.$q.notify("Anda sudah absen keluar");
        });
    },
    show() {
      this.$refs.dialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    onOKClick() {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit("ok");
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide();
    },

    onCancelClick() {
      // we just need to hide the dialog
      this.hide();
    },
  },
};
</script>

<style></style>
