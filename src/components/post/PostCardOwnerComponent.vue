<template>
  <div class="mbl-child" style="height: 100%; width: 100%">
    <div
      class="q-py-md"
      v-if="post != null"
      :ref="`post_${post.id}`"
      style="height: 100%"
    >
      <div class="row q-mx-sm">
        <div class="col-2 self-center">
          <!-- Image profile -->
          <!--Avatar-->
          <div v-if="!post.author.avatar" class="self-center">
            <q-avatar size="60px">
              <q-img no-spinner src="~/assets/ld.png"></q-img>
            </q-avatar>
          </div>
          <div v-else-if="post.author.avatar" class="self-center">
            <q-avatar size="60px">
              <q-img
                no-spinner
                :src="STORAGE_URL + `/` + post.author.avatar"
              ></q-img>
            </q-avatar>
          </div>
          <!-- <q-avatar size="60px" style="background-color: #888888">
            <q-img no-spinner src="~/assets/Avatar.png"></q-img>
          </q-avatar> -->
        </div>
        <div
          v-if="this.Auth.auth.id === post.author.id"
          class="col-8 q-pl-sm self-center"
          @click="$router.push(`/my-profile-owner`)"
        >
          <!-- Nama Profile -->
          <div
            v-if="post.user.role_id == 3"
            class="text-weight-medium"
            style="color: #3a3838; font-size: 20px"
          >
            {{ post.author.name }}
          </div>
          <div
            v-else
            class="text-weight-medium"
            style="color: #3a3838; font-size: 20px"
          >
            {{ post.user.shop.name }}
          </div>
          <!-- Waktu posting -->
          <div
            class="text-weight-medium"
            style="color: #b1b1b1; font-size: 12px"
          >
            {{ moment(post.created_at).locale("id").fromNow() }}
          </div>
        </div>
        <div
          v-else
          class="col-8 q-pl-sm self-center"
          @click="$router.push(`/profile-other-2-owner/${post.author.id}`)"
        >
          <!-- Nama Profile -->
          <div
            v-if="post.user.role_id == 3"
            class="text-weight-medium"
            style="color: #3a3838; font-size: 20px"
          >
            {{ post.author.name }}
          </div>
          <div
            v-else
            class="text-weight-medium"
            style="color: #3a3838; font-size: 20px"
          >
            {{ post.user.shop.name }}
          </div>
          <!-- Waktu posting -->
          <div
            class="text-weight-medium"
            style="color: #b1b1b1; font-size: 12px"
          >
            {{ moment(post.created_at).locale("id").fromNow() }}
          </div>
        </div>
        <div
          v-if="this.Auth.auth.id === post.author.id"
          class="col-2 text-right self-center"
        >
          <!-- Button option -->
          <q-btn dense flat round @click="buttonOption()">
            <q-icon name="fas fa-ellipsis-v" size="16px"></q-icon>
          </q-btn>
        </div>
        <div v-else class="col-2 text-right self-center">
          <!-- Button option -->
          <q-btn dense flat round @click="buttonOption2()">
            <q-icon name="fas fa-ellipsis-v" size="16px"></q-icon>
          </q-btn>
        </div>
      </div>

      <!-- Isi post -->
      <div class="row q-mt-sm q-mx-sm">
        <div
          class="q-py-sm text-weight-medium text-justify"
          style="font-size: 15px; color: #5a5656"
        >
          <div class="col-12 self-center">
            <span v-if="!readMoreActivated"
              >{{ post.body.slice(0, 130) }}
            </span>

            <a
              style="color: #b1b1b1; font-size: 12px"
              class="cursor-pointer text-weight-light"
              v-if="post.body.length > 130 && !readMoreActivated"
              @click="activateReadMore"
            >
              ..selengkapnya
            </a>

            <span v-if="readMoreActivated" v-html="post.body"></span>
          </div>
        </div>
      </div>
      <!-- Isi video/foto -->
      <div class="full-width full-height mbl-child">
        <div v-if="post.files.length">
          <q-carousel
            class="q-mx-sm bg-black"
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
              @click="checkingFile(file)"
            >
              <vue-plyr v-if="file.filetype.includes('video')">
                <video :src="STORAGE_URL + `/` + file.src"></video>
              </vue-plyr>

              <!--
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
              -->
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>

      <!-- Button like, comment, show -->
      <div class="row q-mx-sm" style="">
        <div class="row col-2 self-center">
          <q-btn
            dense
            round
            flat
            size="18px"
            :color="post.liked_count ? 'red' : 'grey'"
            :icon="post.liked_count ? 'favorite' : 'favorite_border'"
            @click="post.liked_count ? dislike() : like()"
          >
          </q-btn>
          <div
            class="text-weight-medium self-center"
            style="color: #b1b1b1; font-size: 15px"
          >
            {{ post.likes_count }}
          </div>
        </div>
        <div
          class="row col-2 self-center"
          v-show="statusComment"
          v-if="statusComment == 1"
        >
          <q-btn
            dense
            round
            flat
            size="18px"
            @click="$router.push(`/post/${post.id}/comment-of-post-owner`)"
          >
            <q-Icon
              name="far fa-comments"
              size="25px"
              style="color: #b1b1b1"
            ></q-Icon>
          </q-btn>
          <div
            class="text-weight-medium self-center"
            style="color: #b1b1b1; font-size: 15px"
          >
            {{ post.comments_count }}
          </div>
        </div>
      </div>

      <!-- Button show comment -->
      <div
        v-show="statusComment"
        v-if="post.comments_count > 0 && statusComment == 1"
        @click="$router.push(`/post/${post.id}/comment-of-post`)"
        class="text-weight-regular q-px-md q-py-xs"
        style="color: #b1b1b1; font-size: 10px"
      >
        Lihat {{ post.comments_count }} komentar
      </div>

      <!-- Show comment  -->
      <div
        class="row self-center q-px-md"
        v-if="post.comments.length && statusComment == 1"
        v-show="statusComment"
      >
        <div
          class="text-weight-regular self-center"
          style="font-size: 12px; color: #3a3838"
        >
          {{ post.comments[post.comments.length - 1].user.name }}
        </div>
        <div
          class="text-weight-regular self-center q-pl-sm"
          style="color: #b1b1b1; font-size: 10px"
        >
          {{ post.comments[post.comments.length - 1].value }}
        </div>
      </div>

      <q-separator class="q-mt-md q-mx-sm"></q-separator>
    </div>

    <q-dialog v-model="dialogOption" position="bottom">
      <q-card class="justify-center full-width">
        <q-card-section>
          <div
            class="justify-center text-center"
            style="display: block; border-radius: 10px; margin: auto"
          >
            <q-separator
              size="5px"
              style="width: 20%; margin: auto"
            ></q-separator>
          </div>
        </q-card-section>
        <!-- Button Edit -->
        <q-card-actions class="q-pt-xs">
          <q-btn
            no-caps
            class="full-width"
            dense
            flat
            @click="$router.push(`/edit-post-owner/${post.id}`)"
          >
            <div class="row full-width">
              <div class="col-3">
                <q-btn dense outline round size="20px">
                  <q-icon
                    name="fas fa-pen"
                    style="color: #787878"
                    size="20px"
                  ></q-icon>
                </q-btn>
              </div>
              <div
                class="col-8 text-weight-medium self-center text-left"
                style="color: #3a3838; font-size: larger"
              >
                Edit postingan
              </div>
            </div>
          </q-btn>
        </q-card-actions>
        <!-- Button Share -->
        <q-card-actions v-close-popup>
          <q-btn no-caps class="full-width" dense flat @click="buttonShare()">
            <div class="row full-width">
              <div class="col-3">
                <q-btn dense outline round size="20px">
                  <q-icon
                    name="fas fa-share-alt"
                    style="color: #787878"
                    size="20px"
                  ></q-icon>
                </q-btn>
              </div>
              <div
                class="col-8 text-weight-medium self-center text-left"
                style="color: #3a3838; font-size: larger"
              >
                Bagikan postingan
              </div>
            </div>
          </q-btn>
        </q-card-actions>

        <!-- Button Delete -->
        <q-card-actions v-close-popup>
          <q-btn no-caps class="full-width" dense flat @click="buttonDelete()">
            <div class="row full-width">
              <div class="col-3">
                <q-btn dense outline round size="20px">
                  <q-icon
                    name="fas fa-trash"
                    style="color: #787878"
                    size="20px"
                  ></q-icon>
                </q-btn>
              </div>
              <div
                class="col-8 text-weight-medium self-center text-left"
                style="color: #3a3838; font-size: larger"
              >
                Hapus postingan
              </div>
            </div>
          </q-btn>
        </q-card-actions>

        <!-- Button Report -->
        <q-card-actions>
          <q-btn
            no-caps
            class="full-width"
            dense
            flat
            @click="$router.push(`/report-post/${post.id}`)"
          >
            <div class="row full-width">
              <div class="col-3">
                <q-btn dense outline round size="20px">
                  <q-icon
                    name="fas fa-exclamation-triangle"
                    style="color: #787878"
                    size="20px"
                  ></q-icon>
                </q-btn>
              </div>
              <div
                class="col-8 text-weight-medium self-center text-left"
                style="color: #3a3838; font-size: larger"
              >
                Laporkan postingan
              </div>
            </div>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="dialogOption2" position="bottom">
      <q-card class="justify-center full-width">
        <q-card-section>
          <div
            class="justify-center text-center"
            style="display: block; border-radius: 10px; margin: auto"
          >
            <q-separator
              size="5px"
              style="width: 20%; margin: auto"
            ></q-separator>
          </div>
        </q-card-section>
        <!-- Button Share -->
        <q-card-actions v-close-popup>
          <q-btn
            no-caps
            class="full-width"
            dense
            flat
            @click="buttonShare()"
          >
            <div class="row full-width">
              <div class="col-3">
                <q-btn dense outline round size="20px">
                  <q-icon
                    name="fas fa-share-alt"
                    style="color: #787878"
                    size="20px"
                  ></q-icon>
                </q-btn>
              </div>
              <div
                class="col-8 text-weight-medium self-center text-left"
                style="color: #3a3838; font-size: larger"
              >
                Bagikan postingan
              </div>
            </div>
          </q-btn>
        </q-card-actions>

        <!-- Button Report -->
        <q-card-actions>
          <q-btn
            no-caps
            class="full-width"
            dense
            flat
            @click="$router.push(`/report-post/${post.id}`)"
          >
            <div class="row full-width">
              <div class="col-3">
                <q-btn dense outline round size="20px">
                  <q-icon
                    name="fas fa-exclamation-triangle"
                    style="color: #787878"
                    size="20px"
                  ></q-icon>
                </q-btn>
              </div>
              <div
                class="col-8 text-weight-medium self-center text-left"
                style="color: #3a3838; font-size: larger"
              >
                Laporkan postingan
              </div>
            </div>
          </q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="dialogDelete">
      <q-card class="justify-center full-width q-px-sm q-py-sm">
        <div class="col">
          <div class="row text-h6 text-weight-bold q-pb-md">
            Yakin Hapus Postingan?
          </div>
          <div class="row q-pb-md">
            Dengan menghapus postingan, anda tidak akan bisa mengakses foto anda
            lagi.
          </div>
        </div>
        <div class="text-right row justify-end q-gutter-x-sm">
          <div>
            <q-btn
              style="border: 1px solid #49c2c0"
              no-caps
              flat
              color="white"
              text-color="black"
              label="Tidak"
              v-close-popup
              :disable="loadingDelete"
            />
          </div>
          <div>
            <q-btn
              :loading="loadingDelete"
              :disable="loadingDelete"
              no-caps
              flat
              style="background-color: #49c2c0"
              text-color="white"
              label="Ya"
              @click="deletePost()"
            />
          </div>
        </div>
      </q-card>
    </q-dialog>

    <!-- Button Share Click -->
    <q-dialog v-model="dialogShare" position="bottom">
      <q-card class="justify-center full-width">
        <q-card-section class="items-center no-wrap">
          <q-card flat class="my-card">
            <div class="row">
              <div
                class="col-8 text-subtitle1 text-weight-medium text-left"
                style="font-family: roboto; font-size: 18px"
              >
                Share Media
              </div>
              <!-- Button Close -->
              <div class="col-4 text-right">
                <q-btn
                  flat
                  round
                  v-ripple
                  style="background-color: transparent"
                  v-close-popup
                >
                  <q-avatar icon="far fa-times-circle" size="30px"></q-avatar>
                </q-btn>
              </div>
            </div>

            <q-separator size="1px" />
            <div
              class="q-pa-sm text-subtitle1"
              style="margin-left: -10px; font-size: 14px"
            >
              Share this link via
            </div>

            <div class="row justify-center">
              <!-- Button Facebook -->
              <!-- <q-btn round size="20px" outline color="primary" class="q-mx-xs">
                <q-avatar icon="fab fa-facebook-f" size="30px"></q-avatar>
              </q-btn> -->

              <!-- Button Instagram -->
              <!-- <q-btn round size="20px" outline color="pink-9" class="q-mx-xs">
                <q-avatar icon="fab fa-instagram" size="30px"></q-avatar>
              </q-btn> -->

              <!-- Button WhatsApp -->
              <q-btn
                round
                size="20px"
                outline
                color="green-8"
                class="q-mx-xs"
                @click="submitMessage()"
              >
                <q-avatar icon="fab fa-whatsapp" size="30px"></q-avatar>
              </q-btn>

              <!-- Button Telegram -->
              <!-- <q-btn round size="20px" outline color="blue" class="q-mx-xs">
                <q-avatar icon="fab fa-telegram-plane" size="30px"></q-avatar>
              </q-btn> -->
            </div>

            <!-- Link Share -->
            <q-card-actions class="justify-center">
              <div class="q-py-sm">Or copy link</div>
              <q-input
                class="full-width justify-center"
                outlined
                bg-color="transparent"
                v-model="link"
              >
                <q-btn
                  class="self-center q-px-xl"
                  label="Copy"
                  color="deep-purple-13"
                />
                <template v-slot:prepend>
                  <q-icon name="fas fa-link" />
                </template>
              </q-input>
            </q-card-actions>
          </q-card>
          <q-space />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
