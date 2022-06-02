<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <div class="fixed-top bg-white" style="z-index: 999">
        <q-header class="bg-transparent shadow-1">
          <div class="row full-width q-py-sm bg-white justify-center">
            <div class="col-1 q-px-sm self-center">
              <q-btn
                v-ripple
                flat
                round
                size="10px"
                @click="$router.push('/cabang-owner')"
              >
                <q-avatar
                  size="20px"
                  icon="fas fa-arrow-left"
                  style="color: #888888"
                >
                </q-avatar>
              </q-btn>
            </div>
            <div
              class="col-10 self-center text-weight-medium text-center text-black"
              style="font-size: 20px"
            >
              <div v-if="this.currentShop">
                {{ this.currentShop[0].shop.name }}
              </div>
              <div v-else>Laundry</div>
            </div>
            <div class="col-1 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <!-- TAB JUMLAH PESANAN & PERKEMBANGAN -->
        <div class="row">
          <div class="col-6 q-px-sm q-py-xs">
            <q-card
              class="text-center q-py-sm"
              style="background-color: #87cfff"
            >
              <q-img width="20%" src="~/assets/icppn.svg" />
              <div class="text-white text-weight-medium">Jumlah Pesanan</div>
              <div class="text-weight-medium" style="color: #e8e1e1">
                {{ this.branchOrders }}
              </div>
            </q-card>
          </div>
          <div class="col-6 q-px-sm q-py-xs">
            <q-card
              class="text-center q-py-sm"
              style="background-color: #87cfff"
            >
              <q-img width="20%" src="~/assets/ttm.svg" />
              <div class="text-white text-weight-medium">Perkembangan</div>
              <div class="text-weight-medium" style="color: #e8e1e1">
                {{ this.branchDevelopment.toFixed(2) }}%
              </div>
            </q-card>
          </div>
        </div>

        <!-- TAB LAYANAN & TRANSAKSI -->
        <div class="row">
          <div class="col-6 q-px-sm q-py-xs">
            <q-card
              @click="this.$router.push(`/detail-paket-owner/${this.branchid}`)"
              class="text-center q-py-sm"
              style="background-color: #d8c4fc; border-radius: 14px"
            >
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/pktt.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-left">
                  <q-item-label class="text-white text-weight-medium"
                    >Layanan</q-item-label
                  >
                  <q-item-label class="text-white" caption>{{
                    this.branchServices
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-6 q-px-sm q-py-xs">
            <q-card
              @click="$router.push(`/detail-transaksi-owner/${this.branchid}`)"
              class="text-center q-py-sm"
              style="background-color: #64f4ff; border-radius: 14px"
            >
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/cttn.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-left">
                  <q-item-label class="text-white text-weight-medium"
                    >Transaksi</q-item-label
                  >
                  <q-item-label class="text-white" caption>
                    {{
                      new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(this.branchProfit)
                    }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>

        <!-- TAB PELANGGAN & KARYAWAN -->
        <div class="row">
          <div class="col-6 q-px-sm q-py-xs">
            <q-card
              class="text-center q-py-sm"
              style="background-color: #8ca8ff; border-radius: 14px"
              @click="
                this.$router.push(`/detail-pelanggan-owner/${this.branchid}`)
              "
            >
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/orgct.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-left">
                  <q-item-label class="text-white text-weight-medium"
                    >Pelanggan</q-item-label
                  >
                  <q-item-label class="text-white" caption>{{
                    this.branchCustomers
                  }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-6 q-px-sm q-py-xs">
            <q-card
              @click="
                this.$router.push(`/detail-karyawan-owner/${this.branchid}`)
              "
              class="text-center q-py-sm"
              style="background-color: #fcc4e8; border-radius: 14px"
            >
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/tow.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-left">
                  <q-item-label class="text-white text-weight-medium"
                    >Karyawan</q-item-label
                  >
                  <q-item-label class="text-white" caption
                    >{{ this.branchEmployee }} karyawan</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-card>
          </div>
        </div>

        <!-- TAB PROUDUKS -->
        <!--
        <div class="row">
          <div class="col-6 q-px-sm q-pt-sm">
            <q-card
              class="text-center q-py-sm"
              style="background-color: #ffc377; border-radius: 14px"
            >
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/ppnpkt.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-left">
                  <q-item-label class="text-white text-weight-medium"
                    >Produk</q-item-label
                  >
                  <q-item-label class="text-white" caption
                    >Ini data palsu</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-card>
          </div>
          <div class="col-6 q-px-sm q-py-sm"></div>
        </div>
        -->

        <!-- TAB CHART DATA JUMLAH PESANAN & PENGHASILAN -->
        <div class="col">
          <!--
          <div class="row">
            <div class="col">
              <div class="row q-px-md q-py-md text-weight-bold">
                Data Jumlah Pesanan
              </div>
              <div v-if="this.sendDataBoolean" id="app">
                <bar-chart :data="this.array" :dataTop="this.dataTop" />
              </div>
            </div>
          </div>
          -->
          <div class="row">
            <div class="col">
              <div class="row q-px-md q-py-md text-weight-bold">
                Penghasilan
              </div>
              <div v-if="this.sendDataBoolean2" id="app">
                <bar-chart :data="this.array2" :dataTop="this.dataTop2" />
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";
import BarChart from "src/components/BarchartComponent.vue";

export default {
  // SETUP BARCHART
  name: "App",
  components: {
    "bar-chart": BarChart,
  },

  props: ["branchid"],
  data() {
    return {
      branchOrders: 0,
      branchDevelopment: 0,
      branchProfit: 0,
      branchServices: 0,
      branchEmployee: 0,
      branchCustomers: 0,

      shopNameFilter: [],
      currentShop: null,

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
    };
  },

  computed: {
    ...mapState(["Auth"]),
  },

  mounted() {
    // console.log("ini auth", this.Auth.auth);
    // console.log("branch", this.branchid);
    this.getBranchOrders();
    this.getBranchDevelopment();
    this.getBranchProfit();
    this.getBranchServices();
    this.getBranchEmployee();
    this.getBranchCustomers();
    // this.getCurrentBranch();
    this.getShopName();

    this.getMonthlyOrders();
    this.getMonthlyRevenue();
  },

  methods: {
    //PENGHASILAN - PENGHASILAN - PENGHASILAN - PENGHASILAN
    getMonthlyRevenue() {
      this.$store
        .dispatch("MasterBranchOrders/getMonthlyRevenue", this.branchid)
        .then((res) => {
          console.log("ini res getMonthlyRevenue", res.data);
          this.filterMonthGetMonthlyRevenue(res.data);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getMonthlyRevenue", err);
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
          bulan2[0].show = bulan2[0].total_sum;

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
      // console.log("data top2", this.dataTop2);
      // console.log(Math.max(...this.arrayCounter));
    },
    //PENGHASILAN - PENGHASILAN - PENGHASILAN - PENGHASILAN

    //DATA JUMLAH PESANAN - DATA JUMLAH PESANAN - DATA JUMLAH PESANAN
    getMonthlyOrders() {
      this.$store
        .dispatch("MasterBranchOrders/getMonthlyOrders", this.branchid)
        .then((res) => {
          console.log("PPPPPPPPP", res.data);
          this.filterMonthGetMonthlyOrder(res.data);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getMonthlyOrders", err);
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
      console.log("ini array", this.array);
    },
    topValueCounter() {
      this.dataTop = Math.max(...this.arrayCounter);
      console.log("data top", this.dataTop2);
      // console.log(Math.max(...this.arrayCounter));
    },
    //DATA JUMLAH PESANAN - DATA JUMLAH PESANAN - DATA JUMLAH PESANAN

    //get jumlah pesanans
    getBranchOrders() {
      this.$store
        .dispatch("MasterBranchOrders/getBranchOrders", this.branchid)
        .then((res) => {
          // console.log("res getBranchOrder", res.data);
          this.branchOrders = res.data;
        })
        .catch((err) => {
          console.log("terjadi kesalahan getBranchOrders");
        });
    },

    //get jumlah perkembangan
    getBranchDevelopment() {
      this.$store
        .dispatch("MasterBranchOrders/getBranchDevelopment", this.branchid)
        .then((res) => {
          // console.log("res getDevelopment", res.data);
          this.branchDevelopment = res.data;
        })
        .catch((err) => {
          console.log("terjadi kesalahan getDevelopment");
        });
    },

    //get jumlah transaksi
    getBranchProfit() {
      this.$store
        .dispatch("MasterBranchOrders/getBranchDevelopment", this.branchid)
        .then((res) => {
          // console.log("res getBranchProfit", res.data);
          this.branchProfit = res.data;
        })
        .catch((err) => {
          console.log("terjadi kesalahan getBranchProfit");
        });
    },

    //get jumlah paket/layanan
    getBranchServices() {
      this.$store
        .dispatch("MasterBranchOrders/getBranchServices", this.branchid)
        .then((res) => {
          // console.log("res getBranchServices", res.data.length);
          this.branchServices = res.data.length;
        })
        .catch((err) => {
          console.log("terjadi kesalahan getBranchServices");
        });
    },

    //get jumlah karyawan
    getBranchEmployee() {
      this.$store
        .dispatch("MasterBranchOrders/getBranchEmployee", this.branchid)
        .then((res) => {
          // console.log("res getBranchEmployee", res.data.length);
          this.branchEmployee = res.data.length;
        })
        .catch((err) => {
          console.log("terjadi kesalahan getBranchEmployee");
        });
    },

    //get jumlah customers
    getBranchCustomers() {
      this.$store
        .dispatch("MasterBranchOrders/getBranchCustomers", this.branchid)
        .then((res) => {
          // console.log("res getBranchCustomers", res.data.length);
          this.branchCustomers = res.data.length;
        })
        .catch((err) => {
          console.log("terjadi kesalahan getBranchCustomers");
        });
    },

    getShopName() {
      this.$store
        .dispatch("MasterOrders/getTotalOrdersPerShop")
        .then((res) => {
          this.shopNameFilter = res.data;
          // console.log("shopName", this.shopName);

          var creatures = res.data;
          var id = +this.branchid;
          var aquaticCreatures = creatures.filter(function (creature) {
            return creature.shop.id == id;
          });
          this.currentShop = aquaticCreatures;
          // console.log("shopName", aquaticCreatures);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getTotalOrdersPerShop", err);
        });
    },
  },
};
</script>

<style>
.bgCard {
  background-image: linear-gradient(to left, #74b6ff, #00bef8);
}
</style>
