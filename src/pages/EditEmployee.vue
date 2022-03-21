<template>
  <q-layout>
    <q-header>
      <q-toolbar style="background-color: #49c2c0">
        <q-btn
          @click="$router.back()"
          no-caps
          class="q-pa-md"
          flat
          style="color: white"
        >
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #white">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-subtitle2"
          style="color: white; font-size: 16px"
          >Edit Data Karyawan</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page v-if="employee">
        <div class="text-center q-py-md" style="background-color: #49c2c0">
          <q-avatar size="150px" color="grey-4">
            <q-img :src="`${$storageUrl}/${employee.avatar}`" no-spinner />
          </q-avatar>
        </div>

        <div class="q-mt-lg q-mx-sm q-gutter-y-md">
          <q-input
            input-class="q-pa-sm q-px-md text-weight-medium"
            input-style="color: #888888; background-color: #F1F3FD; border-radius: 10px; font-size: medium"
            placeholder="Nama"
            v-model="employee.name"
          />
          <q-input
            input-class="q-pa-sm q-px-md text-weight-medium"
            input-style="color: #888888; background-color: #F1F3FD; border-radius: 10px; font-size: medium"
            placeholder="Jabatan"
            v-model="jabatan"
            readonly 
          />
          <q-input
            input-class="q-pa-sm q-px-md text-weight-medium"
            input-style="color: #888888; background-color: #F1F3FD; border-radius: 10px; font-size: medium"
            type="number"
            placeholder="No Telephone"
            v-model="employee.contact_number"
          />
          <q-input
            input-class="q-pa-sm q-px-md text-weight-medium"
            input-style="color: #888888; background-color: #F1F3FD; border-radius: 10px; font-size: medium"
            placeholder="Alamat Email"
            v-model="employee.email"
          />
        </div>

        <div class="q-mt-md q-mx-sm">
          <q-btn
            @click="update()"
            no-caps
            style="width: 100%; background-color: #49c2c0; font-size: large"
          >
            <div class="q-pa-sm text-weight-medium" style="color: #fafafa">
              Simpan
            </div>
          </q-btn>
        </div>
      </q-page>

      <!--  <q-footer>
        <q-btn
          @click="update()"
          class="q-py-md"
          no-caps
          style="width: 100%; background-color: #49c2c0"
        >
          Simpan Perubahan
        </q-btn>
      </q-footer>  -->
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  props: ["employeeid"],
  data() {
    return {
      employee: null,
      jabatan: "Karyawan",
    };
  },
  methods: {
    getEmployee() {
      this.$store.dispatch("Employee/show", this.employeeid).then((res) => {
        this.employee = res.data;
      });
    },
    update() {
      let id = this.employee.id;
      this.$store.dispatch("Employee/update", this.employee).then((res) => {
        this.$router.push(`/detail-employee/${id}`);
        this.$q.notify("Berhasil");
      });
    },
  },
  mounted() {
    // console.log(this.$storageUrl)
    this.getEmployee();
  },
};
</script>

<style></style>
