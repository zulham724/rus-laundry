<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <!-- HEADER BIRU -->
        <div
          class="bgHead text-center q-pb-lg"
          style="border-radius: 0px 0px 60px 60px"
        >
          <div class="row q-py-sm q-px-sm">
            <div class="col"></div>
            <div class="col">
              <q-avatar size="90px" class="text-center self-center">
                <q-img class="text-center self-center" src="~/assets/org.png" />
              </q-avatar>
            </div>
            <div class="col text-white text-right">
              <q-btn rounded text-color="white" label="Selesai" flat />
            </div>
          </div>
          <div class="q-py-sm">
            <q-btn
              rounded
              text-color="white"
              label="Pilih foto"
              style="background-color: #4472a0; font-size: 10px"
            />
          </div>
          <div>
            <div class="text-white text-h6">Laundry Semarang</div>
            <div class="text-white">LintangTampans@gmail.com</div>
          </div>
        </div>

        <!-- Q INPUT DATA ACCOUNT -->

        <div class="q-px-md q-pt-md">
          <div>
            <div
              class="text-weight-bold text-caption q-mb-xs"
              style="color: #646464"
            >
              Nama
            </div>
            <q-input
              class="q-mb-sm"
              dense
              style="background-color: #f6f7f8; border-radius: 30px"
              outlined
              placeholder="Isi nama lengkap"
            />
          </div>

          <div class="q-pt-sm">
            <div
              class="text-weight-bold text-caption q-mb-xs"
              style="color: #646464"
            >
              Email
            </div>
            <q-input
              class="q-mb-sm"
              dense
              style="background-color: #f6f7f8; border-radius: 30px"
              outlined
              placeholder="Isi email"
            />
          </div>

          <div class="q-pt-sm">
            <div
              class="text-weight-bold text-caption q-mb-xs"
              style="color: #646464"
            >
              password
            </div>
            <q-input
              class="q-mb-sm"
              dense
              style="background-color: #f6f7f8; border-radius: 30px"
              outlined
              placeholder="Isi password"
            />
          </div>

          <div class="q-pt-sm">
            <div
              class="text-weight-bold text-caption q-mb-xs"
              style="color: #646464"
            >
              Tentang toko
            </div>
            <q-input
              class="q-mb-sm"
              dense
              style="background-color: #f6f7f8; border-radius: 30px"
              outlined
              placeholder="Hari ini gagal besok gagal lagi"
            />
          </div>

          <div class="q-pt-sm">
            <div
              class="text-weight-bold text-caption q-mb-xs"
              style="color: #646464"
            >
              Kode affiliate
            </div>
            <q-input
              class="q-mb-sm"
              dense
              style="background-color: #f6f7f8; border-radius: 30px"
              outlined
              placeholder="8132567"
            />
          </div>
        </div>
        <div class="text-center q-py-md">
          <q-btn rounded flat>
            <div class="text-blue text-h6 text-center">Logout</div>
          </q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script></script>

<style>
.bgHead {
  background-image: linear-gradient(to bottom right, #00C6FF , #0072FF);
}
</style>
