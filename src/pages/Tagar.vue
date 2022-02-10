<template>
  <q-layout class="mbl">
    <q-page-container>
    <div class="fixed-top bg-white " style="z-index: 999">
      <q-header class="q-pa-md bg-white">
        <div class="row bg-white">
          <div class="col-1 self-center">
            <q-btn dense no-caps flat>
              <q-icon
                size="20px"
                name="fas fa-arrow-left"
                style="color: #9b27f1"
              >
              </q-icon>
            </q-btn>
          </div>
          <div class="col-11">
            <div
              class="text-weight-medium"
              style="color: #3a3838; font-size: 20px"
            >
              Tagar
            </div>
          </div>
        </div>
      </q-header>
      </div>

      <q-page>
        <!-- Tagar -->
        <div class="q-pb-md">
          <q-list>
            <q-item clickable class="q-my-xs q-mx-md">
              <q-item-section avatar>
                <q-avatar size="30px">
                  <q-icon
                    name="fa-solid fa-bell"
                    size="30px"
                    color="black"
                  ></q-icon>
                </q-avatar>
              </q-item-section>
              <q-item-section class="text-weight-medium self-center">
                <q-item-label style="color: #000000; font-size: 20px"
                  >#laundry</q-item-label
                >
                <q-item-label style="color: #919193; font-size: 13px"
                  >10k postingan</q-item-label
                >
              </q-item-section>
              <q-item-section side>
                <q-btn round flat>
                  <q-icon
                    name="far fa-heart"
                    color="black"
                    size="20px"
                  ></q-icon>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <!-- Isi post Tagar -->
        <q-infinite-scroll @load="onLoad" :offset="250">
          <!-- Postingan -->
          <q-intersection
            :ref="`intersection_${post.id}`"
            v-for="post in Post.posts.data"
            :key="post.id"
            :style="`min-height:${getItemPostHeight(post)}; width:100vw`"
          >
            <search-detail-post
              v-on:update-height="updateHeight(post)"
              :post="post"
              :style="`position:relative;height:100%`"
            ></search-detail-post>
          </q-intersection>
        </q-infinite-scroll>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import SearchDetailPost from "src/pages/SearchDetailPost.vue";
export default {
  components: {
    "search-detail-post": SearchDetailPost,
  },

  computed: {
    ...mapState(["Post"]),
  },
  data() {
    return {
      tab: "semua",
      posts: {},
    };
  },
  mounted() {
    this.getAllPosts();
  },
  created() {
    if (!this.Post.posts.data) this.$store.dispatch("Post/index");
  },
  methods: {
    getAllPosts() {
      this.$store.dispatch("Post/index").then((res) => {
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
      console.log(post.size.height);
      this.$refs["intersection_" + post.id][0].$el.style.minHeight =
        post.size.height + "px";
      // let $ref=this.$refs["intersection_"+post.id];
      // console.log($ref)
      console.log(this.$refs["intersection_" + post.id][0].$el.style.minHeight);
      // alert(post.size.height)
    },
    onLoad(index, done) {
      this.Post.posts.next_page_url
        ? this.$store.dispatch("Post/next").then((res) => {
            done();
          })
        : done();
    },
  },
};
</script>

<style>
</style>