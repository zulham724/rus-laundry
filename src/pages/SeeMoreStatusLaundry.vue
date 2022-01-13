<template>
  <q-layout>
    <q-page-container>
      <q-header>
        <q-toolbar class="bg-white q-py-md">
          <q-btn flat round size="10px" to="/laundry-details">
            <q-avatar
              size="25px"
              icon="fas fa-arrow-left"
              style="color: #888888"
            >
            </q-avatar>
          </q-btn>
          <q-toolbar-title
            class="text-left text-weight-medium"
            style="color: #888888; font-size: 16px"
            >Status Cucian</q-toolbar-title
          >
        </q-toolbar>
      </q-header>
      <q-separator></q-separator>
      <q-separator></q-separator>
    </q-page-container>
    <q-page class="q-mt-xl">
      <div class="row q-ml-lg" style="color: #d0caca; font-size: 12px">
        Jenis Pakaian
      </div>
      <div class="row q-ml-lg" style="color: #7fcfdc">Pakaian Halus</div>
      <div class="row q-ml-lg" style="color: #d0caca; font-size: 12px">
        Estimasi Pesanan
      </div>
      <div class="row q-ml-lg" style="color: #7fcfdc">3 jam</div>
      <div class="row q-ml-lg" style="color: #d0caca; font-size: 12px">
        Status Cucian
      </div>
      <div class="row q-ml-lg" style="color: #7fcfdc">
        Pesanan sedang di cuci
      </div>
      <div class="row q-ml-lg" style="color: #888888; font-size: 12px">
        {{ moment().format("DD-MM-YYYY HH:mm") }}
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import moment from "moment";
export default {
  methods: {
    data() {
      return {};
    },
    moment() {
      return moment();
    },
  },
};
</script>

<style></style>
