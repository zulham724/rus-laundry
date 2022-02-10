<template>
  <q-layout class="mbl" style="background-color: white">
    <q-page-container>
      <div class="fixed-top bg-red" style="z-index: 999">
        <q-header class="bg-white">
          <div class="row q-pa-md">
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
              <!-- Search bar -->
              <div class="row justify-center">
                <q-input
                  dense
                  class="q-mx-xs full-width"
                  type="search"
                  outlined
                  v-model="search"
                  placeholder="Cari"
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
            </div>
          </div>

          <!-- Tabs -->
          <q-tabs
            dense
            stretch
            inline-label
            id="thing_to_stick"
            active-color="purple-8"
            v-model="tab"
            no-caps
            class="text-weight-medium"
            style="color: #3a3838; font-size: 14px"
          >
            <q-tab name="semua" label="semua" />
            <q-tab name="orang" label="orang" />
            <q-tab name="#tagar" label="#tagar" />
            <q-tab name="postingan" label="postingan" />
          </q-tabs>
          <q-separator></q-separator>
        </q-header>
      </div>
      <q-page>
        <!-- Isi tabs / tabs panel -->
        <q-tab-panels v-model="tab" animated >
          <q-tab-panel name="semua">
            <search-detail-all></search-detail-all>
          </q-tab-panel>
          <q-tab-panel name="orang">
            <search-detail-person></search-detail-person>
          </q-tab-panel>
          <q-tab-panel name="#tagar">
            <search-detail-tagar></search-detail-tagar>
          </q-tab-panel>
          <q-tab-panel name="postingan" class="q-pa-none q-ma-none">
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
          </q-tab-panel>
        </q-tab-panels>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import SearchDetailAll from "src/pages/SearchDetailAll.vue";
import SearchDetailPerson from "src/pages/SearchDetailPerson.vue";
import SearchDetailTagar from "src/pages/SearchDetailTagar.vue";
import SearchDetailPost from "src/pages/SearchDetailPost.vue";

export default {
  components: {
    "search-detail-all": SearchDetailAll,
    "search-detail-person": SearchDetailPerson,
    "search-detail-tagar": SearchDetailTagar,
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