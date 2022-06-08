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
                :src="`${STORAGE_URL}/${post.author.avatar}`"
              ></q-img>
            </q-avatar>
          </div>
          <!-- <q-avatar size="60px" style="background-color: #888888">
            <q-img no-spinner src="~/assets/Avatar.png"></q-img>
          </q-avatar> -->
        </div>
        <div class="col-8 q-pl-sm self-center">
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
        <div class="col-2 text-right self-center">
          <!-- Button option -->
          <q-btn dense flat round @click="buttonOption()">
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
            class="q-mx-sm"
            style="border-radius: 10px"
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="blue"
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
                style="width: 100%; height: 100%; border-radius:10px"
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
        <div class="row col-2 self-center">
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
        v-if="post.comments_count > 0"
        @click="$router.push(`/post/${post.id}/comment-of-post-owner`)"
        class="text-weight-regular q-px-md q-py-xs"
        style="color: #b1b1b1; font-size: 10px"
      >
        Lihat {{ post.comments_count }} komentar
      </div>

      <!-- Show comment  -->
      <div class="row self-center q-px-md" v-if="post.comments.length">
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
            @click="$router.push(`/edit-post/${this.post.id}`)"
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

              <!-- Button Instagram -->

              <!-- Button WhatsApp -->
              <q-btn round size="20px" outline color="green-8" class="q-mx-xs">
                <q-avatar icon="fab fa-whatsapp" size="30px"></q-avatar>
              </q-btn>

              <!-- Button Telegram -->
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
      slide: 0,
      dialogOption: false,
      dialogShare: false,
      readMoreActivated: false,
      link: null,
      STORAGE_URL: STORAGE_URL,
    };
  },
  mounted() {
    console.log("posttt", this.post);
    // this.post = this.post;
    // console.log("cek post", this.post.author);
    //   console.log( this.$refs["post_" + this.post.id])
    const height = this.$refs["post_" + this.post.id].clientHeight;
    this.$store.commit("MasterPost/set_size_my_post", {
      id: this.post.id,
      size: { height: height },
    });
    this.$emit("update-height");

    this.link = `${this.APP_URL}/single-post/${this.post.id}`;
  },
  methods: {
    moment,
    buttonOption() {
      this.dialogOption = true;
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
