<template class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
  <q-page style="background-color: #fafafa">
    <div style="height: 220px">
      <!-- Header image -->
      <q-img
        class="fixed mbl-child"
        style="width: 100%"
        no-spinner
        src="~/assets/uangterbang.svg"
      >
        <!-- Container -->
        <div class="row full-width q-ma-xl bg-transparent">
          <!-- Total saldo -->
          <div
            class="row full-width text-weight-regular q-px-lg"
            style="color: white; font-size: 18px; z-index: 99"
          >
            Total saldo
          </div>
          <div
            class="text-weight-bold text-center q-px-lg"
            style="color: white; font-size: 38px; z-index: 99"
          >
            {{
              new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(total_profit)
            }}
          </div>
        </div>
      </q-img>
    </div>

    <div
      class="q-pb-lg"
      style="
        border-radius: 30px 30px 0 0;
        background-color: #fafafa;
        margin-top: -60px;
        z-index: 999;
      "
    >
      <q-tabs
      dense
        stretch
        active-color="light-blue-4"
        active-bg-color="white"
        v-model="tabParent"
        no-caps
        indicator-color="transparent"
        class="q-mx-xl text-weight-regular bg-light-blue-4 "
        style="
          color: #ffffff;
          font-size: 14px;
          border-radius: 30px 30px 0 0;
          height: 60px;
          position: sticky;
          top: 0px;
          z-index: 999;
        "
      >
        <q-tab
          :ripple="false"
          class="q-mx-md q-my-sm"
          name="pendapatan"
          label="Pendapatan"
          style="border-radius: 20px"
        />
        <q-tab
          :ripple="false"
          class="q-mx-md q-my-sm"
          name="pengeluaran"
          label="Pengeluaran"
          style="border-radius: 20px"
        />
      </q-tabs>

      <!-- List Pesanan -->
      <q-tab-panels v-model="tabParent" animated >
        <q-tab-panel name="pendapatan" class="q-pa-none q-ma-none">
          <pendapatan-transaction class="full-width" stretch></pendapatan-transaction>
        </q-tab-panel>
        <q-tab-panel name="pengeluaran" class="q-pa-none q-ma-none">
          <pengeluaran-transaction class="full-width"></pengeluaran-transaction>
        </q-tab-panel>   
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import moment from "moment";
import { mapState } from "vuex";
import Pengeluaran from "src/pages/Pengeluaran.vue";
import Pendapatan from "src/pages/Pemasukan.vue";

export default {
  name: "IncomePage",
  computed: {
    ...mapState(["Auth"]),
  },
  components: {
    "pengeluaran-transaction": Pengeluaran,
    "pendapatan-transaction": Pendapatan,
  },
  data() {
    return {
      date: ref("2022/01/19"),
      tabParent: "pendapatan",
      tab: "hari",
      orders: [],
      isLoad: false,
      total_profit: 0,
    };
  },
  mounted() {
    this.getOrders();
    this.getProfitByDay();
  },
  methods: {
    moment() {
      return moment();
    },
    getOrders() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Orders/getOrdersByShop", this.Auth.auth.shop.id)
          .then((res) => {
            this.orders = res.data;
            resolve(res.data);
            // console.log("Data keseluruhan", res.data);
          })
          .catch((err) => {
            reject(err);
            // console.log(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    getProfitByDay() {
      this.$store
        .dispatch("Orders/countProfitOrdersByDay", this.Auth.auth.shop.id)
        .then((res) => {
          this.total_profit = res.data;
        });
    },
    getProfitByWeek() {
      this.$store
        .dispatch("Orders/countProfitOrdersByWeek", this.Auth.auth.shop.id)
        .then((res) => {
          this.total_profit = res.data;
        });
    },
    getProfitByMonth() {
      this.$store
        .dispatch("Orders/countProfitOrdersByMonth", this.Auth.auth.shop.id)
        .then((res) => {
          this.total_profit = res.data;
        });
    },
    refresh(done) {
      this.getOrders().then((res) => {
        if (done) done();
      });
    },
  },
};
</script>

<style>

</style>
