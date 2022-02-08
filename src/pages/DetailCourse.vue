<template>
  <q-layout>
    <q-header class="fixed-top">
      <q-toolbar class="shadow-1" style="background-color: #1c309b">
        <q-btn
          @click="$router.push('/list-of-course')"
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
    <q-page>
      <!-- Video/foto -->
      <div class="full-width bg-grey" style="height: 250px">a</div>
      <!-- Deskripsi -->
      <div class="row q-px-sm q-pt-md">
        <div class="text-weight-bold" style="color: #5a5656; font-size: 15px">
          Deskripsi
        </div>
        <!-- isi deskripsi -->
        <div
          class="text-weight-medium text-justify"
          style="color: #aca9a9; font-size: 12px"
        >
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </div>
      </div>

      <!-- Materi berikutnya -->
      <div class="fixed-bottom">
        <div
          class="text-weight-bold q-px-md"
          style="color: #5f5959; font-size: 10px"
        >
          Materi berikutnya
        </div>
        <!-- Step course -->
        <!-- Container -->
        <div @click="$router.push('/detail-course')" class="full-width row">
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
              Latihan dasar laundry untuk pemula
            </div>
            <!-- Deskripsi -->
            <div
              class="text-weight-regular"
              style="color: #5a5656; font-size: 9px"
            >
              Berisi materi cara menjadi tukang laundry profesional secara step
              by step
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
                  10 menit
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
            <q-btn class="full-width" no-caps flat>
              <div>
                <q-icon name="far fa-heart" color="grey" size="25px"></q-icon>
                <div
                  class="text-weight-medium"
                  style="color: grey; font-size: 10px"
                >
                  Suka
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col-6 justify-center text-center">
            <q-btn
              class="full-width"
              no-caps
              flat
              @click="$router.push('/comment-of-course')"
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
export default {
  data() {
    const progress1 = ref(0.7);
    return {
      lockVideo: false,
      lockDuration: false,
      unlockLevel: false,
      earnCoin: false,
      levelUp: false,
      progress1,
    };
  },
};
</script>

<style></style>
