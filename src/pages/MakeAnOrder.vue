<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div>
          <q-card>
            <img style="height: 20%" src="~/assets/bg-buat-pesanan.svg" />
          </q-card>
        </div>

        <div
          class="front q-pb-lg"
          style="
            border-radius: 30px 0 0 0;
            background-color: #fafafa;
            margin-top: -75px;
            position: relative;
          "
        >
          <div
            class="text-weight-bold q-px-lg q-pt-lg"
            style="font-size: 26px; color: #888888"
          >
            Buat Pesanan
          </div>
          <q-form class="q-pa-md">
            <q-input
              class="q-pa-xs q-mb-sm"
              outlined
              label="Nama"
              style="color: #bababa; text-weight-regular"
            />
            <q-input
              class="q-pa-xs q-mb-sm"
              outlined
              label="No Telephone"
              style="color: #bababa; text-weight-regular"
            />
            <q-input
              class="q-pa-xs q-mb-sm"
              outlined
              label="Tanggal Laundry"
              style="color: #bababa; text-weight-regular"
            />
            <div class="q-pa-xs q-mb-lg">
              <q-input
                outlined
                type="textarea"
                label="Tambahkan catatan"
                style="color: #bababa; text-weight-regular"
              />
            </div>
          </q-form>
          <div class="text-center">
            <q-btn
              to="/add-clothes"
              no-caps
              class="q-py-sm"
              style="
                background-color: #5b6062;
                color: white;
                width: 90%;
                border-radius: 10px;
              "
              label="Selanjutnya"
            />
          </div>
        </div>

        <q-footer
          class="elevated q-pt-sm"
          style="border-radius: 20px 20px 0px 0px; background-color: white"
        >
          <div class="q-gutter-none" style="max-width: 100%">
            <q-tabs v-model="tab" dense class="text-black">
              <q-tab name="home" no-caps
                ><q-img
                  style="width: 25px; height: 25px"
                  :src="
                    tab == 'home'
                      ? require('../assets/transaksi-color.svg')
                      : require('../assets/icon-transaksi.svg')
                  "
                ></q-img>
                <div class="text-caption" style="font-size: 10px">
                  Transaksi
                </div>
              </q-tab>

              <q-tab name="pesanan" no-caps
                ><q-img
                  style="width: 25px; height: 25px"
                  :src="
                    tab == 'pesanan'
                      ? require('../assets/pesanan-color.svg')
                      : require('../assets/icon-pesanan.svg')
                  "
                ></q-img>
                <div class="text-caption" style="font-size: 10px">Pesanan</div>
              </q-tab>

              <q-tab name="penghasilan" no-caps
                ><q-img
                  style="width: 22px; height: 25px"
                  :src="
                    tab == 'penghasilan'
                      ? require('../assets/penghasilan-color.svg')
                      : require('../assets/icon-penghasilan.svg')
                  "
                ></q-img>
                <div class="text-caption" style="font-size: 10px">
                  Penghasilan
                </div></q-tab
              >

              <q-tab name="karyawan" no-caps
                ><q-img
                  style="width: 22px; height: 25px"
                  :src="
                    tab == 'karyawan'
                      ? require('../assets/karyawan-color.svg')
                      : require('../assets/icon-karyawan.svg')
                  "
                ></q-img>
                <div class="text-caption" style="font-size: 10px">Karyawan</div>
              </q-tab>
            </q-tabs>
          </div>
        </q-footer>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tab: "pesanan",
    };
  },
};
</script>

<style></style>
