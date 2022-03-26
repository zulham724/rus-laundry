<template>
  <q-layout class="mbl">
    <q-header>
      <q-toolbar class="bg-white shadow-2">
        <q-btn flat dense @click="$router.back()">
          <q-icon name="fas fa-arrow-left" style="color: #888888" size="20px"> </q-icon>
        </q-btn>
        <q-toolbar-title>
          <div class="text-subtitle2 text-grey">Detail Pelanggan</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-pull-to-refresh @refresh="refresh">
      <q-page style="padding-top: 55px" v-if="customer">
        <div class="q-pa-md">
          <div class="column q-gutter-y-sm">
            <div class="text-weight-medium " style="color: #313131">Nama Pelanggan</div>
            <q-input dense rounded outlined v-model="customer.name" input-style="color: #888888">
              <template v-slot:append>
                <div class="text-caption" @click="update()">ubah</div>
              </template>
            </q-input>
          </div>
          <div class="column q-gutter-y-sm q-mt-sm">
            <div class="text-weight-medium " style="color: #313131">Nomer Telepon</div>
            <q-input dense rounded outlined v-model="customer.contact_number" input-style="color: #888888">
              <template v-slot:append>
                <div class="text-caption" @click="update()">ubah</div>
              </template>
            </q-input>
          </div>

          <div class="row justify-between q-pt-lg">
            <div class="text-weight-medium" style="font-size: large; color: #313131">Transaksi</div>
            <!-- <q-input
              style="width: 200px"
              dense
              type="number"
              v-model="search"
              rounded
              outlined
              label="Cari ID Pesanan"
              @update:model-value="filterOrder(search)"
            >
              <template v-slot:append>
                <q-icon name="search"></q-icon>
              </template>
            </q-input> -->
          </div>

          <!-- Skeleton List-->
          <div v-if="isLoad">
            <q-list class="bg-white">
              <q-item
                v-for="n in 8"
                :key="n"
                class="row bg-white shadow-2 q-my-md"
                style="height: 55px; border-radius: 5px"
              >
                <q-item-section avatar>
                  <q-skeleton type="avatar" size="40px" />
                </q-item-section>
                <q-item-section class="text-body1">
                  <q-skeleton type="text" width="80px" />
                  <q-item-label caption>
                    <q-skeleton type="text" />
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div v-else class="row">
            <q-list style="width: 100%">
              <q-expansion-item
                class="q-my-md shadow-1"
                style="border-radius: 5px"
                expand-separator
                icon="fas fa-box-open"
                :label="`Nomor Pesanan ${order.id}`"
                caption="17 Agustus 1945"
                v-for="order in customer.order"
                :key="order.id"
              >
                <q-card>
                  <q-card-section>
                    <div class="row">
                      <table style="width: 100%">
                        <thead>
                          <tr class="text-grey-4 text-caption">
                            <th class="text-left">Jenis Item</th>
                            <th class="text-center">jenis Paket</th>
                            <th class="text-center">Jumlah</th>
                            <th class="text-right">Harga</th>
                          </tr>
                        </thead>
                        <tbody v-if="order.services.length">
                          <tr
                            v-for="service in order.services"
                            :key="service.id"
                            class="text-grey-7"
                          >
                            <td class="text-left">
                              {{ service.category }}
                            </td>
                            <td class="text-center">{{ service.name }}</td>
                            <td class="text-center">
                              {{ service.quantity }}
                            </td>
                            <td class="text-right">
                              {{
                                new Intl.NumberFormat("id-ID", {
                                  style: "currency",
                                  currency: "IDR",
                                }).format(service.price)
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <q-separator size="md" />
                      <div class="row justify-between full-width">
                        <div class="text-caption text-grey-5">
                          Status Pesanan
                        </div>
                        <div class="text-caption text-grey-5">Total harga</div>
                      </div>
                      <div class="row justify-between full-width">
                        <div
                          class="text-caption text-grey-8 text-bold"
                          v-if="order.status"
                        >
                          {{ order.status.name }}
                        </div>
                        <div class="text-caption text-grey-8 text-bold">
                          {{
                            new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                            }).format(order.total_sum)
                          }}
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
      </q-page>
    </q-pull-to-refresh>
  </q-layout>
</template>

<script>
export default {
  props: ["customerid"],
  data() {
    return {
      customer: {},
      search: "",
      orders: [],
      orders_temp: [],
      isLoad: false,
      change: false,
    };
  },

  methods: {
    getCustomer() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Customer/show", this.customerid)
          .then((res) => {
            console.log('test res', res)
            this.customer = res.data;
            this.orders_temp = this.customer.order;
            resolve(res);
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
    update() {
      let id = this.customer.id;
      this.$store.dispatch("Customer/update", this.customer).then((res) => {
        this.$router.push(`/detail-customer/${id}`);
        this.$q.notify("Berhasil");
      });
    },
    filterOrder(val) {
      if (val === "") {
        this.customer.order = this.orders_temp;
      } else {
        this.customer.order = this.orders_temp.filter(
          (v) => v.id == parseInt(val)
        );
      }
    },

    refresh(done) {
      this.getCustomer().then((res) => {
        if (done) done();
      });
    },
  },
  mounted() {
    console.log('tes props', this.customerid)
    this.getCustomer();
  },
};
</script>

<style></style>
