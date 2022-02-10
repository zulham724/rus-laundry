<template>
    <q-layout  class="mbl">
      <q-header elevated class="bg-white q-pt-md">
      <div class="row">
       <q-btn flat class="col-1" style="width: 50px;"><Icon color="black" style="font-size: 20px;" icon="bx:bx-arrow-back"/></q-btn>
  <q-input
          color="black"
          dense
          style="border-radius: 20px; width: 70%"
          class="q-ml-sm bg-white col-10"
          type="search"
          rounded
          outlined
          v-model="search"
          label="Cari Produk"
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
  <q-btn  flat class=""><Icon style="font-size: 20px" color="black" icon="uil:list-ui-alt"/></q-btn>
  </div>
   <q-tabs
        v-model="tab"
        class=" text-grey-9"
      >
        <q-tab class="col-6" no-caps  name="produk" label="Produk" />
        <q-tab class="col-6" no-caps  name="toko" label="Toko" />
      </q-tabs>
    </q-header>

<!-- produk -->
   <q-tab-panels class="fixed" v-model="tab" animated>
   <!--Produk-->
          <q-tab-panel name="produk">
        <q-page class="">
          <div class="row">
            <div class="col-6">
            <q-card class="q-pb-xl q-mt-md q-mx-sm ">
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
        </q-tab-panel>
        <!--Toko-->
        <q-tab-panel name="toko">
        <div class="row">
        <div class="col-12">
        <q-card class="">
        <q-avatar>
          <img src="~/assets/lds.svg">
        </q-avatar>
        </q-card>
        </div>
        </div>
    
        </q-tab-panel>
  </q-tab-panels>

  </q-layout>
</template>

<script>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
export default {
	components: {
		Icon,
	},
    setup () {
    return {
      tab: ref('produk')
    }
  }
};
</script>

<style>

</style>