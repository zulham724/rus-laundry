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
          <q-avatar size="35px" style="background-color: #888888" @click="$router.push('/myprofile')">
            <q-img no-spinner src="~/assets/Avatar.png"></q-img>
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
        <q-infinite-scroll @load="onLoad" :offset="250">
          <!-- Postingan -->
          <q-intersection
            :ref="`intersection_${post.id}`"
            v-for="post in Post.posts.data"
            :key="post.id"
            :style="`min-height:${getItemPostHeight(post)}; width:100vw`"
          >
            <item-post-component
              v-on:update-height="updateHeight(post)"
              :post="post"
              :style="`position:relative;height:100%`"
            ></item-post-component>
          </q-intersection>
        </q-infinite-scroll>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import PostCardComponent from "src/components/post/PostCardComponent.vue";
export default {
  name: "PostPage",
  include: ["PostPage"],
  components: {
    "item-post-component": PostCardComponent, 
  },
  computed:{
    ...mapState(["Post"]),
  },
  data() {
    return {
      tab: "postingan",
      posts: {},
      search: "",
    };
  },
  mounted() {
    this.getAllPosts();
  },
  created(){
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
    onLoad(index, done){
      this.Post.posts.next_page_url ? this.$store.dispatch("Post/next").then(res => {
        done()
      }) : done();
    }
  },
};
</script>

<style></style>
