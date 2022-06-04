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
          <q-list>
            <q-item
              v-ripple
              v-for="item in report_list"
              :key="item.id"
              clickable
              v-close-popup
              @click="sendReport(item.name)"
            >
              <q-item-section>
                <q-item-label>{{ item.name }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn flat rounded style="color: #000000; font-size: 14px"
                  ><q-icon name="fas fa-chevron-right" size="15px"></q-icon
                ></q-btn>
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
  props: ["post_id"],
  computed: {
    ...mapState(["ReportPost"]),
  },
  data() {
    return {
      printers: [],
      report: {
        id: null,
        name: null,
      },
      report_list: [
        {
          id: 1,
          name: "Ini Adalah Spam",
        },
        {
          id: 2,
          name: "Mengandung Provokasi",
        },
        {
          id: 3,
          name: "Mengandung Konten Hak Cipta",
        },
        {
          id: 4,
          name: "Terdapat Unsur Pornografi",
        },
        {
          id: 5,
          name: "Ujaran Kebencian",
        },
        {
          id: 6,
          name: "Konten Kekerasan",
        },
        {
          id: 7,
          name: "Postingan Berisi Konten Ilegal",
        },
        {
          id: 8,
          name: "Informasi Hoax",
        },
        {
          id: 9,
          name: "Memiliki Unsur Penghinaan",
        },
        {
          id: 10,
          name: "Lainnya",
        },
      ],
      contact: "085741960341",
      message: "",
    };
  },
  mounted() {},
  methods: {
    submitMessage() {
      this.setTextMessage();
      // console.log(this.message);
      let url = `https://api.whatsapp.com/send?phone=${this.formatPhoneNumber(
        this.contact
      )}&text=${encodeURI(this.message)}`;
      window.open(url, "_blank");

      this.$router.push('/community-owner');
    },

    setTextMessage() {
      // let url = `${this.APP_URL}/preview-detail-transaksi-2/${this.order.id}`;
      let tmp = 'share';
      this.message = tmp;
    },

    formatPhoneNumber(number) {
      // console.log(typeof(String(number)))
      let formatted = String(number).replace(/\D/g, "");

      if (formatted.startsWith("0")) {
        formatted = "+62" + formatted.substr(1);
      }

      if (formatted.startsWith("62")) {
        formatted = "+62" + formatted.substr(2);
      }

      return formatted;
    },
    sendReport(value) {
      // console.log(value);
      this.$store.commit("ReportPost/setReportPost", value);
      this.$router.push(`/description-report-post-owner/${this.post_id}`);
    },
  },
};
</script>

<style></style>
