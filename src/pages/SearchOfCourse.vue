<template>
  <q-layout>
    <q-header class="fixed-top">
      <q-toolbar class="bg-white shadow-1 ">
        <q-btn
          @click="$router.push('/course-of-home')"
          no-caps
          class="q-pa-md q-mr-sm"
          flat
          style="color: white"
        >
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #5f5959">
          </q-icon>
        </q-btn>

        <!-- Search bar -->
        <div class="row full-width" style="z-index: 999">
          <q-input
            dense
            class="q-mx-xs full-width bg-white"
            type="search"
            outlined
            v-model="search"
          >
            <template v-slot:prepend>
              <q-icon
                name="search"
                class="self-center"
                size="20px"
                color="grey"
              />
            </template>

            <template v-slot:append>
              <q-icon name="close" @click="clear = ''" class="cursor-pointer" />
            </template>
          </q-input>
        </div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page>
        <div v-for="n in 10" :key="n">
          <!-- Container -->
          <div
            class="full-width row"
            style="position: relative"
            @click="$router.push('/list-of-course')"
          >
            <!-- Thumbnail video -->
            <div class="col-5 text-center self-center">
              <q-avatar
                square
                style="width: 140px; height: 80px; border-radius: 5px"
                color="grey"
              >
                <q-img no-spinner src="~/assets/contoh-thumbnail.svg">
                  <q-icon
                    class="absolute-center"
                    name="fas fa-lock"
                    size="40px"
                    color="white"
                  ></q-icon>
                </q-img>
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
                Berisi materi cara menjadi tukang laundry profesional secara
                step by step
              </div>
              <!-- durasi video -->
              <div v-if="lockDuration == false" class="row justify-end q-pt-sm">
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

              <!-- jika video terkunci -->
              <div v-else class="row justify-end q-pt-sm">
                <div
                  class="text-weight-medium q-px-md q-py-xs"
                  style="
                    color: white;
                    background-color: #0c1e7f;
                    border-radius: 5px 0 0 0;
                    font-size: 11px;
                  "
                >
                  Terbuka level 40
                </div>
              </div>
            </div>
          </div>
          <q-separator></q-separator>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      lockDuration: false,
    }
  }
};
</script>

<style></style>
