<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page class="mbl-child">
      <div class="q-px-sm q-py-xl text-center">
        <q-avatar size="100px">
          <q-img src="~/assets/klgcmr.png" />
        </q-avatar>
        <div class="text-weight-medium q-mt-sm" style="font-size: 24px">
          Tambah Karyawan
        </div>
      </div>
      <div class="q-px-sm bg-white" style="border-radius: 5px">
        <q-form>
          <div class="q-py-sm">
            <q-input
              label="Nama"
              color="black"
              v-model="search"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Email"
              color="black"
              v-model="search"
              outlined
              type="search"
            >
 
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Alamat"
              color="black"
              v-model="search"
              outlined
              type="search"
            >

            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="No. Telp"
              color="black"
              v-model="search"
              outlined
              type="search"
            >

            </q-input>
          </div>
          <div class="row q-pt-lg q-pb-sm">
            <div class="col text-right q-pr-sm">
              <q-btn class="q-px-sm" style="background-color:#6295FF; border-radius:10px"  text-color="white" label="Tambahkan" />
            </div>
            <div class="col text-left q-pl-sm">
              <q-btn class="q-px-lg" style="background-color:#fff; border-radius:10px"  text-color="black" label="Cancel" />
            </div>
          </div>
        </q-form>
      </div>
      <div
        
        style="position: absolute;  z-index: -1; vertical-align: text-bottom; width: 100%;"
      >
        <q-img  src="~/assets/br.png" />
      </div>
    </q-page>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
