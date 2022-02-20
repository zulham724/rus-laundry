<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat dense @click="$router.push('/employee')">
          <q-icon name="fas fa-arrow-left" style="color: #888888"> </q-icon>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Rekap Absensi Karyawan</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #e5e5e5">
      <q-page>
        <q-pull-to-refresh @refresh="refresh">
          <div
            flat
            class="bg-white q-px-md q-mt-sm shadow-1"
            style="color: #888888"
          >
            Status
          </div>
          <div class="row q-mt-xs bg-white">
            <div class="col-4 bg-white">
              <!-- Skeleton -->
              <div v-if="isLoad" class="row justify-center q-my-lg q-mx-md">
                <q-skeleton type="circle" size="90px" />
              </div>

              <div v-else class="row justify-center">
                <q-circular-progress
                  show-value
                  class="text-black text-bold q-ma-md"
                  :value="((telah_absen / total_karyawan) * 100).toFixed(0)"
                  size="130px"
                  track-color="red-7"
                  color="green"
                >
                  <div class="text-center" style="font-size: 20px">
                    {{ ((telah_absen / total_karyawan) * 100).toFixed(0) }}

                    %
                  </div>
                </q-circular-progress>
              </div>
            </div>
            <div class="col-4 bg-white q-px-md self-center">
              <!-- Skeleton -->
              <div
                v-if="isLoad"
                class="text-weight-medium"
                style="color: #888888"
              >
                <q-skeleton type="text" />
              </div>

              <div v-else>
                <!-- Sudah Absen -->
                <div
                  v-if="!telah_absen"
                  class="text-weight-medium"
                  style="color: #888888"
                >
                  Tidak ada karyawan yang absen
                </div>
                <div v-else class="text-weight-medium" style="color: #888888">
                  {{ telah_absen }} dari {{ total_karyawan }} karyawan telah
                  absen
                </div>
              </div>
            </div>
            <div class="col-5 bg-white"></div>
          </div>
          <!-- <div class="q-my-xs">
            <q-btn
              no-caps
              flat
              class="bg-white"
              style="width: 100%"
              @click="buttonDetailAbsen()"
            >
              <div
                class="col-10 text-weight-medium text-left"
                style="color: #888888"
              >
                Lihat detail absen anda
              </div>

              <div class="col-2 text-right">
                <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
              </div>
            </q-btn>
          </div> -->
          <div
            flat
            class="bg-white q-px-md q-mt-sm text-weight-medium"
            style="color: #888888"
          >
            Karyawan lain
          </div>

          <!-- Skeleton -->
          <div v-if="isLoad">
            <div class="q-mt-xs row bg-white" v-for="a in 8" :key="a">
              <div class="col-3 self-center q-py-md q-pl-lg">
                <q-skeleton type="QAvatar" />
              </div>
              <div class="col-9 self-center">
                <div
                  class="text-weight-medium"
                  style="color: #888888; font-size: 15px"
                >
                  <q-skeleton type="text" class="q-mr-lg" />
                </div>
              </div>
            </div>
          </div>

          <div
            v-else
            @click="$router.push(`/attendance-details/${employee.id}`)"
            class="q-mt-xs row bg-white"
            v-for="employee in employees"
            :key="employee.id"
          >
            <div class="col-3 self-center q-py-md q-pl-lg">
              <q-avatar style="background-color: #f9f9f9">
                <q-icon color="grey" name="far fa-user" />
              </q-avatar>
            </div>
            <div class="col-9 self-center">
              <div
                class="text-weight-medium"
                style="color: #888888; font-size: 15px"
              >
                {{ employee.name }}
              </div>
            </div>
          </div>
        </q-pull-to-refresh>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Auth"]),
  },

  data() {
    return {
      employees: [],
      employees_temp: [],
      isLoad: false,
      total_karyawan: 0,
      telah_absen: 0,
    };
  },
  mounted() {
    this.getEmployees();
    this.getMonthlyAttendanceReport1();
    // alert("halo");
    // console.log(this.Auth.auth.shop.id)
  },
  methods: {
    buttonDetailAbsen() {
      this.$router.push("/attendance-details");
    },
    getEmployees() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Employee/getEmployeesByShop", this.Auth.auth.shop.id)
          .then((res) => {
            this.employees = this.employees_temp = res.data;
            resolve(res.data);
            console.log("ini employee", res.data)
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    getMonthlyAttendanceReport1() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch(
            "Attendance/monthlyAttendanceReport1",
            this.Auth.auth.shop.id
          )
          .then((res) => {
            this.telah_absen = res.data.telah_absen;
            this.total_karyawan = res.data.total_karyawan;
            // console.log(res.data.telah_absen);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },

    refresh(done) {
      this.getEmployees().then((res) => {
        if (done) done();
      });
      this.getMonthlyAttendanceReport1().then((res) => {
        if (done) done();
      });
    },
  },
};
</script>

<style></style>
