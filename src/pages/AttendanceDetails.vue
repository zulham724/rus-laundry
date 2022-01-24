<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white">
        <q-btn
          no-caps
          class="q-pa-md"
          ripple="false"
          flat
          style="color: white"
          to="/attendance"
        >
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #888888">
          </q-icon>
        </q-btn>
        <div class="text-subtitle2" style="color: #808080; margin-left: 15px">
          Detail Absen
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-mt-xs">
        <div class="row q-pt-md">
          <div class="col-5 q-pl-sm">
            <q-circular-progress
              show-value
              class="text-black text-bold q-ma-md"
              :value="value"
              size="130px"
              track-color="red-7"
              color="green"
            >
              <div class="text-center" style="font-size: 26px">
                31 <br />
                Hari
              </div>
            </q-circular-progress>
          </div>
          <div class="col-7 q-pt-md q-pl-md">
            <div class="text-weight-bold">Grafik Persentase Kehadiran</div>
            <div class="q-pl-lg q-pt-md">
              <div
                class="text-weight-bold"
                style="color: #c0b9b9; font-size: 12px"
              >
                Jumlah Tidak Hadir
              </div>
              <div class="row">
                <div class="col-6">
                  <q-avatar
                    class="bg-red q-mr-xs"
                    size="15px"
                    style="color: #8d8d8d"
                  >
                  </q-avatar>
                  10%
                </div>
                <div class="col-6" style="color: #c9c9c9">3 Hari</div>
              </div>

              <div
                class="text-weight-bold q-pt-xs"
                style="color: #c0b9b9; font-size: 12px"
              >
                Jumlah Hadir
              </div>
              <div class="row">
                <div class="col-6">
                  <q-avatar
                    class="bg-green q-mr-xs"
                    size="15px"
                    style="color: #8d8d8d"
                  >
                  </q-avatar>
                  90%
                </div>
                <div class="col-6" style="color: #c9c9c9">28 Hari</div>
              </div>
            </div>
          </div>
        </div>

        <q-btn no-caps flat class="full-width bg-white" @click="buttonDate()">
          <div
            class="col-10 text-left text-weight-medium q-pl-md"
            style="color: #888888"
          >
            Pilih bulan & tahun
          </div>
          <div class="col-2 text-right">
            <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
          </div>
        </q-btn>

        <div
          class="row bg-white q-pl-lg q-mt-sm q-py-sm"
          style="color: #c9c9c9"
        >
          Data Absen
        </div>
        <q-list separator class="q-mt-xs bg-white q-pl-md q-pr-xs">
          <q-item dense>
            <div class="col-9" style="color: #c9c9c9">
              {{ moment().format("E MMMM YYYY  HH:mm") }}
            </div>
            <div
              class="col-3 text-center text-weight-medium"
              style="color: #35c07e"
            >
              Berhasil Absen
            </div>
          </q-item>
          <q-item dense>
            <div class="col-9" style="color: #c9c9c9">
              {{ moment().format("E MMMM YYYY  HH:mm") }}
            </div>
            <div
              class="col-3 text-center text-weight-medium"
              style="color: #35c07e"
            >
              Berhasil Absen
            </div>
          </q-item>
          <q-item dense>
            <div class="col-9" style="color: #c9c9c9">
              {{ moment().format("E MMMM YYYY ") }}
            </div>
            <div
              class="col-3 text-center text-weight-medium"
              style="color: #df4141"
            >
              Tidak Absen
            </div>
          </q-item>
        </q-list>

        <q-dialog v-model="dialogDate" position="bottom">
          <q-card class="q-pt-md" style="border-radius: 20px 20px 0px 0px">
            <div class="q-px-sm">
              <div class="row text-weight-medium" style="color: #888888">
                Bulan & Tahun
              </div>
              <q-separator></q-separator>

              <q-date v-model="model"></q-date>
            </div>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import moment from "moment";

export default {
  props:["employeeid"],
  data() {
    return {
      value: 81,
      dialogDate: false,
      model: "2022/01/14",
    };
  },

  methods: {
    
    moment() {
      return moment();
    },

    buttonDate() {
      this.dialogDate = true;
    },
  },
};
</script>

<style></style>
