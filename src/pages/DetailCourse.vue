<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <div class="fixed-top shadow-2" style="z-index: 999">
      <q-header elevated>
        <div
          class="row full-width q-py-sm justify-center"
          style="background-color: #1c309b"
        >
          <div class="col-2 text-center self-center">
            <q-btn
              flat
              round
              size="10px"
              @click="$router.push(`/${content.module_id}/list-of-course`)"
            >
              <q-avatar
                size="20px"
                icon="fas fa-arrow-left"
                style="color: #fff"
              ></q-avatar>
            </q-btn>
          </div>
          <div class="col-10">
            <div
              v-if="content"
              class="self-center text-weight-medium text-white q-pl-sm"
              style="font-size: 20px"
            >
              {{ content.tittle }}
            </div>
          </div>
        </div>
      </q-header>
    </div>

    <q-page v-if="content">
      <div
        class="row full-width q-py-sm justify-center"
        style="background-color: #1c309b"
      >
        <div class="col-2 text-center self-center">
          <q-btn flat round size="10px" @click="$router.back()">
            <q-avatar
              size="20px"
              icon="fas fa-arrow-left"
              style="color: #fff"
            ></q-avatar>
          </q-btn>
        </div>
        <div class="col-10">
          <div
            v-if="content"
            class="self-center text-weight-medium text-white q-pl-sm"
            style="font-size: 20px"
          >
            {{ content.tittle }}
          </div>
        </div>
      </div>
      <!-- Video/foto -->
      <div v-if="content.video" class="full-width" style="height: 250px">
        <video
          controlsList="nodownload"
          class="bg-black"
          :src="STORAGE_URL + `/` + content.video.src"
          controls
          style="width: 100%; height: 250px; object-fit: cover"
        ></video>
      </div>
      <div v-if="content.image_content" class="full-width">
        <q-img :src="STORAGE_URL + `/` + content.image_content.src" />
      </div>
      <!-- Deskripsi -->
      <div class="q-px-sm q-pt-md" style="height: 100%">
        <div
          class="q-px-sm text-weight-bold"
          style="color: #5a5656; font-size: 15px"
        >
          Deskripsi
        </div>
        <!-- isi deskripsi -->
        <div
          class="text-weight-medium text-justify q-px-sm q-pb-md"
          style="color: #aca9a9; font-size: 12px"
          v-html="content.description"
        ></div>
      </div>

      <!-- Materi berikutnya padding -->
      <div style="border-radius: 14px 14px 0px 0px">
        <div v-if="next_content" class="full-width q-pb-sm row">
          <div class="q-px-sm q-pt-sm text-white col-12">Materi berikutnya</div>
          <!-- Thumbnail video -->
          <div class="col-5 text-center self-center" style="z-index: -1">
            <div v-if="content.type == 'Materi'">
              <q-img fit="cover" width="90%" :ratio="16 / 9" no-spinner />
            </div>
            <div v-else>
              <q-img
                fit="cover"
                width="90%"
                :ratio="16 / 9"
                no-spinner
                class="bg-white"
              />
            </div>
          </div>
          <div class="col-7 q-pt-sm q-px-sm">
            <!-- Judul -->
            <div
              class="text-weight-bold text-white"
              style="color: #5f5959; font-size: 14px"
            >
              {{ next_content.tittle.substring(0, 20) }} . . .
            </div>
            <!-- Deskripsi -->
            <div
              class="text-weight-regular text-white"
              style="color: #5a5656; font-size: 9px"
            >
              {{ next_content.description.substring(0, 100) }} . . . - Baca
              Selengkapnya
            </div>
          </div>
          <div class="full-width">
            <div class="row text-center">
              <div class="col"></div>
              <div class="col"></div>
              <div
                class="col text-weight-medium q-py-xs text-white bg-white"
                style="color: #fff; border-radius: 5px 0 0 0; font-size: 11px"
              >
                {{ next_content.type }}
              </div>
              <div
                v-if="content.duration"
                class="col text-weight-medium q-py-xs text-white bg-white"
                style="color: #fff; border-radius: 0 0 0 0; font-size: 11px"
              >
                {{ next_content.duration }} menit
              </div>
              <div
                v-else
                class="col text-weight-medium q-py-xs text-white bg-white"
                style="color: #fff; border-radius: 0 0 0 0; font-size: 11px"
              >
                Tidak ada waktu
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <!-- TAB LIKE DAN KOMENTAR -->
          <div class="row justify-between">
            <q-btn disable dense flat class="q-px-lg" no-caps>
              <div class="col">
                <div class="row justify-center text-white">
                  <q-img src="~/assets/lk2.png" style="width: 25px" />
                </div>
                <div class="row text-white">Suka</div>
              </div>
            </q-btn>
            <div></div>
            <q-btn disable dense flat class="q-px-xs" no-caps>
              <div class="col">
                <div class="row justify-center text-white">
                  <q-img src="~/assets/lk2.png" style="width: 25px" />
                </div>
                <div class="row text-white">Komentar</div>
              </div>
            </q-btn>
            <div></div>
          </div>
        </div>
      </div>

      <!-- Materi berikutnya -->
      <div
        class="fixed-bottom shadow-up-1 flat bg-white"
        style="border-radius: 14px 14px 0px 0px"
      >
        <div
          v-if="next_content"
          @click="routerPush()"
          v-ripple
          class="full-width q-pb-sm row"
        >
          <!-- TAB MATERI BERIKUTNYA -->
          <div class="q-px-sm q-pt-sm col-12">Materi berikutnya</div>
          <!-- Thumbnail video -->
          <div class="col-5 text-center self-center" style="z-index: -1">
            <div v-if="content.type == 'Materi'">
              <q-img
                v-if="next_content.thumbnail"
                fit="cover"
                width="90%"
                :ratio="16 / 9"
                no-spinner
                :src="`${STORAGE_URL}/${next_content.thumbnail.src}`"
              />
              <q-img
                v-else
                fit="cover"
                width="90%"
                :ratio="16 / 9"
                no-spinner
                src="~/assets/mtrksg.svg"
              />
            </div>
            <div v-else>
              <q-img
                v-if="next_content.thumbnail"
                fit="cover"
                width="90%"
                :ratio="16 / 9"
                no-spinner
                :src="`${STORAGE_URL}/${next_content.thumbnail.src}`"
              />
              <q-img
                v-else
                fit="cover"
                width="90%"
                :ratio="16 / 9"
                no-spinner
                src="~/assets/vdksg.svg"
              />
            </div>
          </div>
          <div class="col-7 q-pt-sm q-px-sm">
            <!-- Judul -->
            <div
              class="text-weight-bold"
              style="color: #5f5959; font-size: 14px"
            >
              {{ next_content.tittle.substring(0, 20) }} . . .
            </div>
            <!-- Deskripsi -->
            <div
              class="text-weight-regular"
              style="color: #5a5656; font-size: 9px"
            >
              {{ next_content.description.substring(0, 100) }} . . . - Baca
              Selengkapnya
            </div>
          </div>
          <div class="full-width">
            <div class="row text-center">
              <div class="col"></div>
              <div class="col"></div>
              <div
                class="col text-weight-medium q-py-xs"
                style="
                  color: #fff;
                  background-color: #d637b3;
                  border-radius: 5px 0 0 0;
                  font-size: 11px;
                "
              >
                {{ next_content.type }}
              </div>
              <div
                v-if="content.duration"
                class="col text-weight-medium q-py-xs"
                style="
                  color: #fff;
                  background-color: #0c1e7f;
                  border-radius: 0 0 0 0;
                  font-size: 11px;
                "
              >
                {{ next_content.duration }} menit
              </div>
              <div
                v-else
                class="col text-weight-medium q-py-xs"
                style="
                  color: #fff;
                  background-color: #0c1e7f;
                  border-radius: 0 0 0 0;
                  font-size: 11px;
                "
              >
                Tidak ada waktu
              </div>
            </div>
          </div>
        </div>
        <q-separator />
        <!-- TAB LIKE DAN KOMENTAR -->
        <div class="row q-pa-sm bg-white">
          <div class="col-6 self-center text-center justify-center">
            <q-btn
              round
              size="md"
              flat
              no-caps
              @click="content.liked_count ? dislike() : like()"
              :color="content.liked_count ? 'red' : 'black'"
              :icon="content.liked_count ? 'favorite' : 'favorite_border'"
            >
            </q-btn>
          </div>
          <div class="col-6 self-center text-center justify-center">
            <q-btn
              round
              @click="$router.push(`/comment-of-course/${this.contentid}`)"
              flat
              class="q-px-xs"
              no-caps
              icon="chat_bubble_outline"
            >
            </q-btn>
          </div>
        </div>
      </div>

      <!-- Dialog unlock content -->
      <q-dialog v-model="unlockLevel">
        <q-card class="q-pa-lg" style="border-radius: 20px">
          <!-- Image lock -->
          <div>
            <q-img
              no-spinner
              src="~/assets/icon_unlock.png"
              width="120px"
              height="150px"
            ></q-img>
          </div>

          <div
            class="text-weight-bold text-center q-py-sm"
            style="color: #5f5959; font-size: 13px"
          >
            Konten Baru Terbuka
          </div>
          <div
            class="text-weight-medium text-center q-px-md"
            style="color: #b8b8b8; font-size: 13px"
          >
            Yeay!! akhirnya kamu telah mempelajari konten ini. Selamat konten
            berikutnya telah terbuka.
          </div>
        </q-card>
      </q-dialog>

      <!-- Dialog earnCoin -->
      <q-dialog v-model="earnCoin">
        <q-card class="q-pa-lg" style="border-radius: 20px">
          <!-- Image earnCoin -->
          <div>
            <q-img
              no-spinner
              src="~/assets/icon_earn_coin.png"
              width="250px"
              height="150px"
            ></q-img>
          </div>

          <div
            class="text-weight-bold text-center q-pt-sm"
            style="color: #5f5959; font-size: 13px"
          >
            SELAMAT ANDA MENDAPATKAN KOIN
          </div>

          <div
            class="text-weight-medium text-center q-pb-lg"
            style="color: #ffd752; font-size: 20px"
          >
            50 KOIN
          </div>

          <div class="text-weight-medium row" style="color: #494747">
            <!-- My level -->
            <div class="col-6 text-left" style="font-size: 15px">Lv. 20</div>
            <!-- Next level -->
            <div class="col-6 text-right" style="font-size: 15px">Lv. 21</div>
          </div>

          <!-- Progress -->
          <div class="row q-pt-xs">
            <q-linear-progress
              track-color="grey-14"
              size="9px"
              :value="progress1"
              style="border-radius: 5px; color: #61ff00"
            ></q-linear-progress>
          </div>

          <div class="text-weight-medium row q-pt-xs">
            <!-- My coin -->
            <div class="col-6 text-left" style="font-size: 8px; color: #d2d2d2">
              Koin kamu : 1000
            </div>
            <!-- Reward coin -->
            <div
              class="col-6 text-right"
              style="font-size: 8px; color: #ffbf00"
            >
              1000 koin lagi untuk naik level
            </div>
          </div>
        </q-card>
      </q-dialog>

      <!-- Dialog earnCoin -->
      <q-dialog v-model="levelUp">
        <q-card class="q-pa-lg" style="border-radius: 20px">
          <!-- Image earnCoin -->
          <div>
            <q-img
              no-spinner
              src="~/assets/icon_rank.png"
              width="300px"
              height="200px"
            ></q-img>
          </div>

          <div
            class="text-weight-bold text-center q-pt-sm"
            style="color: #5f5959; font-size: 13px"
          >
            SELAMAT ANDA NAIK LEVEL
          </div>

          <div
            class="text-weight-medium text-center q-pb-md"
            style="color: #ffd752; font-size: 20px"
          >
            LV. 21
          </div>

          <div
            class="text-weight-medium row text-center"
            style="color: #60ff02; font-size: 15px"
          >
            Kamu mendapatkan 100 koin
          </div>
        </q-card>
      </q-dialog>
    </q-page>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";
