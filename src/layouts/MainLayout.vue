<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- Bottom Navigation -->
    <q-footer
      class="elevated q-pt-sm"
      style="border-radius: 20px 20px 0px 0px; background-color: white"
    >
      <div class="q-gutter-none" style="max-width: 100%">
        <q-tabs v-model="tab" dense class="text-black" indicator-color="teal-6">
          <q-tab name="home" no-caps @click="$router.push('/')"
            ><q-img
              no-spinner
              style="width: 18px; height: 20px"
              :src="
                tab == 'home'
                  ? require('../assets/transaksi-color.svg')
                  : require('../assets/icon-transaksi.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">Transaksi</div>
          </q-tab>

          <q-tab name="pesanan" no-caps @click="$router.push('/make-an-order')"
            ><q-img
              no-spinner
              style="width: 18px; height: 20px"
              :src="
                tab == 'pesanan'
                  ? require('../assets/pesanan-color.svg')
                  : require('../assets/icon-pesanan.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">Pesanan</div>
          </q-tab>

          <q-tab name="kategori" no-caps @click="$router.push('/add-item')"
              ><q-img
              no-spinner
                style="width: 20px; height: 20px"
                :src="
                  tab == 'kategori'
                    ? require('../assets/tambah-color.svg')
                    : require('../assets/icon-tambah.svg')
                "
              ></q-img>
              <div class="text-weight-light q-mt-xs" style="font-size: 8px">
                Kategori
              </div>
            </q-tab>

          <q-tab name="penghasilan" no-caps
            ><q-img
              no-spinner
              style="width: 18px; height: 20px"
              :src="
                tab == 'penghasilan'
                  ? require('../assets/penghasilan-color.svg')
                  : require('../assets/icon-penghasilan.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">
              Penghasilan
            </div></q-tab
          >

          <q-tab name="karyawan" no-caps
            ><q-img
              no-spinner
              style="width: 18px; height: 20px"
              :src="
                tab == 'karyawan'
                  ? require('../assets/karyawan-color.svg')
                  : require('../assets/icon-karyawan.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">Karyawan</div>
          </q-tab>
        </q-tabs>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      tab: "home",
    };
  },
};
</script>
