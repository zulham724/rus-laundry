<template>
  <q-layout class="mbl">
    <q-header class="text-center shadow-1">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.push('/marketplace-home')">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: black">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #3a3838; font-size: 17px"
          >No WhatsApp
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-lg">
        <div class="text-weight-bold q-py-sm" style="color: #747474; font-size: 16px">
          Belum ada nomor WhatsApp <br />tambah nomor baru
        </div>

        <div class="row q-py-md">
          <!-- Phone Code of Country -->
          <div class="col-2">
            <q-select dense v-model="model" :options="options" label="+62" />
          </div>
          <!-- Phone number -->
          <div class="col-10 q-pl-md">
            <q-input
              dense
              v-model="text"
              placeholder="Masukan nomor wa aktif"
            />
          </div>
        </div>

        <!-- Button save -->
        <div class="row q-pt-xl">
          <q-btn no-caps class="q-pa-md full-width" style="background-color: #9B27F1; border-radius: 10px">
            <div class="text-weight-regular" style="color: white; font-size: 15px">Simpan</div>
          </q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      model: ref(null),
      text: ref(""),
      options: ["+62"],
    };
  },
};
</script>

<style>
</style>