<template class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
  <q-layout style="background-color: #fafafa">
    <div class="fixed-top bg-white mbl-child" style="z-index: 999">
      <q-header style="background-color: #ffffff" class="q-pb-md">
        <div class="row q-ma-sm self-center">
          <div
            class="col-5 row text-weight-medium self-center"
            style="color: #3a3838"
          >
            <q-btn
              @click="$router.push('/home-owner')"
              no-caps
              dense
              flat
              style="color: white"
            >
              <q-icon
                size="20px"
                name="fas fa-arrow-left"
                style="color: #3a3838"
              >
              </q-icon>
            </q-btn>
            <div class="q-pl-sm" style="font-size: larger">Postingan</div>
          </div>
          <div class="col-5 text-center self-center">
            <q-btn flat dense no-caps @click="$router.push('/make-post-owner')">
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
                  class="text-weight-medium q-pl-xs"
                  style="font-size: small; color: #3a3838"
                >
                  Buat postingan
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col-1 text-center self-center">
            <!-- <q-btn dense round flat @click="$router.push('/notification')">
              <q-icon
                name="far fa-bell"
                sizes="18px"
                style="color: #888888"
              ></q-icon>
            </q-btn> -->
          </div>
          <div v-if="dataAuth" class="col-1 text-center self-center">
            <!--Avatar-->
            <div v-if="!dataAuth.avatar" class="self-center">
              <q-avatar @click="$router.push('/my-profile-owner')" size="30px">
                <q-img no-spinner src="~/assets/ld.png"></q-img>
              </q-avatar>
            </div>
            <div v-else-if="dataAuth.avatar" class="self-center">
              <q-avatar @click="$router.push('/my-profile-owner')" size="30px">
                <q-img
                  no-spinner
                  :src="STORAGE_URL + `/` + dataAuth.avatar"
                ></q-img>
              </q-avatar>
            </div>
            <!-- <q-avatar
              size="30px"
              style="background-color: #888888"
              @click="$router.push('/my-profile')"
            >
              <q-img no-spinner :src="STORAGE_URL + `/` + dataAuth.avatar"></q-img>
            </q-avatar> -->
          </div>
        </div>
        <div class="row q-px-md">
          <!-- Search -->
          <q-input
            @click="$router.push('/search')"
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
      </q-header>
    </div>

    <q-page-container>
      <q-page class="q-mt-sm mbl-child">
        <q-pull-to-refresh @refresh="refresh">
          <!-- Skeleton -->
          <div v-if="isLoad">
            <q-card class="q-pb-lg" v-for="n in 9" :key="n">
              <q-item class="q-pa-none">
                <!-- Avatar -->
                <q-card-section avatar>
                  <q-skeleton type="QAvatar" size="60px" />
                </q-card-section>

                <q-item-section>
                  <q-item-label>
                    <q-skeleton type="text" width="150px" />
                  </q-item-label>
                  <q-item-label caption>
                    <q-skeleton type="text" width="100px" />
                  </q-item-label>
                </q-item-section>
              </q-item>

              <!-- Isi post -->
              <q-item-section class="q-px-md q-py-sm">
                <q-item-label>
                  <q-skeleton type="text" />
                  <q-skeleton type="text" />
                  <q-skeleton type="text" />
                </q-item-label>
              </q-item-section>

              <q-skeleton height="350px" square class="q-mx-md q-m" />
            </q-card>
          </div>

          <div v-else-if="isLoad == false && this.posts">
            <q-infinite-scroll @load="onLoad" :offset="250">
              <!-- Postingan -->
              <q-intersection
                class="mbl-child"
                :ref="`intersection_${post.id}`"
                v-for="post in MasterPost.posts.data"
                :key="post.id"
                :style="`min-height:${getItemPostHeight(post)}; `"
              >
                <item-post-component
                  class="mbl-child"
                  v-on:update-height="updateHeight(post)"
                  :post="post"
                  :style="`position:relative;height:100%`"
                ></item-post-component>
              </q-intersection>
            </q-infinite-scroll>
          </div>

          <div class="text-center q-mt-xl q-pt-xl" v-else>
            <q-img
              no-spinner
              src="~/assets/24815-crying-heart.gif"
              width="180px"
            />
            <div>Belum ada postingan yang dibuat</div>
          </div>
        </q-pull-to-refresh>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import PostCardComponent from "src/components/post/PostCardOwnerComponent.vue";
export default {
  name: "PostPage",
  include: ["PostPage"],
  components: {
    "item-post-component": PostCardComponent,
  },
  computed: {
    ...mapState(["Post", "Auth", "MasterPost"]),
  },
  data() {
    return {
      isLoad: false,
      tab: "postingan",
      posts: {},
      search: "",
      //ini untuk menyimpan data auth
      dataAuth: null,
      STORAGE_URL: STORAGE_URL,
    };
  },
  mounted() {
    // console.log("ini master post", this.MasterPost);
    // console.log("post", this.Post);
    // console.log('cekkkkkk', this.Post);

    this.dataAuth = this.Auth.auth;
    // console.log('auth', this.dataAuth);
    this.getAllPosts();
  },
  created() {
    // if (!this.Post.posts.data) this.$store.dispatch("Post/index");
  },
  methods: {
    getAllPosts() {
      return new Promise((resolve, reject) => {
        (this.isLoad = true),
          this.$store
            .dispatch("MasterPost/index")
            .then((res) => {
              this.posts = res.data;
              // console.log('this post', this.posts)
              resolve(res.data);
              console.log("ini data post", res.data);
            })
            .catch((err) => {
              reject(err);
            })
            .finally(() => {
              this.isLoad = false;
            });
      });
    },
    getItemPostHeight(post) {
      return `${
        post.size ? `${post.size.height}` : post.files.length ? "30vh" : "30vh"
      }`;
    },
    updateHeight(post) {
      // this.$refs["intersection_"+post.id].$el.style.minHeight=post.size.height;
      // console.log(post.size.height);
      this.$refs["intersection_" + post.id][0].$el.style.minHeight =
        post.size.height + "px";
      // let $ref=this.$refs["intersection_"+post.id];
      // console.log($ref)
      // console.log(this.$refs["intersection_" + post.id][0].$el.style.minHeight);
      // alert(post.size.height)
    },
    onLoad(index, done) {
      this.MasterPost.posts.next_page_url
        ? this.$store.dispatch("MasterPost/next").then((res) => {
            done();
          })
        : done();
    },
    refresh(done) {
      this.getAllPosts().then((res) => {
        if (done) done();
      });
    },
  },
};
</script>

<style></style>
