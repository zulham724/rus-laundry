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
              class="col-4 self-center text-weight-medium text-center text-black"
              style="font-size: 20px"
            >
              Cabang
            </div>
            <div class="col-4 self-center text-right q-px-sm">
              <q-btn @click="alert = true" rounded color="white" text-color="black" label="Tambah" />
            </div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div class="q-px-sm q-py-sm">
          <q-card class="bgCard" style="border-radius: 10px">
            <div class="q-px-sm">
              <div class="row">
                <div class="col-6">
                  <div>Nama Laundry</div>
                  <div class="text-white text-h6">Laundry RUS</div>
                </div>
                <div class="col-6 self-center text-right">
                  <q-btn round flat>
                    <img
                      src="~/assets/trash.png"
                      style="width: 60%; height: 60%"
                    />
                  </q-btn>
                </div>
              </div>
              <div>
                <div>
                  <div>Tanggal Pembuatan</div>
                  <div class="text-white text-h6">07/09/2020, 13:00:20</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Jumlah Pesanan</div>
                  <div class="text-white text-h6">145</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Status</div>
                  <div class="text-white text-h6">Hidup</div>
                </div>
              </div>
            </div>

            <q-btn
              no-caps
              class="full-width"
              style="
                background-color: #22c7dd;
                border-radius: 0px 0px 10px 10px;
              "
            >
              <div class="text-h6" style="color: #fff">Detail Cabang</div>
            </q-btn>
          </q-card>
        </div>

        <div class="q-px-sm q-py-sm">
          <q-card class="bgCard" style="border-radius: 10px">
            <div class="q-px-sm">
              <div class="row">
                <div class="col-6">
                  <div>Nama Laundry</div>
                  <div class="text-white text-h6">Laundry RUS</div>
                </div>
                <div class="col-6 self-center text-right">
                  <q-btn round flat>
                    <img
                      src="~/assets/trash.png"
                      style="width: 60%; height: 60%"
                    />
                  </q-btn>
                </div>
              </div>
              <div>
                <div>
                  <div>Tanggal Pembuatan</div>
                  <div class="text-white text-h6">07/09/2020, 13:00:20</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Jumlah Pesanan</div>
                  <div class="text-white text-h6">145</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Status</div>
                  <div class="text-white text-h6">Hidup</div>
                </div>
              </div>
            </div>

            <q-btn
              no-caps
              class="full-width"
              style="
                background-color: #22c7dd;
                border-radius: 0px 0px 10px 10px;
              "
            >
              <div class="text-h6" style="color: #fff">Detail Cabang</div>
            </q-btn>
          </q-card>
        </div>
        <div class="q-px-sm q-py-sm">
          <q-card class="bgCard" style="border-radius: 10px">
            <div class="q-px-sm">
              <div class="row">
                <div class="col-6">
                  <div>Nama Laundry</div>
                  <div class="text-white text-h6">Laundry RUS</div>
                </div>
                <div class="col-6 self-center text-right">
                  <q-btn round flat>
                    <img
                      src="~/assets/trash.png"
                      style="width: 60%; height: 60%"
                    />
                  </q-btn>
                </div>
              </div>
              <div>
                <div>
                  <div>Tanggal Pembuatan</div>
                  <div class="text-white text-h6">07/09/2020, 13:00:20</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Jumlah Pesanan</div>
                  <div class="text-white text-h6">145</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Status</div>
                  <div class="text-white text-h6">Hidup</div>
                </div>
              </div>
            </div>

            <q-btn
              no-caps
              class="full-width"
              style="
                background-color: #22c7dd;
                border-radius: 0px 0px 10px 10px;
              "
            >
              <div class="text-h6" style="color: #fff">Detail Cabang</div>
            </q-btn>
          </q-card>
        </div>
        <div class="q-px-sm q-py-sm">
          <q-card class="bgCard " style="border-radius: 10px">
            <div class="q-px-sm">
              <div class="row">
                <div class="col-6">
                  <div>Nama Laundry</div>
                  <div class="text-white text-h6">Laundry RUS</div>
                </div>
                <div class="col-6 self-center text-right">
                  <q-btn round flat>
                    <img
                      src="~/assets/trash.png"
                      style="width: 60%; height: 60%"
                    />
                  </q-btn>
                </div>
              </div>
              <div>
                <div>
                  <div>Tanggal Pembuatan</div>
                  <div class="text-white text-h6">07/09/2020, 13:00:20</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Jumlah Pesanan</div>
                  <div class="text-white text-h6">145</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Status</div>
                  <div class="text-white text-h6">Hidup</div>
                </div>
              </div>
            </div>

            <q-btn
              no-caps
              class="full-width"
              style="
                background-color: #22c7dd;
                border-radius: 0px 0px 10px 10px;
              "
            >
              <div class="text-h6" style="color: #fff">Detail Cabang</div>
            </q-btn>
          </q-card>
        </div>

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
