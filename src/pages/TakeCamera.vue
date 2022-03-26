<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header class="text-center">
      <q-toolbar class="bg-white">
        <q-btn class="" flat round @click="$router.back()">
          <q-avatar size="20px" icon="fas fa-times" style="color: #3a3838">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #3a3838; font-size: 20px"
          >Kamera
        </q-toolbar-title>
        <q-item-section
          side
          class="text-left text-weight-medium"
          style="color: #5a5656; font-size: 15px"
        >
          <q-btn dense flat> <div>Simpan</div></q-btn>
        </q-item-section>
      </q-toolbar>
    </q-header>
    <q-page-container
      style="background-color: #fafafa"
      class="window-height bg-grey"
    >
      <!-- <q-pull-to-refresh> -->
      <q-page class="full-height bg-pink">
        <div style="height: 50%" class="bg-red">
          <q-img class="full-width" src="~/assets/Rectangle254.svg" />
        </div>
        <div
          class="row bg-white justify-center items-center"
          style="height: 50%"
        >
          <q-btn round>
            <q-img
              src="~/assets/Group5170.svg"
              style="height: 90px; width: 90px"
            />
          </q-btn>
        </div>
        <q-footer class="full-width bg-white">
          <q-tabs
            v-model="tab"
            inline-label
            switch-indicator
            indicator-color="teal-14"
            style="color: #000000"
          >
            <q-tab class="col-6" name="gambar" label="Gambar" />
            <q-tab class="col-6" name="video" label="Video" />
          </q-tabs>
        </q-footer>
      </q-page>
      <!-- </q-pull-to-refresh> -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      mails: null,
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
