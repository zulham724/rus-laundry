<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div
          class="row"
          style="
            height: 300px;
            width: 100vw;
            background-image: linear-gradient(
              to top left,
              #85d9de,
              #70c7e2,
              #4ca6e5
            );
          "
        >
          <q-img
            no-spinner
            class="fixed"
            style="
              height: 200px;
              max-width: var(--page-width);
              margin-left: auto;
              margin-right: auto;
            "
            src="~/assets/bg-buat-pesanan.svg"
          >
            
          </q-img>
        </div>

        <div
          class="front q-pb-lg"
          style="
            border-radius: 30px 0 0 0;
            background-color: #fafafa;
            margin-top: -130px;
            position: relative;
          "
        >
          <div class="q-pa-lg">
            <div class="col-12">
              <div class="text-h6 text-bold" style="color: #888888">
                Buat Pesanan
              </div>
            </div>

            <q-form ref="form">
              <input type="hidden" v-model="customer.id">
              <q-input
                readonly
                dense
                @click="dialogListCustomer = true"
                class="q-pa-xs"
                v-model="customer.name"
                outlined
                label="Nama pelanggan"
                style="color: #bababa; text-weight-regular"
              />

              <q-input
                :disable="cek_customer"
                dense
                v-model="customer.contact_number"
                class="q-pa-xs"
                outlined
                label="No Telpon"
                style="color: #bababa; text-weight-regular"
              />
              <q-input
                dense
                v-model="order.date"
                class="q-pa-xs"
                type="date"
                outlined
                style="color: #bababa; text-weight-regular"
              />

              <q-input
                readonly
                dense
                @click="dialogListEmployee = true"
                class="q-pa-xs"
                v-model="employee.name"
                outlined
                label="Nama karyawan"
                style="color: #bababa; text-weight-regular"
              />

              <div class="q-pa-xs">
                <q-input
                  dense
                  outlined
                  v-model="order.description"
                  type="textarea"
                  label="Tambahkan catatan"
                  style="color: #bababa; text-weight-regular"
                />
              </div>
            </q-form>
            <div class="text-center q-mt-md">
              <q-btn
                @click="saveOrder()"
                no-caps
                class="full-width"
                style="
                  background-color: #5b6062;
                  color: white;
                  width: 90%;
                  border-radius: 10px;
                "
                label="Selanjutnya"
              />
            </div>
          </div>
        </div>

        <!--Dialog Customers-->
        <q-dialog v-model="dialogListCustomer" position="right">
          <q-card style="width: 350px">
            <q-card-section>
              <q-input
                label="Cari"
                class="full-width text-weight-regular"
                type="search"
                outlined
                v-model="search"
                dense
                @update:model-value="filterCustomer(search)"
              />
              <div class="q-pt-sm">
                <div class="text-caption">Daftar pelanggan</div>
                <div class="q-pt-sm">
                  <q-list v-if="customers.length">
                    <q-item v-for="customer in customers" :key="customer.id">
                      <q-item-section avatar>
                        <q-avatar size="sm" color="grey-5">
                          {{ customer.name[0].toUpperCase() }}
                        </q-avatar>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>
                          {{ customer.name }}
                        </q-item-label>
                        <q-item-label caption>
                          {{ customer.contact_number }}
                        </q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-btn
                          v-close-popup
                          flat
                          label="Pilih"
                          color="grey-7"
                          @click="setCustomer(customer)"
                        />
                      </q-item-section>
                    </q-item>
                  </q-list>
                  <div v-else>
                    <div class="row">
                      <q-btn
                        v-close-popup
                        @click="dialogAddCustomer = true"
                        color="green-6"
                        label="Tambah baru"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>

        <q-dialog v-model="dialogAddCustomer" position="right">
          <q-card style="width: 350px">
            <q-card-section class="items-center no-wrap">
              <div class="text-subtitle1">Tambah pelanggan baru</div>
              <div class="q-pa-md">
                <q-form ref="form">
                  <q-input
                    label="Nama"
                    outlined
                    dense
                    v-model="newCustomer.name"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type something',
                    ]"
                  />

                  <q-input
                    label="Nomor Hp"
                    outlined
                    dense
                    v-model="newCustomer.contact_number"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type something',
                    ]"
                  />

                  <q-input
                    label="Email"
                    type="email"
                    outlined
                    dense
                    v-model="newCustomer.email"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type something',
                    ]"
                  />

                  <q-input
                    label="Alamat"
                    outlined
                    dense
                    v-model="newCustomer.home_address"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) || 'Please type something',
                    ]"
                  />

                  <q-btn
                    v-close-popup
                    @click="storeCustomer()"
                    color="green-6"
                    label="Tambah"
                  />
                </q-form>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>

        <!--Dialog Employees-->
        <q-dialog v-model="dialogListEmployee" position="left">
          <q-card style="width: 350px">
            <q-card-section>
              <q-input
                label="Cari"
                class="full-width text-weight-regular"
                type="search"
                outlined
                v-model="search"
                dense
                @update:model-value="filterEmployee(search)"
              />
              <div class="q-pt-sm">
                <div class="text-caption">Daftar karyawan</div>
                <div class="q-pt-sm">
                  <q-list v-if="employees.length">
                    <q-item v-for="employee in employees" :key="employee.id">
                      <q-item-section avatar>
                        <q-avatar size="sm" color="grey-5">
                          {{ employee.name[0].toUpperCase() }}
                        </q-avatar>
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>
                          {{ employee.name }}
                        </q-item-label>
                        <q-item-label caption>
                          {{ employee.contact_number }}
                        </q-item-label>
                      </q-item-section>
                      <q-item-section side>
                        <q-btn
                          v-close-popup
                          flat
                          label="Pilih"
                          color="grey-7"
                          @click="setEmployee(employee)"
                        />
                      </q-item-section>
                    </q-item>
                  </q-list>
                  <div v-else>
                    <div class="row text-subtitle1 text-grey-8">
                      Tidak ditemukan
                    </div>
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import { debounce } from "quasar";
export default {
  computed: {
    ...mapState(["Auth"]),
  },
  data() {
    return {
      tab: "pesanan",
      order: {},
      dialogListCustomer: false,
      dialogListEmployee: false,
      dialogAddCustomer: false,
      search: "",
      customers: [],
      customers_temp: [],
      customer: {}, // output {}
      newCustomer: {}, // string text
      employees: [],
      employees_temp: [],
      employee: {},
      cek_customer: false,
    };
  },
  methods: {
    setCustomer(customer) {
      this.customer = customer;
      this.cek_customer = true;
    },
    setEmployee(employee) {
      this.employee = employee;
    },
    saveOrder() {
      this.order.customer_id = this.customer.id;
      this.order.employee_id = this.employee.id;
      this.$store.commit("Orders/set_order", { order: this.order });
      this.$router.push("/list-type-of-clothes");
    },
    getCustomers() {
      this.$store
        .dispatch("Customer/getCustomersByShop", this.Auth.auth.shop.id)
        .then((res) => {
          this.customers = this.customers_temp = res.data.map((item) => {
            return {
              name: item.name,
              id: item.id,
              contact_number: item.contact_number,
            };
          });
        });
    },
    updateCustomer(value) {
      if (value === "") {
        this.customers = this.customers_temp;
      }

      const needle = value.toLowerCase();
      this.customers = this.customers_temp.filter(
        (v) => v.name.toLowerCase().indexOf(needle) > -1
      );
    },
    filterCustomer(val) {
      this.updateCustomer(val);
    },
    getEmployees() {
      this.$store
        .dispatch("Employee/getEmployeesByShop", this.Auth.auth.shop.id)
        .then((res) => {
          this.employees = this.employees_temp = res.data.map((item) => {
            return {
              name: item.name,
              id: item.id,
            };
          });
        });
    },
    updateEmployee(val) {
      if (val === "") {
        this.employees = this.employees_temp;
      }

      const needle = val.toLowerCase();
      this.employees = this.employees_temp.filter(
        (v) => v.name.toLowerCase().indexOf(needle) > -1
      );
    },
    filterEmployee(value) {
      this.updateEmployee(value);
    },
    storeCustomer() {
      this.$store.dispatch("Customer/store", this.newCustomer).then((res) => {
        this.customer = res.data;
        this.getCustomers();
      }).catch(err => {
        this.$q.notify('email sudah ada')
      })
    },
  },
  mounted() {
    this.filterCustomer = debounce(this.filterCustomer, 1000);
    this.getCustomers();
    this.getEmployees();
  },
};
</script>

<style></style>
