<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container style="background-color: #fafafa">
      <q-page class="bg-white">
        <div class="q-pt-md">
          <div class="q-px-md" style="font-weight: bold; font-size: 20px">
            Layanan
          </div>
          <div class="full-width q-px-md">
            <q-select
              label="Pilih layanan"
              :update:model-value="printSelectedService(model)"
              filled
              v-model="model"
              :options="servicesArr"
              option-label="name"
              option-value="id"
            />
          </div>
        </div>
        <div class="q-px-md q-mt-md">
          <q-card class="q-pt-md" flat>
            <div style="font-weight: bold; font-size: 20px">Status</div>
            <div class="bg-red">
              <div class="row">
                <div class="col bg-red">
                  <q-stepper
                    v-if="!this.selectedService"
                    flat
                    v-model="step"
                    vertical
                    done-color="cyan-7"
                    active-color="cyan-7"
                    animated
                  >
                    <q-step :name="3" title="Pesanan Diambil" :done="step > 2">
                    </q-step>

                    <q-step :name="2" title="Pesanan Selesai" :done="step > 2">
                      Pesanan kamu sudah siap diambil
                    </q-step>

                    <q-step :name="1" title="Pesanan Diproses" :done="step > 1">
                      Pesanan kamu sedang dicuci petugas
                    </q-step>
                  </q-stepper>
                  <q-stepper
                    v-if="this.selectedService"
                    flat
                    v-model="step"
                    vertical
                    done-color="cyan-7"
                    active-color="cyan-7"
                    animated
                  >
                    <q-step :name="3" title="Pesanan Diambil" :done="step > 3">
                    </q-step>
                    <q-step :name="2" title="Pesanan Selesai" :done="step > 2">
                      Pesanan sudah siap kamu ambil
                    </q-step>

                    <q-step :name="1" title="Pesanan Diproses" :done="step > 1">
                      Pesanan kamu sedang dicuci petugas
                    </q-step>
                  </q-stepper>
                </div>
              </div>
            </div>
          </q-card>
        </div>

        <div class="q-pt-md">
          <q-card bordered class="q-mx-md">
            <q-card-section>
              <div style="font-weight: bold; font-size: 20px">
                Detail Pesanan
              </div>
              <div class="column">
                <div class="row">
                  <div class="col-3">Layanan</div>
                  <div class="col-9 text-right" v-if="this.selectedService">
                    {{ this.selectedService.name }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">Item</div>
                  <div class="col-10 text-right" v-if="this.selectedService">
                    {{ this.selectedService.category }}
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">Estimasi pesanan</div>
                  <div class="col-6 text-right" v-if="this.selectedService">
                    {{ this.selectedService.process_time }} Hari
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">Berat/Hitungan</div>
                  <div class="col-10 text-right" v-if="this.selectedService">
                    {{ this.selectedService.quantity }}{{this.selectedService.service_unit}}
                  </div>
                </div>
              </div>
              <q-separator class="q-my-sm"></q-separator>
              <div class="row">
                <div class="col-2">Harga</div>
                <div class="col-10 text-right" v-if="this.selectedService">
                  {{
                    new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(this.selectedService.price)
                  }}
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <div class="q-pt-md">
          <div class="q-px-md" style="font-weight: bold; font-size: 20px">
            Informasi Pemesan
          </div>
          <div class="q-px-md column">
            <div class="row">
              <div class="col-6">Nama</div>
              <div class="col-6 text-right" v-if="this.detail_order.customer">
                {{ this.detail_order.customer.name }}
              </div>
            </div>
            <div class="row">
              <div class="col-6">No Hp</div>
              <div class="col-6 text-right" v-if="this.detail_order.customer">
                {{ this.detail_order.customer.contact_number }}
              </div>
            </div>
            <div class="row">
              <div class="col-6">Status pembayaran</div>
              <div
                class="col-6 text-right"
                v-if="
                  this.detail_order.total_sum - this.detail_order.paid_sum != 0
                "
              >
                Belum lunas
              </div>
              <div
                class="col-6 text-right"
                v-if="
                  this.detail_order.total_sum - this.detail_order.paid_sum == 0
                "
              >
                Lunas
              </div>
            </div>
          </div>
        </div>
        <div class="q-pt-md row q-px-md">
          <div class="col-6" style="font-weight: bold; font-size: 20px">
            Total Harga
          </div>
          <div class="col-6 text-right text-bold">
            {{
              new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(this.totalPrice)
            }}
          </div>
        </div>
        <div class="q-pt-md">
          <div class="q-px-md" style="font-weight: bold; font-size: 20px">
            Rekening Bank
          </div>
          <div
            v-for="item in this.bankAccount"
            :key="item.id"
            class="q-px-md column"
          >
            <div class="row">
              <div class="col-6">{{item.name}}/{{item.account_name}}</div>
              <div class="col-6 text-right" >
                {{ item.account_number }}
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["orderid", "shopid"],

  data() {
    return {
      model: ref(null),

      servicesArr: [],
      selectedService: null,
      totalPrice: 0,

      step: ref(0),
      slide: ref("style"),
      detail_order: {},
      slide: null,
      order: null,
      bankAccount: [],
    };
  },

  mounted() {
    console.log("orderid", this.orderid);
    console.log("shopid", this.shopid);
    this.getDetailOrder();
    this.getBankInformation();
  },

  methods: {
    printSelectedService(value) {
      console.log("selectedService", value);
      this.selectedService = null;
      this.selectedService = value;
    },
    getBankInformation() {
      this.$store
        .dispatch("Bank/getAccountBank", this.shopid)
        .then((res) => {
          this.bankAccount = res.data;
          console.log("then getBankInformation", res.data);
        })
        .catch((err) => {
          console.log("terjadi kesalahan getBankInformation", err);
        });
    },
    getDetailOrder() {
      this.isLoad = true;

      const payload = {
        shopId: this.shopid,
        orderId: this.orderid,
      };
      console.log("payload", payload);
      this.$store
        .dispatch("Orders/show2", payload)
        .then((res) => {
          this.detail_order = res.data;
          console.log("ini detail_order", this.detail_order);
          for (let i = 0; i < this.detail_order.services.length; i++) {
            let serviceName = this.detail_order.services[i];
            this.servicesArr.push(serviceName);
            let servicePrice = this.detail_order.services[i].price;
            this.totalPrice += servicePrice;
          }
        })
        .finally(() => {
          this.isLoad = false;
          console.log("this.totalPrice", this.totalPrice);
          console.log("ini servicesName", this.servicePrice);
          if (this.detail_order.order_status_id == 1) {
            this.step = 1;
            console.log("step 1");
            console.log("step", this.step);
          } else if (this.detail_order.order_status_id == 2) {
            this.step = 2;
            console.log("step 2");
            console.log("step", this.step);
          } else if (this.detail_order.order_status_id == 3) {
            this.step = 2;
            console.log("step 2");
            console.log("step", this.step);
          } else if (this.detail_order.order_status_id == 4) {
            this.step = 4;
            console.log("step 4");
            console.log("step", this.step);
          }
        });
    },
  },
};
</script>

<style></style>
