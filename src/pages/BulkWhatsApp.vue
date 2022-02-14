<template>
  <q-layout class="mbl" style="background-color: #fafafa">
    <!--Header-->
    <div class="fixed-top bg-white" style="z-index: 999">
      <q-header class="text-center shadow-1">
        <q-toolbar class="bg-white q-py-sm row">
          <q-btn flat round @click="$router.push('/menu')">
            <q-avatar size="25px" icon="fas fa-arrow-left" style="color: black">
            </q-avatar>
          </q-btn>
          <div class="column q-pl-sm">
            <div
              class="text-weight-medium"
              style="color: #888888; font-size: 20px"
            >
              Kirim pesan masal
            </div>

            <!--Kondisi default sebelum memilih-->
            <div
              class="text-left text-weight-medium"
              style="color: #dddddd; font-size: 12px"
            >
              Tidak ada kontak yang dipilih
            </div>
            <!--Kondisi setelah memilih-->
            <div
              v-if="(pilihKontak = false)"
              class="text-left text-weight-medium"
              style="color: #dddddd; font-size: 12px"
            >
              200 kontak terpilih
            </div>
          </div>
          <q-space></q-space>
          <q-item-section side>
            <!--Button-->
            <div>
              <q-btn dense flat>
                <q-img
                  no-spinner
                  src="~/assets/button-pesan-masal.svg"
                  style="width: 24px; height: 24px"
                ></q-img>
              </q-btn>
            </div>
            <!--Button color-->
            <div v-if="(buttonClicked = false)">
              <q-btn dense flat>
                <q-img
                  no-spinner
                  src="~/assets/button-pesan-masal-color.svg"
                  style="width: 24px; height: 24px"
                ></q-img>
              </q-btn>
            </div>
          </q-item-section>
        </q-toolbar>
      </q-header>
      </div>
      <q-page-container>
        <q-page>
          <div
            class="q-pa-lg text-weight-regular"
            style="font-size: 15px; color: #515151"
          >
            Pilih kontak terlebih dahulu <br />
            minimal 5.
          </div>

          <!--List-->
          <q-list class="bg-white">
            <q-item
              clickable
              v-for="n in 17"
              :key="n"
              class="row bg-white shadow-2 q-mx-lg q-mb-md"
              style="height: 65px; border-radius: 5px"
            >
              <q-item-section avatar>
                <q-avatar square>
                  <q-img
                    src="~/assets/pesan-masal.svg"
                    no-spinner
                    style="width: 35px; height: 35px"
                  />
                </q-avatar>
              </q-item-section>
              <q-item-section class="text-body1">
                <q-item-label>Muh ali ridlo</q-item-label>
                <q-item-label caption>083928187212 </q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-checkbox v-model="val" />
              </q-item-section>
            </q-item>
          </q-list>

          <q-page-sticky position="bottom-right" :offset="[20, 60]">
            <q-btn
            @click="$router.push('/bulk-whatsapp-content')"
            style="background-color: #49C2C0; color: #fafafa"
            round
            fab
            icon="fas fa-check"
            >
            </q-btn>
          </q-page-sticky>
        </q-page>
      </q-page-container>
    
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      pilihKontak: false,
      buttonClicked: false,
      val: ref(false),
    };
  },
};
</script>

<style>
</style>