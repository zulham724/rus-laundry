<template>
  <q-layout class="mbl">
    <q-drawer
      v-model="drawerLeft"
      show-if-above
      elevated
      :no-swipe-close="false"
      :no-swipe-open="false"
      class="bg-white text-black"
    >
      <!-- TAB PROFILE -->
      <div>
        <q-card
          class="grad text-center"
          style="border-radius: 0px 0px 50px 50px"
        >
          <div class="q-py-sm text-right q-px-sm">
            <q-btn
              round
              dense
              flat
              class="shadow-1"
              @click="$router.push('/profile-owner')"
            >
              <q-icon
                name="fas fa-user"
                style="color: white"
                size="medium"
              ></q-icon>
            </q-btn>
          </div>

          <div>
            <q-item>
              <q-item-section top avatar>
                <q-avatar size="50px" class="shadow-2">
                  <q-img
                    no-spinner
                    :src="`${STORAGE_URL}/${this.Auth.auth.avatar}`"
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section class="text-white text-left">
                <q-item-label>{{ this.Auth.auth.name }}</q-item-label>
                <q-item-label class="text-white" caption
                  >{{ this.Auth.auth.email }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <q-img
            class="q-mt-sm"
            src="~/assets/tkkn.png"
            width="40%"
            style="border-radius: 0px"
          />
        </q-card>
      </div>
      <!-- TAB KODE AFFILIATE -->
      <div class="q-pb-md q-px-xs text-center justify-center column">
        <div class="text-center justify-center">
          <q-img src="~/assets/sgtg.png" style="width: 30%; height: 70px" />
        </div>
        <div class="text-center justify-center">
          <q-btn
            v-if="this.Auth.auth.affiliate_code != null"
            flat
            no-caps
            text-color="black"
            style="
              background-color: #f1f1f1;
              margin-top: -10px;
              border-radius: 5px;
            "
          >
            <div class="q-px-md">{{ this.Auth.auth.affiliate_code }}</div>
          </q-btn>
          <q-btn
            v-if="this.Auth.auth.affiliate_code == null"
            disable
            flat
            no-caps
            text-color="black"
            style="
              background-color: #f1f1f1;
              margin-top: -10px;
              border-radius: 5px;
            "
          >
            <div class="q-px-md">Belum ada kode afiliasi</div>
          </q-btn>
        </div>
      </div>
      <q-separator />
      <!-- TAB BUTTON ROUTER PUSH -->
      <div>
        <q-item
          clickable
          v-ripple
          @click="$router.push('/marketplace-home-owner')"
        >
          <q-item-section avatar>
            <q-avatar square>
              <img src="~/assets/krjg.png" style="width: 80%; height: 80%" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Marketplace</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="$router.push(`/community-owner`)">
          <q-item-section avatar>
            <q-avatar square>
              <img src="~/assets/hm.png" style="width: 80%; height: 80%" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Postingan</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="$router.push(`/cabang-owner`)">
          <q-item-section avatar>
            <q-avatar square>
              <img src="~/assets/tk.png" style="width: 80%; height: 80%" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Cabang</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="$router.push('/absensi-owner')">
          <q-item-section avatar>
            <q-avatar square>
              <img src="~/assets/absensi.svg" style="width: 80%; height: 80%" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Absensi</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="$router.push('/affiliate-owner')">
          <q-item-section avatar>
            <q-avatar square>
              <img src="~/assets/chn.png" style="width: 80%; height: 80%" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Affiliate</q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          @click="$router.push('/payment-history-owner')"
        >
          <q-item-section avatar>
            <q-avatar square>
              <img src="~/assets/history.svg" style="width: 80%; height: 80%" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Riwayat</q-item-section>
        </q-item>
      </div>
    </q-drawer>
    <q-page class="mbl-child">
      <!-- btn dashboard & beli paket -->
      <div class="row q-pt-sm q-px-sm">
        <div class="col-3">
          <q-btn flat @click="drawerLeft = !drawerLeft" round size="70%">
            <q-avatar square>
              <img src="~/assets/dsblg.png" style="width: 50%; height: 50%" />
            </q-avatar>
          </q-btn>
        </div>
        <div class="col-3"></div>
        <div class="col-6 self-center">
          <q-btn
            v-if="
              (this.expired_date <= this.current_date) &
              (this.dataAuth.active_user_package != null)
            "
            @click="alert = true"
            rounded
            class="bg-white full-width self-center"
            style="height: 70%"
          >
            <div class="row full-width">
              <div class="col-4">
                <q-avatar size="200%">
                  <img src="~/assets/box.png" />
                </q-avatar>
              </div>
              <div class="col-8 self-center">Beli Paket</div>
            </div>
          </q-btn>
          <q-btn
            v-if="
              (this.expired_date >= this.current_date) &
              (this.dataAuth.active_user_package != null)
            "
            @click="$router.push('/paket-owner')"
            rounded
            class="bg-white full-width self-center"
            style="height: 70%"
          >
            <div class="row full-width">
              <div class="col-4">
                <q-avatar size="200%">
                  <img src="~/assets/box.png" />
                </q-avatar>
              </div>
              <div class="col-8 self-center">Beli Paket</div>
            </div>
          </q-btn>
          <q-btn
            v-if="this.dataAuth.active_user_package == null"
            @click="$router.push('/paket-owner')"
            rounded
            class="bg-white full-width self-center"
            style="height: 70%"
          >
            <div class="row full-width">
              <div class="col-4">
                <q-avatar size="200%">
                  <img src="~/assets/box.png" />
                </q-avatar>
              </div>
              <div class="col-8 self-center">Beli Paket</div>
            </div>
          </q-btn>
        </div>
      </div>

      <br />
      <!-- tab info -->
      <div class="col">
        <div class="row">
          <div class="col-6 q-pa-sm">
            <q-btn
              no-caps
              class="bgJumlahPesanan shadow-2 q-px-md full-height full-width"
              style="border-radius: 10px"
            >
              <div class="full-width self-center text-center full-height">
                <div class="q-pt-lg">
                  <q-img
                    no-spinner
                    src="~/assets/pp.png"
                    width="50px"
                    height="50px"
                  >
                  </q-img>
                </div>

                <div class="col full-width">
                  <div class="row">
                    <div
                      class="text-weight-bold q-pt-md text-left"
                      style="color: #fff; font-size: small"
                    >
                      Jumlah Pesanan
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="text-weight-medium text-left"
                      style="color: #fff; font-size: small"
                    >
                      {{ this.totalOrders }}
                    </div>
                  </div>
                </div>
              </div>
            </q-btn>
          </div>

          <div class="col-6 q-pa-sm">
            <q-btn
              no-caps
              class="bgInfoPerkembangan shadow-2 q-px-md full-height full-width"
              style="border-radius: 10px"
            >
              <div class="full-width self-center text-center full-height">
                <div class="q-pt-lg">
                  <q-img
                    no-spinner
                    src="~/assets/perkembangan.png"
                    width="50px"
                    height="50px"
                  >
                  </q-img>
                </div>

                <div class="col full-width">
                  <div class="row">
                    <div
                      class="text-weight-bold q-pt-md text-left"
                      style="color: #fff; font-size: small"
                    >
                      Info Perkembangan
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="text-weight-medium text-left"
                      style="color: #fff; font-size: small"
                    >
                      {{ this.totalPerkembangan }} %
                    </div>
                  </div>
                </div>
              </div>
            </q-btn>
          </div>
        </div>
        <div class="row">
          <div class="col-6 q-pa-sm">
            <q-btn
              no-caps
              class="bgPenghasilanKeseluruhan shadow-2 q-px-md full-height full-width"
              style="border-radius: 10px"
            >
              <div class="self-center text-center full-height full-width">
                <div class="q-pt-lg">
                  <q-img
                    no-spinner
                    src="~/assets/pengke.png"
                    width="50px"
                    height="50px"
                  >
                  </q-img>
                </div>

                <div class="col full-width">
                  <div class="row">
                    <div
                      class="text-weight-bold q-pt-md text-left"
                      style="color: #fff; font-size: small"
                    >
                      Penghasilan
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="text-weight-medium text-left"
                      style="color: #fff; font-size: small"
                    >
                      {{
                        new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(this.Profit)
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </q-btn>
          </div>

          <div class="col-6 q-pa-sm">
            <q-btn
              no-caps
              class="bgPaketEntrepreneur shadow-2 q-px-md full-height full-width"
              style="border-radius: 10px"
            >
              <div class="full-width self-center text-center full-height">
                <div class="q-pt-lg">
                  <q-img
                    no-spinner
                    src="~/assets/pae.png"
                    width="50px"
                    height="50px"
                  >
                  </q-img>
                </div>

                <div class="col full-width" v-if="this.Auth.auth.is_expired == false && this.Auth.auth.active_package_user!=null">
                  <div class="row">
                    <div
                      class="text-weight-bold q-pt-md text-left"
                      style="color: #fff; font-size: small"
                    >
                      {{ this.Auth.auth.active_package_user.package.name }}
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="text-weight-medium text-left"
                      style="color: #fff; font-size: small"
                    >
                      Berakhir hingga
                      {{
                        moment(this.Auth.auth.active_package_user.expired_date)
                          .locale("id")
                          .format("LL")
                      }}
                    </div>
                  </div>
                </div>

                <div class="col full-width" v-if="this.Auth.auth.is_expired">
                  <q-btn
                    flat
                    @click="$router.push('/paket-owner-2')"
                    class="q-my-md bg-white full-width"
                    color="white"
                    text-color="grey-6"
                    no-caps
                    label="Perpanjang paket"
                  />
                </div>

                <div
                  class="col full-width"
                  v-if="this.Auth.auth.active_package_user == null"
                >
                  <div class="row">
                    <div
                      class="text-weight-bold q-pt-md text-left"
                      style="color: #fff; font-size: small"
                    >
                      Tidak Ada Paket
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="text-weight-medium text-left"
                      style="color: #fff; font-size: small"
                    >
                      Paket Kosong
                    </div>
                  </div>
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>

      <br />

      <div
        v-if="this.sendDataBoolean && this.Auth.auth.slaves.length"
        class="text-left q-px-md text-weight-bold"
      >
        Data Jumlah Pesanan
      </div>
      <div v-if="this.sendDataBoolean && this.Auth.auth.slaves.length" id="app">
        <bar-chart :data="this.array" :dataTop="this.dataTop" />
      </div>

      <div
        v-if="this.sendDataBoolean2 && this.Auth.auth.slaves.length"
        class="text-left q-pt-md q-px-md text-weight-bold"
      >
        Penghasilan
      </div>
      <div
        v-if="this.sendDataBoolean2 && this.Auth.auth.slaves.length"
        id="app"
      >
        <bar-chart :data="this.array2" :dataTop="this.dataTop2" />
      </div>

      <br />
      <!-- tab jumlah pesanan tiap cabang -->
      <div class="mbl-child" v-if="this.Auth.auth.slaves.length">
        <div class="row q-px-md q-py-md text-weight-bold">
          Jumlah Pesanan Tiap Cabang
        </div>
        <q-virtual-scroll :items="totalOrdersPerShop" virtual-scroll-horizontal>
          <template v-slot="{ item, index }">
            <div :key="index" :class="item.class">
              <div
                class="text-center justify-center column q-pb-md text-weight-bold"
              >
                <div>
                  <q-circular-progress
                    show-value
                    font-size="12px"
                    :max="this.dataTopCircular"
                    :value="item.orders_count"
                    size="150px"
                    :thickness="0.29"
                    color="green"
                    track-color="grey-3"
                    class="q-ma-md"
                  >
                    {{ item.orders_count }} pesanan
                  </q-circular-progress>
                </div>
                <div>{{ item.shop.name }}</div>
              </div>
            </div>
          </template>
        </q-virtual-scroll>
      </div>

      <br />

      <!-- tab penghasilan tiap cabang -->
      <!--
      <div class="text-left q-pt-md q-px-md text-weight-bold">Penghasilan</div>
      <div id="app">
        <chartExample></chartExample>
      </div>
      -->
      <div v-if="this.Auth.auth.slaves.length">
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          swipeable
          animated
          control-color="blue-6"
          control-size="small"
          navigation
          height="100%"
          class="bg-white text-white q-pb-xl"
        >
          <q-carousel-slide
            v-for="(item, index) in this.arrayRevenueEachShop"
            :key="index"
            :name="index"
            class="column no-wrap flex-top q-px-none"
          >
            <div class="text-left q-px-md text-weight-bold text-black">
              Penghasilan Cabang {{ item.shop.name }}
            </div>
            <div v-if="item.orders_each_shop" class="text-top full-width">
              <chartExample
                :data="item.orders_each_shop"
                class="text-black"
              ></chartExample>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>

      <!-- dialog ganti paket -->
      <q-dialog v-model="alert">
        <q-card>
          <q-card-section class="text-center">
            <q-img src="~/assets/alert.png" style="width: 40%; height: 40%" />
          </q-card-section>
          <q-card-section class="text-center">
            <div class="text-h6">
              Apakah anda benar- benar yakin untuk mengganti Paket?
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Jika Yakin tekan Yakin, Jika tidak tekan Tidak
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Tidak" color="grey" v-close-popup />
            <q-btn
              @click="testingButton()"
              flat
              label="Yakin"
              color="red"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
  </q-layout>
</template>

<script>
import moment from "moment";
import { ref } from "vue";
import { mapState } from "vuex";
import BarChart from "src/components/BarchartComponent.vue";
import chartExample from "src/components/LinechartComponent.vue";

//setup linechart
// import { defineComponent, defineAsyncComponent } from "vue";
// const chartExample = defineAsyncComponent(() => {
//   import("src/components/LinechartComponent.vue");
// });

export default {
  // SETUP BARCHART
  name: "App",
  components: {
    "bar-chart": BarChart,
    chartExample,
  },

  computed: {
    ...mapState(["Auth", "MasterOrders"]),
  },

  mounted() {
    this.dataAuth = this.Auth.auth;
    console.log(this.dataAuth);

    this.getTotalOrders();
    this.getTotalOrdersPerShop();
    this.getProfit();
    this.getDataPerkembangan();
    this.checkActivePackageUser();
    this.current_date2 = moment().locale("id").format("LL");

    //chart total pesanan
    this.getMonthlyOrder();
    //chart penghasilan
    this.getMonthlyRevenue();
    //dsfdf
    // this.getMonthlyOrderEachBranch();

    this.getMonthlyOrdersEachBranches();
  },

  data() {
    return {
      drawerLeft: ref(false),
      slide: ref(0),
      current_date2: null,
      alert: ref(false),
      STORAGE_URL: STORAGE_URL,
      expired_date: null,
      current_date: null,

      lorem:
        "loreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",

      // data jumlah seluruh pesanan
      totalOrdersPerShop: null,
      totalOrders: 0,
      Profit: 0,
      totalPerkembangan: null,
      value: 66,
      dataAuth: {},

      //chart transaksi
      branches: [],
      array: [],
      orderDataNull: {
        orders: 0,
      },
      sendDataBoolean: false,
      //array counter
      arrayCounter: [],
      dataTop: 0,

      //chart penghasilan
      array2: [],
      orderDataNull2: {
        show: 0,
      },
      sendDataBoolean2: false,
      //array counter 2
      arrayCounter2: [],
      dataTop2: 0,
      //chart penghasilan tiap cabnag
      array3: [],
      orderDataNull3: {
        show: 0,
      },
      sendDataBoolean3: false,
      //array conter 3
      arrayCounter3: [],

      arrayRevenueEachShop: {},
      allOrdersEachShop: [],
      arrayCircularChart: [],
      dataTopCircular: 0,
    };
  },

  methods: {
    moment,

    attendanceCheck() {
      if (this.Auth.auth.shop) {
      } else {
        this.$q.notify({
          position: "top",
          message: "Pastikan anda sudah memiliki cabang",
        });
      }
    },
    getMonthlyOrderEachBranch() {
      this.$store
        .dispatch("MasterOrders/getMonthlyOrderEachBranch")
        .then((res) => {
          // this.arrayRevenueEachShop = res.data;
        })
        .catch((err) => {
          console.log("terjadi kesalahan getMonthlyOrderEachBranch", err);
        });
    },
    getMaxValueCircularCharts(value) {
      for (let i = 0; i < value.length; i++) {
        this.arrayCircularChart.push(value[i].orders_count);
        // let bulan = value.filter((obj) => {
        //   return obj[i];
        // });
        // console.log("ini bulann", bulan);
      }
      // console.log("ini arrayCircularChart", this.arrayCircularChart);
      var max = Math.max(...this.arrayCircularChart);
      this.dataTopCircular = max;
    },
    getProfitEachBranches() {
      this.$store.dispatch("Branch/getBranches").then((res) => {
        this.branches = res.data;
        if (this.branches.length) {
          this.slide = this.branches[0].id;
          this.branches.each((branch, b) => {
            this.getProfit(branch.id).then((res) => {
              this.branches[b].profit = res.data;
            });
          });
          console.log("cek cabang dengan profit", this.branches);
        }
      });
    },
    testingButton() {
      console.log("klik");
      this.$router.push("paket-owner");
    },
    checkActivePackageUser() {
      if (this.Auth.auth.active_package_user != null) {
        let date = this.Auth.auth.active_package_user.expired_date;
        this.expired_date = moment(date).locale("id").format("LL");
        this.current_date = moment().locale("id").format("LL");
      } else {
        console.log("active package user kosong");
      }

      // console.log("expired_date", this.expired_date);
      // console.log("current_date", this.current_date);
    },
    copyToClipboard() {
      let text = this.Auth.auth.affiliate_code;
      navigator.clipboard.writeText(text);
      // this.$q.notify("Kode Affiliate Anda telah disalin");
    },
    // get data jumlah seluruh pesanan
    getDataPerkembangan() {
      this.$store.dispatch("MasterOrders/getDataPerkembangan").then((res) => {
        this.totalPerkembangan = res.data.toFixed(2);
        // console.log("daw", this.totalPerkembangan);
      });
    },
    getProfit() {
      this.$store.dispatch("MasterOrders/getProfit").then((res) => {
        this.Profit = res.data;
        // console.log(this.Profit);
      });
    },
    getTotalOrdersPerShop() {
      this.$store
        .dispatch("MasterOrders/getTotalOrdersPerShop")
        .then((res) => {
          this.totalOrdersPerShop = res.data;
          console.log("ini total orders per shop", this.totalOrdersPerShop);
          this.getMaxValueCircularCharts(res.data);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getTotalOrdersPerShop");
        });
    },
    getTotalOrders() {
      this.$store
        .dispatch("MasterOrders/getTotalOrders")
        .then((res) => {
          this.totalOrders = res.data;
          // console.log("asdfffffffffffffffffffffff", this.totalOrders);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getTotalOrders");
        });
    },

    //DATA JUMLAH PESANAN - DATA JUMLAH PESANAN - DATA JUMLAH PESANAN
    getMonthlyOrder() {
      this.$store
        .dispatch("MasterOrders/getMonthlyOrder")
        .then((res) => {
          this.filterMonthGetMonthlyOrder(res.data);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getMonthlyOrder barchart", err);
        });
    },
    filterMonthGetMonthlyOrder(value) {
      for (let i = 1; i < 13; i++) {
        let bulan = value.filter((obj) => {
          return obj.month === i;
        });
        if (bulan.length) {
          bulan[0].show = bulan[0].orders;

          let counter = 0;
          counter = bulan[0].show;
          this.arrayCounter.push(+counter);

          let zero = bulan[0];
          this.array.push(zero);
          this.sendDataBoolean = true;
          // console.log("iniarrrrrrrrrr", this.array);
        } else {
          this.orderDataNull.orders = 0;
          this.array.push(this.orderDataNull);
          this.sendDataBoolean = true;

          let counter = 0;
          this.arrayCounter.push(counter);
        }
      }
      this.topValueCounter();
    },
    topValueCounter() {
      this.dataTop = Math.max(...this.arrayCounter);
      // console.log("data top", this.dataTop2);
      // console.log(Math.max(...this.arrayCounter));
    },
    //DATA JUMLAH PESANAN - DATA JUMLAH PESANAN - DATA JUMLAH PESANAN
    //PENGHASILAN - PENGHASILAN - PENGHASILAN - PENGHASILAN
    getMonthlyRevenue() {
      this.$store
        .dispatch("MasterOrders/getMonthlyRevenue")
        .then((res) => {
          // console.log("ini res getMonthlyRevenue", res.data);
          this.filterMonthGetMonthlyRevenue(res.data);
        })
        .catch((err) => {
          console.log("terjdai kesalahan getMonthlyRevenue", err);
        });
    },
    filterMonthGetMonthlyRevenue(value) {
      // this.array2 = null;
      // console.log("array sblm", this.array2);
      for (let i = 1; i < 13; i++) {
        let bulan2 = value.filter((obj) => {
          return obj.month === i;
        });
        //data menjadi satuan/terpisah
        if (bulan2.length) {
          bulan2[0].show = bulan2[0].total;

          let counter = 0;
          counter = bulan2[0].show;
          this.arrayCounter2.push(+counter);

          let zero = bulan2[0];
          this.array2.push(zero);
          this.sendDataBoolean2 = true;

          // this.topValueCounter();
        } else {
          this.orderDataNull2.show = 0;
          this.array2.push(this.orderDataNull2);
          this.sendDataBoolean2 = true;

          let counter = 0;
          this.arrayCounter2.push(counter);
        }
      }
      // console.log("this.array2", this.array2);
      this.topValueCounter2();
    },
    topValueCounter2() {
      this.dataTop2 = Math.max(...this.arrayCounter2);
      // console.log("data top", this.dataTop2);
      // console.log(Math.max(...this.arrayCounter));
    },
    getMonthlyOrdersEachBranches() {
      this.$store
        .dispatch("MasterOrders/getMonthlyOrdersEachBranches")
        .then((res) => {
          this.arrayRevenueEachShop = res.data;
          // console.log(
          //   "ini res getMonthlyOrdersEachBranches",
          //   this.arrayRevenueEachShop
          // );
          for (let i = 0; i < this.arrayRevenueEachShop.length; i++) {
            // console.log("ya allah", this.arrayRevenueEachShop[i]);
            this.getMonthlyOrders(this.arrayRevenueEachShop[i].shop.id, i);
          }
          // this.getMonthlyOrders(1);
        })
        .catch((err) => {
          console.log("err");
        });
    },
    getMonthlyOrders(branchid, indexChecker) {
      this.$store
        .dispatch("MasterBranchOrders/getMonthlyOrders", branchid)
        .then((res) => {
          // console.log("tolong baim", index);
          // const indext = index.findIndex((indexChecker, index) => {
          //   if (indexChecker.id === branchid) {
          //     console.log("dwadawd", index);
          //   }
          // });
          // console.log("uwaw", indext);
          this.filterMonthGetMonthlyRevenue2(res.data, indexChecker);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getMonthlyOrders", err);
        });
    },
    filterMonthGetMonthlyRevenue2(value, mergeArray) {
      this.array3 = [];
      // console.log("hiraishin", value);
      for (let i = 1; i < 13; i++) {
        let bulan3 = value.filter((obj) => {
          return obj.month === i;
        });
        //data menjadi satuan/terpisah
        if (bulan3.length) {
          bulan3[0].show = bulan3[0].total_sum;

          let counter = 0;
          counter = bulan3[0].show;
          this.arrayCounter3.push(+counter);

          let zero = bulan3[0];
          this.array3.push(zero);
          this.sendDataBoolean3 = true;

          // this.topValueCounter();
        } else {
          this.orderDataNull3.show = 0;
          this.array3.push(this.orderDataNull3);
          this.sendDataBoolean3 = true;

          let counter = 0;
          this.arrayCounter3.push(counter);
        }
      }
      // console.log("this.array3", this.array3);
      // this.allOrdersEachShop.push(this.array3);

      // for (let i = 1; i < 13; i++) {}

      // console.log("ini res mergeArray", mergeArray);
      //PERLU INDEX YANG BENAR
      this.arrayRevenueEachShop[mergeArray].orders_each_shop = this.array3;
      // console.log("this.arrayRevenueEachShop", this.arrayRevenueEachShop);
      // this.topValueCounter2();
    },
  },
};
</script>

<style>
.grad {
  background-image: linear-gradient(to right, #0072ff, #00c6ff);
}

.bgJumlahPesanan {
  background-image: linear-gradient(to right, #ad90ff, #8c64ff);
}

.bgInfoPerkembangan {
  background-image: linear-gradient(to right, #ff85ec, #ff49e3);
}

.bgPenghasilanKeseluruhan {
  background-image: linear-gradient(to right, #71d3f1, #16bdf2);
}

.bgPaketEntrepreneur {
  background-image: linear-gradient(to right, #edbd7a, #f4a333);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
