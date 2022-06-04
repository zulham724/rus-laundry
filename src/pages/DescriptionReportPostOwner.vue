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
          <div
            class="q-px-sm q-py-sm text-weight-bold"
            style="font-size: medium"
          >
            {{ title }}
          </div>
          <div class="q-px-sm q-py-sm">Deskripsi laporan</div>
          <q-input
            v-model="message"
            class="q-px-sm q-py-sm"
            outlined
            label=""
            type="textarea"
          />
        </q-page>
        <q-footer>
          <q-btn
            @click="submitMessage()"
            class="full-width q-py-sm"
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
  props: ["post_id"],
  computed: {
    ...mapState(["Printer", "ReportPost"]),
  },
  data() {
    return {
      printers: [],
      message: "",
      title: "",
      contact: "085741960341",
    };
  },
  mounted() {
    // console.log("rpp", this.ReportPost);
    this.init();
  },
  methods: {
    init() {
      this.title = this.ReportPost.report;
    },
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
      let tmp = `⛔${this.title}⛔ \n\n  Link : Anggap ini link postingan \n\n Deskripsi : Dan ini deskripsi report postingan`;
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
  },
};
</script>

<style></style>
