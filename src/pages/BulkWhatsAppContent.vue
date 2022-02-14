<template>
  <q-layout class="mbl" style="z-index: 999">
    <!--Header-->
    <div class="fixed-top bg-white" style="z-index: 999">
      <q-header class="text-center shadow-1">
        <q-toolbar class="bg-white q-py-sm row">
          <q-btn flat round @click="$router.push('/bulk-whatsapp')">
            <q-avatar size="25px" icon="fas fa-arrow-left" style="color: black">
            </q-avatar>
          </q-btn>
          <div
            class="text-weight-medium q-pl-sm"
            style="color: #888888; font-size: 20px"
          >
            Kirim pesan masal
          </div>
          <q-space></q-space>
          <q-item-section side>
            <!--Button-->
            <div>
              <q-btn dense flat no-caps @click="dialogSend = true">
                <div
                  class="text-weight-bold"
                  style="color: #313131; font-size: 18px"
                >
                  Kirim
                </div>
              </q-btn>
            </div>
          </q-item-section>
        </q-toolbar>
      </q-header>
    </div>

    <q-page-container>
      <q-page class="q-px-sm">
        <div
          class="q-pa-lg text-weight-regular"
          style="color: #515151; font-size: 15px"
        >
          Masukan pesan yang akan <br />
          dikirim.
        </div>

        <!--Isi chat-->
        <div
          class="row q-py-md q-px-sm full-width shadow-1"
          style="background-color: #f5f7f9; border-radius: 5px"
        >
          <q-input
            input-class="text-weight-bold"
            input-style="color: #515151; font-size:15px"
            v-model="isiText"
            class="full-width"
            filled
            type="textarea"
            placeholder="Masukkan text..."
          ></q-input>
        </div>

        <!--Dialog Send-->
        <q-dialog v-model="dialogSend" persistent>
          <q-card class="full-width q-mx-sm">
            <div class="row q-py-sm">
              <div
                class="full-width text-center text-weight-medium q-pb-md"
                style="color: #393939; font-size: 17px"
              >
                Kirim pesan
              </div>
              <div
                class="q-px-lg row text-center text-weight-medium"
                style="color: #747474; font-size: 12px"
              >
                Apakah anda sudah yakin dengan pesan yang ingin anda kirim?
              </div>

              <div class="row full-width justify-end q-pt-md q-gutter-x-sm">
              <!--Button Ubah-->
                <q-btn no-caps dense flat v-close-popup>
                    <div class="text-weight-bold q-px-xs" style="color: #393939; font-size: 14px">Ubah</div>
                </q-btn>
                <!--Button Send-->
                <q-btn no-caps dense flat @click="$router.push('/bulk-whatsapp')">
                    <div class="text-weight-bold q-px-xs" style="color: #393939; font-size: 14px">Tetap kirim</div>
                </q-btn>
              </div>
            </div>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      isiText: "",
      dialogSend: false,
    };
  },
};
</script>

<style>
</style>