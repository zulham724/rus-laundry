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
              src="~/assets/97670-tomato-error.gif"
              style="width: 40%; border-radius: 10px"
            />
          </div>
          <div class="text-bold text-center q-px-md">Pembayaran gagal</div>
          <div class="text-bold q-py-md q-px-md">Bukti Transfer</div>

          <div class="q-px-md">
            <q-card
              flat
              class="q-py-sm q-px-sm"
              style="background-color: #f7f7f7; border-radius: 0px"
            >
              <div style="color: #c8c8c8">
                Pembayaran tidak ditemukan
                <strong style="color: #000"
                  >Apabila anda sudah melakukan transfer</strong
                >
                dan tidak terdeteksi dengan sistem silahkan bisa menghubungi
                admin kami dengan
                <strong style="color: #000">klik tombol di bawah</strong>
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
          <q-btn
            @click="contactUs()"
            class="q-mt-sm q-mx-sm q-py-sm text-center"
            style="width: 96%; font-size: 18px"
            no-caps
            color="primary"
            label="Hubungi Kami"
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
  },
  mounted() {
    // console.log("cek auth", this.auth);
    // this.getAttendance();
    this.getHistory();
  },
  methods: {
    moment,
    // getAttendance() {
    //   this.$store
    //     .dispatch("Attendance/getAttendanceOwner", this.auth.id)
    //     .then((res) => {
    //       this.attendance = res.data;
    //       // console.log("cek attendance", this.attendance);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     })
    //     .finally(() => {});
    // },
    contactUs() {
      window.open("https://laundrydigital.co.id/konfirmasi", "_system");
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
