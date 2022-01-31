<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container style="background-color: #fafafa">
      <q-header>
        <q-toolbar class="bg-white q-py-md">
          <q-btn flat round size="10px" @click="$router.back()">
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
            >Filter Pencarian</q-toolbar-title
          >
        </q-toolbar>
      </q-header>
      <q-page class="q-mt-md" style="background-color: #fafafa">
        <q-list
          separator
          dense
          class="q-mx-xs shadow-1"
          style="background-color: #ffffff"
        >
          <q-item-label
            class="q-pl-md q-py-md text-weight-bold"
            style="color: #888888"
            >Layanan</q-item-label
          >
          <q-separator></q-separator>
          <q-separator></q-separator>
          <q-separator></q-separator>
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >Setrika</q-item
          >
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >Cuci basah</q-item
          >
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >Cuci kering + setrika</q-item
          >
        </q-list>

        <q-list
          separator
          dense
          class="q-mx-xs q-mt-md shadow-1"
          style="background-color: #ffffff"
        >
          <q-item-label
            class="q-pl-md q-py-md text-weight-bold"
            style="color: #888888"
            >Berdasarkan Tanggal Masuk</q-item-label
          >
          <q-separator></q-separator>
          <q-separator></q-separator>
          <q-separator></q-separator>
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >Hari ini</q-item
          >
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >Minggu ini</q-item
          >
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >Bulan ini</q-item
          >
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >Tahun ini</q-item
          >
        </q-list>

        <q-list
          separator
          dense
          class="q-mx-xs q-mt-md shadow-1"
          style="background-color: #ffffff"
        >
          <q-item-label
            class="q-pl-md q-py-md text-weight-bold"
            style="color: #888888"
            >Berdasarkan Tanggal Keluar</q-item-label
          >
          <q-separator></q-separator>
          <q-separator></q-separator>
          <q-separator></q-separator>
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >Hari ini</q-item
          >
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >Minggu ini</q-item
          >
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >Bulan ini</q-item
          >
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >Tahun ini</q-item
          >
        </q-list>

        <q-list
          separator
          dense
          class="q-mx-xs q-mt-md shadow-1"
          style="background-color: #ffffff"
        >
          <q-item-label
            class="q-pl-md q-py-md text-weight-bold"
            style="color: #888888"
            >Berdasarkan Berat</q-item-label
          >
          <q-separator></q-separator>
          <q-separator></q-separator>
          <q-separator></q-separator>
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >1-3 Kg</q-item
          >
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >3-5 kg</q-item
          >
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >5-7 kg</q-item
          >
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #d0d0d0"
            >Diatas 7 kg</q-item
          >
        </q-list>

        <!-- Button Reset dan Selesai -->
        <div class="row q-pa-md">
          <div class="col-6 text-center">
            <q-btn rounded no-caps style="width: 30vw">
              <div style="color: #313131">Reset</div>
            </q-btn>
          </div>
          <div class="col-6 text-center">
            <q-btn
              rounded
              no-caps
              style="width: 30vw; background-color: #49c2c0"
            >
              <div style="color: #f4f4f4">Selesai</div>
            </q-btn>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