import { toBase64 } from "../../helpers";
import communityPhotoPreview from "./CommunityPreviewPhotoComponent.vue";

export default {
  props: {
    post: null,
    height: null,
  },
  computed: {
    ...mapState(["Auth"]),
  },
  data() {
    return {
      link: null,
      slide: 0,
      dialogOption: false,
      dialogOption2: false,
      dialogDelete: false,
      dialogShare: false,
      readMoreActivated: false,
      STORAGE_URL: STORAGE_URL,
      loadingDelete: false,
      statusComment: 1,
      APP_URL: APP_URL,
      contact: null,
      message: null,
    };
  },
  mounted() {
    //   console.log( this.$refs["post_" + this.post.id])
    const height = this.$refs["post_" + this.post.id].clientHeight;
    this.$store.commit("MasterPost/setSize", {
      id: this.post.id,
      size: { height: height },
    });
    this.$emit("update-height");

    //init link share
    this.link = `${this.APP_URL}/shared-post/${this.post.id}`;
    // this.link = `/shared-post/${this.post.id}`;
  },
  methods: {
    submitMessage() {
      console.log("tesstttt");
      this.setTextMessage();
      // console.log(this.message);
      let url = `https://api.whatsapp.com/send?text=${encodeURI(this.message)}`;
      window.open(url, "_blank");

      this.$router.push("/community");
    },

    setTextMessage() {
      // let url = `${this.APP_URL}/preview-detail-transaksi-2/${this.order.id}`;
      let tmp = `${this.APP_URL}/shared-post/${this.post.id}`;
      this.message = tmp;
    },

    formatPhoneNumber(number) {
      // console.log(typeof(String(number)))
      let formatted = String(number).replace(/\D/g, "");

      if (formatted.startsWith("0")) {
        formatted = "+62" + formatted.substr(1);
      }

      if (formatted.startsWith("62")) {
        formatted = "+62" + formatted.substr(2);
      }

      return formatted;
    },

    checkingFile(file) {
      console.log("inifile", file);
      if (file.filetype.includes("image")) {
        this.dialogPreviewPhoto(file);
      } else if (file.filetype.includes("video")) {
        console.log("ini video woy");
      }
    },
    moment,
    nonactiveComment() {
      if (this.statusComment == 1) {
        this.statusComment = 0;
      } else {
        this.statusComment = 1;
      }
    },
    deletePost() {
      // console.log("cek post id", this.post.id);
      this.loadingDelete = true;
      this.$store
        .dispatch("MasterPost/deletePost", this.post.id)
        .then((res) => {
          this.$store.commit("MasterPost/delete_post_by_id", this.post.id);
          // console.log("cek hasil hapus post", res);
        })
        .catch((err) => {})
        .finally(() => {
          this.loadingDelete = false;
          this.dialogDelete = false;
        });
    },
    buttonOption() {
      this.dialogOption = true;
    },
    buttonOption2() {
      this.dialogOption2 = true;
    },
    buttonDelete() {
      this.dialogDelete = true;
    },

    dialogPreviewPhoto(value) {
      // console.log("ini value", value);
      this.$q.dialog({
        component: communityPhotoPreview,

        componentProps: {
          src: value,
        },
      });
    },

    buttonShare() {
      this.dialogShare = true;
    },

    activateReadMore() {
      this.readMoreActivated = true;
    },
    like() {
      this.post.liked_count = 1;
      this.$store.dispatch("MasterPost/like", this.post.id).then((res) => {
        // if (this.post.author.id != this.Auth.auth.id) {
        //     }
        this.post.liked_count = res.data.liked_count;
        this.post.likes_count = res.data.likes_count;
        this.$forceUpdate();
      });
    },
    dislike() {
      this.post.liked_count = 0;
      this.$store.dispatch("MasterPost/dislike", this.post.id).then((res) => {
        // if (this.post.author.id !== this.Auth.auth.id) {
        // this.$store.commit("Post/liked", {post_id: this.post.id})
        this.post.liked_count = res.data.liked_count;
        this.post.likes_count = res.data.likes_count;
        this.$forceUpdate();
        // }
      });
    },
  },
};
</script>

<style></style>
