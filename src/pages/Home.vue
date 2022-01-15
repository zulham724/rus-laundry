<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <!-- header -->
        <div class="text-center">
          <q-img src="~/assets/header-home.png" alt="header-home">
            <!-- Animation of Bird -->
            <!-- <img
              src="~/assets/header-bird.gif"
              alt="header-bird"
              class="absolute-left"
              style="height: 15vh"
            /> -->

            <!-- information -->
            <q-page class="q-mt-lg absolute q-pl-lg" style="max-width: 40vh">
              <div>
                <div>
                  <div class="float-left">
                    <!-- Avatar Person -->
                    <div>
                      <q-avatar size="7vh">
                        <img src="~/assets/Avatar.png" alt="avatar-person" />
                      </q-avatar>
                    </div>
                  </div>
                  <div class="float-left q-ml-md">
                    <div
                      style="
                        font-size: 20px;
                        color: #313131;
                        margin-bottom: -1vh;
                      "
                      class="text-subtitle text-bold float-left"
                    >
                      Selamat Pagi
                    </div>
                    <br />
                    <!-- Nama User -->
                    <div
                      class="text-subtitle1 float-left"
                      style="color: #313131"
                    >
                      IndonesiaLaundry
                    </div>
                    <br />
                    <!-- Date -->
                    <div
                      class="text-caption float-left q-px-xs"
                      style="
                        font-size: 11px;
                        min-width: 10vw;
                        background-color: #ffffff;
                        color: #888888;
                        border-radius: 10px;
                      "
                    >
                      {{ moment().format("DD MMMM YYYY") }}
                    </div>
                  </div>
                </div>
              </div>
            </q-page>
          </q-img>
        </div>
        <q-card flat>
          <q-card-actions class="bg-fafafa">
            <!-- Search -->
            <q-input
              dense
              class="q-ml-sm"
              type="search"
              style="width: 200px; color: black; font-size: 15px"
              rounded
              outlined
              v-model="search"
              placeholder="Cari Pesanan"
            >
              <q-icon
                name="search"
                class="self-center"
                size="30px"
                color="grey"
              />
            </q-input>
            <q-space></q-space>
            <!-- Icon Filter -->
            <q-btn ripple="true" flat class="q-mr-sm" to="/filter-search">
              <img
                src="~/assets/icon-filter.svg"
                alt="icon-filter"
                style="size: 30vh"
              />
            </q-btn>
          </q-card-actions>
        </q-card>
        <div class="self-center"></div>
        <!-- List Pesanan -->
        <q-list
          bordered
          separator
          class="q-mx-md q-my-xs"
          style="background-color: #fff; border-radius: 20px 20px 20px 20px"
        >
          <q-item class="q-my-sm q-mx-md" clickable to="/detail-transaksi">
            <q-item-section avatar>
              <q-avatar
                color="primary"
                text-color="white"
                size="60px"
                style="margin-left: -20px"
              >
                <img src="~/assets/avatar-box.png" alt="avatar-box" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="self-center">
              <q-item-label class="text-weight-medium">Vino</q-item-label>
              <q-item-label caption lines="1" class="q-mb-sm">{{
                moment().format("DD MMM YYYY")
              }}</q-item-label>
            </q-item-section>

            <q-item-section>
              <q-linear-progress
                stripe
                style="max-width: 20vw; border-radius: 50px; color: #49c26b"
                class="self-center q-mb-md on-right"
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
          <q-item class="q-my-sm q-mx-md" clickable to="/detail-transaksi">
            <q-item-section avatar>
              <q-avatar
                color="primary"
                text-color="white"
                size="60px"
                style="margin-left: -20px"
              >
                <img src="~/assets/avatar-box.png" alt="avatar-box" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="self-center">
              <q-item-label class="text-weight-medium">Arif</q-item-label>
              <q-item-label caption lines="1" class="q-mb-sm"
                >11 Jan 2022</q-item-label
              >
            </q-item-section>

            <q-item-section>
              <q-linear-progress
                stripe
                style="max-width: 20vw; border-radius: 50px; color: #49c26b"
                class="self-center q-mb-md on-right"
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
          <q-item class="q-my-sm q-mx-md" clickable to="/detail-transaksi">
            <q-item-section avatar>
              <q-avatar
                color="primary"
                text-color="white"
                size="60px"
                style="margin-left: -20px"
              >
                <img src="~/assets/avatar-box.png" alt="avatar-box" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="self-center">
              <q-item-label class="text-weight-medium">Dea</q-item-label>
              <q-item-label caption lines="1" class="q-mb-sm"
                >11 Jan 2022</q-item-label
              >
            </q-item-section>

            <q-item-section>
              <q-linear-progress
                stripe
                style="max-width: 20vw; border-radius: 50px; color: #49c26b"
                class="self-center q-mb-md on-right"
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
          <q-item class="q-my-sm q-mx-md" clickable to="/detail-transaksi">
            <q-item-section avatar>
              <q-avatar
                color="primary"
                text-color="white"
                size="60px"
                style="margin-left: -20px"
              >
                <img src="~/assets/avatar-box.png" alt="avatar-box" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="self-center">
              <q-item-label class="text-weight-medium">Firosyan</q-item-label>
              <q-item-label caption lines="1" class="q-mb-sm"
                >11 Jan 2022</q-item-label
              >
            </q-item-section>

            <q-item-section>
              <q-linear-progress
                stripe
                style="max-width: 20vw; border-radius: 50px; color: #49c26b"
                class="self-center q-mb-md on-right"
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
          <q-item class="q-my-sm q-mx-md" clickable to="/detail-transaksi">
            <q-item-section avatar>
              <q-avatar
                color="primary"
                text-color="white"
                size="60px"
                style="margin-left: -20px"
              >
                <img src="~/assets/avatar-box.png" alt="avatar-box" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="self-center">
              <q-item-label class="text-weight-medium">Bryan</q-item-label>
              <q-item-label caption lines="1" class="q-mb-sm"
                >11 Jan 2022</q-item-label
              >
            </q-item-section>

            <q-item-section>
              <q-linear-progress
                stripe
                style="max-width: 20vw; border-radius: 50px; color: #49c26b"
                class="self-center q-mb-md on-right"
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

          <q-item class="q-my-sm q-mx-md" clickable to="/detail-transaksi">
            <q-item-section avatar>
              <q-avatar
                color="primary"
                text-color="white"
                size="60px"
                style="margin-left: -20px"
              >
                <img src="~/assets/avatar-box.png" alt="avatar-box" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="self-center">
              <q-item-label class="text-weight-medium">Hisyam</q-item-label>
              <q-item-label caption lines="1" class="q-mb-sm"
                >11 Jan 2022</q-item-label
              >
            </q-item-section>

            <q-item-section>
              <q-linear-progress
                stripe
                style="max-width: 20vw; border-radius: 50px; color: #49c26b"
                class="self-center q-mb-md on-right"
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
          <q-item class="q-my-sm q-mx-md" clickable to="/detail-transaksi">
            <q-item-section avatar>
              <q-avatar
                color="primary"
                text-color="white"
                size="60px"
                style="margin-left: -20px"
              >
                <img src="~/assets/avatar-box.png" alt="avatar-box" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="self-center">
              <q-item-label class="text-weight-medium">Deni Putra</q-item-label>
              <q-item-label caption lines="1" class="q-mb-sm"
                >11 Jan 2022</q-item-label
              >
            </q-item-section>

            <q-item-section>
              <q-linear-progress
                stripe
                style="max-width: 20vw; border-radius: 50px; color: #49c26b"
                class="self-center q-mb-md on-right"
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
          <q-item class="q-my-sm q-mx-md" clickable to="/detail-transaksi">
            <q-item-section avatar>
              <q-avatar
                color="primary"
                text-color="white"
                size="60px"
                style="margin-left: -20px"
              >
                <img src="~/assets/avatar-box.png" alt="avatar-box" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="self-center">
              <q-item-label class="text-weight-medium" style="width: 50px"
                >Suparjo Tejo</q-item-label
              >
              <q-item-label caption lines="1" class="q-mb-sm"
                >11 Jan 2022</q-item-label
              >
            </q-item-section>

            <q-item-section>
              <q-linear-progress
                stripe
                style="max-width: 20vw; border-radius: 50px; color: #49c26b"
                class="self-center q-mb-md on-right"
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
          <q-item class="q-my-sm q-mx-md" clickable to="/detail-transaksi">
            <q-item-section avatar>
              <q-avatar
                color="primary"
                text-color="white"
                size="60px"
                style="margin-left: -20px"
              >
                <img src="~/assets/avatar-box.png" alt="avatar-box" />
              </q-avatar>
            </q-item-section>

            <q-item-section class="self-center">
              <q-item-label class="text-weight-medium"
                >Alif Syahputra</q-item-label
              >
              <q-item-label caption lines="1" class="q-mb-sm"
                >11 Jan 2022</q-item-label
              >
            </q-item-section>

            <q-item-section>
              <q-linear-progress
                stripe
                style="max-width: 20vw; border-radius: 50px; color: #49c26b"
                class="self-center q-mb-md on-right"
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
            style="width: 30px; height: 30px"
            src="~/assets/barcode-scan.svg"
        /></q-btn>
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
import moment from "moment";

export default {
  data() {
    return {
      tab: "home",
      search: ref(""),
      progress: 0.6 * 100 + "%",
    };
  },

  methods: {
    moment() {
      return moment();
    },
  },
};
</script>

<style></style>
