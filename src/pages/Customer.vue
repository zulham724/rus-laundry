<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white shadow-2">
        <q-btn to="/employee" no-caps class="q-pa-md" flat style="color: white">
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #888888">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-subtitle2"
          style="color: #888888; font-size: 16px"
          >Customer
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <div class="row bg-white q-py-lg">
          <!-- Search -->
          <div class="col-8 q-ml-md">
            <q-input
              dense
              rounded
              class="full-width text-weight-regular"
              type="search"
              style="color: #bababa; font-size: 15px"
              outlined
              placeholder="Cari Nama pelanggan..."
            >
              <q-icon
                name="search"
                class="self-center"
                size="30px"
                color="grey"
              />
            </q-input>
          </div>
          <div class="col-4"></div>
          <div class="col-9"></div>
          <div class="col-3">
            <q-btn class="self-right" style="color: #888888" no-caps flat>
              <div class="text-caption" style="font-size: 10px">
                Pilih Semua
              </div>
            </q-btn>
          </div>
        </div>
        <div>
          <div class="q-mx-lg">
            <div
              class="row bg-white shadow-5"
              style="border-radius: 10px; height: 60px"
            >
              <div class="col-3 bg-red">
                <q-avatar class="q-px-md">
                  <img src="~/assets/ava-list-customer.svg" />
                </q-avatar>
              </div>
              <div class="col-9 bg-blue">
                  <q-checkbox
                    left-label
                    v-model="left"
                    val="orange"
                    color="orange"
                  />
                <q-item-section>
                  <q-item-label>Orange</q-item-label>
                  <q-item-label caption>With description</q-item-label>
                </q-item-section>
              </div>
            </div>
          </div>
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
