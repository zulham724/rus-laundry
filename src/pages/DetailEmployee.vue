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
          >Info Karyawan</q-toolbar-title
        >
        <q-btn no-caps flat color="black" @click="buttonDelete()">
          <div class="text-weight-bold">Hapus</div>
        </q-btn>

        <q-dialog v-model="dialogDelete">
          <q-card style="width: 300px">
            <q-card-section>
              <div class="text-weight-bold text-left" style="font-size: 15px">
                Hapus data
              </div>
              <div class="text-weight-light text-left" style="font-size: 10px">
                yakin ingin menghapus data?
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
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-mt-xl">
        <div class="text-center">
          <q-avatar size="150px">
            <q-img src="~/assets/Avatar.png"></q-img>
          </q-avatar>
        </div>

        <div
          class="row q-mx-lg q-mt-xl text-weight-regular"
          style="font-size: 15px; color: #313131"
        >
          Nama
        </div>
        <div
          class="row q-mx-lg text-weight-regular"
          style="font-size: 18px; color: #888888"
        >
          Firosyan ammar sopyan
        </div>
        <div
          class="row q-mx-lg q-mt-xs text-weight-regular"
          style="font-size: 15px; color: #313131"
        >
          Jabatan
        </div>
        <div
          class="row q-mx-lg text-weight-regular"
          style="font-size: 18px; color: #888888"
        >
          Karyawan
        </div>
        <div
          class="row q-mx-lg q-mt-xs text-weight-regular"
          style="font-size: 15px; color: #313131"
        >
          No Telephone
        </div>
        <div
          class="row q-mx-lg text-weight-regular"
          style="font-size: 18px; color: #888888"
        >
          081356789654
        </div>
        <div
          class="row q-mx-lg q-mt-xs text-weight-regular"
          style="font-size: 15px; color: #313131"
        >
          Email
        </div>
        <div
          class="row q-mx-lg text-weight-regular"
          style="font-size: 18px; color: #888888"
        >
          firos@gmail.com
        </div>
        <div
          class="row q-mx-lg q-mt-xs text-weight-regular"
          style="font-size: 15px; color: #313131"
        >
          Id Karyawawn
        </div>
        <div
          class="row q-mx-lg text-weight-regular"
          style="font-size: 18px; color: #888888"
        >
          1531836813861
        </div>

        <q-btn
          @click="buttonPrintCard()"
          class="shadow-2 absolute-bottom-right q-mb-lg q-mr-md bg-white"
          no-caps
          style="border-radius: 10px 10px 10px 10px"
        >
          <div class="text-weight-regular" style="font-size: 13px">
            Cetak Id Card
          </div>
        </q-btn>
      </q-page>

      <q-footer>
        <q-btn
          class="q-py-md"
          no-caps
          style="width: 100%; background-color: #49c2c0; color: #fafafa"
        >
          Edit Info
        </q-btn>
      </q-footer>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      dialogDelete: false,
    };
  },

  methods: {
    buttonDelete() {
      this.dialogDelete = true;
    },

    buttonPrintCard() {
      this.$router.push("/print-card");
    },
  },
};
</script>

<style></style>
