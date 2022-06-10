<template>
  <q-layout class="mbl">
    <div class="fixed-top" style="z-index: 999">
      <q-header elevated>
        <q-toolbar class="bg-white">
          <div class="row col-12">
            <div class="col-2 justify-start text-left self-center">
              <q-btn
                dense
                round
                flat
                color="black"
                icon="arrow_back"
                @click="$router.back()"
              />
            </div>
            <div class="col-8 self-center">
              <q-toolbar-title>
                <div class="text-body2 text-black text-bold self-center">
                  Tambah Rekening
                </div>
              </q-toolbar-title>
            </div>
          </div>
        </q-toolbar>
      </q-header>
    </div>
    <q-page-container>
      <q-page style="background-color: #fcfcfc">
        <q-form ref="form">
          <div class="q-pt-md" style="background-color: #fff">
            <q-input
              class="q-px-xs"
              input-class="q-px-sm"
              v-model="formData.account_name"
              label="Nama pemilik rekening"
              :rules="[(val) => !!val || 'mohon diisi']"
            />
            <q-input
              class="q-px-xs"
              input-class="q-px-sm"
              v-model="formData.name"
              label="Bank"
              :rules="[(val) => !!val || 'mohon diisi']"
            />
            <q-input
              type="number"
              class="q-px-xs"
              input-class="q-px-sm"
              v-model="formData.account_number"
              label="No. rekening"
              :rules="[(val) => !!val || 'mohon diisi']"
            />
          </div>
        </q-form>
        <div class="text-center q-pt-md q-px-md">
          <q-btn
          :disable="loading"
          :loading="loading"
            class="full-width"
            style="background-color: #49c2c0"
            text-color="white"
            label="Buat Rekening"
            @click="onsubmit()"
            no-caps
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      formData: {
        account_name: "",
        account_number: "",
        name: "",
      },
      loading: false
    };
  },
  mounted() {
    console.log('cek auth', this.auth);
  },
  computed: {
    auth() {
      return this.$store.getters["Auth/auth"]
    }
  },
  methods: {
    onsubmit() {
      console.log('ppp')
      this.$refs.form.validate().then((success) => {
        if (success) {
            this.loading = true;
          this.$store.dispatch("Bank/addAccountBank", {shopId: this.auth.shop.id, formData:this.formData}).then((res) => {
            this.$q.notify('Berhasil menambah rekening')
            this.$router.back()
          }).catch((err) => {
            this.$q.notify('Terjadi kesalahan')
          }).finally(() => {
            this.loading = false;
          })
        } else {
          this.$q.notify('Lengkapi data terlebih dahulu..')
        }
      })
    },
  },
};
</script>

<style></style>
