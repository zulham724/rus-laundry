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
            <div class="text-bold text-h4">Register</div>
            Halo Selamat Datang. .
          </div>

          <div class="q-pa-md text-center">
            <q-form ref="form">
              <q-input
                class="q-pb-lg"
                :disable="loading"
                rounded
                outlined
                v-model="credential.name"
                label="Masukkan Nama Lengkap"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || '']"
              />
              <q-input
                class="q-pb-lg"
                :disable="loading"
                rounded
                outlined
                v-model="credential.email"
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
              <q-input
                class="q-pb-lg"
                :disable="loading"
                rounded
                outlined
                type="number"
                v-model="credential.contact_number"
                label="Masukkan No Hp"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || '']"
              />
              <div class="row" style="color: #888888">Jenis Kelamin</div>
              <div class="row q-gutter-x-sm q-mb-sm" style="color: #888888">
                <q-radio
                  :disable="loading"
                  v-model="credential.gender"
                  val="L"
                  label="Laki-laki"
                />
                <q-radio
                  :disable="loading"
                  v-model="credential.gender"
                  val="P"
                  label="Perempuan"
                />
              </div>
              <q-input
                class="q-pb-lg"
                :disable="loading"
                rounded
                outlined
                v-model="credential.home_address"
                label="Masukkan Alamat"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || '']"
              />
              <q-input
                class="q-pb-lg"
                :disable="loading"
                rounded
                outlined
                v-model="credential.affiliate_code"
                label="Masukkan Kode Afiliasi"
                @update:model-value="
                  checkAffiliateCode(credential.affiliate_code)
                "
              />
              <div
                class="text-justify"
                style="font-size: smaller; margin-top: -10px"
                v-if="this.credential.affiliate_code.length"
              >
                <div
                  v-if="this.checkAffiliate.name"
                  class="row"
                  style="color: #35c07e"
                >
                  Kode afiliasi berhasil ditemukan atas nama
                  {{ this.checkAffiliate.name }}
                </div>
                <div v-else class="row" style="color: #f32e2e">
                  Kode afiliasi tidak ditemukan!
                </div>
              </div>
              <div v-else></div>

              <q-btn
                @click="doRegister()"
                :disable="loading"
                :class="`shadow-1`"
                class="q-mt-lg q-py-sm"
                no-caps
                unelevated
                rounded
                style="width: 100%; background-color: #49c2c0; color: #ffffff"
                size="2vh"
              >
                <div class="ellipsis text-h6 text-weight-reguler">Register</div>
              </q-btn>
            </q-form>
          </div>
          <div class="full-width q-py-md">
            <div
              class="row text-center justify-center"
              style="font-size: small"
            >
              <div class="q-mr-xs" style="color: #313131">
                Sudah punya akun?
              </div>
              <div style="color: #49c2c0" @click="$router.push('/login')">
                Login sekarang
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
  data() {
    return {
      // login credential or form data
      credential: {
        name: "",
        email: "",
        password: "",
        contact_number: "",
        gender: "",
        home_address: "",
        affiliate_code: "",
      },
      // to make the password visible or not
      isPwd: true,
      // to make the input form disable while loading
      loading: false,
      checkAffiliate: {},
    };
  },

  mounted() {},

  methods: {
    checkAffiliateCode(affiliate_code) {
      this.checkAffiliate = {};
      this.$store
        .dispatch("Auth/checkAffiliateCode", affiliate_code)
        .then((res) => {
          this.checkAffiliate = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          this.checkAffiliate = {};
        });
    },
    // function for login process
    doRegister() {
      this.$refs.form.validate().then((success) => {
        if (success && this.credential.gender != "") {
          this.loading = true;
          this.$store
            .dispatch("Auth/register", this.credential)
            .then((res) => {
              this.$q.notify({
                position: "top",
                message: "Akun sudah terdaftar, silahkan login",
              });
              this.$router.push("/login");
              window.history.pushState(null, null, window.location.href);
            })
            .catch((err) => {
              // console.log("terjadi kesalahan doRegister ->", err)
              this.$q.notify({
                position: "top",
                message: "Email sudah terdaftar!",
              });
            })
            .finally(() => {
              this.loading = false;
            });
        } else {
          this.$q.notify("Masukkan data dengan benar");
        }
      });
    },
  },
};
</script>

<style></style>
