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
              
              <div v-if="this.currentShop">{{ this.currentShop[0].shop.name }}</div>
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

        <!-- TAB CHART DATA JUMLAH PESANAN & PENGHASILAN -->
        <div class="col">
          <div class="row">
            <div class="col">
              <div class="row q-px-md q-py-md text-weight-bold">
                Data Jumlah Pesanan
              </div>
              <div class="row justify-center q-pb-md">
                <q-img no-spinner src="~/assets/chart.png" style="width: 90%">
                </q-img>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="row q-px-md q-py-md text-weight-bold">
                Penghasilan
              </div>
              <div class="row justify-center q-pb-md">
                <q-img no-spinner src="~/assets/chart2.png" style="width: 90%">
                </q-img>
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

export default {
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
    };
  },
  computed: {
    ...mapState(["Auth"]),
  },
  mounted() {
    console.log("ini auth", this.Auth.auth);
    // console.log("branch", this.branchid);
    this.getBranchOrders();
    this.getBranchDevelopment();
    this.getBranchProfit();
    this.getBranchServices();
    this.getBranchEmployee();
    this.getBranchCustomers();
    // this.getCurrentBranch();
    this.getShopName();
  },

  methods: {
    // getCurrentBranch() {
    //   this.$store
    //     .dispatch("MasterOrders/getMonthlyOrdersEachBranches")
    //     .then((res) => {
    //       // this.dataBranch = res.data;
    //       var branch = res.data;
    //       var sendedId = this.branchid;

    //       var branchini = branch.filter(function (hero) {
    //         return branch.id == sendedId;
    //       });

    //       console.log("this branch", branchini);
    //     })
    //     .catch((err) => {
    //       console.log("err", err);
    //     });
    // },

    //get jumlah pesanans
    getBranchOrders() {
      this.$store
        .dispatch("MasterBranchOrders/getBranchOrders", this.branchid)
        .then((res) => {
          console.log("res getBranchOrder", res.data);
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
          console.log("res getDevelopment", res.data);
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
          console.log("res getBranchProfit", res.data);
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
          console.log("res getBranchServices", res.data.length);
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
          console.log("res getBranchEmployee", res.data.length);
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
          console.log("res getBranchCustomers", res.data.length);
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
          console.log("shopName", aquaticCreatures);
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
