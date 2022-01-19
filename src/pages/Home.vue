<template class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header class="bg-transparent">
      <div class="text-center">
        <q-img
          src="~/assets/header-home.png"
          alt="header-home"
          class="shadow-1"
          style="border-radius: 0px 0px 0px 70px; height: 25vh"
        >
          <!-- Animation of Bird -->
          <!-- <img
              src="~/assets/header-bird.gif"
              alt="header-bird"
              class="absolute-left"
              style="height: 15vh"
            /> -->

          <!-- information -->
          <q-page class="q-mt-lg absolute q-pl-lg" style="max-width: 40vh">
            <div>
              <div>
                <div class="float-left">
                  <!-- Avatar Person -->
                  <div>
                    <q-avatar size="7vh">
                      <img src="~/assets/Avatar.png" alt="avatar-person" />
                    </q-avatar>
                  </div>
                </div>
                <div class="float-left q-ml-md q-gutter-y-sm">
                  <div
                    style="font-size: 20px; color: #313131; margin-bottom: -1vh"
                    class="text-subtitle text-bold float-left"
                  >
                    Selamat Pagi
                  </div>
                  <br />
                  <!-- Nama User -->
                  <div class="text-subtitle1 float-left" style="color: #313131">
                    IndonesiaLaundry
                  </div>
                  <br />
                  <!-- Date -->
                  <div
                    class="text-caption float-left q-px-xs"
                    style="
                      font-size: 11px;
                      min-width: 10vw;
                      background-color: #ffffff;
                      color: #888888;
                      border-radius: 10px;
                    "
                  >
                    {{ moment().format("DD MMMM YYYY") }}
                  </div>
                </div>
              </div>
            </div>
          </q-page>
        </q-img>
      </div>
    </q-header>

      <q-page>
        <q-card flat >
          <q-card-actions class="bg-white">
            <!-- Search -->
            <q-input
              dense
              class="q-ml-sm"
              type="search"
              style="width: 200px; color: black; font-size: 15px"
              rounded
              outlined
              v-model="search"
              placeholder="Cari Pesanan"
            >
              <q-icon
                name="search"
                class="self-center"
                size="30px"
                color="grey"
              />
            </q-input>
            <q-space></q-space>
            <!-- Icon Filter -->
            <q-btn ripple="true" flat class="q-mr-sm" to="/filter-search">
              <img
                src="~/assets/icon-filter.svg"
                alt="icon-filter"
                style="size: 30vh"
              />
            </q-btn>
          </q-card-actions>
        </q-card>
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

              <q-item-section>
                <q-linear-progress
                  stripe
                  style="max-width: 20vw; border-radius: 50px; color: #49c26b"
                  class="self-center q-mb-md on-right"
                  size="25px"
                  :value="progress"
                >
                  <div class="absolute-full flex flex-center">
                    <q-badge
                      style="font-size: 15px"
                      class="bg-transparent"
                      text-color="white "
                      :label="progress"
                    />
                  </div>
                </q-linear-progress>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <!--Empty Order-->
        <div
          v-if="!orders.length"
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
        <!-- Scan Barcode -->

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
      @click="doLogout()"
        class="q-pa-md"
        fab
        color="#FAFAFA"
        elevated
      >
        <q-img src="~/assets/barcode-scan.svg" style="width: 30px; height: 30px"/>
      </q-btn>
    </q-page-sticky>

        <!-- <q-btn
          @click="doLogout()"
          class="elevated fixed-bottom-right"
          rounded
          color="#FAFAFA"
          style="
            width: 60px;
            height: 60px;
            margin-bottom: 80px;
            margin-right: 20px;
          "
          ><q-img
            style="width: 30px; height: 30px"
            src="~/assets/barcode-scan.svg"
        /></q-btn> -->

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
      tab: "home",
      search: ref(""),
      progress: 0.6 * 100 + '%',
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
    doLogout() {
      this.$store.dispatch("Auth/logout").then((res) => {
        this.$router.push("/login");
      });
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
