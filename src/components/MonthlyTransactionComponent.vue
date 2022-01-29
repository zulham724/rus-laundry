<template>
  <div>
    <h4>Transaksi bulan</h4>
    <h4>Transaksi oidajwodiawj</h4>
    <h4>halo ini hari</h4>
    <div v-if="isLoad">
      <q-item
        v-for="n in 9"
        :key="n"
        class="q-my-sm q-mx-md"
        style="border-radius: 10px 10px 10px 10px; background-color: #fafafa"
      >
        <q-item-section avatar>
          <q-skeleton size="60px" type="QAvatar" />
        </q-item-section>

        <q-item-section class="self-center">
          <q-item-label class="text-weight-medium">
            <q-skeleton type="text" height="20px" />
          </q-item-label>
          <q-item-label>
            <q-skeleton type="text" width="15vw" />
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <q-item-label class="self-center on-right">
            <q-skeleton width="50px" type="text" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </div>
    <q-list
      v-else-if="isLoad == false && orders.length"
      bordered
      separator
      class="q-mx-md q-my-xs"
      style="background-color: #fff; border-radius: 20px 20px 20px 20px"
    >
      <q-item
        v-for="order in orders"
        :key="order.id"
        class="q-my-sm q-mx-md"
        clickable
        @click="$router.push(`/detail-transaksi/${order.id}`)"
      >
        <q-item-section avatar>
          <q-item-section side>
            <q-btn flat :ripple="false">
              <q-icon name="fas fa-ellipsis-v" size="18px" />
            </q-btn>
          </q-item-section>
        </q-item-section>

        <q-item-section class="self-center">
          <q-item-label class="text-weight-medium">{{
            order.customer.name
          }}</q-item-label>
          <q-item-label caption lines="1" class="q-mb-sm">
            {{ moment(order.created_at).format("LL") }}</q-item-label
          >
        </q-item-section>

        <q-item-section
          class="text-weight-regular"
          side
          style="color: #54d240; font-size: 12px"
        >
          +{{ order.total_sum }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
  export default {
    name: "monthly-transactions-component",
    data() {    
      return {
        isLoad: false,
        orders: [],
      };
    },
  };
</script>

<style>
</style>