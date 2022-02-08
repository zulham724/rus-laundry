<template class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
  <div 
    style="
      border-radius:  20px 20px 20px 20px;
      margin-top: 0px;
      position: relative;
    "
  >
    <q-tabs
      stretch
      id="thing_to_stick"
      active-color="white"
      active-bg-color="light-blue-4"
      indicator-color="transparent"
      v-model="tab"
      no-caps
      class="text-weight-regular bg-red"
      style="
        color: #756a6a;
        font-size: 14px;
        border-radius: 20px 20px 0px 0px
      "
    >
      <q-tab
        @click="getProfitByDay()"
        name="hari"
        label="Hari ini"
        style="border-radius: 0px 0px 20px 20px"
      />
      <q-tab
        @click="getProfitByWeek()"
        name="minggu"
        label="Minggu ini"
        style="border-radius: 0px 0px 20px 20px"
      />
      <q-tab
        @click="getProfitByMonth()"
        name="bulan"
        label="Bulan ini"
        style="border-radius: 0px 0px 20px 20px"
      />
    </q-tabs>

    <!-- List Pesanan -->
    <q-tab-panels v-model="tab" animated style="border-radius: 20px 20px 20px 20px">
      <q-tab-panel name="hari" >
        <daily-transaction></daily-transaction>
      </q-tab-panel>
      <q-tab-panel name="minggu">
        <weekly-transaction></weekly-transaction>
      </q-tab-panel>
      <q-tab-panel name="bulan">
        <monthly-transaction></monthly-transaction>
      </q-tab-panel>
      <!--
      <q-tab-panel name="custom">
        <div class="row justify-between q-ma-md">
          <div
            class="text-left text-weight-regular self-center"
            style="font-size: 12px; color: #888888"
          >
            Custom Tanggal
          </div>

          <q-btn
            :ripple="true"
            dense
            no-caps
            outline
            class="q-px-sm"
            style="width: 100px"
          >
            <div class="text-left" style="color: #888888">Harian</div>
            <q-space />
            <q-icon name="fas fa-chevron-down" size="15px"></q-icon>

            <q-popup-proxy
              ref="qDateProxy"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="date" range>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-btn>
        </div>
      </q-tab-panel> 
      -->
    </q-tab-panels>
  </div>
</template>

<script>
import { ref } from "vue";
import moment from "moment";
import { mapState } from "vuex";
import Daily from "src/pages/DailyTransaction.vue";
import Monthly from "src/pages/MonthlyTransaction.vue";
import Weekly from "src/pages/WeeklyTransaction.vue";

export default {
  name: "IncomePage",
  computed: {
    ...mapState(["Auth"]),
  },
  components: {
    "daily-transaction": Daily,
    "monthly-transaction": Monthly,
    "weekly-transaction": Weekly,
  },
  data() {
    return {
      date: ref("2022/01/19"),
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
#thing_to_stick {
  position: sticky;
  top: 0px;
  z-index: 999;
}
</style>
