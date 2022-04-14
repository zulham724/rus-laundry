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
              style="width: 20px; height: 20px; "
              :src="
                tab == 'home'
                  ? require('../assets/bdhrmh.svg')
                  : require('../assets/hm3.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">
              Beranda
            </div>
          </q-tab>

          <q-tab name="transaksi" no-caps @click="getOrderPush"
            ><q-img
              no-spinner
              style="width: 20px; height: 20px"
              :src="
                tab == 'transaksi'
                  ? require('../assets/txta.svg')
                  : require('../assets/txt.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">
              Transaksi
            </div>
          </q-tab>

          <q-tab name="pesanan" no-caps @click="$router.push('/make-an-order')"
            ><q-img
              no-spinner
              style="width: 20px; height: 20px"
              :src="
                tab == 'pesanan'
                  ? require('../assets/lsta.svg')
                  : require('../assets/lst.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">
              Buat Pesanan
            </div>
          </q-tab>

          <q-tab name="penghasilan" no-caps @click="$router.push('/income')"
            ><q-img
              no-spinner
              style="width: 20px; height: 20px"
              :src="
                tab == 'penghasilan'
                  ? require('../assets/tga.svg')
                  : require('../assets/tg.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">
              Penghasilan
            </div>
          </q-tab>

          <q-tab name="menu" no-caps @click="$router.push('/menu')"
            ><q-img
              no-spinner
              style="width: 20px; height: 20px"
              :src="
                tab == 'karyawan'
                  ? require('../assets/mnaa.svg')
                  : require('../assets/mn.svg')
              "
              :color="tab == 'karyawan' ? 'green-5' : 'grey-5'"
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
import { mapState } from "vuex";

export default {
  name: "MainLayout",
  data() {
    return {
      tab: this.$route.name,
      include: [
        "HomePage",
        "AddItemPage",
        "IncomePage",
        "TransactionPage",
        "MenuPage",
      ],
    };
  },
  mounted() {},

  computed: {
    ...mapState(["Auth", "Orders"]),
  },

  methods: {
    getOrderPush() {
      // this.$store.commit('Orders/delete_order')
      
      this.$store
        .dispatch("Orders/getOrdersByShop", this.Auth.auth.shop.id)
        .then((res) => {
          this.$store.commit("Orders/set_orders", { data: res.data });
          this.$router.push("/transaction");
        })
        .catch((err) => {
          alert("terjadi kesalahan");
        });
    },
  },
};
</script>
