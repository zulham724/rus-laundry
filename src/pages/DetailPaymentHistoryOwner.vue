<template>
  <q-layout>
    <q-page-container>
      <div class="fixed-top shadow-2 bg-white" style="z-index: 999">
        <q-header class="bg-transparent" elevated>
          <div class="row full-width q-py-sm bg-white justify-center">
            <div class="col-3 q-px-sm self-center">
              <q-btn
                flat
                round
                size="10px"
                @click="$router.push('/payment-history-owner')"
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
              class="col-7 self-center text-weight-medium text-center text-black"
              style="font-size: 20px"
              @click="checkPaymentStatus()"
            >
              Detail Pembayaran
            </div>
            <div class="col-2 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <q-list class="q-px-sm q-py-sm">
          <div class="q-my-sm">
            <q-item>
              <q-item-section top avatar>
                <img src="~/assets/bni.png" style="width: 100%" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Bank BNI</q-item-label>
                <q-item-label caption>a.n/ Ardian Rizky Rahmawan</q-item-label>
              </q-item-section>
            </q-item>
            <q-input disable filled v-model="noRekening" />
            <div class="q-py-sm" style="color: #c8c8c8">
              Total nominal transfer
            </div>
            <q-input disable filled v-model="selectedPaymentPackagePrice" />
            <q-card
              flat
              class="q-mt-sm q-px-sm q-py-sm text-white text-center"
              style="background-color: #F4DE67"
              ><div>Pastikan nominal sesuai</div></q-card
            >
            <q-card
              flat
              class="q-mt-sm q-px-sm q-py-sm"
              style="background-color: #f7f7f7"
              ><div style="color: #c8c8c8">
                Transfer sebelum
                <strong style="color: #000">{{ this.deadLineTime }}</strong>
                Atau transaksimu akan dibatalkan secara otomatis oleh sistem
              </div></q-card
            >
          </div>
        </q-list>
        <q-card
          class="bg-white full-width q-px-sm q-py-sm"
          style="position: absolute; bottom: 0"
          ><div>
            Sudah transfer melalui ATM/internet/mobile banking? Klik tombol
            dibawah untuk mengonfirmasi. Flip tidak memproses transaksi yang
            bleum dikonfirmasi
          </div>
          <q-btn
            flat
            @click="
              $router.push(
                `/checking-payment-status-owner/${this.selectedPaymentPackage.id}`
              )
            "
            class="q-mt-sm q-py-md full-width"
            style="background-color: #0180ff; color: #fff"
            no-caps
            label="Konfirmasi Pembayaran"
        /></q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import moment from "moment";

export default {
  props: ["paymentid"],
  data() {
    return {
      alert: ref(false),
      attendance: [],
      history: [],
      noRekening: "0262628673",
      selectedPaymentPackage: null,
      selectedPaymentPackagePrice: null,
      deadLineTime: null,
    };
  },
  computed: {
    auth() {
      return this.$store.getters["Auth/auth"];
    },
    selectedPaymentHistory() {
      return this.$store.getters["MasterPayment/getPaymentHistory"];
    },
  },
  mounted() {
    this.selectedPaymentPackage = this.selectedPaymentHistory;
    this.selectedPaymentPackagePrice = this.selectedPaymentHistory.value;
    console.log("aaa", this.selectedPaymentPackage);
    this.timeTest();
  },
  methods: {
    moment,

    timeTest() {
      let time = moment().locale("id").format("dddd, MMMM Do YYYY, 23:59:59");
      console.log("ini moment sebelum hari selesai", time);
      this.deadLineTime = time;
    },
    toCheckingPaymentStatusOwner() {
      this.$store
        .dispatch(
          "MasterPayment/confirmPaymentPackage",
          this.selectedPaymentPackage.id
        )
        .then((res) => {
          console.log("ini res toCheckingPaymentStatusOwner", res.data);
          this.$router.push(
            `/checking-payment-status-owner/${this.selectedPaymentPackage.id}`
          );
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    checkPaymentStatus() {
      console.log("selectedPaymentHistory", this.selectedPaymentHistory);
    },

    // getHistoryById
  },
};
</script>

<style>
.bgCard {
  background-image: linear-gradient(to left, #74b6ff, #00bef8);
}
</style>
