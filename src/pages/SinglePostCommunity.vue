<template>
  <q-layout class="mbl">
    <q-page-container>
      <q-page>
        <div class="row q-px-md " v-if="this.post">
          <div v-if="this.post.user" class="row q-py-sm">
            <q-avatar v-if="!this.post.user.avatar" size="40px">
              <!-- <img :src="`${STORAGE_URL}/${Auth.auth.avatar}`" /> -->
              <q-img :src="`${STORAGE_URL}/${this.post.user.avatar}`" />
            </q-avatar>
            <q-avatar v-else size="40px">
              <!-- <img :src="`${STORAGE_URL}/${Auth.auth.avatar}`" /> -->
              <q-img src="~/assets/ld.png" ratio="1" />
            </q-avatar>
            <div
              v-if="this.post.user.shop"
              class="q-pl-sm self-center text-weight-medium"
              style="font-size: larger"
            >
              {{ this.post.user.shop.name }}
            </div>
          </div>
        </div>
        <div class="row q-ma-none q-pa-none" style="">
          <div style="height: 300px; width: 100%">
            <div v-if="this.post.files">
              <div v-if="this.post.files.length">
                <q-carousel
                  class="bg-black"
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
                    :img-src="`${STORAGE_URL}/${file.src}`"
                  >
                    <vue-plyr v-if="file.filetype.includes('video')">
                      <video :src="STORAGE_URL + `/` + file.src"></video>
                    </vue-plyr>
                  </q-carousel-slide>
                </q-carousel>
              </div>
            </div>

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
            <div class="row q-mx-md q-mt-sm">
            <!--
              <div class="row">
                <div
                  class="row text-weight-medium q-px-xs"
                  style="color: #b1b1b1; font-size: smaller"
                >
                  {{ this.post.likes_count }} disukai
                </div>
                <div
                  class="row text-weight-medium q-px-xs"
                  style="color: #b1b1b1; font-size: smaller"
                >
                  {{ this.post.comments_count }} komentar
                </div>
              </div>
              -->

              <div
                class="row q-px-xs full-width text-weight-bold q-py-sm"
                style="color: black; font-size: small"
              >
                <div class="q-pr-xs">{{ this.name }}</div>
                <div @click="$router.push(`/post/${this.post.id}/comment-of-post`)" class="text-weight-medium">{{ this.updatePost.body }}</div>
              </div>

              <div
                  class="row text-weight-medium q-px-xs q-py-xs "
                  style="color: #b1b1b1; font-size: smaller"
                  @click="$router.push(`/post/${this.post.id}/comment-of-post`)"
                >
                  {{ this.post.comments_count }} komentar
                </div>

              <div
                class="row text-weight-medium full-width q-px-xs q-py-sm "
                style="color: #b1b1b1; font-size: x-small"
              >
                {{
                  moment(this.post.created_at)
                    .startOf(this.post.created_at)
                    .locale("id")
                    .fromNow()
                }}
              </div>
            </div>

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
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import { base64ToFile } from "./../helpers";
import moment from "moment";

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
      name: "",
    };
  },
  mounted() {
    this.getPostByPostId().then((res) => {
      this.init();
    });
  },
  computed: {
    ...mapState(["Auth"]),
  },
  methods: {
    moment,
    init() {
      this.updatePost.body = this.postData.body;
      this.name = this.post.user.shop.name;
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
          .dispatch("Post/getPostByPostId", this.post_id)
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
        .dispatch("Post/updatePost", payload)
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
