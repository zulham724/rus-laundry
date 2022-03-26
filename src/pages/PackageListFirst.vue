<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" @click="$router.push('/')">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Pilih Paket</q-toolbar-title
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
      <q-pull-to-refresh @refresh="refresh">
        <q-page>
          <div class="q-mt-sm">
            <q-card class="no-shadow">
              <q-card-section>
                <div class="row">
                  <div class="col-6">
                    <q-input
                      dense
                      v-model="search"
                      @update:model-value="filterPaket(search)"
                      outlined
                      rounded
                      type="search"
                      label="Cari"
                    >
                      <template v-slot:append>
                        <q-icon name="search" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col-6">
                    <div class="col-6">
                      <div class="row justify-end">
                        <div class="col-6">
                          <q-select
                            flat
                            label-color="black"
                            dense
                            label="Filter"
                            class="bg-transparent no-shadow"
                            :options="filterOptions"
                            v-model="selectedFilterOption"
                            @update:model-value="doFilter"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>

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
                  <q-checkbox v-model="packages[c].checkPackage" />
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div v-else-if="isLoad == false && packages.length">
            <q-list class="q-pt-md q-mb-xl">
              <package-list-first-list
                class="q-my-sm"
                v-for="(paket, p) in packages"
                :key="p"
                :paket="paket"
                :chooseMode="chooseMode"
              ></package-list-first-list>
              
            </q-list>
          </div>

          <div v-else>
            <div class="text-center q-ma-lg">
              <q-img
                no-spinner
                src="~/assets/empty_package.svg"
                style="width: 70%; margin-top: 20px"
              />
              <div class="text-h6" style="margin-top: -40px">
                Belum ada paket
              </div>
            </div>
          </div>
          <div class="text-center fixed-bottom" v-if="!chooseMode" style="z-index: 1">
            <q-btn
              :ripple="{ color: 'orange' }"
              @click="dialog_addPackage = true"
              flat
              no-caps
              class="mbl-child full-width"
              
              style="background-color: #49c2c0; "
            >
              <div class="text-subtitl2" style="color: white">Tambah Paket</div>
              <q-dialog v-model="dialog_addPackage" persistent>
                <q-card>
                  <q-card-section class="row justify-start">
                    <div class="text-subtitle1 text-bold">
                      Tambah paket baru?
                    </div>
                    <div class="text-caption">
                      yakin ingin menambah paket baru?
                    </div>
                  </q-card-section>

                  <q-card-actions align="between" class="text-bold">
                    <q-btn flat label="Batal" color="primary" v-close-popup />
                    <q-btn
                      @click="$router.push(`/add-package`)"
                      flat
                      label="Tambah"
                      color="primary"
                      v-close-popup
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </q-btn>
          </div>
          <div class="fixed-bottom text-center" v-else>
            <q-btn
              :ripple="{ color: 'orange' }"
              @click="dialog_deletePackage = true"
              flat
              no-caps
              class="full-width mbl-child"
              style="background-color: #d72929;"
            >
              <div class="text-subtitl2 mbl-child" style="color: white; ">Hapus Paket</div>
              <q-dialog v-model="dialog_deletePackage" persistent>
                <q-card>
                  <q-card-section class="justify-start">
                    <div class="text-subtitle1 text-bold">Hapus paket?</div>
                    <div class="text-caption">yakin ingin menghapus paket?</div>
                  </q-card-section>

                  <q-card-actions align="between" class="text-bold">
                    <q-btn
                      :disable="loading"
                      flat
                      label="Batal"
                      color="primary"
                      v-close-popup
                    />
                    <q-btn
                      :disable="loading"
                      @click="deletePackage()"
                      flat
                      label="Hapus"
                      color="red"
                      v-close-popup
                    />
                  </q-card-actions>
                </q-card>
              </q-dialog>
            </q-btn>
          </div>
        </q-page>
      </q-pull-to-refresh>
    </q-page-container>
  </q-layout>
</template>

<script>
import Plfl from "src/pages/PackageListFirstList.vue";
import { mapState } from 'vuex';

export default {
  components: {
    "package-list-first-list": Plfl,
  },
  computed:{
    ...mapState(["Auth"])
  },
  data() {
    return {
      search: null,
      packages: [],
      packages_temp: [],
      dialog_addPackage: false,
      dialog_deletePackage: false,
      chooseMode: false,
      loading: false,
      isLoad: false,
      filterOptions: ["Terbaru", "Terlama", "A-Z", "Z-A"],
      selectedFilterOption: null,
    };
  },
  methods: {
    doFilter(val) {
      if (val == "Terbaru") {
        this.packages.sort((a, b) => {
          return new Date(a.created_at) - new Date(b.created_at);
        });
      } else if (val == "Terlama") {
        this.packages.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
      } else if (val == "A-Z") {
        this.packages.sort((a, b) => a.name.localeCompare(b.name));
      } else if (val == "Z-A") {
        this.packages.sort((a, b) => b.name.localeCompare(a.name));
      }
    },
    getPackages() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Services/getServicesByShop", this.Auth.auth.shop.id)
          .then((res) => {
            this.packages = this.packages_temp = res.data.map((item) => {
              item.checked = false;
              return item;
            });
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    update(value) {
      if (value == "") {
        this.packages = this.packages_temp;
      }

      const needle = value.toLowerCase();
      this.packages = this.packages_temp.filter(
        (v) => v.name.toLowerCase().indexOf(needle) > -1
      );
    },
    filterPaket(val) {
      this.update(val);
    },
    deletePackage() {
      this.loading = true;
      let package_choosed = this.packages
        .filter((item) => item.checked)
        .map((item) => item.id);

      this.$store
        .dispatch("Services/destroy", package_choosed)
        .then((res) => {
          this.packages = this.packages.filter((item) => !item.checked);
          this.$q.notify("Berhasil");
        })
        .finally(() => {
          this.loading = false;
        });
    },

    refresh(done) {
      this.getPackages().then((res) => {
        if (done) done();
      });
    },
  },
  mounted() {
    this.getPackages();
  },
};
</script>

<style></style>
