<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/make-an-order">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Rekap Absensi Karyawan</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #e5e5e5">
      <q-page>
        <div
          flat
          class="bg-white q-px-md q-mt-sm shadow-1"
          style="color: #888888"
        >
          Status
        </div>
        <div class="row q-mt-xs bg-white">
          <div class="col-3 bg-white">
            <div class="row justify-center">
              <q-img
              no-spinner
                src="~/assets/confirm-package-unscreen.gif"
                style="width: 130px; height: 130px"
              />
            </div>
          </div>
          <div class="col-4 bg-white q-px-md self-center">
            <!-- Sudah Absen -->
            <div class="text-weight-medium" style="color: #888888">
              Anda Sudah Absen Hari Ini
            </div>
            <!-- Belum Absen -->
            <!-- <div class="text-weight-medium" style="color: #888888">
              Anda Belum Absen Hari Ini
            </div> -->
          </div>
          <div class="col-5 bg-white"></div>
        </div>
        <div class="q-my-xs">
          <q-btn
            no-caps
            flat
            class="bg-white"
            style="width: 100%"
            @click="buttonDetailAbsen()"
          >
            <div
              class="col-10 text-weight-medium text-left"
              style="color: #888888"
            >
              Lihat Detail Absen Anda
            </div>

            <div class="col-2 text-right">
              <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
            </div>
          </q-btn>
        </div>
        <div
          flat
          class="bg-white q-px-md q-mt-sm text-weight-medium"
          style="color: #888888"
        >
          Karyawan lain
        </div>

        <div class="q-mt-xs row bg-white">
          <div class="col-3 self-center q-py-md q-pl-lg">
            <q-avatar style="background-color: #f9f9f9">
              <q-icon color="grey" name="far fa-user" />
            </q-avatar>
          </div>
          <div class="col-9 self-center">
            <div
              class="text-weight-medium"
              style="color: #888888; font-size: 15px"
            >
              Sudarmo Atmojo
            </div>
          </div>
        </div>

        <div class="q-mt-xs row bg-white">
          <div class="col-3 self-center q-py-md q-pl-lg">
            <q-avatar style="background-color: #f9f9f9">
              <q-icon color="grey" name="far fa-user" />
            </q-avatar>
          </div>
          <div class="col-9 self-center">
            <div
              class="text-weight-medium"
              style="color: #888888; font-size: 15px"
            >
              Sudarmo Atmojo
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  methods: {
    buttonDetailAbsen() {
      this.$router.push("/attendance-details");
    },
  },
};
</script>

<style></style>
