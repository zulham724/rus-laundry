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
              v-model="this.updateItem.name"
              outlined
              type="search"
            >
            </q-input>
          </div>

          <div class="q-py-sm">
            <q-select
              outlined
              v-model="selectedServiceUnit"
              :options="serviceUnits"
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
                @click="updateItemSave()"
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
      currentItem: null,
      updateItem: {},
      serviceUnits: [],
      selectedServiceUnit: null,
      itemById: null,
    };
  },
  mounted() {
    this.getServiceUnit().then((res) => {
      this.getItemById();
    });
  },
  methods: {
    print() {
      console.log("ini res print", this.updateCustomer);
    },
    init() {
      this.updateItem = {
        ...this.itemById,
        service_unit: {
          ...this.itemById.service_unit,
        },
      };
    },

    getServiceUnit() {
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch("MasterBranchOrders/getServiceUnits")
          .then((res) => {
            const { data } = res;
            this.serviceUnits = data.map((item) => {
              return {
                label: item.name,
                value: item.id,
              };
            });
            resolve(this.serviceUnits);
          })
          .catch((err) => {
            console.log("err ini");
            reject(err);
          });
      });
    },
    getItemById() {
      this.$store
        .dispatch("MasterBranchOrders/getItemById", this.itemid)
        .then((res) => {
          this.itemById = res.data;
          this.selectedServiceUnit = this.serviceUnits.find(
            (item) => item.value === this.itemById.service_unit_id
          );
          console.log(
            "then getitembyid",
            res.data,
            "dan",
            this.selectedServiceUnit
          );
        })
        .catch((err) => {
          console.log("terjadi kesalahan getItemById");
        })
        .finally(() => {
          this.init();
        });
    },
    updateItemSave() {
      const payload = this.updateItem;
      payload.service_unit_id = this.selectedServiceUnit.value;
      // console.log("iini payload", payload);
      this.$store
        .dispatch(`MasterBranchOrders/updateItem`, payload)
        .then((res) => {
          console.log("ini res updateCustomer", res.data);
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
