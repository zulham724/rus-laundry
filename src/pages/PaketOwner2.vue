<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <div class="fixed-top shadow-2 bg-white" style="z-index: 999">
        <q-header class="bg-transparent" elevated>
          <div class="row full-width q-py-sm bg-white justify-center">
            <div class="col-4 q-px-sm self-center">
              <q-btn flat round size="10px" @click="$router.back()">
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
              style="font-size: 20px"
            >
              Paket
            </div>
            <div class="col-4 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div
          v-for="item in this.packageData"
          :key="item.id"
          class="q-px-sm q-py-sm"
        >
          <q-card
            flat
            @click="nextPayment2(item)"
            v-if="this.Auth.auth.active_package_user == null"
            class="no-shadow"
            style="border-radius: 10px; background-color: #017dff"
          >
            <div class="row q-px-md q-py-sm">
              <div class="col">
                <div class="text-white">{{ item.name }}</div>
                <div class="text-white" v-if="item.price != 0">
                  {{
                    new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.price)
                  }}
                </div>
                <div class="text-white" v-else>-</div>
              </div>
              <div class="col text-white text-right self-center">
                {{ item.package_contents[0].value }}
              </div>
            </div>
          </q-card>
          <q-card
            @click="nextPayment(item)"
            v-if="this.Auth.auth.active_package_user != null"
            flat
            :class="`no-shadow ${
              item.id > this.Auth.auth.active_package_user.package.id
                ? null
                : 'filterBrightness '
            }`"
            style="border-radius: 10px; background-color: #017dff"
          >
            <div class="row q-px-md q-py-sm">
              <div class="col">
                <div class="text-white">{{ item.name }}</div>
                <div class="text-white" v-if="item.price != 0">
                  {{
                    new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.price)
                  }}
                </div>
                <div class="text-white" v-else>-</div>
              </div>
              <div class="col text-white text-right self-center">
                {{ item.package_contents[0].value }}
              </div>
            </div>
          </q-card>
        </div>

        <q-dialog v-model="payment1" position="bottom">
          <q-card style="border-radius: 20px 20px 0px 0px">
            <q-card-section class="text-center q-py-none">
              <img src="./../assets/pon.png" style="height: 20%; width: 15%" />
            </q-card-section>
            <q-card-section class="text-center q-py-sm">
              <div class="text-black text-bold" style="font-size: 16px">
                {{ paymentPackageData.name }}
              </div>
            </q-card-section>

            <q-card-section class="q-py-none">
              <div
                v-for="item in paymentPackageData.package_contents"
                :key="item.id"
              >
                <q-item>
                  <q-item-section avatar>
                    <q-avatar rounded>
                      <img
                        src="./../assets/cebir.png"
                        style="width: 70%; height: 70%"
                      />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>{{ item.value }}</q-item-section>
                </q-item>
              </div>
            </q-card-section>
            <q-card-section class="q-py-sm" style="background-color: #017dff">
              <div>
                <div class="row">
                  <div class="col self-center text-white">
                    {{
                      new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(paymentPackageData.price)
                    }}
                  </div>
                  <div class="col text-right self-center">
                    <q-btn
                      @click="payment2 = true"
                      flat
                      dense
                      label="Beli paket"
                      style="color: #fff"
                    />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog v-model="payment2" persistent>
          <q-card>
            <q-card-section class="text-center">
              <img class="q-py-sm" src="./../assets/dngr.png" style="height: 40%; width: 40%" />
              <div>Apakah anda yakin ingin membeli paket ini?</div>
            </q-card-section>

            <q-card-actions align="right">
              
              <q-btn
                flat
                dense
                label="tidak"
                style="background-color: #7e8385"
                color="white"
                v-close-popup
              />
              <q-btn
                @click="this.addPackage() & this.getCurrentDate()"
                flat
                dense
                label="yakin"
                style="background-color: #c81b1b"
                color="white"
                v-close-popup
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="payment3" persistent>
          <q-card style="border-radius: 24px">
            <q-card-section class="text-center">
              <div class="text-black">
                <q-img src="~/assets/ctg2.png" width="60%" />
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-center text-black text-weight-bold">
                Pembaaran Berhasil
              </div>
              <div
                v-if="this.currentDate != null"
                class="text-center text-black"
              >
                {{ currentDate }}
              </div>
              <q-separator />
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ this.Auth.auth.name }}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <div style="color: #8b8484">Transfer Ke:</div>
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/bnk.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label caption class="text-black"
                    >a.n/Ardian Rizky Rahmawan</q-item-label
                  >
                  <q-item-label class="text-weight-bold"
                    >0262628673</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-card-section>

            <q-card-actions align="left">
              <q-btn
                @click="getHistory()"
                flat
                rounded
                style="background-color: #6295ff"
                v-close-popup
              >
                <div class="q-mx-sm" style="color: #fff">Selesai</div>
              </q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";
import moment from "moment";

export default {
  computed: {
    ...mapState(["Auth"]),
  },
  data() {
    return {
      payment1: ref(false),
      payment2: ref(false),
      payment3: ref(false),

      packageData: null,
      paymentPackageData: null,
      confirmationId: null,

      currentDate: null,
    };
  },
  mounted() {
    console.log("dataAuth", this.Auth.auth);
    this.getPackages();
    this.extendPackage();
  },
  methods: {
    getCurrentDate() {
      this.currentDate = null;
      this.currentDate = moment()
        .locale("ID")
        .format("dddd, MMMM Do YYYY, h:mm:ss a");
    },
    addPackage() {
      // console.log("ini formdata", this.paymentPackageData);

      this.$store
        .dispatch("MasterPayment/store", this.paymentPackageData)
        .then((res) => {
          console.log("ini res sudah bayar", res.data);
          this.confirmationId = res.data.id;
          this.getHistory();
        })
        .catch((err) => {
          console.log("terjadi kesalahan addPackage", err);
        });
    },
    extendPackage(){
        const extendPackage = {
        created_at: this.Auth.auth.active_package_user.package.created_at,
        description: this.Auth.auth.active_package_user.package.description,
        id: this.Auth.auth.active_package_user.package.id,
        name: this.Auth.auth.active_package_user.package.name,
        package_contents: this.Auth.auth.active_package_user.package.package_contents,
        price: this.Auth.auth.active_package_user.package.price,
        updateted_at: this.Auth.auth.active_package_user.package.updated_at,
      };
      console.log('extendpackage', extendPackage)
      this.paymentPackageData = extendPackage;
      this.payment1 = true;
    },
    nextPayment(data) {
      if (data.id > this.Auth.auth.active_package_user.package.id) {
        this.paymentPackageData = null;
        this.paymentPackageData = data;
        console.log("data", data);
        this.payment1 = true;
      } else {
        console.log("gagal");
      }
      
      
      // this.paymentPackageData = null;
      // this.paymentPackageData = data;
      // console.log("data", this.paymentPackageData);
      // this.payment1 = true;
    },
    nextPayment2(data){
      this.paymentPackageData = null;
        this.paymentPackageData = data;
        console.log("data", data);
        this.payment1 = true;
    },
    getPackages() {
      this.$store
        .dispatch("MasterOrders/getPackages")
        .then((res) => {
          console.log("ini res getPackages", res);
          this.packageData = res.data;
        })
        .catch((err) => {
          console.log("terjadi kesalahan getPackages", err);
        });
    },
    getHistory() {
      this.$store
        .dispatch("MasterPayment/getHistory")
        .then((res) => {
          this.history = res.data;
          console.log('this.history', this.history)
          const activeIds = [this.confirmationId];
          const activeServiceList = this.history.filter((item) => {
            return activeIds.includes(item.id);
          });
          console.log("activeServiceList", activeServiceList[0]);

          this.toDetailPaymentHistoryOwner(activeServiceList[0]);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getHistory", err);
        });
    },
    toDetailPaymentHistoryOwner(payment) {
      console.log("asdfffffsdfasdfasdfa", payment);
      this.$store.commit("MasterPayment/set_payment_history", payment);
      if (payment.status == "pending") {
        this.$router.push("/detail-payment-history-owner");
      } else if (payment.status == "success") {
        this.$router.push(`/succes-payment-status-owner/${payment.id}`);
      }
    },
  },
};
</script>

<style>
.bgCardTop {
  background-image: linear-gradient(to bottom right, #00c6ff, #0072ff);
}
.filterBrightness {
  filter: brightness(75%);
}
</style>
