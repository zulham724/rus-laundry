<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn
          no-caps
          class="q-pa-md"
          ripple="false"
          flat
          style="color: white"
          to="/attendance"
        >
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #888888">
          </q-icon>
        </q-btn>
        <div class="text-subtitle2" style="color: #808080; margin-left: 15px">
          Detail Absen
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-mt-xs">
        <q-pull-to-refresh @refresh="init">
          <div class="row q-pt-md">
            <div class="col-5 q-pl-sm">
              <q-circular-progress
                show-value
                class="text-black text-bold q-ma-md"
                :value="
                  (dates.filter((date) => date.status).length / dates.length) *
                  100
                "
                size="130px"
                track-color="red-7"
                color="green"
              >
                <div class="text-center" style="font-size: 26px">
                  {{ dates.length }} <br />
                  Hari
                </div>
              </q-circular-progress>
            </div>
            <div class="col-7 q-pt-md q-pl-md">
              <div class="text-weight-bold">Grafik Persentase Kehadiran</div>
              <div class="q-pl-lg q-pt-md">
                <div
                  class="text-weight-bold"
                  style="color: #c0b9b9; font-size: 12px"
                >
                  Jumlah Tidak Hadir
                </div>
                <div class="row">
                  <div class="col-6">
                    <q-avatar
                      class="bg-red q-mr-xs float-left"
                      size="15px"
                      style="color: #8d8d8d"
                    >
                    </q-avatar>
                    <div
                      class="float-left"
                      v-if="dates.filter((date) => !date.status).length"
                    >
                      {{
                        (dates.filter((date) => !date.status).length /
                          dates.length) *
                        100
                      }}%
                    </div>
                    <div v-else>0%</div>
                  </div>
                  <div class="col-6" style="color: #c9c9c9">
                    {{ dates.filter((date) => !date.status).length }}
                    Hari
                  </div>
                </div>

                <div
                  class="text-weight-bold q-pt-xs"
                  style="color: #c0b9b9; font-size: 12px"
                >
                  Jumlah Hadir
                </div>
                <div class="row">
                  <div class="col-6">
                    <q-avatar
                      class="bg-green q-mr-xs float-left"
                      size="15px"
                      style="color: #8d8d8d"
                    >
                    </q-avatar>
                    <div
                      class="float-left"
                      v-if="dates.filter((date) => date.status).length"
                    >
                      {{
                        (dates.filter((date) => date.status).length /
                          dates.length) *
                        100
                      }}%
                    </div>
                    <div v-else>0%</div>
                  </div>
                  <div class="col-6" style="color: #c9c9c9">
                    {{ dates.filter((date) => date.status).length }} Hari
                  </div>
                </div>
              </div>
            </div>
          </div>

          <q-btn no-caps flat class="full-width bg-white" @click="buttonDate()">
            <div
              class="col-10 text-left text-weight-medium q-pl-md"
              style="color: #888888"
            >
              Pilih bulan tahun
            </div>
            <div class="col-2 text-right">
              <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
            </div>
          </q-btn>

          <div
            class="row bg-white q-pl-lg q-mt-sm q-py-sm"
            style="color: #c9c9c9"
          >
            Data Absen
          </div>
          <!-- Skeleton -->
          <div v-if="isLoad" class="row full-width">
            <q-list
              separator
              class="full-width q-mt-xs bg-white q-pl-md q-pr-xs"
            >
              <q-item dense v-for="n in 15" :key="n">
                <div class="col-3 text-left" style="color: #c9c9c9">
                  <q-skeleton type="text" />
                </div>
                <div class="col-6"></div>
                <div
                  class="col-3 text-right text-weight-medium"
                  style="color: #35c07e"
                >
                  <q-skeleton type="text" />
                </div>
              </q-item>
            </q-list>
          </div>

          <div v-else>
            <q-list separator class="q-mt-xs bg-white q-pl-md q-pr-xs">
              <q-item dense v-for="date in dates" :key="date.date">
                <div class="col-9" style="color: #c9c9c9">
                  {{ date.date.format("D MMMM YYYY") }}
                </div>
                <div
                  v-if="date.status"
                  class="col-3 text-center text-weight-medium"
                  style="color: #35c07e"
                >
                  Berhasil Absen
                </div>
                <div
                  v-else
                  class="col-3 text-center text-weight-medium"
                  style="color: #df4141"
                >
                  Tidak Absen
                </div>
              </q-item>
            </q-list>
          </div>

          <q-dialog v-model="dialogDate" position="bottom">
            <q-card class="q-pt-md" style="border-radius: 20px 20px 0px 0px">
              <div class="q-px-sm">
                <div class="row text-weight-medium" style="color: #888888">
                  Bulan Tahun
                </div>
                <q-separator></q-separator>

                <q-date v-model="model"></q-date>
              </div>
            </q-card>
          </q-dialog>
        </q-pull-to-refresh>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import moment from "moment";
import { date } from "quasar";

export default {
  props: ["employeeid"],

  data() {
    return {
      attendances: [],
      value: 81,
      dialogDate: false,
      model: "2022/01/14",
      dates: [],
      isLoad: false,
    };
  },
  mounted() {
    this.init();
    // alert("halo");
    // console.log(this.Auth.auth.shop.id)
  },
  methods: {
    init(done) {
      this.getAttendances()
        .then((res) => {
          this.generateDates();
          this.pairingAttendacesDates();
        })
        .finally(() => {
          if (done) done();
        });
    },
    //berfungsi untuk membuat array tanggalan dari tanggal saat ini sampai dengan tanggal 1
    generateDates() {
      let date = moment().format("D");
      this.dates = [];
      for (let index = date; index > 0; index--) {
        this.dates.push({
          date: moment(
            `${moment().format("YYYY")}-${moment().format("MM")}-${index}`
          ),
          status: false,
        });
      }
    },
    //berfungsi untuk mencocokkan tanggal absen dengan list tanggal (dates)
    pairingAttendacesDates() {
      this.dates.forEach((date) => {
        this.attendances.forEach((attendance) => {
          let date1 = moment(date.date).format("DD-MM-YYYY");
          let date2 = moment(attendance.in_at).format("DD-MM-YYYY");
          if (date1 == date2) {
            date.status = true;
          }
        });
      });
    },
    getAttendances() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Attendance/getEmployeeAttendances", this.employeeid)
          .then((res) => {
            this.attendances = res.data;
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    moment() {
      return moment();
    },
    buttonDate() {
      this.dialogDate = true;
    },
  },
};
</script>

<style></style>
