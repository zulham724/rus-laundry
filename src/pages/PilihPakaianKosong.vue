<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <q-card class="q-py-xs">
          <q-btn
            no-caps
            class="q-pa-sm"
            ripple="false"
            flat
            color="grey"
            size="15px"
            icon="fas fa-arrow-left"
            style="color: white"
            to="/home"
          >
            <div
              class="text-weight-medium"
              style="color: #808080; margin-left: 15px"
            >
              Pilih Jenis item
            </div>
          </q-btn>
        </q-card>

        <q-card flat class="q-mt-sm">
          <q-btn flat no-caps class="full-width" style="height: 50px">
            <div
              class="text-weight-regular float-left"
              style="color: grey; font-size: 2vh"
            >
              Tambah Jenis Item
            </div>
          </q-btn>
        </q-card>
        <div class="text-center q-mt-md">
          <img
            src="~/assets/paket-kosong-unscreen.gif"
            style="width: 275px; height: 275px"
          />
        </div>

        <div class="text-center text-weight-bold q-pa-sm">
          Belum ada Pakaian
        </div>

        <q-btn round class="elevated fixed-bottom-right q-ma-lg q-pa-sm">
          <q-avatar rounded size="5vh">
            <img src="~/assets/cart-pesanan.svg" />
          </q-avatar>
        </q-btn>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
