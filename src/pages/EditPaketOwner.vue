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
              v-model="updateService.name"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-select
              outlined
              v-model="updateService.service_category_id"
              :options="serviceCategories"
              option-label="name"
              option-value="id"
              label="Jenis Item"
            />
          </div>
          <div class="q-py-sm">
            <q-input
              label="Harga"
              color="black"
              v-model="updateService.price"
              outlined
              type="search"
            >
              <template v-slot:append>
                <div style="font-size: 12px">Rp</div>
              </template>
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Waktu Pengerjaan"
              v-model="updateService.process_time"
              color="black"
              outlined
              type="search"
            >
              <template v-slot:append>
                <div style="font-size: 12px">Jam</div>
              </template>
            </q-input>
          </div>
          <div class="row q-pt-lg q-pb-sm">
            <div class="col text-right q-pr-sm">
              <q-btn
                :loading="loading"
                :disable="loading"
                class="q-px-md"
                style="background-color: #6295ff; border-radius: 10px"
                text-color="white"
                label="Simpan"
                @click="update()"
              />
            </div>
            <div class="col text-left q-pl-sm">
              <q-btn
                :disable="loading"
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
  props: ["serviceid"],
  data() {
    return {
      dataService: {},
      serviceCategories: [],
      updateService: {
        name: "",
        price: "",
        process_time: "",
        service_category_id: "",
      },
      loading: false,
    };
  },
  mounted() {
    // console.log("ini serviceid", this.serviceid);
    this.getServiceById().then((res) => {
      this.init();
    });
    this.getServiceCategory();
  },
  methods: {
    init() {
      this.updateService.name = this.dataService.name;
      this.updateService.price = this.dataService.price;
      this.updateService.process_time = this.dataService.process_time;
      this.updateService.service_category_id = this.dataService.category;
    },
    getServiceCategory() {
      this.$store
        .dispatch("MasterBranchOrders/getServiceCategory")
        .then((res) => {
          this.serviceCategories = res.data.map((item) => {
            return {
              id: item.id,
              name: item.name,
            };
          });
          // console.log("ini res getServiceCategory", this.serviceCategories);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getServiceCategory", err);
        });
    },
    getServiceById() {
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch("MasterBranchOrders/getServiceById", this.serviceid)
          .then((res) => {
            this.dataService = res.data;
            console.log("ini res getServiceById", this.dataService);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    update() {
      const payload = {
        id: this.serviceid,
        name: this.updateService.name,
        price: this.updateService.price,
        process_time: this.updateService.process_time,
        service_category_id: this.updateService.service_category_id.id,
      };
      // console.log("cek data payload", payload);
      this.loading = true;
      this.$store
        .dispatch("MasterBranchOrders/updateService", payload)
        .then((res) => {
          // console.log("berhasil update", res);
          this.$q.notify("Berhasil mengubah data");
        })
        .catch((err) => {
          console.log("terjadi kesalahan updateService", err);
        })
        .finally(() => {
          this.loading = false;
          this.$router.back();
        });
    },
  },
};
</script>

<style></style>