export default {
  props: ["contentid"],
  computed: {
    ...mapState(["ModuleContent"]),
  },
  data() {
    const progress1 = ref(0.7);
    return {
      lockVideo: false,
      lockDuration: false,
      unlockLevel: false,
      earnCoin: false,
      levelUp: false,
      progress1,
      content: null,
      next_content: null,
      STORAGE_URL: STORAGE_URL,
    };
  },
  mounted() {
    this.getContent();
    this.getNextContent();
  },
  methods: {
    routerPush() {
      // this.$router.push('/')
      this.$router.push(`/${this.next_content.id}/detail-course2`);
      this.getContent();
      this.getNextContent();
    },
    getContent() {
      this.$store.dispatch("ModuleContent/show", this.contentid).then((res) => {
        this.content = res.data;
        console.log("ini content", this.content);
        this.$forceUpdate();
      });
    },
    getNextContent() {
      let next_id = this.$store.getters["ModuleContent/nextContent"](
        this.contentid
      );

      if (next_id) {
        this.$store.dispatch("ModuleContent/show", next_id).then((res) => {
          this.next_content = res.data;
          console.log("ini next content", this.next_content);
          this.$forceUpdate();
        });
      }
    },
    like() {
      this.content.liked_count = 1;
      this.$store.dispatch("ModuleContent/like", this.contentid).then((res) => {
        this.content.liked_count = res.data.liked_count;
        console.log("cek like", res);
        this.$forceUpdate();
      });
    },
    dislike() {
      this.$store
        .dispatch("ModuleContent/dislike", this.contentid)
        .then((res) => {
          this.content.liked_count = res.data.liked_count;
        });
    },
    detailCourse(id) {
      this.$router.push(`/${id}/detail-course`);
      this.content = null;
      this.next_content = null;
      this.$nextTick().then(() => {
        this.getContent();
        this.getNextContent();
      });
      this.$forceUpdate();
    },
  },
};
</script>

<style></style>
