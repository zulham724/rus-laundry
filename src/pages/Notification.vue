<template>
  <q-layout class="mbl" view="lHh lpR fFf">
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
          >Notifikasi</q-toolbar-title
        >
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="q-ma-md">
        <!-- Notification of today -->
        <div class="row">
          <div class="row col-12 q-px-sm">
            <div
              class="text-weight-regular q-pb-md"
              style="color: #5a5656; font-size: 17px"
            >
              Hari ini
            </div>
          </div>

          <!-- 1 Notif card -->
          <div v-for="n in 3" :key="n" class="row q-mb-lg full-width">
            <div class="col-2 q-pa-xs self-center ">
              <q-avatar size="50px">
                <q-img src="~/assets/Avatar.png" no-spinner></q-img>
              </q-avatar>
            </div>
            <div class="col-7 row self-center  q-pr-sm">
              <div
                class="text-weight-bold"
                style="color: #3a3838; font-size: 17px; width: auto"
              >
                IndonesiaLaundry
              </div>
              <div
                class="text-weight-medium self-end q-pa-xs"
                style="font-size: 10px; color: #b1b1b1"
              >
                3 menit
              </div>
              <div
                class="text-weight-medium"
                style="color: #b1b1b1; font-size: 14px"
              >
                Menambah postingan baru.
              </div>
            </div>
            <div class="col-3 text-right  self-center" style="display: block">
              <!-- Preview image post -->
              <div  v-if="previewImage = true">
                <q-avatar
                  square
                  size="50px"
                  style="border-radius: 10px"
                  color="grey"
                >
                  <q-img no-spinner src=""></q-img>
                </q-avatar>
              </div>

              <!-- Button Follow back -->
              <div v-if="buttonFollowBack = false">
                <q-btn
                  dense
                  flat
                  no-caps
                  style="background-color: #49c2c0; border-radius: 5px"
                >
                  <div
                    class="text-weight-medium q-px-sm"
                    style="font-size: 12px; color: white"
                  >
                    ikuti balik
                  </div>
                </q-btn>
              </div>
            </div>
          </div>
        </div>

        <!-- Notification of the week -->
        <div class="row">
          <div class="row col-12 q-px-sm">
            <div
              class="text-weight-regular q-pb-md"
              style="color: #5a5656; font-size: 17px"
            >
              Minggu ini
            </div>
          </div>

          <!-- 1 Notif card -->
          <div v-for="n in 3" :key="n" class="row q-mb-lg full-width">
            <div class="col-2 q-pa-xs self-center">
              <q-avatar size="50px">
                <q-img src="~/assets/Avatar.png" no-spinner></q-img>
              </q-avatar>
            </div>
            <div class="col-7 row self-center q-pr-sm">
              <div
                class="text-weight-bold"
                style="color: #3a3838; font-size: 17px; width: auto"
              >
                IndonesiaLaundry
              </div>
              <div
                class="text-weight-medium self-end q-pa-xs"
                style="font-size: 10px; color: #b1b1b1"
              >
                3 hari
              </div>
              <div
                class="text-weight-medium"
                style="color: #b1b1b1; font-size: 14px"
              >
                Mulai mengikuti anda.
              </div>
            </div>
            <div class="col-3 text-right self-center" style="display: block">
              <!-- Preview image post -->
              <div v-if="previewImage= false">
                <q-avatar
                  square
                  size="50px"
                  style="border-radius: 10px"
                  color="grey"
                >
                  <q-img no-spinner src=""></q-img>
                </q-avatar>
              </div>

              <!-- Button Follow back -->
              <div v-if="buttonFollowBack = true">
                <q-btn
                  dense
                  flat
                  no-caps
                  style="background-color: #49c2c0; border-radius: 5px"
                >
                  <div
                    class="text-weight-medium q-px-sm"
                    style="font-size: 12px; color: white"
                  >
                    ikuti balik
                  </div>
                </q-btn>
              </div>
            </div>
          </div>
        </div>

        <!-- All of Notification -->
        <div class="row">
          <div class="row col-12 q-px-sm">
            <div
              class="text-weight-regular q-pb-md"
              style="color: #5a5656; font-size: 17px"
            >
              Semua
            </div>
          </div>

          <!-- 1 Notif card -->
          <div v-for="n in 3" :key="n" class="row q-mb-lg full-width">
            <div class="col-2 q-pa-xs self-center">
              <q-avatar size="50px">
                <q-img src="~/assets/Avatar.png" no-spinner></q-img>
              </q-avatar>
            </div>
            <div class="col-7 row self-center q-pr-sm">
              <div
                class="text-weight-bold"
                style="color: #3a3838; font-size: 17px; width: auto"
              >
                IndonesiaLaundry
              </div>
              <div
                class="text-weight-medium self-end q-pa-xs"
                style="font-size: 10px; color: #b1b1b1"
              >
                16 hari
              </div>
              <div
                class="text-weight-medium"
                style="color: #b1b1b1; font-size: 14px"
              >
                Menyukai komentar anda.
              </div>
            </div>
            <div class="col-3 text-right self-center" style="display: block">
              <!-- Preview image post -->
              <div v-if="previewImage= true">
                <q-avatar
                  square
                  size="50px"
                  style="border-radius: 10px"
                  color="grey"
                >
                  <q-img no-spinner src=""></q-img>
                </q-avatar>
              </div>

              <!-- Button Follow back -->
              <div v-if="buttonFollowBack = false">
                <q-btn
                  dense
                  flat
                  no-caps
                  style="background-color: #49c2c0; border-radius: 5px"
                >
                  <div
                    class="text-weight-medium q-px-sm"
                    style="font-size: 12px; color: white"
                  >
                    ikuti balik
                  </div>
                </q-btn>
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
      previewImage: false,
      buttonFollowBack: false,
    };
  },
};
</script>

<style></style>
