<template>
  <q-layout>
    <q-header class="fixed-top">
      <q-toolbar class="shadow-1" style="background-color: #1c309b">
        <q-btn
          @click="$router.back()"
          no-caps
          class="q-pa-md"
          flat
          style="color: white"
        >
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #ffffff">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-weight-medium text-subtitle2"
          style="color: white; font-size: 16px"
          >Percaya diri itu perlu</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page v-if="content">
      <!-- Video/foto -->
      <div class="full-width bg-grey" style="height: 250px">
        <vue-plyr v-if="content.video">
          <video :src="STORAGE_URL + `/` + content.video.src"></video>
        </vue-plyr>
      </div>
      <!-- Deskripsi -->
      <div class="q-px-sm q-pt-md">
        <div class="text-weight-bold" style="color: #5a5656; font-size: 15px">
          Deskripsi
        </div>
        <!-- isi deskripsi -->
        <div
          class="text-weight-medium text-justify"
          style="color: #aca9a9; font-size: 12px"
        >
          {{ content.description }}
        </div>
      </div>

      <!-- Materi berikutnya -->
      <div class="fixed-bottom" v-if="next_content">
        <div
          class="text-weight-bold q-px-md"
          style="color: #5f5959; font-size: 10px"
        >
          Materi berikutnya
        </div>
        <!-- Step course -->
        <!-- Container -->
        <div @click="detailCourse(next_content.id)" class="full-width row">
          <!-- Thumbnail video -->
          <div class="col-5 text-center self-center" style="z-index: -1">
            <q-avatar
              square
              style="width: 140px; height: 80px; border-radius: 5px"
              color="grey"
            >
              <q-img no-spinner src="~/assets/contoh-thumbnail.svg">
                <!-- Jika video terlock -->
                <q-icon
                  v-if="(lockVideo = false)"
                  class="absolute-center"
                  name="fas fa-lock"
                  size="40px"
                  color="white"
                ></q-icon>
              </q-img>
            </q-avatar>
          </div>
          <div class="col-7 q-pt-sm">
            <!-- Judul -->
            <div
              class="text-weight-bold"
              style="color: #5f5959; font-size: 14px"
            >
              {{ next_content.tittle }}
            </div>
            <!-- Deskripsi -->
            <div
              class="text-weight-regular"
              style="color: #5a5656; font-size: 9px"
            >
              {{ next_content.description }}
            </div>
            <!-- durasi video -->
            <div v-if="lockDuration == false" class="row justify-end q-pt-sm">
              <div
                class="text-weight-medium row self-center"
                style="color: white; border-radius: 5px 0 0 0; font-size: 11px"
              >
                <div
                  class="col-6 q-px-md q-py-xs"
                  style="background-color: #d637b3; border-radius: 5px 0 0 0"
                >
                  Video
                </div>
                <div
                  class="col q-px-sm q-py-xs"
                  style="
                  background-color: #0c1e7f;D637B3
                  border-radius: 5px 0 0 0;
                "
                >
                  {{ next_content.duration }} menit
                </div>
              </div>
            </div>

            <!-- jika video terkunci -->
            <div v-else class="row justify-end q-pt-sm">
              <div
                class="text-weight-medium q-px-md q-py-xs"
                style="
                  color: white;
                  background-color: #0c1e7f;
                  border-radius: 5px 0 0 0;
                  font-size: 11px;
                "
              >
                Terbuka level 40
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom NavBar -->
        <div class="row shadow-3">
          <div class="col-6 justify-center text-center">
            <q-btn
              class="full-width"
              no-caps
              flat
              dense
              size="20px"
              :color="content.liked_count ? 'red' : 'grey'"
              :icon="content.liked_count ? 'favorite' : 'favorite_border'"
              @click="content.liked_count ? dislike() : like()"
            >
            </q-btn>
          </div>
          <div class="col-6 justify-center text-center">
            <q-btn
              class="full-width"
              no-caps
              flat
              @click="$router.push(`/${content.id}/comment-of-course`)"
            >
              <div>
                <q-icon
                  name="far fa-comment-alt"
                  color="grey"
                  size="25px"
                ></q-icon>
                <div
                  class="text-weight-medium"
                  style="color: grey; font-size: 10px"
                >
                  Komentar
                </div>
              </div>
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
              src="~/assets/animasi-proses-cuci.gif"
              sizes="40px"
            >
            </q-img>
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
              src="~/assets/animasi-proses-cuci.gif"
              sizes="50px"
            >
            </q-img>
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
            >
            </q-linear-progress>
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
              src="~/assets/animasi-proses-cuci.gif"
              sizes="50px"
            >
            </q-img>
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
    getContent() {
      
      this.$store.dispatch("ModuleContent/show", this.contentid).then((res) => {
        this.content = res.data;
      this.$forceUpdate()
      });
    },
    getNextContent() {
      
      let next_id = this.$store.getters["ModuleContent/nextContent"](
        this.contentid
      );

      this.$store.dispatch("ModuleContent/show", next_id).then((res) => {
        this.next_content = res.data;
         this.$forceUpdate()
      });
    },
    like() {
      this.content.liked_count = 1;
      this.$store.dispatch("ModuleContent/like", this.contentid).then((res) => {
        this.content.liked_count = res.data.liked_count;
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
      this.content = null
      this.next_content = null
      this.$nextTick().then(()=>{
        this.getContent()
        this.getNextContent()
      })
      this.$forceUpdate();
    },
  },
};
</script>

<style></style>
