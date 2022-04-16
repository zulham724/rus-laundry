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
                @click="$router.push('/make-an-order')"
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
              Pelanggan
            </div>
            <div class="col-4 self-center text-right q-px-sm"></div>
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
            type="search"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div v-for="dupe in 1" :key="dupe" class="q-px-sm q-py-sm">
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
        </div>

        <div v-if="this.branchCustomers">
          <div
            v-for="item in branchCustomers"
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
                  <div class="text-center self-center col-2"></div>
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
                      {{ item.home_adress }}
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
                    <div style="font-size: 16px">Pesanan</div>
                    <div style="font-size: 16px" class="text-black">
                      57 (fake)
                    </div>
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

export default {
  props: ["branchid"],
  data() {
    return {
      alert: ref(false),
      branchCustomers: [],
    };
  },
  mounted() {
    console.log("branch", this.branchid);
    this.getBranchCustomers();
  },
  methods: {
    //get jumlah customers
    getBranchCustomers() {
      this.$store
        .dispatch("MasterBranchOrders/getBranchCustomers", this.branchid)
        .then((res) => {
          console.log("res getBranchCustomers", res.data);
          this.branchCustomers = res.data;
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
