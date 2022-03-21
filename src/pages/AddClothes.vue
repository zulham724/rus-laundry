<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Pilih Item</q-toolbar-title
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
        <q-pull-to-refresh @refresh="refresh">
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
                    placeholder="Cari Item"
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
                        emit-value
                        v-model="val"
                        :options="options"
                        option-label="name"
                        label="Filter"
                        color=""
                        class="bg-transparent no-shadow"
                        @update:model-value="orderBy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card>

          <!-- Skeleton -->
          <div v-if="isLoad">
            <q-list class="q-pt-md">
              <q-item v-for="c in 10" :key="c" class="q-my-sm bg-white">
                <q-item-section>
                  <q-item-label>
                    <q-skeleton type="text" />
                  </q-item-label>
                  <q-item-label caption>
                    <q-skeleton type="text" width="50px" />
                  </q-item-label>
                </q-item-section>
                <q-item-section side v-if="chooseMode">
                  <q-checkbox v-model="categories[c].checkCategory" />
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div v-else-if="isLoad == false && categories.length">
            <q-list class="q-pt-md q-mb-xl">
              <add-clothes-list
                class="q-my-sm"
                v-for="(category, c) in categories"
                :key="c"
                :category="category"
                :chooseMode="chooseMode"
              ></add-clothes-list>
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

          <div class="fixed-bottom" v-if="!chooseMode" style="z-index: 1">
            <q-btn
              no-caps
              class="full-width q-py-sm"
              style="background-color: #49c2c0"
              @click="buttonAddClothes()"
            >
              <div class="text-weight-regular" style="color: white">
                Tambah Item
              </div>
            </q-btn>
          </div>
          <div class="fixed-bottom" v-else>
            <q-btn
              no-caps
              class="full-width q-py-sm"
              style="background-color: #d72929"
              @click="dialogHapusPakaian = true"
            >
              <div class="text-weight-regular" style="color: white">
                Hapus Item
              </div>
            </q-btn>
          </div>

          <q-dialog v-model="dialogTambahPakaian">
            <q-card>
              <q-card-section>
                <div class="text-weight-bold text-left" style="font-size: 16px">
                  Tambah Item baru?
                </div>

                <div
                  class="text-weight-light text-left q-mt-none"
                  style="width: 300px; font-size: 12px"
                >
                  yakin ingin membuat jenis Item baru?
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
                  Hapus Item?
                </div>

                <div
                  class="text-weight-light text-left q-mt-none"
                  style="width: 300px; font-size: 12px"
                >
                  yakin ingin menghapus Item?
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
        </q-pull-to-refresh>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { debounce } from "quasar";
import { useQuasar } from "quasar";
import { onBeforeUnmount } from "vue";
import Acl from "src/pages/AddClothesList.vue";

export default {
  components: {
    "add-clothes-list": Acl,
  },
  data() {
    return {
      dialogTambahPakaian: false,
      dialogHapusPakaian: false,
      search: "",
      options: ["Terbaru", "Terlama", "A-Z", "Z-A"],
      categories: [],
      categories_temp: [],
      chooseMode: false,
      isLoad: false,
      val: null,
      // category: null,
    };
  },

  methods: {
    buttonAddClothes() {
      this.dialogTambahPakaian = true;
    },
    getClothes() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("ServiceCategories/index")
          .then((res) => {
            this.categories = this.categories_temp = res.data.map((item) => {
              item.checkCategory = false;
              return item;
            });
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
            // console.log(err);
          })
          .finally(() => {
            this.isLoad = false;
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
      if (!this.categories.length) {
        this.categories = this.categories_temp.filter(
          (v) => v.service_unit.name.toLowerCase().indexOf(needle) > -1
        );
      }
    },

    filterCategory(val) {
      this.update(val);
    },
    deleteClothes() {
      let categories = this.categories
        .filter((item) => item.checkCategory)
        .map((item) => item.id);

      this.$store
        .dispatch("ServiceCategories/destroy", categories)
        .then((res) => {
          this.categories = this.categories.filter(
            (item) => !item.checkCategory
          );
          this.$q.notify("Berhasil");
        });
    },

    refresh(done) {
      this.getClothes().then((res) => {
        if (done) done();
      });
    },
    orderBy(val) {
      if (val == "Terbaru") {
        this.categories.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
      } else if (val == "Terlama") {
        this.categories.sort((a, b) => {
          return new Date(a.created_at) - new Date(b.created_at);
        });
      } else if (val == "A-Z") {
        this.categories.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (val == "Z-A") {
        this.categories.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
    },
    // onRight({ reset }) {
    //   this.$q.notify("Right action triggered. Resetting in 100 second.");

    // },
    buttonSimpan(reset) {
      // const $q = useQuasar();
      this.$refs.update.reset();
    },
    buttonBack(reset) {
      // const $q = useQuasar();
      this.$refs.update.reset();
    },
  },
  mounted() {
    this.filterCategory = debounce(this.filterCategory, 1000);
    this.getClothes();
  },
};
</script>

<style>
.q-slide-item__right {
  justify-content: normal;
  width: 100%;
}

.q-slide-item__right > div {
  width: 100%;
  padding: 0px;
}
</style>
