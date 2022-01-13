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
          >Pilih Jenis Pakaian</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div class="row q-mt-md bg-white">
          <q-btn
            align="left"
            to="/input-new-clothes"
            flat
            no-caps
            class="full-width"
            style="height: 45px"
          >
            <div class="text-weight-regular text-left" style="color: #888888">
              Tambah Jenis Pakaian
            </div>
          </q-btn>
        </div>
        <q-card flat class="q-mt-md"> </q-card>
        <div class="text-center" style="margin-top: 80px">
          <img
            src="~/assets/paket-kosong-unscreen.gif"
            style="width: 205px; height: 205px"
          />
        </div>

        <div class="text-center text-weight-bold q-pa-md">
          Belum ada Pakaian
        </div>

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn fab round style="width: 60px; height: 60px">
            <img src="~/assets/cart-pesanan.svg" />
          </q-btn>
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
