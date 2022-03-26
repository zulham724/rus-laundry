<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header class="text-center">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.back()">
          <q-avatar size="20px" icon="fas fa-arrow-left" style="color: #49c2c0">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #3a3838; font-size: 20px"
          >Laundry Indonesia
        </q-toolbar-title>
        <q-item-section
          side
          class="text-left text-weight-medium"
          style="color: #5a5656; font-size: 15px"
        >
        </q-item-section>
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-pull-to-refresh>
        <q-page>
          <q-tabs
            v-model="tab"
            inline-label
            switch-indicator
            indicator-color="teal-14"
            class="bg-white full-width"
          >
            <q-tab name="gambar" label="Mengikuti" />
            <q-tab name="video" label="Diikuti" />
          </q-tabs>
          <q-btn-dropdown v-model="menu" class="q-mx-sm" flat label="Urutkan">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Pengikut Lama</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Pengikut Baru</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-input
            dense
            class="q-mx-sm"
            type="search"
            rounded
            outlined
            v-model="search"
            label="Cari"
          >
            <template v-slot:prepend>
              <q-icon
                name="search"
                class="self-center"
                size="25px"
                color="grey"
              />
            </template>
          </q-input>
          <q-list class="">
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Laundry Semarang</q-item-label>
                <q-item-label caption>pusat_oleholehbaju</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  class="bg-teal-14"
                  style="color: #ffffff; font-size: 14px"
                  >Mengikuti</q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Laundry Semarang</q-item-label>
                <q-item-label caption>pusat_oleholehbaju</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  class="bg-teal-14"
                  style="color: #ffffff; font-size: 14px"
                  >Mengikuti</q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Laundry Semarang</q-item-label>
                <q-item-label caption>pusat_oleholehbaju</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  class="bg-grey-6"
                  style="color: #ffffff; font-size: 14px"
                  >Ikuti</q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Laundry Semarang</q-item-label>
                <q-item-label caption>pusat_oleholehbaju</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  class="bg-grey-6"
                  style="color: #ffffff; font-size: 14px"
                  >Ikuti</q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Laundry Semarang</q-item-label>
                <q-item-label caption>pusat_oleholehbaju</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  class="bg-grey-6"
                  style="color: #ffffff; font-size: 14px"
                  >Ikuti balik</q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <q-avatar icon="folder" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Laundry Semarang</q-item-label>
                <q-item-label caption>pusat_oleholehbaju</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  class="bg-grey-6"
                  style="color: #ffffff; font-size: 14px"
                  >Ikuti balik</q-btn
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-page>
      </q-pull-to-refresh>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import { ref } from "vue";
export default {
  setup() {
    return {
      menu: ref(false),
      onItemClick() {
        // console.log('Clicked on an Item')
      },
      tab: ref("mails"),
    };
  },

  computed: {
    ...mapState(["Printer"]),
  },
  data() {
    return {
      printers: [],
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style></style>
