<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <div class="fixed-top" style="z-index: 999">
      <q-header class="bg-transparent" v-if="profilePost">
        <q-toolbar class="bg-white shadow-1">
          <q-btn
            @click="$router.back()"
            no-caps
            class="q-pa-md"
            flat
            style="color: white"
          >
            <q-icon size="20px" name="fas fa-arrow-left" style="color: #9b27f1">
            </q-icon>
          </q-btn>

          <q-toolbar-title
            v-if="profilePost.shop.name"
            class="text-left text-weight-medium text-subtitle2"
            style="color: black; font-size: 16px"
            >{{ profilePost.shop.name }}</q-toolbar-title
          >

          <!-- Button option -->
          <!-- <q-btn
            no-caps
            outline
            dense
            style="color: #898585"
            @click="$router.push('/edit-profile')"
          >
            <div
              class="text-weight-medium q-px-sm"
              style="color: #898585; font-size: 13px"
            >
              Edit profil
            </div>
          </q-btn> -->
        </q-toolbar>
      </q-header>
    </div>
    <q-page-container>
      <q-page class="mbl-child">
        <div v-if="profilePost" class="q-pa-md q-mb-sm">
          <div class="row">
            <div class="col-4 text-left self-center">
              <!--Avatar-->
              <div v-if="!profilePost.avatar" class="self-center">
                <q-avatar size="80px" style="background-color: #fff">
                  <q-img no-spinner src="~/assets/ld.png"></q-img>
                </q-avatar>
              </div>
              <div v-else-if="profilePost.avatar" class="self-center">
                <q-avatar
                  @click="$router.push('/my-profile')"
                  size="80px"
                  style="background-color: #fff"
                >
                  <q-img
                    no-spinner
                    :src="STORAGE_URL + `/` + profilePost.avatar"
                  ></q-img>
                </q-avatar>
              </div>
              <!-- <q-avatar size="80px" style="background-color: #888888">
                <q-img no-spinner src="~/assets/Avatar.png"></q-img>
              </q-avatar> -->
            </div>
            <div class="col-8">
              <div class="text-right q-pb-xs">
                <q-btn
                  disable
                  class="grad"
                  text-color="white"
                  :label="profilePost.shop ? 'Cabang' : 'Pemilik'"
                />
              </div>
              <!-- <div
                class="row col-12 q-px-sm"
                style="
                  border-radius: 20px 0px 20px 0px;
                  background-color: #f5f7f9;
                  width: auto;
                "
              >
                <div class="col-6 self-center text-center">
                  <div
                    class="text-weight-regular"
                    style="color: #898585; font-size: 18px"
                  >
                    Pengikut
                  </div>
                  <div
                    class="text-weight-regular"
                    style="color: #cacaca; font-size: 17px"
                  >
                    200
                  </div>
                </div>
                <div class="col-6 self-center text-center">
                  <div
                    class="text-weight-regular"
                    style="color: #898585; font-size: 18px"
                  >
                    Diikuti
                  </div>
                  <div
                    class="text-weight-regular"
                    style="color: #cacaca; font-size: 17px"
                  >
                    1000
                  </div>
                </div>
              </div> -->
            </div>
          </div>

          <div
            class="q-pt-sm text-weight-medium"
            style="color: #3a3838; font-size: 15px"
          >
            Tentang toko
          </div>
          <div
            v-if="profilePost"
            class="q-pt-xs text-weight-medium"
            style="color: #898585; font-size: 16px; width: 70vw"
          >
            {{ profilePost.shop.description }}
          </div>
          <div class="q-pt-xs" v-if="booleantest">
            <q-item>
              <q-item-section top avatar>
                <q-avatar>
                  <q-img
                    ratio="1"
                    :src="`${STORAGE_URL}/${profilePost.master[0].avatar}`"
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section v-if="profilePost.master">
                <q-item-label>{{ profilePost.master[0].name }}</q-item-label>
                <q-item-label caption>Pemilik</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="q-pt-xs col" v-else>
            <!-- <div class="row">
              <q-btn
                no-caps
                label="Ikuti"
                style="background-color: #7900ff; color: #fff"
              />
            </div> -->
            <div class="row" v-if="!profilePost.shop">
              <q-item class="full-width" clickable v-ripple>
                <q-item-section avatar>
                  <q-avatar size="20px">
                    <img src="~/assets/dna.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>Daftar Cabang</q-item-label>
                  <q-item-label caption lines="1">awdawdawdaw</q-item-label>
                </q-item-section>

                <q-item-section side>
                  <q-avatar size="20px">
                    <img src="~/assets/lbdr.svg" />
                  </q-avatar>
                </q-item-section>
              </q-item>
            </div>
          </div>
        </div>

        <q-separator></q-separator>

        <!--tabs postingan, like, dan video pribadi-->
        <q-tabs
          v-model="tab"
          class="text-black"
          indicator-color="purple-6"
          switch-indicator
        >
          <q-tab name="post" class="col-4 self-center" no-caps>
            <q-img
              class="q-pa-sm"
              no-spinner
              style="width: 20px; height: 22px"
              :src="
                tab == 'post'
                  ? require('../assets/profile-other-active.svg')
                  : require('../assets/profile-other.svg')
              "
            ></q-img>
          </q-tab>

          <q-tab class="col-4 self-center" name="like" no-caps>
            <q-img
              class="q-pa-sm"
              no-spinner
              style="width: 20px; height: 18px"
              :src="
                tab == 'like'
                  ? require('../assets/profile-like-active.svg')
                  : require('../assets/profile-like.svg')
              "
            ></q-img>
          </q-tab>
        </q-tabs>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="post" class="q-ma-none q-pa-none">
            <div v-if="this.posts">
              <q-infinite-scroll @load="onLoad" :offset="250">
                <!-- Postingan -->
                <q-intersection
                  :ref="`intersection_${post.id}`"
                  v-for="post in Post.my_posts.data"
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
          </q-tab-panel>
          <q-tab-panel name="like">
            <div>
              <div>TAB LIKE</div>
              <q-item clickable v-ripple :active="active">
                <q-item-section avatar>
                  <q-icon style="color: #2196f3" name="favorite_border" />
                </q-item-section>
                <q-item-section style="color: #2196f3"
                  >Postingan yang saya sukai</q-item-section
                >
                <q-item-section side>Hanya saya</q-item-section>
              </q-item>

              <q-infinite-scroll @load="onLoad">
                <!-- Postingan -->
                <q-intersection
                  class="mbl-child"
                  :ref="`intersection_${post.id}`"
                  v-for="post in posts.data"
                  :key="post.id"
                >
                  <item-post-component
                    class="mbl-child"
                    v-on:update-height="updateHeight(post)"
                    :post="post"
                    :style="`height:100%`"
                  ></item-post-component>
                </q-intersection>
              </q-infinite-scroll>
            </div>
          </q-tab-panel>
        </q-tab-panels>

        <!--  <div>
          <q-infinite-scroll @load="onLoad">
            <q-intersection
              class="mbl-child"
              :ref="`intersection_${post.id}`"
              v-for="post in posts.data"
              :key="post.id"
              :style="`min-height:${getItemPostHeight(post)}; width:100vw`"
            >
              <item-post-component
                class="mbl-child"
                v-on:update-height="updateHeight(post)"
                :post="post"
                :style="`position:relative;height:100%`"
              ></item-post-component>
            </q-intersection>
          </q-infinite-scroll>
        </div> -->
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";
import PostCardMyProfileComponent from "src/components/post/PostCardMyProfileComponent.vue";

