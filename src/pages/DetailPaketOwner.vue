<template>
  <q-layout  class="mbl" view="lHh lpR fFf">
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
              class="col-3 self-center text-weight-medium text-center text-black"
              style="font-size: 17px"
            >
              Cabang
            </div>
            <div class="col-5  self-center text-right q-px-sm">
              <q-btn @click="alert = true" no-caps rounded dense style="font-size:13px; color:#000">
                <div>Tambah Cabang</div>
              </q-btn>
            </div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div v-for="dupe in 6" :key="dupe" class="q-px-sm q-py-sm">
          <q-card class="q-px-" style="border-radius: 10px">
            <div class="q-px-sm">
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/bx.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div style="font-size:16px">Nama Paket</div>
                  <div style="font-size:16px" class="text-black">Super Express</div>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/cal.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div style="font-size:16px">Tanggal Pembuatan</div>
                  <div style="font-size:16px" class="text-black">07/09/2020</div>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/tm.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div style="font-size:16px">Waktu Pengerjaan</div>
                  <div style="font-size:16px" class="text-black">72 Jam</div>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/pt.png" />
                  </q-avatar>
                </div>
                <div  class="q-pl-sm col-5 text-h6 text-grey self-center">
                  <div style="font-size:16px" >Harga</div>
                  <div style="font-size:16px" class="text-black">Rp 290.000</div>
                </div>
                <div class="q-pl-sm col-5  text-h6 text-grey self-center">
                  <div class="row">
                    <div class="col-6 ">
                      <q-btn
                        class="q-py-none q-px-xs"
                        flat
                        color="white"
                        text-color="blue"
                        label="Hapus"
                      />
                    </div>
                    <div class="col-6">
                      <q-btn
                      class="q-py-none q-px-md"
                        
                        color="blue"
                        text-color="white"
                        label="Edit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </div>



        <q-dialog v-model="alert">
          <q-card style="border-radius:20px">
            <q-card-section class="text-center">
              <q-img src="~/assets/alert.png" style="width: 40%; height: 40%" />
            </q-card-section>
            <q-card-section class="text-center">
              <div class="text-weight-bold"  style="font-size:18px; ">
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
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
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
