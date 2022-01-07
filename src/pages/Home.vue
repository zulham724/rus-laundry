<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <!-- header -->
        <div class="text-center">
          <q-img
            src="~/assets/header-home.png"
            alt="login-anim"
            class="width: 100%"
          >
            <!-- information -->
            <q-page
              ><div class="q-ma-lg text-h6" style="max-width: 350px">
                <div class="float-left">
                  <!-- Avatar Person -->
                  <div class="float-left q-mt-xs">
                    <q-avatar size="50px">
                      <img src="~/assets/Avatar.png" alt="avatar-person" />
                    </q-avatar>
                  </div>
                  <!-- Nama User -->
                  <div
                    class="float-right q-pl-md text-h6"
                    style="color: #313131"
                  >
                    Good Morning Hisyam
                    <br />
                    <!-- Date -->
                    <div
                      class="text-caption float-left q-pa-xs"
                      style="
                        background-color: #ffffff;
                        color: #888888;
                        border-radius: 10px;
                      "
                    >
                      24 Januari 2022
                    </div>
                  </div>
                </div>
              </div></q-page
            >
            <!-- Animation of Bird -->
            <img
              src="~/assets/header-bird.gif"
              alt="header-bird"
              class="absolute-left q-ml-xl"
              style="max-height: 150px; margin-top: 100px"
            />
          </q-img>
        </div>
        <!-- Search -->
        <q-input
          class="q-ma-md"
          type="search"
          style="width: 200px; color: black; font-size: 15px"
          rounded
          outlined
          v-model="search"
          placeholder="Cari Pesanan"
        >
          <q-icon name="search" class="self-center" size="30px" color="grey" />
        </q-input>
        <!-- List Pesanan -->
        <q-list
          class="q-ma-md"
          style="background-color: #fff; border-radius: 20px 20px 20px 20px"
        >
          <q-item class="q-my-sm q-mx-md" clickable v-ripple>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" size="60px">
                <img src="~/assets/avatar-box.png" alt="avatar-box" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="self-center">
              <q-item-label class="text-h6">Suparjo</q-item-label>
              <q-item-label caption lines="1" class="q-mb-sm"
                >11 Jan 2022</q-item-label
              >
            </q-item-section>

            <q-item-section>
              <q-linear-progress
                stripe
                style="width: 100px; border-radius: 50px; color: #49c26b"
                class="self-center q-mb-md q-ml-md"
                size="25px"
                :value="progress"
              >
                <div class="absolute-full flex flex-center">
                  <q-badge
                    style="font-size: 15px"
                    class="bg-transparent"
                    text-color="white "
                    :label="progress"
                  />
                </div>
              </q-linear-progress>
            </q-item-section>
          </q-item>
        </q-list>
        <q-btn
          class="elevated fixed-bottom-right"
          rounded
          color="#FAFAFA"
          style="
            width: 60px;
            height: 60px;
            margin-bottom: 80px;
            margin-right: 20px;
          "
          ><q-img
            style="width: 30px; height: 30px"
            src="~/assets/barcode-scan.svg"
        /></q-btn>
      </q-page>
      <q-footer
        class="elevated q-pt-sm"
        style="border-radius: 20px 20px 0px 0px; background-color: white"
      >
        <div class="q-gutter-none" style="max-width: 100%">
          <q-tabs v-model="tab" dense class="text-black">
            <q-tab name="home" no-caps
              ><q-img
                style="width: 25px; height: 25px"
                :src="
                  tab == 'home'
                    ? require('../assets/transaksi-color.svg')
                    : require('../assets/icon-transaksi.svg')
                "
              ></q-img>
              <div class="text-caption" style="font-size: 10px">Transaksi</div>
            </q-tab>

            <q-tab name="pesanan" no-caps
              ><q-img
                style="width: 25px; height: 25px"
                :src="
                  tab == 'pesanan'
                    ? require('../assets/pesanan-color.svg')
                    : require('../assets/icon-pesanan.svg')
                "
              ></q-img>
              <div class="text-caption" style="font-size: 10px">Pesanan</div>
            </q-tab>

            <q-tab name="penghasilan" no-caps
              ><q-img
                style="width: 22px; height: 25px"
                :src="
                  tab == 'penghasilan'
                    ? require('../assets/penghasilan-color.svg')
                    : require('../assets/icon-penghasilan.svg')
                "
              ></q-img>
              <div class="text-caption" style="font-size: 10px">
                Penghasilan
              </div></q-tab
            >

            <q-tab name="karyawan" no-caps
              ><q-img
                style="width: 22px; height: 25px"
                :src="
                  tab == 'karyawan'
                    ? require('../assets/karyawan-color.svg')
                    : require('../assets/icon-karyawan.svg')
                "
              ></q-img>
              <div class="text-caption" style="font-size: 10px">Karyawan</div>
            </q-tab>
          </q-tabs>
        </div>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      tab: "home",
      search: ref(""),
      progress: 0.6,
    };
  },
};
</script>

<style></style>
