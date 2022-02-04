<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer
      class="q-pa-xs"
      style="border-radius: 20px 20px 0px 0px; background-color: white"
    >
      <div class="q-gutter-none" style="max-width: 100%; height:5vh">
        <q-tabs v-model="tab" dense class="text-black" indicator-color="teal-6">
          <q-tab name="postingan" no-caps @click="$router.push('/community')"
            ><q-img
              no-spinner
              style="width: 18px; height: 18px"
              :src="
                tab == 'postingan'
                  ? require('../assets/post-color.svg')
                  : require('../assets/icon-post.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">
              Postingan
            </div>
          </q-tab>

          <q-tab name="pesanan" no-caps @click="$router.push('/course-of-home')"
            ><q-img
              no-spinner
              style="width: 18px; height: 18px"
              :src="
                tab == 'pesanan'
                  ? require('../assets/kursus-color.svg')
                  : require('../assets/icon-kursus.svg')
              "
            ></q-img>
            <div class="text-weight-light q-t-xs" style="font-size: 8px">
              Kursus
            </div>
          </q-tab>

          <q-tab name="kategori" no-caps
            ><q-img
              no-spinner
              style="width: 18px; height: 18px"
              :src="
                tab == 'kategori'
                  ? require('../assets/market-color.svg')
                  : require('../assets/icon-market.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">
              Marketplace
            </div>
          </q-tab>

          <q-tab name="menu" no-caps @click="$router.push('/')"
            ><q-img
              no-spinner
              style="width: 18px; height: 18px"
              :src="
                tab == 'karyawan'
                  ? require('../assets/shop-color.svg')
                  : require('../assets/icon-shop.svg')
              "
            ></q-img>
            <div class="text-weight-light q-mt-xs" style="font-size: 8px">
             Kembai ke toko
            </div>
          </q-tab>
        </q-tabs>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "SubLayout",
  tab: "postingan",
};
</script>

<style></style>
