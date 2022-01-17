<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container>
      <q-page>
        <div class="text-center q-pt-lg">
          <q-img
            src="~/assets/confirm-package-unscreen.gif"
            style="width: 80vw"
          />
        </div>

        <div class="text-weight-bold text-center" style="font-size: 18px">
          Pesanan Telah Dibuat
        </div>

        <div class="col-12 text-center absolute-bottom q-pb-lg">
          <q-btn dense @click="$router.push('/order-code')" flat label="Cetak kode pesanan"/>
          <br>
          <q-btn @click="$router.push('/make-an-order')" label="kembali" flat color="green-5" size="sm"/>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
