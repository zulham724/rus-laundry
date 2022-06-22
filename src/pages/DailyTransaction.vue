<template>
  <div>
    <q-pull-to-refresh @refresh="refresh">
      <!-- Skeleton -->
      <div v-if="isLoad" class="q-py-md">
        <q-item
          v-for="n in 9"
          :key="n"
          class="q-my-sm q-mx-sm"
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
      <div class="full-height" v-else-if="!isLoad && orders.data">
        <div v-if="!orders.data.length" class="q-pt-lg">
          <div class="text-subtitle1 text-center q-py-xs">
            <q-img no-spinner src="~/assets/nullicsp.gif" :ratio="1" />
            Belum ada transaksi hari ini
          </div>
        </div>
        <div v-else-if="orders.data.length">
          <q-infinite-scroll
            @load="ketikaOnLoad"
            :offset="250"
            :scroll-target="scrollTargetRef"
          >
            <q-list
              ref="scrollTargetRef"
              bordered
              separator
              class="q-my-lg q-mx-sm"
              style="background-color: #fff; border-radius: 20px 20px 20px 20px"
            >
              <q-item
                v-for="order in orders.data"
                :key="order.id"
                class="q-my-sm"
                clickable
                @click="$router.push(`/detail-transaksi/${order.payment_id}`)"
              >
                <q-item-section avatar>
                  <q-avatar
                    icon="fas fa-box-open"
                    color="primary"
                    text-color="white"
                  />
                </q-item-section>

                <q-item-section class="self-center">
                  <q-item-label class="text-weight-medium">
                    {{ order.id }} {{ order.customer }}</q-item-label
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
                    }).format(order.value)
                  }}
                </q-item-section>
              </q-item>
            </q-list>
          </q-infinite-scroll>
        </div>
      </div>
    </q-pull-to-refresh>
  </div>
</template>

<script>
import { ref } from "vue";
import moment from "moment";
import { mapState } from "vuex";

export default {
  setup() {
    const items = ref([{}, {}, {}, {}, {}]);
  },

  computed: {
    ...mapState(["Auth"]),
  },

  data() {
    return {
      date: ref("2022/01/19"),
      tab: "hari",
      orders: {},
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
          .dispatch(
            "DailyTransaction/getOrdersShopByDay",
            this.Auth.auth.shop.id
          )
          .then((res) => {
            this.orders = res.data;
            console.log("this.orders", this.orders);
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
    refresh(done) {
      this.getOrdersShopByDay().then((res) => {
        if (done) done();
      });
    },
    ketikaOnLoad(index, done) {
      if (this.orders.next_page_url) {
        this.$store.dispatch("DailyTransaction/next").then((res) => {
          this.orders = {
            ...res.data,
            data: [...this.orders.data, ...res.data.data],
          };
          done();
        });
      } else {
        done();
      }
    },
  },
};
</script>

<style></style>
