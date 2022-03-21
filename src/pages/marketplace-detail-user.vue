<template>
  <q-layout class="mbl">
    <q-header class="bg-transparent" style="z-index: 999">
      <input type="file" ref="file" style="display: none" />
      <div style="width: 100%; height: 150px; background-color: #000">
        <q-img
          src="~/assets/Rectangle396.png"
          style="width: 100%; height: 150px"
        >
          <div class="col-12 bg-transparent">
            <q-btn
              dense
              no-caps
              rounded
              flat
              size="12px"
              @click="$router.back()"
              class="q-px-sm"
              style="background-color: #9b27f1"
              ><q-icon color="white" name="fas fa-arrow-left" />
              <div class="q-pl-sm text-body1 self-center">Toko Anda</div>
            </q-btn>
          </div>
        </q-img>
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
        {{Auth.auth.shop.name}}
      </div>
    </q-header>
    <q-page-container>
      <q-page>
        <q-list class="q-mt-md">
          <q-item
            class="q-pb-md"
            clickable
            v-ripple
            @click="$router.push('/marketplace-add-product')"
          >
            <q-item-section avatar>
              <img style="margin-left: -1px" src="~/assets/badge1.svg" />
            </q-item-section>
            <q-item-section
              class="text-weight-medium text-subtitle1"
              style="color: #5f5f5f; margin-left: -15px"
              >Produk Anda</q-item-section
            >
          </q-item>
          <q-item
            class="q-pb-md"
            clickable
            v-ripple
            @click="$router.push('/followers-marketplace')"
          >
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
          <q-item
            class="q-pb-md"
            clickable
            v-ripple
            @click="$router.push('/follow-marketplace')"
          >
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
          <q-item
            class="q-pb-md"
            clickable
            v-ripple
            @click="$router.push('/marketplace-product-liked')"
          >
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
import { mapState } from "vuex";
import { Icon } from "@iconify/vue";

export default {
  data() {
    return {
      components: {
        Icon,
      },
    };
  },
  computed: {
    ...mapState(["Auth"]),
  },
  mounted() {
    console.log(this.Auth)
  },
};
</script>

<style></style>
