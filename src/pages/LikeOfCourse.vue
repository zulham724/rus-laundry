<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #ffffff">
    <q-page-container>
      <q-header class="fixed-top">
        <q-toolbar class="shadow-1" style="background-color: #1c309b">
          <q-btn
            @click="$router.push('/profile-of-course')"
            no-caps
            class="q-pa-md"
            flat
            style="color: white"
          >
            <q-icon size="25px" name="fas fa-arrow-left" style="color: #ffffff">
            </q-icon>
          </q-btn>

          <q-toolbar-title
            class="text-left text-weight-medium text-subtitle2"
            style="color: white; font-size: 16px"
            >Materi yang kamu suka</q-toolbar-title
          >
        </q-toolbar>
      </q-header>

      <q-page>
        <!-- Container Search bar -->
        <div class="q-px-xl q-py-md">
          <!-- Search bar -->
          <div class="row full-width bg-red">
            <q-input
              dense
              class="q-mx-xs full-width bg-white"
              type="search"
              outlined
              v-model="search"
              placeholder="Telusuri Histori"
            >
              <template v-slot:prepend>
                <q-icon
                  name="search"
                  class="self-center"
                  size="20px"
                  color="grey"
                />
              </template>
            </q-input>
          </div>
        </div>

        <!-- List of History -->

        <!-- Container -->
        <div v-for="n in 9" :key="n"
          class="full-width row bg-white"
          @click="$router.push('/list-of-course')"
        >
          <!-- Thumbnail video -->
          <div class="col-5 text-center self-center q-py-xs">
            <q-avatar
              square
              style="width: 140px; height: 80px; border-radius: 5px"
              color="grey"
            >
              <q-img no-spinner src="~/assets/contoh-thumbnail.svg"> </q-img>
            </q-avatar>
          </div>
          <div class="col-7 q-pt-sm">
            <!-- Judul -->
            <div
              class="text-weight-bold"
              style="color: #5f5959; font-size: 14px"
            >
              Latihan dasar laundry untuk pemula
            </div>
            <!-- Deskripsi -->
            <div
              class="text-weight-regular"
              style="color: #5a5656; font-size: 9px"
            >
              Berisi materi cara menjadi tukang laundry profesional secara step
              by step
            </div>
            <!-- durasi video -->
            <div class="row justify-end q-pt-sm">
              <div
                class="text-weight-medium q-px-md q-py-xs"
                style="
                  color: white;
                  background-color: #0c1e7f;
                  border-radius: 5px 0 0 0;
                  font-size: 11px;
                "
              >
                1 jam 45 menit
              </div>
            </div>
          </div>
        </div>
        <q-separator></q-separator>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style>
</style>