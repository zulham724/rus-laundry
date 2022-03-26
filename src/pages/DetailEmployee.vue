<template>
  <q-layout>
    <q-header>
      <q-toolbar style="background-color: #49c2c0">
        <q-btn
          @click="$router.push('/employee')"
          no-caps
          class="q-pa-md"
          flat
          style="color: white"
        >
          <q-icon size="20px" name="fas fa-arrow-left" style="color: white">
          </q-icon>
        </q-btn>
        <q-toolbar-title
          class="text-left text-subtitle2"
          style="color: white; font-size: 16px"
          >Info Karyawan</q-toolbar-title
        >
        <q-btn
          :disable="loading"
          :loading="loading"
          no-caps
          flat
          color="white"
          @click="this.dialogDelete = true"
        >
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
      <q-page v-if="employee">
        <div class="text-center q-py-md" style="background-color: #49c2c0">
          <q-avatar size="150px" color="grey-4">
            <q-img v-if="!employee.avatar" no-spinner src="~/assets/ld.png"></q-img>
            <q-img v-if="employee.avatar == 'users/default.png'" no-spinner src="~/assets/ld.png"></q-img>
            <q-img v-else :src="`${$storageUrl}/${employee.avatar}`" no-spinner />
          </q-avatar>
        </div>

        <div
          class="row q-mx-lg q-mt-xl text-weight-medium"
          style="font-size: 15px; color: #888888"
        >
          Nama
        </div>
        <div
          class="row q-mx-lg text-weight-medium"
          style="font-size: 18px; color: #313131"
        >
          {{ employee.name }}
        </div>
        <div
          class="row q-mx-lg q-mt-xs text-weight-medium"
          style="font-size: 15px; color: #888888"
        >
          Jabatan
        </div>
        <div
          class="row q-mx-lg text-weight-medium"
          style="font-size: 18px; color: #313131"
        >
          Karyawan
        </div>
        <div
          class="row q-mx-lg q-mt-xs text-weight-medium"
          style="font-size: 15px; color: #888888"
        >
          No Telephone
        </div>
        <div
          class="row q-mx-lg text-weight-medium"
          style="font-size: 18px; color: #313131"
        >
          {{ employee.contact_number }}
        </div>
        <div
          class="row q-mx-lg q-mt-xs text-weight-medium"
          style="font-size: 15px; color: #888888"
        >
          Email
        </div>
        <div
          class="row q-mx-lg text-weight-medium"
          style="font-size: 18px; color: #313131"
        >
          {{ employee.email }}
        </div>
        <div
          class="row q-mx-lg q-mt-xs text-weight-medium"
          style="font-size: 15px; color: #888888"
        >
          Id Karyawawn
        </div>
        <div
          class="row q-mx-lg text-weight-medium"
          style="font-size: 18px; color: #313131"
        >
          {{ employee.id }}
        </div>

        <!-- Button  -->
        <div class="row q-mx-sm q-mt-sm q-gutter-y-md">
          <!-- Button edit -->
          <q-btn
            dense
            flat
            @click="$router.push(`/${employee.id}/edit-employee`)"
            no-caps
            style="
              width: 100%;
              background-color: #49c2c0;
              color: #fafafa;
              border-radius: 5px;
            "
          >
            <div class="q-py-sm" style="font-size: medium">Edit Info</div>
          </q-btn>

          <!-- Button cetak kartu -->
          <q-btn
          class="shadow-2 q-mb-sm"
            dense
            flat
             @click="$router.push(`/${employee.id}/print-card`)"
            no-caps
            style="
              width: 100%;
              background-color: #ffffff;
              color: #49c2c0;
              border-radius: 5px;
            "
          >
            <div class="q-py-sm" style="font-size: medium">Cetak Kartu</div>
          </q-btn>
        </div>

        
      </q-page>

      
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  props: ["employeeid"],
  data() {
    return {
      loading: false,
      dialogDelete: false,
      employee: null,
    };
  },
  mounted() {
    this.getEmployee();
  },

  methods: {
    getEmployee() {
      this.$store.dispatch("Employee/show", this.employeeid).then((res) => {
        this.employee = res.data;
        console.log("ini detail employee", res.data);
      });
    },
    deleteEmployee() {
      this.loading = true;
      this.$store
        .dispatch("Employee/destroy", this.employee.id)
        .then((res) => {
          this.$router.push(`/employee`);
          this.$q.notify("Berhasil");
        })
        .finally(() => {
          this.loading = false;
        });
    },

    buttonPrintCard() {
      this.$router.push("/print-card");
    },
  },
};
</script>

<style></style>
