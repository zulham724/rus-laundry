<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn
          no-caps
          class="q-pa-sm"
          ripple="false"
          flat
          style="color: white"
          @click="$router.push('/attendance')"
        >
          <q-icon size="20px" name="fas fa-arrow-left" style="color: #888888">
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
          <!-- Skeleton -->
          <div v-if="isLoad" class="row q-pt-md q-pl-sm">
            <!-- Circle skeleton -->
            <div class="col-5 q-py-md q-px-md">
              <q-skeleton type="circle" size="130px"></q-skeleton>
            </div>
            <div class="col-7 q-pt-md q-pl-md">
              <!-- Text grafik persentase skeleton -->
              <div class="text-weight-bold q-px-md">
                <q-skeleton type="text" />
              </div>
              <div class="q-pl-lg q-pt-md">
                <!-- Text skeleton Jumlah hadir -->
                <div
                  class="text-weight-bold"
                  style="color: #c0b9b9; font-size: 12px"
                >
                  <q-skeleton type="text" width="120px" />
                </div>
                <div class="row">
                  <div class="row full-width">
                    <!-- Circle red skeleton -->
                    <div class="col-1">
                      <q-skeleton type="circle" size="15px" />
                    </div>
                    <!-- Text persentase skeleton -->
                    <div class="col-2 text-left q-pl-xs">
                      <q-skeleton type="text" width="30px" />
                    </div>
                    <!-- Text day skeleton -->
                    <div class="col-5 q-pl-xl">
                      <q-skeleton type="text" width="40px" />
                    </div>
                  </div>
                </div>
                <!-- Text skeleton Jumlah hadir -->
                <div
                  class="text-weight-bold"
                  style="color: #c0b9b9; font-size: 12px"
                >
                  <q-skeleton type="text" width="80px" />
                </div>
                <div class="row">
                  <div class="row full-width">
                    <!-- Circle green skeleton -->
                    <div class="col-1">
                      <q-skeleton type="circle" size="15px" />
                    </div>
                    <!-- Text persentase skeleton -->
                    <div class="col-2 text-left q-pl-xs">
                      <q-skeleton type="text" width="30px" />
                    </div>
                    <!-- Text day skeleton -->
                    <div class="col-5 q-pl-xl">
                      <q-skeleton type="text" width="40px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="row q-pt-md">
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

          <!-- <q-btn no-caps flat class="full-width bg-white">
            <div
              class="col-10 text-left text-weight-medium q-pl-md"
              style="color: #888888"
            >
              Pilih bulan tahun
            </div>
            <div class="col-2 text-right">
              <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
            </div>
          </q-btn> -->

          <div
            class="row bg-white q-pl-lg q-mt-sm q-py-sm"
            style="color: #c9c9c9"
          >
            <div class="col-6">Data Absen</div>
            <div class="col-3">Masuk</div>
            <div class="col-3">Keluar</div>
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
                <div
                  class="col-6"
                  :style="`color: ${date.status ? '#35c07e' : '#df4141'}`"
                >
                  {{ date.date.format("D MMMM YYYY") }}
                </div>
                <div class="col-3 text-center text-weight-medium">
                  {{ date.in_at }}
                </div>
                <div class="col-3 text-center text-weight-medium">
                  {{ date.out_at ? date.out_at : "-" }}
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
  },
  methods: {
    toFixedHadir() {
      console.log("value", value);
    },
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
          let date2 = moment(attendance.created_at).format("DD-MM-YYYY");
          if (date1 == date2) {
            date.in_at = attendance.in_at
              ? moment(attendance.in_at).format("HH:mm")
              : null;
            date.out_at = attendance.out_at
              ? moment(attendance.out_at).format("HH:mm")
              : null;
            date.status = date.in_at && date.out_at ? true : false;
          }
        });
      });
      console.log("dates", this.dates);
    },
    getAttendances() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Attendance/getEmployeeAttendances", this.employeeid)
          .then((res) => {
            this.attendances = res.data;
            console.log("data kehadiran", this.attendances);
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
