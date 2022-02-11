<template>
  <q-layout class="mbl">
    <q-header style="background-color: white" class="row q-pb-lg">
      <div class="col-1 q-mt-md q-pl-sm" style="margin-top: 20px">
        <q-btn flat dense
          ><q-icon style="color: #484848" name="fas fa-arrow-left"
        /></q-btn>
      </div>
      <div class="col-10 q-pl-md q-mt-md">
        <q-input
          dense
          style="border-radius: 20px; width: 90%"
          class="q-ml-sm bg-white shadow-1"
          type="search"
          rounded
          outlined
          label-color="grey"
          v-model="search"
          label="Cari nama produk"
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
        <q-btn @click="seamless = true" dense flat
          ><q-icon style="color: #484848" name="sort"
        /></q-btn>
      </div>
    </q-header>
    <q-page-container>
      <q-page>
        <q-card class="no-shadow">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="black"
            indicator-color="purple-8"
            align="justify"
          >
            <q-tab no-caps name="produk" label="Produk" />
            <q-tab no-caps name="toko" label="Toko" />
          </q-tabs>

          <q-separator />

          <q-tab-panels swipeable v-model="tab" animated>
            <q-tab-panel name="produk">
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
                      Detergen Rinso anti dosa Murah
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
                      <q-icon name="fas fa-map-marker-alt" color="red" />Kota
                      Kudus
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
                      <q-icon name="fas fa-map-marker-alt" color="red" />Kota
                      Kudus
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
                      <q-icon name="fas fa-map-marker-alt" color="red" />Kota
                      Kudus
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
                      <q-icon name="fas fa-map-marker-alt" color="red" />Kota
                      Kudus
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
                      <q-icon name="fas fa-map-marker-alt" color="red" />Kota
                      Kudus
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
                      <q-icon name="fas fa-map-marker-alt" color="red" />Kota
                      Kudus
                    </div>
                  </q-card>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="toko">
              <div class="row bg-white">
                <div class="col-2">
                  <q-avatar>
                    <img src="~/assets/Avatar.png" />
                  </q-avatar>
                </div>
                <div class="col-7 q-pl-md">
                  <div class="column">
                    <div class="text-subtitle2">Indonesia Laundry</div>
                    <div class="text-caption">
                      <q-icon name="fas fa-map-marker-alt" color="red" />Kota
                      Kudus
                    </div>
                  </div>
                </div>
                <div class="col-3 text-right">
                  <q-btn
                    class="q-my-sm"
                    dense
                    outline
                    style="color: #9b27f1; border-radius: 5px; font-size: 10px"
                    label="Lihat Toko"
                  />
                </div>
              </div>
              <div class="">
                <div
                  class="q-mt-md row text-weight-medium text-caption q-pb-md"
                  style="background-color: #f5f7f9; color: #707070"
                >
                  <div class="text-left col-6" style="font-size: 10px">
                    Produk LaundryIndonesia
                  </div>
                  <div class="text-right col-6">
                    <q-btn dense no-caps flat style="font-size: 10px"
                      >Lihat semua</q-btn
                    >
                  </div>
                </div>
                <div class="row" style="background-color: #f5f7f9">
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
                        <q-icon name="fas fa-map-marker-alt" color="red" />Kota
                        Kudus
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
                        <q-icon name="fas fa-map-marker-alt" color="red" />Kota
                        Kudus
                      </div>
                    </q-card>
                  </div>
                </div>
              </div>
              <div class="q-mt-md text-caption">toko lainnya</div>
              <div class="row q-mt-sm bg-white">
                <div class="col-2">
                  <q-avatar>
                    <img src="~/assets/Avatar.png" />
                  </q-avatar>
                </div>
                <div class="col-7 q-pl-md">
                  <div class="column">
                    <div class="text-subtitle2">Indonesia Laundry</div>
                    <div class="text-caption">
                      <q-icon name="fas fa-map-marker-alt" color="red" />Kota
                      Kudus
                    </div>
                  </div>
                </div>
                <div class="col-3 text-right">
                  <q-btn
                    class="q-my-sm"
                    dense
                    outline
                    style="color: #9b27f1; border-radius: 5px; font-size: 10px"
                    label="Lihat Toko"
                  />
                </div>
              </div>
              <div class="row q-mt-lg bg-white">
                <div class="col-2">
                  <q-avatar>
                    <img src="~/assets/markzuck1.svg" />
                  </q-avatar>
                </div>
                <div class="col-7 q-pl-md">
                  <div class="column">
                    <div class="text-subtitle2">Zuckebeg Laundry</div>
                    <div class="text-caption">
                      <q-icon name="fas fa-map-marker-alt" color="red" />Kota
                      nganjuk
                    </div>
                  </div>
                </div>
                <div class="col-3 text-right">
                  <q-btn
                    class="q-my-sm"
                    dense
                    outline
                    style="color: #9b27f1; border-radius: 5px; font-size: 10px"
                    label="Lihat Toko"
                  />
                </div>
              </div>

              <div class="row q-mt-lg bg-white">
                <div class="col-2">
                  <q-avatar>
                    <img src="~/assets/puan1.svg" />
                  </q-avatar>
                </div>
                <div class="col-7 q-pl-md">
                  <div class="column">
                    <div class="text-subtitle2">Cuan Laundry</div>
                    <div class="text-caption">
                      <q-icon name="fas fa-map-marker-alt" color="red" />Kota
                      Kita
                    </div>
                  </div>
                </div>
                <div class="col-3 text-right">
                  <q-btn
                    class="q-my-sm"
                    dense
                    outline
                    style="color: #9b27f1; border-radius: 5px; font-size: 10px"
                    label="Lihat Toko"
                  />
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
        <q-dialog v-model="seamless" seamless position="bottom">
          <q-card class="full-width q-pa-md">
            <div class="row justify-center text-weight-medium">Filter</div>

            <div class="row text-weight-medium" style="color: #393939; font-size: 17px">urutkan berdasarkan</div>
            <div class="row  full-width">
            <div class="col-2 q-pb-xl q-ml-md">
              <q-btn dense no-caps style="width: 73px; border-radius: 10px">
                <div class="text-weight-bold" style="font-size: 12px">semua</div>
              </q-btn>
            </div>
            <div class="col-4 q-ml-lg">
              <q-btn dense no-caps class="bg-red" style=" width: 150px; border-radius: 10px">
                <div class="text-weight-bold" style="font-size: 12px">harga: termurah</div>
              </q-btn>
            </div>
            <div class="col-5">
              <q-btn no-caps dense style="border-radius: 10px">
                <div class="text-weight-bold" style="width: 130px; font-size: 12px">harga: termahal</div>
              </q-btn>
            </div>
              
              <div class="column text-weight-medium col-12" style="color: #393939; font-size: 17px">Batas Harga</div>
              <q-input style=" border: 1px solid #D3D3D3; border-radius: 5px;" borderless color="grey" class="col-3" label="Harga Min"></q-input>
              <q-input style=" border: 1px solid #D3D3D3; border-radius: 5px;" borderless color="grey" class="text-align-center q-ml-lg col-3" label="Harga Max"></q-input>
            </div>
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
      tab: "toko",
      seamless: "true",
    };
  },
};
</script>

