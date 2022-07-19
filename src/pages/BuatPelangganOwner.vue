<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page class="mbl-child">
      <div class="q-px-sm q-py-xl text-center">
        <q-avatar size="100px">
          <q-img src="~/assets/klgcmr.png" />
        </q-avatar>
        <div class="text-weight-medium q-mt-sm" style="font-size: 24px">
          Tambah Pelanggan
        </div>
      </div>
      <div class="q-px-sm bg-white" style="border-radius: 5px">
        <q-form>
          <div class="q-py-sm">
            <q-input
              label="Nama"
              color="black"
              v-model="this.addCustomer.name"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <!-- <div class="q-py-sm">
            <q-input
              label="Email"
              color="black"
              v-model="this.addCustomer.email"
              outlined
              type="email"
            >
            </q-input>
          </div> -->
          <div class="q-py-sm">
            <q-input
              label="Alamat"
              color="black"
              v-model="this.addCustomer.home_address"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="No. Telp"
              color="black"
              v-model="this.addCustomer.contact_number"
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

      <!-- gmabar bawah -->
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
      addCustomer: {},
    };
  },
  mounted() {
    // console.log("ini", this.branchid);
  },
  methods: {
    print() {
      this.addCustomer.shop_id = this.branchid;
      console.log("ini data customer", this.addCustomer);
      this.createBranchCustomer();
    },
    createBranchCustomer() {
      this.$store
        .dispatch("MasterBranchOrders/createBranchCustomer", this.addCustomer)
        .then((res) => {
          console.log("ini res createBranchCustomer", res);
          this.$q.notify({
            position: "bottom",
            message: "Berhasil Menambah Pelanggan",
          });
          this.$router.back();
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
