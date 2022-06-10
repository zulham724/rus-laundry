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
              @click="$router.push('/marketplace-home')"
              class="q-px-sm"
              style="background-color: #9b27f1"
              ><q-icon color="white" name="fas fa-arrow-left" size="20px" />
              <div class="q-pl-sm text-body1 self-center">Toko Anda</div>
            </q-btn>
          </div>
        </q-img>
      </div>
      <div class="bg-transparent absolute">
        <q-avatar
          v-if="dataAuth"
          class="q-ml-sm"
          style="margin-top: -50px; background-color: #fff"
          size="90px"
        >
          <q-img
            v-if="dataAuth.avatar"
            :src="`${STORAGE_URL}/${dataAuth.avatar}`"
          />
          <q-img v-if="!dataAuth.avatar" src="~/assets/ld.png" />
        </q-avatar>
      </div>
      <div
        class="q-py-md text-body1 text-right q-pr-md"
        style="background-color: #9b27f1"
      >
        {{ Auth.auth.shop.name }}
      </div>
    </q-header>
    <q-page-container>
      <q-page>
        <q-list class="q-mt-md">
          <!-- <q-item
            class="q-pb-md"
            clickable
            v-ripple
            @click="$router.push('/marketplace-add-product')"
          >
            <q-item-section avatar class="justify-center text-center">
              <img src="~/assets/badge1.svg" />
            </q-item-section>
            <q-item-section
              class="text-weight-medium text-subtitle1"
              style="color: #5f5f5f"
              >Produk Anda</q-item-section
            >
          </q-item> -->
          <!--
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
          -->
          <!--
          <q-item
            class="q-pb-md"
            clickable
            v-ripple
            @click="$router.push('/follow-marketplace')"
          >
            <q-item-section avatar>
              <img  src="~/assets/personlove2.svg" />
            </q-item-section>
            <q-item-section
              class="text-weight-medium text-subtitle1"
              style="color: #5f5f5f; margin-left: -15px"
              >Diikuti</q-item-section
            >
          </q-item>
          -->

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
              style="color: #5f5f5f"
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
              style="color: #5f5f5f"
              >No Whatsapp</q-item-section
            >
          </q-item>

          <!-- <q-item class="q-pb-md" clickable v-ripple @click="$router.push('/shop-location')">
            <q-item-section avatar>
              <img style="margin-left: 4px" src="~/assets/pinmap1.svg" />
            </q-item-section>
            <q-item-section
              class="text-weight-medium text-subtitle1"
              style="color: #5f5f5f; margin-left: -15px"
              >Lokasi Bisnis</q-item-section
            >
          </q-item> -->
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
      STORAGE_URL: STORAGE_URL,
      dataAuth: null,
    };
  },
  computed: {
    ...mapState(["Auth"]),
  },
  mounted() {
    this.dataAuth = this.Auth.auth;
    console.log("ini auth", this.dataAuth);
  },
  methods: {},
};
</script>

<style></style>
