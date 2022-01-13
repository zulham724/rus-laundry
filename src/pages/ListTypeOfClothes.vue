<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/add-clothes">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Pilih Jenis Pakaian</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <q-card flat class="q-mt-sm full-width">
          <q-card-actions class="full-width">
            <div class="text-weight-medium text-left" style="color: #888888">
              Pakaian halus
            </div>
            <q-space></q-space>
            <div class="text-caption q-pr-md" style="color: #888888">
              kilogram(kg)
            </div>
            <div>
              <q-btn flat to="/basket">
                <img
                  src="~/assets/cart-pesanan.svg"
                  style="width: 25px; height: 25px"
                />
              </q-btn>
            </div>
          </q-card-actions>
        </q-card>

        <q-card flat class="q-mt-sm full-width">
          <q-card-actions class="full-width">
            <div class="text-weight-medium text-left" style="color: #888888">
              Pakaian Kotor
            </div>
            <q-space></q-space>
            <div class="text-caption q-pr-md" style="color: #888888">
              kilogram(kg)
            </div>
            <div>
              <q-btn flat to="/basket">
                <img
                  src="~/assets/cart-pesanan.svg"
                  style="width: 25px; height: 25px"
                />
              </q-btn>
            </div>
          </q-card-actions>
        </q-card>

        <q-card flat class="q-mt-sm full-width">
          <q-card-actions class="full-width">
            <div class="text-weight-medium text-left" style="color: #888888">
              Selimut
            </div>
            <q-space></q-space>
            <div class="text-caption q-pr-md" style="color: #888888">
              Satuan(pcs)
            </div>
            <div>
              <q-btn flat>
                <img
                  src="~/assets/cart-pesanan.svg"
                  style="width: 25px; height: 25px"
                />
              </q-btn>
            </div>
          </q-card-actions>
        </q-card>

        <q-card flat class="q-mt-sm full-width">
          <q-card-actions class="full-width">
            <div class="text-weight-medium text-left" style="color: #888888">
              Sprei dan Bedcover
            </div>
            <q-space></q-space>
            <div class="text-caption q-pr-md">Satuan(pcs)</div>
            <div>
              <q-btn flat>
                <img
                  src="~/assets/cart-pesanan.svg"
                  style="width: 25px; height: 25px"
                />
              </q-btn>
            </div>
          </q-card-actions>
        </q-card>

        <q-btn
          dense
          to="/input-new-clothes"
          align="left"
          no-caps
          flat
          class="q-my-sm q-py-sm q-pl-sm"
          style="width: 100%; background-color: #ffffff; color: #888888"
        >
          <div style="color: #888888">Tambah Jenis Pakaian</div>
        </q-btn>

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn fab round style="width: 60px; height: 60px">
            <img src="~/assets/cart-pesanan.svg" />
          </q-btn>
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
