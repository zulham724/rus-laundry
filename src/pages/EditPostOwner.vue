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
          >Edit Postingan</q-toolbar-title
        >
        <q-btn
          dense
          style="border: solid 1px black"
          no-caps
          :disable="loading"
          :loading="loading"
          flat
          color="grey"
          @click="updatePostingan()"
          v-ripple
          class="text-right"
        >
          <div class="text-weight-medium text-subtitle2" style="color: #5a5656">
            Simpan
          </div>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <div class="row q-pt-md q-px-md" v-if="this.Auth.auth">
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
              {{ this.Auth.auth.name }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="q-pb-xl" style="height: 200px; width: 100%">
            <div v-if="this.post.files" class="bg-red">
              <div v-if="this.post.files.length">
                <q-carousel
                  v-model="slide"
                  transition-prev="scale"
                  transition-next="scale"
                  swipeable
                  animated
                  control-color="teal-4"
                  :navigation="post.files.length > 1"
                  padding
                  arrows
                >
                  <q-carousel-slide
                    v-for="(file, f) in post.files"
                    :key="file.id"
                    :name="f"
                    style="padding-left: 0px; padding-right: 0px; margin: 0px"
                  >
                    <vue-plyr v-if="file.filetype.includes('video')">
                      <video :src="STORAGE_URL + `/` + file.src"></video>
                    </vue-plyr>

                    <q-img
                      @click="dialogPreviewPhoto(file)"
                      v-else-if="file.filetype.includes('image')"
                      :src="STORAGE_URL + `/` + file.src"
                      style="width: 100%; height: 100%"
                    >
                      <template v-slot:error>
                        <div
                          class="absolute-full flex flex-center bg-grey-5 text-white"
                        >
                          Gagal mendapatkan Gambar
                        </div>
                      </template>
                    </q-img>
                  </q-carousel-slide>
                </q-carousel>
              </div>
            </div>
            <q-form ref="form">
              <q-input
                :disable="loading"
                class="q-px-md"
                placeholder="Apa yang kamu pikirkan hari ini"
                outlined
                color="teal-4"
                style="width: 100%"
                autogrow
                v-model="this.updatePost.body"
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
                <div v-else-if="file.type.includes('video')">
                  <vue-plyr :options="{ ratio: '1:1' }">
                    <video
                      preload="metadata"
                      :src="`${file.src}#t=0.1}`"
                      style="
                        margin-left: auto;
                        margin-right: auto;
                        display: block;
                        height: 50vw;
                      "
                    ></video>
                  </vue-plyr>
                </div>
              </div>
            </div>

            <q-separator />

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
        <!-- <q-page-sticky position="bottom-right" :offset="[18, 18]">
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
              class="shadow-1"
              @click="openMedia()"
              icon="perm_media"
              label="Media"
            />
            <q-fab-action
              external-label
              label-class="bg-transparent text-weight-medium text-grey-8 text-body1"
              style="color: #dc2baa"
              label-position="left"
              class="shadow-1"
              @click="cek()"
              icon="photo_camera"
              label="Kamera"
            />
          </q-fab>
        </q-page-sticky> -->
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
  props: ["post_id"],
  data() {
    return {
      slide: 0,

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
      postData: {},
      updatePost: {
        body: null,
      },
    };
  },
  mounted() {
    console.log("auth", this.Auth.auth);
    this.getPostByPostId().then((res) => {
      this.init();
    });
  },
  computed: {
    ...mapState(["Auth"]),
  },
  methods: {
    init() {
      this.updatePost.body = this.postData.body;
      // console.log('cek aja', this.updatePost.body)
    },
    cek() {
      this.$q
        .dialog({
          component: CameraMakePost,
          // componentProps: {
          //   ImgBS64: res.src,
          // },
        })
        .onOk((data) => {
          // console.log("data on ok halmaan make post", data);
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
                // console.log("posttt", this.post);
                // console.log("cek hasil crop", data);
                data.type = res.type;
                let imageBase64 = data;
                this.images_videos.push(imageBase64);
                // console.log("image video", this.images_videos);
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
            type: file.type,
            src: reader.result,
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
      let promise = this.toBase64(file);
      promise.then((res) => {
        // console.log("ini res", res);
        this.$q
          .dialog({
            component: CropPhotoComponent,
            componentProps: {
              ImgBS64: res.src,
            },
          })
          .onOk((data) => {
            // console.log("posttt", this.post);
            // console.log("cek hasil crop", data);
            data.type = res.type;
            let imageBase64 = data;
            this.images_videos.push(imageBase64);
            // console.log("image video", this.images_videos);
            let imgTo64 = base64ToFile(imageBase64.dataUrl, "avatar");
            this.files.push(imgTo64);
          });
      });
    },
    getPostByPostId() {
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch("MasterPost/getPostByPostId", this.post_id)
          .then((res) => {
            console.log("ini data postingan", res.data[0]);
            this.postData = res.data[0];
            this.post = res.data[0];
            // console.log("ini post data", this.postData);

            resolve(res);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {});
      });
    },
    updatePostingan() {
      let value = this.updatePost.body;
      // console.log("cek value", value);
      const payload = {
        body: value,
        id: this.post_id,
      };
      this.loading = true;
      this.$store
        .dispatch("MasterPost/updatePost", payload)
        .then((res) => {
          console.log("ini res", res);
        })
        .catch((err) => {})
        .finally(() => {
          this.loading = false;
          this.$q.notify("Berhasil melakukan perubahan");
          this.$router.back();
        });
    },
  },
};
</script>

<style></style>
