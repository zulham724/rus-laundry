<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn
          no-caps
          class="q-pa-md"
          ripple="false"
          flat
          color="grey"
          size="12px"
          icon="fas fa-arrow-left"
          style="color: white"
          to="/buatpesanan"
        >
        </q-btn>
        <div class="text-subtitle2" style="color: #808080; margin-left: 15px">
          Keranjang
        </div>
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
              size="10px"
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
              size="10px"
              @click="kurangkg"
              v-if="counter > 0"
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

        <div class="bg-white q-my-sm q-py-xs q-pl-sm" style="color: grey">
          <div class="q-px-sm q-py-sm" style="background-color: ">
            Reguler Cuci + Setrika
          </div>
        </div>
        <div class="row bg-white justify-top q-px-md" style="color: grey">
          <div class="text-caption text-weight-light text-right">Harga</div>
        </div>
        <div class="row12 bg-white q-px-md" style="color: grey">
          <div>Rp. {{ harga1 }}</div>
        </div>

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
              size="10px"
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
              size="10px"
              @click="kurangkg2"
              v-if="counter2 > 0"
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
            Jumlah(Satuan)
          </div>
        </div>

        <div class="bg-white q-my-sm q-py-xs q-pl-sm" style="color: grey">
          <div class="q-px-sm q-py-sm" style="background-color: ">
            Super Kilat Cuci + Setrika
          </div>
        </div>

        <div class="row bg-white justify-top q-px-md" style="color: grey">
          <div class="text-caption text-weight-light text-right">Harga</div>
        </div>
        <div class="row12 bg-white q-px-md" style="color: grey">
          <div>Rp. {{ harga2 }}</div>
        </div>
      </q-page>
      <q-footer class="bg-transparent">
        <div>
          <q-card
            class="shadow-up-2 q-mt-xl"
            style="border-radius: 15px 15px 0 0"
          >
            <div
              class="text-caption text-weight-light q-px-md q-pt-sm"
              style="color: #888888"
            >
              Total Harga
            </div>
            <div
              class="text-weight-medium text-h4 q-px-md q-mb-xs"
              style="color: #4e3d3d"
            >
              Rp {{ hasilakhir().toLocaleString() }}
            </div>
            <div
              class="text-caption text-weight-light q-px-md q-py-xs"
              style="color: #888888"
            >
              Estimasi Pesanan
            </div>
            <div class="q-py-xs">
              <q-btn-dropdown
                class="bg-transparent full-width"
                style="color: #888888"
                split
                flat
                align="left"
                push
                disable-main-btn
                no-caps
                :label="
                  selectedCategory ? selectedCategory.name : 'Pilih Waktu'
                "
                @click="onMainClick"
              >
                <template v-slot:label>
                  <div
                    class="row items-center no-wrap text-caption"
                    style="color: #888888"
                  ></div>
                </template>

                <q-list class="bg-transparent">
                  <q-item
                    clickable
                    v-close-popup
                    v-for="category in categories"
                    :key="category.name"
                    @click="onItemClick(category)"
                  >
                    <q-item-section class="text-caption" style="color: #888888">
                      <q-item-label>{{ category.name }} </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </q-card>
        </div>
        <div class="q-ma-lg">
          <q-btn
            to="/confirm-package2"
            class="q-pa-sm"
            no-caps
            style="border-radius: 7px; width: 100%; background-color: #5b6062"
          >
            Buat Pesanan
          </q-btn>
        </div>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      counter2: 0,
      harga1: 0,
      harga2: 0,
      onMainClick() {},
      onItemClick(category) {
        this.selectedCategory = category;
      },
      categories: [
        {
          name: "selimut \n 3 Jam",
        },
        {
          name: "selimut  \n 2 hari",
        },
      ],
      selectedCategory: null,
    };
  },

  methods: {
    tambahkg() {
      this.counter += 1;
      this.harga1 += 5000;
    },
    kurangkg() {
      if (this.counter > 0) this.counter -= 1;
      this.harga1 -= 5000;
    },
    tambahkg2() {
      this.counter2++;
      this.harga2 += 15000;
    },
    kurangkg2() {
      if (this.counter2 > 0) this.counter2 -= 1;
      this.harga2 -= 15000;
    },
    hasilakhir() {
      return this.harga1 + this.harga2;
    },
  },
};
</script>

<style></style>
