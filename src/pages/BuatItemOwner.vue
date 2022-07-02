<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page class="mbl-child">
      <div class="q-px-sm q-py-xl text-center">
        <q-avatar size="100px">
          <q-img src="~/assets/boxy.svg" />
        </q-avatar>
        <div class="text-weight-medium q-mt-sm" style="font-size: 24px">
          Buat Item Baru
        </div>
      </div>
      <div class="q-px-sm bg-white" style="border-radius: 5px">
        <q-form ref="form">
          <div class="q-py-sm">
            <q-input
              label="Masukkan Nama Item"
              color="black"
              v-model="this.addItem.name"
              :rules="[(val) => (val && val.length > 0) || 'Harus diisi']"
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
              :rules="[(val) => val || 'Harus diisi']"
              label="Hitungan Menurut"
              color="black"
              placeholder="Pilih Hitungan"
            />
          </div>

          <div class="row q-pt-lg q-pb-sm">
            <div class="col text-right q-pr-sm">
              <q-btn
                :loading="loading"
                :disable="loading"
                class="q-px-sm"
                style="background-color: #6295ff; border-radius: 10px"
                text-color="white"
                label="Tambahkan"
                @click="submit()"
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
import { ref } from "vue";

export default {
  props: ["branchid"],
  data() {
    return {
      model: ref(null),
      loading: false,
      addItem: {},
      serviceUnits: [],
      selectedServiceUnit: null,
    };
  },
  mounted() {
    this.getServiceUnit();
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          this.loading = true;
          const payload = {
            name: this.addItem.name,
            service_unit_id: this.selectedServiceUnit.value,
            shop_id: this.branchid,
          };
          this.$store
            .dispatch("MasterBranchServiceCategory/store", payload)
            .then((res) => {
              this.$router.push(`/detail-item-owner/${this.branchid}`);
            })
            .finally(() => {
              this.loading = false;
            });
        }
      });
    },
    getServiceUnit() {
      this.$store
        .dispatch("MasterBranchOrders/getServiceUnits")
        .then((res) => {
          this.serviceUnits = res.data.map((item) => {
            return {
              label: item.name,
              value: item.id,
            };
          });
          console.log("thsi.serviceunit", this.serviceUnits);
        })
        .catch((err) => {
          console.log("err");
        });
    },
  },
};
</script>

<style></style>
