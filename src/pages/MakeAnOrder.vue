<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div class="row" style="height: 300px; width: 100vw">
          <q-img
            class="fixed"
            style="width: 100vw"
            src="~/assets/bg-buat-pesanan.svg"
          />
        </div>

        <div
          class="front q-pb-lg "
          style="
            border-radius: 30px 0 0 0;
            background-color: #fafafa;
            margin-top: -70px;
            position: relative;
          "
        >
          <!-- <div class="q-pa-lg text-right">
            <q-btn flat to="/list-type-of-clothess">
              <q-icon>
                <img src="~/assets/cart-pesanan.svg" />
              </q-icon>
            </q-btn>
          </div> -->

          <!-- Button Jenis Pakaian -->
          <!-- <div class="row justify-center">
            <q-btn
              :ripple="false"
              flat
              style="max-width: 100vw"
              to="/list-type-of-clothes"
            >
              <img class="full-width" src="~/assets/jenis-pakaian-card.png" />
            </q-btn>
          </div> -->
          <div class="q-pa-lg">
            <div class="col-12">
              <div class="text-h6 text-bold" style="color:#888888">Buat Pesanan</div>
            </div>

            <q-form ref="form">
              <q-input
                dense
                v-model="order.name"
                class="q-pa-xs"
                outlined
                label="Nama"
                style="color: #bababa; text-weight-regular"
              />
              <q-input
                dense
                v-model="order.contact_number"
                class="q-pa-xs"
                outlined
                label="No Telpon"
                style="color: #bababa; text-weight-regular"
              />
              <q-input
                dense
                v-model="order.date"
                class="q-pa-xs"
                type="date"
                outlined
                style="color: #bababa; text-weight-regular"
              />
              <div class="q-pa-xs">
                <q-input
                  dense
                  outlined
                  v-model="order.description"
                  type="textarea"
                  label="Tambahkan catatan"
                  style="color: #bababa; text-weight-regular"
                />
              </div>
            </q-form>
            <div class="text-center q-mt-md">
              <q-btn
                @click="saveOrder()"
                no-caps
                class="full-width"
                style="
                  background-color: #5b6062;
                  color: white;
                  width: 90%;
                  border-radius: 10px;
                "
                label="Selanjutnya"
              />
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tab: "pesanan",
      order: {}
    };
  },
  methods:{
    saveOrder(){
      this.$store.commit("Orders/set_order", {order:this.order})
      this.$router.push('/list-type-of-clothes')
    }
  },
  mounted() {},
};
</script>

<style></style>
