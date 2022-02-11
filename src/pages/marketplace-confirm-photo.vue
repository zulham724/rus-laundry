<template>
  <q-layout class="mbl">
    <q-header class="text-center">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.back()">
          <q-avatar size="25px" style="color: #7d7d7d" icon="fas fa-arrow-left">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium text-body1"
          style="color: #484848"
          >Potong
        </q-toolbar-title>
        <q-btn dense flat no-caps class="text-indigo-10" label="lanjut"></q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <img style="width: 100%" src="~/assets/exmpcrop1.svg" />
          <q-scroll-area class="q-ml-xl" style="height: 130px; max-width: 300px">
            <div class="row no-wrap">
              <div
                v-for="n in 10"
                :key="n"
                style="width: 120px"
                class="q-pa-sm text-black"
              >
                <img src="~/assets/exmimg5.svg">
              </div>
            </div>
          </q-scroll-area>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style>
</style>