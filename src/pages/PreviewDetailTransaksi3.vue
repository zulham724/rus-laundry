<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container style="background-color: #fafafa">
      <q-page class="bg-white">
        <div class="q-pt-md">
          <div class="q-px-md" style="font-weight: bold; font-size: 20px">Layanan</div>
          <div class=" full-width q-px-md">
            <q-btn-dropdown class="full-width" style="background-color:#EAEAEA" label="Reguler cuci kering + setrika">
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

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class=" q-pt-md">
          <div class="q-px-md" style="font-weight: bold; font-size: 20px">Status</div>
          <div class="q-px-md">halooooo</div>
        </div>
        <div class="q-pt-md">
            <q-card bordered class=" q-mx-sm">
          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            quibusdam sunt laborum at totam magni molestias molestiae ad, ipsa
            provident voluptatem sapiente sed aspernatur? Ea distinctio minima
            est error incidunt.
          </q-card-section>
        </q-card>
        </div>
        
        <div class=" q-pt-md">
          <div class="q-px-md" style="font-weight: bold; font-size: 20px">Informasi Pesanan</div>
          <div class="q-px-md column">
              <div class="row">
                  <div class="col-6">dawdwa</div>
                  <div class="col-6 text-right">dawdwa</div>
              </div>
              <div class="row">
                  <div class="col-6">dawdwa</div>
                  <div class="col-6 text-right">dawdwa</div>
              </div>
              <div class="row">
                  <div class="col-6">dawdwa</div>
                  <div class="col-6 text-right">dawdwa</div>
              </div>
          </div>
        </div>
        <div class=" q-pt-md">
          <div class="q-px-md" style="font-weight: bold; font-size: 20px">Total Harga</div>
          <div class="q-px-md">halooooo</div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["orderid"],

  data() {
    return {
      slide: ref("style"),
      detail_order: {},
      slide: null,
      order: null,
    };
  },

  mounted() {
    this.getDetailOrder();
  },

  methods: {
    getDetailOrder() {
      this.isLoad = true;
      this.$store
        .dispatch("Orders/show", this.orderid)
        .then((res) => {
          this.detail_order = res.data;
          console.log("ini detail_order", this.detail_order);

          if (res.data.services.length) {
            this.slide = `slide-${res.data.services[0].id}`;
            this.order = res.data;
            console.log("Ini order", this.order);
          } else {
            this.slide = "slide-0";
          }
        })
        .finally(() => {
          this.isLoad = false;
        });
    },
  },
};
</script>

<style></style>
