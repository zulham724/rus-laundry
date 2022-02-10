<template>
  <div>
    <q-list >
      <q-item clickable v-for="n in 23" :key="n" class=" q-my-xs">
        <q-item-section avatar>
          <q-avatar size="30px">
            <q-icon name="fa-solid fa-bell" size="25px" color="black"></q-icon>
          </q-avatar>
        </q-item-section>
        <q-item-section class="text-weight-medium self-center">
          <q-item-label style="color: #3A3838; font-size: 17px">laundry_semarang</q-item-label>
          <q-item-label style="color: #919193; font-size: 13px">100 postingan</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>

export default {
  
};
</script>

<style></style>
