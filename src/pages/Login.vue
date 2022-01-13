<template>
  <q-layout view="lHh lpR fFf" class="mbl" style="background-color: #fafafa">
    <q-page-container class="front">
      <q-page>
        <div class="text-center">
          <img src="~/assets/header-login.jpg" alt="login-anim" />
        </div>
        <div
          class="front"
          style="
            border-radius: 30px;
            background-color: #fafafa;
            margin-top: -35px;
            position: relative;
          "
        >
          <div class="q-mx-lg q-my-sm">
            <div class="text-bold text-h4" style="padding-top: 20px">Login</div>
            Halo Selamat Datang Kembali
          </div>

          <div class="q-pa-md text-center">
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
                v-for="n in 1"
                :key="n"
                :class="`shadow-${1}`"
                class="q-mt-lg"
                no-caps
                unelevated
                rounded
                style="
                  min-width: 60vw;
                  background-color: #49c2c0;
                  color: #ffffff;
                "
                size="2vh"
              >
                <div class="ellipsis text-weight-reguler" @click="doLogin()">
                  Login
                </div>
              </q-btn>
              <!-- {{ Auth.count }}
              <q-btn
                @click="increment()"
                class="q-mt-lg"
                no-caps
                unelevated
                rounded
                style="width: 350px; background-color: #66c2ff; color: #ffffff"
                size="18px"
              >
                <div class="ellipsis text-weight-reguler">Tambah</div>
              </q-btn> -->

              <div class="q-py-md text-weight-thin" style="max-width: 100vw">
                Atau, lanjutkan dengan
              </div>
              <q-btn
                v-for="n in 1"
                :key="n"
                :class="`shadow-${1}`"
                no-caps
                unelevated
                rounded
                style="
                  min-width: 60vw;
                  background-color: #ffffff;
                  color: #888888;
                "
                size="2vh"
              >
                <div class="q-mr-md">
                  <q-avatar size="4vh">
                    <img src="~/assets/google.png" alt="google" />
                  </q-avatar>
                </div>
                <div
                  class="ellipsis text-weight-medium q-pr-xs"
                  style="font-size: 2vh"
                >
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
