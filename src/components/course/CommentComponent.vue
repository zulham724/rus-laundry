<template>
  <div v-if="comment != null">
    <div v-if="auth.id == comment.user_id" v-touch-hold.mouse="handleHold">
      <div class="row">
        <div class="col-8 row">
          <!-- Photo profile -->
          <div class="col-2 text-left self-center">
            <q-avatar size="md" color="grey">
              <q-img
                no-spinner
                :src="`${STORAGE_URL}/${comment.user.avatar}`"
              ></q-img>
            </q-avatar>
          </div>
          <div class="column q-pl-xs text-left">
            <!-- Name of profile -->
            <div
              class="row text-weight-bold text-left"
              style="color: #3a3838; font-size: 15px"
            >
              {{ comment.user.name }}
            </div>
            <!-- Time of post -->
            <div
              class="row text-weight-medium text-left"
              style="color: #b1b1b1; font-size: 10px"
            >
              {{ moment(comment.created_at).locale("id").fromNow() }}
            </div>
          </div>
        </div>

        <div class="col-4 row justify-end">
          <!-- button like -->
          <div class="self-center q-pl-xs">
            <q-btn
              round
              dense
              flat
              :color="comment.liked_count ? 'red' : 'grey'"
              :icon="comment.liked_count ? 'favorite' : 'favorite_border'"
              @click="comment.liked_count ? dislikeComment(c) : likeComment(c)"
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
    <div v-else>
      <div class="row">
        <div class="col-8 row">
          <!-- Photo profile -->
          <div class="col-2 text-left self-center">
            <q-avatar size="md" color="grey">
              <q-img
                no-spinner
                :src="`${STORAGE_URL}/${comment.user.avatar}`"
              ></q-img>
            </q-avatar>
          </div>
          <div class="column q-pl-xs text-left">
            <!-- Name of profile -->
            <div
              class="row text-weight-bold text-left"
              style="color: #3a3838; font-size: 15px"
            >
              {{ comment.user.name }}
            </div>
            <!-- Time of post -->
            <div
              class="row text-weight-medium text-left"
              style="color: #b1b1b1; font-size: 10px"
            >
              {{ moment(comment.created_at).locale("id").fromNow() }}
            </div>
          </div>
        </div>

        <div class="col-4 row justify-end">
          <!-- button like -->
          <div class="self-center q-pl-xs">
            <q-btn
              round
              dense
              flat
              :color="comment.liked_count ? 'red' : 'grey'"
              :icon="comment.liked_count ? 'favorite' : 'favorite_border'"
              @click="comment.liked_count ? dislikeComment() : likeComment()"
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
    <q-dialog v-model="deleteDialog" position="bottom">
      <q-card
        class="full-width bg-white q-pa-md"
        style="border-radius: 10px 10px 0 0"
      >
        <q-btn
          align="left"
          outline
          class="full-width"
          style="color: red; border-radius: 5px"
          no-caps
          dense
          @click="deleteComment()"
        >
          <div class="row full-width justify-between">
            <div
              class="self-center q-pa-xs text-weight-medium"
              style="color: red"
            >
              Hapus komentar
            </div>
            <div class="self-center">
              <q-icon name="delete" style="color: red" size="sm"></q-icon>
            </div>
          </div>
        </q-btn>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    comment: null,
    c: null,
  },
  data() {
    return {
      STORAGE_URL: STORAGE_URL,
      deleteDialog: false,
    };
  },
  computed: {
    auth() {
      return this.$store.getters["Auth/auth"];
    },
  },
  methods: {
    moment,
    handleHold() {
      this.deleteDialog = true;
    },
    deleteComment() {
      console.log(this.comment.id);
      this.$store
        .dispatch("Comment/deleteComment", this.comment.id)
        .then((res) => {
          this.$emit("deleteComment", this.comment.id);
          this.$q.notify("Berhasil");
        })
        .catch((err) => {
          this.$q.notify("Terjadi kesalahan");
        })
        .finally(() => {
          this.deleteDialog = false;
        });
    },
    likeComment() {
      this.$emit("onLiked", this.c);
    },
    dislikeComment() {
      this.$emit("ondisliked", this.c);
    },
  },
};
</script>

<style></style>
