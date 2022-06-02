<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <q-page class="window-height">
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
                    <q-img
                      src="~/assets/camera-rotate-solid.svg"
                      width="24px"
                    />
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
                    round
                    @click="savePhoto"
                    :disable="disableSave"
                    class="self-center"
                  >
                    <q-img v-if="!disableSave" src="~/assets/Group5605.png" />
                    <q-spinner
                      v-if="disableSave"
                      color="black"
                      :thickness="2"
                    />
                  </q-btn>
                </div>
              </div>
            </div>
          </camera>
        </div>
        <q-inner-loading
          :showing="!!uploadProgres"
          :label="`Uploading... ${uploadProgres}%`"
          label-class="text-teal"
          label-style="font-size: 1.1em"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import PreviewPhotoComponentVue from "src/components/PreviewPhotoComponent.vue";
export default {
  props: ["order_id"],
  data() {
    return {
      url: null,
      blob: null,
      devices: [],
      currentDeviceIndex: 0,
      height: height,
      width: width,
      disableSave: false,
      uploadProgres: 0,
    };
  },
  mounted() {
    if (this.$q.platform.is.mobile) {
      this.cordovaCam();
    }
    console.log(!this.$q.platform.is.mobile);
    if (!this.$q.platform.is.mobile) {
      console.log("screen", screen);
      this.$refs.camera.devices(["videoinput"]).then((res) => {
        console.log("devices", res);
        this.devices = res;
      });
    }
  },
  methods: {
    cordovaCam() {
      navigator.camera.getPicture(this.androidSuccess, this.androidFail, {
        quality: 50,
        saveToPhotoAlbum: false,
        destinationType: Camera.DestinationType.DATA_URL,
        correctOrientation: true,
      });
    },
    androidSuccess(imageURI) {
      let blob = this.getBlob(imageURI, ".jpg");
      const url = URL.createObjectURL(blob);
      console.log("url", url);

      this.blob = blob;
      this.savePhoto();
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
    async takePhoto() {
      const blob = await this.$refs.camera.snapshot();
      this.blob = blob;
      console.log(this.$refs.camera, blob);
      // To show the screenshot with an image tag, create a url
      const url = URL.createObjectURL(blob);
      console.log("url", url);
      this.url = url;
    },
    savePhoto() {
      //proses simpan
      const dismiss = this.$q.notify({
        position: "bottom",
        message: `Foto sedang diupload. mohon tunggu`,
        timeout: 0,
      });
      this.disableSave = true;
      this.uploadProgres = 0;
      let file = new File([this.blob], "foto pengambilan barang.jpeg");
      let formData = new FormData();
      formData.append("photo", file);
      formData.append("order_id", this.order_id);
      this.$store
        .dispatch("Orders/savePhoto", {
          formData: formData,
          opt: {
            onUploadProgress: (progres) => {
              console.log(parseInt(progres).toFixed(2));
              this.uploadProgres = parseInt(progres).toFixed(2);
            },
          },
        })
        .then((res) => {
          this.uploadProgres = null;
          this.disableSave = true;
          dismiss();
          this.$q.notify("Berhasil simpan foto");
          
          const payload = {
        id: this.order_id,
        order_status_id: 4,
      };
      this.$store.dispatch("Orders/updateStatus", payload).then((res) => {
        this.$router.push(`/invoice-page/${this.order_id}`);
      });
        });
      
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
  },
};
</script>
<style>
#camera-container {
  height: 100vh;
  width: auto;
}
</style>
