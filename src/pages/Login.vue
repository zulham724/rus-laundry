<template>
  <q-layout view="lHh lpR fFf" class="mbl" style="background-color: #fafafa">
    <q-page-container class="front">
      <q-page>
        <!-- top background image -->
        <div
          class="text-center"
          style="
            background-image: linear-gradient(
              to bottom right,
              #67bff0,
              #b6e5fb
            );
          "
        >
          <q-img no-spinner src="~/assets/header-login.jpg" alt="login-anim" />
        </div>

        <!-- white cardview -->
        <div
          class="front"
          style="
            border-radius: 30px;
            background-color: #fafafa;
            margin-top: -35px;
            position: relative;
          "
        >
          <div class="text-right q-px-lg">
            <q-avatar
              class="front"
              style="background-color: #fafafa; margin-top: -25px"
              size="65px"
            >
              <img src="~/assets/ldlg.svg" />
            </q-avatar>
          </div>

          <div class="q-mx-lg q-mb-sm">
            <div class="text-bold text-h4">Login</div>
            Halo Selamat Datang Kembali
          </div>

          <div class="q-pa-md text-center">
            <q-form ref="form">
              <q-input
                class="q-pb-lg"
                :disable="loading"
                rounded
                outlined
                v-model="credential.username"
                label="Masukkan Email"
                type="email"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || '']"
              />

              <q-input
                class="q-pb-lg"
                :disable="loading"
                rounded
                outlined
                v-model="credential.password"
                :type="isPwd ? 'password' : 'text'"
                label="Masukkan Password"
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
                class="q-mt-lg q-py-sm"
                no-caps
                unelevated
                rounded
                style="width: 100%; background-color: #49c2c0; color: #ffffff"
                size="2vh"
              >
                <div class="ellipsis text-h6 text-weight-reguler">Login</div>
              </q-btn>
            </q-form>
          </div>
          <div class="full-width q-py-md">
            <div
              class="row text-center justify-center"
              style="font-size: small"
            >
              <div class="q-mr-xs" style="color: #313131">
                Belum punya akun?
              </div>
              <div style="color: #49c2c0" @click="$router.push('/register')">
                Daftar sekarang
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LoginPage",

  data() {
    return {
      // login credential or form data
      credential: {
        username: "",
        password: "",
      },
      // to make the password visible or not
      isPwd: true,
      // to make the input form disable while loading
      loading: false,
    };
  },

  mounted() {},

  methods: {
    // function for login process
    doLogin() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          this.loading = true;
          this.$store
            .dispatch("Auth/login", this.credential)
            .then((res) => {
              let auth = this.$store.getters["Auth/auth"];
              if (auth.role_id == 4) {
                this.$router.push("/");
                window.history.pushState(null, null, window.location.href);
              } else if (auth.role_id == 3) {
                this.$router.push("/home-owner");
                window.history.pushState(null, null, window.location.href);
              }
            })
            .catch((err) => {
              this.$q.notify("Masukkan data dengan benar!");
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
/* used for top background image*/
.login-anim {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
