<template>
  <q-dialog
    v-model="dialogDisable"
    ref="dialog"
    @hide="onDialogHide"
    persistent
  >
    <q-card class="full-width" style="border-radius: 20px">
      <q-card-section>
        <div class="row text-center">
          <div class="col-10 text-left" text-h5>
            <div>Total Harga</div>
            <div
              v-if="this.Orders.order.total_price"
              style="font-size: 28px; font-weight: bold"
            >
              {{
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(this.Orders.order.total_price)
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

      <!-- Img ketika memasukkan nominal -->
      <div v-if="!this.payment" class="text-center">
        <q-img src="~/assets/coding1.png" style="width: 100px; height: 100px" />
        <div class="q-my-md" style="font-size: 16px; font-weight: bold">
          Masukkan nominal form di bawah
        </div>
      </div>

      <!-- Img ketika inputan lunas -->
      <div
        v-if="
          this.payment == this.Orders.order.total_price ||
          this.payment > this.Orders.order.total_price
        "
        class="text-center"
      >
        <q-img
          src="~/assets/payment-method1.png"
          style="width: 100px; height: 100px"
        />
        <div
          class="q-my-md"
          style="font-size: 16px; font-weight: bold; color: #7ed396"
        >
          Pembayaran Lunas
        </div>
      </div>

      <!-- Img ketika inputan tidak lunas -->
      <div
        v-if="
          this.payment != this.Orders.order.total_price &&
          this.payment > 0 &&
          this.payment < this.Orders.order.total_price
        "
        class="text-center"
      >
        <q-img
          src="~/assets/installment1.png"
          style="width: 100px; height: 100px"
        />
        <div
          class="q-my-md"
          style="font-size: 16px; font-weight: bold; color: #8b8484"
        >
          Bayar Sebagian
        </div>
      </div>

      <q-input
        type="number"
        @keypress="isNumber($event)"
        v-model="payment"
        square
        color="black"
        outlined
        label="Masukkan Nominal"
        :disable="btnDisable == true"
      />
      <q-btn
        @click="submitPayment()"
        class="bg-teal-14 text-center q-py-md full-width"
        style="color: #fff"
        :disable="btnDisable == true"
        :loading="btnDisable"
      >
        <div>Lanjutkan</div>

        <q-spinner v-if="btnDisable" color="black" :thickness="2" />
      </q-btn>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["Orders"]),
  },
  data() {
    return {
      payment: null,
      dialog: false,
      btnDisable: false,
      dialogDisable: true,
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
      console.log("click");
      this.btnDisable = true;
      if (this.payment > this.Orders.order.total_price) {
        this.btnDisable = true;
        this.$q.notify({
          position: "top",
          message: "Pembayaran melebihi batas",
        });
        this.btnDisable = false;
      } else if (!this.payment) {
        this.btnDisable = true;
        this.$q.notify({
          position: "top",
          message: "Masukkan jumlah yang ingin di bayar",
        });
        this.btnDisable = false;
      } else {
        this.btnDisable = true;
        this.$q.notify({
          position: "top",
          message: "Pembayaran dimasukkan",
        });
        this.payment = parseInt(this.payment);
        this.Orders.order.payment = this.payment;
        // console.log("ini jumlah order", this.Orders.order.payment);
        //---
        this.store();
        this.btnDisbale = false;
      }
    },
    store() {
      this.btnDisable = true;
      this.dialogDisable = true;
      let order = this.Orders.order;
      this.$store
        .dispatch("Orders/store", order)
        .then((res) => {
          console.log("cek res hasil store", res.data);

          this.btnDisable = true;
          this.dialogDisable = true;
          this.$q.notify({
            position: "top",
            message: "Berhasil",
          });
          this.$router.push(`/confirm-order/${res.data.id}`);
        })
        .finally(() => {
          this.dialogDisable = false;
          this.btnDisable = false;
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
