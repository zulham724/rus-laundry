<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" @click="$router.push('/package-list-first')">
          <q-avatar size="20px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Tambah Paket Baru</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <q-card flat class="q-mt-md bg-white text-subtitle2">
          <q-input
            v-model="package.name"
            class="text-subtitle2"
            bg-color="white"
            filled
            flat
            color="transparent"
            label="Nama Paket"
          />
        </q-card>

        <q-input
          type="number"
          v-model="package.price"
          class="q-my-sm text-subtitle2"
          label="Harga"
          filled
          bg-color="white"
          color="transparent"
        >
          <template v-slot:append>
            <q-btn
              v-if="category"
              no-caps
              style="float: right"
              color="grey"
              class="bg-transparent no-shadow q-mr-sm"
              outline
              :label="'/' + category.unit"
            />
          </template>
        </q-input>

        <q-card flat class="q-my-sm bg-white text-subtitle2">
          <q-input
            type="number"
            v-model.number="package.process_time"
            class="text-subtitle2"
            bg-color="white"
            filled
            flat
            color="transparent"
            label="Waktu Pengerjaan"
          />
        </q-card>

        <q-card
          flat
          no-caps
          class="q-my-sm q-px-md text-caption bg-white"
          style="color: silver"
        >
          Jenis Item
        </q-card>

        <q-card flat class="q-mt-sm full-width">
          <q-select
            class="q-px-md"
            dense
            v-model="category"
            :options="categories"
            option-label="name"
            label="Pilih Kategori"
          />
        </q-card>

        <div class="fixed-bottom mbl-child" style="z-index: 1">
          <q-btn
            @click="store()"
            :ripple="{ color: 'orange' }"
            flat
            no-caps
            class="full-width"
            style="background-color: #49c2c0"
            label="Tambah"
            text-color="grey-1"
          />
        </div>

        <q-dialog v-model="dialogTambahPaket">
          <q-card>
            <q-card-section>
              <div class="text-weight-bold text-left" style="font-size: 16px">
                Tambah paket baru?
              </div>

              <div
                class="text-weight-light text-left q-mt-none"
                style="width: 300px; font-size: 12px"
              >
                yakin ingin membuat paket baru?
              </div>
            </q-card-section>

            <q-card-actions class="text-primary" vertical>
              <div class="col-9"></div>
              <div class="col-3 text-right">
                <q-btn
                  class="text-white"
                  to="/input-new-clothes"
                  no-caps
                  flat
                  label="Oke"
                  style="width: 30px; background-color: #49c2c0; color: white"
                />
              </div>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Orders"]),
  },
  data() {
    return {
      dialogTambahPaket: false,
      package: {},
      categories: [],
      category: null,
      service_category: {
        service_unit: {},
      },
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    buttonAddPackage() {
      this.dialogTambahPaket = true;
    },
    getCategories() {
      this.$store.dispatch("ServiceCategories/index").then((res) => {
        this.categories = res.data.map((item) => {
          return {
            name: item.name,
            id: item.id,
            unit: item.service_unit.name,
          };
        });
      });
    },
    store() {
      this.package.service_category_id = this.category.id;
      this.$store.dispatch("Services/store", this.package).then((res) => {
        this.$router.push(`/package-list-first`);
        this.$q.notify("Paket telah ditambahkan");
      });
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style></style>
