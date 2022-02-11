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
        <q-btn no-caps flat color="black" @click="this.dialogDelete = true;">
          <div class="text-weight-bold">Hapus</div>
        </q-btn>

        <q-dialog v-model="dialogDelete">
          <q-card style="width: 300px">
            *<q-card-section>
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
                    @click="deleteEmployee()"
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
      <q-page class="q-mt-xl" v-if="employee">
        <div class="text-center">
          <q-avatar size="150px">
            <q-img :src="`${$storageUrl}/${employee.avatar}`" no-spinner/>
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
          {{ employee.name }}
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
          {{ employee.contact_number }}
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
          {{ employee.email }}
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
          {{ employee.id }}
        </div>

        <q-btn
          @click="$router.push(`/${employee.id}/print-card`)"
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
        <q-btn @click="$router.push(`/${employee.id}/edit-employee`)"
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
  props:["employeeid"],
  data() {
    return {
      dialogDelete: false,
      employee: null,
    };
  },

  methods: {
    getEmployee(){
      this.$store.dispatch('Employee/show', this.employeeid).then(res => {
        this.employee = res.data
      })
    },
    deleteEmployee() {
      this.$store.dispatch("Employee/destroy", this.employee.id).then(res => {
        this.$router.push(`/employee`)
        this.$q.notify("Berhasil")
      })
    },

    buttonPrintCard() {
      this.$router.push("/print-card");
    },
  },
  mounted(){
    this.getEmployee()
  }
};
</script>

<style></style>
