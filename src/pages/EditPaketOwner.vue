<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page class="mbl-child">
      <div class="q-px-sm q-py-xl text-center">
        <q-avatar size="100px">
          <q-img src="~/assets/ktab.png" />
        </q-avatar>
        <div class="text-weight-medium q-mt-sm" style="font-size: 24px">
          Edit Paket
        </div>
      </div>
      <div class="q-px-sm bg-white" style="border-radius: 5px">
        <q-form>
          <div class="q-py-sm">
            <q-input
              label="Nama Paket"
              color="black"
              v-model="this.dataService.name"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-select
              outlined
              v-model="model"
              :options="options"
              label="Hitungan menurut"
            />
          </div>
          <div class="q-py-sm">
            <q-input
              label="Harga"
              color="black"
              v-model="this.dataService.price"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Waktu Pengerjaan"
              v-model="this.dataService.process_time"
              color="black"
              outlined
              type="search"
            >
              <template v-slot:append>
                <div style="font-size: 12px">/Jam</div>
              </template>
            </q-input>
          </div>
          <div class="row q-pt-lg q-pb-sm">
            <div class="col text-right q-pr-sm">
              <q-btn
                class="q-px-md"
                style="background-color: #6295ff; border-radius: 10px"
                text-color="white"
                label="Simpan"
                @click="updateService()"
              />
            </div>
            <div class="col text-left q-pl-sm">
              <q-btn
                class="q-px-lg"
                style="background-color: #fff; border-radius: 10px"
                text-color="black"
                label="Cancel"
              />
            </div>
          </div>
        </q-form>
      </div>
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
    </q-page>
  </q-layout>
</template>

<script>
export default {
  props: ["serviceid"],
  data() {
    return {
      dataService: {},
    };
  },
  mounted() {
    console.log("ini serviceid", this.serviceid);

    this.getServiceById();
  },
  methods: {
    getServiceById() {
      this.$store
        .dispatch("MasterBranchOrders/getServiceById", this.serviceid)
        .then((res) => {
          this.dataService = res.data;
          console.log("ini res getServiceById", this.dataService);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getServiceById", err);
        });
    },

    updateService() {
      this.$store
        .dispatch("MasterBranchOrders/updateService", this.dataService)
        .then((res) => {
          console.log("berhasil update", this.dataService);
        })
        .catch((err) => {
          console.log("terjadi kesalahan updateService", err);
        });
    },
  },
};
</script>

<style></style>
