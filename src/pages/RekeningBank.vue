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
                  Rekening bank
                </div>
              </q-toolbar-title>
            </div>
          </div>
        </q-toolbar>
      </q-header>
    </div>
    <q-page-container>
      <q-page style="background-color: #fafafa">
        <div
          @click="this.$router.push('/tambah-rekening')"
          class="q-mt-sm bg-white q-pa-sm row self-center q-gutter-x-sm"
        >
          <div class="col-2 text-center row justify-center">
            <q-img
              no-spinner
              src="~/assets/creditcard.png"
              style="width: 40px; height: 40px"
            ></q-img>
          </div>
          <div
            class="col text-weight-bold self-center"
            style="color: #313131; font-size: small"
          >
            Tambah Rekening
          </div>
        </div>

        <div v-if="isLoad"></div>
        <div v-else-if="!isLoad && listBank.length" class="q-my-lg">
          <div
            class="q-px-sm text-weight-medium"
            style="color: #313131; font-size: small"
          >
            Rekening terdaftar
          </div>
          <div v-for="user in listBank" :key="user.id"
            @click="this.$router.push(`/detail-rekening/${user.id}`)"
            class="q-mt-sm bg-white q-pa-sm row self-center q-gutter-x-sm"
          >
            <div class="col-2 text-center row justify-center">
              <q-img
                no-spinner
                src="~/assets/creditcard.png"
                style="width: 40px; height: 40px"
              ></q-img>
            </div>
            <div
              class="col column text-weight-bold self-center"
              style="color: #313131; font-size: small"
            >
              <div>{{ user.account_name }}</div>
              <div style="color: #888888; font-size: smaller"> {{user.account_number}} </div>
            </div>
          </div>
        </div>

        <div v-else class="fixed-center full-width">
          <div class="text-center justify-center row">
            <q-img
              no-spinner
              src="~/assets/creditcard2.png"
              style="width: 60px; height: 60px"
            ></q-img>
          </div>
          <div
            class="q-mt-xs text-weight-medium justify-center text-center"
            style="color: #313131; font-size: small"
          >
            Belum ada rekening terdaftar
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      isLoad: false,
      listBank: [],
    };
  },
  computed: {
    auth() {
      return this.$store.getters["Auth/auth"];
    },
  },
  mounted() {
    this.getListBank();
  },
  methods: {
    getListBank() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Bank/getAccountBank", this.auth.shop.id)
          .then((res) => {
            this.listBank = res.data;
            console.log("cek bank", res);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
  },
};
</script>

<style>
</style>