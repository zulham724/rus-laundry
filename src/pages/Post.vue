<template class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
  <q-layout style="background-color: #fafafa">
    <q-header style="background-color: #ffffff" class="q-pb-md">
      <!-- <q-pull-to-refresh @refresh = "refresh" > -->
      <div class="row q-pa-md self-center bg-white">
        <div
          class="col-5 text-weight-medium self-center"
          style="color: #3a3838; font-size: 20px"
        >
          Postingan
        </div>
        <div class="col-5">
          <q-btn flat dense no-caps @click="$router.push('/make-post')">
            <div
              class="row justify-center q-px-sm q-py-xs"
              style="background-color: #f5f7f9; border-radius: 10px"
            >
              <q-icon
                class="self-center"
                name="far fa-image"
                size="15px"
                style="color: #000000"
              />
              <div
                class="text-weight-medium q-pl-sm"
                style="font-size: 14px; color: #3a3838"
              >
                Buat postingan
              </div>
            </div>
          </q-btn>
        </div>
        <div class="col-1 text-center self-center">
          <q-btn dense round flat @click="$router.push('/notification')">
            <q-icon
              name="far fa-bell"
              sizes="20px"
              style="color: #888888"
            ></q-icon>
          </q-btn>
        </div>
        <div class="col-1 text-center q-pr-xs self-center">
          <q-avatar size="35px" style="background-color: #888888">
            <q-img src="~/assets/Avatar.png"></q-img>
          </q-avatar>
        </div>
      </div>
      <div class="row q-px-md">
        <!-- Search -->
        <q-input
          dense
          class="q-ml-sm full-width"
          type="search"
          rounded
          outlined
          v-model="search"
          label="Cari"
        >
          <template v-slot:prepend>
            <q-icon
              name="search"
              class="self-center"
              size="25px"
              color="grey"
            />
          </template>
        </q-input>
      </div>
      <!-- </q-pull-to-refresh>  -->
    </q-header>
    <q-page-container>
      <q-page class="q-mt-sm bg-white">
        <!-- Postingan -->
        <div v-for="post in posts.data" :key="post.id" class="q-py-md">
          <div class="row q-px-md">
            <div class="col-2">
              <!-- Image profile -->
              <q-avatar size="60px" style="background-color: #888888">
                <q-img no-spinner src="~/assets/Avatar.png"></q-img>
              </q-avatar>
            </div>
            <div class="col-8 q-pl-md">
              <!-- Nama Profile -->
              <div
                class="text-weight-medium"
                style="color: #3a3838; font-size: 20px"
              >
                {{ post.author_id.name }}
              </div>
              <!-- Waktu posting -->
              <div
                class="text-weight-medium"
                style="color: #b1b1b1; font-size: 12px"
              >
                {{ moment(post.created_at).locale("id").fromNow() }}
              </div>
            </div>
            <div class="col-2 text-right">
              <!-- Button option -->
              <q-btn dense flat round @click="buttonOption()">
                <q-icon name="fas fa-ellipsis-v" size="16px"></q-icon>
              </q-btn>
            </div>
          </div>

          <!-- Isi post -->
          <div class="row q-px-md">
            <div
              class="q-py-sm text-weight-medium text-justify"
              style="font-size: 15px; color: #5a5656"
            >
              <div>
                <span v-if="!readMoreActivated"
                  >{{ post.body.slice(0, 130) }}
                </span>
                <a
                  style="color: #b1b1b1; font-size: 12px"
                  class="cursor-pointer text-weight-light"
                  v-if="post.body.length > 130"
                  @click="activateReadMore"
                >
                  ..selengkapnya
                </a>
                <span v-if="readMoreActivated" v-html="post.body"></span>
              </div>
            </div>
          </div>
          <!-- Isi video/foto -->
          <div class="full-width full-height q-py-xs">
            <div v-if="post.files.length">
              <q-carousel
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
                class="q-my-md"
                  v-for="(file, f) in post.files"
                  :key="file.id"
                  :name="f"
                 style="padding:0px; margin:0px"
                >
                  <vue-plyr v-if="file.filetype.includes('video')">
                    <video :src="storageUrl + `/` + file.src"></video>
                  </vue-plyr>

                  <q-img
                    v-else-if="file.filetype.includes('image')"
                    :src="storageUrl + `/` + file.src"
                    style="width:100%; height:100%"
                  >
                  </q-img>
                </q-carousel-slide>
              </q-carousel>
            </div>
          </div>

          <!-- Button like, comment, show -->
          <div class="row">
            <div class="row col-3 self-center">
              <q-btn dense round flat size="18px">
                <q-Icon
                  name="far fa-heart"
                  size="25px"
                  style="color: #b1b1b1"
                ></q-Icon>
              </q-btn>
              <div
                class="text-weight-medium self-center"
                style="color: #b1b1b1; font-size: 15px"
              >
                {{ post.likes_count }}
              </div>
            </div>
            <div class="row col-3 self-center">
              <q-btn dense round flat size="18px">
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
            <div class="row col-3 self-center">
              <q-btn dense round flat size="18px">
                <q-Icon
                  name="far fa-eye"
                  size="25px"
                  style="color: #b1b1b1"
                ></q-Icon>
              </q-btn>
              <div
                class="text-weight-medium self-center"
                style="color: #b1b1b1; font-size: 15px"
              >
                {{ post.readers_count }}
              </div>
            </div>
          </div>

          <!-- Button show comment -->
          <div
            v-if="post.comments_count > 0"
            @click="$router.push('/comment-of-post')"
            class="text-weight-regular"
            style="color: #b1b1b1; font-size: 10px"
          >
            Lihat {{ post.comments_count }} komentar
          </div>

          <!-- Show comment  -->
          <div class="row self-center q-px-md">
            <div
              class="text-weight-regular self-center"
              style="font-size: 12px; color: #3a3838"
            >
              kios_laundry
            </div>
            <div
              class="text-weight-regular self-center q-pl-sm"
              style="color: #b1b1b1; font-size: 10px"
            >
              Kenapa kok pake vanish?...
            </div>
          </div>
        </div>

        <q-dialog v-model="dialogOption" position="bottom">
          <q-card class="justify-center full-width">
            <q-card-section>
              <div
                class="justify-center full-width text-center q-px-xl"
                style="display: block; border-radius: 10px; align: center"
              >
                <q-separator size="5px"></q-separator>
              </div>
            </q-card-section>
            <!-- Button Share -->
            <q-card-actions class="q-pt-md">
              <q-btn no-caps class="full-width" dense flat>
                <div class="row full-width q-py-sm">
                  <div class="col-3">
                    <q-btn dense outline round size="25px">
                      <q-icon
                        name="fas fa-share-alt"
                        style="color: #787878"
                        size="25px"
                      ></q-icon>
                    </q-btn>
                  </div>
                  <div
                    class="col-8 text-weight-medium self-center text-left"
                    style="color: #3a3838; font-size: 20px"
                  >
                    Bagikan postingan
                  </div>
                </div>
              </q-btn>
            </q-card-actions>

            <!-- Button Report -->
            <q-card-actions>
              <q-btn no-caps class="full-width" dense flat>
                <div class="row full-width q-py-sm">
                  <div class="col-3">
                    <q-btn dense outline round size="25px">
                      <q-icon
                        name="fas fa-exclamation-triangle"
                        style="color: #787878"
                        size="25px"
                      ></q-icon>
                    </q-btn>
                  </div>
                  <div
                    class="col-8 text-weight-medium self-center text-left"
                    style="color: #3a3838; font-size: 20px"
                  >
                    Laporkan postingan
                  </div>
                </div>
              </q-btn>
            </q-card-actions>

            <!-- Button Hide Post -->
            <q-card-actions>
              <q-btn no-caps class="full-width" dense flat>
                <div class="row full-width q-py-sm">
                  <div class="col-3">
                    <q-btn dense outline round size="25px">
                      <q-icon
                        name="far fa-eye-slash"
                        style="color: #787878"
                        size="25px"
                      ></q-icon>
                    </q-btn>
                  </div>
                  <div
                    class="col-8 text-weight-medium self-center text-left"
                    style="color: #3a3838; font-size: 20px"
                  >
                    Sembunyikan postingan
                  </div>
                </div>
              </q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import moment from "moment";
export default {
  name: "PostPage",
  include: ["PostPage"],
  data() {
    return {
      tab: "postingan",
      posts: {},
      search: "",
      slide: 0,
      dialogOption: false,
      readMoreActivated: false,
      storageUrl: STORAGE_URL,
    };
  },
  mounted() {
    this.getAllPosts();
  },
  methods: {
    moment,
    buttonOption() {
      this.dialogOption = true;
    },
    activateReadMore() {
      this.readMoreActivated = true;
    },
    getAllPosts() {
      this.$store.dispatch("Post/index").then((res) => {
        this.posts = res.data;
      });
    },
  },
};
</script>

<style></style>
