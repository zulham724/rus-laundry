<template>
  <q-layout class="mbl " view="lHh lpR fFf">
    <div class="fixed-top  shadow-2" style="z-index: 999">
      <q-header elevated>
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
              >
              </q-avatar>
            </q-btn>
          </div>
          <div class="col-10">
            <div
            v-if="content"
            class=" self-center text-weight-medium  text-white q-pl-sm"
            style="font-size: 20px"
          >
            {{ content.tittle }}
          </div>
          </div>
          

        </div>
      </q-header>
    </div>
    <!-- <q-header class="fixed-top">
      <q-toolbar class="shadow-1" style="background-color: #1c309b">
        <q-btn
          @click="$router.back()"
          no-caps
          class="q-pa-md"
          flat
          style="color: white"
        >
          <q-icon size="20px" name="fas fa-arrow-left" style="color: #ffffff">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          v-if="content"
          class="text-left text-weight-medium text-subtitle2"
          style="color: white; font-size: 16px"
          >{{ content.tittle }}</q-toolbar-title
        >
      </q-toolbar>
    </q-header> -->
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
              >
              </q-avatar>
            </q-btn>
          </div>
          <div class="col-10">
            <div
            v-if="content"
            class=" self-center text-weight-medium  text-white q-pl-sm"
            style="font-size: 20px"
          >
            {{ content.tittle }}
          </div>
          </div>
          

        </div>
      <!-- Video/foto -->
      <div v-if="content.video" class="full-width bg-grey" style="height: 250px">
        <vue-plyr v-if="content.video">
          <video :src="STORAGE_URL + `/` + content.video.src"></video>
        </vue-plyr>
      </div>
      <div v-if="content.image_content" class="full-width " >
        <q-img :src="STORAGE_URL + `/` + content.image_content.src"/>
      </div>
      <!-- Deskripsi -->
      <div class="q-px-sm q-pt-md">
        <div class="q-px-sm text-weight-bold" style="color: #5a5656; font-size: 15px">
          Deskripsi
        </div>
        <!-- isi deskripsi -->
        <div
          class="text-weight-medium text-justify q-px-sm" 
          style="color: #aca9a9; font-size: 12px"
        >
          {{ content.description }}
        </div>
      </div>

      <!-- Materi berikutnya -->
      

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
              src="~/assets/icon_earn_coin.png"
              width="250px"
              height="150px"
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
              src="~/assets/icon_rank.png"
              width="300px"
              height="200px"
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
        console.log('ini content',this.content);
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
          this.$forceUpdate();
        });
      }
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
