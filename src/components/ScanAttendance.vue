<template>
  <div>
    <q-dialog ref="dialog" @hide="onDialogHide">
      <q-card class="q-dialog-plugin">
        <qrcode-stream @decode="onDecode"></qrcode-stream>
        <!--
        ...content
        ... use q-card-section for it?
      -->

        <!-- buttons example -->
        <q-card-actions align="right">
          <!--<q-btn color="primary" label="OK" @click="onOKClick" />-->
          <q-btn color="primary" label="Cancel" @click="onCancelClick" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { QrcodeStream } from "qrcode-reader-vue3";
export default {
  components: {
    QrcodeStream,
  },
  props: {
    // ...your custom props
  },

  mounted() {},

  methods: {
    onDecode(decodedString) {
      console.log("decoded", decodedString);
      this.$store
        .dispatch("Employee/attendanceIn", parseInt(result.text))
        .then((res) => {
          this.$router.push(`/employee`);
          console.log("berhasil absen");
          // this.$q.notify("Berhasil Absen");
        })
        .catch((err) => {
          console.log("terjadi kesalahan onDecode");
          // this.dialogAttendance = true;
        });
    },
    // following method is REQUIRED
    // (don't change its name --> "show")
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
      // we just need to hide dialog
      this.hide();
    },
  },
};
</script>

<style></style>
