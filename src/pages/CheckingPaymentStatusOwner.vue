<template>
  <q-layout>
    <q-page-container>
      <div class="fixed-top shadow-2 bg-white" style="z-index: 999">
        <q-header class="bg-transparent" elevated>
          <div class="row full-width q-py-sm bg-white justify-center">
            <div class="col-2 q-px-sm self-center">
              <!--
              <q-btn flat round size="10px" @click="$router.back()">
                <q-avatar
                  size="20px"
                  icon="fas fa-arrow-left"
                  style="color: #888888"
                >
                </q-avatar>
              </q-btn>
              -->
            </div>
            <div
              class="col-8 self-center text-weight-medium text-center text-black"
              style="font-size: 20px"
            >
              Detail Pembayaran
            </div>
            <div class="col-2 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div>
          <div class="text-bold text-center q-py-md q-px-md">
            Sistem sedang mengecek transaksimu
          </div>
          <div class="text-center">
            <q-img
              src="~/assets/95778-check-yes-search.gif"
              style="width: 40%; border-radius: 10px"
            />
          </div>
          <div class="text-bold text-center q-py-md q-px-md">
            setelah transaksi berhasil maka paket yang anda beli dapat dipakai
          </div>
          <!--
          <q-card
            flat
            class="q-py-sm q-mx-sm q-px-sm"
            style="background-color: #f7f7f7"
          >
            <div style="color: #c8c8c8">
              Unggah bukti transfer untuk mempermudah transaksi dengan klik
              tombol di bawah
            </div>
          </q-card>
          -->
        </div>
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
      resSelectedPaymentHistory: null,
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
    console.log("paymentid", this.paymentid);
    // console.log("cek auth", this.auth);
    // this.getAttendance();
    // this.getHistory();
    this.toCheckingPaymentStatusOwner();
    this.timeTest();
    this.notify();
  },
  methods: {
    moment,
    notify() {
      this.$q.notify({
        position: "bottom",
        message: "Pesanan sedang diproses, Harap tunggu...",
      });
    },
    timeTest() {
      let time = moment().locale("id").format("dddd, MMMM Do YYYY, 23:59:59");
      console.log("ini moment sebelum hari selesai", time);
      this.deadLineTime = time;
    },
    toCheckingPaymentStatusOwner() {
      this.$store
        .dispatch("MasterPayment/confirmPaymentPackage", this.paymentid)
        .then((res) => {
          console.log("ini res toCheckingPaymentStatusOwner", res.data);
          this.resSelectedPaymentHistory = res.data;
          this.setTimer();
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    setTimer() {
      setTimeout(() => {
        if (this.resSelectedPaymentHistory.status == "pending") {
          // console.log("6 dertik");
          this.$router.push("/failed-payment-status-owner");
          this.updateAuth();
        } else if (this.resSelectedPaymentHistory.status == "success") {
          this.$router.push(`/succes-payment-status-owner/${this.paymentid}`);
          this.updateAuth();
        }

        // if(this.){}
      }, 5000);
    },
    updateAuth() {
      this.$store
        .dispatch("Auth/reloadAuth")
        .then((res) => {
          console.log("succes reload auth");
        })
        .catch((err) => {
          console.log("terjadi kesalahan reload auth", err);
        });
    },
    getHistory() {
      this.$store
        .dispatch("MasterPayment/getHistory")
        .then((res) => {
          this.history = res.data;
          console.log("res getHistory", res.data);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getHistory", err);
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
