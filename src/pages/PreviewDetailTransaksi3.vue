<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container style="background-color: #fafafa">
      <q-page class="bg-white">
        <div class="q-pt-md">
          <div class="q-px-md" style="font-weight: bold; font-size: 20px">
            Layanan
          </div>
          <div class="full-width q-px-md">
            <q-btn-dropdown
              class="full-width"
              style="background-color: #eaeaea"
              text-color="grey-7"
              label="Reguler cuci kering + setrika"
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

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="q-px-md q-mt-md">
          <q-card class="q-pt-md">
            <div class="q-px-md" style="font-weight: bold; font-size: 20px">
              Status
            </div>
            <div class="q-px-md">
              <div class="row">
                <div class="col" style="width:40%">halo bang</div>
                <div class="col" style="width:60%">
                  <q-stepper
                    flat
                    v-model="step"
                    vertical
                    color="primary"
                    animated
                  >
                    <q-step
                      :name="1"
                      title="Pesanan Diproses"
                      icon="settings"
                      :done="step > 1"
                    >
                      Pesanan kamu sedang di cuci petugas

                      <q-stepper-navigation>
                        <q-btn
                          @click="step = 2"
                          color="primary"
                          label="Continue"
                        />
                      </q-stepper-navigation>
                    </q-step>

                    <q-step
                      :name="2"
                      title="Pesanan Selesai"
                      caption="Optional"
                      icon="create_new_folder"
                      :done="step > 2"
                    >
                      Pesanan kamu sudah siap diambil

                      <q-stepper-navigation>
                        <q-btn
                          @click="step = 4"
                          color="primary"
                          label="Continue"
                        />
                        <q-btn
                          flat
                          @click="step = 1"
                          color="primary"
                          label="Back"
                          class="q-ml-sm"
                        />
                      </q-stepper-navigation>
                    </q-step>
                  </q-stepper>
                </div>
              </div>
            </div>
          </q-card>
        </div>

        <div class="q-pt-md">
          <q-card bordered class="q-mx-md">
            <q-card-section>
              <div class="q-px-md" style="font-weight: bold; font-size: 20px">
                Status
              </div>
              <div class="column">
                <div class="row">
                  <div class="col-5">Layanan</div>
                  <div class="col-7 text-right">
                    Reguler cuci kering + setrika
                  </div>
                </div>
                <div class="row">
                  <div class="col-5">Item</div>
                  <div class="col-7 text-right">Pakaian halus</div>
                </div>
                <div class="row">
                  <div class="col-5">Estimasi pesanan</div>
                  <div class="col-7 text-right">1 jam</div>
                </div>
                <div class="row">
                  <div class="col-5">Berat</div>
                  <div class="col-7 text-right">1 Kg</div>
                </div>
              </div>
              <div class="text-center">
                - - - - - - - - - - - - - - - - - - - - -
              </div>
              <div class="row">
                <div class="col-5">Harga</div>
                <div class="col-7 text-right">1 Kg</div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="q-pt-md">
          <div class="q-px-md" style="font-weight: bold; font-size: 20px">
            Informasi Pesanan
          </div>
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
        <div class="q-pt-md">
          <div class="q-px-md" style="font-weight: bold; font-size: 20px">
            Total Harga
          </div>
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
      step: ref(1),
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
