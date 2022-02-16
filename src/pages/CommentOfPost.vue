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
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #49c2c0">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-weight-medium text-subtitle2"
          style="color: black; font-size: 16px"
          >Komentar</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pb-xl" v-if="post">
        <div class="full-width q-ma-md">
          <!-- Profil -->
          <div
            class="row q-px-lg q-py-xs q-mx-sm"
            style="
              border-radius: 20px 0px 20px 0px;
              background-color: #f7f7f7;
              width: auto;
            "
          >
            <div class="q-pr-xs self-center">
              <q-avatar size="40px">
                <q-img src="~/assets/Avatar.png" no-spinner></q-img>
              </q-avatar>
            </div>
            <div class="self-center">
              <div
                class="text-weight-bold"
                style="color: #3a3838; font-size: 17px; width: auto"
              >
                {{ post.author.name }}
              </div>
              <div
                class="text-weight-medium"
                style="color: #b1b1b1; font-size: 12px"
              >
                {{ moment(post.created_at).fromNow() }}
              </div>
            </div>
          </div>

          <!-- Isi Comment -->

          <div
            class="row q-pa-md text-weight-regular"
            style="font-size: 15px; color: #5a5656"
          >
            <div
              class="full-height"
              style="display: block; background-color: #c4c4c4; width: 1px"
            >
            </div>
            <div class="col q-pl-sm">
              {{ post.body }}
            </div>
          </div>
        </div>
        <q-separator size="2px"></q-separator>

        <!-- Comment balasan -->
        <div v-for="(comment, c) in post.comments" :key="comment.id">
          <div class="q-ma-md">
            <div class="row col-12">
              <!-- Profil     -->
              <div
                class="row col-12 q-px-sm"
                style="
                  border-radius: 20px 0px 20px 0px;
                  background-color: #f7f7f7;
                  width: auto;
                "
              >
                <div class="col-3 q-pa-xs self-center">
                  <q-avatar size="40px">
                    <q-img src="~/assets/Avatar.png" no-spinner></q-img>
                  </q-avatar>
                </div>
                <div class="col self-center q-pl-lg">
                  <div
                    class="text-weight-bold"
                    style="color: #3a3838; font-size: 17px; width: auto"
                  >
                    {{ comment.user.name }}
                  </div>
                  <div
                    class="text-weight-medium"
                    style="color: #b1b1b1; font-size: 12px"
                  >
                    {{ moment(comment.created_at).fromNow() }}
                  </div>
                </div>
              </div>

              <q-space></q-space>

              <!-- Button like -->
              <q-btn
                dense
                round
                flat
                size="20px"
                :color="comment.liked_count ? 'red' : 'grey'"
                :icon="comment.liked_count ? 'favorite' : 'favorite_border'"
                @click="
                  comment.liked_count ? dislikeComment(c) : likeComment(c)
                "
              >
              </q-btn>
            </div>

            <!-- Isi Comment -->

            <div
              class="row q-pa-md text-weight-regular"
              style="font-size: 15px; color: #5a5656"
            >
              <div
                class="full-height"
                style="display: block; background-color: #c4c4c4; width: 1px"
              ></div>
              <div class="col q-pl-sm">
                {{ comment.value }}
              </div>
            </div>

            <!-- Button reply & jumlah like -->
            <div class="row col-12 self-center q-pl-md q-pr-xs">
              <div
                class="text-weight-medium q-pr-sm"
                style="color: #b1b1b1; font-size: 12px"
              >
                Balas
              </div>
              <div
                class="text-weight-medium q-pl-xs"
                style="color: #b1b1b1; font-size: 12px"
              >
                {{ comment.likes_count }} suka
              </div>
              <q-space></q-space>
              <div
                v-if="lihatBalasan"
                class="text-weight-medium"
                style="color: #b1b1b1; font-size: 12px"
              >
                Lihat 1 balasan
              </div>
            </div>

            <!-- Lihat Comment balasan -->
            <div
              v-for="replies_comment in replies_comments"
              :key="replies_comment.id"
            >
              <div class="row q-ma-md q-pl-md">
                <div class="row col-12">
                  <!-- Profil     -->
                  <div
                    class="row col-12 q-px-sm"
                    style="
                      border-radius: 20px 0px 20px 0px;
                      background-color: #f7f7f7;
                      width: auto;
                    "
                  >
                    <div class="col-3 q-pa-xs self-center">
                      <q-avatar size="40px">
                        <q-img src="~/assets/Avatar.png" no-spinner></q-img>
                      </q-avatar>
                    </div>
                    <div class="col self-center q-pr-sm">
                      <div
                        class="text-weight-bold"
                        style="color: #3a3838; font-size: 17px; width: auto"
                      >
                        IndonesiaLaundry
                      </div>
                      <div
                        class="text-weight-medium"
                        style="color: #b1b1b1; font-size: 12px"
                      >
                        30 menit
                      </div>
                    </div>
                  </div>

                  <q-space></q-space>

                  <!-- Button like -->
                  <q-btn dense round flat size="20px">
                    <q-icon
                      name="far fa-heart"
                      size="20px"
                      style="color: #b1b1b1"
                    ></q-icon>
                  </q-btn>
                </div>

                <!-- Isi Comment -->

                <div
                  class="row q-pa-md text-weight-regular"
                  style="font-size: 15px; color: #5a5656"
                >
                  <div
                    class="full-height"
                    style="
                      display: block;
                      background-color: #c4c4c4;
                      width: 1px;
                    "
                  ></div>
                  <div class="col q-pl-sm">
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                  </div>
                </div>

                <!-- Button reply & jumlah like -->
                <div class="row col-12 self-center q-pl-md q-pr-xs">
                  <div
                    class="text-weight-medium q-pr-sm"
                    style="color: #b1b1b1; font-size: 12px"
                  >
                    Balas
                  </div>
                  <div
                    class="text-weight-medium q-pl-xs"
                    style="color: #b1b1b1; font-size: 12px"
                  >
                    {{ like }}
                  </div>
                  <q-space></q-space>
                  <div
                    class="text-weight-medium"
                    style="color: #b1b1b1; font-size: 12px"
                  >
                    Lihat 1 balasan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Type comment -->
        <div
          class="row full-width bg-white shadow-3 self-center q-py-sm q-px-md fixed-bottom"
        >
          <!-- Profile -->
          <div class="col-2 self-end">
            <q-avatar size="40px">
              <q-img src="~/assets/Avatar.png" no-spinner></q-img>
            </q-avatar>
          </div>

          <!-- Type of comment -->
          <div class="col-9 self-center">
            <q-input
              color="white"
              dense
              autogrow
              square
              v-model="comment"
              hide-bottom-space
              placeholder="Tambahkan komentar..."
            />
          </div>

          <!-- Button Send -->
          <div class="col-1 self-end q-pr-lg">
            <q-btn @click="addComment()" dense round flat size="20px">
              <q-icon
                name="far fa-paper-plane"
                size="20px"
                style="color: #49c2c0"
              ></q-icon>
            </q-btn>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";
