<template>
  <q-layout class="mbl">
    <q-header
      class=""
      style="
        background-image: linear-gradient(to right, #F5F7F9, #FFFFFF);
        border-radius: 0 0 30px 30px;
        height: 75px;
      "
    >
      <div class="q-mt-md q-mx-md">
        <q-input
          dense
          style="border-radius: 20px"
          class="q-ml-sm bg-white full-width"
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
      </div>
    </q-header>
    <q-page-container>
      <q-page class="q-px-md">
        <div class="text-caption q-py-sm">Untuk kamu hari ini</div>
        <div class="row">
          <div class="col-6 ">
            <q-card class="q-pb-xl q-mx-sm">
              <img class="bg-red" src="~/assets/jualan1.svg" style="height:150px"/>
                <div class="text-caption text-weight-medium q-pl-xs" style="color:#5F5F5F">Detergen Rinso anti Belanda Murah</div>
                <div class="text-caption text-weight-regular q-pl-xs" style="color:#C5C5C5">Rp.15.000</div>
                <div class="text-subtitle2 text-weight-medium q-pl-xs" style="color:#161952">Rp.10.000</div>
                <div class="text-caption q-pl-xs"><q-icon name="fas fa-map-marker-alt" color="red"/>Kota Kudus</div>
            </q-card>
            <q-card class="q-pb-xl q-mt-md q-mx-sm">
              <img class="bg-red" src="~/assets/jualan1.svg" style="height:150px"/>
                <div class="text-caption text-weight-medium q-pl-xs" style="color:#5F5F5F">Detergen Rinso anti Belanda Murah</div>
                <div class="text-caption text-weight-regular q-pl-xs" style="color:#C5C5C5">Rp.15.000</div>
                <div class="text-subtitle2 text-weight-medium q-pl-xs" style="color:#161952">Rp.10.000</div>
                <div class="text-caption q-pl-xs"><q-icon name="fas fa-map-marker-alt" color="red"/>Kota Kudus</div>
            </q-card>
             <q-card class="q-pb-xl q-mt-md q-mx-sm">
              <img class="bg-red" src="~/assets/jualan1.svg" style="height:150px"/>
                <div class="text-caption text-weight-medium q-pl-xs" style="color:#5F5F5F">Detergen Rinso anti Belanda Murah</div>
                <div class="text-caption text-weight-regular q-pl-xs" style="color:#C5C5C5">Rp.15.000</div>
                <div class="text-subtitle2 text-weight-medium q-pl-xs" style="color:#161952">Rp.10.000</div>
                <div class="text-caption q-pl-xs"><q-icon name="fas fa-map-marker-alt" color="red"/>Kota Kudus</div>
            </q-card>
          </div>
          <div class="col-6">
          <q-card class="q-pb-xl q-mx-sm">
              <img class="bg-red" src="~/assets/jualan1.svg" style="height:150px"/>
                <div class="text-caption text-weight-medium q-pl-xs" style="color:#5F5F5F">Detergen Rinso anti Belanda Murah</div>
                <div class="text-caption text-weight-regular q-pl-xs" style="color:#C5C5C5">Rp.15.000</div>
                <div class="text-subtitle2 text-weight-medium q-pl-xs" style="color:#161952">Rp.10.000</div>
                <div class="text-caption q-pl-xs"><q-icon name="fas fa-map-marker-alt" color="red"/>Kota Kudus</div>
            </q-card>
             <q-card class="q-pb-xl q-mt-md q-mx-sm">
              <img class="bg-red" src="~/assets/jualan1.svg" style="height:150px"/>
                <div class="text-caption text-weight-medium q-pl-xs" style="color:#5F5F5F">Detergen Rinso anti Belanda Murah</div>
                <div class="text-caption text-weight-regular q-pl-xs" style="color:#C5C5C5">Rp.15.000</div>
                <div class="text-subtitle2 text-weight-medium q-pl-xs" style="color:#161952">Rp.10.000</div>
                <div class="text-caption q-pl-xs"><q-icon name="fas fa-map-marker-alt" color="red"/>Kota Kudus</div>
            </q-card>
             <q-card class="q-pb-xl q-mt-md q-mx-sm">
              <img class="bg-red" src="~/assets/jualan1.svg" style="height:150px"/>
                <div class="text-caption text-weight-medium q-pl-xs" style="color:#5F5F5F">Detergen Rinso anti Belanda Murah</div>
                <div class="text-caption text-weight-regular q-pl-xs" style="color:#C5C5C5">Rp.15.000</div>
                <div class="text-subtitle2 text-weight-medium q-pl-xs" style="color:#161952">Rp.10.000</div>
                <div class="text-caption q-pl-xs"><q-icon name="fas fa-map-marker-alt" color="red"/>Kota Kudus</div>
            </q-card>
          </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[20, 70]">
            <q-btn fab icon="fas fa-plus" style="background-image: linear-gradient(to right, #161853, #04293A);color:white" />
          </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style>
</style>