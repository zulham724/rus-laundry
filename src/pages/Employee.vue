<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
      <q-pull-to-refresh @refresh="refresh">
        <div class="row bg-white q-px-md q-py-lg">
          <div class="col-1 justify-center self-center">
            <!-- Button back -->
            <q-btn
              @click="$router.push('/menu')"
              no-caps
              dense
              flat
              style="color: white"
            >
              <q-icon size="20px" name="fas fa-arrow-left" style="color: #000">
              </q-icon>
            </q-btn>
          </div>
          <div class="col-11 justify-center self-center">
            <!-- Search -->
            <q-input
              class="full-width"
              dense
              v-model="search"
              @update:model-value="filterEmployee(search)"
              outlined
              rounded
              type="search"
              placeholder="Cari berdasarkan nama"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
        </div>

        <q-btn
          no-caps
          to="/attendance"
          flat
          class="full-width bg-white q-mt-md"
        >
          <div
            class="col-10 text-left text-weight-medium q-pl-sm"
            style="color: #756a6a; font-size: 10px"
          >
            Rekab absen
          </div>
          <div class="col-2 text-right">
            <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
          </div>
        </q-btn>

        <q-btn
          no-caps
          flat
          class="full-width bg-white q-mt-sm"
          to="/add-employee"
        >
          <div
            class="col-10 text-left text-weight-medium q-pl-sm"
            style="color: #756a6a; font-size: 10px"
          >
            Tambah Karyawan
          </div>
          <div class="col-2 text-right">
            <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
          </div>
        </q-btn>

        <!-- <q-btn
        no-caps
        flat
        class="full-width bg-white q-mt-sm"
        @click="$router.push('/customer')"
      >
        <div
          class="col-10 text-left text-weight-medium q-pl-sm"
          style="color: #756a6a; font-size: 10px"
        >
          Daftar Pelanggan
        </div>
        <div class="col-2 text-right">
          <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
        </div>
      </q-btn> -->

        <!-- <div class="row q-mt-md">
        <div class="col-8"></div>
        <div class="col-4 text-center">
          <div
            class="text-weight-medium"
            style="color: #756a6a; font-size: 10px"
          >
            Jumlah Karyawan
          </div>
          <div
            class="text-weight-medium"
            style="color: #756a6a; font-size: 15px"
          >
            {{ employees.length }}
          </div>
        </div>
      </div> -->

        <!-- Skeleton -->
        <div v-if="isLoad" class="row q-mt-md">
          <div class="col-6 text-center q-pa-md" v-for="n in 4" :key="n">
            <div
              class="bg-white text-center q-pa-md shadow-3"
              style="border-radius: 5px 5px 5px 5px"
            >
              <q-avatar size="60px">
                <q-skeleton type="QAvatar" />
              </q-avatar>
              <div class="text-weight-medium" style="font-size: 8px">
                <q-skeleton type="text" />
              </div>
              <div class="text-weight-medium">
                <div class="text-center" style="font-size: 8px">
                  <q-skeleton type="text" />
                </div>
              </div>
              <div class="text-weight-medium" style="font-size: 8px">
                <q-skeleton type="text" />
              </div>
              <div class="text-weight-medium" style="font-size: 8px">
                <q-skeleton type="text" />
              </div>
              <div class="text-weight-medium" style="font-size: 7px; color: ">
                <q-skeleton type="text" />
              </div>
              <div
                class="text-weight-medium text-right q-pb-sm"
                style="font-size: 8px; color: #888888"
              >
                <q-skeleton class="float-right" width="50px" type="text" />
              </div>
            </div>
          </div>
        </div>

        <div
          v-else-if="isLoad == false && employees.length"
          class="row q-mt-md"
        >
          <div
            class="col-6 text-center q-pa-md"
            v-for="employee in employees"
            :key="employee.id"
          >
            <div
              @click="$router.push(`/detail-employee/${employee.id}`)"
              class="bg-white text-center q-pa-md shadow-3"
              style="border-radius: 5px 5px 5px 5px"
            >
              <q-avatar size="60px">
                <q-img :src="`${$storageUrl}/${employee.avatar}`" no-spinner />
              </q-avatar>
              <div class="text-weight-medium" style="font-size: 8px">
                {{ employee.name }}
              </div>
              <div
                class="text-weight-medium q-mx-sm"
                style="
                  border-radius: 5px 5px 5px 5px;
                  background-color: #eaecfc;
                "
              >
                <div
                  class="text-center q-ma-xs"
                  style="font-size: 8px; color: #888888"
                >
                  Karyawan
                </div>
              </div>
              <div
                v-if="employee.contact_number"
                class="text-weight-medium"
                style="font-size: 8px; color: #888888"
              >
                {{ employee.contact_number }}
              </div>
              <div
                v-else
                class="text-weight-medium"
                style="font-size: 8px; color: #888888"
              >
                Belum punya nomor hp
              </div>
              <div
                class="text-weight-medium"
                style="font-size: 7px; color: #9ca4e4"
              >
                {{ employee.email }}
              </div>
              <div
                class="text-weight-medium text-right q-pt-sm"
                style="font-size: 8px; color: #888888"
              >
                Id : {{ employee.id }}
              </div>
            </div>
          </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <!-- @click="attendanceInEmployee()" -->
          <q-btn
            @click="$router.push('/attendanceScanPage')"
            class="q-pa-sm"
            fab
            style="
              background-image: linear-gradient(to top left, #f6d365, #fda085);
            "
          >
            <q-img no-spinner src="~/assets/button-bawah-employee.svg" />
          </q-btn>
        </q-page-sticky>
      </q-pull-to-refresh>
    </q-page>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Auth"]),
  },
  data() {
    return {
      search: "",
      employees: [],
      employees_temp: [],
      isLoad: false,
      dialogAttendance: false,
    };
  },

  methods: {
    getEmployees() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Employee/getEmployeesByShop", this.Auth.auth.shop.id)
          .then((res) => {
            this.employees = this.employees_temp = res.data.map((item) => {
              return item;
            });
            console.log("data", res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    update(value) {
      if (value == "") {
        this.employees = this.employees_temp;
      }

      const needle = value.toLowerCase();
      this.employees = this.employees_temp.filter(
        (v) => v.name.toLowerCase().indexOf(needle) > -1
      );
    },
    filterEmployee(val) {
      this.update(val);
    },

    refresh(done) {
      this.getEmployees().then((res) => {
        if (done) done();
      });
    },
    attendanceInEmployee() {
      cordova.plugins.barcodeScanner.scan(
        (result) => {
          this.$store
            .dispatch("Employee/attendanceIn", parseInt(result.text))
            .then((res) => {
              console.log(res.data);
              this.$router.push(`/employee`);
              this.$q.notify("Berhasil Absen");
            })
            .catch((err) => {
              this.dialogAttendance = true;
            });
        },
        (error) => {
          alert("Scanning failed: " + error);
        },
        {
          preferFrontCamera: false, // iOS and Android
          showFlipCameraButton: true, // iOS and Android
          showTorchButton: true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt: "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation: "potrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations: true, // iOS
          disableSuccessBeep: false, // iOS and Android
        }
      );
    },
  },
  mounted() {
    this.getEmployees();
    // this.dialogAttendance = true;
  },
};
</script>

<style></style>
