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
          <q-list class="">
            <q-item  clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Ini Adalah Spam</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  rounded
                  style="color: #000000; font-size: 14px"
                  ><q-icon name="fas fa-chevron-right" size="15px"></q-icon></q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Mengandung Provokasi</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  rounded
                  style="color: #000000; font-size: 14px"
                  ><q-icon name="fas fa-chevron-right" size="15px"></q-icon></q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Mengandung Konten Hak Cipta</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  rounded
                  style="color: #000000; font-size: 14px"
                  ><q-icon name="fas fa-chevron-right" size="15px"></q-icon></q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Terdapat Unsur Pornografi</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  rounded
                  style="color: #000000; font-size: 14px"
                  ><q-icon name="fas fa-chevron-right" size="15px"></q-icon></q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Ujaran Kebencian</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  rounded
                  style="color: #000000; font-size: 14px"
                  ><q-icon name="fas fa-chevron-right" size="15px"></q-icon></q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Konten Kekerasan</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  rounded
                  style="color: #000000; font-size: 14px"
                  ><q-icon name="fas fa-chevron-right" size="15px"></q-icon></q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Postingan Berisi Konten Ilegal</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  rounded
                  style="color: #000000; font-size: 14px"
                  ><q-icon name="fas fa-chevron-right" size="15px"></q-icon></q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Informasi Hoax</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  rounded
                  style="color: #000000; font-size: 14px"
                  ><q-icon name="fas fa-chevron-right" size="15px"></q-icon></q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Memiliki Unsur Penghinaan</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  rounded
                  style="color: #000000; font-size: 14px"
                  ><q-icon name="fas fa-chevron-right" size="15px"></q-icon></q-btn
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Lainnya</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn
                  flat
                  rounded
                  style="color: #000000; font-size: 14px"
                  ><q-icon name="fas fa-chevron-right" size="15px"></q-icon></q-btn
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
