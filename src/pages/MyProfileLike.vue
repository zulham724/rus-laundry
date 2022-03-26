<template>
  <q-layout>
    <q-header>
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
          class="text-left text-weight-medium text-subtitle2"
          style="color: black; font-size: 16px"
          >Nama pengguna lain</q-toolbar-title
        >
        <!-- <q-space>  </q-space> -->
        <!-- Button option -->
        <q-btn dense flat round @click="buttonOption()">
          <q-icon name="fas fa-ellipsis-v" size="16px" color="black"></q-icon>
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
                class="text-weight-medium text-right"
                style="color: #919193; font-size: 15px"
              >
                Latihan Laundry
              </div>
              <div
                class="row col-12 q-px-sm q-pt-md"
                style="
                  border-radius: 20px 0px 20px 0px;
                  background-image: linear-gradient(
                    to top right,
                    #ffffff,
                    #f5f7f9
                  );
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
        <div class="row q-pa-sm">
          <div class="col-1 text-center self-center">
            <q-icon name="far fa-heart" size="20px" color="blue"></q-icon>
          </div>
          <div class="col-7 self-center">
            <div class="text-weight-medium q-pl xs" style="color: #2196f3">
              Postingan yang saya sukai
            </div>
          </div>
          <div class="col-4 text-right">
            <q-select
              dense
              color="blue-4"
              v-model="model"
              :options="options"
              style="font-size: 12px; color: #b1b1b1"
              class="text-weight-medium"
            />
          </div>
        </div>
        <q-separator></q-separator>

        <!-- Postingan -->
        <!-- <div>
          <q-infinite-scroll @load="onLoad" :offset="250">
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
        </div> -->

        <div class="row text-center justify-center">
          <q-img
            no-spinner
            src="~/assets/animasi-proses-cuci.gif"
            style="width: 200px"
          ></q-img>
          <div
            class="q-pt-md text-weight-medium"
            style="color: #3a3838; font-size: 15px"
          >
            Video yang disukai pengguna ini bersifat private
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
            <!-- Button report akun -->
            <q-card-actions class="q-pt-md">
              <q-btn no-caps class="full-width" dense flat>
                <div
                  class="row full-width q-py-sm text-weight-regular"
                  style="font-size: 20px; color: #3a3838"
                >
                  Laporkan akun ini
                </div>
              </q-btn>
            </q-card-actions>

            <!-- Button Share akun -->
            <q-card-actions>
              <q-btn no-caps class="full-width" dense flat>
                <div
                  class="row full-width q-py-sm text-weight-regular"
                  style="font-size: 20px; color: #3a3838"
                >
                  Bagikan akun ini
                </div>
              </q-btn>
            </q-card-actions>

            <!-- Button Blokir akun -->
            <q-card-actions>
              <q-btn no-caps class="full-width" dense flat>
                <div
                  class="row full-width q-py-sm text-weight-regular"
                  style="font-size: 20px; color: #3a3838"
                >
                  Blokir akun ini
                </div>
              </q-btn>
            </q-card-actions>

            <!-- Button Bisukan notifikasi akun -->
            <q-card-actions>
              <q-btn no-caps class="full-width" dense flat>
                <div
                  class="row full-width q-py-sm text-weight-regular"
                  style="font-size: 20px; color: #3a3838"
                >
                  Bisukan notifikasi dari akun ini
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
import { ref } from "vue";
import { mapState } from "vuex";
import PostCardComponent from "src/components/post/PostCardComponent.vue";

export default {
  name: "MyProfileLikePage",
  include: ["MyProfileLikePage"],
  components: {
    "item-post-component": PostCardComponent,
  },

  computed: {
    ...mapState(["Post"]),
  },

  data() {
    return {
      dialogOption: false,
      posts: {},
      options: ["Hanya saya", "Pengikut", "Semua orang"],
      model: ref("Semua orang"),
    };
  },

  mounted() {
    this.getAllPosts();
  },

  created() {
    if (!this.Post.posts.data) this.$store.dispatch("Post/index");
  },

  methods: {
    buttonOption() {
      this.dialogOption = true;
    },
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
