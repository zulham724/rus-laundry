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

      <div v-else-if="!isLoad && orders.data">
        <div v-if="!orders.data.length" class="q-pt-lg">
          <div class="text-subtitle1 text-center q-py-xs">
            <q-img no-spinner src="~/assets/nullicsp.gif" :ratio="1" />
            Belum ada transaksi bulan ini
          </div>
        </div>
        <div v-else-if="orders.data.length">
          <q-list
            ref="scrollTargetRef"
            bordered
            separator
            class="q-my-lg q-mx-sm"
            style="background-color: #fff; border-radius: 20px 20px 20px 20px"
          >
            <q-infinite-scroll
              @load="ketikaOnLoad"
              :offset="250"
              :scroll-target="scrollTargetRef"
            >
              <q-item
                v-for="order in orders.data"
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
                    {{ order.id }} {{ order.customer.name }}</q-item-label
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
            </q-infinite-scroll>
          </q-list>
        </div>
      </div>
    </q-pull-to-refresh>
  </div>
</template>
halaman endi sing ngekek i icon iku mau? iki
<script>
import { ref } from "vue";
import moment from "moment";
import { mapState } from "vuex";

export default {
  //q-infinite-scroll
  setup() {
    const items = ref([{}, {}, {}, {}, {}]);

    return {
      items,
      onLoad(index, done) {
        setTimeout(() => {
          items.value.push({}, {}, {}, {}, {});
          done();
        }, 2000);
      },
    };
  },

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
    this.getOrdersShopByMonth();
  },
  methods: {
    moment,
    getOrdersShopByMonth() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch(
            "MonthlyTransaction/getOrdersShopByMonth",
            this.Auth.auth.shop.id
          )
          .then((res) => {
            this.orders = res.data;
            resolve(res.data);
            console.log("ini data bulanan", res.data);
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
    refresh(done) {
      this.getOrdersShopByMonth().then((res) => {
        if (done) done();
      });
    },
    ketikaOnLoad(index, done) {
      if (this.orders.next_page_url) {
        this.$store.dispatch("MonthlyTransaction/next").then((res) => {
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

<style>
</style>
