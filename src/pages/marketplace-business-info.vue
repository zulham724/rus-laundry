<template>
  <q-layout class="mbl">
    <q-header class="text-center shadow-1">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.back()">
          <q-avatar size="20px" icon="fas fa-arrow-left" style="color: black">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #3a3838; font-size: 20px"
          >Info Bisnis
        </q-toolbar-title>
        <q-item-section
          side
          class="text-left text-weight-medium"
          style="color: #5a5656; font-size: 15px"
        >
        </q-item-section>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
          <q-input
            class="q-ml-md q-mt-xl"
            autogrow
            borderless
            color="white"
            v-model="text"
            style="background-color: #f5f7f9; width: 92%"
            filled
            placeholder="Tulis tentang bisnismu"
            type="textarea"
          />
            <div>
              <q-btn class="q-ml-md q-mt-md"  style="background-color: #9B27F1; width: 92%;color:white" no-caps label="Simpan" ></q-btn>
            </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style>
</style>