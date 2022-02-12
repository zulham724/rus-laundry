<template>
  <q-layout class="mbl">
    <div class="fixed-top" style="z-index: 999">
      <q-header class="text-center shadow-1">
        <q-toolbar class="bg-white">
          <q-btn flat round @click="$router.back()">
            <q-avatar size="25px" icon="fas fa-arrow-left" style="color: black">
            </q-avatar>
          </q-btn>
          <q-toolbar-title
            class="text-left text-weight-medium"
            style="color: #3a3838; font-size: 18px"
            >Baru baru ini dilihat
          </q-toolbar-title>
          <q-item-section
            side
            class="text-left text-weight-medium"
            style="color: #5a5656; font-size: 15px"
          >
          </q-item-section>
        </q-toolbar>
      </q-header>
    </div>
    <q-page-container>
      <q-page>
        <!-- Search bar -->
        <q-input
          dense
          bg-color="white"
          class="q-mx-sm q-mt-md shadow-1"
          type="search"
          style="border-radius: 20px"
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

        <!-- Skeleton -->
        <div v-if="isLoad">
          <div v-for="n in 4" :key="n" class="row q-mt-md">
            <div class="col-6 q-pa-sm">
              <q-card class="full-width q-pa-md">
                <!--Image -->
                <q-skeleton height="150px" square />

                <!-- Text nama barang -->
                <q-skeleton type="text" />
                <q-skeleton type="text" />
                <q-skeleton type="text" width="100px" />
                <q-skeleton type="text" width="80px" />
              </q-card>
            </div>
            <div class="col-6 q-pa-sm">
              <q-card class="full-width q-pa-md">
                <!--Image -->
                <q-skeleton height="150px" square />

                <!-- Text nama barang -->
                <q-skeleton type="text" />
                <q-skeleton type="text" />
                <q-skeleton type="text" width="100px" />
                <q-skeleton type="text" width="80px" />
              </q-card>
            </div>
          </div>
        </div>

        <div class="row">
            <div class="col-6" v-for="n in 9" :key="n">
              <q-card
                class="q-pb-md q-mx-sm q-my-sm"
                @click="$router.push(`/marketplace-detail/${product.id}`)"
              >
                <!--<img
                  v-if="product.images.length"
                  class="bg-red"
                  :src="STORAGE_URL + `/` + product.images[0].src"
                  style="height: 150px"
                />

                <img v-else class="bg-red" style="height: 150px" />-->
                <img class="bg-red" style="height: 150px" />
                <div
                  class="text-caption text-weight-medium q-pl-xs"
                  style="color: #5f5f5f"
                >
                  acer pretidur
                </div>
                <div
                  class="text-subtitle2 text-weight-medium q-pl-xs"
                  style="color: #161952"
                >
                  Rp. 32.000,00
                </div>
                <div class="text-caption q-pl-xs">
                  <q-icon name="fas fa-map-marker-alt" color="red" />
                  Semarang
                </div>
              </q-card>
            </div>
          </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      isLoad: false,
    }
  },
};
</script>

<style>
</style>