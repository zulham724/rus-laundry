<template>
  <q-dialog maximized v-model="fixed" ref="dialog">
    <q-card>
      <q-card-section>
        <div class="row">
          <div class="col-2 text-center self-center">
            <!-- Img ketika memasukkan nominal -->
            <div v-if="!this.payment" class="text-center">
              <q-img
                src="~/assets/coding1.png"
                style="width: 80%; height: 80%"
              />
            </div>

            <!-- Img ketika inputan lunas -->
            <div
              v-if="this.payment == this.orderSend.total_sum - this.orderSend.paid_sum"
              class="text-center"
            >
              <q-img
                src="~/assets/payment-method1.png"
                style="width: 80%; height: 80%"
              />
            </div>

            <!-- Img ketika inputan tidak lunas -->
            <div
              v-if="
                this.payment != this.orderSend.total_sum - this.orderSend.paid_sum &&
                this.payment > 0
              "
              class="text-center"
            >
              <q-img
                src="~/assets/installment1.png"
                style="width: 80%; height: 80%"
              />
            </div>
          </div>
          <div class="col-8 text-left" text-h5>
            <div>Sisa Tagihan</div>
            <div
              v-if="this.orderSend"
              style="font-size: 28px; font-weight: bold"
            >
              {{
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(this.orderSend.total_sum - this.orderSend.paid_sum)
              }}
            </div>
            <div
              v-if="!this.Orders.order.total_price"
              style="font-size: 28px; font-weight: bold"
            >
              Kosong
            </div>
          </div>

          <div class="col-2">
            <q-btn @click="this.payment = null" round flat v-close-popup>
              <q-avatar>
                <img src="~/assets/x.png" style="width: 35%; height: 35%" />
              </q-avatar>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 70%" class="scroll">
        <q-list>
          <q-item v-for="item in orderSend.payments" :key="item.id">
            <div class="col text-left">{{ item.name }}</div>
            <div
              class="col text-right"
              style="font-size: 20px; font-weight: bold"
            >
              {{ item.value }}
            </div>
          </q-item>
        </q-list>
      </q-card-section>

      <q-separator />

      <div class="fixed-bottom">
        <q-input
          type="number"
          @keypress="isNumber($event)"
          v-model="payment"
          square
          color="black"
          class="bg-white"
          outlined
          label="Masukkan Nominal"
        />
        <div
          @click="doPayment()"
          class="bg-teal-14 text-center q-py-md"
          style="color: #fff"
        >
          Lanjutkan
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapState } from "vuex";
import { ref } from "vue";

export default {
  props: ["orderSend"],
  computed: {
    ...mapState(["Orders"]),
  },
  data() {
    return {
      fixed: ref(false),
      payment: null,
      dialog: false,
      value: null,
    };
  },
  mounted() {},
  methods: {
    doPayment() {
      let sisabayar =
        parseInt(this.orderSend.total_sum) - parseInt(this.orderSend.paid_sum);
      if (this.payment <= sisabayar) {
        this.loading = true;
        let payload = {
          order_id: this.orderSend.id,
          value: this.payment,
        };
        this.$store
          .dispatch("Orders/storePayment", payload)
          .then((res) => {
            this.$q.notify("Pembayaran berhasil dimasukan");
            this.$emit("ok", { order: res.data });
            // or with payload: this.$emit('ok', { ... })
            // then hiding dialog
            this.hide();
          })
          .finally(() => {
            this.loading = false;
          });
      } else {
        this.$q.notify("nilai terlalu besar");
      }
    },
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
      } else if (!this.payment) {
        this.$q.notify("Masukkan jumlah yang ingin dibayar");
      } else {
        this.$q.notify("Pembayaran dimasukan");
        this.payment = parseInt(this.payment);
        this.Orders.order.payment = this.payment;
        console.log("ini jumlah order", this.Orders.order.payment);
        //---
        this.store();
      }
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
    // following method is REQUIRED
    // (don't change its name --> "show")
    show() {
      this.$refs.dialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    onOKClick() {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit("ok");
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide();
    },

    onCancelClick() {
      // we just need to hide dialog
      this.hide();
    },
  },
};
</script>

<style></style>
