<template>
  <q-layout class="mbl">
    <q-header class="text-center shadow-1">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: black">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #3a3838; font-size: 17px"
          >Produk Anda
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <q-input
          dense
          style="border-radius: 20px; width: 95%"
          class="q-ml-sm q-mt-md bg-white shadow-1"
          type="search"
          rounded
          outlined
          v-model="search"
          label="Cari"
        >
          <template v-slot:prepend>
            <q-icon
              name="search"
              class="self-center"
              size="25px"
              color="grey"
            />
          </template>
        </q-input>
        <div>
          <q-btn
            class="q-ml-md q-mt-md"
            style="
              border-radius: 10px;
              background-color: #9b27f1;
              width: 92%;
              color: white;
            "
            no-caps
            label="Tambah Produk"
          ></q-btn>
        </div>
        <div class="row q-mt-md">
          <div class="col-6">
            <q-card class="q-pb-xl q-mx-sm">
              <img
                class="bg-red"
                src="~/assets/jualan1.svg"
                style="height: 150px"
              />
              <div
                class="text-caption text-weight-medium q-pl-xs"
                style="color: #5f5f5f"
              >
                Detergen Rinso anti Belanda Murah
              </div>
              <div
                class="text-caption text-weight-regular q-pl-xs"
                style="color: #c5c5c5"
              >
                Rp.15.000
              </div>
              <div
                class="text-subtitle2 text-weight-medium q-pl-xs"
                style="color: #161952"
              >
                Rp.10.000
              </div>
              <div class="text-caption q-pl-xs">
                <q-icon name="fas fa-map-marker-alt" color="red" />Kota Kudus
              </div>
            </q-card>
            <q-card class="q-pb-xl q-mt-md q-mx-sm">
              <img
                class="bg-red"
                src="~/assets/jualan1.svg"
                style="height: 150px"
              />
              <div
                class="text-caption text-weight-medium q-pl-xs"
                style="color: #5f5f5f"
              >
                Detergen Rinso anti Belanda Murah
              </div>
              <div
                class="text-caption text-weight-regular q-pl-xs"
                style="color: #c5c5c5"
              >
                Rp.15.000
              </div>
              <div
                class="text-subtitle2 text-weight-medium q-pl-xs"
                style="color: #161952"
              >
                Rp.10.000
              </div>
              <div class="text-caption q-pl-xs">
                <q-icon name="fas fa-map-marker-alt" color="red" />Kota Kudus
              </div>
            </q-card>
        
          </div>
          <div class="col-6">
            <q-card class="q-pb-xl q-mx-sm">
              <img
                class="bg-red"
                src="~/assets/jualan1.svg"
                style="height: 150px"
              />
              <div
                class="text-caption text-weight-medium q-pl-xs"
                style="color: #5f5f5f"
              >
                Detergen Rinso anti Belanda Murah
              </div>
              <div
                class="text-caption text-weight-regular q-pl-xs"
                style="color: #c5c5c5"
              >
                Rp.15.000
              </div>
              <div
                class="text-subtitle2 text-weight-medium q-pl-xs"
                style="color: #161952"
              >
                Rp.10.000
              </div>
              <div class="text-caption q-pl-xs">
                <q-icon name="fas fa-map-marker-alt" color="red" />Kota Kudus
              </div>
            </q-card>
            <q-card class="q-pb-xl q-mt-md q-mx-sm">
              <img
                class="bg-red"
                src="~/assets/jualan1.svg"
                style="height: 150px"
              />
              <div
                class="text-caption text-weight-medium q-pl-xs"
                style="color: #5f5f5f"
              >
                Detergen Rinso anti Belanda Murah
              </div>
              <div
                class="text-caption text-weight-regular q-pl-xs"
                style="color: #c5c5c5"
              >
                Rp.15.000
              </div>
              <div
                class="text-subtitle2 text-weight-medium q-pl-xs"
                style="color: #161952"
              >
                Rp.10.000
              </div>
              <div class="text-caption q-pl-xs">
                <q-icon name="fas fa-map-marker-alt" color="red" />Kota Kudus
              </div>
            </q-card>
            
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style>
</style>