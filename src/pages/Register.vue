<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="q-pa-sm text-center">
          <img
            src="~/assets/login-anim.gif"
            alt="login-anim"
            style="max-width: 250px"
          />
        </div>
        <div class="q-mx-lg q-my-sm">
          <div class="text-bold text-h4" style="">Daftar</div>
          Halo selamat datang silahkan daftar disini
        </div>
        <div class="q-pa-md text-center">
          <!-- <div class="q-gutter-md" style="max-width: 350px"> -->
          <q-form ref="form">
            <q-input class="q-pb-lg" rounded outlined label="Masukkan Nama" />
            <q-input
              class="q-pb-lg"
              rounded
              outlined
              label="Massukkan No Telepon"
            />
            <q-input class="q-pb-lg" rounded outlined label="Massukkan Email" />
            <q-input
              class="q-pb-lg"
              rounded
              outlined
              label="Massukkan Password"
            />
            <q-btn
              class="q-mt-lg"
              no-caps
              unelevated
              rounded
              style="width: 350px; background-color: #49c2c0; color: #ffffff"
              size="18px"
            >
              <div class="ellipsis text-weight-reguler">Daftar</div>
            </q-btn>
            <!-- <div class="q-py-md text-weight-thin">Belum punya akun?</div> -->
            <!-- <q-btn
                no-caps
                unelevated
                rounded
                style="width: 350px; background-color: #66c2ff; color: #ffffff"
                size="18px"
              >
                <div class="ellipsis text-weight-reguler">Daftar</div>
              </q-btn> -->
          </q-form>
          <!-- </div> -->
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
