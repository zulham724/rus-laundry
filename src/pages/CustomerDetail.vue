<template>
  <q-layout class="mbl">
    <q-header>
      <q-toolbar class="bg-white shadow-2">
        <q-btn flat dense>
          <q-icon name="fas fa-arrow-left" style="color: #888888"> </q-icon>
        </q-btn>
        <q-toolbar-title>
          <div class="text-subtitle2 text-grey">Detail Pelanggan</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="front">
      <q-page class="q-pa-md">
        <div class="column">
          <div class="text-caption text-grey-8">Nama Pelanggan</div>
          <q-input dense rounded outlined label="Ketik sesuatu">
            <template v-slot:append>
              <div class="text-caption">ubah</div>
            </template>
          </q-input>
        </div>
        <div class="column">
          <div class="text-caption text-grey-8">Nomer Telepon</div>
          <q-input dense rounded outlined label="Ketik sesuatu">
            <template v-slot:append>
              <div class="text-caption">ubah</div>
            </template>
          </q-input>
        </div>
        <div class="row justify-between q-pt-md">
          <div class="text-subtitle1">Transaksi</div>
          <q-input style="width: 200px" dense rounded outlined label="Cari">
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
        </div>
        <div class="row">
          <q-list style="width: 100%">
            <q-expansion-item
              class="q-my-md shadow-1"
              style="border-radius: 5px"
              expand-separator
              icon="fas fa-box-open"
              label="Ahmad Rifaldi"
              caption="17 Agustus 1945"
              v-for="n in 9"
              :key="n"
            >
              <q-card>
                <q-card-section>
                  <div class="row">
                    <table style="width:100%">
                        <thead>
                            <tr class="text-grey-4 text-caption">
                                <th class="text-left">Jenis Pakaian</th>
                                <th class="text-center">jenis Paket</th>
                                <th class="text-center">Jumlah</th>
                                <th class="text-right">Harga</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-grey-7">
                                <td class="text-left">Selimut</td>
                                <td class="text-center">Paket Kilat</td>
                                <td class="text-center">5</td>
                                <td class="text-right">Rp. 250.000</td>
                            </tr>
                        </tbody>
                    </table>
                    <q-separator size="md" />
                    <div class="row justify-between full-width">
                        <div class="text-caption text-grey-5">
                            Status Pesanan
                        </div>
                        <div class="text-caption text-grey-5">
                            Total harga
                        </div>
                    </div>
                    <div class="row justify-between full-width">
                        <div class="text-caption text-grey-8 text-bold">
                            Selesai
                        </div>
                        <div class="text-caption text-grey-8 text-bold">
                            Rp 250.000
                        </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style>
</style>