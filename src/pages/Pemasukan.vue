<template class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
  <div
    class="q-pb-lg"
    style="
      border-radius: 30px 30px 0 0;
      background-color: #fafafa;
      margin-top: -30px;
      position: relative;
    "
  >
    <q-tabs
      stretch
      id="thing_to_stick"
      indicator-color="transparent"
      active-color="white"
      active-bg-color="light-blue-4"
      v-model="tab"
      no-caps
      class="text-weight-regular"
      style="
        color: #756a6a;
        font-size: 14px;
        border-radius: 10px 10px 0 0;
        background-color: #fafafa;
      "
    >
      <q-tab
        @click="getProfitByDay()"
        name="hari"
        label="Hari ini"
        style="border-radius: 0px 0px 10px 10px"
      />
      <q-tab
        @click="getProfitByWeek()"
        name="minggu"
        label="Minggu ini"
        style="border-radius: 0px 0px 10px 10px"
      />
      <q-tab
        @click="getProfitByMonth()"
        name="bulan"
        label="Bulan ini"
        style="border-radius: 0px 0px 10px 10px"
      />
      <!--<q-tab
          name="custom"
          label=" Custom"
          style="border-radius: 0px 0px 10px 10px"
        />-->
    </q-tabs>


    <!-- List Pesanan -->
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="hari">
        <daily-transaction></daily-transaction>
      </q-tab-panel>
      <q-tab-panel name="minggu">
        <weekly-transaction></weekly-transaction>
      </q-tab-panel>
      <q-tab-panel name="bulan">
        <monthly-transaction></monthly-transaction>
      </q-tab-panel>
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

        <!-- Skeleton -->
        <div v-if="isLoad" class="q-mx-md q-my-xs">
          <q-item
            v-for="n in 9"
            :key="n"
            class="q-my-sm q-mx-md"
            style="
              border-radius: 10px 10px 10px 10px;
              background-color: #fafafa;
            "
          >
            <q-item-section avatar>
              <q-skeleton size="60px" type="QAvatar" />
            </q-item-section>

            <q-item-section class="self-center">
              <q-item-label class="text-weight-medium">
                <q-skeleton type="text" height="20px" />
              </q-item-label>
              <q-item-label>
                <q-skeleton type="text" width="15vw" />
              </q-item-label>
            </q-item-section>

            <q-item-section>
              <q-item-label class="self-center on-right">
                <q-skeleton width="50px" type="text" />
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <!-- <q-list
            v-else-if="isLoad == false && orders"
            bordered
            separator
            class="q-mx-md q-my-xs"
            style="background-color: #fff; border-radius: 20px 20px 20px 20px"
          >
            <q-item
              v-for="order in orders.data"
              :key="order.id"
              class="q-my-sm q-mx-md"
              clickable
              @click="$router.push(`/detail-transaksi/${order.id}`)"
            >
              <q-item-section avatar>
                <q-avatar
                  color="primary"
                  text-color="white"
                  size="60px"
                  style="margin-left: -20px"
                >
                  <q-img
                    src="~/assets/avatar-box.png"
                    alt="avatar-box"
                    no-spinner
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section class="self-center">
                <q-item-label class="text-weight-medium">
                  {{ order.customer.name }}</q-item-label
                >
                <q-item-label caption lines="1" class="q-mb-sm">
                  {{ moment(order.updated_at).format("LL") }}</q-item-label
                >
              </q-item-section>

              <q-item-section
                class="text-weight-regular"
                side
                style="color: #E82222; font-size: 12px"
              >
                -{{ order.total_sum }}
              </q-item-section>
            </q-item>
          </q-list> -->
      </q-tab-panel>
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
