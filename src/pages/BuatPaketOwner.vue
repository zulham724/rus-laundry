<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page class="mbl-child">
      <div class="q-px-sm q-py-xl text-center">
        <q-avatar size="100px">
          <q-img src="~/assets/ktab.png" />
        </q-avatar>
        <div class="text-weight-medium q-mt-sm" style="font-size: 24px">
          Buat Layanan Baru
        </div>
      </div>
      <div class="q-px-sm bg-white" style="border-radius: 5px">
        <q-form>
          <div class="q-py-sm">
            <q-input
              label="Masukkan Nama Paket"
              color="black"
              v-model="this.addPackage.name"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-select
              outlined
              v-model="selectedCategory"
              :options="serviceCategories"
              label="Kategori item"
            />
          </div>
          <div class="q-py-sm">
            <q-input
              label="Masukkan Harga"
              color="black"
              v-model="this.addPackage.price"
              outlined
              type="number"
            >
              <template v-slot:append>
                <div style="font-size: 12px">Rp</div>
              </template>
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Waktu Pengerjaan"
              color="black"
              v-model="this.addPackage.process_time"
              outlined
              type="number"
            >
              <template v-slot:append>
                <div style="font-size: 12px">Hari</div>
              </template>
            </q-input>
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
                no-caps
              />
            </div>
            <div class="col text-left q-pl-sm">
              <q-btn
                no-caps
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
  props: ["branchid"],
  data() {
    return {
      loading: false,
      serviceCategories: [],
      selectedCategory: null,
      addPackage: {
        description: "",
        name: null,
        price: null,
        process_time: null,
        service_category_id: null,
        shop_id: null,
      },
    };
  },
  mounted() {
    console.log("bid", this.branchid);
    this.getServiceCategory();
  },
  methods: {
    submit() {
      this.addPackage.shop_id = this.branchid;
      this.addPackage.service_category_id = this.selectedCategory.value;
      this.createService();
    },
    createService() {
      this.loading = true;
      this.$store
        .dispatch("MasterBranchOrders/createBranchServices", this.addPackage)
        .then((res) => {
          console.log("ini res createService", res);
          this.$q.notify({
            position: "bottom",
            message: "Layanan Telah Ditambahkan",
          });
          this.$router.push(`/detail-paket-owner/${this.branchid}`);
        })
        .catch((err) => {
          console.log("terjadi kesalahan createService", err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getServiceCategory() {
      this.$store
        .dispatch("MasterBranchServiceCategory/index", this.branchid)
        .then((res) => {
          this.serviceCategories = res.map((item) => {
            return {
              label: item.name,
              value: item.id,
            };
          });
          console.log("ini res getServiceCategory", this.serviceCategories);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getServiceCategory", err);
        });
    },
  },
};
</script>

<style></style>
