<template class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
  <q-header class="bg-transparent">
    <q-pull-to-refresh @refresh="refresh">
      <div
        class="text-center"
        style="
          border-radius: 0px 0px 0px 70px;
          background-image: linear-gradient(
            to top left,
            #ffbb98,
            #ffecc1,
            #b4e6ea
          );
        "
      >
        <q-img
          no-spinner
          src="~/assets/header-home.png"
          alt="header-home"
          class="shadow-1"
          style="border-radius: 0px 0px 0px 70px; height: 25vh"
        >
          <!-- information -->
          <q-page class="q-mt-lg absolute q-pl-lg" style="max-width: 40vh">
            <div class="float-left">
              <!-- Avatar Person -->
              <div>
                <q-avatar size="7vh">
                  <img src="~/assets/Avatar.png" alt="avatar-person" />
                </q-avatar>
              </div>
            </div>
            <div class="float-left q-ml-md q-gutter-y-xs">
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
          </q-page>
        </q-img>
      </div>
    </q-pull-to-refresh>
  </q-header>

  <q-page>
    <q-card flat>
      <q-card-actions class="bg-white">
        <!-- Search -->
        <q-input
          dense
          class="q-ml-sm"
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
        <q-space></q-space>
        <q-btn label="test print" @click="print()"></q-btn>
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

    <!-- Skeleton -->
    <div v-if="isLoad">
      <q-item
        v-for="n in 9"
        :key="n"
        class="q-my-sm q-mx-md"
        style="border-radius: 10px 10px 10px 10px; background-color: #fafafa"
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
    <div v-else-if="isLoad == false && orders">
      <q-list
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
            <q-item-label class="text-weight-medium"
              >{{ order.id }} {{ order.customer.name }}</q-item-label
            >
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

    <!-- Scan Barcode -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn class="q-pa-md" fab color="#FAFAFA" elevated>
        <q-img
          src="~/assets/barcode-scan.svg"
          style="width: 30px; height: 30px"
        />
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
  name: "HomePage",
  keepalive: true,
  computed: {
    ...mapState(["Auth"]),
  },
  data() {
    return {
      tab: "home",
      search: "",
      progress: 0.6 * 100 + "%",
      orders: {},
      orders_temp: {},
      isLoad: false,
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    moment() {
      return moment();
    },
    print() {
      if (this.$q.platform.is.android) {
        window.BTPrinter.printText(
          function (data) {
            console.log("Success");
            console.log(data);
          },
          function (err) {
            console.log("Error");
            console.log(err);
          },
          "Firos Bupati sidoarjo"
        );
      } else {
        this.$q.notify("Hanya bisa di android");
      }
    },
    doLogout() {
      this.$store.dispatch("Auth/logout").then((res) => {
        this.$router.push("/login");
      });
    },
    getOrders() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Orders/getOrdersByShop", this.Auth.auth.shop.id)
          .then((res) => {
            this.orders = this.orders_temp = res.data;

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
  },
};
</script>

<style></style>
