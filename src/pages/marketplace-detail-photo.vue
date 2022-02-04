<template>
  <q-layout class="mbl">
    <q-header class="bg-transparent">
      <div class="q-mt-sm q-ml-sm">
        <q-btn round flat size="10px"><q-icon color="black" name="fas fa-times" /></q-btn>
      </div>
    </q-header>
    <q-page-container>
      <q-page> 
          <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="~/assets/jualan1.svg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>

import { ref } from 'vue'
export default {
    data(){
        return{
            slide: ref(1)
        }
    }
};
</script>

<style>
</style>