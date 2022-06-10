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
        <div v-if="accountBank" class="q-pt-md" style="background-color: #fff">
          <q-input
            readonly
            class="q-px-xs"
            input-class="q-px-sm"
            v-model="accountBank.account_name"
            label="Nama pemilik rekening"
          />
          <q-input
            readonly
            class="q-px-xs"
            input-class="q-px-sm"
            v-model="accountBank.name"
            label="Bank"
          />
          <q-input
            readonly
            class="q-px-xs"
            input-class="q-px-sm"
            v-model="accountBank.account_number"
            label="No. rekening"
          />
        </div>
        <div class="text-center q-pt-md q-px-md">
          <q-btn
            :disable="loading"
            :loading="loading"
            class="full-width"
            style="background-color: #49c2c0"
            text-color="white"
            label="Hapus"
            no-caps
            @click="onDelete()"
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  props: { rekeningId: null },
  data() {
    return {
      loading: false,
      accountBank: {},
    };
  },
  computed: {
    auth() {
      return this.$store.getters["Auth/auth"];
    },
  },
  mounted() {
    // console.log("cek auth", this.auth);
    this.getRekeningById();
  },
  methods: {
    getRekeningById() {
      this.$store
        .dispatch("Bank/getRekeningById", {
          shopId: this.auth.shop.id,
          id: this.rekeningId,
        })
        .then((res) => {
          console.log(res.data);
          this.accountBank = res.data;
        })
        .catch((err) => {
          this.$q.notify("Terjadi kesalahan");
        });
    },
    onDelete() {
      this.loading = true;
      this.$store
        .dispatch("Bank/deleteAccountBank", {
          shopId: this.auth.shop.id,
          id: this.rekeningId,
        })
        .then((res) => {
          this.$q.notify("Berhasil Menghapus rekening");
        })
        .catch((err) => {
          this.$q.notify("Terjadi kesalahan");
        })
        .finally(() => {
          this.loading = false;
          this.$router.back();
        });
    },
  },
};
</script>

<style></style>
