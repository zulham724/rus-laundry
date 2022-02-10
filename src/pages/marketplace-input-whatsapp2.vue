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
          Masukan kode verifikasi <br />yang dikirimkan dari <br/> Whatsapp anda
        </div>

        <div class="row q-py-md full-width">
          <div class="col-1"></div>
          <!-- Phone number -->
          <div class="col-5 row full-width q-gutter-x-sm justify-center">
          <div class="col-1 text-weight-bold">
            <q-input
            class="justify-center"
              dense
              v-model="code.one"
              placeholder=""
              mask="#"
            />
          </div>
          <div class="col-1 ">
            <q-input
              dense
              v-model="code.two"
              placeholder=""
              mask="#"
            />
          </div>
          <div class="col-1 ">
            <q-input
              dense
              v-model="code.three"
              placeholder=""
              mask="#"
            />
          </div>
          <div class="col-1 ">
            <q-input
              dense
              v-model="code.four"
              placeholder=""
              mask="#"
            />
          </div>
          <div class="col-1 ">
            <q-input
              dense
              v-model="code.five"
              placeholder=""
              mask="#"
            />
          </div>

            
          </div>
          <div class="col-1"></div>
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
      code: {
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
      },
    };
  },
};
</script>

<style>
</style>