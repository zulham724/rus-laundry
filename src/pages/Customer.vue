<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white shadow-2">
        <q-btn
          no-caps
          class="q-pa-md"
          flat
          style="color: white"
          @click="$router.back()"
        >
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #888888">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-subtitle2"
          style="color: #888888; font-size: 16px"
          >Customer
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-pull-to-refresh @refresh="refresh">
        <q-page>
          <div class="column">
            <div class="row bg-white q-py-lg">
              <!-- Search -->
              <div>
                <q-input
                  dense
                  v-model="search"
                  @update:model-value="filterCustomer(search)"
                  rounded
                  class="text-weight-regular q-pl-lg"
                  type="search"
                  style="color: #bababa; font-size: 15px; width: 100%"
                  outlined
                  placeholder="Cari Nama pelanggan..."
                >
                  <q-icon
                    name="search"
                    class="self-center"
                    size="30px"
                    color="grey"
                  />
                </q-input>
              </div>
              <div class="col-4"></div>
              <div class="col-9"></div>
              <div class="col-3">
                <q-btn
                  dense
                  class="self-right"
                  style="color: #888888; margin-bottom: -30px; height: 10px"
                  no-caps
                  flat
                  :label="selectall ? 'Batal' : 'Pilih Semua'"
                  @click="selectAll()"
                >
                </q-btn>
              </div>
            </div>

            <!-- Skeleton -->
            <div v-if="isLoad">
              <q-list class="bg-white">
                <q-item
                  v-for="n in 8"
                  :key="n"
                  class="row bg-white shadow-2 q-mx-lg q-mb-md"
                  style="height: 65px; border-radius: 5px"
                >
                  <q-item-section avatar>
                    <q-skeleton type="avatar" size="45px" />
                  </q-item-section>
                  <q-item-section class="text-body1">
                    <q-skeleton type="text" />
                    <q-item-label caption>
                      <q-skeleton type="text" />
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <div v-else-if="isLoad == false && customers.length">
              <q-list class="bg-white">
                <q-item
                  @click="$router.push(`/detail-customer/${customer.id}`)"
                  clickable
                  v-for="(customer, c) in customers"
                  :key="c"
                  class="row bg-white shadow-2 q-mx-lg q-mb-md"
                  style="height: 65px; border-radius: 5px"
                >
                  <q-item-section avatar>
                    <q-avatar square size="">
                      <q-img src="~/assets/ava-list-customer.svg" no-spinner />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section class="text-body1">
                    <q-item-label>{{ customer.name }}</q-item-label>
                    <q-item-label caption
                      >{{ customer.contact_number }}
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-checkbox
                      v-model="customers[c].checked"
                      @click="dialogDelete()"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <div class="fixed-button">
              <q-card v-if="deletebutton">
                <q-card-section>
                  <div class="row">
                    <div class="col-6">
                      <div>{{  customers.filter((item) => item.checked).length }} item yang dipilih</div>
                    </div>
                    <div class="col-6">
                      <div class="row justify-end">
                        <q-btn
                          style="background: red; color: white"
                          @click="deleteCustomers()"
                          label="Hapus"
                        />
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-page>
      </q-pull-to-refresh>
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
      search: "",
      customers: [],
      customers_temp: [],
      isLoad: false,
      selectall: false,
      deletebutton: false,
    };
  },

  methods: {
    getCustomer() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Customer/getCustomersByShop", this.Auth.auth.shop.id)
          .then((res) => {
            this.customers = this.customers_temp = res.data.map((item) => {
              item.checked = false;
              return item;
            });
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
            // console.log(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    update(value) {
      // console.log(value);
      if (value == "") {
        this.customers = this.customers_temp;
      }
    },
    filterCustomer(val) {
      this.update(val);
    },

     deleteCustomers() {
      let customers = this.customers
      .filter((item) => item.checked)
      .map((item) => item.id);
      console.log(customers)
      this.$store
        .dispatch("Customer/destroy", customers)
        .then((res) => {
          this.customers = this.customers.filter(
            (item) => !item.checked               
          );
          this.deletebutton = false
          this.$q.notify("Berhasil");
        });
    },

    selectAll() {
      this.customers.forEach((item) => {
        if (this.selectall) {
          item.checked = false;
          this.deletebutton = false
        } else if (!this.selectall) {
          item.checked = true;
          this.deletebutton = true
        } 
  
      });
      this.selectall = !this.selectall;

    },
    dialogDelete() {
      let check = this.customers.filter((item) => item.checked).length
      if(check > 0){
        this.deletebutton = true
      }else {
        this.deletebutton = false
      }
    },
    checklist() {
      this.customers = this.customers.filter(checkcustomer);
      function checkcustomer (customer){
        if (customer) {
        } else if (!item.checked) {
          deletebutton = true;
        } else if (item.checked) {
          deletebutton = false;
        }
      }
    },

    refresh(done) {
      this.getCustomer().then((res) => {
        if (done) done();
      });
    },
  },
  mounted() {
    this.getCustomer();
  },
};
</script>

<style></style>
