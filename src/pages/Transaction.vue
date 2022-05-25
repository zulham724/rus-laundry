<template>
  <q-layout class="mbl" style="background-color: #fafafa">
    <q-page-container>
      <!--header-->
      <div class="fixed-top shadow-2 bg-white" style="z-index: 999">
        <q-header class="bg-transparent">
          <div
            class="row full-width q-px-md q-py-sm"
            style="background-image: linear-gradient(to top, #29a2f4, #7f5fed)"
          >
            <div
              class="col-6 text-weight-bold text-left"
              style="color: #f5f5f5; font-size: 20px"
            >
              Transaksi
            </div>
            <div class="col-6 text-right">
              <q-btn ripple="true" flat to="/filter-search">
                <img
                  src="~/assets/filter-transaksi.svg"
                  alt="icon-filter"
                  style="height: 20px"
                />
              </q-btn>
            </div>
          </div>
          <!-- Search -->
          <div class="row full-width q-px-md q-py-sm bg-white">
            <q-input
              class="full-width"
              dense
              type="search"
              rounded
              outlined
              v-model="search"
              label="Cari Pesanan"
              @update:model-value="searchTransaksi()"
            >
              <!--@click="searchTransaksi(search)"-->
              <q-icon
                name="search"
                class="self-center"
                size="30px"
                color="grey"
              />
            </q-input>
          </div>
        </q-header>
      </div>

      <q-page>
        <q-pull-to-refresh @refresh="refresh">
          <!-- skeleton -->
          <div v-if="isLoad == true">
            <q-item
              v-for="n in 19"
              :key="n"
              class="q-my-sm q-mx-md"
              style="
                border-radius: 10px 10px 10px 10px;
                background-color: #fafafa;
              "
            >
              <q-item-section avatar>
                <q-skeleton type="QAvatar" size="60px" />
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
                <q-linear-progress
                  style="max-width: 20vw; border-radius: 50px"
                  class="self-center on-right"
                  size="25px"
                >
                  <q-skeleton type="QChip" />
                </q-linear-progress>
              </q-item-section>
            </q-item>
          </div>

          <!--orders list-->
          <div v-else-if="isLoad == false && ordersState">
            <q-infinite-scroll
              @load="ketikaOnLoad"
              :offset="250"
              :scroll-target="scrollTargetRef"
            >
              <q-list
                ref="scrollTargetRef"
                bordered
                separator
                class="q-mx-md q-my-xs"
                style="
                  background-color: #fff;
                  border-radius: 20px 20px 20px 20px;
                "
              >
                <q-item
                  v-for="order in ordersState.data"
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
                        no-spinner
                        src="~/assets/avatar-box.png"
                        alt="avatar-box"
                      />
                    </q-avatar>
                  </q-item-section>

                  <q-item-section class="self-center">
                    <q-item-label class="text-weight-medium">{{
                      order.customer.name
                    }}</q-item-label>
                    <q-item-label caption>
                      ID pesanan {{ order.id }}
                    </q-item-label>
                    <q-item-label caption lines="1" class="q-mb-sm">
                      {{ moment(order.created_at).format("lll") }}</q-item-label
                    >
                  </q-item-section>

                  <q-item-section>
                    <q-linear-progress
                      stripe
                      style="
                        max-width: 20vw;
                        border-radius: 50px;
                        color: #49c26b;
                      "
                      class="self-center q-mb-md on-right"
                      size="25px"
                      :value="order.percentage / 100"
                    >
                      <div class="absolute-full flex flex-center">
                        <q-badge
                          style="font-size: 15px"
                          class="bg-transparent"
                          text-color="grey-1"
                          :label="`${parseInt(order.percentage).toFixed(2)}%`"
                        />
                      </div>
                    </q-linear-progress>
                    <div
                      class="text-caption text-right"
                      v-if="order.paid_sum < order.total_sum"
                    >
                      Belum Lunas
                    </div>
                    <div class="text-caption text-right" v-else>Lunas</div>
                  </q-item-section>
                </q-item>
              </q-list>
              <template v-slot:loading>
                <div class="row justify-center q-my-md">
                  <q-spinner-dots color="primary" size="40px" />
                </div>
              </template>
            </q-infinite-scroll>
          </div>

          <!--empty order list-->
          <div
            v-else
            class="text-center self-center full-width window-height"
            style="margin-bottom: 100px"
          >
            <q-img
              no-spinner
              style="width: 160px; height: 160px"
              src="~/assets/pesanan-kosong.svg"
            ></q-img>
            <div class="text-center text-subtitle2">Tidak Ada Pesanan</div>
          </div>
        </q-pull-to-refresh>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";

export default {
  name: "TransactionPage",
  keepalive: true,
  computed: {
    ...mapState(["Auth", "Orders"]),
  },

  data() {
    return {
      // variable setted for filtering the order list, and used in the search bar
      search: "",
      // variable setted for store the order data
      orders: {},
      // variable setted for store the order data
      orders_temp: {},
      // variable setted for skeleton animnation function
      isLoad: false,
      // variable setted for store the order data
      ordersState: null,
      // variable setted for store the order data
      ordersState_temp: null,
    };
  },

  mounted() {
    if (!this.Orders.data) {
      this.getOrders();
    } else {
      this.ordersState = this.ordersState_temp = this.Orders.data;
    }
  },

  methods: {
    moment,
    // function for get all the order data in current shop
    getOrders() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Orders/getOrdersByShop", this.Auth.auth.shop.id)
          .then((res) => {
            this.$store.commit("Orders/set_orders", { data: res.data });
            this.ordersState = this.orders_temp = res.data;
            // console.log("data order", res.data);
            resolve(res.data);
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
    // function for pull refresh the list
    refresh(done) {
      this.getOrders().then((res) => {
        if (done) done();
      });
    },
    // function for search the order list
    searchTransaksi() {
      if (this.search.length) {
        this.isLoad = true;
        this.$store
          .dispatch("Orders/searchOrders", { value: this.search })
          .then((res) => {
            this.$store.commit("Orders/set_orders", { data: res.data });
            this.ordersState = this.orders_temp = res.data;
          })
          .finally(() => {
            this.isLoad = false;
          });
      } else {
        this.getOrders();
      }
    },
    // function for the order list pagination
    ketikaOnLoad(index, done) {
      if (this.ordersState.next_page_url) {
        this.$store.dispatch("Orders/next").then((res) => {
          this.ordersState = {
            ...res.data,
            data: [...this.ordersState.data, ...res.data.data],
          };
          console.log("ini isi pagination", res.data);
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
