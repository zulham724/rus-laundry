<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container class="mbl-child">
      <div class="fixed-top shadow-2 bg-white" style="z-index: 999">
        <q-header class="bg-transparent" elevated>
          <div class="row full-width q-py-sm bg-white justify-center">
            <div class="col-4 q-px-sm self-center">
              <q-btn
                flat
                round
                size="10px"
                @click="$router.push(`/detail-cabang-owner/${this.branchid}`)"
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
              class="col-4 self-center text-weight-medium text-center text-black"
              style="font-size: 17px"
            >
              Transaksi
            </div>
            <div class="col-4 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div
          v-if="this.currentShop != null"
          class="q-px-sm q-py-sm text-h6 text-weight-bold text-center"
        >
          {{ this.currentShop[0].shop.name }}
        </div>
        <!-- TAB PEMASUKAN DAN PENGELUARAN -->
        <div class="row">
          <div class="col-6 text-center q-px-sm">
            <!-- active -->
            <q-card
              v-if="tabPemasukanAktif"
              v-ripple
              class="q-py-sm"
              style="background-color: #233471; border-radius: 10px"
            >
              <q-img no-spinner src="~/assets/elmsk.png" width="50%" />
              <div class="text-white text-center self-center">Pemasukan</div>
            </q-card>
            <!-- non-active -->
            <q-card
              @click="clickPemasukan()"
              v-if="tabPemasukanNonAktif"
              v-ripple
              class="q-py-sm"
              style="background-color: #44495f; border-radius: 10px"
            >
              <q-img no-spinner src="~/assets/elmsk.png" width="50%" />
              <div class="text-white text-center self-center">Pemasukan</div>
            </q-card>
          </div>

          <div class="col-6 text-center q-px-sm">
            <!-- non-active -->
            <q-card
              @click="clickPengeluaran()"
              v-if="tabPengeluaranNonAktif"
              v-ripple
              class="q-py-sm"
              style="background-color: #44495f; border-radius: 10px"
            >
              <q-img no-spinner src="~/assets/elmdk.png" width="50%" />
              <div class="text-white text-center self-center">Pengeluaran</div>
            </q-card>
            <!-- active -->
            <q-card
              v-if="tabPengeluaranAktif"
              v-ripple
              class="q-py-sm"
              style="background-color: #233471; border-radius: 10px"
            >
              <q-img no-spinner src="~/assets/elmdk.png" width="50%" />
              <div class="text-white text-center self-center">Pengeluaran</div>
            </q-card>
          </div>
        </div>

        <!-- TAB PEMASUKAN DAN NOMINAL -->
        <div class="q-mt-sm q-px-sm">
          <q-card
            v-ripple
            style="background-color: #233471; border-radius: 10px"
          >
            <div class="row">
              <div class="col-6 q-py-md">
                <div class="row">
                  <div class="col-1"></div>
                  <div class="col-4 q-px-xs">
                    <q-img src="~/assets/yen.png" />
                  </div>
                  <div class="col-7 q-px-xs self-center">
                    <div class="text-white self-center" style="font-size: 12px">
                      Total Saldo
                    </div>
                    <!-- <div class="text-white self-center" style="font-size: 10px">
                      Tren Keseimbangan
                    </div> -->
                  </div>
                </div>
              </div>

              <div class="col-6 q-py-md self-center">
                <div class="row">
                  <div
                    style="background-color: white; width: 1px; display: block"
                  />

                  <div class="col-11 q-px-xs self-center">
                    <div class="text-white self-center" style="font-size: 18px">
                      {{
                        new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(totalSum)
                      }}
                    </div>
                    <!-- <div
                      class="text-white self-center row"
                      style="font-size: 10px"
                    >
                      <div class="text-green col-2">+4.3%</div>
                      <div class="col-1"></div>
                      <div class="col-9">Tren Keseimbangan</div>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </div>
        <!-- TAB SELECT -->
        <!-- <div class="q-mt-sm row">
          <div class="col-3"></div>
          <div class="col-3"></div>
          <div class="col-6 q-px-sm">
            <q-select
              dense
              rounded
              outlined
              v-model="model"
              :options="options"
            />
          </div>
        </div> -->
        <!-- TAB LIST -->
        <!-- ITEM SURPLUS -->
        <!-- <div class="q-mt-sm q-px-sm" v-for="a in 2" :key="a">
          <q-item
            v-ripple
            class="bg-white shadow-1"
            style="border-radius: 25px"
          >
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Budi RianEko</q-item-label>
              <q-item-label caption class="text-black"
                >07-Sept-2022, 13.00</q-item-label
              >
            </q-item-section>

            <q-item-section side> color: #dd2222
              <q-item-label caption style="color: #00ff38"
                >+Rp 50.000</q-item-label
              >
            </q-item-section>
          </q-item>
        </div> -->

        <!-- Pemasukan -->
        <income-component
          :currentShopId="this.currentShopId"
          v-if="incomeComponent && this.currentShopId != null"
        ></income-component>

        <!-- Pengeluaran -->
        <spend-component
          :currentShopId="this.currentShopId"
          v-if="spendComponent && this.currentShopId != null"
        >
        </spend-component>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import moment from "moment";
