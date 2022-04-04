<template>
  <q-dialog ref="dialog">
    <q-card class="full-width ">
      <q-img v-if="src" :src="STORAGE_URL + `/` + src.src" />
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: ["src"],

  data() {
    return {
      STORAGE_URL: STORAGE_URL,
    };
  },
  mounted() {
    // console.log("src community preview", this.src);
  },
  methods: {
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

<style>
.rotation {
  transform: rotate(90deg);
}
</style>
