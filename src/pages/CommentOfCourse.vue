<template>
  <q-layout>
    <!-- Header -->
    <q-header class="q-pb-xl">
      <q-toolbar class="shadow-1 fixed-top" style="background-color: #1c309b">
        <q-btn
          @click="$router.back()"
          no-caps
          flat
          style="color: white"
          round
        >
          <q-icon size="20px" name="fas fa-arrow-left" style="color: #ffffff">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-weight-medium text-subtitle2"
          style="color: white; font-size: 16px"
          >Komentar</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        <!-- Container -->
        <div v-for="(comment, c) in comments" :key="comment.id" class="q-pb-lg">
          <div class="row">
            <div class="col-8 row">
              <!-- Photo profile -->
              <div class="col-2 text-left self-center">
                <q-avatar size="md" color="grey">
                  <q-img no-spinner :src="`${STORAGE_URL}/${comment.user.avatar}`"></q-img>
                </q-avatar>
              </div>
              <div class=" column q-pl-xs text-left">
                <!-- Name of profile -->
                <div
                  class="row text-weight-bold   text-left"
                  style="color: #3a3838; font-size: 15px"
                >
                  {{ comment.user.name }}
                </div>
                <!-- Time of post -->
                <div
                  class="row text-weight-medium   text-left"
                  style="color: #b1b1b1; font-size: 10px"
                >
                  {{ moment(comment.created_at).locale("id").fromNow() }}
                </div>
              </div>
            </div>

            <div class="col-4 row justify-end ">
              <!-- Level -->
              <!-- <div
                class="q-px-sm self-center justify-end"
                style="
                  background-color: #ff843e;
                  border-radius: 20px;
                  width: auto;
                  font-size: 12px;
                  color: white;
                "
              >
                Lv.20
              </div> -->
              <!-- button like -->
              <div class="self-center q-pl-xs">
                <q-btn
                  round
                  dense
                  flat
                  :color="comment.liked_count ? 'red' : 'grey'"
                  :icon="comment.liked_count ? 'favorite' : 'favorite_border'"
                  @click="
                    comment.liked_count ? dislikeComment(c) : likeComment(c)
                  "
                >
                </q-btn>
              </div>
            </div>
          </div>

          <!-- Isi comment -->
          <div
            class="row text-weight-regular q-pt-sm"
            style="color: #5a5656; font-size: 15px"
          >
            {{ comment.value }}
          </div>

          <!-- Reply comment & count like -->
          <div
            class="row text-weight-medium q-pt-sm"
            style="color: #b1b1b1; font-size: 12px"
          >
            <!-- <div>Balas</div> -->
            <!-- Count like -->
            <div>{{ comment.likes_count }} suka</div>
          </div>
        </div>

        <!-- Container Reply-->
        <div v-if="(commentReply = false)">
          <div v-for="n in 5" :key="n" class="q-pb-lg q-pl-sm">
            <div class="row">
              <div class="col-8 row">
                <!-- Photo profile -->
                <div class="col-2 text-left self-center">
                  <q-avatar size="30px" class="shadow-1">
                    <q-img no-spinner src="~/assets/Avatar.png"></q-img>
                  </q-avatar>
                </div>
                <!-- Name of profile -->
                <div
                  class="col text-weight-bold self-center q-pl-xs"
                  style="color: #3a3838; font-size: 15px"
                >
                  Laundry_lain
                </div>
                <!-- Time of post -->
                <div
                  class="col text-weight-medium self-center q-pl-sm"
                  style="color: #b1b1b1; font-size: 10px"
                ></div>
              </div>

              <div class="col-4 row justify-end">
                <!-- Level -->
                <div
                  class="q-px-sm self-center justify-end"
                  style="
                    background-color: #ff843e;
                    border-radius: 20px;
                    width: auto;
                    font-size: 12px;
                    color: white;
                  "
                >
                  Lv.20
                </div>
                <!-- button like -->
                <div class="self-center q-pl-xs">
                  <q-btn round dense flat>
                    <q-icon
                      name="far fa-heart"
                      color="grey"
                      size="20px"
                    ></q-icon>
                  </q-btn>
                </div>
              </div>
            </div>

            <!-- Isi comment -->
            <div
              class="row text-weight-regular q-pt-sm"
              style="color: #5a5656; font-size: 15px"
            >
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages
            </div>

            <!-- Reply comment & count like -->
            <div
              class="row text-weight-medium q-pt-sm"
              style="color: #b1b1b1; font-size: 12px"
            >
              <div>Balas</div>
              <!-- Count like -->
              <div class="q-pl-md">100 suka</div>
            </div>
          </div>
        </div>

        <!-- Type comment -->
        <div
          class="row full-width bg-white shadow-3 self-center q-py-sm q-px-md fixed-bottom"
        >
          <!-- Profile -->
          <div class="col-2 self-end">
            <q-avatar size="40px" class="shadow-1">
              <q-img :src="`${STORAGE_URL}/${this.Auth.auth.avatar}`" no-spinner></q-img>
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
            <q-btn @click="store()" dense round flat size="20px">
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
import moment from "moment";
import {mapState} from "vuex";
export default {
  props: ["contentid"],
  data() {
    return {
      comment: null,
      commentReply: false,
      comments: [],
      STORAGE_URL: STORAGE_URL,
    };
  },
  mounted() {
    // console.log("cek contentid", this.contentid);
    console.log('cek auth', this.Auth)
    this.getComments();
  },
  computed: {
    ...mapState(["Auth"]),
    },
  methods: {
    moment,
    getComments() {
      this.$store
        .dispatch("Comment/getCommentCourse", this.contentid)
        .then((res) => {
          console.log("cek comment", res);
          this.comments = res.data.comments;
        });
    },
    store() {
      const payload = {
        id: this.contentid,
        value: this.comment,
      };
      this.$store
        .dispatch("Comment/storeCommentCourse", payload)
        .then((res) => {
          this.comment = null;
          this.comments = res.data.comments;
        });
    },
    likeComment(index) {
      this.$store
        .dispatch("Comment/like", this.comments[index].id)
        .then((res) => {
          this.comments[index].liked_count = res.data.liked_count;
          this.comments[index].likes_count = res.data.likes_count;
        });
    },
    dislikeComment(index) {
      this.$store
        .dispatch("Comment/dislike", this.comments[index].id)
        .then((res) => {
          this.comments[index].liked_count = res.data.liked_count;
          this.comments[index].likes_count = res.data.likes_count;
        });
    },
  },
};
</script>

<style></style>
