<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <!-- Header -->
    <q-header>
      <div class="full-width" style="height: 270px">
        <!-- Header Image -->
        <q-img
          no-spinner
          src="~/assets/header-profile-of-course.svg"
          style="height: 270px"
        >
          <!-- Container -->
          <div class="bg-transparent full-width q-gutter-none">
            <div class="row full-width col-12">
              <div class="col-2">
                <!-- Button back -->
                <q-btn
                  @click="$router.push('/course-of-home')"
                  no-caps
                  class="q-pa-sm"
                  flat
                  style="color: white"
                >
                  <q-icon
                    size="25px"
                    name="fas fa-arrow-left"
                    style="color: #ffffff"
                  >
                  </q-icon>
                </q-btn>
              </div>
              <div class="col-8 self-center">
                <!-- Nama user -->
                <div
                  class="text-center text-weight-medium"
                  style="color: white; font-size: 20px"
                >
                  IndonesiaLaundry
                </div>
              </div>
              <div class="col-2"></div>
            </div>

            <!-- Profile image user -->
            <div class="row full-width justify-center">
              <div>
                <q-avatar size="80px" color="grey">
                  <q-img no-spinner src="~/assets/Avatar.png"></q-img>
                </q-avatar>

                <!-- Rank of user -->
                <div
                  class="text-weight-medium justify-center text-center q-mx-xs"
                  style="
                    margin-top: -1px;
                    background-color: #ff843e;
                    border-radius: 20px;
                    width: auto;
                    font-size: 12px;
                    color: white;
                  "
                >
                  Rangking 1
                </div>
              </div>
            </div>

            <!-- Container -->
            <div class="row text-weight-medium q-mt-lg">
              <!-- Button lihat semua -->
              <div
                @click="$router.push('/detail-ranking')"
                class="full-width text-right q-pr-sm"
                style="color: #fafafa; font-size: 10px"
              >
                Lihat semua
              </div>
              <!-- Container grey background -->
              <div
                class="row full-width q-pa-sm"
                style="background-color: #f5f7f9; border-radius: 4px"
              >
                <!-- Photo profile -->
                <div class="col-2 self-center justify-center">
                  <q-avatar color="grey" size="40px">
                    <q-img no-spinner src="~/assets/Avatar.png"></q-img>
                  </q-avatar>
                </div>
                <div class="col-7 q-pl-xs">
                  <!-- Name of user -->
                  <div style="color: #4f4f4f; font-size: 16px">
                    IndonesiaLaundry
                  </div>
                  <div class="row">
                    <!-- Image point -->
                    <div class="col-1 justify-center self-center">
                      <q-avatar square size="30px">
                        <q-img no-spinner src="~/assets/icon-coin.svg"></q-img>
                      </q-avatar>
                    </div>
                    <!-- point -->
                    <div
                      class="q-pl-md self-center"
                      style="font-size: 10px; color: #4f4f4f"
                    >
                      1500 Point/2000 Point
                    </div>
                  </div>
                </div>

                <!-- Rank -->
                <div class="col-3 self-center text-center">
                  <div
                    class="
                      text-weight-medium
                      justify-center
                      text-center
                      q-px-xs
                    "
                    style="
                      margin-top: -1px;
                      background-color: #ff843e;
                      border-radius: 20px;
                      width: auto;
                      font-size: 12px;
                      color: white;
                    "
                  >
                    Rangking 1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-img>
      </div>
    </q-header>
    <q-page-container>
      <q-page>
        <!-- Tugas yang belum diselesaikan -->
        <div
          class="full-width text-weight-medium q-pa-sm"
          style="color: #4f4f4f; font-size: 12px; background-color: #fafafa"
        >
          Tugas yang belum kamu selesaikan
        </div>
        <!-- Container -->
        <div
          @click="$router.push('/detail-course')"
          class="full-width row shadow-1 bg-white"
        >
          <!-- Thumbnail video -->
          <div class="col-5 text-center self-center" style="z-index: 999">
            <q-avatar
              square
              style="width: 140px; height: 80px; border-radius: 5px"
              color="grey"
            >
              <q-img no-spinner src="~/assets/contoh-thumbnail.svg">
                <q-icon
                  class="absolute-center"
                  name="far fa-play-circle"
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
          </div>
        </div>

        <!-- Materi yang sudah dipelajari -->
        <div
          class="full-width text-weight-medium q-pa-sm row"
          style="color: #4f4f4f; font-size: 12px; background-color: #fafafa"
        >
          <div class="col-6 text-left">Materi yang sudah dipelajari</div>
          <div @click="$router.push('/history-of-course')" class="col-6 text-right" style="color: #26e745">Lihat semua</div>
        </div>
        <!-- Container -->
        <div
          class="full-width row shadow-1 bg-white"
          @click="$router.push('/list-of-course')"
        >
          <!-- Thumbnail video -->
          <div class="col-5 text-center self-center">
            <q-avatar
              square
              style="width: 140px; height: 80px; border-radius: 5px"
              color="grey"
            >
              <q-img no-spinner src="~/assets/contoh-thumbnail.svg"> </q-img>
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
                class="text-weight-medium q-px-md q-py-xs"
                style="
                  color: white;
                  background-color: #0c1e7f;
                  border-radius: 5px 0 0 0;
                  font-size: 11px;
                "
              >
                1 jam 45 menit
              </div>
            </div>
          </div>
        </div>

        <!-- Challenge hari ini -->
        <div
          class="full-width text-weight-medium q-pa-sm row"
          style="color: #4f4f4f; font-size: 12px; background-color: #fafafa"
        >
          <div class="col-6 text-left">Challenge hari ini</div>
        </div>
        <!-- Container -->
        <div
          class="full-width row shadow-1 bg-white"
          @click="$router.push('/list-of-course')"
        >
          <!-- Thumbnail video -->
          <div class="col-5 text-center self-center">
            <q-avatar
              square
              style="width: 140px; height: 80px; border-radius: 5px"
              color="grey"
            >
              <q-img no-spinner src="~/assets/contoh-thumbnail.svg"> </q-img>
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
                class="text-weight-medium q-px-md q-py-xs"
                style="
                  color: white;
                  background-color: #0c1e7f;
                  border-radius: 5px 0 0 0;
                  font-size: 11px;
                "
              >
                1 jam 45 menit
              </div>
            </div>
          </div>
        </div>

        <!-- Materi yang kamu suka -->
        <div
          class="full-width text-weight-medium q-pa-sm row"
          style="color: #4f4f4f; font-size: 12px; background-color: #fafafa"
        >
          <div class="col-6 text-left">Materi yang kamu suka</div>
          <div @click="$router.push('/like-of-course')" class="col-6 text-right" style="color: #26e745">Lihat semua</div>

        </div>
        <!-- Container -->
        <div
          class="full-width row shadow-1 bg-white"
          @click="$router.push('/list-of-course')"
        >
          <!-- Thumbnail video -->
          <div class="col-5 text-center self-center">
            <q-avatar
              square
              style="width: 140px; height: 80px; border-radius: 5px"
              color="grey"
            >
              <q-img no-spinner src="~/assets/contoh-thumbnail.svg"> </q-img>
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
                class="text-weight-medium q-px-md q-py-xs"
                style="
                  color: white;
                  background-color: #0c1e7f;
                  border-radius: 5px 0 0 0;
                  font-size: 11px;
                "
              >
                1 jam 45 menit
              </div>
            </div>
          </div>
        </div>

        <!-- Banyak diminati -->
        <div
          class="full-width text-weight-medium q-pa-sm row"
          style="color: #4f4f4f; font-size: 12px; background-color: #fafafa"
        >
          <div class="col-6 text-left">Banyak diminati</div>
        </div>
        <!-- Container -->
        <div
          class="full-width row shadow-1 bg-white"
          @click="$router.push('/list-of-course')"
        >
          <!-- Thumbnail video -->
          <div class="col-5 text-center self-center">
            <q-avatar
              square
              style="width: 140px; height: 80px; border-radius: 5px"
              color="grey"
            >
              <q-img no-spinner src="~/assets/contoh-thumbnail.svg"> </q-img>
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
                class="text-weight-medium q-px-md q-py-xs"
                style="
                  color: white;
                  background-color: #0c1e7f;
                  border-radius: 5px 0 0 0;
                  font-size: 11px;
                "
              >
                1 jam 45 menit
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      lockDuration: false,
      dialogLock: false,
    };
  },
  methods: {
    buttonLock() {
      this.dialogLock = true;
    },
  },
};
</script>

<style>
</style>
