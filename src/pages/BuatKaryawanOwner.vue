<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page class="mbl-child">
      <div class="q-px-sm q-py-xl text-center">
        <q-avatar size="100px">
          <q-img src="~/assets/klgcmr.png" />
        </q-avatar>
        <div class="text-weight-medium q-mt-sm" style="font-size: 24px">
          Tambah Karyawan
        </div>
      </div>
      <div class="q-px-sm bg-white" style="border-radius: 5px">
        <q-form>
          <div class="q-py-sm">
            <q-input
              label="Nama Karyawan"
              color="black"
              v-model="addKaryawan.name"
              outlined
              type="text"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Email"
              color="black"
              v-model="addKaryawan.email"
              outlined
              type="email"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Alamat"
              color="black"
              v-model="addKaryawan.home_address"
              outlined
              type="text"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="No. Telp"
              color="black"
              v-model="addKaryawan.contact_number"
              outlined
              type="number"
            >
            </q-input>
          </div>
          <div class="row q-pt-lg q-pb-sm">
            <div class="col text-right q-pr-sm">
              <q-btn
                class="q-px-sm"
                style="background-color: #6295ff; border-radius: 10px"
                text-color="white"
                label="Tambahkan"
                @click="print()"
              />
            </div>
            <div class="col text-left q-pl-sm">
              <q-btn
                class="q-px-lg"
                style="background-color: #fff; border-radius: 10px"
                text-color="black"
                label="Cancel"
                @click="$router.back()"
              />
            </div>
          </div>
        </q-form>
      </div>
      <!--
      <div
        style="
          position: absolute;
          z-index: -1;
          vertical-align: text-bottom;
          width: 100%;
        "
      >
        <q-img src="~/assets/br.png" />
      </div>
      -->
    </q-page>
  </q-layout>
</template>

<script>
export default {
  props: ["branchid"],
  data() {
    return {
      addKaryawan: {},
    };
  },
  mounted() {
    console.log("bid", this.branchid);
  },
  methods: {
    print() {
      this.addKaryawan.shop_id = this.branchid;
      console.log("ini res print", this.addKaryawan);
      this.createBranchEmployee();
    },
    createBranchEmployee() {
      this.$store
        .dispatch("MasterBranchOrders/createBranchEmployee", this.addKaryawan)
        .then(() => {
          console.log("ini res createBranchEmployee", this.addKaryawan);
          this.$router.push(`/detail-karyawan-owner/${this.branchid}`);
          this.$q.notify({
            position: "bottom",
            message: "Berhasil menambah karyawan",
          });
        })
        .catch((err) => {
          this.$q.notify({
            position: "bottom",
            message: "Email sudah digunakan",
          });
          console.log("terjadi kesalahan createBranchCustomer", err);
        });
    },
  },
};
</script>

<style></style>
