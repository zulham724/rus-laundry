<template>
  <q-layout class="mbl">
    <q-header class="bg-transparent">
      <q-btn
        class="q-ma-md absolute"
        no-caps
        round
        flat
        size="12px"
        @click="$router.push('/marketplace-home')"
        ><q-icon color="white" name="fas fa-arrow-left" />
        <div class="q-pl-sm text-body1">Anda</div>
      </q-btn>
      <input type="file" ref="file" style="display: none" />
      <div style="width: 100%; height: 150px; background-color: #cccccc">
        <div @click="$refs.file.click()" class="text-center q-pt-lg">
          <q-icon size="50px" name="far fa-image" />
        </div>
        <div @click="$refs.file.click()" class="text-center text-subtitle2">
          Tekan untuk rubah
        </div>
        <div class="q-mt-md row" style="z-index: 999">
          <div class="col-2"></div>
          <div
            @click="$refs.file.click()"
            class="col-5 text-right"
            style="height: 40px; background-color: rgba(75, 75, 75, 39%)"
          >
            <div class="q-pr-lg q-pt-sm text-body2 self-center">
              Ubah<q-icon class="q-pl-sm" name="fas fa-edit" />
            </div>
          </div>
          <div
            class="col-5"
            style="
              height: 40px;
              background-color: rgba(75, 75, 75, 39%);
              border-left-style: solid;
              border-width: 1px;
            "
          >
            <div class="text-body2 q-pt-sm text-center">
              Hapus<q-icon size="20px" class="q-pl-sm" name="delete_outline" />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-transparent absolute">
        <q-avatar
          class="q-ml-sm"
          style="margin-top: -50px; background-color: #bdbdbd"
          size="90px"
        >
          <q-icon name="fas fa-user" />
        </q-avatar>
        <q-avatar
          @click="$refs.file.click()"
          style="
            margin-left: -22px;
            margin-top: 5px;
            background-color: white;
            z-index: 999;
          "
          size="25px"
        >
          <q-icon name="fas fa-camera" color="grey" />
        </q-avatar>
      </div>
      <div
        class="q-py-md text-body1 text-right q-pr-md"
        style="background-color: #9b27f1"
      >
        Laundry Indonesia
      </div>
    </q-header>
    <q-page-container>
      <q-page>
        <q-list class="q-mt-md">
          <q-item class="q-pb-md" clickable v-ripple @click="$router.push('/marketplace-add-product')">
            <q-item-section avatar>
              <img style="margin-left: -1px" src="~/assets/badge1.svg" />
            </q-item-section>
            <q-item-section
              class="text-weight-medium text-subtitle1"
              style="color: #5f5f5f; margin-left: -15px"
              >Produk Anda</q-item-section
            >
          </q-item>
          <q-item class="q-pb-md" clickable v-ripple @click="$router.push('/followers-marketplace')">
            <q-item-section avatar>
              <q-icon
                style="margin-left: -2px"
                color="black"
                name="far fa-user"
              />
            </q-item-section>
            <q-item-section
              class="text-weight-medium text-subtitle1"
              style="color: #5f5f5f; margin-left: -15px"
              >Pengikut</q-item-section
            >
          </q-item>
          <q-item class="q-pb-md" clickable v-ripple @click="$router.push('/follow-marketplace')">
            <q-item-section avatar>
              <img style="margin-left: 2px" src="~/assets/personlove2.svg" />
            </q-item-section>
            <q-item-section
              class="text-weight-medium text-subtitle1"
              style="color: #5f5f5f; margin-left: -15px"
              >Diikuti</q-item-section
            >
          </q-item>
          <q-item class="q-pb-md" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="black" name="fas fa-history" />
            </q-item-section>
            <q-item-section
              class="text-weight-medium text-subtitle1"
              style="color: #5f5f5f; margin-left: -15px"
              >Baru-baru dilihat</q-item-section
            >
          </q-item>
          <q-item class="q-pb-md" clickable v-ripple @click="$router.push('/marketplace-product-liked')">
            <q-item-section avatar>
              <q-icon color="black" name="fas fa-heart" />
            </q-item-section>
            <q-item-section
              class="text-weight-medium text-subtitle1"
              style="color: #5f5f5f; margin-left: -15px"
              >Disukai</q-item-section
            >
          </q-item>
          <q-item
            class="q-pb-md"
            clickable
            v-ripple
            @click="$router.push('/change-no-whatsapp')"
          >
            <q-item-section avatar>
              <img style="margin-left: 4px" src="~/assets/padnumber1.svg" />
            </q-item-section>
            <q-item-section
              class="text-weight-medium text-subtitle1"
              style="color: #5f5f5f; margin-left: -15px"
              >No Whatsapp</q-item-section
            >
          </q-item>
          <q-item class="q-pb-md" clickable v-ripple>
            <q-item-section avatar>
              <q-icon
                style="margin-left: 2px"
                color="black"
                size="20px"
                name="fas fa-city"
              />
            </q-item-section>
            <q-item-section
              class="text-weight-medium text-subtitle1"
              style="color: #5f5f5f; margin-left: -15px"
              >Tentang Bisnis</q-item-section
            >
          </q-item>
          <q-item class="q-pb-md" clickable v-ripple>
            <q-item-section avatar>
              <img style="margin-left: 4px" src="~/assets/pinmap1.svg" />
            </q-item-section>
            <q-item-section
              class="text-weight-medium text-subtitle1"
              style="color: #5f5f5f; margin-left: -15px"
              >Lokasi Bisnis</q-item-section
            >
          </q-item>
        </q-list>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  data() {
    return {
      components: {
        Icon,
      },
    };
  },
};
</script>

<style>
</style>