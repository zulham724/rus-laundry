<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <!-- Header -->
    <q-header>
      <div class="full-width" style="height: 120px">
        <!-- Header Image -->
        <q-img
          no-spinner
          src="~/assets/header-profile-of-course.svg"
          style="height: 120px"
        >
          <!-- Container -->
          <div class="bg-transparent full-width q-gutter-none">
            <div class="row full-width col-12">
              <div class="col-1">
                <!-- Button back -->
                <q-btn
                  @click="$router.push('/profile-of-course')"
                  no-caps
                  class="q-pa-sm"
                  flat
                  style="color: white"
                >
                  <q-icon
                    size="25px"
                    name="fas fa-arrow-left"
                    style="color: #ffffff"
                  >
                  </q-icon>
                </q-btn>
              </div>
              <div class="col self-center text-left q-pl-md">
                <div
                  class="text-weight-medium"
                  style="color: #ffffff; font-size: 20px"
                >
                  Ranking
                </div>
              </div>
            </div>
          </div>
        </q-img>
      </div>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-sm">
        <div class="row ">
          <div class="col-1 q-py-lg">
            <div class="full-height q-ml-sm" style="display: block; background-color: #26E745; width: 2px">
            </div>
          </div>
          <div class="col-10">
            <q-list v-for="n in 11" :key="n" class="q-py-sm">
              <q-item clickable class="bg-white shadow-2 q-py-md" style="border-radius: 5px">
                <q-item-section avatar>
                  <q-avatar size="40px" color="grey">
                    <q-img no-spinner src="~/assets/Avatar.png"></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section
                  class="text-weight-medium"
                  style="color: #4f4f4f"
                >
                  <q-item-label style="font-size: 16px"
                    >IndonesiaLaundry</q-item-label
                  >
                  <div class="row">
                    <!-- Image of point -->
                    <q-avatar square size="20px">
                      <q-img no-spinner src="~/assets/icon-coin.svg"></q-img>
                    </q-avatar>
                    <q-item-label class="self-center" style="font-size: 10px"
                      >1500 Point</q-item-label
                    >
                  </div>
                </q-item-section>
                <q-item-section side>
                  <!-- Ranking -->
                  <div
                    class="
                      text-weight-medium
                      justify-center
                      text-center
                      q-px-sm
                    "
                    style="
                      margin-top: -1px;
                      background-color: #ff843e;
                      border-radius: 20px;
                      width: auto;
                      font-size: 12px;
                      color: white;
                    "
                  >
                    Rangking 1
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col-1"></div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      step: ref(9),
    };
  },
};
</script>

<style>
</style>