<template>
  <q-dialog
    v-model="dialogDisable"
    ref="dialog"
    @hide="onDialogHide"
    persistent
    maximized
  >
    <q-card class="full-width">
      <q-card-section>
        <div class="row text-center">
          <div class="col-2">
            <q-btn round flat v-close-popup>
              <q-avatar square>
                <img src="~/assets/bck.png" style="width: 35%; height: 30%" />
              </q-avatar>
            </q-btn>
          </div>
          <div class="col-8 self-center text-left" text-h5>
            <div class="text-h6 text-weight-bold">Potong</div>
          </div>

          <div class="col-2">
            <q-btn round flat @click.prevent="cropImage">
              <q-avatar>
                <img src="~/assets/ctg.png" style="width: 38%; height: 30%" />
              </q-avatar>
            </q-btn>
          </div>
        </div>
      </q-card-section>
      <div class="full-width bg-blue" style="height: 100%">
        <vue-cropper
          class="full-height"
          ref="cropper"
          :aspect-ratio="1 / 1"
          :src="sendedImg"
        />
        <!-- <img style="width: 100%; height: 100%" :src="sendedImg" /> -->
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapState } from "vuex";
// import base64 to File
import { base64ToFile } from "./../helpers";
// import vue-cropperjs
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import { useDialogPluginComponent } from "quasar";

export default {
  components: { VueCropper },
  props: ["ImgBS64"],
  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],
  setup() {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel, onCrop } =
      useDialogPluginComponent();
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    return {
      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,
      onCrop,

      // other methods that we used in our vue html template;
      // these are part of our example (so not required)
      onOKClick() {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        onDialogOK();
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,
    };
  },

  computed: {
    ...mapState(["Orders"]),
  },

  mounted() {
    this.sendedImg = this.ImgBS64;
    console.log("kiriman image base 64", this.sendedImg);
  },

  data() {
    return {
      sendedImg: null,
      croppedImg: null,
      payment: null,
      dialog: false,
      btnDisable: false,
      dialogDisable: true,
      encodedImage: null,
    };
  },

  methods: {
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      let croppedImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      // console.log("cropped img", croppedImg);
      this.$emit("crop-photo", croppedImg);
      //   this.$store.commit("Profile/set_image", { data: this.cropImg });
    },
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    submitPayment() {
      console.log("click");
      this.btnDisable = true;
      if (this.payment > this.Orders.order.total_price) {
        this.btnDisable = true;
        this.$q.notify({
          position: "top",
          message: "Pembayaran melebihi batas",
        });
        this.btnDisable = false;
      } else if (!this.payment) {
        this.btnDisable = true;
        this.$q.notify({
          position: "top",
          message: "Masukkan jumlah yang ingin di bayar",
        });
        this.btnDisable = false;
      } else {
        this.btnDisable = true;
        this.$q.notify({
          position: "top",
          message: "Pembayaran dimasukkan",
        });
        this.payment = parseInt(this.payment);
        this.Orders.order.payment = this.payment;
        // console.log("ini jumlah order", this.Orders.order.payment);
        //---
        this.store();
        this.btnDisbale = false;
      }
    },
    store() {
      this.btnDisable = true;
      this.dialogDisable = true;
      let order = this.Orders.order;
      this.$store
        .dispatch("Orders/store", order)
        .then((res) => {
          this.btnDisable = true;
          this.dialogDisable = true;
          this.$q.notify({
            position: "top",
            message: "Berhasil",
          });
        })
        .finally(() => {
          this.dialogDisable = false;
          this.$router.push("/confirm-order");
          this.btnDisable = false;
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
