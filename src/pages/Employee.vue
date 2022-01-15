<template>
  <q-layout>
    <q-page-container>
      <q-page class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
        <div class="row bg-white q-px-md q-py-lg">
          <!-- Search -->
          <q-input
            dense
            class="full-width text-weight-regular"
            type="search"
            style="
              color: #bababa;
              font-size: 15px;
              border-radius: 10px 10px 10px 10px;
            "
            outlined
            v-model="search"
            placeholder="Cari berdasarkan nama, email"
          >
            <q-icon
              name="search"
              class="self-center"
              size="30px"
              color="grey"
            />
          </q-input>
        </div>

        <q-btn no-caps flat class="full-width bg-white q-mt-md">
          <div
            class="col-10 text-left text-weight-bold q-pl-sm"
            style="color: #756a6a; font-size: 10px"
          >
            Rekab absen
          </div>
          <div class="col-2 text-right">
            <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
          </div>
        </q-btn>

        <q-btn
          no-caps
          flat
          class="full-width bg-white q-mt-sm"
          to="/add-employee"
        >
          <div
            class="col-10 text-left text-weight-bold q-pl-sm"
            style="color: #756a6a; font-size: 10px"
          >
            Tambah Karyawan
          </div>
          <div class="col-2 text-right">
            <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
          </div>
        </q-btn>

        <div class="row q-mt-md">
          <div class="col-8"></div>
          <div class="col-4 text-center">
            <div
              class="text-weight-bold"
              style="color: #756a6a; font-size: 10px"
            >
              Jumlah Karyawan
            </div>
            <div
              class="text-weight-bold"
              style="color: #756a6a; font-size: 15px"
            >
              20
            </div>
          </div>
        </div>

        <div class="row q-mt-md" @click="cardClick()">
          <div class="col-6 text-center">
            <div
              class="q-mx-lg bg-white text-center q-pa-md shadow-3"
              style="border-radius: 5px 5px 5px 5px"
            >
              <q-avatar size="60px">
                <q-img src="~/assets/Avatar.png"></q-img>
              </q-avatar>
              <div class="text-weight-medium" style="font-size: 8px">
                Muhammad Hisyam
              </div>
              <div
                class="text-weight-medium q-mx-sm"
                style="
                  border-radius: 5px 5px 5px 5px;
                  background-color: #eaecfc;
                "
              >
                <div
                  class="text-center q-ma-xs"
                  style="font-size: 8px; color: #888888"
                >
                  Karyawan
                </div>
              </div>
              <div
                class="text-weight-medium"
                style="font-size: 8px; color: #888888"
              >
                081321123999
              </div>
              <div
                class="text-weight-medium"
                style="font-size: 7px; color: #9ca4e4"
              >
                hisyam@gmail.com
              </div>
              <div
                class="text-weight-medium text-right q-pt-sm"
                style="font-size: 8px; color: #888888"
              >
                Id : 561563863268
              </div>
            </div>
          </div>
          <div class="col-6 text-center">
            <div
              class="q-mx-lg bg-white text-center q-pa-md shadow-3"
              style="border-radius: 5px 5px 5px 5px"
            >
              <q-avatar size="60px">
                <q-img src="~/assets/Avatar.png"></q-img>
              </q-avatar>
              <div class="text-weight-medium" style="font-size: 8px">
                Muhammad Alif
              </div>
              <div
                class="text-weight-medium q-mx-sm"
                style="
                  border-radius: 5px 5px 5px 5px;
                  background-color: #eaecfc;
                "
              >
                <div
                  class="text-center q-ma-xs"
                  style="font-size: 8px; color: #888888"
                >
                  Karyawan
                </div>
              </div>
              <div
                class="text-weight-medium"
                style="font-size: 8px; color: #888888"
              >
                0813569851
              </div>
              <div
                class="text-weight-medium"
                style="font-size: 7px; color: #9ca4e4"
              >
                alif@gmail.com
              </div>
              <div
                class="text-weight-medium text-right q-pt-sm"
                style="font-size: 8px; color: #888888"
              >
                Id : 561563863268
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
    return {
      search: ref(""),
    };
  },

  methods: {
    cardClick() {
      this.$router.push("/detail-employee");
    },
  },
};
</script>

<style></style>
