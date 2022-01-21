<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page>
      <q-card class="q-ma-md">
        <div class="row q-py-md">
          <div
            class="col-6 text-left q-pl-md text-weight-bolder"
            style="font-size: 16px; color: #106571"
          >
            ArdaLaundry
          </div>
          <div
            class="col-6 text-right q-pr-md text-weight-medium"
            style="font-size: 16px"
          >
            #INV0408123
          </div>
        </div>
        <q-separator class="q-mx-sm"></q-separator>
        <div class="row q-pt-md">
          <div class="col-8 text-weight-medium q-pl-md" style="font-size: 15px">
            Detail Pemesan
          </div>
          <div class="col-4" style="font-size: 13px">Kasir</div>
        </div>
        <div class="row q-pt-xs">
          <div
            class="col-8 text-weight-regular q-pl-md"
            style="font-size: 12px; color: #c9c9c9"
          >
            Suparjo
          </div>
          <div
            class="col-4 text-weight-regular"
            style="font-size: 12px; color: #c9c9c9"
          >
            Indri Lestary
          </div>
        </div>
        <div class="row">
          <div
            class="col-8 text-weight-regular q-pl-md"
            style="font-size: 12px; color: #c9c9c9"
          >
            1 Januari 2022
          </div>
          <div
            class="col-4 text-weight-regular"
            style="font-size: 10px; color: #c9c9c9"
          >
            ID : 3149319434
          </div>
        </div>
        <div class="row">
          <div
            class="col-8 text-weight-regular q-pl-md"
            style="font-size: 12px; color: #c9c9c9"
          >
            0857831409898
          </div>
        </div>

        <div class="row q-mx-md q-mt-xl">
          <div
            class="col-4 text-weight-regular"
            style="font-size: 12px; color: #c9c9c9"
          >
            Jenis Pesanan
          </div>
          <div
            class="col-3 text-weight-regular text-center"
            style="font-size: 12px; color: #c9c9c9"
          >
            Harga
          </div>
          <div
            class="col-2 text-weight-regular text-center"
            style="font-size: 12px; color: #c9c9c9"
          >
            Jumlah
          </div>
          <div
            class="col-3 text-weight-regular text-center"
            style="font-size: 12px; color: #c9c9c9"
          >
            Subtotal
          </div>
        </div>
        <q-separator class="q-mx-sm"></q-separator>
        <div class="row q-mx-md q-pt-md">
          <div
            class="col-4 text-weight-regular"
            style="font-size: 10px; color: #313131"
          >
            Reguler kering + setrika
          </div>
          <div
            class="col-3 text-weight-regular text-center"
            style="font-size: 10px; color: #313131"
          >
            Rp. 5000 /Kg
          </div>
          <div
            class="col-2 text-weight-regular text-center"
            style="font-size: 10px; color: #313131"
          >
            5
          </div>
          <div
            class="col-3 text-weight-regular text-center"
            style="font-size: 10px; color: #313131"
          >
            Rp. 25000
          </div>
        </div>

        <div class="row q-mx-md">
          <div
            class="col-4 text-weight-regular"
            style="font-size: 10px; color: #313131"
          >
            Super Kilat kering
          </div>
          <div
            class="col-3 text-weight-regular text-center"
            style="font-size: 10px; color: #313131"
          >
            Rp. 15000 /pcs
          </div>
          <div
            class="col-2 text-weight-regular text-center"
            style="font-size: 10px; color: #313131"
          >
            5
          </div>
          <div
            class="col-3 text-weight-regular text-center"
            style="font-size: 10px; color: #313131"
          >
            Rp. 75000
          </div>
        </div>

        <div class="row q-pt-xl q-mx-lg">
          <div class="col-6">
            q-im
          </div>
          <div
            class="col-6 text-right text-weight-medium"
            style="font-size: 14px; color: #313131"
          >
            Total Harga
          </div>
        </div>
        <q-separator class="q-mx-sm"></q-separator>
        <div class="row q-pb-md">
          <div class="col-6">
            <div
              class="col-6 q-mx-md q-mt-sm"
              style="color: #c9c9c9; font-size: 12px"
            >
              Tanggal Pembayaran
            </div>
            <div class="col-4 q-mx-md" style="color: #31313; font-size: 10px">
              {{ moment().format("DD MMMM YYYY") }}
            </div>

            <div
              class="col-6 q-mx-md q-mt-xs"
              style="color: #c9c9c9; font-size: 12px"
            >
              Metode Pembayaran
            </div>
            <div class="col-4 q-mx-md" style="color: #31313; font-size: 10px">
              Uang Tunai
            </div>
          </div>
          <div
            class="col-6 text-right q-pr-lg q-pt-sm text-weight-medium"
            style="color: #313131"
          >
            Rp. 100.000
          </div>
        </div>
      </q-card>
    </q-page>
  </q-layout>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {};
  },

  methods: {
    moment() {
      return moment();
    },
  },
};
</script>

<style></style>