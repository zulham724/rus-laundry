<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/basket">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Keranjang</q-toolbar-title
        >
        <q-btn
          to="/confirm-package"
          no-caps
          flat
          color="grey"
          class="text-right"
        >
          <div class="text-weight-medium">Selesai</div>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
          <div class="text-center q-mt-xl">
            <q-img no-spinner src="~/assets/keranjang-kosong.svg" style="width:204px;height:226px"/>
          </div>
          <div class="text-center text-weight-bold text-body1 q-mt-md"> 
              Wah Keranjang Kamu Kosong
          </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
