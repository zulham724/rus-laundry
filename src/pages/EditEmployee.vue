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
      <q-page v-if="employee">
        <div class="text-center">
          <q-avatar class="q-ma-xl" size="150px">
            <q-img :src="`${$storageUrl}/${employee.avatar}`" no-spinner/>
          </q-avatar>
        </div>

        <q-input
          class="q-mx-lg q-py-sm"
          rounded
          outlined
          label="Nama"
          v-model="employee.name"
        />
        <q-input class="q-mx-lg q-py-sm" rounded outlined label="Jabatan" />
        <q-input
          class="q-mx-lg q-py-sm"
          rounded
          outlined
          type="number"
          label="No Telephone"
          v-model="employee.contact_number"
        />
        <q-input
          class="q-mx-lg q-py-sm"
          rounded
          outlined
          label="Alamat Email"
          v-model="employee.email"
        />
      </q-page>

      <q-footer>
        <q-btn
          @click="update()"
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
export default {
  props: ["employeeid"],
  data() {
    return {
      employee: null,
    };
  },
  methods: {
    getEmployee() {
      this.$store.dispatch("Employee/show", this.employeeid).then((res) => {
        this.employee = res.data;
      });
    },
    update() {
      let id = this.employee.id
      this.$store.dispatch("Employee/update", this.employee).then(res => {
        this.$router.push(`/detail-employee/${id}`)
        this.$q.notify("Berhasil")
      })
    },
  },
  mounted() {
    // console.log(this.$storageUrl)
    this.getEmployee();
  },
};
</script>

<style></style>
