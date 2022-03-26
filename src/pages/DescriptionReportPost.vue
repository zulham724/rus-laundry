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
          >Laporkan Postingan
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
          <div class="q-px-sm q-py-sm">Ini adalah Spam</div>
          <div class="q-px-sm q-py-sm">Deskripsi laporan</div>
          <q-input
            class="q-px-sm q-py-sm"
            outlined
            label=""
            type="textarea"
          />
        </q-page>
        <q-footer>
          <q-btn
            class="full-width"
            no-caps
            style="background-color: #49c2c0; color: #fafafa"
          >
            Laporkan
          </q-btn>
        </q-footer>
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
