<template>
  <q-layout>
    <q-header>
      <q-toolbar class="bg-white shadow-1">
        <q-btn
          @click="$router.push('/')"
          no-caps
          class="q-pa-md"
          flat
          style="color: white"
        >
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #9b27f1">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-weight-medium text-subtitle2"
          style="color: black; font-size: 16px"
          >Nama pengguna lain</q-toolbar-title
        >

        <!-- Button option -->
        <q-btn no-caps outline dense style="color: #898585" @click="$router.push('/edit-profile')">
          <div
            class="text-weight-medium q-px-sm"
            style="color: #898585; font-size: 13px"
          >
            Edit profil
          </div>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="">
        <div class="q-pa-md q-mb-lg">
          <div class="row">
            <div class="col-4 text-left">
              <q-avatar size="80px" style="background-color: #888888">
                <q-img no-spinner src="~/assets/Avatar.png"></q-img>
              </q-avatar>
            </div>
            <div class="col-8">
              <div
                class="text-weight-medium text-right q-pb-sm"
                style="color: #919193; font-size: 15px"
              >
                Cabang Kudus
              </div>
              <div
                class="row col-12 q-px-sm q-py-xs"
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
              </div>
            </div>
          </div>

          <div
            class="q-pt-sm text-weight-medium"
            style="color: #3a3838; font-size: 15px"
          >
            Bio
          </div>
          <div
            class="q-pt-xs text-weight-medium"
            style="color: #898585; font-size: 16px; width: 70vw"
          >
            Laundry Indonesia layanan laundry paling jos gandos
          </div>
        </div>
        <q-separator></q-separator>

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

        <q-page-sticky position="bottom-right" :offset="[18, 60]">
          <q-fab
            icon="fas fa-plus"
            external-label
            vertical-actions-align="left"
            direction="up"
            style="
              background-image: linear-gradient(to right top, #ff9ac5, #7900ff);
              color: white;
            "
          >
            <q-fab-action
              external-label
              label-class="bg-transparent text-weight-medium text-grey-8 text-body1"
              style="color: #dc2baa; background-color: white"
              label-position="left"
              class="shadow-1"
              @click="openMedia()"
              icon="perm_media"
              label="Media"
            />
            <q-fab-action
              external-label
              label-class="bg-transparent text-weight-medium text-grey-8 text-body1"
              style="color: #dc2baa; background-color: white"
              label-position="left"
              class="shadow-1"
              @click="cek()"
              icon="photo_camera"
              label="Kamera"
            />
          </q-fab>
        </q-page-sticky>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import PostCardMyProfileComponent from "src/components/post/PostCardMyProfileComponent.vue";

export default {
  name: "MyProfilePage",
  include: ["MyProfilePage"],
  components: {
    "item-post-component": PostCardMyProfileComponent,
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

<style></style>
