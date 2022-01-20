<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/add-item">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Pilih Jenis Pakaian</q-toolbar-title
        >
        <q-btn
          class="float-right"
          text-color="grey-8"
          :label="chooseMode ? 'Batal' : 'Pilih'"
          flat
          @click="chooseMode = !chooseMode"
        />
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <q-card flat class="q-mt-sm">
          <div
            class="q-px-md q-py-sm text-weight-regular"
            style="color: #888888; font-size: 16px"
          >
            <div class="row">
              <div class="col-6">
                <q-input
                  dense
                  class="q-ml-sm text-caption"
                  type="search"
                  style="width: 150px; color: black; font-size: 15px"
                  rounded
                  outlined
                  @update:model-value="filterCategory"
                  v-model="search"
                  placeholder="Cari Pakaian"
                >
                  <q-icon
                    name="search"
                    class="self-center"
                    size="20px"
                    color="grey"
                  />
                </q-input>
              </div>
              <div class="col-6">
                <div class="row justify-end">
                  <div class="col-6">
                    <q-select
                      flat
                      label-color="black"
                      dense
                      option-label="name"
                      label="Filter"
                      color=""
                      class="bg-transparent no-shadow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card>

        <div v-if="this.categories.length">
          <q-list class="q-pt-md">
            <q-item
              v-for="(category, c) in categories"
              :key="c"
              class="q-my-sm bg-white"
            >
              <q-item-section>
                <q-item-label>
                  {{ category.name }}
                </q-item-label>
                <q-item-label caption>
                  {{ category.service_unit.name }}
                </q-item-label>
              </q-item-section>
              <q-item-section side v-if="chooseMode">
                <q-checkbox v-model="categories[c].checkCategory" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <div v-else>
          <div class="text-center q-pt-md">
            <q-img
            no-spinner
              style="height: 250px; width: 250px"
              src="~/assets/paket-kosong-unscreen.gif"
            />
          </div>

          <div class="text-center text-weight-bold q-pa-md">
            Belum ada Pakaian
          </div>
        </div>

        <div class="absolute-bottom" v-if="!chooseMode">
          <q-btn
            no-caps
            class="full-width q-py-sm"
            style="background-color: #49c2c0"
            @click="buttonAddClothes()"
          >
            <div class="text-weight-regular" style="color: white">
              Tambah Pakaian
            </div>
          </q-btn>
        </div>
        <div class="absolute-bottom" v-else>
          <q-btn
            no-caps
            class="full-width q-py-sm"
            style="background-color: #d72929"
            @click="dialogHapusPakaian = true"
          >
            <div class="text-weight-regular" style="color: white">
              Hapus Pakaian
            </div>
          </q-btn>
        </div>

        <q-dialog v-model="dialogTambahPakaian">
          <q-card>
            <q-card-section>
              <div class="text-weight-bold text-left" style="font-size: 16px">
                Tambah pakaian baru?
              </div>

              <div
                class="text-weight-light text-left q-mt-none"
                style="width: 300px; font-size: 12px"
              >
                yakin ingin membuat jenis pakaian baru?
              </div>
            </q-card-section>

            <q-card-actions class="text-primary" vertical>
              <div class="row justify-end q-gutter-x-sm">
                <q-btn
                  v-close-popup
                  class="text-white"
                  no-caps
                  label="Batal"
                  flat
                  text-color="grey-8"
                  style="width: 30px; background-color: white"
                />
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

        <q-dialog v-model="dialogHapusPakaian">
          <q-card>
            <q-card-section>
              <div class="text-weight-bold text-left" style="font-size: 16px">
                Hapus Pakaian
              </div>

              <div
                class="text-weight-light text-left q-mt-none"
                style="width: 300px; font-size: 12px"
              >
                yakin ingin menghapus pakaian?
              </div>
            </q-card-section>

            <q-card-actions class="text-primary" vertical>
              <div class="row justify-end q-x-gutter-sm">
                <q-btn
                  v-close-popup
                  class="text-white"
                  no-caps
                  label="Batal"
                  flat
                  text-color="grey-8"
                  style="width: 30px; background-color: white"
                />
                <q-btn
                v-close-popup
                  class="text-white"
                  no-caps
                  flat
                  @click="deleteClothes()"
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
export default {
  data() {
    return {
      dialogTambahPakaian: false,
      dialogHapusPakaian: false,
      search: "",
      categories: [],
      categories_temp: [],
      chooseMode: false,
    };
  },

  methods: {
    buttonAddClothes() {
      this.dialogTambahPakaian = true;
    },
    getClothes() {
      this.$store.dispatch("ServiceCategories/index").then((res) => {
        this.categories = this.categories_temp = res.data.map((item) => {
          item.checkCategory = false;
          return item;
        });
      });
    },
    update(value) {
      if (value == "") {
        this.categories = this.categories_temp;
      }

      const needle = value.toLowerCase();
      this.categories = this.categories_temp.filter(
        (v) => v.name.toLowerCase().indexOf(needle) > -1
      );
    },
    filterCategory(val) {
      this.update(val);
    },
    deleteClothes() {
      let categories = this.categories.filter((item) => item.checkCategory).map((item) => item.id);

      this.$store
        .dispatch("ServiceCategories/destroy", categories)
        .then((res) => {
          this.categories = this.categories.filter(
            (item) => !item.checkCategory
          );
          this.$q.notify("Berhasil");
        });
    },
  },
  mounted() {
    this.getClothes();
  },
};
</script>

<style></style>
