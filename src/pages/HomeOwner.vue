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
            @click="copyToClipboard()"
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
        </div>
      </div>
      <q-separator />
      <!-- TAB BUTTON ROUTER PUSH -->
      <div>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-avatar square>
              <img src="~/assets/krjg.png" style="width: 80%; height: 80%" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Marketplace</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
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

        <q-item clickable v-ripple @click="$router.push('/affiliate-owner')">
          <q-item-section avatar>
            <q-avatar square>
              <img src="~/assets/chn.png" style="width: 80%; height: 80%" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Affiliate</q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="$router.push('/absensi-owner')">
          <q-item-section avatar>
            <q-avatar square>
              <img src="~/assets/abs.png" style="width: 80%; height: 80%" />
            </q-avatar>
          </q-item-section>
          <q-item-section>Absensi</q-item-section>
        </q-item>
      </div>
    </q-drawer>
    <q-page class="mbl-child">
      <!-- btn dashboard & beli paket -->
      <div class="row q-pt-sm q-px-sm">
        <div class="col-3 bg-white">
          <q-btn flat @click="drawerLeft = !drawerLeft" round size="70%">
            <q-avatar square>
              <img src="~/assets/dsblg.png" style="width: 50%; height: 50%" />
            </q-avatar>
          </q-btn>
        </div>
        <div class="col-4 bg-white"></div>
        <div class="col-5 self-center">
          <q-btn
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
                      class="text-weight-medium q-pt-md text-left"
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
                      class="text-weight-medium q-pt-md text-left"
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
                      class="text-weight-medium q-pt-md text-left"
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

                <div class="col full-width">
                  <div class="row">
                    <div
                      class="text-weight-medium q-pt-md text-left"
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
                      {{
                        moment(this.Auth.auth.active_package_user.expired_date)
                          .locale("id")
                          .format("LL")
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>

      <br />

      <div class="text-left q-px-md text-weight-bold">Data Jumlah Pesanan</div>
      <div id="app">
        <BarChart />
      </div>

      <!-- <div class="text-left q-pt-md q-px-md text-weight-bold">Penghasilan</div>
      <div id="app">
        <BarChart2 />
      </div> -->

      <!-- <div class="text-left q-pt-md q-px-md text-weight-bold">Penghasilan</div>
      <div id="app">
        <LineChart />
      </div> -->

      <br />
      <!-- tab jumlah pesanan tiap cabang -->
      <div class="mbl-child">
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
                    :value="value"
                    size="150px"
                    :thickness="0.29"
                    color="green"
                    track-color="grey-3"
                    class="q-ma-md"
                  >
                    {{ item.orders_count }} pesanan
                  </q-circular-progress>
                </div>
                <div>{{ item.name }}</div>
              </div>
            </div>
          </template>
        </q-virtual-scroll>
      </div>

      <br />

      <!-- tab penghasilan tiap cabang -->
      <div>
        <div class="row q-px-md q-py-md text-weight-bold">
          Penghasilan Tiap Cabang
        </div>
        <div>
          <q-carousel
            control-color="blue"
            height="100%"
            animated
            v-model="slide"
            swipeable
            navigation
            infinite
          >
            <q-carousel-slide :name="1">
              <div class="col">
                <div class="row">
                  <q-img src="~/assets/mount.png" class="self-center" />
                </div>
                <div class="row q-py-md q-mb-lg">Laundry Amsterdam</div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2">
              <div class="col">
                <div class="row">
                  <q-img src="~/assets/mount.png" class="self-center" />
                </div>
                <div class="row q-py-md q-mb-lg">Laundry Utrecht</div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
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
            <q-btn flat label="Yakin" color="red" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
  </q-layout>
</template>

<script>
import moment from "moment";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { mapState } from "vuex";
import BarChart from "src/components/BarChartOwnerComponent.vue";
import BarChart2 from "src/components/BarChartRevenueComponent.vue";
// import LineChart from "src/components/LineChartOwnerComponent.ts";
// import LineChart  from "src/components/LineChartOwnerComponent.vue";

export default {
  // SETUP BARCHART
  name: "App",
  components: {
    BarChart,
    BarChart2,
  },

  computed: {
    ...mapState(["Auth", "MasterOrders"]),
  },

  mounted() {
    this.getTotalOrders();
    this.getTotalOrdersPerShop();
    this.getProfit();
    this.getDataPerkembangan();

    //data pesanan bulanan
    this.getMonthlyOrder();
    console.log("cek auth", this.Auth.auth);
  },

  data() {
    return {
      drawerLeft: ref(false),
      slide: ref(1),
      alert: ref(false),
      STORAGE_URL: STORAGE_URL,

      // data jumlah seluruh pesanan
      totalOrdersPerShop: null,
      totalOrders: 0,
      Profit: 0,
      totalPerkembangan: null,
      value: 77,

      //data bulanan
    };
  },

  methods: {
    moment,
    copyToClipboard() {
      let text = this.Auth.auth.affiliate_code;
      navigator.clipboard.writeText(text);
      this.$q.notify("Kode Affiliate Anda telah disalin");
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
        })
        .catch((err) => {
          console.log("terjadi kesalahan getTotalOrders");
        });
    },

    // get data pesanan bulanan
    getMonthlyOrder() {
      this.$store
        .dispatch("MasterOrders/getMonthlyOrder")
        .then((res) => {
          // console.log("data bulanan ", res.data);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getMonthlyOrder", err);
        });
    },

    filterMonth(value) {
      let resBulan = value;
      let results = resBulan.filter((obj) => {
        return obj.month === 1;
      });
      console.log("data januari", results);
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
