<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div>
          <q-stepper
            v-model="step"
            ref="stepper"
            alternative-labels
            color="primary"
            animated
            flat
            done-color="teal-5"
            active-color="teal-5"
            inactive-color="grey"
          >
          <!-- stepper diproses -->
            <q-step :name="1" title="Diproses" :done="step > 1">
              <q-carousel
                v-model="slide"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                infinite
                class="text-white shadow-1 rounded-borders"
              >
                <q-carousel-slide
                  name="style"
                  class="column no-wrap flex-center"
                >
                  <div class="q-px-lg">
                    <!-- teks layanan -->
                    <div>
                      <div style="color: #49c2c0; font-size: 20px">Layanan2</div>
                      <div style="font-size: 24px" class="text-black">
                        reguler cuci kering + setrika
                      </div>
                    </div>
                    <!-- teks Jenis Pakaian-->
                    <div>
                      <div style="color: #49c2c0; font-size: 20px">
                        Jenis Pakaian
                      </div>
                      <div style="font-size: 24px;" class="text-black">
                        reguler cuci kering + setrika
                      </div>
                    </div>
                    <!-- teks Estimasi Pesanan-->
                    <div>
                      <div style="color: #49c2c0; font-size: 20px">
                        Estimasi Pesanan
                      </div>
                      <div style="font-size: 24px" class="text-black">2 bulan</div>
                    </div>
                  </div>
                </q-carousel-slide>
                <q-carousel-slide name="tv" class="column no-wrap flex-center">
                  <div class="q-px-lg">
                    <!-- teks layanan -->
                    <div>
                      <div style="color: #49c2c0; font-size: 20px">Layanan3</div>
                      <div style="font-size: 24px" class="text-black">
                        reguler cuci kering + setrika
                      </div>
                    </div>
                    <!-- teks Jenis Pakaian-->
                    <div>
                      <div style="color: #49c2c0; font-size: 20px">
                        Jenis Pakaian
                      </div>
                      <div style="font-size: 24px;" class="text-black">
                        reguler cuci kering + setrika
                      </div>
                    </div>
                    <!-- teks Estimasi Pesanan-->
                    <div>
                      <div style="color: #49c2c0; font-size: 20px">
                        Estimasi Pesanan
                      </div>
                      <div style="font-size: 24px" class="text-black">2 bulan</div>
                    </div>
                  </div>
                </q-carousel-slide>
              </q-carousel>>
            </q-step>
            
            <!-- stepper selesai -->
            <q-step :name="2" title="Selesai" :done="step > 2">
              <q-carousel
                v-model="slide"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                infinite
                class="bg-primary text-white shadow-1 rounded-borders"
              >
                <q-carousel-slide
                  name="style"
                  class="column no-wrap flex-center"
                >
                </q-carousel-slide>
                <q-carousel-slide name="tv" class="column no-wrap flex-center">
                </q-carousel-slide>
              </q-carousel>
            </q-step>
          </q-stepper>
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
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style></style>
