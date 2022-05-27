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
          class="text-weight-bold q-py-sm q-pb-lg"
          style="color: #747474; font-size: 16px"
        >
          Ganti Nomor Whatsapp <br />anda
        </div>

        <!-- No WhatsApp lama -->
        <div class="row q-py-xs">
          <q-form ref="form" class="row full-width">
            <!-- Phone Code of Country -->
            <!--
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
            -->
            <!-- Phone number -->
            <div class="col-12">
              <q-input
                type="tel"
                dense
                disable
                v-model="oldContactNumber"
                label="Nomor wa lama"
                :rules="[
                  (val) => (val && val.length > 0) || 'Masukkan No. Hp anda',
                ]"
              />
            </div>
          </q-form>
        </div>

        <!-- No WhatsApp Baru -->
        <div class="row q-py-xs">
          <q-form ref="form" class="row full-width">
            <!-- Phone number -->
            <div class="col-12">
              <q-input
                dense
                v-model="newContactNumber"
                label="Masukan nomor wa aktif"
                type="number"
                :rules="[
                  (val) => (val && val.length > 9) || 'Masukkan No. Hp anda',
                ]"
              />
            </div>
          </q-form>
        </div>

        <!-- Button save -->
        <div class="row q-pt-md">
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
      oldContactNumber: null,
      newContactNumber: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log("uraa", this.Auth);
      this.oldContactNumber = this.Auth.auth.contact_number;
    },
    updateContactNumber() {
      let formData = {
        id: this.Auth.auth.id,
        contact_number: this.newContactNumber,
      };
      if (this.oldContactNumber == this.Auth.auth.contact_number) {
        if (
          this.newContactNumber != null &&
          this.oldContactNumber != this.newContactNumber
        ) {
          // this.$q.notify("Gunakan nomor yang berbeda!");
          this.$store
            .dispatch("Auth/updateAccount", formData)
            .then((res) => {
              this.$q.notify("Berhasil melakukan perubahan nomor WA");
              this.$router.push("/marketplace-detail-user");
            })
            .catch((err) => {
              this.$q.notify("Gagal melakukan perubahan!");
            })
            .finally(() => {
              this.newContactNumber = null;
            });
        } else if (this.oldContactNumber == this.newContactNumber) {
          this.$q.notify("Gunakan nomor yang berbeda dan tidak kosong!");
        } else {
          this.$q.notify("Masukkan nomor dengan benar!");
        }
      } else {
        this.$q.notify("Pastikan nomor sudah benar!");
      }
    },
  },
};
</script>

<style></style>
