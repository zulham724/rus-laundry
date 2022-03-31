<template>
  <q-layout>
    <q-page-container>
      <div class="fixed-top shadow-2 bg-white" style="z-index: 999">
        <q-header class="bg-transparent" elevated>
          <div class="row full-width q-py-sm bg-white justify-center">
            <div class="col-4 q-px-sm self-center">
              <q-btn
                flat
                round
                size="10px"
                @click="$router.push('/make-an-order')"
              >
                <q-avatar
                  size="20px"
                  icon="fas fa-arrow-left"
                  style="color: #888888"
                >
                </q-avatar>
              </q-btn>
            </div>
            <div
              class="col-4 self-center text-weight-medium text-center text-black"
              style="font-size: 20px"
            >
              Laundry Rus
            </div>
            <div class="col-4 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <!-- TAB JUMLAH PESANAN & PERKEMBANGAN -->
        <div class="row">
          <div class="col-6 q-px-sm q-py-xs">
            <q-card
              class="text-center q-py-sm"
              style="background-color: #87cfff"
            >
              <q-img width="20%" src="~/assets/icppn.svg" />
              <div class="text-white text-weight-medium">Jumlah Pesanan</div>
              <div class="text-weight-medium" style="color: #e8e1e1">134</div>
            </q-card>
          </div>
          <div class="col-6 q-px-sm q-py-xs">
            <q-card
              class="text-center q-py-sm"
              style="background-color: #87cfff"
            >
              <q-img width="20%" src="~/assets/ttm.svg" />
              <div class="text-white text-weight-medium">Perkembangan</div>
              <div class="text-weight-medium" style="color: #e8e1e1">0,0%</div>
            </q-card>
          </div>
        </div>

        <!-- TAB LAYANAN & TRANSAKSI -->
        <div class="row">
          <div class="col-6 q-px-sm q-py-xs">
            <q-card
                
              class="text-center q-py-sm"
              style="background-color: #D8C4FC; border-radius: 14px"
            >
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/pktt.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-left">
                  <q-item-label class="text-white text-weight-medium">Layanan</q-item-label>
                  <q-item-label class="text-white" caption
                    >3 Paket Tersedia</q-item-label
                  >
                </q-item-section>

              </q-item>
            </q-card>
          </div>
          <div class="col-6 q-px-sm q-py-xs">
            <q-card
                
              class="text-center q-py-sm"
              style="background-color: #64F4FF; border-radius: 14px"
            >
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/cttn.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-left">
                  <q-item-label class="text-white text-weight-medium">Layanan</q-item-label>
                  <q-item-label class="text-white" caption
                    >3 Paket Tersedia</q-item-label
                  >
                </q-item-section>

              </q-item>
            </q-card>
          </div>
        </div>

        <!-- TAB PELANGGAN & KARYAWAN -->
        <div class="row">
          <div class="col-6 q-px-sm q-py-xs">
            <q-card
                
              class="text-center q-py-sm"
              style="background-color: #8CA8FF; border-radius: 14px"
            >
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/pktt.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-left">
                  <q-item-label class="text-white text-weight-medium">Pelanggan</q-item-label>
                  <q-item-label class="text-white" caption
                    >3 Paket Tersedia</q-item-label
                  >
                </q-item-section>

              </q-item>
            </q-card>
          </div>
          <div class="col-6 q-px-sm q-py-xs">
            <q-card
                
              class="text-center q-py-sm"
              style="background-color: #FCC4E8; border-radius: 14px"
            >
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/orgct.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-left">
                  <q-item-label class="text-white text-weight-medium">Karyawan</q-item-label>
                  <q-item-label class="text-white" caption
                    >3 Paket Tersedia</q-item-label
                  >
                </q-item-section>

              </q-item>
            </q-card>
          </div>
        </div>

        <!-- TAB PROUDUKS -->
        <div class="row">
          <div class="col-6 q-px-sm q-pt-sm">
            <q-card
                
              class="text-center q-py-sm"
              style="background-color: #FFC377; border-radius: 14px"
            >
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/ppnpkt.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-left">
                  <q-item-label class="text-white text-weight-medium">Produk</q-item-label>
                  <q-item-label class="text-white" caption
                    >3 Produk Tersedia</q-item-label
                  >
                </q-item-section>

              </q-item>
            </q-card>
          </div>
          <div class="col-6 q-px-sm q-py-sm">
          </div>
        </div>

        <!-- TAB CHART DATA JUMLAH PESANAN & PENGHASILAN -->
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
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style>
.bgCard {
  background-image: linear-gradient(to left, #74b6ff, #00bef8);
}
</style>
