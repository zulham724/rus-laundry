<template>
  <q-layout class="mbl">
    <q-header>
      <q-toolbar class="bg-white shadow-2">
        <q-btn flat dense @click="$router.back()">
          <q-icon name="fas fa-arrow-left" style="color: #888888"> </q-icon>
        </q-btn>
        <q-toolbar-title>
          <div class="text-subtitle2 text-grey">Detail Pelanggan</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-pull-to-refresh @refresh="refresh">
      <q-page class="q-pa-md" style="padding-top: 55px" v-if="customer">
        <div class="column">
          <div class="text-caption text-grey-8">Nama Pelanggan</div>
          <q-input dense rounded outlined :label="customer.name" v-model="customer.name" >
            <template v-slot:append>
              <div class="text-caption" @click="update()">ubah</div>
            </template>
          </q-input>
        </div>
        <div class="column">
          <div class="text-caption text-grey-8">Nomer Telepon</div>
          <q-input dense rounded outlined :label="customer.contact_number" v-model="customer.contact_number" >
            <template v-slot:append>
              <div class="text-caption" @click="update()">ubah</div>
            </template>
          </q-input>
        </div>
        <div class="row justify-between q-pt-md">
          <div class="text-subtitle1">Transaksi</div>
          <q-input
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
          </q-input>
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
                          <th class="text-left">Jenis Pakaian</th>
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
                            {{ service.category.name }}
                          </td>
                          <td class="text-center">{{ service.name }}</td>
                          <td class="text-center">
                            {{ service.pivot.quantity }}
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
                      <div class="text-caption text-grey-5">Status Pesanan</div>
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
      </q-page>
    </q-pull-to-refresh>
  </q-layout>
</template>

<script>
export default {
  props: ["customerid"],
  data() {
    return {
      customer: null,
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
            this.customer = res.data;
            this.orders_temp = this.customer.order;
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
    this.getCustomer();
  },
};
</script>

<style></style>
