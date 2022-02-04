<template>
  <q-layout>
    <q-page>
      <!-- Search bar -->
      <div class="row justify-center q-pa-md">
        <q-input
          dense
          class="q-mx-xs full-width"
          type="search"
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

      <!-- Histori pencarian -->
      <div class="row text-weight-medium q-pa-md q-pt-md">
        <div class="row col-12">
          <div class="col-6 text-left" style="font-size: #15px; color: #3a3838">
            Histori pencarian
          </div>
          <div
            class="col-6 text-right"
            style="font-size: #13px; color: #b1b1b1"
          >
            Hapus semua
          </div>
        </div>

        <!-- List histori pencarian -->
        <q-list class="full-width">
          <div v-for="n in 3" :key="n">
            <q-item class="row q-gutter-none">
              <q-item-section avatar>
                <q-icon
                  name="fas fa-history"
                  size="20px"
                  color="black"
                ></q-icon>
              </q-item-section>

              <q-item-section>
                <div style="color: #8b8787">laundry_terserah</div>
              </q-item-section>

              <q-item-section side class="text-right">
                <q-btn dense round flat>
                  <q-icon
                    name="fas fa-times"
                    size="20px"
                    color="black"
                  ></q-icon>
                </q-btn>
              </q-item-section>
            </q-item>
          </div>
        </q-list>
      </div>

      <!-- Postingan terpopuler -->
      <div class="text-weight-medium q-pt-lg q-pa-md">
        <div class="row" style="color: #3a3838; font-size: 15px">
          Postingan terpopuler
        </div>
      </div>
      <div>
        <q-infinite-scroll @load="onLoad" :offset="250">
          <!-- Postingan -->
          <q-intersection
            :ref="`intersection_${post.id}`"
            v-for="post in posts.data"
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
      </div>

      <!-- tagar terpopuler -->
      <div class="q-pt-md q-pa-md">
        <div
          class="row text-weight-medium"
          style="color: #3a3838; font-size: 17px"
        >
          Tagar terpopuler
        </div>
        <div class="q-pt-sm">
          <div
            v-for="n in 5"
            :key="n"
            class="q-pt-xs"
            style="color: #8b8787; font-size: 12px"
          >
            #sabuncucipakaianviral
          </div>
        </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import PostCardComponent from "src/components/post/PostCardComponent.vue";

export default {
  components: {
    "item-post-component": PostCardComponent,
  },
  computed: {
    ...mapState(["Post"]),
  },

  data() {
    return {
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