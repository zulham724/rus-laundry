<template>
  <q-dialog ref="dialog" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <!--
        ...content
        ... use q-card-section for it?
      -->
      <q-card-section>
        <div class="row" v-if="order.payments.length">
          <div class="col-12">
            <div class="text-caption">Riwayat Pembayaran</div>
          </div>
          <div class="col-12">
            <div class="text-caption">
              Total terbayar Rp. {{ order.paid_sum.toLocaleString() }}
            </div>
          </div>
          <div class="col-12">
            <div class="text-caption">
              Total tagihan Rp. {{ order.total_sum.toLocaleString() }}
            </div>
          </div>
          <div class="col-12">
            <div v-for="payment in order.payments" :key="payment.id">
              {{ payment.name }} - Rp. {{ payment.value.toLocaleString() }}
            </div>
          </div>
        </div>
        <div v-else>
          <div class="text-caption">Belum ada riwayat pembayaran</div>
        </div>
        <q-form>
          <q-input
            v-model="value"
            placeholder="Masukan nominal"
            @keypress="isNumber($event)"
          ></q-input>
        </q-form>
      </q-card-section>

      <!-- buttons example -->
      <q-card-actions align="right">
        <q-btn
          color="primary"
          :loading="loading"
          :disable="loading"
          label="OK"
          @click="doPayment()"
        />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: ["order"],
  data() {
    return {
      dialog: false,
      value: null,
      loading: false,
    };
  },
  mounted() {},
  methods: {
    doPayment() {
      let sisabayar =
        parseInt(this.order.total_sum) - parseInt(this.order.paid_sum);
      if (this.value <= sisabayar) {
        this.loading = true;
        let payload = {
          order_id: this.order.id,
          value: this.value,
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
    isNumber: function (evt) {
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