import IncomeComponent from "src/components/owner/IncomeComponent";
import SpendComponent from "src/components/owner/SpendComponent";

export default {
  props: ["branchid"],
  components: {
    "income-component": IncomeComponent,
    "spend-component": SpendComponent,
  },
  data() {
    return {
      alert: ref(false),
      model: ref("Semua"),
      options: ["Semua", "Laundry", "Marketplace", "Lainnya"],
      isLoad: false,
      shopsId: [],
      spendingData: [],
      incomeData: [],
      totalSum: 0,
      tabPemasukanAktif: true,
      tabPemasukanNonAktif: false,
      tabPengeluaranAktif: false,
      tabPengeluaranNonAktif: true,

      incomeComponent: true,
      spendComponent: false,

      shopNameFilter: [],
      currentShop: null,
      currnetShopId: null,
    };
  },
  computed: {
    auth() {
      return this.$store.getters["Auth/auth"];
    },
  },
  mounted() {
    // this.getShopId();
    this.getTotalSum();
    this.getSpendSum();
    this.getShopName();
  },
  methods: {
    moment,
    clickPengeluaran() {
      this.tabPemasukanAktif = false;
      this.tabPemasukanNonAktif = true;

      this.tabPengeluaranAktif = true;
      this.tabPengeluaranNonAktif = false;
      //  Component
      this.incomeComponent = false;
      this.spendComponent = true;
    },
    clickPemasukan() {
      this.tabPengeluaranAktif = false;
      this.tabPengeluaranNonAktif = true;

      this.tabPemasukanAktif = true;
      this.tabPemasukanNonAktif = false;
      //  Component
      this.spendComponent = false;
      this.incomeComponent = true;
    },
    getTotalSum() {
      this.$store
        .dispatch("Payment/getTotalSum", this.branchid)
        .then((res) => {
          this.totalSum = res.data;
        })
        .catch((err) => {});
    },
    getSpendSum() {
      this.$store
        .dispatch("Payment/getSpendSum", this.branchid)
        .then((res) => {
          console.log("ini total spend", res.data);
        })
        .catch((err) => {
          console.log("terjadi kesalahan");
        });
    },
    getShopId() {
      return new Promise((resolve, reject) => {
        let shopsId = [];
        this.auth.slaves.forEach((slave) => {
          shopsId.push(slave.shop.id);
        });
        this.shopsId = shopsId;
        // console.log("ini shopsId", shopsId);
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
          this.currentShopId = this.currentShop[0].shop.id;
          // console.log('this.currentshopid', this.currentShopId)
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
