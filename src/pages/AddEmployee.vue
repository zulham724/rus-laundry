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
          >Cetak ID Card</q-toolbar-title
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
          @click="buttonAdd()"
          class="q-py-md"
          no-caps
          style="width: 100%; background-color: #49c2c0"
        >
          Tambah Data karyawan
        </q-btn>
      </q-footer>

      <q-dialog v-model="dialogAdd">
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-weight-bold text-left" style="font-size: 15px">
              Tambah data
            </div>
            <div class="text-weight-light text-left" style="font-size: 10px">
              yakin ingin menambah data?
            </div>
          </q-card-section>

          <q-card-actions>
            <div class="row col-12">
              <div class="col-9 text-right q-pr-sm">
                <q-btn
                  class="shadow-1"
                  no-caps
                  flat
                  label="Batal"
                  style="color: #888888"
                  v-close-popup
                />
              </div>
              <div class="col-3 text-left q-pr-sm">
                <q-btn
                  to="/detail-employee"
                  class="shadow-1"
                  no-caps
                  flat
                  label="Oke"
                  style="background-color: #49c2c0; color: white"
                />
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      dialogAdd: false,
    };
  },

  methods: {
    buttonAdd() {
      this.dialogAdd = true;
    },
  },
};
</script>

<style></style>
