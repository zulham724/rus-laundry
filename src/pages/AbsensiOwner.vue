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
            >
              Absensi
            </div>
            <div class="col-4 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div class="q-px-sm q-py-sm" v-for="item in attendance" :key="item.id">
          <div class="text-weight-bold q-px-sm" style="font-size: medium">
            {{ item.shop.name }}
          </div>
          <q-card
            v-for="employee in item.shop.employees"
            :key="employee.id"
            style="border-radius: 10px"
            class="q-ma-sm"
          >
            <div class="q-px-sm q-py-xs">
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/trg.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 self-center">
                  <div
                    class="text-grey text-weight-bold"
                    style="font-size: medium"
                  >
                    Nama Karyawan
                  </div>
                  <div
                    class="text-black text-weight-medium"
                    style="font-size: medium"
                  >
                    {{ employee.name }}
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/cal.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 self-center">
                  <div
                    class="text-grey text-weight-bold"
                    style="font-size: medium"
                  >
                    Tanggal Absensi
                  </div>
                  <div
                    v-if="employee.attendances.length"
                    class="text-black text-weight-medium"
                    style="font-size: medium"
                  >
                    {{
                      moment(employee.attendances[0].created_at)
                        .locale("id")
                        .format("LL")
                    }}
                  </div>
                  <!-- Belum Absen -->
                  <div
                    v-else
                    class="text-black text-weight-medium"
                    style="font-size: medium"
                  >
                    Belum Absen
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/tm.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 self-center">
                  <div
                    class="text-grey text-weight-bold"
                    style="font-size: medium"
                  >
                    Absen Berangkat
                  </div>
                  <div
                    v-if="employee.attendances.length"
                    class="text-black text-weight-medium"
                    style="font-size: medium"
                  >
                    {{
                      employee.attendances[0].in_at
                        ? moment(employee.attendances[0].in_at)
                            .locale("id")
                            .format("LT")
                        : null
                    }}
                  </div>
                  <!-- Belum Absen -->
                  <div
                    v-else
                    class="text-black text-weight-medium"
                    style="font-size: medium"
                  >
                    Belum Absen
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/tm.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 self-center">
                  <div
                    class="text-grey text-weight-bold"
                    style="font-size: medium"
                  >
                    Absen Pulang
                  </div>
                  <div
                    v-if="employee.attendances.length"
                    class="text-black text-weight-medium"
                    style="font-size: medium"
                  >
                    {{
                      employee.attendances[0].out_at
                        ? moment(employee.attendances[0].out_at)
                            .locale("id")
                            .format("LT")
                        : null
                    }}
                  </div>
                  <!-- Belum Absen -->
                  <div
                    v-else
                    class="text-black text-weight-medium"
                    style="font-size: medium"
                  >
                    Belum Absen
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </div>

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
    };
  },
  computed: {
    auth() {
      return this.$store.getters["Auth/auth"];
    },
  },
  mounted() {
    // console.log("cek auth", this.auth);
    this.getAttendance();
  },
  methods: {
    moment,
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
  },
};
</script>

<style>
.bgCard {
  background-image: linear-gradient(to left, #74b6ff, #00bef8);
}
</style>
