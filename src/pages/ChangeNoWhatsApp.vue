<template>
  <q-layout class="mbl">
    <q-header class="text-center shadow-1">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.push('/marketplace-detail-user')">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: black">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #3a3838; font-size: 17px"
          >No WhatsApp
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-lg">
        <div
          class="text-weight-bold q-py-sm"
          style="color: #747474; font-size: 16px"
        >
          Nomor anda telah <br />terverifikasi
        </div>

        <div class="row q-py-md full-width">
          <!-- Button edit no wa -->
          <q-btn
            @click="checkNumber()"
            no-caps
            class="q-pa-md q-mt-md full-width"
            style="background-color: #9b27f1; border-radius: 10px"
          >
            <div
              class="text-weight-regular"
              style="color: white; font-size: 15px"
            >
              Ubah
            </div>
          </q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["Auth"]),
  },
  methods: {
    checkNumber() {
      if (this.Auth.auth.contact_number) {
        this.$router.push("/change-no-whatsapp2");
      } else {
        this.$q.notify({
          position: "top",
          message: "Anda belum mengisi nomor telepon",
        });
      }
    },
  },
};
</script>

<style></style>
