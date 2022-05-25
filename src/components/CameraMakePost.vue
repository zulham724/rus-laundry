<template>
  <q-dialog
    v-model="dialogDisable"
    ref="dialog"
    @hide="onDialogHide"
    persistent
    maximized
  >
    <q-card class="full-width">
      <div style="height: 100vh; width: 100vw">
        <camera
          v-if="!$q.platform.is.mobile"
          ref="camera"
          id="camera"
          class="full-width full-height mbl-child justify-center align-center"
          autoplay
        >
          <div class="mbl-child">
            <div v-if="url" class="text-center fixed-center mbl-child">
              <img class="mbl-child" :src="url" />
            </div>
            <div v-if="cordovaPic" class="text-center fixed-center mbl-child">
              <img class="mbl-child" :src="url" />
            </div>
            <div
              class="fixed-top mbl-child row text-center q-py-xs q-px-sm bg-white"
            >
              <div class="col-2">
                <q-btn round flat @click="this.$router.back()">
                  <q-img src="~/assets/arrow-left-solid.svg" width="24px" />
                </q-btn>
              </div>
              <div class="col-8"></div>
              <div class="col-2">
                <q-btn round flat @click="changeCamera()">
                  <q-img src="~/assets/camera-rotate-solid.svg" width="24px" />
                </q-btn>
              </div>
            </div>
            <div
              class="fixed-bottom mbl-child row text-center q-py-md q-px-xs"
              style="background-color: rgba(255, 255, 255, 1)"
            >
              <div class="col self-center">
                <q-btn round>
                  <q-img @click="reset()" src="~/assets/Group5606.png" />
                </q-btn>
              </div>
              <div class="col">
                <q-btn round @click="takePhoto" class="self-center">
                  <q-img
                    src="~/assets/Group5172.png"
                    style="height: 60px; width: 60px"
                  />
                </q-btn>
              </div>
              <div class="col self-center">
                <q-btn
                  v-if="url"
                  round
                  @click="confirmClick"
                  class="self-center"
                >
                  <q-img v-if="!disableSave" src="~/assets/Group5605.png" />
                </q-btn>
              </div>
            </div>
          </div>
        </camera>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
// import PreviewPhotoComponentVue from "src/components/PreviewPhotoComponent.vue";
import { mapState } from "vuex";
// import { useDialogPluginComponent } from "quasar";

export default {
  emits: [
    // REQUIRED; need to specify some events that your
    "ok",
    "hide",
    "crop",
  ],

  computed: {
    ...mapState(["Orders"]),
  },

  mounted() {
    if (this.$q.platform.is.mobile) {
      console.log("mobile");
      this.cordovaCam();
    }
    console.log(!this.$q.platform.is.mobile);
    if (!this.$q.platform.is.mobile) {
      console.log("not mobile");
      // this.$refs.camera.devices(["videoinput"]).then((res) => {
      //   console.log("devices", res);
      //   this.devices = res;
      // });
    }
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
      url: null,
      urlSender: null,
      blob: null,
    };
  },

  methods: {
    async takePhoto() {
      const blob = await this.$refs.camera.snapshot();
      this.blob = blob;
      console.log("woooooooiiiiiiiii", this.$refs.camera, blob);
      // To show the screenshot with an image tag, create a url
      const url = URL.createObjectURL(blob);
      console.log("urllllllllllllllll", url);
      this.url = url;
    },
    savePhoto(file) {
      this.urlSender = file;
      console.log("ini file photo", file);
      console.log("fungsi save photo", this.urlSender);
      this.onOKClick(this.urlSender);
      // this.$router.back();
    },
    getBlob(b64Data, contentType, sliceSize = 512) {
      contentType = contentType || "";
      sliceSize = sliceSize || 512;
      let byteCharacters = atob(b64Data);
      let byteArrays = [];

      for (
        let offset = 0;
        offset < byteCharacters.length;
        offset += sliceSize
      ) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);

        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        let byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
      }
      let blob = new Blob(byteArrays, { type: contentType });
      return blob;
    },

    cordovaCam() {
      navigator.camera.getPicture(this.androidSuccess, this.androidFail, {
        quality: 50,
        saveToPhotoAlbum: false,
        destinationType: Camera.DestinationType.DATA_URL,
        correctOrientation: true,
      });
    },
    androidSuccess(imageURI) {
      console.log("imageURI", imageURI);
      let blob = this.getBlob(imageURI, "image/png");
      const url = URL.createObjectURL(blob);
      console.log("url setelah centang", url);

      this.blob = blob;
      console.log("blob", blob);
      this.savePhoto(blob);
    },
    androidFail(message) {
      // alert('gagal gan')
      console.log("terjadi kesalahan");
      this.$router.back();
    },
    reset() {
      this.url = null;
    },
    changeCamera() {
      let camera = this.$refs.camera;
      console.log(camera);
      if (this.devices.length > 1) {
        if (this.devices[this.currentDeviceIndex + 1]) {
          this.currentDeviceIndex++;
          camera.changeCamera(this.devices[this.currentDeviceIndex].deviceId);
        } else {
          this.currentDeviceIndex = 0;
          camera.changeCamera(this.devices[this.currentDeviceIndex].deviceId);
        }
      } else {
        console.log("tidak bisa ganti camera");
        this.$q.notify({
          position: "top",
          message: "Tidak bisa ganti camera",
        });
      }
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
    blobToFile(theBlob, fileName) {
      return new File([theBlob], fileName, {
        lastModified: new Date().getTime(),
        type: theBlob.type,
      });
    },
    confirmClick() {
      console.log("blobbbbbbb", this.blob);
      let file = this.blobToFile(this.blob, "foto_postingan");
      console.log("blobbb jadi fileee", file);
      this.urlSender = file;
      console.log("file type blob", this.blob);
      this.onOKClick(this.urlSender);
    },
    onOKClick(dataUrl) {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit("ok", { imgFile: dataUrl });
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
