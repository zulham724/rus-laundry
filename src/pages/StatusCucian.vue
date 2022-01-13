<template>
  <q-layout view="lHh lpR fFf" class="mbl" style="background-color: #ffffff">
    <q-page-container class="front">
      <q-header>
        <q-toolbar class="bg-white q-py-md">
          <q-btn flat round size="10px" to="/detail-transaksi">
            <q-avatar
              size="25px"
              icon="fas fa-arrow-left"
              style="color: #888888"
            >
            </q-avatar>
          </q-btn>
          <q-toolbar-title
            class="text-left text-weight-medium"
            style="color: #888888; font-size: 16px"
            >Status Cucian</q-toolbar-title
          >
        </q-toolbar>
      </q-header>
      <q-separator></q-separator>
      <q-separator></q-separator>
      <q-page style="background-color: #ffffff">
        <div
          class="text-weight-regular text-center q-pt-lg"
          style="color: #7fcfdc; font-size: 20px"
        >
          Pesanan Butuh Konfirmasi
        </div>

        <!-- Animasi Proses Cucian -->
        <div class="text-center">
          <q-img src="~/assets/animasi-proses-cuci.gif" style="width: 30vh">
          </q-img>
        </div>
        <!-- Animasi Progress Loading  -->
        <div class="row justify-center">
          <q-linear-progress
            stripe
            style="
              max-width: 30vw;
              max-height: 35px;
              border-radius: 50px;
              color: #49c26b;
            "
            class="q-mb-md q-mt-lg"
            size="10vw"
            :value="progress"
          >
            <div class="absolute-full flex flex-center">
              <q-badge
                style="font-size: 3vw"
                class="bg-transparent"
                text-color="white "
                :label="progress"
              />
            </div>
          </q-linear-progress>
        </div>

        <div class="row absolute-bottom q-pb-md">
          <div class="col-6 text-center">
            <!-- Button Proses Pesanan -->
            <q-btn
              @click="prosesLoading()"
              rounded
              no-caps
              style="
                color: white;
                background-color: #49c2c0;
                font-size: 12px;
                max-width: 50vw;
              "
              class="text-weight-regular"
            >
              <div class="q-pa-sm">Proses Pesanan</div>
            </q-btn>
          </div>
          <div class="col-6 text-center">
            <!-- Button Batalkan Pesanan -->
            <q-btn
              rounded
              no-caps
              style="
                color: #313131;
                background-color: white;
                font-size: 12px;
                max-width: 50vw;
              "
              class="text-weight-regular"
            >
              <div class="q-pa-sm">Batalkan Pesanan</div></q-btn
            >
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { Loading, useQuasar, QSpinnerGears, QBtn } from "quasar";
import { onBeforeUnmount } from "vue";

function show(options) {
  Loading.show(options);
  setTimeout(() => {
    Loading.hide();
  }, 3000);
}

export default {
  components: {
    QSpinnerGears,
    QBtn,
  },

  data() {
    return {
      progress: 0 * 100 + "%",
      text: "",
    };
  },

  methods: {
    prosesLoading() {
      show({ message: "Pesanan Diproses..." });
      this.$router.push("/laundry-details");
    },
  },
};
</script>

<style></style>
