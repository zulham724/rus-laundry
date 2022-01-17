<template>
  <q-layout>
    <q-header>
      <q-toolbar class="bg-white shadow-1">
        <q-btn dense no-caps flat style="color: white" @click="$router.push(`/detail-transaksi/${order.id}`)">
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #888888">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Paket Lainya</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page v-if="order">
        <div class="q-mt-md shadow-1" v-for="list_service in order.services" :key="list_service.id">
          <q-btn class="full-width" no-caps flat>
            <div
              class="col-12 text-weight-regular text-left"
              style="font-size: 17px; color: #888888"
            >
              {{ list_service.name }}
            </div>
            <div
              class="col-12 text-weight-regular text-left"
              style="font-size: 10px; color: #d0caca"
            >
              {{ list_service.category.service_unit.name }}
            </div>
          </q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  props:["orderid"],
  data(){
    return {
      order: null
    }
  },
  methods:{
    getListService(){
      this.$store.dispatch("Orders/show", this.orderid).then((res) => {
        this.order = res.data;
      });
    }
  },
  mounted(){
    this.getListService()
  }
};
</script>

<style></style>
