<template>
  <q-layout view="lHh lpR fFf" class="mbl" style="background-color: #fafafa">
    <q-page-container class="front">
      <q-page>
        <!-- Button Back, Status Cucian -->
        <q-card flat class="q-mb-xs">
          <q-card-actions>
            <q-btn
              ripple="false"
              flat
              icon="fas fa-arrow-left"
              style="color: #888888; width: 5vw"
              to="/detail-transaksi"
            >
            </q-btn>
            <div
              class="q-mx-md text-subtitle2"
              style="font-size: 5vw; color: #888888"
            >
              Status Cucian
            </div>
          </q-card-actions>
        </q-card>
        <q-card flat>
          <q-card-actions vertical>
            <!-- Estimasi Pemesanan -->
            <div
              class="q-mt-sm q-ml-lg"
              style="text-weight-regular; color: #888888; font-size: 4vw"
            >
              Estimasi Pemesanan
            </div>
            <br />
            <div
              class="q-ml-lg"
              style="text-weight-regular; color: #e5e5e5; font-size: 4vw; margin-top: -15px"
            >
              2x24 Jam
            </div>
            <!-- Status Pemesanan -->
            <div
              class="q-mt-md q-ml-lg"
              style="text-weight-regular; color: #888888; font-size: 4vw"
            >
              Status Cucian
            </div>
            <br />
            <div
              class="q-ml-lg"
              style="text-weight-regular; color: #e5e5e5; font-size: 4vw; margin-top: -15px"
            >
              Persiapan
            </div>
            <!-- Animasi Proses Cucian -->
            <div class="text-center">
              <q-img src="~/assets/animasi-proses-cuci.gif" style="width: 30vh">
              </q-img>
            </div>
            <!-- Animasi Progress Loading  -->
            <q-linear-progress
              stripe
              style="width: 150px; border-radius: 50px; color: #49c26b"
              class="self-center q-mb-md q-mt-lg"
              size="10vw"
              :value="progress"
            >
              <div class="absolute-full flex flex-center">
                <q-badge
                  style="font-size: 4vw"
                  class="bg-transparent"
                  text-color="white "
                  :label="progress"
                />
              </div>
            </q-linear-progress>

            <!-- Box Catatan -->
            <!-- <div class="text-center min-width: 300px q-mx-lg q-mt-md">
              <q-input
                style="font-size: 3vw; color: #888888"
                v-model="text"
                filled
                type="textarea"
                label="Tambahkan Catatan..."
              />
            </div> -->
          </q-card-actions>
          <q-card-actions class="q-mt-md q-mx-lg">
            <!-- Button Proses Pesanan -->
            <q-btn
              rounded
              no-caps
              style="color: white; background-color: #49c2c0; font-size: 2vh"
              class="text-weight-regular float-left"
              >Proses Pesanan</q-btn
            >
            <q-space></q-space>
            <!-- Button Batalkan Pesanan -->
            <q-btn
              rounded
              no-caps
              style="color: #313131; background-color: white; font-size: 2vh"
              class="text-weight-regular"
              >Batalkan Pesanan</q-btn
            >
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      progress: 0.6,
      text: "",
    };
  },
};
</script>

<style></style>
