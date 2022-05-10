<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container style="background-color: #fafafa">
      <q-page class="bg-white">
        <div v-if="detail_order" class="bg-white q-mx-lg q-mt-lg">
          <div class="row">
            <div class="col-2 text-right">
              <q-img src="~/assets/Ellipse173.png" width="40%" />
            </div>
            <div class="col-8 self-center">
              <q-separator
                :color="detail_order.percentage == 100 ? 'teal-5' : 'grey-6'"
                class="q-mx-none"
                inset
              />
            </div>
            <div class="col-2">
              <q-img
                v-if="detail_order.percentage != 100"
                src="~/assets/Ellipse174.png"
                width="40%"
              />

              <q-img v-else src="~/assets/Ellipse173.png" width="40%" />
            </div>
          </div>
          <div class="row">
            <div class="col-2 text-right" style="color: #49c2c0">Diproses</div>
            <div class="col-8 self-center"></div>
            <div class="col-2">
              <div v-if="detail_order.percentage == 100" style="color: #49c2c0">
                Selesai
              </div>
              <div v-else style="color: #49c2c0">Selesai</div>
            </div>
          </div>
        </div>
        <div>
          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="teal-4"
            navigation
            padding
            class="text-white q-px-sm q-pt-md"
          >
            <q-carousel-slide
              class="column no-wrap"
              :name="`slide-${service.id}`"
              v-for="service in detail_order.services"
              :key="service.id"
            >
              <div>
                <!-- teks layanan -->
                <div>
                  <div style="color: #49c2c0; font-size: 20px">Layanan</div>
                  <div style="font-size: 24px" class="text-black">
                    {{ service.name }}
                  </div>
                </div>
                <!-- teks Jenis Item-->
                <div>
                  <div style="color: #49c2c0; font-size: 20px">Jenis Item</div>
                  <div style="font-size: 24px" class="text-black">
                    {{ service.category }}
                  </div>
                </div>
                <!-- teks Estimasi Pesanan-->
                <div>
                  <div style="color: #49c2c0; font-size: 20px">
                    Estimasi Pesanan
                  </div>
                  <div style="font-size: 24px" class="text-black">
                    {{ service.process_time }} Jam
                  </div>
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
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
