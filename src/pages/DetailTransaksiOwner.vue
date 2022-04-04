<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container class="mbl-child">
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
              style="font-size: 17px"
            >
              Transaksi
            </div>
            <div class="col-4 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div class="q-px-sm q-py-sm text-h6 text-weight-bold text-center">
          Laundry RUS
        </div>
        <!-- TAB PEMASUKAN DAN PENGELUARAN -->
        <div class="row">
          <div class="col-6 text-center q-px-sm">
            <q-card
              v-ripple
              class="q-py-sm"
              style="background-color: #233471; border-radius: 10px"
            >
              <q-img src="~/assets/elmsk.png" width="50%" />
              <div class="text-white text-center self-center">Pemasukan</div>
            </q-card>
          </div>

          <div class="col-6 text-center q-px-sm">
            <q-card
              v-ripple
              class="q-py-sm"
              style="background-color: #44495f; border-radius: 10px"
            >
              <q-img src="~/assets/elmdk.png" width="50%" />
              <div class="text-white text-center self-center">Pengeluaran</div>
            </q-card>
          </div>
        </div>

        <!-- TAB PEMASUKAN DAN NOMINAL -->
        <div class="q-mt-sm q-px-sm">
          <q-card
            v-ripple
            style="background-color: #233471; border-radius: 10px"
          >
            <div class="row">
              <div class="col-6 q-py-md">
                <div class="row">
                  <div class="col-1"></div>
                  <div class="col-4 q-px-xs">
                    <q-img src="~/assets/yen.png" />
                  </div>
                  <div class="col-7 q-px-xs self-center">
                    <div class="text-white self-center" style="font-size: 12px">
                      Pemasukan
                    </div>
                    <div class="text-white self-center" style="font-size: 10px">
                      Tren Keseimbangan
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-6 q-py-md self-center">
                <div class="row">
                  <div class="col-1">
                    <q-separator vertical color="white" class="q-my-sm" />
                  </div>

                  <div class="col-11 q-px-xs self-center">
                    <div class="text-white self-center" style="font-size: 18px">
                      Rp. 500.000
                    </div>
                    <div
                      class="text-white self-center row"
                      style="font-size: 10px"
                    >
                      <div class="text-green col-2">+4.3%</div>
                      <div class="col-1"></div>
                      <div class="col-9">Tren Keseimbangan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </div>
        <!-- TAB SELECT -->
        <div class="q-mt-sm row">
          <div class="col-3"></div>
          <div class="col-3"></div>
          <div class="col-6 q-px-sm">
            <q-select
              dense
              rounded
              outlined
              v-model="model"
              :options="options"
            />
          </div>
        </div>
        <!-- TAB LIST -->
        <!-- ITEM SURPLUS -->
        <div class="q-mt-sm q-px-sm" v-for="a in 2" :key="a">
          <q-item v-ripple class="bg-white shadow-1" style="border-radius: 25px">
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Budi RianEko</q-item-label>
              <q-item-label caption class="text-black"
                >07-Sept-2022, 13.00</q-item-label
              >
            </q-item-section>

            <q-item-section side>
              <q-item-label caption style="color: #00ff38"
                >+Rp 50.000</q-item-label
              >
            </q-item-section>
          </q-item>
        </div>
        <!-- ITEM DEFISIT -->
        <div class="q-mt-sm q-px-sm" v-for="a in 2" :key="a">
          <q-item v-ripple class="bg-white shadow-1" style="border-radius: 25px">
            <q-item-section avatar>
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Budi RianEko</q-item-label>
              <q-item-label caption class="text-black"
                >07-Sept-2022, 13.00</q-item-label
              >
            </q-item-section>

            <q-item-section side>
              <q-item-label caption style="color: #dd2222"
                >-Rp 50.000</q-item-label
              >
            </q-item-section>
          </q-item>
        </div>
        <!-- ITEM NULL -->
        <div class="q-mt-sm q-px-sm text-center q-py-lg" >
          <q-img src="~/assets/itmn.png" width="60%"/>
          <div class="text-h6 q-py-sm">
            Tidak Ada Pengeluaran Untuk Kategori Laundry
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
    return {
      alert: ref(false),
      model: ref("Semua"),
      options: ["Semua", "Laundry", "Marketplace", "Lainnya"],
    };
  },
  mounted() {},
};
</script>

<style>
.bgCard {
  background-image: linear-gradient(to left, #74b6ff, #00bef8);
}
</style>
