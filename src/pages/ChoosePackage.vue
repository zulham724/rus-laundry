<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/basket">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Pilih Paket</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <q-btn
          to="/add-package"
          no-caps
          flat
          class="q-my-md"
          style="width: 100%; background-color: #ffffff; color: grey"
          align="left"
        >
          <div class="q-pa-xs" style="margin-left: -10px">
            Tambah jenis Pakaian
          </div>
        </q-btn>

        <div class="text-center" style="margin-top: 65px">
          <img
            src="~/assets/kategori-kosong-unscreen.gif"
            style="width: 275px; height: 275px"
          />
        </div>
        <div class="text-center text-weight-bold q-pa-md">
          Belum ada Kategori
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
