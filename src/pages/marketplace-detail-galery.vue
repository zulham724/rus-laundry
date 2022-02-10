<template>
  <q-layout class="mbl">
    <q-header class="text-center">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: black">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium text-body1"
          style="color: #484848"
          >Galeri
        </q-toolbar-title>
        <q-btn dense flat
          ><img style="width: 20px" src="~/assets/camicon1.svg"
        /></q-btn>
      </q-toolbar>
      <div class="text-center text-body1 text-weight-regular bg-white">
        <q-btn-dropdown
          dense
          flat
          no-caps
          color="transparent"
          text-color="indigo-10"
          label="Semua Gambar"
        >
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Videos</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-header>
    <q-page-container>
      <q-page class="">
        <div class="row q-pt-md">
          <div class="col-4">
            <img v-for="n in 5" :key="n" src="~/assets/poto1.svg" />
          </div>
          <div class="col-4">
            <img v-for="n in 5" :key="n" src="~/assets/poto2.svg" />
          </div>
          <div class="col-4">
            <img v-for="n in 5" :key="n" src="~/assets/poto4.svg" />
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