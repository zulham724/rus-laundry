<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <div class="fixed-top shadow-2 bg-white" style="z-index: 999">
        <q-header class="bg-transparent" elevated>
          <div class="row full-width q-py-sm bg-white justify-center">
            <div class="col-4 q-px-sm self-center">
              <q-btn
                flat
                round
                size="10px"
                @click="$router.push(`/detail-cabang-owner/${this.branchid}`)"
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
              style="font-size: 17px"
            >
              Karyawan
            </div>
            <div class="col-4 self-center text-right q-px-sm">
              <q-btn
                @click="$router.push(`/buat-karyawan-owner/${this.branchid}`)"
                no-caps
                dense
                style="font-size: 13px; color: #000"
              >
                <div>Tambah</div>
              </q-btn>
            </div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div class="q-px-sm q-py-sm">
          <q-input
            dense
            color="black"
            label="Cari Karyawan"
            rounded
            outlined
            v-model="search"
            @update:model-value="searchEmployee(search)"
            type="search"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <!-- <div v-for="dupe in 1" :key="dupe" class="q-px-sm q-py-sm">
          <q-card class="q-px-" style="border-radius: 10px">
            <div class="q-px-sm">
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/trg.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-8 text-h6 text-grey self-center">
                  <div style="font-size: 16px">Nama Karyawan</div>
                  <div style="font-size: 16px" class="text-black">
                    Angel Lista Putri
                  </div>
                </div>
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/png.png" />
                  </q-avatar>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar square>
                    <img src="~/assets/lct.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div style="font-size: 16px">Alamat karyawan</div>
                  <div style="font-size: 16px" class="text-black">
                    Wergu Kulon Rt5/1 Kudus
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar square>
                    <img src="~/assets/cll.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div style="font-size: 16px">Nomor Telephone</div>
                  <div style="font-size: 16px" class="text-black">
                    085349345768
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar square>
                    <img
                      src="~/assets/gmr.png"
                      style="width: 100%; height: 95%"
                    />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-5 text-h6 text-grey self-center">
                  <div style="font-size: 16px">Layanan</div>
                  <div style="font-size: 16px" class="text-black">57</div>
                </div>
                <div class="q-pl-sm col-5 text-h6 text-grey self-center">
                  <div class="row">
                    <div class="col-6">
                      <q-btn
                        @click="alert = true"
                        class="q-py-none q-px-xs"
                        flat
                        color="white"
                        text-color="blue"
                        label="Hapus"
                      />
                    </div>
                    <div class="col-6">
                      <q-btn
                        class="q-py-none q-px-md"
                        color="blue"
                        text-color="white"
                        label="Edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </div> -->
        <div v-if="this.branchEmployee">
          <div
            v-for="(item, i) in branchEmployee"
            :key="item.id"
            class="q-px-sm q-py-sm"
          >
            <q-card class="q-px-" style="border-radius: 10px">
              <div class="q-px-sm">
                <div class="row">
                  <div class="text-center self-center col-2">
                    <q-avatar square>
                      <img src="~/assets/customer-review.png" />
                    </q-avatar>
                  </div>
                  <div class="q-pl-sm col-8 text-h6 text-grey self-center">
                    <div style="font-size: 16px">Nama Karyawan</div>
                    <div style="font-size: 16px" class="text-black">
                      {{ item.name }}
                    </div>
                  </div>
                  <div class="text-center self-center col-2" v-if="i == 0">
                    <q-avatar>
                      <img src="~/assets/png.png" />
                    </q-avatar>
                  </div>
                </div>
                <div class="row">
                  <div class="text-center self-center col-2">
                    <q-avatar square>
                      <img src="~/assets/lct.png" />
                    </q-avatar>
                  </div>
                  <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                    <div style="font-size: 16px">Alamat karyawan</div>
                    <div style="font-size: 16px" class="text-black">
                      {{ item.home_address }}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="text-center self-center col-2">
                    <q-avatar square>
                      <img src="~/assets/cll.png" />
                    </q-avatar>
                  </div>
                  <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                    <div style="font-size: 16px">Nomor Telephone</div>
                    <div style="font-size: 16px" class="text-black">
                      {{ item.contact_number }}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="text-center self-center col-2">
                    <q-avatar square>
                      <img
                        src="~/assets/cargo.png"
                        style="width: 100%; height: 95%"
                      />
                    </q-avatar>
                  </div>
                  <div class="q-pl-sm text-h6 text-grey self-center">
                    <div style="font-size: 16px">Pesanan terlayani</div>
                    <div style="font-size: 16px" class="text-black">
                      {{ item.order_served_by_employee_count }}
                    </div>
                  </div>
                </div>
                <div class="row justify-end q-pb-sm">
                  <div
                    class="justify-end q-pl-sm text-h6 text-grey self-center"
                  >
                    <div class="row">
                      <div class="col-6">
                        <q-btn
                          @click="popupAlert(item.id, i)"
                          class="q-py-none q-px-xs"
                          flat
                          style="color: #017dff"
                          text-color="blue"
                          label="Hapus"
                          dense
                          no-caps
                        />
                      </div>
                      <div class="col-6">
                        <q-btn
                          no-caps
                          @click="
                            $router.push(`/edit-karyawan-owner/${item.id}`)
                          "
                          dense
                          flat
                          style="background-color: #017dff"
                          class="q-py-none q-px-md"
                          text-color="white"
                          label="Edit"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>

        <q-dialog v-model="alert">
          <q-card style="border-radius: 20px">
            <q-card-section class="text-center">
              <q-img src="~/assets/alert.png" style="width: 40%; height: 40%" />
            </q-card-section>
            <q-card-section class="text-center">
              <div class="text-weight-bold" style="font-size: 18px">
                Apakah anda benar- benar yakin untuk menghapus karyawan?
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Jika Yakin tekan Yakin, Jika tidak tekan Tidak
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Tidak" color="grey" v-close-popup />
              <q-btn
                flat
                label="Yakin"
                @click="confirmAlert()"
                color="red"
                v-close-popup
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["branchid"],
  data() {
    return {
      alert: ref(false),
      branchEmployee: [],
      branchEmployeeTemp: [],
      search: "",
      deleteProperties: {
        id: null,
        index: null,
      },
    };
  },
  mounted() {
    // console.log("branch", this.branchid);
    this.getBranchEmployee();
  },
  methods: {
    confirmAlert() {
      // this.removePackage(this.deleteProperties.index);
      this.deleteBranchEmployee(this.deleteProperties.id);
      // this.deleteProperties.index = null;
      this.deleteProperties.id = null;
    },
    popupAlert(id, index) {
      this.alert = true;
      this.deleteProperties.id = id;
      this.deleteProperties.index = index;
    },
    searchEmployee(value) {
      if (value == "") {
        this.branchEmployee = this.branchEmployeeTemp;
      }

      const needle = value.toLowerCase();
      this.branchEmployee = this.branchEmployeeTemp.filter(
        (v) => v.name.toLowerCase().indexOf(needle) > -1
      );
    },
    //get jumlah karyawan
    getBranchEmployee() {
      this.$store
        .dispatch("MasterBranchOrders/getBranchEmployee", this.branchid)
        .then((res) => {
          console.log("res getBranchEmployee", res.data);

          this.branchEmployee = this.branchEmployeeTemp = res.data;
        })
        .catch((err) => {
          console.log("terjadi kesalahan getBranchEmployee");
        });
    },
    removeEmployee(index) {
      this.branchEmployee.splice(index, 1);
    },
    //delete karyawan
    deleteBranchEmployee(id) {
      this.$store
        .dispatch("MasterBranchOrders/deleteBranchEmployee", id)
        .then((res) => {
          this.removeEmployee(this.deleteProperties.index);
          console.log("res deleteBranchEmployee", res.data);
          this.$q.notify({
            position: "bottom",
            message: "Berhasil menghapus karyawan",
          });
          // this.getBranchEmployee();
        })
        .catch((err) => {
          this.$q.notify({
            position: "bottom",
            message: "Gagal menghapus karyawan",
          });
          console.log("terjadi kesalahan deleteBranchEmployee", err);
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
