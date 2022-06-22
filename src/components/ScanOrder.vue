<template>
  <div>
    <q-dialog
      v-model="dialogDisable"
      ref="dialog"
      @hide="onDialogHide"
      maximized
    >
      <q-card class="full-width">
        <qrcode-stream @decode="onDecode"></qrcode-stream>
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
  props: {
    // ...your custom props
  },
  data() {
    return {
      dialogDisable: true,
    };
  },

  mounted() {
    console.log("halo bang");
  },
  methods: {
    onDecode(decodedString) {
      // console.log(decodedString, "ppp");
      this.$store
        .dispatch("Orders/show", parseInt(decodedString))
        .then((res) => {
          this.$router.push(`/detail-transaksi/${parseInt(decodedString)}`);
          this.$q.notify("Berhasil mencari");
        })
        .catch((err) => {
          this.$q.notify("Terjadi kesalahan");
          // console.log(err);
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
