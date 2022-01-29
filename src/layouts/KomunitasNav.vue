<template>
  <!-- Bottom Navigation -->
  <q-footer
    class="elevated q-pt-sm"
    style="border-radius: 20px 20px 0px 0px; background-color: white"
  >
    <div class="q-gutter-none" style="max-width: 100%">
      <q-tabs v-model="tab" dense class="text-black" indicator-color="teal-6">
        <q-tab name="postingan" no-caps @click="$router.push('/komunitas')"
          ><q-img
            no-spinner
            style="width: 18px; height: 20px"
            :src="
              tab == 'postingan'
                ? require('../assets/post-color.svg')
                : require('../assets/post-color.svg')
            "
          ></q-img>
          <div class="text-weight-light q-mt-xs" style="font-size: 8px">
            Postingan
          </div>
        </q-tab>

        <q-tab name="kursus" no-caps @click="$router.push('/komunitas')"
          ><q-img
            no-spinner
            style="width: 18px; height: 20px"
            :src="
              tab == 'kursus'
                ? require('../assets/icon-kursus.svg')
                : require('../assets/icon-kursus.svg')
            "
          ></q-img>
          <div class="text-weight-light q-mt-xs" style="font-size: 8px">
            Kursus
          </div>
        </q-tab>

        <q-tab name="marketplace" no-caps @click="$router.push('/komunitas')"
          ><q-img
            no-spinner
            style="width: 18px; height: 20px"
            :src="
              tab == 'marketplace'
                ? require('../assets/icon-marketplace.svg')
                : require('../assets/icon-marketplace.svg')
            "
          ></q-img>
          <div class="text-weight-light q-mt-xs" style="font-size: 8px">
            Marketplace
          </div>
        </q-tab>

        <q-tab name="toko" no-caps @click="$router.push('/komunitas')"
          ><q-img
            no-spinner
            style="width: 22px; height: 18px"
            :src="
              tab == 'toko'
                ? require('../assets/icon-toko.svg')
                : require('../assets/icon-toko.svg')
            "
          ></q-img>
          <div class="text-weight-light q-mt-xs" style="font-size: 8px">
            Kembali ke toko
          </div>
        </q-tab>
      </q-tabs>
    </div>
  </q-footer>
</template>

<script>
export default {
  name: "KomunitasNav",
  data() {
    return {
      tab: "postingan",
      include: ["PostPage"],
    };
  },
};
</script>

<style>
</style>