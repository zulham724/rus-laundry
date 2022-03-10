<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container>
      <q-page>
        <div class="text-center q-pt-lg">
          <q-img
            no-loading
            no-spinner
            src="~/assets/50465-done.gif"
            style="width: 80vw"
          />
        </div>

        <div class="text-weight-bold text-center" style="font-size: 18px">
          Pesanan Telah Dibuat
        </div>

        <div class="col-12 text-center absolute-bottom q-pb-lg">
          <br />
          <q-btn
            no-caps
            dense
            @click="$router.push('/order-code')"
            label="Cetak kode pesanan"
            class="bg-white text-weight-regular q-py-xs q-px-sm"
            style="font-size: 18px; border-radius: 6px"
          />
          <br />
          <q-btn
            no-caps
            @click="$router.push('/make-an-order')"
            label="kembali"
            flat
            color="green-5"
            style="font-size: 18px"
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