<style>
</style>

-----------------------------------------------------------------------------------------------------------

<!-- <div class="text-caption q-mb-md text-center">filter</div>
            <div class="text-subtitle2">urutkan berdasarkan</div>
            <q-card-section class="row items-center no-wrap">
              <div class="row">
                <q-btn
                  class="bg-grey text-caption text-weight-medium"
                  style="border-radius: 5px"
                  dense
                  no-caps
                  flat
                  label="semua"
                ></q-btn>
                <q-btn
                  class="q-mx-md bg-grey text-caption text-weight-medium"
                  style="border-radius: 5px"
                  dense
                  no-caps
                  flat
                  label="harga:termurah"
                ></q-btn>
                <q-btn
                  class="bg-grey text-caption text-weight-medium"
                  style="border-radius: 5px"
                  dense
                  no-caps
                  flat
                  label="harga:termahal"
                ></q-btn>
              </div>
            </q-card-section>
            <div class="text-subtitle2">batas harga</div>
            <q-card-section class="row items-center no-wrap">
              <div class="row">
                <q-input
                  class="text-caption"
                  dense
                  style="width: 30%"
                  outlined
                  v-model="text"
                  placeholder="Harga min"
                />
                <q-input
                  class=" text-caption"
                  dense
                  style="width: 30%"
                  outlined
                  v-model="text"
                  placeholder="Harga max"
                />
              </div>
            </q-card-section>
            <div class="text-subtitle2">Kondisi</div>
            <q-card-section class="row items-center no-wrap">
              <div class="row">
                <q-btn
                  class="bg-grey text-caption text-weight-medium q-px-md"
                  style="border-radius: 5px"
                  dense
                  no-caps
                  flat
                  label="semua"
                ></q-btn>
                <q-btn
                  class="
                    
                    bg-grey
                    text-caption text-weight-medium
                    q-px-md
                  "
                  style="border-radius: 5px"
                  dense
                  no-caps
                  flat
                  label="Baru"
                ></q-btn>
                <q-btn
                  class="bg-grey text-caption text-weight-medium q-px-md"
                  style="border-radius: 5px"
                  dense
                  no-caps
                  flat
                  label="Bekas"
                ></q-btn>
              </div>
            </q-card-section>
            <div class="row">
              <q-btn
                style="background-color: #9b27f1"
                label="Terapkan"
                no-caps
                flat
                class="full-width"
              ></q-btn>
            </div> -->