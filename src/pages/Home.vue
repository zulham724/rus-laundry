<template>
  <q-layout view="hHh lpR fFf" class="mbl" style="background-color: #fafafa">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <!-- header -->
        <div class="text-center">
          <q-img
            src="~/assets/header-home.png"
            alt="login-anim"
            class="width: 100%"
          >
            <!-- information -->
            <q-page
              ><div class="q-ma-lg text-h6" style="max-width: 350px">
                <div class="float-left">
                  <!-- Avatar Person -->
                  <div class="float-left q-mt-xs">
                    <q-avatar size="50px">
                      <img src="~/assets/Avatar.png" alt="avatar-person" />
                    </q-avatar>
                  </div>

                  <!-- Nama User -->
                  <div class="float-right q-pl-md text-h6">
                    Good Morning Hisyam
                    <br />
                    <!-- Date -->
                    <div
                      class="text-caption float-left q-pa-xs"
                      style="
                        background-color: #ffffff;
                        color: #888888;
                        border-radius: 10px;
                      "
                    >
                      24 Januari 2022
                    </div>
                  </div>
                </div>
              </div></q-page
            >

            <!-- Scan Barcode -->
            <img
              src="~/assets/barcode.png"
              alt="scan-barcode"
              style="max-height: 80px; margin-top: 40px; margin-right: 20px"
              class="fixed-top-right"
            />
            <!-- Animation of Bird -->
            <img
              src="~/assets/header-bird.gif"
              alt="header-bird"
              class="fixed-left q-mt-xl q-ml-md"
              style="height: 20%"
            />
          </q-img>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
