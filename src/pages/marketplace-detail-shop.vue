<template>
  <q-layout class="mbl">
    <q-header
      style="background-image: linear-gradient(to right, #ff9ac5, #7900ff)"
      class=" row q-pb-lg"
    >
      <div class="col-1 q-mt-md q-pl-sm" style="margin-top: 20px">
        <q-btn flat dense><q-icon name="fas fa-arrow-left" /></q-btn>
      </div>
      <div class="col-10 q-pl-md q-mt-md">
        <q-input
          dense
          style="border-radius: 20px; width: 90%"
          class="q-ml-sm bg-white"
          type="search"
          rounded
          outlined
          label-color="grey"
          v-model="search"
          label="Cari Produk di toko ini"
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
      <div class="col-1 q-mt-md" style="margin-left: -14px; padding-top: 5px">
        <q-btn dense flat><q-icon name="fas fa-share-alt" /></q-btn>
      </div>
      <div class="row q-mt-lg q-ml-xl">
        <div>
          <q-avatar size="50px"><img src="~/assets/Avatar.png" /></q-avatar>
        </div>
        <div class="column q-ml-md">
          <div class="text-body2">Laundry Indonesia</div>
          <div>
            <q-icon name="fas fa-map-marker-alt" color="red" />
            <label
              class="text-caption q-ml-xs"
              style="font-size: 13px; font-family: roboto; color: #cdcdcd"
              >Kota Darjo</label
            >
          </div>
          <q-btn
            no-caps
            dense
            flat
            class="q-mt-sm"
            style="width: 50%; border-radius: 10px; background-color: #d941d3"
          >
            ikuti
          </q-btn>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <q-page>
        <div style="background-color: #ffffff">
          <div
            class="q-px-md text-weight-medium text-subtitle2 q-pt-sm"
            style="color: #6b6b6b"
          >
            Tentang toko
          </div>
          <div class="text-caption q-px-md q-py-md" style="color: #cdcdcd">
            Menjual beberapa peralatan untuk Laundry Like a sabun cuci,pewangi,mesin cuci,setrika,dll
          </div>
        </div>
        <div class="q-mt-md q-pl-md text-weight-regular q-pb-md" style="background-color: #f5f7f9;color:#707070">Produk LaundryIndonesia</div>
          <div class="row">
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

<style></style>
