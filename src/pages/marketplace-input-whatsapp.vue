<template>
  <q-layout class="mbl">
    <q-header class="text-center shadow-1">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.push('/marketplace-home')">
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
          Belum ada nomor WhatsApp <br />tambah nomor baru
        </div>

        <div class="row q-py-md">
          <q-form ref="form" class="row full-width">
            <!-- Phone Code of Country -->
            <div class="col-2">
              <q-select
                dense
                v-model="model"
                :options="options"
                :rules="[
                  (val) => (val && val.length > 0) || 'Pilih kode negara',
                ]"
              />
            </div>
            <!-- Phone number -->
            <div class="col-10 q-pl-md">
              <q-input
                dense
                v-model="contact"
                placeholder="Masukan nomor wa aktif"
                :rules="[
                  (val) => (val && val.length > 0) || 'Masukkan No. Hp anda',
                ]"
              />
            </div>
          </q-form>
        </div>

        <!-- Button save -->
        <div class="row q-pt-xl">
          <q-btn
            @click="inputWA()"
            no-caps
            class="q-pa-md full-width"
            style="background-color: #9b27f1; border-radius: 10px"
          >
            <div
              class="text-weight-regular"
              style="color: white; font-size: 15px"
            >
              Simpan
            </div>
          </q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      model: null,
      contact: null,
      options: ["+62"],
    };
  },
  methods: {
    inputWA() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          this.$store
            .dispatch("Auth/addWANumber", {
              contact_number: this.model + this.contact,
            })
            .then((res) => {
              this.$router.back();
            });
        } else {
          this.$q.notify("kesalahan");
        }
      });
    },
  },
};
</script>

<style></style>
