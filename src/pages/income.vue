<template class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
      <q-page style="background-color: #fafafa">
        <div
          style="
            height: 220px;
            background-image: linear-gradient(to top right, #48c6ef, #6f86d6);
          "
        >
          <div class="text-weight-regular text-center q-pt-xl" style="color: white; font-size: 18px">Saldo Masuk Hari ini</div>
          <div class="text-weight-bold text-center" style="color: white; font-size: 38px">Rp.10.000.000</div>
        </div>

        <div
          class="q-pb-lg "
          style="
            border-radius: 30px 30px 0 0;
            background-color: #fafafa;
            margin-top: -30px;
            position: relative;
          "
        >
        <q-tabs
            active-color="white"
            active-bg-color="light-blue-4"
            v-model="tab"
            no-caps
            class="q-px-md text-weight-regular"
            style="color: #756a6a;  font-size: 14px; "
          >
            <q-tab
              name="hari"
              label="Hari ini"
              style="border-radius: 0px 0px 15px 15px"
            />
            <q-tab
              name="minggu"
              label="Minggu ini"
              style="border-radius: 0px 0px 15px 15px"
            />
            <q-tab
              name="bulan"
              label="Bulan ini"
              style="border-radius: 0px 0px 15px 15px"
            />
            <q-tab
              name="custom"
              label=" Custom"
              style="border-radius: 0px 0px 15px 15px"
            />
          </q-tabs>

          <div class="row text-left q-pl-md text-weight-regular" style="font-size: 20px; color: #756A6A">Transaksi</div>
          <!-- List Pesanan -->
        <div v-if="orders.length">
          <q-list
            bordered
            separator
            class="q-mx-md q-my-xs"
            style="background-color: #fff; border-radius: 20px 20px 20px 20px"
          >
            <q-item
              v-for="order in orders"
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
                  <img src="~/assets/avatar-box.png" alt="avatar-box" />
                </q-avatar>
              </q-item-section>

              <q-item-section class="self-center">
                <q-item-label class="text-weight-medium">{{
                  order.customer.name
                }}</q-item-label>
                <q-item-label caption lines="1" class="q-mb-sm">
                  {{
                    moment(order.created_at).format("lll")
                  }}</q-item-label
                >
              </q-item-section>

              <q-item-section class="text-weight-regular" side style="color: #54D240; font-size: 12px">
                +100.000
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        </div>
      </q-page>
</template>

<script>
import { ref } from "vue";
import moment from "moment";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["Auth"]),
  },

  data() {
    return {
      tab: "hari",
      orders: [],
    };
  },

  mounted() {
    this.getOrders();
  },

  methods: {
    moment() {
      return moment();
    },

    getOrders() {
      this.$store
        .dispatch("Orders/getOrdersByShop", this.Auth.auth.shop.id)
        .then((res) => {
          this.orders = res.data;
        });
    },
  },
};
</script>

<style></style>
