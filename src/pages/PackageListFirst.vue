<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/basket">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Tambah Paket Baru</q-toolbar-title
        >
        <q-btn
          to="/package-list-first"
          no-caps
          flat
          color="grey"
          class="text-right"
        >
          <div class="text-weight-medium">Selesai</div>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <q-btn-dropdown
          class="q-my-sm bg-white"
          style="width: 100%; color: #888888"
          align="left"
          flat
          split
          disable-main-btn
          label="Paket Satuan"
        >
          <q-list v-ripple>
            <q-item clickable v-close-popup v-ripple>
              <q-item-section v-ripple>
                <q-item-label v-ripple style="color: #888888"
                  >Reguler Cuci Kering + Setrika</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-separator></q-separator>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label style="color: #888888"
                  >Reguler Cuci Basah</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-separator></q-separator>

            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label style="color: #888888"
                  >Super Kilat Cuci Basah</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
          </q-list>
        </q-btn-dropdown>

        <q-btn
          :ripple="{ color: 'orange' }"
          to="/package-list-seccond"
          flat
          no-caps
          class="q-my-sm bg-white"
          align="left"
          style="width: 100%"
        >
          <div class="text-subtitl2" style="color: #888888">Tambah Paket</div>
        </q-btn>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      onItemClick() {},
    };
  },
};
</script>

<style></style>
