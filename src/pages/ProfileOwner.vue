<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <q-page class="mbl-child">
        <!-- HEADER BIRU -->
        <div
          class="bgHead text-center q-pb-lg"
          style="border-radius: 0px 0px 60px 60px"
        >
          <div class="row q-py-sm q-px-sm">
            <div class="col"></div>
            <div class="col">
              <q-avatar size="90px" class="text-center self-center shadow-2">
                <q-img class="text-center self-center" :src="avatar64" />
              </q-avatar>
            </div>
            <div class="col text-white text-right">
              <q-btn
                rounded
                text-color="white"
                label="Selesai"
                flat
                @click="checkUpdateProfile()"
                :loading="loading"
                :disable="loading"
              />
            </div>
          </div>
          <div class="q-py-sm">
            <q-btn
              @click="openMedia()"
              no-caps
              rounded
              text-color="white"
              label="Pilih Foto"
              style="background-color: #4472a0; font-size: 10px"
            />
          </div>
          <div>
            <div class="text-white text-h6">{{ this.auth.name }}</div>
            <div class="text-white">{{ this.auth.email }}</div>
          </div>
        </div>

        <!-- Q INPUT DATA ACCOUNT -->

        <div class="q-px-md q-pt-md">
          <div>
            <div
              class="text-weight-bold text-caption q-mb-xs"
              style="color: #646464"
            >
              Nama
            </div>
            <q-input
              maxlength="15"
              v-model="profile.name"
              class="q-mb-sm"
              dense
              style="background-color: #f6f7f8"
              outlined
              placeholder="Isi nama lengkap"
            >
              <template v-slot:append>
                <div style="font-size: small">
                  {{ this.profile.name.length }}/15
                </div>
              </template>
            </q-input>
          </div>

          <div class="q-pt-sm">
            <div
              class="text-weight-bold text-caption q-mb-xs"
              style="color: #646464"
            >
              Email
            </div>
            <q-input
              v-model="profile.email"
              class="q-mb-sm"
              dense
              style="background-color: #f6f7f8"
              outlined
              placeholder="Isi email"
            />
          </div>

          <div class="q-pt-sm">
            <div
              class="text-weight-bold text-caption q-mb-xs"
              style="color: #646464"
            >
              Deskripsi
            </div>
            <q-input
              v-model="profile.description"
              class="q-mb-sm"
              dense
              style="background-color: #f6f7f8"
              outlined
              placeholder="Isi deskripsi"
            />
          </div>

          <div class="q-pt-sm">
            <div
              class="text-weight-bold text-caption q-mb-xs"
              style="color: #646464"
            >
              Kode affiliate
            </div>
            <div class="column">
              <q-btn
                @click="copyToClipboard()"
                no-caps
                flat
                class="q-mb-sm full-width"
                style="background-color: #f6f7f8; border: 1px solid #646464"
                outlined
              >
                <div
                  class="text-weight-medium text-bold text-left"
                  style="color: #646464"
                >
                  {{ profile.affiliate_code }}
                </div>
              </q-btn>
            </div>
          </div>
          <div class="q-mt-sm">
            <div
              class="text-weight-bold text-caption q-mb-xs"
              style="color: #646464"
            >
              Password
            </div>
            <q-btn
              @click="dialogPassword = true"
              no-caps
              flat
              class="q-mb-sm full-width"
              style="background-color: #f6f7f8; border: 1px solid #646464"
              outlined
            >
              <div
                class="text-weight-medium text-bold text-left"
                style="color: #646464"
              >
                Ganti Password
              </div>
            </q-btn>
          </div>
        </div>
        <div class="text-center q-ma-md row">
          <q-btn
            @click="doLogout()"
            no-caps
            rounded
            flat
            style="background-color: white"
            class="shadow-1 full-width"
          >
            <div class="text-blue text-h6 text-center">Logout</div>
          </q-btn>
        </div>

        <!-- Dialog Change Password -->
        <q-dialog v-model="dialogPassword" full-width persistent>
          <q-card class="column full-width q-pa-sm">
            <div class="row justify-end">
              <q-btn
                v-close-popup
                icon="close"
                size="small"
                round
                dense
                flat
                class="shadow-1"
                color="white"
                style="background-color: rgba(0, 0, 0, 0.5)"
              ></q-btn>
            </div>
            <div class="column">
              <q-form ref="form" class="column">
                <div class="q-pt-sm">
                  <div
                    class="text-weight-bold text-caption q-mb-xs"
                    style="color: #646464"
                  >
                    Password lama
                  </div>
                  <q-input
                    v-model="password.old"
                    :type="isPwd1 ? 'password' : 'text'"
                    class="q-mb-sm"
                    dense
                    style="background-color: transparent"
                    outlined
                    label="Masukkan password lama"
                    :rules="[(val) => !!val || 'mohon diisi']"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd1 ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd1 = !isPwd1"
                      />
                    </template>
                  </q-input>
                </div>
                <div>
                  <div
                    class="text-weight-bold text-caption q-mb-xs"
                    style="color: #646464"
                  >
                    Password baru
                  </div>
                  <q-input
                    v-model="password.new"
                    :type="isPwd2 ? 'password' : 'text'"
                    class="q-mb-sm"
                    dense
                    style="background-color: transparent"
                    outlined
                    label="Masukkan password baru"
                    :rules="[(val) => !!val || 'mohon diisi']"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd2 ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd2 = !isPwd2"
                      />
                    </template>
                  </q-input>
                </div>
                <div>
                  <div
                    class="text-weight-bold text-caption q-mb-xs"
                    style="color: #646464"
                  >
                    Konfirmasi password baru
                  </div>
                  <q-input
                    v-model="password.confirm"
                    :type="isPwd3 ? 'password' : 'text'"
                    class="q-mb-sm"
                    dense
                    style="background-color: transparent"
                    outlined
                    label="Konfirmasi password baru"
                    :rules="[
                      (val) => !!val || 'mohon diisi',
                      (val) =>
                        val === password.new ||
                        'konfirmasi kata sandi tidak sama',
                    ]"
                  >
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd3 ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd3 = !isPwd3"
                      />
                    </template>
                  </q-input>
                </div>
              </q-form>
              <div class="q-mt-md text-center justify-center">
                <q-btn
                  @click="doChangePassword()"
                  :disabled="loadingPassword"
                  :loading="loadingPassword"
                  flat
                  dense
                  no-caps
                  class="q-py-sm"
                  style="
                    color: #ffffff;
                    width: 100%;
                    background-color: #49c2c0;
                    border-radius: 5px;
                  "
                  label="Ubah"
                />
              </div>
            </div>
          </q-card>
        </q-dialog>

        <!-- File Avatar -->
        <q-file
          ref="addAvatar"
          @update:model-value="previewAvatar"
          v-show="false"
          accept="image/*"
        ></q-file>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { toBase64, jsonToFormData, base64ToFile } from "./../helpers";
