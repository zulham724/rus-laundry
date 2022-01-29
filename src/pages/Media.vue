<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header class="text-center">
      <q-toolbar class="bg-white q-py-md">
        <q-btn class="q-mt-sm" flat round @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #49c2c0">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium q-mt-sm"
          style="color: #888888; font-size: 20px"
          >Galeri</q-toolbar-title
        >
    <q-btn class="float-right" text-color="grey-8" flat />
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
          <q-list class="row" style="height: 75" bordered separator>
            <q-item class="col-3 bg-red" clickable v-ripple>
              <q-img
                class="full-width"
                style=""
                src="~/assets/Rectangle254.svg"
                :ratio="1"
              />
            </q-item>

            <q-item class="col-3 bg-blue" clickable v-ripple>
              <q-img
                class="full-width"
                src="~/assets/Rectangle254.svg"
                style=""
              />
            </q-item>

            <q-item class="col-3 bg-black" clickable v-ripple>
              <q-img
                class="full-width"
                src="~/assets/Rectangle254.svg"
                style=""
              />
            </q-item>
<q-item class="col-3 bg-green" clickable v-ripple>
              <q-img
                class="full-width"
                src="~/assets/Rectangle254.svg"
                style=""
              />
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

<style></style >