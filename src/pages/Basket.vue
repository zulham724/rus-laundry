<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/list-type-of-clothes">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Keranjang</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <!-- <q-card class="bg-grey">
          <q-card-section>
            <div class="row bg-red">
              asd
            </div>
          </q-card-section>
        </q-card> -->

        <div class="row bg-white q-py-sm q-mt-sm">
          <div class="col-6">
            <div
              class="q-ma-md text-subtitle1 text-weight-medium float-left"
              style="color: grey"
            >
              Pakaian Halus
            </div>
          </div>
          <div class="col-6">
            <q-btn
              class="q-ma-sm float-right"
              @click="tambahkg"
              flat
              style="background-color: #d72929; color: white"
            >
              <q-icon
                name="fas fa-plus"
                style="height: 5px; width: 5px"
              ></q-icon>
            </q-btn>
            <div class="float-right q-pa-sm text-weight-medium text-h5">
              {{ counter }}
            </div>

            <q-btn
              class="q-ma-sm float-right"
              @click="kurangkg"
              flat
              style="background-color: #eaeaea"
            >
              <q-icon
                name="fas fa-minus"
                style="height: 5px; width: 5px"
              ></q-icon>
            </q-btn>
          </div>
        </div>
        <div class="row bg-white justify-end">
          <div
            class="text-caption text-weight-light text-right"
            style="margin-right: 30px; margin-top: -20px"
          >
            Jumlah(kg)
          </div>
        </div>

        <q-btn
          to="/choose-package"
          flat
          class="q-my-sm bg-white text-left"
          no-caps
          style="width: 100%"
          align="left"
        >
          <div class="text-left" style="color: grey">Pilih Jenis Paket</div>
        </q-btn>

        <div class="row bg-white q-py-sm q-mt-sm">
          <div class="col-6">
            <div
              class="q-ma-md text-subtitle1 text-weight-medium float-left"
              style="color: grey"
            >
              Selimut
            </div>
          </div>
          <div class="col-6">
            <q-btn
              class="q-ma-sm float-right"
              @click="tambahkg2"
              flat
              style="background-color: #d72929; color: white"
            >
              <q-icon
                name="fas fa-plus"
                style="height: 5px; width: 5px"
              ></q-icon>
            </q-btn>
            <div class="float-right q-pa-sm text-weight-medium text-h5">
              {{ counter2 }}
            </div>

            <q-btn
              class="q-ma-sm float-right"
              @click="kurangkg2"
              flat
              style="background-color: #eaeaea"
            >
              <q-icon
                name="fas fa-minus"
                style="height: 5px; width: 5px"
              ></q-icon>
            </q-btn>
          </div>
        </div>
        <div class="row bg-white justify-end">
          <div
            class="text-caption text-weight-light text-right"
            style="margin-right: 30px; margin-top: -20px"
          >
            Jumlah(kg)
          </div>
        </div>

        <q-btn
          to="/choose-package"
          flat
          class="q-my-sm bg-white text-left"
          no-caps
          style="width: 100%"
          align="left"
        >
          <div class="text-left" style="color: grey">Pilih Jenis Paket</div>
        </q-btn>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },

  methods: {
    tambahkg() {
      this.counter += 1;
    },
    kurangkg() {
      this.counter -= 1;
    },
    tambahkg2() {
      this.counter2++;
    },
    kurangkg2() {
      this.counter2--;
    },
  },
};
</script>

<style></style>
