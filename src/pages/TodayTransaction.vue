<template>
  <div>
    <q-pull-to-refresh @refresh="refresh">
      <!-- Skeleton -->
      <div v-if="isLoad">
        <q-item
          v-for="n in 9"
          :key="n"
          class="q-my-sm"
          style="border-radius: 10px 10px 10px 10px; background-color: #fafafa"
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

      <div v-else-if="!isLoad && orders.data" class="bg-red">
        <div v-if="!orders.data.length" >
          <div class="text-subtitle1 text-center">
            Belum ada transaksi hari ini
          </div>
        </div>

        <q-list
          v-else-if="orders.data.length"
          bordered
          separator
          class="q-my-xs"
          style="background-color: #fff; border-radius: 20px 20px 20px 20px"
        >
          <q-item
            v-for="order in orders"
            :key="order.id"
            class="q-my-sm"
            clickable
            @click="$router.push(`/detail-transaksi/${order.id}`)"
          >
            <q-item-section avatar>
              <q-avatar> </q-avatar>
            </q-item-section>

            <q-item-section class="self-center">
              <q-item-label class="text-weight-medium">
                {{ order.id }} {{ order.customer.name }} }}</q-item-label
              >
              <q-item-label caption lines="1" class="q-mb-sm">
                {{ moment(order.updated_at).format("LL") }}</q-item-label
              >
            </q-item-section>

            <q-item-section
              class="text-weight-regular"
              side
              style="color: #54d240; font-size: 12px"
            >
              +{{
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(order.total_sum)
              }}
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-pull-to-refresh>
  </div>
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
      date: ref("2022/01/19"),
      tab: "hari",
      orders: [],
      orders_temp: [],
      isLoad: false,
      items: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
    };
  },
  mounted() {
    this.getOrdersShopByDay();
  },
  methods: {
    moment,
    getOrdersShopByDay() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Orders/getOrdersShopByDay", this.Auth.auth.shop.id)
          .then((res) => {
            this.orders = res.data;
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
  },
};
</script>

<style></style>
