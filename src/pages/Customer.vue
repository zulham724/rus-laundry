<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white shadow-2">
        <q-btn no-caps class="q-pa-md" flat style="color: white" @click="$router.back()">
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
                  class="self-right"
                  style="color: #888888; margin-bottom: -30px; height: 10px"
                  no-caps
                  flat
                >
                  <div class="text-caption" style="font-size: 10px" @click="update">
                    Pilih Semua
                  </div>
                </q-btn>
              </div>
            </div>

            <!-- Skeleton -->
            <div v-if="isLoad">
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
                      <q-skeleton type="avatar" size="100px" />
                  </q-item-section>
                  <q-item-section class="text-body1">
                    <q-skeleton type="text"/>
                    <q-item-label caption>
                <q-skeleton type="text"/>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>

            <div v-else-if="(isLoad == false && customers.length)">
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
                      <q-img src="~/assets/ava-list-customer.svg" no-spinner/>
                    </q-avatar>
                  </q-item-section>
                  <q-item-section class="text-body1">
                    <q-item-label>{{ customer.name }}</q-item-label>
                    <q-item-label caption
                      >{{ customer.contact_number }}
                    </q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-checkbox v-model="customers[c].checked" />
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-page>
      </q-pull-to-refresh>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
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
    };
  },
  methods: {
    getCustomer() {
      return new Promise((resolve, reject) => {
      this.isLoad = true;
      this.$store.dispatch("Customer/getCustomersByShop", this.Auth.auth.shop.id)
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
      console.log(value);
      if (value == "") {
        this.customers = this.customers_temp;
      }

      const needle = value.toLowerCase();
      this.customers = this.customers_temp.filter(
        (v) => v.name.toLowerCase().indexOf(needle) > -1
      );
    },
    filterCustomer(val) {
      this.update(val);
    },

  refresh(done) {
      this.getPackages().then((res) => {
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
