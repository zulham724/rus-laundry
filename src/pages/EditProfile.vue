<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header class="text-center">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #49c2c0">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #3a3838; font-size: 20px"
          >Edit Profil
        </q-toolbar-title>
        <q-item-section
          side
          class="text-left text-weight-medium"
          style="color: #5a5656; font-size: 15px"
        >
          <q-btn no-caps dense flat> <div>Simpan</div></q-btn>
        </q-item-section>
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-pull-to-refresh>
        <q-page class="text-center">
          <div class="q-py-sm">Ubah Foto</div>
          <q-img src="~/assets/Group5343.svg" style="width: 35%; height: 35%" />
          <q-input class="q-mx-sm q-py-sm" rounded outlined label="Nama" />
          <q-input
            class="q-mx-sm q-py-sm"
            rounded
            outlined
            label="Nama Pengguna"
          />
          <q-input
            class="q-mx-sm q-py-sm"
            rounded
            outlined
            label="Bio"
            type="textarea"
          />
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
