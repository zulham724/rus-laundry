<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" @click="$router.back()">
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
              </q-card-section>
            </q-card>
          </div>
          <!-- <q-btn-dropdown
            class="q-my-sm bg-white"
            style="width: 100%; color: #888888"
            align="left"
            flat
            dropdown-icon="arrow_drop_down"
            label="Paket Satuan"
          >
            <q-list v-ripple>
              <q-item clickable v-close-popup v-ripple>
                <q-item-section v-ripple>
                  <q-item-label v-ripple style="color: #888888"
                    >Reguler Cuci Kering + Setrika</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-separator></q-separator>

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label style="color: #888888"
                    >Reguler Cuci Basah</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-separator></q-separator>

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label style="color: #888888"
                    >Super Kilat Cuci Basah</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-separator></q-separator>
            </q-list>
          </q-btn-dropdown> -->

          <!-- Skeleton -->
          <div v-if="isLoad">
            <q-list class="q-pt-md">
              <q-item v-for="c in 10" :key="c" class="q-my-sm bg-white">
                <q-item-section>
                  <q-item-label>
                    <q-skeleton type="text" />
                  </q-item-label>
                  <q-item-label caption>
                    <q-skeleton type="text" width="50px"/>
                  </q-item-label>
                </q-item-section>
                <q-item-section side v-if="chooseMode">
                  <q-checkbox v-model="packages[c].checkPackage" />
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div v-else-if="(isLoad == false && packages.length)">
            <q-list class="q-pt-md">
              <q-item
                class="q-my-sm bg-white"
                v-for="(paket, p) in packages"
                :key="p"
              >
                <q-item-section>
                  <q-item-label>
                    {{ paket.name }}
                  </q-item-label>
                  <q-item-label caption>
                    {{ paket.category.service_unit.name }}
                  </q-item-label>
                </q-item-section>
                <q-item-section side v-if="chooseMode">
                  <q-checkbox v-model="packages[p].checked" />
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div v-else>
            <div class="text-center q-ma-lg">
              <q-img no-spinner
                src="~/assets/empty_package.svg"
                style="width: 70%; margin-top: 20px"
              />
              <div class="text-h6" style="margin-top: -40px">Belum ada paket</div>
            </div>
          </div>
          <div class="absolute-bottom" v-if="!chooseMode">
            <q-btn
              :ripple="{ color: 'orange' }"
              @click="dialog_addPackage = true"
              flat
              no-caps
              class="full-width"
              style="background-color: #49c2c0"
            >
              <div class="text-subtitl2" style="color: white">Tambah Paket</div>
              <q-dialog v-model="dialog_addPackage" persistent>
                <q-card>
                  <q-card-section class="row justify-start">
                    <div class="text-subtitle1">Tambah paket baru?</div>
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
          <div class="absolute-bottom" v-else>
            <q-btn
              :ripple="{ color: 'orange' }"
              @click="dialog_deletePackage = true"
              flat
              no-caps
              class="full-width"
              style="background-color: #D72929"
            >
              <div class="text-subtitl2" style="color: white">Hapus Paket</div>
              <q-dialog v-model="dialog_deletePackage" persistent>
                <q-card>
                  <q-card-section class="row justify-start">
                    <div class="text-subtitle1">Hapus paket</div>
                    <div class="text-caption">
                      yakin ingin menghapus paket?
                    </div>
                  </q-card-section>

                  <q-card-actions align="between" class="text-bold">
                    <q-btn :disable="loading" flat label="Batal" color="primary" v-close-popup />
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
export default {
  props: ["categoryid"],
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
    };
  },
  methods: {
    getPackages() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store.dispatch("Services/index").then((res) => {
        this.packages = this.packages_temp = res.data.map((item) => {
          item.checked = false
          return item
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
    update(value){
     
      if(value == ""){
        this.packages = this.packages_temp
      }

      const needle = value.toLowerCase()
      this.packages = this.packages_temp.filter((v) => v.name.toLowerCase().indexOf(needle) > -1)
    },
    filterPaket(val){
       
      this.update(val)
    },
    deletePackage(){
      this.loading = true
      let package_choosed = this.packages.filter((item) => item.checked).map(item=>item.id)
     
      this.$store.dispatch("Services/destroy", package_choosed).then(res => {
        this.packages = this.packages.filter((item) => !item.checked)
        this.$q.notify("Berhasil")
      }).finally(() => {
        this.loading = false
      })
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
