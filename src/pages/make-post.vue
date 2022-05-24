<template>
  <q-layout class="mbl">
    <q-header class="shadow-1">
      <q-toolbar class="bg-white q-py-sm">
        <q-btn flat round size="10px" @click="$router.back()">
          <q-avatar
            size="20px"
            icon="fas fa-arrow-left"
            style="color: #3a3838"
          ></q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #5a5656; font-size: 16px"
          >Buat Postingan</q-toolbar-title
        >
        <q-btn
          no-caps
          :disable="loading"
          :loading="loading"
          flat
          color="grey"
          @click="store()"
          v-ripple
          class="text-right"
        >
          <div class="text-weight-medium text-subtitle2" style="color: #5a5656">
            Posting
          </div>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <div class="row q-pt-md q-px-md">
          <div class="row q-py-sm" style="border-radius: 20px 0 20px 0">
            <q-avatar v-if="Auth.auth.avatar" size="30px">
              <!-- <img :src="`${STORAGE_URL}/${Auth.auth.avatar}`" /> -->
              <img :src="`${STORAGE_URL}/${Auth.auth.avatar}`" />
            </q-avatar>
            <q-avatar v-else size="30px">
              <!-- <img :src="`${STORAGE_URL}/${Auth.auth.avatar}`" /> -->
              <img :src="`${STORAGE_URL}/${Auth.auth.avatar}`" />
            </q-avatar>
            <div
              class="q-pl-sm self-center text-weight-bold"
              style="font-size: small"
            >
              {{ Auth.auth.shop.name }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="q-pb-xl" style="height: 200px; width: 100%">
            <q-form ref="form">
              <q-input
                :disable="loading"
                class="q-px-md"
                placeholder="Apa yang kamu pikirkan hari ini"
                borderless
                v-model="post.body"
                style="width: 100%"
                autogrow
                :rules="[(val) => (val && val.length > 0) || '']"
              />
            </q-form>
            <div class="row q-px-md">
              <div v-for="(file, f) in images_videos" :key="f" class="q-pa-sm">
                <div v-if="file.type.includes('image')">
                  <q-img :src="file.dataUrl" width="100px" height="100px">
                    <q-btn
                      style="
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        z-index: 1;
                      "
                      color="red"
                      flat
                      dense
                      class="all-pointer-events"
                      icon="close"
                      @click="removeImage(f)"
                    />
                  </q-img>
                </div>
                <div
                  class="row full-width"
                  v-else-if="file.type.includes('video')"
                >
                  <div class="col-10">
                    <vue-plyr :options="{ ratio: '1:1' }">
                      <video
                        preload="metadata"
                        :src="`${file.src}#t=0.1}`"
                        style="
                          margin-left: auto;
                          margin-right: auto;
                          display: block;
                        "
                      ></video>
                      <q-btn
                        style="
                          position: absolute;
                          bottom: 0;
                          right: 0;
                          z-index: 1;
                        "
                        color="red"
                        flat
                        dense
                        class="all-pointer-events"
                        icon="close"
                        @click="removeImage(f)"
                      />
                    </vue-plyr>
                  </div>
                  <div class="col-2 bg-grey text-center self-center">
                    <q-btn
                      style="z-index: 1"
                      color="red"
                      flat
                      dense
                      class="all-pointer-events"
                      icon="close"
                      @click="removeImage(f)"
                    />
                  </div>
                </div>
              </div>
            </div>
            <q-file
              v-show="false"
              dense
              filled
              ref="selectfiles"
              @update:model-value="previewImages"
              bg-color="transparent"
            ></q-file>

            <q-separator />
            <q-list class="text-weight-medium">
              <!-- <q-item tag="label" v-ripple :disable="loading">
                <q-item-section>
                  <q-item-label>Jadwalkan untuk nanti</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle v-model="value1" color="light-green-13" />
                </q-item-section>
              </q-item> -->

              <!-- <q-item
                tag="label"
                @click="open('bottom')"
                v-model="value1"
                v-ripple
                :disable="loading"
              >
                <q-item-section>
                  <q-item-label>Hari Ini 06:57</q-item-label>
                </q-item-section>
                <q-item-section avatar class="q-mr-md">
                  <q-icon size="15px" name="fas fa-chevron-right" />
                </q-item-section>
              </q-item> -->
            </q-list>
            <q-dialog v-model="dialog" position="bottom">
              <q-card>
                <q-date
                  style="width: 100%; height: 20%"
                  v-model="date"
                  minimal
                />
              </q-card>
            </q-dialog>
          </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-fab
            icon="fas fa-plus"
            external-label
            vertical-actions-align="left"
            direction="up"
            style="
              background-image: linear-gradient(to right top, #ff9ac5, #7900ff);
              color: white;
            "
          >
            <q-fab-action
              external-label
              label-class="bg-transparent text-weight-medium text-grey-8 text-body1"
              style="color: #dc2baa"
              label-position="left"
              class="shadow-1 bg-white"
              @click="openMedia()"
              icon="perm_media"
              label="Media"
            />
            <q-fab-action
              external-label
              label-class="bg-transparent text-weight-medium text-grey-8 text-body1"
              style="color: #dc2baa"
              label-position="left"
              class="shadow-1 bg-white"
              @click="cek()"
              icon="photo_camera"
              label="Kamera"
            />
          </q-fab>
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import { base64ToFile } from "./../helpers";

import CropPhotoComponent from "src/components/CropPhotoComponent.vue";
import CameraMakePost from "src/components/CameraMakePost.vue";

export default {
  data() {
    return {
      dataUser: {},
      value1: false,
      value2: false,
      dialog: false,
      date: "2019/02/01",
      loading: false,
      images_videos: [],
      files: [],
      isMultipleFile: true,
      post: {},
      STORAGE_URL: STORAGE_URL,
      images_videos_files: [],
    };
  },
  computed: {
    ...mapState(["Auth"]),
  },
  methods: {
    cek() {
      this.$q
        .dialog({
          component: CameraMakePost,
          // componentProps: {
          //   ImgBS64: res.src,
          // },
        })
        .onOk((data) => {
          console.log("data on ok halmaan make post", data);
          let promise = this.toBase64(data.imgFile);
          promise.then((res) => {
            console.log("ini res", res);
            this.$q
              .dialog({
                component: CropPhotoComponent,
                componentProps: {
                  ImgBS64: res.src,
                },
              })
              .onOk((data) => {
                console.log("posttt", this.post);
                console.log("cek hasil crop", data);
                data.type = res.type;
                let imageBase64 = data;
                this.images_videos.push(imageBase64);
                console.log("image video", this.images_videos);
                let imgTo64 = base64ToFile(imageBase64.dataUrl, "avatar");
                this.files.push(imgTo64);
              });
          });
        });
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>
          resolve({
            src: reader.result,
            type: file.type,
          });
        reader.onerror = (error) => reject(error);
      });
    },
    openMedia() {
      this.$refs.selectfiles.pickFiles();
    },
    // async previewImages(files) {
    //   // 1. convert masing2 files jadi base64
    //   this.files = files;
    //   let array = [];
    //   await files.forEach((file, f) => {
    //     array[f] = this.toBase64(file);
    //   });

    //   Promise.all(array).then((res) => {
    //     this.images_videos = res;
    //   });
    // },
    async previewImages(file) {
      // console.log("cek file", file);
      if (file.type.includes("image")) {
        let promise = this.toBase64(file);
        promise.then((res) => {
          console.log("ini res", res);
          this.$q
            .dialog({
              component: CropPhotoComponent,
              componentProps: {
                ImgBS64: res.src,
              },
            })
            .onOk((data) => {
              console.log("posttt", this.post);
              console.log("cek hasil crop", data);
              data.type = res.type;
              let imageBase64 = data;
              console.log("ini foto yang sudah jadi base 64", imageBase64);
              this.images_videos.push(imageBase64);
              console.log("image video", this.images_videos);
              let imgTo64 = base64ToFile(imageBase64.dataUrl, "avatar");
              this.files.push(imgTo64);
            });
        });
      } else if (file.type.includes("video")) {
        console.log("bismillah ini bukan foto gan");
        let promise = this.toBase64(file);
        promise.then((res) => {
          console.log("ini video yang sudah jadi base 64 ", res);
          let videoBase64 = res;
          this.images_videos.push(res);
          console.log("images_video", this.images_videos);
          let vid64toFile = base64ToFile(videoBase64.src, "avatar");
          this.files.push(vid64toFile);
          console.log("this.files", this.files);
        });
      }
    },
    removeImage(index) {
      this.images_videos.splice(index, 1);
      this.files.splice(index, 1);
    },
    store() {
      this.loading = true;
      this.$refs.form.validate().then((success) => {
        if (success) {
          let formData = new FormData();

          this.files.forEach((file) => {
            formData.append("files[]", file);
          });
          formData.append("tittle", "LAUNDRY POST");
          formData.append("body", this.post.body);
          formData.append("status", "PUBLISHED");
          formData.append("featured", 0);

          this.$store.dispatch("Post/store", formData).then((res) => {
            console.log("formdata hehe", res);
            this.$router.push("/community");
            this.$q.notify("Berhasil");
            this.loading = false;
          });
        } else {
          this.$q.notify("Gagal");
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style></style>
