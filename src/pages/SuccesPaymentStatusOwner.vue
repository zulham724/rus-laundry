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
          <div class="text-center">
            <q-img
              src="~/assets/83962-mail-sent.gif"
              style="width: 40%; border-radius: 10px"
            />
          </div>
          <div class="text-bold text-center q-px-md">Pembayaran sukses</div>
          <div class="text-bold q-py-md q-px-md">Bukti Transfer</div>
          <div class="q-px-md">
            <q-item class="bg-blue">
              <q-item-section top avatar>
                <img src="~/assets/bni.png" style="width: 100%" />
              </q-item-section>

              <q-item-section>
                <q-item-label style="color: #fff">Bank BNI</q-item-label>
                <q-item-label caption style="color: #fff"
                  >a.n/ Ardian Rizky Rahmawan</q-item-label
                >
              </q-item-section>
            </q-item>
          </div>
          <div class="q-px-md">
            <q-card
              v-if="this.resSelectedPaymentHistory"
              flat
              class="q-py-sm q-px-sm"
              style="background-color: #f7f7f7; border-radius: 0px"
            >
              <div style="color: #c8c8c8">waktu terkirim</div>
              <div class="text-bold">
                {{
                  moment(this.resSelectedPaymentHistory.updated_at)
                    .locale("ID")
                    .format("dddd, DD MMMM YYYY")
                }}
              </div>
              <div class="text-center q-mt-md" style="color: #c8c8c8">
                Nominal
              </div>
              <div class="text-center" style="color: #0180ff">
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(this.resSelectedPaymentHistory.value)
                }}
              </div>
            </q-card>
          </div>
          <q-btn
            @click="$router.push('/payment-history-owner')"
            class="q-mt-sm q-mx-sm q-py-sm text-center"
            style="width: 96%; font-size: 18px"
            outline
            no-caps
            color="primary"
            label="Kembali"
          />
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
    };
  },
  computed: {
    selectedPaymentHistory() {
      return this.$store.getters["MasterPayment/getPaymentHistory"];
    },
  },
  mounted() {
    // console.log("cek auth", this.auth);
    // this.getAttendance();
    // console.log("iddd", this.paymentid);
    this.toCheckingPaymentStatusOwner();
    // this.getHistory();
  },
  methods: {
    moment,
    toCheckingPaymentStatusOwner() {
      this.$store
        .dispatch("MasterPayment/confirmPaymentPackage", this.paymentid)
        .then((res) => {
          console.log("ini res toCheckingPaymentStatusOwner", res.data);
          this.resSelectedPaymentHistory = res.data;
        })
        .catch((err) => {
          console.log("err", err);
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
