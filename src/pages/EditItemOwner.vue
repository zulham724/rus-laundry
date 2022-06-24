<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page class="mbl-child">
      <div class="q-px-sm q-py-xl text-center">
        <q-avatar size="100px">
          <q-img src="~/assets/boxy.svg" />
        </q-avatar>
        <div class="text-weight-medium q-mt-sm" style="font-size: 24px">
          Edit Item
        </div>
      </div>
      <div class="bg-white" style="border-radius: 5px">
        <q-form class="q-px-sm">
          <div class="q-py-sm">
            <q-input
              label="Nama"
              color="black"
              v-model="this.updateCustomer.name"
              outlined
              type="search"
            >
            </q-input>
          </div>

          <div class="q-py-sm">
            <q-select
              outlined
              v-model="model"
              :options="this.serviceUnits"
              label="Hitungan Menurut"
            />
          </div>

          <div class="row q-pt-lg q-pb-sm">
            <div class="col text-right q-pr-sm">
              <q-btn
                class="q-px-md"
                style="background-color: #6295ff; border-radius: 10px"
                text-color="white"
                label="Simpan"
                @click="updateCustomerSave()"
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
      --></div>
    </q-page>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["itemid"],
  data() {
    return {
      model: ref(null),
      currentCustomer: null,
      updateCustomer: {
        name: "",
        email: "",
        home_address: "",
        contact_number: "",
      },
      serviceUnits: [],
    };
  },
  mounted() {
    this.getItemById();
    this.getServiceUnit();
  },
  methods: {
    print() {
      console.log("ini res print", this.updateCustomer);
    },
    init(init) {
      // console.log("ini res init", init);
      this.updateCustomer.name = init.name;
      this.updateCustomer.email = init.email;
      this.updateCustomer.home_address = init.home_address;
      this.updateCustomer.contact_number = init.contact_number;
    },

    getServiceUnit() {
      this.$store
        .dispatch("MasterBranchOrders/getServiceUnits")
        .then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            this.serviceUnits.push(res.data[i].name);
          }
          console.log("thsi.serviceunit", this.serviceUnits);
        })
        .catch((err) => {
          console.log("err");
        });
    },
    getItemById() {
      this.$store
        .dispatch("MasterBranchOrders/getItemById", this.itemid)
        .then((res) => {
          console.log("then getitembyid", res.data);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getItemById");
        });
    },
    updateCustomerSave() {
      this.currentCustomer.name = this.updateCustomer.name;
      this.currentCustomer.email = this.updateCustomer.email;
      this.currentCustomer.home_address = this.updateCustomer.home_address;
      this.currentCustomer.contact_number = this.updateCustomer.contact_number;
      console.log("ini res updateCustomer", this.currentCustomer);
      const payload = this.currentCustomer;
      this.$store
        .dispatch(`MasterBranchOrders/updateCustomer`, payload)
        .then((res) => {
          console.log("ini res updateCustomer", res);
          this.$q.notify({
            position: "bottom",
            message: "Berhasil mengubah data",
          });
          this.$router.back();
        })
        .catch((err) => {
          this.$q.notify({
            position: "bottom",
            message: "Gagal mengubah data",
          });
          console.log("terjadi kesalahan updateCustomer", err);
        });
    },
  },
};
</script>

<style></style>
