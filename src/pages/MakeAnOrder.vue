<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div class="row" style="height: 300px; width: 100vw">
          <q-img
            class="fixed"
            style="
              height: 200px;
              max-width: var(--page-width);
              margin-left: auto;
              margin-right: auto;
            "

            src="~/assets/bg-buat-pesanan.svg"
          />
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
          <!-- <div class="q-pa-lg text-right">
            <q-btn flat to="/list-type-of-clothess">
              <q-icon>
                <img src="~/assets/cart-pesanan.svg" />
              </q-icon>
            </q-btn>
          </div> -->

          <!-- Button Jenis Pakaian -->
          <!-- <div class="row justify-center">
            <q-btn
              :ripple="false"
              flat
              style="max-width: 100vw"
              to="/list-type-of-clothes"
            >
              <img class="full-width" src="~/assets/jenis-pakaian-card.png" />
            </q-btn>
          </div> -->
          <div class="q-pa-lg">
            <div class="col-12">
              <div class="text-h6 text-bold" style="color: #888888">
                Buat Pesanan
              </div>
            </div>

            <q-form ref="form">
              <q-select
                class="q-pa-xs"
                outlined
                dense
                emit-value
                v-model="customer"
               @update:model-value="cekCustomer()"
               @input-value="setCustomer"
                use-input
                input-debounce="0"
                label="Nama Pelanggan"
                option-label="name"
                :options="customers"
                @filter="filterCustomer"
                behavior="menu"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>

              <q-input
               :disable="cek_customer"
                dense
                v-model="order.contact_number"
                class="q-pa-xs"
                outlined
                label="No Telpon"
                style="color: #bababa; text-weight-regular"
              />
              <q-input
                :disable="cek_customer"
                dense
                v-model="order.date"
                class="q-pa-xs"
                type="date"
                outlined
                style="color: #bababa; text-weight-regular"
              />
              <q-select
                class="q-pa-xs"
                outlined
                dense
                v-model="employee"
                use-input
                input-debounce="0"
                label="Nama Pelayan"
                option-label="name"
                :options="employees"
                @filter="filterEmployee"
                behavior="menu"
              >
                <template v-slot:no-option>
                  <q-item>
                    <q-item-section class="text-grey">
                      No results
                    </q-item-section>
                  </q-item>
                </template>
              </q-select>
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
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Auth"]),
  },
  data() {
    return {
      tab: "pesanan",
      order: {},
      customers: [],
      customers_temp: [],
      customer: null,
      employees: [],
      employees_temp: [],
      employee: null,
      cek_customer: false,
    };
  },
  methods: {
    setCustomer(val){
     let name = val
      this.cek_customer = false
      console.log(name)
    },
    saveOrder() {
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
            };
          });
        });
    },
    filterCustomer(val, update) {
      if (val === "") {
        update(() => {
          this.customers = this.customers_temp;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.customers = this.customers_temp.filter((v) => v.name.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    getEmployee() {
      this.$store.dispatch("Employee/getEmployeesByShop").then((res) => {
        this.employees = this.employees_temp = res.data.map((item) => {
          return {
            name: item.name,
            id: item.id,
          };
        });
      });
    },
    filterEmployee(val, update) {
      if (val === "") {
        update(() => {
          this.employees = this.employees_temp;
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.employees = this.employees_temp.filter(
          (v) => v.name.substring.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    cekCustomer(){
      if(this.customer.id){
        this.cek_customer = true
      }
      console.log(this.cek_customer)
      this.$forceUpdate()
    }
  },
  mounted() {
    this.getCustomers();
  },
};
</script>

<style></style>
