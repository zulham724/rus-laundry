<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #ffffff">
    <q-header>
      <q-toolbar class="bg-white shadow-3">
        <q-btn no-caps flat style="color: white" to="/detail-employee">
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #888888">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Print ID Card</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <q-card flat class="q-mt-lg bg-white" style="">
          <div class="row">
            <div class="col-4">
              <q-avatar class="q-pl-sm" size="80px">
                <img src="~/assets/Avatar.png" />
              </q-avatar>
            </div>
            <div class="col-8">
              <div class="q-ml-md q-mr-xl">
                <div
                  class="q-mt-sm text-center text-weight-medium"
                  style="
                    background-color: #4cd4f2;
                    border-radius: 3px;
                    color: white;
                  "
                >
                  Manager
                </div>
              </div>
              <div
                class="q-ml-md q-pt-xs text-weight-medium"
                style="color: #4cd4f2"
              >
                Nomor ID
              </div>
              <div class="q-ml-md text-weight-medium" style="color: #756a6a">
                997435814
              </div>
            </div>
          </div>
          <div
            class="q-mt-xl q-ml-md text-weight-medium"
            style="color: #4cd4f2"
          >
            Nama
          </div>
          <div
            class="q-ml-md text-subtitle2 text-weight-medium"
            style="color: #756a6a"
          >
            Firosyan Ammar
          </div>

          <div
            class="q-mt-sm q-ml-md text-weight-medium"
            style="color: #4cd4f2"
          >
            No telephone
          </div>
          <div
            class="q-ml-md text-subtitle2 text-weight-medium"
            style="color: #756a6a"
          >
            08123412331
          </div>

          <div
            class="q-mt-sm q-ml-md text-weight-medium"
            style="color: #4cd4f2"
          >
            Email
          </div>
          <div
            class="q-ml-md text-subtitl text-weight-medium"
            style="color: #756a6a"
          >
            ceper_gimang@gmail.com
          </div>

          <div
            class="text-center text-weight-medium q-mt-xl"
            style="color: #756a6a"
          >
            Code QR untuk absen
          </div>

          <div class="text-center q-mt-sm">
            <img src="~/assets/qr-card-print.svg" />
          </div>
        </q-card>
        <div class="row">
          <div class="col-12 text-center absolute" style="margin-top: -30px">
            <q-img src="~/assets/bg-card.svg" />
          </div>
        </div>
      </q-page>
      <q-footer class="elevated">
        <div style="background-color: #49c2c0; height: 60px">
          <q-btn
            @click="buttonPrintCard()"
            class="text-center q-pa-md text-subtitle1"
            style="width: 100%"
            no-caps
            flat
            color="white"
          >
            Cetak Kartu
          </q-btn>
        </div>
      </q-footer>

      <q-dialog v-model="dialogPrintCard">
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-weight-bold text-left" style="font-size: 15px">
              Cetak Kartu
            </div>
            <div class="text-weight-light text-left" style="font-size: 10px">
              yakin ingin mencetak kartu?
            </div>
          </q-card-section>

          <q-card-actions>
            <div class="row col-12">
              <div class="col-9 text-right q-pr-sm">
                <q-btn
                  class="shadow-1"
                  no-caps
                  flat
                  label="Batal"
                  style="color: #888888"
                  v-close-popup
                />
              </div>
              <div class="col-3 text-left q-pr-sm">
                <q-btn
                  class="shadow-1"
                  no-caps
                  flat
                  label="Oke"
                  style="background-color: #49c2c0; color: white"
                />
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      dialogPrintCard: false,
    };
  },

  methods: {
    buttonPrintCard() {
      this.dialogPrintCard = true;
    },
  },
};
</script>

<style></style>
