<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header class="text-center">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #49c2c0">
          </q-avatar>
        </q-btn>
        <q-input
          dense
          class="q-mx-xs full-width"
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
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-pull-to-refresh>
        <q-page>


          <q-list class="">
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <q-avatar icon="fas fa-hashtag" class="text-black" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Laundry Mars</q-item-label>
                <q-item-label caption>9999999 postingan</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <q-avatar icon="fas fa-hashtag" class="text-black" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Laundry Semarang</q-item-label>
                <q-item-label caption>2 postingan</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section avatar>
                <q-avatar icon="fas fa-hashtag" class="text-black" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Laundry Semarang</q-item-label>
                <q-item-label caption>350 postingan</q-item-label>
              </q-item-section>
            </q-item>
            
          </q-list>
          <q-footer>
            <q-tabs
              v-model="tab"
              inline-label
              switch-indicator
              indicator-color="teal-14"
              active-color="teal-14"
              class="bg-white full-width"
              style="color:#000000"
            >
              <q-tab name="gambar" label="semua" />
              <q-tab name="video" label="orang" />
              <q-tab name="a" label="#tagar" />
              <q-tab name="d" label="postingan" />
            </q-tabs>
          </q-footer>
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
