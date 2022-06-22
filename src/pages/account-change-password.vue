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
        <q-form ref="form">
          <q-input
            placeholder="Kata sandi saat ini"
            class="q-mt-md q-px-md"
            :rules="[(val) => !!val || 'mohon diisi']"
            outlined
            v-model="currentPassword"
            type="text"
          />

          <q-input
            placeholder="Kata sandi baru"
            class="q-mt-xs q-px-md"
            :rules="[(val) => !!val || 'mohon diisi']"
            outlined
            v-model="password"
            type="text"
          />
          <q-input
            placeholder="konfirmasi Kata sandi baru"
            class="q-mt-xs q-px-md"
            :rules="[
              (val) => !!val || 'mohon diisi',
              (val) => val === password || 'konfirmasi kata sandi tidak sama',
            ]"
            outlined
            v-model="confirmPassword"
            type="text"
          />
          <!-- <div class="q-ml-md">
            <q-btn
              @click="$router.push('/account-forget-password')"
              flat
              dense
              no-caps
              style="color: #10769e; "
              label="Lupa kata sandi ?"
            />
          </div> -->
          <div class="text-center q-mt-md">
            <q-btn
              @click="doChangePassword()"
              :disabled="loading"
              :loading="loading"
              flat
              dense
              no-caps
              class="q-py-sm"
              style="color: #ffffff; width: 80%; background-color: #49c2c0"
              label="Ubah"
            />
          </div>
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      currentPassword: "",
      password: "",
      confirmPassword: "",
      loading: false,
    };
  },
  methods: {
    doChangePassword() {
      this.$refs.form.validate().then((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("Auth/changePassword", {
              old_password: this.currentPassword,
              new_password: this.password,
            })
            .then((res) => {
              this.$q.notify({
                type: "success",
                message: "Kata sandi berhasil diubah",
              });
              this.$router.push("/profile-account-setting");
            })
            .catch((err) => {
              this.$q.notify({
                type: "negative",
                message: "Kata sandi gagal diubah",
              });
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

<style></style>
