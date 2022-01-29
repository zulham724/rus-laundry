<template>
  <q-layout class="mbl">
    <q-header class="shadow-1">
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #49c2c0">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #5a5656; font-size: 16px"
          >Buat Postingan</q-toolbar-title
        >
        <q-btn no-caps flat color="grey" class="text-right">
          <div class="text-weight-medium text-subtitle2" style="color: #5a5656">
            Posting
          </div>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <div class="row">
          <div class="col-8 q-pt-lg q-pb-md q-pl-sm q-pr-lg">
            <div
              class="row q-pa-sm q-pl-md"
              style="
                width: 80%;
                border-radius: 20px 0 20px 0;
                background-color: #f7f7f7;
              "
            >
              <q-avatar class="q-mt-xs" size="30px"
                ><img src="~/assets/Avatar.png"
              /></q-avatar>
              <div class="q-pl-sm column">
                <div class="text-weight-medium" style="font-size: 12px">
                  Indonesia Loundry
                </div>
                <div
                  class="text-caption text-weight-medium"
                  style="color: #b1b1b1; font-size: 10px"
                >
                  2 Hari
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 q-pt-lg">
            <q-btn-dropdown
              flat
              no-caps
              style="
                width: 70%;
                height: 40%;
                background-color: #f5f7f9;
                border-radius: 5px;
                margin-left: 20px;
              "
            >
              <template v-slot:label>
                <div class="row no-wrap">
                  <q-icon
                    class="q-pt-xs"
                    size="15px"
                    name="fas fa-globe-asia"
                  />
                  <div class="text-center text-caption q-ml-xs">Publik</div>
                </div>
              </template>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label caption>Private</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="row">
          <div class="q-pb-xl" style="height: 200px; width: 100%">
            <q-input
              class="q-px-md"
              placeholder="Apa yang kamu pikirkan hari ini"
              borderless
              style="width: 100%"
              autogrow
            />
            <div>
              <q-btn
                dense
                outline
                no-caps
                style="font-size: 8px; border-radius: 10px"
                class="q-ml-md q-mb-md q-mt-xl text-caption"
                ># Tambah Hastag</q-btn
              >
            </div>
            <q-separator />
          </div>
        </div>
        <q-list class="text-weight-medium">
          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Share ke WhatsApp</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle v-model="value2" color="blue" />
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Jadwalkan untuk nanti</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle v-model="value1" color="green" />
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section>
              <q-item-label>Hari Ini 06:57</q-item-label>
            </q-item-section>
            <q-item-section avatar class="q-mr-md">
              <q-icon size="15px" name="fas fa-chevron-right" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
    data(){
        return{
            value1: ref(''),
            value2: ref('')

        }
    }
};
</script>

<style>
</style>