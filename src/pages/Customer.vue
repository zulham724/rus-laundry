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
        <div class="column">
          <div class="row bg-white q-py-lg">
            <!-- Search -->
            <div>
              <q-input
                dense
                rounded
                class=" text-weight-regular q-ml-lg"
                type="search"
                style="color: #bababa; font-size: 15px;width:100%"
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
              <q-btn
                class="self-right"
                style="color: #888888; margin-bottom: -30px; height: 10px"
                no-caps
                flat
              >
                <div class="text-caption" style="font-size: 10px">
                  Pilih Semua
                </div>
              </q-btn>
            </div>
          </div>

          <q-list class="bg-white">
            <q-item
              v-for="n in 9"
              :key="n"
              class="row bg-white shadow-2 q-mx-lg q-mb-md"
              style="height: 65px; border-radius: 5px"
            >
              <q-item-section avatar>
                <q-avatar square size="">
                  <img src="~/assets/ava-list-customer.svg" />
                </q-avatar>
              </q-item-section>
              <q-item-section class="text-body1">
                <q-item-label>Muh Ali Ridho</q-item-label>
                <q-item-label caption>081223131321</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-checkbox />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>
