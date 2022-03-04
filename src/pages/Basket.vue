<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn
          :disable="loading"
          flat
          round
          size="10px"
          @click="$router.push('/list-type-of-clothes')"
        >
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Keranjang
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div v-if="Orders.order.charts.length">
          <q-card
            class="no-shadow"
            v-for="(category, c) in Orders.order.charts"
            :key="category.id"
          >
            <div class="row bg-white q-py-sm q-mt-sm">
              <div class="col-4">
                <div
                  class="q-ma-md text-subtitle1 text-weight-medium float-left"
                  style="color: grey"
                >
                  {{ category.name }}
                </div>
              </div>
              <div class="col-8">
                <q-btn
                  class="q-ma-sm float-right"
                  @click="tambahkg(c)"
                  flat
                  style="background-color: #d72929; color: white"
                >
                  <q-icon
                    name="fas fa-plus"
                    style="height: 5px; width: 5px"
                  ></q-icon>
                </q-btn>
                <div class="float-right q-pa-sm text-weight-medium text-h5">
                  {{ category.quantity ? category.quantity.toFixed(1) : null }}
                </div>

                <q-btn
                  class="q-ma-sm float-right"
                  @click="kurangkg(c)"
                  flat
                  style="background-color: #eaeaea"
                >
                  <q-icon
                    name="fas fa-minus"
                    style="height: 5px; width: 5px"
                  ></q-icon>
                </q-btn>
              </div>
            </div>
            <div class="row bg-white justify-end">
              <div
                class="text-caption text-weight-light text-right"
                style="margin-right: 30px; margin-top: -20px"
              >
                Jumlah({{ category.service_unit.name }})
              </div>
            </div>

            <q-separator size="5px" class="q-ma-sm" />

            <div v-if="this.Orders.order.charts[c].package">
              <div>
                <q-card class="no-shadow">
                  <q-card-section
                    @click="$router.push(`/${category.id}/choose-package`)"
                  >
                    <div class="text-caption">
                      {{ this.Orders.order.charts[c].package.name }}
                    </div>
                  </q-card-section>
                </q-card>
                <q-card class="q-mt-sm no-shadow">
                  <q-card-section>
                    <div class="text-caption">Harga</div>
                    <div class="text-caption">
                      {{
                        new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(this.Orders.order.charts[c].total_price)
                      }}
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            <div v-else>
              <q-btn
                @click="$router.push(`/${category.id}/choose-package`)"
                flat
                class="q-my-sm bg-white text-left"
                no-caps
                style="width: 100%"
                align="left"
              >
                <div class="text-left" style="color: grey">
                  Pilih Jenis Paket
                </div>
              </q-btn>
            </div>
          </q-card>

          <div class="col-12 q-pt-lg" v-if="this.Orders.order.total_price">
            <q-card class="q-pa-sm shadow-5">
              <q-card-section>
                <div class="row full-width justify-center">
                  <q-btn v-if="!payment" flat @click="paymentDialog = true"
                    >Tambah Pembayaran</q-btn
                  >
                  <q-btn v-else flat @click="paymentDialog = true">
                    Pembayaran sejumlah RP.
                    {{ payment.toLocaleString() }} dimasukan (KLIK UNTUK UBAH)
                  </q-btn>
                </div>
                <div class="text-caption">Total Harga</div>
                <div class="text-subtitle1">
                  {{
                    new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(this.Orders.order.total_price)
                  }}
                </div>
                <div class="col-12">
                  <q-card class="no-shadow">
                    <q-card-section class="text-left q-pa-none">
                      <q-btn
                        dense
                        flat
                        :icon-right="
                          expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                        "
                        color="grey-6"
                        @click="expanded = !expanded"
                      >
                        <div class="text-caption" style="color: #888888">
                          Estimasi Pesanan
                        </div>
                      </q-btn>
                    </q-card-section>

                    <q-slide-transition>
                      <div v-show="expanded">
                        <q-separator />
                        <q-card-section
                          style="color: #888888"
                          v-for="category in this.Orders.order.charts"
                          :key="category.id"
                        >
                          <div class="text-caption">
                            {{ category.name }}
                          </div>
                          <div class="text-caption">
                            {{ category.package.process_time }} Jam
                          </div>
                        </q-card-section>
                      </div>
                    </q-slide-transition>
                  </q-card>
                </div>
              </q-card-section>
            </q-card>
            <div class="q-pa-lg">
              <q-btn
                :disable="loading"
                @click="store()"
                class="full-width"
                style="border-radius: 10px"
                color="grey-7"
                label="Buat Pesanan"
              />
            </div>
          </div>
        </div>
        <div v-else>
          <div class="text-center q-ma-xl">
            <img
              src="~/assets/keranjang-kosong.svg"
              style="width: 175px; height: 175px; margin-top: 50px"
            />
          </div>
          <div class="text-h6 text-center">Wah Keranjangmu Kosong</div>
        </div>

        <!-- dialog payment  -->
        <q-dialog v-model="paymentDialog">
          <q-card>
            <q-card-section>
              <div class="text-h6">Pembayaran Lunas/ DP</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-form ref="paymentForm">
                <q-input
                  type="number"
                  @keypress="isNumber($event)"
                  placeholder="Masukan Nominal"
                  v-model="payment"
                ></q-input>
              </q-form>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" @click="submitPayment()" />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <!-- end dialog payment  -->
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Orders"]),
  },
  data() {
    return {
      expanded: false,
      loading: false,
      paymentDialog: false,
      payment: null,
    };
  },
  methods: {
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    submitPayment() {
      if (this.payment > this.Orders.order.total_price) {
        this.$q.notify("Pembayaran melebihi batas");
      } else {
        this.$q.notify("Pembayaran dimasukan");
        this.payment = parseInt(this.payment);
        this.Orders.order.payment = this.payment;
        // console.log(this.payment);
        this.paymentDialog = false;
      }
    },
    tambahkg(index) {
      this.Orders.order.charts[index].quantity += 0.1;
      this.getPrice();
    },
    kurangkg(index) {
      this.Orders.order.charts[index].quantity -= 0.1;
      if (this.Orders.order.charts[index].quantity <= 0.1) {
        this.$store.commit("Orders/remove_order_chart", {
          id: this.Orders.order.charts[index].id,
        });
      }
      this.getPrice();
    },
    getOrderServiceCategory() {
      this.Orders.order.charts = this.Orders.order.charts.map((category) => {
        if (category.quantity) {
          return category;
        } else {
          category.quantity = 1;
          return category;
        }
      });
    },
    getPrice() {
      this.Orders.order.charts = this.Orders.order.charts.map((category) => {
        if (category.package) {
          category.total_price = category.quantity * category.package.price;
        }
        return category;
      });
      let total_price = 0;
      this.Orders.order.charts.forEach((category) => {
        total_price += category.total_price;
      });
      this.Orders.order.total_price = total_price;
      this.payment = this.Orders.order.payment;
    },
    store() {
      this.loading = true;
      let order = this.Orders.order;
      this.$store
        .dispatch("Orders/store", order)
        .then((res) => {
          this.$q.notify("Berhasil");
          this.$router.push("/confirm-order");
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getOrderServiceCategory();
    this.getPrice();
  },
};
</script>

<style></style>
