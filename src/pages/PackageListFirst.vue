<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/basket">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Pilih Paket</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div class="q-mt-sm">
          <q-card class="no-shadow">
            <q-card-section>
              <div class="row">
                <div class="col-6">
                  <q-input
                    dense
                    v-model="search"
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
        <div v-if="packages.length"></div>
        <div v-else>
          <div class="text-center q-ma-lg">
            <img
              src="~/assets/empty_package.svg"
              style="width: 70%; margin-top: 20px"
            />
            <div class="text-h6" style="margin-top: -40px">Belum ada paket</div>
          </div>
        </div>
        <div>
          <q-btn
            :ripple="{ color: 'orange' }"
            @click="dialog_addPackage = true"
            flat
            no-caps
            class="full-width fixed-bottom"
            style="background-color: #49c2c0"
          >
            <div
              class="text-subtitl2"
              style="color: white"

            >
              Tambah Paket
            </div>
            <q-dialog v-model="dialog_addPackage" persistent>
              <q-card>
                <q-card-section class="row justify-start">
                  <div class="text-subtitle1"
                    >Tambah paket baru?</div>
                    <div class="text-caption">
                      yakin ingin menambah paket baru?
                    </div>
                </q-card-section>

                <q-card-actions align="between" class="text-bold">
                  <q-btn flat label="Batal" color="primary" v-close-popup />
                  <q-btn
                  @click="$router.push(`/add-package/${categoryid}`)"
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
      </q-page>
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
      dialog_addPackage: false,
    };
  },
  methods:{
    getPackages(){
      this.$store.dispatch("Services/index", this.categoryid).then(res => {
        this.packages = res.data
      })
    }
  },
  mounted(){
    this.getPackages()
  }
};
</script>

<style></style>
