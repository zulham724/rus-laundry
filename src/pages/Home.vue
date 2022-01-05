<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <!-- header -->
        <div class="col-6 text-center">
          <img src="~/assets/header-home.png" alt="header-home" />
          <!-- <q-img
            src="~/assets/login-anim.gif"
            alt="login-anim"
            style="max-height: 250px"
          > -->
          <!-- information -->
          <div class="q-ma-sm text-h6" style="max-width: 350px">
            <div class="float-left">
              <!-- Avatar Person -->
              <q-avatar size="60px">
                <img src="~/assets/Avatar.png" alt="avatar-person" />
              </q-avatar>
              <!-- Nama User -->
              <div class="float-right q-pl-md text-h6">
                Good Morning Hisyam
                <br />
                <!-- Date -->
                <div
                  class="text-caption float-left q-px-xs rounded-borders"
                  style="background-color: #ffffff color: #888888"
                >
                  4 Januari 2022
                </div>
              </div>
            </div>
          </div>
          <!-- Scan Barcode -->
          <img
            src="~/assets/scan-barcode.gif"
            alt="scan-barcode"
            style="max-height: 40px"
            class="q-mt-md q-mr-sm fixed-top-right"
          />
          <!-- </q-img> -->
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
