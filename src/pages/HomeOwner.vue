<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page>
      <!-- btn dashboard & beli paket -->
      <div class="row q-pt-sm q-px-sm">
        <div class="col-3 bg-white">
          <q-btn flat round size="70%">
            <q-avatar square>
              <img src="~/assets/dsblg.png" style="width: 50%; height: 50%" />
            </q-avatar>
          </q-btn>
        </div>
        <div class="col-4 bg-white"></div>
        <div class="col-5 self-center">
          <q-btn
            @click="alert = true"
            rounded
            class="bg-white full-width self-center"
            style="height: 70%"
          >
            <div class="row full-width">
              <div class="col-4">
                <q-avatar size="200%">
                  <img src="~/assets/box.png" />
                </q-avatar>
              </div>
              <div class="col-8 self-center">Beli Paket</div>
            </div>
          </q-btn>
        </div>
      </div>

      <br />
      <!-- tab info -->
      <div class="col">
        <div class="row">
          <div class="col-6 q-pa-sm">
            <q-btn
              no-caps
              class="bgJumlahPesanan shadow-2 q-px-md full-height full-width"
              style="border-radius: 10px"
            >
              <div class="full-width self-center text-center full-height">
                <div class="q-pt-lg">
                  <q-img
                    no-spinner
                    src="~/assets/pp.png"
                    width="50px"
                    height="50px"
                  >
                  </q-img>
                </div>

                <div class="col full-width">
                  <div class="row">
                    <div
                      class="text-weight-medium q-pt-md text-left"
                      style="color: #fff; font-size: small"
                    >
                      Jumlah Pesanan
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="text-weight-medium text-left"
                      style="color: #fff; font-size: small"
                    >
                      11040385235907
                    </div>
                  </div>
                </div>
              </div>
            </q-btn>
          </div>
          <!-- info perkembangan -->
          <div class="col-6 q-pa-sm">
            <q-btn
              no-caps
              class="bgInfoPerkembangan shadow-2 q-px-md full-height full-width"
              style="border-radius: 10px"
            >
              <div class="full-width self-center text-center full-height">
                <div class="q-pt-lg">
                  <q-img
                    no-spinner
                    src="~/assets/perkembangan.png"
                    width="50px"
                    height="50px"
                  >
                  </q-img>
                </div>

                <div class="col full-width">
                  <div class="row">
                    <div
                      class="text-weight-medium q-pt-md text-left"
                      style="color: #fff; font-size: small"
                    >
                      Info Perkembangan
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="text-weight-medium text-left"
                      style="color: #fff; font-size: small"
                    >
                      0.0%
                    </div>
                  </div>
                </div>
              </div>
            </q-btn>
          </div>
        </div>
        <div class="row">
          <!-- info penghasilan keseluruhan -->
          <div class="col">
            <div class="col-6 q-pa-sm">
              <q-btn
                no-caps
                class="bgPenghasilanKeseluruhan shadow-2 q-px-md full-height full-width"
                style="border-radius: 10px"
              >
                <div class="self-center text-center full-height full-width">
                  <div class="q-pt-lg">
                    <q-img
                      no-spinner
                      src="~/assets/pengke.png"
                      width="50px"
                      height="50px"
                    >
                    </q-img>
                  </div>

                  <div class="col full-width">
                    <div class="row">
                      <div
                        class="text-weight-medium q-pt-md text-left"
                        style="color: #fff; font-size: small"
                      >
                        Penghasilan
                      </div>
                    </div>
                    <div class="row">
                      <div
                        class="text-weight-medium text-left"
                        style="color: #fff; font-size: small"
                      >
                        Rp. 100.000
                      </div>
                    </div>
                  </div>
                </div>
              </q-btn>
            </div>
          </div>
          <!-- info paket entrepreneur -->
          <div class="col">
            <div class="col-6 q-pa-sm">
              <q-btn
                no-caps
                class="bgPaketEntrepreneur shadow-2 q-px-md full-height full-width"
                style="border-radius: 10px"
              >
                <div class="full-width self-center text-center full-height">
                  <div class="q-pt-lg">
                    <q-img
                      no-spinner
                      src="~/assets/pae.png"
                      width="50px"
                      height="50px"
                    >
                    </q-img>
                  </div>

                  <div class="col full-width">
                    <div class="row">
                      <div
                        class="text-weight-medium q-pt-md text-left"
                        style="color: #fff; font-size: small"
                      >
                        Paket Entrepreneur
                      </div>
                    </div>
                    <div class="row">
                      <div
                        class="text-weight-medium text-left"
                        style="color: #fff; font-size: small"
                      >
                        12 Desember 2022
                      </div>
                    </div>
                  </div>
                </div>
              </q-btn>
            </div>
          </div>
        </div>
      </div>

      <br />
      <!-- tab chart data jumlah pesanan & penghasilan -->
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="row q-px-md q-py-md text-weight-bold">
              Data Jumlah Pesanan
            </div>
            <div class="row justify-center q-pb-md">
              <q-img no-spinner src="~/assets/chart.png" style="width: 90%">
              </q-img>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="row q-px-md q-py-md text-weight-bold">Penghasilan</div>
            <div class="row justify-center q-pb-md">
              <q-img no-spinner src="~/assets/chart2.png" style="width: 90%">
              </q-img>
            </div>
          </div>
        </div>
      </div>

      <br />
      <!-- tab jumlah pesanan tiap cabang -->
      <div>
        <div class="row q-px-md q-py-md text-weight-bold">
          Jumlah Pesanan Tiap Cabang
        </div>
        <div>
          <q-carousel animated height="100%" v-model="slide" swipeable infinite>
            <q-carousel-slide :name="1">
              <div class="col">
                <div class="row justify-center">
                  <q-img
                    src="~/assets/circ.png"
                    style="width: 60%; height: 60%"
                    class="self-center"
                  />
                </div>
                <div class="row justify-center q-py-md">Laundry Amsterdam</div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2">
              <div class="col">
                <div class="row justify-center">
                  <q-img
                    src="~/assets/circ2.png"
                    style="width: 60%; height: 60%"
                    class="self-center"
                  />
                </div>
                <div class="row justify-center q-py-md">Laundry Utrecht</div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>

      <br />
      <!-- tab penghasilan tiap cabang -->
      <div>
        <div class="row q-px-md q-py-md text-weight-bold">
          Penghasilan Tiap Cabang
        </div>
        <div>
          <q-carousel
            control-color="blue"
            height="100%"
            animated
            v-model="slide"
            swipeable
            navigation
            infinite
          >
            <q-carousel-slide :name="1">
              <div class="col">
                <div class="row">
                  <q-img src="~/assets/mount.png" class="self-center" />
                </div>
                <div class="row q-py-md q-mb-lg">Laundry Amsterdam</div>
              </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2">
              <div class="col">
                <div class="row">
                  <q-img src="~/assets/mount.png" class="self-center" />
                </div>
                <div class="row q-py-md q-mb-lg">Laundry Utrecht</div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>

      <!-- dialog ganti paket -->
      <q-dialog v-model="alert">
        <q-card>
          <q-card-section class="text-center">
            <q-img src="~/assets/alert.png" style="width: 40%; height: 40%" />
          </q-card-section>
          <q-card-section class="text-center">
            <div class="text-h6">
              Apakah anda benar- benar yakin untuk mengganti Paket?
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Jika Yakin tekan Yakin, Jika tidak tekan Tidak
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Tidak" color="grey" v-close-popup />
            <q-btn flat label="Yakin" color="red" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  data() {
    return {
      slide: ref(1),
      alert: ref(false),
    };
  },
  mounted() {},
};
</script>

<style>
.bgJumlahPesanan {
  background-image: linear-gradient(to right, #ad90ff, #8c64ff);
}

.bgInfoPerkembangan {
  background-image: linear-gradient(to right, #ff85ec, #ff49e3);
}

.bgPenghasilanKeseluruhan {
  background-image: linear-gradient(to right, #71d3f1, #16bdf2);
}

.bgPaketEntrepreneur {
  background-image: linear-gradient(to right, #edbd7a, #f4a333);
}
</style>
