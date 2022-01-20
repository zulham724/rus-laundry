<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div class="text-center q-pt-lg">
          <q-img
          no-spinner
            src="~/assets/confirm-package-unscreen.gif"
            style="width: 80vw"
          />
        </div>

        <div class="text-weight-bold text-center" style="font-size: 18px">
          Absensi Berhasil
        </div>
    <div class="absolute-bottom">
        <q-btn no-caps class="full-width text-center text-subtitle2 bg-white"  flat>
          <div class="text-subtitle2"  >Rekap Absensi</div>
        </q-btn>
        <div
          class="text-weight-thin text-caption text-center q-mb-md"
          style="color: #49c2c0"
        >
          <q-btn flat no-caps class="bg-transparent text-caption"> Kembali </q-btn>
        </div>
      </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
