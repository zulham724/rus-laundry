<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <!-- header -->
        <div class="text-center" style="">
          <q-img src="~/assets/header-home.png" alt="header-home">
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
                    IndonesiaLaundry
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
        <!-- Scan Barcode -->
        <q-btn
          to="/home-kosong"
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
            class="relative"
            style="width: 30px; height: 30px"
            src="~/assets/barcode-scan.svg"
        /></q-btn>

        <div class="text-center absolute-bottom" style="margin-bottom: 100px">
          <q-img
            style="width: 160px; height: 160px"
            src="~/assets/pesanan-kosong.svg"
          ></q-img>
          <div class="text-center text-subtitle2">Tidak Ada Pesanan</div>
        </div>
      </q-page>
      <!-- Bottom Navigation -->
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
