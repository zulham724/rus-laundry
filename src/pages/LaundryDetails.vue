<template>
  <q-layout>
    <q-page-container>
      <q-header>
        <q-toolbar class="bg-white q-py-md">
          <q-btn flat round size="10px" to="/detail-transaksi">
            <q-avatar
              size="25px"
              icon="fas fa-arrow-left"
              style="color: #888888"
            >
            </q-avatar>
          </q-btn>
          <q-toolbar-title
            class="text-left text-weight-medium"
            style="color: #888888; font-size: 16px"
            >Status Cucian</q-toolbar-title
          >
        </q-toolbar>
      </q-header>
      <q-separator></q-separator>
      <q-separator></q-separator>
      <q-page>
        <div class="row q-mx-md q-mt-md">
          <div class="col-10 q-pt-xs" style="color: #7fcfdc; font-size: 18px">
            Pesanan sedang di cuci
          </div>
          <div class="col-2 float-right">
            <q-btn flat style="width: 20px" class="on-right">
              <q-avatar
                size="20px"
                square
                icon="far fa-edit"
                style="color: #888888"
              ></q-avatar>
            </q-btn>
          </div>
        </div>
        <div class="row q-mx-md" style="color: #888888; font-size: 14px">
          {{ moment().format("DD-MM-YYYY HH:mm") }}
        </div>
        <div class="row q-ml-md">
          <q-btn
            flat
            dense
            align="left"
            no-caps
            style="color: #d0caca"
            to="/see-more-status-laundry"
          >
            <div style="font-size: 12px">Lihat selengkapnya</div>
          </q-btn>
        </div>

        <q-list class="q-my-xs q-mx-md">
          <q-item class="q-my-sm" no-caps>
            <q-item-section class="self-center q-mt-xl">
              <q-item-label
                caption
                lines="1"
                class="text-weight-bold"
                style="font-size: 14px"
                >Paket Lainnya</q-item-label
              >
            </q-item-section>

            <!-- Button Paket Lainnya -->
            <q-item-section avatar class="q-mt-xl">
              <q-btn round flat>
                <q-avatar size="30px" class="bg-transparent">
                  <img
                    src="~/assets/icon-status-cucian.svg"
                    style="width: 5vh"
                  />
                </q-avatar>
              </q-btn>
            </q-item-section>
          </q-item>
          <q-separator></q-separator>
          <q-separator></q-separator>
        </q-list>

        <!-- Animasi Proses Cucian -->
        <div class="text-center">
          <q-img src="~/assets/animasi-proses-cuci.gif" style="width: 30vh">
          </q-img>
        </div>
        <!-- Estimasi Waktu -->
        <div class="text-center q-mt-md" style="color: #888888">
          Estimasi 24:00:00
        </div>
        <!-- Animasi Progress Loading  -->
        <div class="row justify-center">
          <q-linear-progress
            stripe
            style="
              max-width: 30vw;
              max-height: 35px;
              border-radius: 50px;
              color: #49c2c0;
            "
            class="q-mb-md q-mt-lg"
            size="10vw"
            :value="progress"
          >
            <div class="absolute-full flex flex-center">
              <q-badge
                style="font-size: 3vw"
                class="bg-transparent"
                text-color="white "
                :label="progress"
              />
            </div>
          </q-linear-progress>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      progress: 0.25 * 100 + "%",
      text: "",
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
