<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <q-page class="window-height">
        <div style="height: 100vh; width: 100vw">
          <camera
            ref="camera"
            id="camera"
            class="full-width full-height mbl-child justify-center align-center"
            autoplay
          >
            <div class="mbl-child">
              <div v-if="url" class="text-center fixed-center mbl-child">
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
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
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
    };
  },
  mounted() {
    console.log("screen", screen);
    this.$refs.camera.devices(["videoinput"]).then((res) => {
      console.log("devices", res);
      this.devices = res;
    });
  },
  methods: {
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
      this.disableSave = true;
      let file = new File([this.blob], "foto pengambilan barang.jpeg");
      let formData = new FormData();
      formData.append("photo", file);
      formData.append("order_id", this.order_id);
      this.$store.dispatch("Orders/savePhoto", formData).then((res) => {
        this.disableSave = true;
        this.$q.notify("Berhasil simpan foto");
        this.$router.back();
      });
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
