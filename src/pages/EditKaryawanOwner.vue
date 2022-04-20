<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page class="mbl-child">
      <div class="q-px-sm q-py-xl text-center">
        <q-avatar size="100px">
          <q-img src="~/assets/klgcmr.png" />
        </q-avatar>
        <div class="text-weight-medium q-mt-sm" style="font-size: 24px">
          Edit Karyawan
        </div>
      </div>
      <div class="q-px-sm bg-white" style="border-radius: 5px">
        <q-form>
          <div class="q-py-sm">
            <q-input
              label="Nama"
              color="black"
              v-model="updateEmployee.name"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Email"
              color="black"
              v-model="updateEmployee.email"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Alamat"
              color="black"
              v-model="updateEmployee.home_address"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="No. Telp"
              color="black"
              v-model="updateEmployee.contact_number"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="row q-pt-lg q-pb-sm">
            <div class="col text-right q-pr-sm">
              <q-btn
                class="q-px-md"
                style="background-color: #6295ff; border-radius: 10px"
                text-color="white"
                label="Simpan"
                @click="update()"
              />
            </div>
            <div class="col text-left q-pl-sm">
              <q-btn
                @click="$router.back()"
                class="q-px-lg"
                style="background-color: #fff; border-radius: 10px"
                text-color="black"
                label="Cancel"
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
  props: ["employeeid"],
  data() {
    return {
      updateEmployee: {
        name: "",
        email: "",
        home_address: "",
        contact_number: "",
      },
      currentBranch: {},
    };
  },
  mounted() {
    console.log("emi", this.employeeid);
    this.getEmployeeById();
  },
  methods: {
    print() {
      console.log("res print", this.updateEmployee);
    },
    init(init) {
      this.updateEmployee.name = init.name;
      this.updateEmployee.email = init.email;
      this.updateEmployee.home_address = init.home_address;
      this.updateEmployee.contact_number = init.contact_number;
    },
    getEmployeeById() {
      this.$store
        .dispatch("MasterBranchOrders/getEmployeeById", this.employeeid)
        .then((res) => {
          console.log("ini res getEmployeeById", res.data);
          this.currentBranch = res.data;
          this.init(res.data);
        })
        .catch((err) => {
          console.log("terjadi kesalhaan getEmployeeById", err);
        });
    },
    update() {
      this.currentBranch.name = this.updateEmployee.name;
      this.currentBranch.email = this.updateEmployee.email;
      this.currentBranch.home_address = this.updateEmployee.home_address;
      this.currentBranch.contact_number = this.updateEmployee.contact_number;
      console.log("ini currentBranch", this.currentBranch);
      const payload = this.currentBranch;
      this.$store
        .dispatch(`MasterBranchOrders/updateEmployee`, payload)
        .then((res) => {
          console.log("ini res update", res);
          this.$q.notify({
            position: "bottom",
            message: "Berhasil mengedit data karyawan",
          });
          this.$router.back();
        })
        .catch((err) => {
          this.$q.notify({
            position: "bottom",
            message: "Gagal mengedit data karyawan",
          });
          console.log("terjadi kesalhaan update", err);
        });
    },
  },
};
</script>

<style></style>
