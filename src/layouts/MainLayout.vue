<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive :include="include">
          <component :is="Component" />
        </keep-alive>
      </router-view>
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
              style="width: 20px; height: 20px"
              :src="
                tab == 'home'
                  ? require('../assets/beranda_nav.svg')
                  : require('../assets/beranda_nav_false.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">
              Beranda
            </div>
          </q-tab>

          <q-tab name="transaksi" no-caps @click="$router.push('/transaction')"
            ><q-img
              no-spinner
              style="width: 18px; height: 20px"
              :src="
                tab == 'transaksi'
                  ? require('../assets/transaksi-color.svg')
                  : require('../assets/icon-transaksi.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">
              Transaksi
            </div>
          </q-tab>

          <q-tab name="pesanan" no-caps @click="$router.push('/make-an-order')"
            ><q-img
              no-spinner
              style="width: 18px; height: 22px"
              :src="
                tab == 'pesanan'
                  ? require('../assets/pesanan-color.svg')
                  : require('../assets/icon-pesanan.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">
              Buat Pesanan
            </div>
          </q-tab>

          <q-tab name="penghasilan" no-caps @click="$router.push('/income')"
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
            </div>
          </q-tab>

          <q-tab name="menu" no-caps @click="$router.push('/menu')"
            ><q-img
              no-spinner
              style="width: 18px; height: 20px"
              :src="
                tab == 'karyawan'
                  ? require('../assets/menu-color.svg')
                  : require('../assets/icon-menu.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">
              Menu
            </div>
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
      tab: this.$route.name,
      include: ["HomePage", "AddItemPage", "IncomePage", "TransactionPage", "MenuPage"],
    };
  },
  mounted() {},
};
</script>