import moment from "moment";
export default {
  props: ["postid"],
  computed: {
    ...mapState(["Post"]),
  },
  data() {
    return {
      comment: null,
      lihatBalasan: false,
      like: "100",
      post: null,
    };
  },
  mounted() {
    this.getPostData();
    moment.locale('id')
  },
  methods: {
    moment,
    changeButtonColor() {
      var icon = document.getElementById("iconLike");
      if (icon.className == "far fa-heart") {
        icon.className = "fas fa-heart";
      } else {
        icon.className = "far fa-heart";
      }
    },
    getPostData() {
      this.$store.dispatch("Post/show", this.postid).then((res) => {
        this.post = res.data;
      });
    },
    addComment() {
      const payload = {
        post_id: this.postid,
        value: this.comment,
      };
      this.$store.dispatch("Comment/store", payload).then((res) => {
        this.post = res.data
        this.comment = null;
      });
    },
    likeComment(index) {
      this.$store
        .dispatch("Comment/like", this.post.comments[index].id)
        .then((res) => {
          this.post.comments[index].liked_count = res.data.liked_count;
          this.post.comments[index].likes_count = res.data.likes_count;
        });
    },
    dislikeComment(index) {
      this.$store
        .dispatch("Comment/dislike", this.post.comments[index].id)
        .then((res) => {
          this.post.comments[index].liked_count = res.data.liked_count;
          this.post.comments[index].likes_count = res.data.likes_count;
        });
    },
  },
};
</script>

<style>
.fas.fa-heart {
  color: red !important;
}
</style>
