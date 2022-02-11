<template>
  <q-layout class="mbl" style="background-color: #fafafa">
    <q-page-container>
      <q-header class="text-center shadow-1">
        <q-toolbar class="bg-white">
          <q-btn flat round @click="$router.push('/marketplace-detail-user')">
            <q-avatar size="25px" icon="fas fa-arrow-left" style="color: black">
            </q-avatar>
          </q-btn>
          <q-toolbar-title
            class="text-left text-weight-medium"
            style="color: #3a3838; font-size: 17px"
            >Diikuti
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page class="q-pa-md">
        <div>
          <!-- Search bar -->
          <div class="row justify-center q-mx-lg">
            <q-input
              dense
              class="q-mx-xs full-width"
              type="search"
              outlined
              v-model="search"
              placeholder="Cari"
            >
              <template v-slot:prepend>
                <q-icon
                  name="search"
                  class="self-center"
                  size="25px"
                  color="grey"
                />
              </template>
            </q-input>
          </div>

          <div class="q-py-md">
            <!-- List -->
            <q-list>
              <q-item v-for="n in 43" :key="n" class="q-my-sm bg-white">
                <q-item-section avatar>
                  <q-avatar size="50px">
                    <q-img src="~/assets/Avatar.png" no-spinner></q-img>
                  </q-avatar>
                </q-item-section>
                <q-item-section class="self-center">
                  <q-item-label
                    class="text-weight-medium"
                    style="color: #393939; font-size: 20px"
                    >Laundrynesia</q-item-label
                  >
                  <div class="row">
                    <q-icon name="fas fa-map-marker-alt" color="red" />
                    <div
                      class="text-weight-bold q-pl-xs"
                      style="color: #c5c5c5; font-size: 12px"
                    >
                      Kota Kudus
                    </div>
                  </div>
                </q-item-section>
                <q-item-section side>
                  <!-- button follow -->
                  <div>
                    <q-btn
                      @click="buttonFollow && buttonUnfollow == true"
                      no-caps
                      dense
                      outline
                      style="color: #9b27f1; border-radius: 5px"
                    >
                      <div
                        class="text-weight-bold q-px-xs"
                        style="font-size: 12px"
                      >
                        Diikuti
                      </div>
                    </q-btn>
                  </div>

                  <!-- button Unfollow -->
                  <div v-if="(buttonUnfollow = false)">
                    <q-btn
                      no-caps
                      dense
                      outline
                      style="color: #9b27f1; border-radius: 5px"
                    >
                      <div
                        class="text-weight-bold q-px-xs"
                        style="font-size: 12px"
                      >
                        Ikuti
                      </div>
                    </q-btn>
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <!-- Jika tidak ada pengikut -->
        <div v-if="(noFollow = false)" class="row full-width justify-center">
          <!-- Image -->
          <div class="row full-width justify-center q-pt-md">
            <q-img
              no-spinner
              src="~/assets/animasi-proses-cuci.gif"
              style="width: 200px"
            ></q-img>
          </div>

          <div
            class="text-weight-bold q-pt-md"
            style="color: #161952; font-size: 17px"
          >
            Belum ada yang kamu ikuti
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      noFollow: false,
      buttonFollow: true,
      buttonUnfollow: false,
    };
  },
};
</script>

<style>
</style>