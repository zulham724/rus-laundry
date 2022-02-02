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
          >Kamera
        </q-toolbar-title>
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
        <div class="bg-white justify-center items-center" style="height: 50%">
          <q-list bordered>
            `
            <q-item clickable v-ripple>
              <q-item-section>Kecerahan</q-item-section>
              <q-item-section avatar>
                <q-icon color="primary" name="bluetooth" />
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>Avatar-type icon</q-item-section>
              <q-item-section avatar>
                <q-avatar color="teal" text-color="white" icon="bluetooth" />
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>Saturasi</q-item-section>
              <q-item-section avatar>
                <q-avatar
                  rounded
                  color="purple"
                  text-color="white"
                  icon="bluetooth"
                />
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>Kontras</q-item-section>
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white"> R </q-avatar>
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section>Vinyet</q-item-section>
              <q-item-section avatar>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>Bayangan</q-item-section>
              <q-item-section avatar>
                <q-avatar square>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>Image rounded avatar</q-item-section>
              <q-item-section avatar>
                <q-avatar rounded>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>Warna</q-item-section>
              <q-item-section avatar>
                <q-avatar rounded>
                  <img src="https://cdn.quasar.dev/img/mountains.jpg" />
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>List item</q-item-section>
              <q-item-section thumbnail>
                <img src="https://cdn.quasar.dev/img/mountains.jpg" />
              </q-item-section>
            </q-item> </q-list
          >`
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
