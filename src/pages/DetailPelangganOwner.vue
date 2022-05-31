<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container class="mbl-child">
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
              class="col-3 self-center text-weight-medium text-center text-black"
              style="font-size: 17px"
            >
              Pelanggan
            </div>
            <div class="col-5 self-center text-right q-px-sm">
              <q-btn
                @click="$router.push(`/buat-pelanggan-owner/${this.branchid}`)"
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
            label="Cari Pelanggan"
            rounded
            outlined
            v-model="search"
            @update:model-value="searchCustomer(search)"
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
                    <img src="~/assets/orbt.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-8 text-h6 text-grey self-center">
                  <div style="font-size: 16px">Nama Pelanggan</div>
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
                  <div style="font-size: 16px">Alamat Pelanggan</div>
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
                      src="~/assets/crg.png"
                      style="width: 100%; height: 95%"
                    />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-5 text-h6 text-grey self-center">
                  <div style="font-size: 16px">Pesanan</div>
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

        <div v-if="this.branchCustomers">
          <div
            v-for="(item, i) in branchCustomers"
            :key="item.id"
            class="q-px-sm q-py-sm"
          >
            <q-card class="q-px-" style="border-radius: 10px">
              <div class="q-px-sm">
                <div class="row">
                  <div class="text-center self-center col-2">
                    <q-avatar>
                      <img src="~/assets/orbt.png" />
                    </q-avatar>
                  </div>
                  <div class="q-pl-sm col-8 text-h6 text-grey self-center">
                    <div style="font-size: 16px">Nama Pelanggan</div>
                    <div style="font-size: 16px" class="text-black">
                      {{ item.name }}
                    </div>
                  </div>
                  <div v-if="i == 0" class="text-center self-center col-2">
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
                    <div style="font-size: 16px">Alamat Pelanggan</div>
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
                        src="~/assets/crg.png"
                        style="width: 100%; height: 95%"
                      />
                    </q-avatar>
                  </div>
                  <div class="q-pl-sm col-5 text-h6 text-grey self-center">
                    <div style="font-size: 16px">Jumlah Pesanan</div>
                    <div style="font-size: 16px" class="text-black">
                      {{ item.order_served_by_customer_count }}
                    </div>
                  </div>
                  <div class="q-pl-sm col-5 text-h6 text-grey self-center">
                    <div class="row">
                      <div class="col-6">
                        <q-btn
                          @click="popupAlert(item.id, i)"
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
                          @click="
                            this.$router.push(
                              `/edit-pelanggan-owner/${item.id}`
                            )
                          "
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
                Apakah anda benar- benar yakin untuk menghapus Pelanggan?
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none text-center">
              Jika Yakin tekan Yakin, Jika tidak maka tekan Tidak
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
import {mapState} from "vuex";

export default {
  props: ["branchid"],
  data() {
    return {
      alert: ref(false),
      branchCustomers: [],
      branchCustomersTemp: [],
      search: "",
      deleteProperties: {
        id: null,
        index: null,
      },
    };
  },

  computed: {
    ...mapState(["Auth"]),
  },

  mounted() {
    console.log("branch", this.branchid);
    this.getBranchCustomers();
    // this.getCustomerById();
  },
  methods: {
    addCustomer(){
      console.log("ini auth", this.Auth.auth)
      this.$router.push(`/buat-pelanggan-owner/${this.branchid}`)
    },
    popupAlert(id, index) {
      this.alert = true;
      this.deleteProperties.id = id;
      this.deleteProperties.index = index;
    },
    confirmAlert() {
      // this.removePackage(this.deleteProperties.index);
      this.deleteBranchCustomer(this.deleteProperties.id);
      // this.deleteProperties.index = null;
      this.deleteProperties.id = null;
    },
    removeCustomer(index) {
      this.branchCustomers.splice(index, 1);
    },
    deleteBranchCustomer(id) {
      this.$store
        .dispatch("MasterBranchOrders/deleteBranchCustomer", id)
        .then((res) => {
          this.removeCustomer(this.deleteProperties.index);
          this.$q.notify({
            position: "bottom",
            message: "Berhasil menghapus pelanggan",
          });
          console.log("res deleteBranchCustomer", res);
        })
        .catch((err) => {
          this.$q.notify({
            position: "bottom",
            message: "Gagal menghapus pelanggan",
          });
          console.log("terjadi kesalahan deleteBranchCustomer", err);
        });
    },
    searchCustomer(value) {
      if (value == "") {
        this.branchCustomers = this.branchCustomersTemp;
      }

      const needle = value.toLowerCase();
      this.branchCustomers = this.branchCustomersTemp.filter(
        (v) => v.name.toLowerCase().indexOf(needle) > -1
      );
    },
    //get jumlah customers
    getBranchCustomers() {
      this.$store
        .dispatch("MasterBranchOrders/getBranchCustomers", this.branchid)
        .then((res) => {
          console.log("res getBranchCustomers", res.data);
          this.branchCustomers = this.branchCustomersTemp = res.data;
        })
        .catch((err) => {
          console.log("terjadi kesalahan getBranchCustomers");
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
