<template>
  <q-layout class="mbl">
    <q-page-container>
      <q-page class="">
        <!-- button back & judul pengaturan akun -->
        <div class="q-pt-md q-px-md row">
          <div class="col-1">
            <q-btn dense flat no-caps @click="$router.push('/menu')">
              <q-icon name="fas fa-arrow-left" color="black" size="20px" />
            </q-btn>
          </div>
          <div class="col-11 self-center">
            <div class="text-subtitle1 q-pl-md text-black">Pengaturan Akun</div>
          </div>
        </div>

        <div class="q-my-md q-mx-xl text-center">
          <q-avatar @click="openMedia()" style="width">
            <q-img src="~/assets/Group5656.png" />
          </q-avatar>
        </div>

        <q-form ref="form" v-if="dataAccount">
          <div>
            <div
              class="text-caption text-weight-medium q-pl-md"
              style="color: #888888"
            >
              Username
            </div>
            <q-input
              v-model="dataAccount.name"
              placeholder="Ketik username disini..."
              class="relative-center q-mx-md q-py-none"
              style="background-color: #f0f3fd"
              outlined
              type="text"
              :rules="[(val) => !!val || 'mohon diisi']"
            />
          </div>
          <div>
            <div
              class="text-caption text-weight-medium q-pl-md"
              style="color: #888888"
            >
              Email
            </div>
            <q-input
              v-model="dataAccount.email"
              placeholder="Ketik email disini..."
              class="relative-center q-mx-md q-py-none"
              style="background-color: #c4c4c4"
              :rules="[(val) => !!val || 'mohon diisi']"
              outlined
              type="text"
              disable
              color="white"
            />
          </div>
          <div v-if="dataAccount.shop">
            <div
              class="text-caption q-pl-md text-weight-medium"
              style="color: #888888"
            >
              Tentang toko
            </div>
            <q-input
              v-model="dataAccount.shop.description"
              placeholder="Ketik deskripsi toko"
              class="relative-center q-mx-md q-py-none"
              :rules="[(val) => !!val || 'mohon diisi']"
              style="background-color: #f0f3fd"
              outlined
              type="text"
            />
          </div>
        </q-form>

        <div class="q-pt-md text-center">
          <q-btn
            flat
            @click="$router.push('/account-change-password')"
            dense
            no-caps
            class="q-py-sm shadow-1"
            style="width: 90%; background-color: #ffffff"
          >
            <div class="row full-width">
              <div class="col-2 text-left">
                <q-avatar square class="bg-white">
                  <q-img src="~/assets/key.png" width="40%" />
                </q-avatar>
              </div>
              <div
                class="col-10 self-center text-left q-pl-sm"
                style="color: #000; font-size: medium"
              >
                Ganti kata sandi
              </div>
            </div>
          </q-btn>
          <q-btn
            @click="store()"
            flat
            dense
            no-caps
            class="q-py-sm q-mt-md q-mb-md"
            style="color: #ffffff; width: 90%; background-color: #49c2c0"
          >
            <div class="col-10 text-h6 self-center" style="color: #fff">
              Simpan
            </div>
          </q-btn>
        </div>
        <q-file
          ref="addImages"
          @update:model-value="previewImages"
          v-show="false"
          multiple
        ></q-file>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import { toBase64, jsonToFormData } from "./../helpers";
import CropPhotoComponent from "src/components/CropPhotoComponent.vue";

export default {
  computed: {
    ...mapState(["Auth"]),
  },
  methods: {
    async previewImages(files) {
      if (files.length > 1) {
        this.$q.notify("Hanya bisa menambahkan 1 foto");
      } else {
        console.log("sebelum base 64", files);
        this.employee.avatar = files[0];
        let promise = toBase64(files[0]);
        promise.then((res) => {
          console.log("setelah base 64", this.employee.avatar);
        });
      }
    },

    openMedia() {
      this.$refs.addImages.pickFiles();
    },
    async previewImages(files) {
      if (files.length > 1) {
        this.$q.notify("Hanya bisa menambahkan 1 foto");
      } else {
        console.log("sebelum base 64", files);
        this.dataAccount.avatar = files[0];
        let promise = toBase64(files[0]);
        promise.then((res) => {
          console.log("setelah base 64", res.src);
          this.encodedImage = res.src;
          this.$q.dialog({
            component: CropPhotoComponent,

            componentProps: {
              ImgBS64: res.src,
            }
          }).onCrop((data) => {
            console.log('halo',data)
          });
        });
      }
    },
    store() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          let res = jsonToFormData(this.dataAccount);
          this.$store.dispatch("Employee/store", res).then((res) => {
            this.$router.push("/employee");
            this.$q.notify("Berhasil");
          });
        } else {
          this.$q.notify({
            position: "top",
            message: "Lengkapi Data",
          });
        }
      });
    },
  },
  mounted() {
    this.dataAccount = this.Auth.auth;
    console.log("ini adalah data account", this.dataAccount);
    console.log(
      "ini adalah data account shop",
      this.dataAccount.shop.description
    );
  },

  data() {
    return {
      dataAccount: {},
    };
  },
};
</script>

<style></style>
