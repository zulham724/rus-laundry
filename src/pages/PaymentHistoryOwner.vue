<template>
  <q-layout>
    <q-page-container>
      <div class="fixed-top shadow-2 bg-white" style="z-index: 999">
        <q-header class="bg-transparent" elevated>
          <div class="row full-width q-py-sm bg-white justify-center">
            <div class="col-4 q-px-sm self-center">
              <q-btn
                flat
                round
                size="10px"
                @click="$router.push('/home-owner')"
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
              style="font-size: 20px"
              @click="checkSelectedPayment()"
            >
              Riwayat
            </div>
            <div class="col-4 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <q-list class="q-px-sm">
          <div
            @click="toDetailPaymentHistoryOwner(item)"
            class="q-my-sm"
            v-for="item in history"
            :key="item.id"
          >
            <q-item>
              <q-item-section top avatar>
                <q-avatar rounded>
                  <img src="~/assets/history.svg" style="width: 70%" />
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label style="color: #0e185f">{{
                  item.package_user.package.name
                }}</q-item-label>
                <q-item-label caption style="color: #0e185f">{{
                  moment(item.created_at)
                    .locale("ID")
                    .format("dddd, DD MMMM YYYY")
                }}</q-item-label>
                <q-item-label caption style="color: #0e185f">{{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(item.package_user.package.price)
                }}</q-item-label>
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption style="color: #0e185f">{{
                  item.status
                }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
          </div>
        </q-list>

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
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import moment from "moment";

export default {
  data() {
    return {
      alert: ref(false),
      attendance: [],
      history: [],
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
    console.log("cek auth", this.auth);
    // this.getAttendance();
    this.getHistory();
  },
  methods: {
    moment,
    checkSelectedPayment() {
      console.log("checkSelectedPayment", this.selectedPaymentHistory);
    },
    toDetailPaymentHistoryOwner(payment) {
      // console.log("asdfffffsdfasdfasdfa", payment);
      this.$store.commit("MasterPayment/set_payment_history", payment);
      if (payment.status == "pending") {
        // console.log("statusss1", payment);

        this.$router.push("/detail-payment-history-owner");
      } else if (payment.status == "success") {
        // console.log("statusss2", payment);
        this.$router.push(`/succes-payment-status-owner/${payment.id}`);
      }
      // this.$router.push("/detail-payment-history-owner");
    },

    getAttendance() {
      this.$store
        .dispatch("Attendance/getAttendanceOwner", this.auth.id)
        .then((res) => {
          this.attendance = res.data;
          // console.log("cek attendance", this.attendance);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {});
    },
    getHistory() {
      this.$store
        .dispatch("MasterPayment/getHistory")
        .then((res) => {
          this.history = res.data;
          // console.log("res getHistory", res.data);
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
