<template>
  <q-layout class="mbl">
  <q-header class="shadow-1">
      <q-toolbar class="bg-white q-py-md">
        <q-btn style="width:100%" flat round size="10px" @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #49c2c0">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #5a5656; font-size: 16px"
          >laundry Indonesia</q-toolbar-title
        >
        <q-btn no-caps flat color="grey" class="text-right">
          <div class="text-weight-medium q-pa-xs text-caption" style="color: #5a5656;border-style:solid;border-width:1px;border-color:#c4c4c4">
            Edit Profil
          </div>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
        <q-page>
            <div class="text-right text-weight-medium text-body1  q-pt-md q-pr-lg" style="color:#919193">
            Cabang Kudus
            </div>
            <div class="bg-red row"> tes</div>
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
