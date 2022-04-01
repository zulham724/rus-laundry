<template>
  <q-layout>
    <q-page>
      <div class="q-px-sm q-py-xl text-center">
        <q-avatar size="100px">
          <q-img src="~/assets/ktab.png" />
        </q-avatar>
        <div class="text-weight-medium q-mt-sm" style="font-size: 24px">
          Buat Layanan Baru
        </div>
      </div>
      <div class="q-px-sm ">
        <q-form>
          <div class="q-py-sm">
            <q-input
              label="Masukkan Nama Paket"
              color="black"
              v-model="search"
              outlined
              type="search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-select
              outlined
              v-model="model"
              :options="options"
              label="Hitungan menurut"
            />
          </div>
          <div class="q-py-sm">
            <q-input
              label="Masukkan Harga"
              color="black"
              v-model="search"
              outlined
              type="search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Masukkan Nama Paket"
              color="black"
              v-model="search"
              outlined
              type="search"
            >
              <template v-slot:append>
                <div style="font-size:12px">/Jam</div>
              </template>
            </q-input>
          </div>
        </q-form>
      </div>
      <div>
        <q-img class="fixed-bottom" src="~/assets/br.png" />
      </div>
    </q-page>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
