<template>
  <!-- Header -->
  <q-page>
    <!-- Container -->
    <div class="full-width" style="height: 180px; background-color: #fafafa">
      <!-- Background blue -->
      <div
        class="full-width"
        style="
          height: 150px;
          background-color: #3789e1;
          border-radius: 0px 0px 50px 50px;
          background-image: linear-gradient(to bottom right, #3789e1, #1c309b);
        "
      >
        <!-- Profile -->
        <div class="row q-pt-lg q-pl-lg">
          <div class="col-2 text-center">
            <q-avatar size="60px" style="background-color: #888888">
              <q-img no-spinner src="~/assets/Avatar.png"></q-img>
            </q-avatar>
          </div>
          <div class="col-6 self-center q-pl-sm">
            <div
              class="row text-weight-medium q-pb-xs"
              style="font-size: 20px; color: white"
            >
              IndonesiaLaundry
            </div>
            <div class="row">
              <div
                class="col-2 q-px-md self-center"
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
            </div>
          </div>
          <!-- Event koin -->
          <div class="col-4 q-pr-md self-end" style="z-index: 999">
            <div
              class="row text-weight-medium"
              style="color: #fafafa; font-size: 9px"
            >
              <div class="col-6 text-left">1500 koin</div>
              <div class="col-6 text-right">2000 koin</div>
            </div>
            <div class="row">
              <q-linear-progress
                track-color="grey-11"
                size="9px"
                :value="progress1"
                style="border-radius: 5px; color: #61ff00"
              ></q-linear-progress>
            </div>
          </div>
        </div>
      </div>

      <!-- Search bar -->
      <div
        class="row justify-center q-px-xl"
        style="z-index: 999; margin-top: -22px"
      >
        <q-input
          dense
          class="q-mx-xs full-width bg-white"
          type="search"
          outlined
          v-model="search"
          placeholder="Cari"
        >
          <template v-slot:prepend>
            <q-icon
              name="search"
              class="self-center"
              size="20px"
              color="grey"
            />
          </template>

          <template v-slot:append>
          <q-icon name="close" @click="clear = ''" class="cursor-pointer" />
        </template>
        </q-input>
      </div>
    </div>

    <div v-for="n in 7" :key="n">
      <!-- Container -->
      <div class="full-width row">
        <!-- Thumbnail video -->
        <div class="col-5 text-center self-center">
          <q-avatar
            square
            style="width: 140px; height: 80px; border-radius: 5px"
            color="grey"
          >
            <q-img no-spinner src="~/assets/contoh-thumbnail.svg">
              <q-icon
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
          <div class="text-weight-bold" style="color: #5f5959; font-size: 14px">
            Latihan dasar laundry untuk pemula
          </div>
          <!-- Deskripsi -->
          <div
            class="text-weight-regular"
            style="color: #5a5656; font-size: 9px"
          >
            Berisi materi cara menjadi tukang laundry profesional secara step by
            step
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
      <q-separator></q-separator>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CourseOfHomePage",
  include: ["CourseOfHomePage"],

  data() {
    const progress1 = ref(0.5);
    return {
      progress1,
      progressLabel1: (progress1.value * 100).toFixed(2) + "%",
      lockDuration: false,
      clear: ref(''),
    };
  },
};
</script>

<style>
</style>