import CropPhotoComponent from "src/components/CropPhotoComponent.vue";
import { ref } from "vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      //
      STORAGE_URL: STORAGE_URL,
      profile: {
        name: "",
        email: "",
        description: "",
        affiliate_code: "",
      },

      // Password
      password: {
        old: "",
        new: "",
        confirm: "",
      },
      isPwd1: ref(true),
      isPwd2: ref(true),
      isPwd3: ref(true),

      // Loading
      loading: false,
      loadingPassword: false,

      //Dialog
      dialogPassword: false,

      // Avatar
      avatar64: null,
      avatar: null,

      dataAuth: null,
    };
  },
  mounted() {
    console.log("auht", this.Auth.auth);
    this.dataAuth = this.Auth.auth;
    //
    this.init();
    // console.log("cek auth", this.auth);
  },
  computed: {
    auth() {
      return this.$store.getters["Auth/auth"];
    },
    ...mapState(["Auth"]),
  },
  methods: {
    //
    init() {
      this.profile.name = this.auth.name;
      this.profile.email = this.auth.email;
      this.profile.description = this.auth.shop.description;
      this.profile.affiliate_code = this.auth.affiliate_code;

      // console.log("description", this.auth.shop.description);

      if (this.auth.avatar) {
        this.avatar64 = this.STORAGE_URL + "/" + this.auth.avatar;
      }
    },
    checkUpdateProfile() {
      if (
        this.profile.name !== this.dataAuth.name ||
        this.profile.email !== this.dataAuth.email ||
        this.profile.description !== this.dataAuth.shop.description
      ) {
        this.dataAuth.name = this.profile.name;
        this.dataAuth.email = this.profile.email;
        this.dataAuth.shop.description = this.profile.description;
        this.updateAccount();
      } else {
        this.$router.push(`/home-owner`);
      }
    },
    doChangePassword() {
      this.$refs.form.validate().then((valid) => {
        if (valid) {
          this.loadingPassword = true;
          this.$store
            .dispatch("Auth/changePasswordMaster", {
              old_password: this.password.old,
              new_password: this.password.new,
            })
            .then((res) => {
              this.$q.notify({
                type: "success",
                message: "Kata sandi berhasil diubah",
              });
              this.dialogPassword = false;
            })
            .catch((err) => {
              this.$q.notify({
                type: "negative",
                message: "Kata sandi gagal diubah",
              });
            })
            .finally(() => {
              this.loadingPassword = false;
              this.password.old = "";
              this.password.new = "";
              this.password.confirm = "";
            });
        }
      });
    },
    updateAccount() {
      console.log("update account gan", this.dataAuth);
      const payload = {
        id: this.auth.id,
        ...this.dataAuth,
      };
      this.loading = true;
      this.$store
        .dispatch("Auth/updateAccountMaster", payload)
        .then((res) => {
          // this.$store.commit("Auth/update_account_master", res.data);
          console.log("res updateAccount", res.data);
        })
        .catch((err) => {})
        .finally(() => {
          this.$q.notify("Profil Berhasil di ubah");
          this.loading = false;
          this.$router.push(`/home-owner`);
        });
    },
    openMedia() {
      this.$refs.addAvatar.pickFiles();
    },
    updateAvatar(file) {
      let avatar = file;
      // console.log("ini avatar", avatar);
      let formData = new FormData();
      formData.append("avatar", avatar);
      // console.log("ini form data", formData);
      const payload = {
        id: this.auth.id,
        formData: formData,
      };
      // console.log('data employee update', this.employee)
      this.$store
        .dispatch(`Auth/updateAvatarMaster`, payload)
        .then((res) => {})
        .catch((err) => {})
        .finally(() => {
          this.$q.notify("Foto Berhasil di tambahkan");
        });
    },
    async previewAvatar(file) {
      let promise = toBase64(file);
      promise.then((res) => {
        this.$q
          .dialog({
            component: CropPhotoComponent,
            componentProps: {
              ImgBS64: res.src,
              aspectRatio: 1 / 1,
            },
          })
          .onOk((data) => {
            // console.log("cek data", data);
            this.avatar64 = data.dataUrl;
            let file = base64ToFile(data.dataUrl, "avatar");
            this.avatar = file;
            // console.log("avatar file", this.avatar);
            this.updateAvatar(file);
          });
      });
    },
    copyToClipboard() {
      let text = this.auth.affiliate_code;
      navigator.clipboard.writeText(text);
      this.$q.notify("Kode Affiliate Anda telah disalin");
    },
    doLogout() {
      let reset_auth_data = this.$store.dispatch("Auth/logout");

      Promise.all([reset_auth_data]).then((res) => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style>
.bgHead {
  background-image: linear-gradient(to bottom right, #00c6ff, #0072ff);
}
</style>
