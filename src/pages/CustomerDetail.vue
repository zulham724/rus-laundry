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
    <q-page-container class="front">
      <q-page class="q-pa-md" v-if="customer">
        <div class="column">
          <div class="text-caption text-grey-8">Nama Pelanggan</div>
          <q-input dense rounded outlined :label="customer.name">
            <template v-slot:append>
              <div class="text-caption">ubah</div>
            </template>
          </q-input>
        </div>
        <div class="column">
          <div class="text-caption text-grey-8">Nomer Telepon</div>
          <q-input dense rounded outlined :label="customer.contact_number">
            <template v-slot:append>
              <div class="text-caption">ubah</div>
            </template>
          </q-input>
        </div>
        <div class="row justify-between q-pt-md">
          <div class="text-subtitle1">Transaksi</div>
          <q-input style="width: 200px" dense v-model="search" @update:model-value="filterOrder(search)" rounded outlined label="Cari">
            <template v-slot:append>
              <q-icon name="search"></q-icon>
            </template>
          </q-input>
        </div>
        <div class="row">
          <q-list style="width: 100%">
            <q-expansion-item
              class="q-my-md shadow-1"
              style="border-radius: 5px"
              expand-separator
              icon="fas fa-box-open"
              :label="customer.name"
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
                      <tbody>
                        <tr
                          v-for="service in order.services"
                          :key="service.id"
                          class="text-grey-7"
                        >
                          <td class="text-left">{{ service.category.name }}</td>
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
    </q-page-container>
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
    };
  },

  methods: {
    getCustomer() {
      this.$store.dispatch("Customer/show", this.customerid).then((res) => {
        this.customer = res.data;
        this.orders_temp = this.customer.order
      });
    },
  

 
},
  mounted() {
    this.getCustomer();
  },
};
</script>

<style></style>
