<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header class="text-center">
      <q-toolbar class="bg-white">
        <q-btn class="" flat round @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-times" style="color: #3a3838">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #3a3838; font-size: 20px"
          >Galeri
        </q-toolbar-title>
        <q-item-section
          side
          class="text-left text-weight-medium"
          style="color: #5a5656; font-size: 15px"
        >
          <div>lanjutkan</div>
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
            <q-tab name="gambar" label="Gambar" />
            <q-tab name="video" label="Video" />
          </q-tabs>
          <q-img class="full-width" src="~/assets/Rectangle254.svg" style="" />
          <q-list class="row">
            <q-item class="col-3 bg-red" v-for="a in 8" :key="a">
              <q-img
                class="full-width"
                src="~/assets/Rectangle254.svg"
                style=""
            /></q-item>
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
