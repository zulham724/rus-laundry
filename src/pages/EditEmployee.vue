<template>
  <q-layout>
    <q-header>
      <q-toolbar class="bg-white shadow-1">
        <q-btn to="/employee" no-caps class="q-pa-md" flat style="color: white">
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #888888">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-subtitle2"
          style="color: #888888; font-size: 16px"
          >Edit Data Karyawan</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <div class="text-center">
          <q-avatar class="q-ma-xl" size="150px">
            <q-file>
              <img src="~/assets/empty-avatar.svg" />
            </q-file>
          </q-avatar>
        </div>

        <q-input class="q-mx-lg q-py-sm" rounded outlined label="Nama" />
        <q-input class="q-mx-lg q-py-sm" rounded outlined label="Jabatan" />
        <q-input
          class="q-mx-lg q-py-sm"
          rounded
          outlined
          label="No Telephone"
        />
        <q-input
          class="q-mx-lg q-py-sm"
          rounded
          outlined
          label="Alamat Email"
        />
      </q-page>

      <q-footer>
        <q-btn
          to="/employee"
          class="q-py-md"
          no-caps
          style="width: 100%; background-color: #49c2c0"
        >
          Simpan Perubahan
        </q-btn>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
