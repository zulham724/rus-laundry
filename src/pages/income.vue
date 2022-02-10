<template class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
  <q-page style="background-color: #fafafa">
    <div style="height: 230px">
      <q-img
        class="fixed mbl-child"
        style="width: 100%; height: 230px"
        no-spinner
        src="~/assets/uangterbang.svg"
      >
        <!-- Container -->
        <div
          class="column full-width bg-transparent q-px-xl"
          style="height: 100%"
        >
          <div class="row full-width">
            <div
              class="col-6 text-weight-regular text-left q-pt-lg"
              style="color: white; font-size: 18px"
            >
              Total Saldo
            </div>
            <div class="col-6 text-right self-end">
              <q-btn
                v-if="tabParent == 'pengeluaran'"
                @click="$router.push('/addspend')"
                class="bg-white"
                no-caps
                style="border-radius: 20px"
                dense
              >
                <div
                  class="text-weight-medium q-px-xs"
                  style="color: #766c6c; font-size: 13px"
                >
                  Tambah
                </div>
              </q-btn>
            </div>
          </div>

          <div
            class="text-weight-bold text-left"
            style="color: white; font-size: 36px"
          >
            {{
              new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(total_profit)
            }}
          </div>

          <div class="q-px-xl absolute-bottom q-mb-sm">
            <q-tabs
              stretch
              active-color="white"
              v-model="tabParent"
              no-caps
              inline-label
              switch-indicator
              indicator-color="white"
              class="text-weight-regular bg-light-blue-4"
              style="
                color: #756a6a;
                font-size: 8px;
                border-radius: 10px 10px 0 0;
                margin-top: 0px;
              "
            >
              <q-tab :ripple="false" name="pendapatan" label="Pendapatan" />
              <q-tab :ripple="false" name="pengeluaran" label="Pengeluaran" />
            </q-tabs>
          </div>
        </div>
      </q-img>
    </div>

    <!-- List Pesanan -->
    <q-tab-panels
      class="full-width"
      v-model="tabParent"
      animated
      style="margin-top: -9.5px; border-radius: 10px 10px 0px 0px"
    >
      <q-tab-panel name="pendapatan" class="q-pa-none q-ma-none">
        <pendapatan-transaction
          v-on:save-callback="getTotalProfit"
          class="full-width"
          stretch
        ></pendapatan-transaction>
      </q-tab-panel>
      <q-tab-panel name="pengeluaran" class="q-pa-none q-ma-none">
        <pengeluaran-transaction class="full-width"></pengeluaran-transaction>
      </q-tab-panel>
    </q-tab-panels>
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
      orders: [],
      isLoad: false,
      total_profit: 0,
      buttonAddSpend: false,
    };
  },
  mounted() {
    this.getOrders();
    this.getProfitByDay();
    // this.getProfitByMonth();
  },
  methods: {
    moment() {
      return moment();
    },
    getTotalProfit(value) {
      this.total_profit = value;
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
          console.log(res.data);
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
#thing_to_stick {
  position: sticky;
  top: 0px;
  z-index: 999;
}
</style>
