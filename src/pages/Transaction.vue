<template>
  <q-layout class="mbl" style="background-color: #fafafa">
    <q-page-container>
      <!--Header-->
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
            >
              <q-icon
                name="search"
                @click="searchTransaksi()"
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
        <!-- Skeleton -->
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

        <!-- List Pesanan -->
        <div v-else-if="isLoad == false && orders.data">
          <q-infinite-scroll
            @load="onLoadRef"
            :offset="250"
            :scroll-target="scrollTargetRef"
          >
            <q-list
              ref="scrollTargetRef"
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
                    style="max-width: 20vw; border-radius: 50px; color: #49c26b"
                    class="self-center q-mb-md on-right"
                    size="25px"
                    :value="order.percentage / 100"
                  >
                    <div class="absolute-full flex flex-center">
                      <q-badge
                        style="font-size: 15px"
                        class="bg-transparent"
                        text-color="white "
                        :label="`${order.percentage}%`"
                      />
                    </div>
                  </q-linear-progress>
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

        <!--Empty Order-->
        <div
          v-else
          class="text-center absolute-center"
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
import { ref } from "vue";
import moment from "moment";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["Auth", "Orders"]),
  },

  data() {
    return {
      search: "",
      orders: {},
      orders_temp: {},
      isLoad: false,
      d: null,
    };
  },

  mounted() {
    if (!!this.Orders.data.data) {
      this.orders = this.Orders.data;
    } else {
      this.getOrders();
    }
  },

  methods: {
    moment,
    getOrders() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Orders/getOrdersByShop", this.Auth.auth.shop.id)
          .then((res) => {
            this.orders = res.data;
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
    refresh(done) {
      this.getOrders().then((res) => {
        if (done) done();
      });
    },
    searchTransaksi() {
      this.$store
        .dispatch("Orders/searchOrders", { value: this.search })
        .then((res) => {
          this.orders = res.data;
        });
    },
    onLoadRef(index, done) {
      if (this.orders.next_page_url) {
        this.$store.dispatch("Orders/next").then((res) => {
          this.orders = {
            ...res.data,
            data: [...this.orders.data, ...res.data.data],
          };
          // console.log("ini isi res on load setelah diolah", res.data);
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
