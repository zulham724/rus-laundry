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
              Produk
            </div>
            <div class="col-4 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div class="q-px-sm q-py-sm">
          <q-input
            dense
            color="black"
            label="Cari Karyawan"
            rounded
            outlined
            v-model="search"
            type="search"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="q-px-sm q-py-sm">
          <q-tabs v-model="tab" class="text-black">
            <q-tab name="dilihat" label="Paling Banyak Dilihat" />
            <q-tab name="dipesan" label="Paling Banyak Dipesan" />
          </q-tabs>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="dilihat">
              <div v-for="dupe in 6" class="q-my-sm" :key="dupe">
                <q-card style="border-radius: 10px">
                  <div class="row">
                    <div class="col-4 text-center self-center q-px-sm">
                      <q-img  src="~/assets/sbncc.png" />
                    </div>
                    <div class="col-8 self-center">
                      <div class="q-px-sm">
                        <div class="row">
                          <div class="text-center self-center col-2">
                            <q-avatar square>
                              <img src="~/assets/mnt.png" style="width: 70%; height: 70%"/>
                            </q-avatar>
                          </div>
                          <div
                            class="q-pl-md col-10  text-grey self-center"
                          >
                            <div style="font-size: 13px">Nama Produk</div>
                            <div style="font-size: 11px;  line-height: 100%;" class="text-black">
                              Sabun cuci pengilang dosa
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="text-center self-center col-2">
                            <q-avatar square>
                              <img src="~/assets/lct.png" style="width: 70%; height: 70%"/>
                            </q-avatar>
                          </div>
                          <div
                            class="q-pl-md col-10  text-grey self-center"
                          >
                            <div style="font-size: 13px">Alamat Pelanggan</div>
                            <div style="font-size: 11px; line-height: 100%;" class="text-black">
                              Wergu Kulon Rt5/1 Kudus
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="text-center self-center col-2">
                            <q-avatar square>
                              <img src="~/assets/cll.png" style="width: 70%; height: 70%"/>
                            </q-avatar>
                          </div>
                          <div
                            class="q-pl-md col-10  text-grey self-center"
                          >
                            <div style="font-size: 13px">Jumlah Dilihat</div>
                            <div style="font-size: 11px; line-height: 100%;" class="text-black">
                              085349345768
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="text-center self-center col-2">
                            <q-avatar square>
                              <img
                                src="~/assets/crg.png"
                                style="width: 70%; height: 65%"
                              />
                            </q-avatar>
                          </div>
                          <div
                            class="q-pl-md col-10  text-grey self-center"
                          >
                            <div style="font-size: 13px">Harga Produk</div>
                            <div style="font-size: 11px; line-height: 100%;" class="text-black">
                              Rp 23.000
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card>
              </div>
            </q-tab-panel>
            <q-tab-panel name="dipesan">
              <div v-for="dupe in 6" class="q-my-sm" :key="dupe">
                <q-card style="border-radius: 10px">
                  <div class="row">
                    <div class="col-4 text-center self-center q-px-sm">
                      <q-img  src="~/assets/sbncc.png" />
                    </div>
                    <div class="col-8 self-center">
                      <div class="q-px-sm">
                        <div class="row">
                          <div class="text-center self-center col-2">
                            <q-avatar square>
                              <img src="~/assets/mnt.png" style="width: 70%; height: 70%"/>
                            </q-avatar>
                          </div>
                          <div
                            class="q-pl-md col-10  text-grey self-center"
                          >
                            <div style="font-size: 13px">Nama Produk</div>
                            <div style="font-size: 11px;  line-height: 100%;" class="text-black">
                              Sabun cuci pengilang dosa
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="text-center self-center col-2">
                            <q-avatar square>
                              <img src="~/assets/lct.png" style="width: 70%; height: 70%"/>
                            </q-avatar>
                          </div>
                          <div
                            class="q-pl-md col-10  text-grey self-center"
                          >
                            <div style="font-size: 13px">Alamat Pelanggan</div>
                            <div style="font-size: 11px; line-height: 100%;" class="text-black">
                              Wergu Kulon Rt5/1 Kudus
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="text-center self-center col-2">
                            <q-avatar square>
                              <img src="~/assets/cll.png" style="width: 70%; height: 70%"/>
                            </q-avatar>
                          </div>
                          <div
                            class="q-pl-md col-10  text-grey self-center"
                          >
                            <div style="font-size: 13px">Jumlah Dilihat</div>
                            <div style="font-size: 11px; line-height: 100%;" class="text-black">
                              085349345768
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="text-center self-center col-2">
                            <q-avatar square>
                              <img
                                src="~/assets/crg.png"
                                style="width: 70%; height: 65%"
                              />
                            </q-avatar>
                          </div>
                          <div
                            class="q-pl-md col-10  text-grey self-center"
                          >
                            <div style="font-size: 13px">Harga Produk</div>
                            <div style="font-size: 11px; line-height: 100%;" class="text-black">
                              Rp 23.000
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </div>

        <q-dialog v-model="alert">
          <q-card style="border-radius: 20px">
            <q-card-section class="text-center">
              <q-img src="~/assets/alert.png" style="width: 40%; height: 40%" />
            </q-card-section>
            <q-card-section class="text-center">
              <div class="text-weight-bold" style="font-size: 18px">
                Apakah anda benar- benar yakin untuk menghapus Pelanggan?
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
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      tab: ref("dilihat"),
      alert: ref(false),
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
