<template>
  <q-layout view="lHh lpR fFf" class="mbl" style="background-color: #fafafa">
    <q-page-container class="front">
      <q-page>
        <div class="text-center" style="background-image: linear-gradient(to bottom right, #67BFF0, #B6E5FB);">
          <q-img no-spinner src="~/assets/header-login.jpg" alt="login-anim" />
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
            <div class="text-bold text-h4" style="padding-top: 20px">
              Login
            </div>
            Halo Selamat Datang Kembali
          </div>

          <div class="q-pa-md text-center">
            <q-form ref="form">
              <q-input
                :disable="loading"
                class="q-pb-lg"
                rounded
                outlined
                v-model="credential.username"
                label="Masukkan Email"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || '']"
              />

              <q-input
                :disable="loading"
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
                @click="doLogin()"
                :disable="loading"
                :class="`shadow-1`"
                class="q-mt-lg"
                no-caps
                unelevated
                rounded
                style="
                  width: 90%;
                  background-color: #49c2c0;
                  color: #ffffff;
                "
                size="2vh"
              >
                <div class="ellipsis text-weight-reguler">Login</div>
              </q-btn>

              <div class="q-py-md text-weight-thin" >
                Atau, lanjutkan dengan
              </div>
              <q-btn
                :disable="loading"
                :class="`shadow-1`"
                no-caps
                unelevated
                rounded
                style="
                  width: 90%;
                  background-color: #ffffff;
                  color: #888888;
                "
                size="2vh"
              >
                <div class="q-mr-md">
                  <q-avatar size="4vh">
                    <q-img no-spinner src="~/assets/google.png" alt="google" />
                  </q-avatar>
                </div>
                <div
                  class="ellipsis text-weight-medium q-pr-xs"
                  style="font-size: 2vh"
                >
                  Login Dengan Akun Google
                </div>
              </q-btn>
            </q-form>
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
  name:'LoginPage',
  data() {
    return {
      credential: {
        username: "",
        password: "",
      },
      isPwd: true,
      loading: false,
    };
  },
  mounted() {},
  // Untuk fungsi
  methods: {
    doLogin() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          // alert("berhasil");
          this.loading = true;
          this.$store
            .dispatch("Auth/login", this.credential)
            .then((res) => {
              this.$router.push("/");
            })
            .catch((err) => {
              this.$q.notify("terjadi kesalahan")
              console.log(err);
            })
            .finally(() => {
              this.loading = false;
            });
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
