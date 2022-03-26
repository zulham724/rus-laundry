<template>
  <q-layout view="lHh lpR fFf" class="mbl" style="background-color: #ffffff">
    <q-page-container class="front">
      <q-header>
        <q-toolbar class="bg-white q-py-md">
          <q-btn
            flat
            round
            size="10px"
            @click="$router.back()"
          >
          <!-- @click="$router.push(`/detail-transaksi/${orderid}`)" -->
            <q-avatar
              size="20px"
              icon="fas fa-arrow-left"
              style="color: #888888"
            >
            </q-avatar
            >{{}}
          </q-btn>
          <q-toolbar-title
            class="text-left text-weight-medium"
            style="color: #888888; font-size: 16px"
            >Status Cucian</q-toolbar-title
          >
        </q-toolbar>
      </q-header>
      <q-separator></q-separator>
      <q-separator></q-separator>
      <q-page style="background-color: #ffffff" class="q-pa-md" v-if="order">
        <div class="col-12">
          <div class="text-caption text-grey-6">Jenis Item</div>
          <div class="text-subtitle1" style="color: #7fcfdc">
            {{ order.services[0].category }}
          </div>
        </div>
        <div class="col-12">
          <div class="text-caption text-grey-6">Estimasi pesanan</div>
          <div class="text-subtitle1" style="color: #7fcfdc">
            {{ order.services[0].process_time }} Jam
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-8">
              <div class="text-caption text-grey-6">Status Cucian</div>
              <div class="text-subtitle1" style="color: #7fcfdc">
                {{ order.service_status.status.name }}
              </div>
              <div class="text-caption">
                {{ moment(order.created_at).format("lll") }}
              </div>
            </div>
          </div>
        </div>

        <!-- Animasi Proses Cucian -->
        <div class="text-center">
          <q-img
            no-loading
            src="~/assets/animasi-proses-cuci.gif"
            style="width: 30vh"
          >
          </q-img>
        </div>
        <!-- Animasi Progress Loading  -->
        <div class="row justify-center">
          <q-linear-progress
            stripe
            style="
              max-width: 30vw;
              max-height: 35px;
              border-radius: 50px;
              color: #49c26b;
            "
            class="q-mb-md q-mt-lg"
            size="10vw"
            :value="
              order.service_status.service_status_id == 3 ? 100 : progress
            "
          >
            <div class="absolute-full flex flex-center self-center">
              <q-badge
                style="font-size: 20px"
                class="bg-transparent"
                text-color="white "
                :label="
                  order.service_status.service_status_id == 3
                    ? 100 + '%'
                    : progress
                "
              />
            </div>
          </q-linear-progress>
        </div>

        <div class="row justify-center">
          <!-- Button Batalkan Pesanan -->
          <div v-if="order.service_status.status.id == 1">
            <q-btn
              @click="updateStatusService()"
              flat
              :disable="btnDisable"
              rounded
              no-caps
              style="
                color: #fafafa;
                background-color: #49c2c0;
                font-size: 12px;
                max-width: 50vw;
                border-radius: 10px;
              "
              class="text-weight-regular"
            >
              <div class="q-pa-sm">Proses</div>
              <q-spinner v-if="btnDisable" color="black" :thickness="2" />
            </q-btn>
          </div>

          <div v-else>
            <q-btn
              v-show="order.service_status.status.id < 3"
              @click="updateStatusService()"
              flat
              :disable="btnDisable"
              no-caps
              style="
                color: #fafafa;
                background-color: #49c2c0;
                font-size: 12px;
                max-width: 50vw;
                border-radius: 10px;
              "
              class="text-weight-regular"
            >
              <div class="q-pa-sm">Selesai</div>
              <q-spinner v-if="btnDisable" color="black" :thickness="2" />
            </q-btn>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { Loading, useQuasar, QSpinnerGears, QBtn } from "quasar";
import { onBeforeUnmount } from "vue";
import moment from "moment";
function show(options) {
  Loading.show(options);
  setTimeout(() => {
    Loading.hide();
  }, 3000);
}

export default {
  props: ["orderid", "serviceid"],
  components: {
    QSpinnerGears,
    QBtn,
  },

  data() {
    return {
      progress: 0 * 100 + "%",
      text: "",
      order: null,
      btnDisable: false,
    };
  },

  methods: {
    moment,
    prosesLoading() {
      show({ message: "Pesanan Diproses..." });
      this.$router.push("/laundry-details");
    },
    getStatusService() {
      const payload = {
        order_id: this.orderid,
        service_id: this.serviceid,
      };
      this.$store.dispatch("Orders/getStatus", payload).then((res) => {
        this.order = res.data;
        console.log("Ini Data Cucian", res.data);
      });
    },
    updateStatusService() {
      this.btnDisable = true;
      let service_status_id;
      if (this.order.service_status.service_status_id == 1) {
        service_status_id = 2;
      } else {
        service_status_id = 3;
      }

      // console.log(service_status_id)
      const payload = {
        id: this.order.service_status.id,
        service_status_id: service_status_id,
      };
      this.$store
        .dispatch("Services/updateStatus", payload)
        .then((res) => {
          this.btnDisable = true;
          this.getStatusService();
        })
        .finally(() => {
          this.btnDisable = false;
        });
    },
  },

  mounted() {
    this.getStatusService();
  },
};
</script>

<style></style>
