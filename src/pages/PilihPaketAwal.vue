<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <q-card>
          <q-btn
            no-caps
            class="q-pa-sm"
            ripple="false"
            flat
            color="grey"
            size="15px"
            icon="fas fa-arrow-left"
            style="color: white"
            to="/home"
          >
            <div style="color: #808080; margin-left: 15px">
              Pilih Jenis Item
            </div>
          </q-btn>
        </q-card>

        <q-card flat class="q-mt-sm full-width">
          <q-card-actions class="full-width">
            <q-btn to="" flat no-caps class="full-width" style="height: 45px">
              <div class="text-weight-medium text-left" style="color: grey">
                Pakaian halus
              </div>
              <q-space></q-space>
              <div class="text-caption q-pr-md">kilogram(kg)</div>

              <img src="~/assets/cart-pesanan.svg" />
            </q-btn>
          </q-card-actions>
        </q-card>

        <q-card flat class="q-mt-sm full-width">
          <q-card-actions class="full-width">
            <q-btn to="" flat no-caps class="full-width" style="height: 45px">
              <div class="text-weight-medium text-left" style="color: grey">
                Pakaian kasar
              </div>
              <q-space></q-space>
              <div class="text-caption q-pr-md">kilogram(kg)</div>

              <img src="~/assets/cart-pesanan.svg" />
            </q-btn>
          </q-card-actions>
        </q-card>

        <q-card flat class="q-mt-sm full-width">
          <q-card-actions class="full-width">
            <q-btn to="" flat no-caps class="full-width" style="height: 45px">
              <div class="text-weight-medium text-left" style="color: grey">
                Selimut
              </div>
              <q-space></q-space>
              <div class="text-caption q-pr-md">Satuan(pcs)</div>

              <img src="~/assets/cart-pesanan.svg" />
            </q-btn>
          </q-card-actions>
        </q-card>

        <q-card flat class="q-mt-sm full-width">
          <q-card-actions class="full-width">
            <q-btn to="" flat no-caps class="full-width" style="height: 45px">
              <div class="text-weight-medium text-left" style="color: grey">
                Sprei dan bedcover
              </div>
              <q-space></q-space>
              <div class="text-caption q-pr-md">Satuan(pcs)</div>

              <img src="~/assets/cart-pesanan.svg" />
            </q-btn>
          </q-card-actions>
        </q-card>

        <q-btn
          rounded
          class="elevated fixed-bottom-right q-ma-xl"
          style="width: 60px; height: 60px"
        >
          <q-avatar size="40px">
            <img src="~/assets/cart-pesanan.svg" />
          </q-avatar>
        </q-btn>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