export default {
  props: ["postauthorid"],
  include: ["MyProfilePage"],
  components: {
    "item-post-component": PostCardMyProfileComponent,
  },

  computed: {
    ...mapState(["Post", "Auth"]),
  },

  data() {
    return {
      booleantest: false,
      //hanya untuk test

      posts: {},
      tab: ref("post"),
      profilePost: {},

      //ini untuk menyimpan data auth
      profilePost: null,
      STORAGE_URL: STORAGE_URL,
    };
  },

  mounted() {
    this.getProfilePostsUser();
    this.getAllPostsUser();
  },

  created() {
    // if (!this.Post.posts.data) this.$store.dispatch("Post/index");
  },

  methods: {
    getProfilePostsUser() {
      this.$store
        .dispatch("Post/getProfilePostByUser", +this.postauthorid)
        .then((res) => {
          console.log(" profile post by user", res.data);
          this.profilePost = res.data;
        });
    },
    getAllPostsUser() {
      this.$store
        .dispatch("Post/getPostByUser", +this.postauthorid)
        .then((res) => {
          console.log("post by user", res);
          this.posts = res.data;
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
      this.Post.my_posts.next_page_url
        ? this.$store.dispatch("Post/nextMyPost").then((res) => {
            done();
          })
        : done();
    },
  },
};
</script>

<style>
.grad {
  background-image: linear-gradient(to right, #ff9ac5, #7900ff);
}
</style>
