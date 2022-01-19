<template>
  <q-page class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <div class="row bg-white q-px-md q-py-lg">
      <!-- Search -->
      <q-input
        dense
        class="full-width text-weight-regular"
        type="search"
        style="
          color: #bababa;
          font-size: 15px;
          border-radius: 10px 10px 10px 10px;
        "
        outlined
        @update:model-value="filterEmployee(search)"
        v-model="search"
        placeholder="Cari berdasarkan nama, email"
      >
        <q-icon name="search" class="self-center" size="30px" color="grey" />
      </q-input>
    </div>

    <q-btn no-caps to="/attendance" flat class="full-width bg-white q-mt-md">
      <div
        class="col-10 text-left text-weight-medium q-pl-sm"
        style="color: #756a6a; font-size: 10px"
      >
        Rekab absen
      </div>
      <div class="col-2 text-right">
        <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
      </div>
    </q-btn>

    <q-btn no-caps flat class="full-width bg-white q-mt-sm" to="/add-employee">
      <div
        class="col-10 text-left text-weight-medium q-pl-sm"
        style="color: #756a6a; font-size: 10px"
      >
        Tambah Karyawan
      </div>
      <div class="col-2 text-right">
        <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
      </div>
    </q-btn>

    <q-btn no-caps flat class="full-width bg-white q-mt-sm" @click="$router.push('/customer')">
      <div
        class="col-10 text-left text-weight-medium q-pl-sm"
        style="color: #756a6a; font-size: 10px"
      >
        Daftar Pelanggan
      </div>
      <div class="col-2 text-right">
        <q-icon name="fas fa-chevron-right" size="15px"></q-icon>
      </div>
    </q-btn>

    <div class="row q-mt-md">
      <div class="col-8"></div>
      <div class="col-4 text-center">
        <div class="text-weight-medium" style="color: #756a6a; font-size: 10px">
          Jumlah Karyawan
        </div>
        <div class="text-weight-medium" style="color: #756a6a; font-size: 15px">
          {{ employees.length }}
        </div>
      </div>
    </div>

    <div class="row q-mt-md">
      <div class="col-6 text-center q-mt-lg" v-for="employee in employees" :key="employee.id">
        <div
          @click="$router.push(`/detail-employee/${employee.id}`);"
          class="q-mx-lg bg-white text-center q-pa-md shadow-3"
          style="border-radius: 5px 5px 5px 5px"
        >
          <q-avatar size="60px">
            <q-img src="~/assets/Avatar.png"></q-img>
          </q-avatar>
          <div class="text-weight-medium" style="font-size: 8px">
            {{ employee.name }}
          </div>
          <div
            class="text-weight-medium q-mx-sm"
            style="border-radius: 5px 5px 5px 5px; background-color: #eaecfc"
          >
            <div
              class="text-center q-ma-xs"
              style="font-size: 8px; color: #888888"
            >
              Karyawan
            </div>
          </div>
          <div
            v-if="employee.contact_number"
            class="text-weight-medium"
            style="font-size: 8px; color: #888888"
          >
            {{ employee.contact_number }}
          </div>
          <div
            v-else
            class="text-weight-medium"
            style="font-size: 8px; color: #888888"
          >
            Belum punya nomor hp
          </div>
          <div
            class="text-weight-medium"
            style="font-size: 7px; color: #9ca4e4"
          >
            {{ employee.email }}
          </div>
          <div
            class="text-weight-medium text-right q-pt-sm"
            style="font-size: 8px; color: #888888"
          >
            Id : {{ employee.id }}
          </div>
        </div>
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn
        class="q-pa-sm"
        fab
        style="background-image: linear-gradient(to top left, #f6d365, #fda085)"
      >
        <q-img src="~/assets/button-bawah-employee.svg" />
      </q-btn>
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { mapState } from 'vuex';
export default {
  computed:{
    ...mapState(["Auth"]),
  },
  data() {
    return {
      search: "",
      employees: [],
      employee_temp: [],
    };
  },

  methods: {
    getEmployees(){
      this.$store.dispatch("Employee/getEmployeesByShop", this.Auth.auth.shop.id).then(res =>{
        this.employees = this.employee_temp = res.data
      })
    },
    update(value){
      if(value == ""){
        this.employees = this.employee_temp
      }

      const needle = value.toLowerCase();
      this.employees = this.employee_temp.filter((v)=> v.name.toLowerCase().indexOf(needle) > -1)
    },
    filterEmployee(val){
      this.update(val)
    }
  },
  mounted(){
    this.getEmployees()
  }
};
</script>

<style></style>
