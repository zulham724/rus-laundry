<template>
  <q-layout class="mbl">
    <q-header class="shadow-1">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.push('/account-change-password')">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #49c2c0">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 17px"
          >Lupa Kata sandi
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
          placeholder="Masukkan email pemulihan"
          class="q-mt-md q-px-md"
          :rules="[(val) => !!val || 'mohon diisi']"
          outlined
          type="text"
        />
        <div class="text-center">
          <q-btn
            @click="dialogSend = true"
            class="q-mt-xs text-center"
            flat
            no-caps
            label="Kirim"
            style="width: 90%; background-color: #49c2c0; color: white"
          />
        </div>

        <!--Dialog Send-->
        <q-dialog v-model="dialogSend" persistent>
          <q-card class="full-width q-mx-sm">
            <div class="row q-py-sm">
              <div
                class="full-width text-center text-weight-medium q-pb-sm"
                style="color: #393939; font-size: 17px"
              >
                Email Terkirim
              </div>
              <div
                class="q-px-lg row text-center text-weight-medium"
                style="color: #747474; font-size: 12px"
              >
                Kami telah mengirimkan email ke example@gmail.com yang berisi
                tauta untuk mengatur ulang kata sandi anda.
              </div>

              <div class="row full-width justify-end q-pt-md q-gutter-x-sm">
                <!--Button Ubah-->
                <q-btn no-caps dense flat v-close-popup @click="$router.push('/profile-account-setting')">
                  <div
                    class="text-weight-bold q-px-xs"
                    style="color: #393939; font-size: 14px"
                  >
                    Oke
                  </div>
                </q-btn>
              </div>
            </div>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      dialogSend: false,
    };
  },
};
</script>

<style>
</style>