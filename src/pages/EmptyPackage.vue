<template>
  <q-layout>
      <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/add-item">
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
                  v-model="search"
                  placeholder="Cari Paket"
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

        <div class="text-center q-pt-md">
          <q-img no-spinner style="height:250px;width:250px" src="~/assets/empty_package.svg" />
       </div>

       <div class="text-center text-weight-bold q-pa-md">
          Belum ada kategori
        </div>

        <div class="absolute-bottom" >
          <q-btn no-caps class="full-width q-py-sm" style="background-color:#49C2C0" @click="buttonAddPackage()">
            <div class="text-weight-regular" style="color:white;">
              Tambah Paket
            </div>
          </q-btn>
        </div>

        <q-dialog v-model="dialogTambahPaket">
            <q-card>
              <q-card-section>
                <div
                  class="text-weight-bold text-left"
                  style="font-size: 16px"
                >
                  Tambah paket baru?
                </div>

                <div
                  class="text-weight-light text-left q-mt-none"
                  style="width: 300px; font-size: 12px"
                >
                  Yakin ingin membuat jenis paket baru?
                </div>
              </q-card-section>

              <q-card-actions class="text-primary" vertical>
                <div class="col-9"></div>
                <div class="col-3 text-right"><q-btn
                class="text-white"
                  to="/add-package"
                  no-caps
                  flat
                  label="Oke"
                  style="width:30px;background-color: #49c2c0; color: white"
                /></div>
                </q-card-actions>
            </q-card>
          </q-dialog>
        </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
    data() {
        return {
            dialogTambahPaket: false,
            search: ref(""),
        }
    },

    methods: {
        buttonAddPackage() {
            this.dialogTambahPaket = true;
        }
    },
}
</script>

<style>

</style>

