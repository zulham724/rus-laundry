<template>
  <q-layout view="hHh lpR fFf" style="background-color: #fafafa" class="mbl">
    <q-page-container class="front">
      <q-page>
        <div class="text-center">
          <img
            src="~/assets/header-login.jpg"
            alt="login-anim"
            class="width: 100%"
          />
        </div>
        <div style="q-pt-lg border-radius: 20px">
          <div class="q-mx-lg q-my-sm">
            <div class="text-bold text-h4" style="">Login</div>
            Halo Selamat Datang Kembali
          </div>

          <div class="q-pa-md text-center">
            <!-- <div class="q-gutter-md" style="max-width: 350px"> -->
            <q-form ref="form">
              <q-input
                class="q-pb-lg"
                rounded
                outlined
                v-model="credential.username"
                label="Masukkan Email"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || '']"
              />

              <q-input
                rounded
                outlined
                v-model="credential.password"
                :type="isPwd ? 'password' : 'text'"
                label="Massukkan Password"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || '']"
              >
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  size="25px"
                  class="cursor-pointer self-center"
                  @click="isPwd = !isPwd"
                />
              </q-input>
              <q-btn
                class="q-mt-lg"
                no-caps
                unelevated
                rounded
                style="width: 350px; background-color: #49c2c0; color: #ffffff"
                size="18px"
              >
                <div class="ellipsis text-weight-reguler" @click="doLogin()">
                  Login
                </div>
              </q-btn>
              <!-- {{ Auth.count }}
            <q-btn
              class="q-mt-lg"
              no-caps
              unelevated
              rounded
              style="width: 350px; background-color: #66c2ff; color: #ffffff"
              size="18px"
            >
              <div class="ellipsis text-weight-reguler" @click="increment()">
                Tambah
              </div>
            </q-btn> -->
              <div class="q-py-md text-weight-thin">Belum punya akun?</div>
              <q-btn
                to="/register"
                no-caps
                unelevated
                rounded
                style="width: 350px; background-color: #ffffff; color: #888888"
                size="18px"
              >
                <div class="ellipsis text-weight-regular">Daftar</div>
              </q-btn>
              <div class="q-py-md text-weight-thin">Atau, lanjutkan dengan</div>
              <q-btn
                icon="book"
                no-caps
                unelevated
                rounded
                style="width: 350px; background-color: #ffffff; color: #888888"
                size="18px"
              >
                <div class="ellipsis text-weight-medium">
                  Login Dengan Akun Google
                </div>
              </q-btn>
              <!-- <div class="q-py-md text-weight-thin">
              Belum punya akun?
              <router-link
                style="text-decoration: none; color: #66c2ff"
                to="/register"
                >Daftar Sekarang</router-link
              >
            </div> -->
            </q-form>
            <!-- </div> -->
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      credential: {
        username: "",
        password: "",
      },
      isPwd: true,
    };
  },

  computed: {
    ...mapState(["Auth"]),
  },

  // Untuk fungsi
  methods: {
    increment() {
      this.$store.dispatch("Auth/increment");
    },

    doLogin() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          // alert("berhasil");

          this.$store.dispatch("Auth/login", this.credential);

          this.$router.push("/home");
        } else {
          alert("gagal");
          // oh no, user has filled in
          // at least one invalid value
        }
      });
    },
  },
};
</script>

<style scoped>
.login-anim {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
