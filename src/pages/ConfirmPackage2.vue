<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container>
      <q-page>
        <div class="text-center q-pt-lg">
          <q-img
            no-spinner
            src="~/assets/confirm-package-unscreen.gif"
            style="width: 80vw"
          />
        </div>

        <div class="text-weight-bold text-center" style="font-size: 18px">
          Pesanan Telah Dibuat
        </div>

        <div class="col-12 text-center absolute-bottom q-pb-lg">
          <q-btn
            no-caps
            dense
            @click="$router.push('/order-code')"
            label="Cetak kode pesanan"
            class="bg-white text-weight-regular q-py-sm q-px-sm"
            style="font-size: 20px; border-radius: 10px"
          />
          <br />
          <q-btn
            no-caps
            @click="$router.push('/make-an-order')"
            label="kembali"
            flat
            color="green-5"
            size="sm"
            style="font-size: 14px"
          />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
