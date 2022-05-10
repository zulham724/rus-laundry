<template>
  <q-layout class="mbl">
    <q-header class="text-center shadow-1">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.push('/change-no-whatsapp-owner')">
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
          class="text-weight-bold q-py-sm q-pb-lg"
          style="color: #747474; font-size: 16px"
        >
          Ganti Nomor Whatsapp <br />anda
        </div>

        <!-- No WhatsApp lama -->
        <div class="row q-py-md">
          <q-form ref="form" class="row full-width">
            <!-- Phone Code of Country -->
            <div class="col-2">
              <q-select
                dense
                type="number"
                v-model="model1"
                :options="options"
                :rules="[
                  (val) => (val && val.length > 0) || 'Pilih kode negara',
                ]"
              />
            </div>
            <!-- Phone number -->
            <div class="col-10 q-pl-md">
              <q-input
                type="number"
                dense
                v-model="contact1"
                placeholder="Masukan nomor wa lama"
                :rules="[
                  (val) => (val && val.length > 0) || 'Masukkan No. Hp anda',
                ]"
              />
            </div>
          </q-form>
        </div>

        <!-- No WhatsApp Baru -->
        <div class="row q-py-md">
          <q-form ref="form" class="row full-width">
            <!-- Phone Code of Country -->
            <div class="col-2">
              <q-select
                dense
                v-model="model2"
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
                v-model="contact2"
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
            no-caps
            @click="updateContactNumber()"
            class="q-pa-md full-width"
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
  computed: {
    ...mapState(["Auth"]),
  },
  data() {
    return {
      model1: null,
      model2: null,
      contact1: null,
      contact2: null,
      options: ["+62"],
      oldContactNumber: null,
    };
  },
  methods: {
    updateContactNumber() {
      if ((this.model1 != null) & (this.contact1 != null)) {
        console.log("A1");
        this.contactNumber = null;
        this.oldContactNumber = this.model1 + this.contact1;
        this.checkContactNumber();
      } else if (this.model1 == null || this.contact1 == null) {
        console.log("A2");
        this.$q.notify({
          position: "top",
          message: "Isi data dengan benar",
        });
      }
    },
    checkContactNumber() {
      if (this.oldContactNumber == this.Auth.auth.contact_number) {
        console.log("B1");
      } else {
        console.log("B2");

        // console.log(this.oldContactNumber);
        // console.log(this.Auth.auth.contact_number);
      }
    },
  },
  mounted() {
    console.log("ini auth", this.Auth.auth);
    // console.log("ini cn auth", this.Auth.auth.contact_number);
  },
};
</script>

<style></style>
