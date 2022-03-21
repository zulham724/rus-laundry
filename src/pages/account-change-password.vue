<template>
  <q-layout class="mbl">
    <q-header class="shadow-1">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.push('/profile-account-setting')">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #49c2c0">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 17px"
          >Ganti Kata sandi
        </q-toolbar-title>
        <q-item-section
          side
          class="text-left text-weight-medium"
          style="color: #5a5656; font-size: 15px"
        >
        </q-item-section>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <q-input
          placeholder="Kata sandi saat ini"
          class="q-mt-md q-px-md"
          :rules="[(val) => !!val || 'mohon diisi']"
          outlined
          type="text"
        />

        <q-input
          placeholder="Kata sandi baru"
          class="q-mt-xs q-px-md"
          :rules="[(val) => !!val || 'mohon diisi']"
          outlined
          type="text"
        />
        <q-input
          placeholder="konfirmasi Kata sandi baru"
          class="q-mt-xs q-px-md"
          :rules="[(val) => !!val || 'mohon diisi']"
          outlined
          type="text"
        />
        <div class="q-ml-md">
          <q-btn
            @click="$router.push('/account-forget-password')"
            flat
            dense
            no-caps
            style="color: #10769e"
            label="Lupa kata sandi ?"
          />
        </div>
        <div class=" text-center q-mt-md">
          <q-btn
            @click="$router.back()"
            flat
            dense
            no-caps
            class="q-py-sm"
            style="color: #ffffff; width: 80%; background-color:#49C2C0"
            label="Ubah"
          />
        </div>

        
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
    }
  },
};
</script>

<style>
</style>