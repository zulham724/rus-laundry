<template>
  <q-layout view="lHh lpR fFf" class="mbl" style="background-color: #ffffff">
    <q-page-container class="front">
      <q-header>
        <q-toolbar class="bg-white q-py-md">
          <q-btn
            flat
            round
            size="10px"
            @click="$router.push(`/detail-transaksi/${orderid}`)"
          >
            <q-avatar
              size="25px"
              icon="fas fa-arrow-left"
              style="color: #888888"
            >
            </q-avatar>
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
          <div class="text-caption text-grey-6">Jenis pakaian</div>
          <div class="text-subtitle1" style="color:#7FCFDC">
            {{ order.services[0].category.name }}
          </div>
        </div>
        <div class="col-12">
          <div class="text-caption text-grey-6">Estimasi pesanan</div>
          <div class="text-subtitle1" style="color:#7FCFDC">
            {{ order.services[0].process_time }}
          </div>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-8">
              <div class="text-caption text-grey-6">Status Cucian</div>
              <div class="text-subtitle1" style="color:#7FCFDC">
                {{ order.service_status.status.name }}
              </div>
              <div class="text-caption">
                {{ moment(order.created_at).format('lll') }}
              </div>
            </div>
            <div class="col-4">
              <div class="row justify-end items-center  q-pr-md" v-if="order.service_status.status.id == 1">
                  <q-btn label="proses paket" size="sm" flat @click="updateStatusService()"/>
              </div>
              <div class="row justify-end items-center  q-pr-md" v-else>
                  <q-btn v-show="order.service_status.status.id < 3" label="selsaikan paket" size="sm" flat @click="updateStatusService()"/>
              </div>
            </div>
          </div>
        </div>

        <!-- Animasi Proses Cucian -->
        <div class="text-center">
          <q-img src="~/assets/animasi-proses-cuci.gif" style="width: 30vh">
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
            :value="order.service_status.service_status_id == 3 ? 100 : progress"
          >
            <div class="absolute-full flex flex-center">
              <q-badge
                style="font-size: 3vw"
                class="bg-transparent"
                text-color="white "
                :label="order.service_status.service_status_id == 3 ? 100+'%' : progress"
              />
            </div>
          </q-linear-progress>
        </div>

        <div class="row justify-center">
          <!-- Button Batalkan Pesanan -->
          <q-btn
            @click="$router.push(`/detail-transaksi/${orderid}`)"
            flat
            rounded
            no-caps
            style="
              color: #313131;
              background-color: white;
              font-size: 12px;
              max-width: 50vw;
            "
            class="text-weight-regular"
          >
            <div class="q-pa-sm">kembali</div></q-btn
          >
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
        this.order = res.data
      });
    },
    updateStatusService(){
      let service_status_id;
      if(this.order.service_status.service_status_id == 1){
         service_status_id = 2
      }else{
         service_status_id = 3
      } 
        // console.log(service_status_id)
        const payload = {
          orderid: this.order.id,
          service_id: this.order.services[0].id,
          service_status_id: service_status_id
        }
      this.$store.dispatch("Services/updateStatus", payload).then(res => {
        this.getStatusService()
      })
    }
  },
  mounted() {
    this.getStatusService();
  },
};
</script>

<style></style>
