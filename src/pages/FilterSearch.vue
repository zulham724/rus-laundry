<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container style="background-color: #fafafa">
      <q-header>
        <q-toolbar class="bg-white q-py-md">
          <q-btn flat round size="10px" @click="$router.push('/transaction')">
            <q-avatar
              size="20px"
              icon="fas fa-arrow-left"
              style="color: #888888"
            >
            </q-avatar>
          </q-btn>
          <q-toolbar-title
            class="text-left text-weight-medium"
            style="color: #888888; font-size: 16px"
            >Filter Pencarian</q-toolbar-title
          >
        </q-toolbar>
      </q-header>
      <q-page class="q-mt-md" style="background-color: #fafafa">
        <!-- <q-list
          separator
          dense
          class="q-mx-xs q-mt-md shadow-1"
          style="background-color: #ffffff"
        >
          <q-item-label
            class="q-pl-md q-py-md text-weight-bold"
            style="color: #888888"
            >Berdasarkan Tanggal Masuk
          </q-item-label>
          <q-separator size="5px"></q-separator>
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #828282"
          >
            <q-expansion-item
              class="full-width"
              expand-separator
              label="Hari ini"
            >
              <q-card>
                <q-card-section>
                  <q-list>
                    <q-item
                      clickable
                      @click="
                        filterOrdersIn(
                          moment().format('DD-MM-yyyy'),
                          moment().format('DD-MM-yyyy')
                        )
                      "
                    >
                      <q-item-section> Hari ini </q-item-section>
                    </q-item>
                    <q-item
                      clickable
                      @click="
                        filterOrdersIn(
                          moment().subtract(1, 'days').format('DD-MM-yyyy'),
                          moment().format('DD-MM-yyyy')
                        )
                      "
                    >
                      <q-item-section> Kemarin </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-item>
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #828282"
          >
            <q-expansion-item
              class="full-width"
              expand-separator
              label="Minggu"
            >
              <q-card>
                <q-card-section>
                  <q-list>
                    <q-item
                      clickable
                      @click="
                        filterOrdersIn(
                          moment().startOf('week').format('DD-MM-yyyy'),
                          moment().endOf('week').format('DD-MM-yyyy')
                        )
                      "
                    >
                      <q-item-section> Minggu ini </q-item-section>
                    </q-item>
                    <q-item
                      clickable
                      @click="
                        filterOrdersIn(
                          moment()
                            .subtract(7, 'days')
                            .startOf('week')
                            .format('DD-MM-yyyy'),
                          moment()
                            .subtract(7, 'days')
                            .endOf('week')
                            .format('DD-MM-yyyy')
                        )
                      "
                    >
                      <q-item-section> Minggu Kemarin </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-item>
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #828282"
          >
            <q-expansion-item class="full-width" expand-separator label="Bulan">
              <q-card>
                <q-card-section>
                  <q-list>
                    <q-item
                      clickable
                      @click="
                        filterOrdersIn(
                          moment().startOf('month').format('DD-MM-yyyy'),
                          moment().endOf('month').format('DD-MM-yyyy')
                        )
                      "
                    >
                      <q-item-section> Bulan ini </q-item-section>
                    </q-item>
                    <q-item
                      clickable
                      @click="
                        filterOrdersIn(
                          moment()
                            .subtract(1, 'month')
                            .startOf('month')
                            .format('DD-MM-yyyy'),
                          moment()
                            .subtract(1, 'month')
                            .endOf('month')
                            .format('DD-MM-yyyy')
                        )
                      "
                    >
                      <q-item-section> Bulan Kemarin </q-item-section>
                    </q-item>
                    
                  </q-list>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-item>
        </q-list> -->

        <!-- <q-list
          separator
          dense
          class="q-mx-xs q-mt-md shadow-1"
          style="background-color: #ffffff"
        >
          <q-item-label
            class="q-pl-md q-py-md text-weight-bold"
            style="color: #888888"
            >Berdasarkan Tanggal Keluar</q-item-label
          >
          <q-separator size="5px"></q-separator>

          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #828282"
          >
            <q-expansion-item
              class="full-width"
              expand-separator
              label="Hari ini"
            >
              <q-card>
                <q-card-section>
                  <q-list>
                    <q-item
                      clickable
                      @click="
                        filterOrdersOut(
                          moment().format('DD-MM-yyyy'),
                          moment().format('DD-MM-yyyy')
                        )
                      "
                    >
                      <q-item-section> Hari ini </q-item-section>
                    </q-item>
                    <q-item
                      clickable
                      @click="
                        filterOrdersOut(
                          moment().subtract(1, 'days').format('DD-MM-yyyy'),
                          moment().format('DD-MM-yyyy')
                        )
                      "
                    >
                      <q-item-section> Kemarin </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-item>
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #828282"
          >
            <q-expansion-item
              class="full-width"
              expand-separator
              label="Minggu"
            >
              <q-card>
                <q-card-section>
                  <q-list>
                    <q-item
                      clickable
                      @click="
                        filterOrdersOut(
                          moment().startOf('week').format('DD-MM-yyyy'),
                          moment().endOf('week').format('DD-MM-yyyy')
                        )
                      "
                    >
                      <q-item-section> Minggu ini </q-item-section>
                    </q-item>
                    <q-item
                      clickable
                      @click="
                        filterOrdersOut(
                          moment()
                            .subtract(7, 'days')
                            .startOf('week')
                            .format('DD-MM-yyyy'),
                          moment()
                            .subtract(7, 'days')
                            .endOf('week')
                            .format('DD-MM-yyyy')
                        )
                      "
                    >
                      <q-item-section> Minggu Kemarin </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-item>
          <q-item
            v-ripple
            clickable
            class="text-weight-medium"
            style="color: #828282"
          >
            <q-expansion-item class="full-width" expand-separator label="Bulan">
              <q-card>
                <q-card-section>
                  <q-list>
                    <q-item
                      clickable
                      @click="
                        filterOrdersOut(
                          moment().startOf('month').format('DD-MM-yyyy'),
                          moment().endOf('month').format('DD-MM-yyyy')
                        )
                      "
                    >
                      <q-item-section> Bulan ini </q-item-section>
                    </q-item>
                    <q-item
                      clickable
                      @click="
                        filterOrdersOut(
                          moment()
                            .subtract(1, 'month')
                            .startOf('month')
                            .format('DD-MM-yyyy'),
                          moment()
                            .subtract(1, 'month')
                            .endOf('month')
                            .format('DD-MM-yyyy')
                        )
                      "
                    >
                      <q-item-section> Bulan Kemarin </q-item-section>
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-item>
        </q-list> -->

        <q-list
          separator
          dense
          class="q-mx-xs q-mt-md shadow-1"
          style="background-color: #ffffff"
        >
          <q-item-label
            class="q-pl-md q-py-md text-weight-bold"
            style="color: #888888"
            >Berdasarkan Status Pesanan</q-item-label
          >
          <q-separator size="5px"></q-separator>

          <q-item
            clickable
            @click="getOrderByStatus(order_status.id)"
            v-for="order_status in order_statuses"
            :key="order_status.id"
          >
            <q-item-section class="q-my-md">
              {{ order_status.name }}
            </q-item-section>
          </q-item>
        </q-list>

        <q-list
          separator
          dense
          class="q-mx-xs q-mt-md shadow-1"
          style="background-color: #ffffff"
        >
          <q-item-label
            class="q-pl-md q-py-md text-weight-bold"
            style="color: #888888"
            >Berdasarkan Status Pembayaran</q-item-label
          >
          <q-separator size="5px"></q-separator>

          <q-item clickable @click="getOrderByPaymentStatus(1)">
            <q-item-section class="q-my-md"> Lunas </q-item-section>
          </q-item>
          <q-item clickable @click="getOrderByPaymentStatus(0)">
            <q-item-section class="q-my-md"> Belum Lunas </q-item-section>
          </q-item>
        </q-list>

        <q-inner-loading
          :showing="loading"
          label="Please wait..."
          label-class="text-teal"
          label-style="font-size: 1.1em"
        />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      loading: false,
      order_statuses: [],
    };
  },
  mounted() {
    this.getOrderStatus();
  },
  methods: {
    moment,
    filterOrdersIn(from, to) {
      const payload = {
        from: from,
        to: to,
      };
      this.loading = true;
      this.$store.dispatch("Orders/filterOrdersIn", payload).then((res) => {
        this.$store.commit("Orders/set_orders", { data: res.data });
        this.$router.push("/transaction");
      });
    },
    filterOrdersOut(from, to) {
      const payload = {
        from: from,
        to: to,
      };
      this.loading = true;
      this.$store.dispatch("Orders/filterOrdersOut", payload).then((res) => {
        this.$store.commit("Orders/set_orders", { data: res.data });
        console.log("data sebelum dikirm", res.data);
        this.$router.push("/transaction");
      });
    },
    getOrderStatus() {
      this.$store
        .dispatch("Orders/getOrderStatus")
        .then((res) => {
          this.order_statuses = res.data;
        })
        .catch((err) => {
          alert("terjadi kesalahan");
        });
    },
    getOrderByStatus(id) {
      this.$store
        .dispatch("Orders/getOrderByStatus", id)
        .then((res) => {
          this.$store.commit("Orders/set_orders", { data: res.data });
          this.$router.push("/transaction");
        })
        .catch((err) => {
          alert("terjadi kesalahan");
        });
    },
    getOrderByPaymentStatus(id) {
      this.$store
        .dispatch("Orders/getOrderPaymentStatus", id)
        .then((res) => {
          this.$store.commit("Orders/set_orders", { data: res.data });
          this.$router.push("/transaction");
        })
        .catch((err) => {
          alert("terjadi kesalahan");
        });
    },
  },
};
</script>

<style></style>
