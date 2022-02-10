<template>
  <q-layout class="mbl">
        <q-header class="text-center">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.back()">
          <q-avatar size="25px" style="color:#7D7D7D" icon="fas fa-arrow-left">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium text-body1"
          style="color: #484848"
          >Potong
        </q-toolbar-title>
        <q-btn dense flat
          ><q-icon style="color:#7D7D7D" name="done"/></q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
        <q-page>
        <img style="width:100%" src="~/assets/exmpcrop1.svg">
        </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>