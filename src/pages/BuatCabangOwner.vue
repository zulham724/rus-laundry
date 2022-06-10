<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page class="mbl-child">
      <div class="q-px-sm q-py-xl text-center">
        <q-avatar size="100px">
          <q-img src="~/assets/dwada.svg" />
        </q-avatar>
        <div class="text-weight-medium q-mt-sm" style="font-size: 24px">
          Buat Cabang Baru
        </div>
      </div>
      <div class="q-px-sm bg-white" style="border-radius: 5px">
        <q-form ref="form">
          <div>
            <q-input
              label="Masukkan Nama"
              color="black"
              v-model="newBranch.name"
              outlined
              type="text"
              :rules="[(val) => (val && val.length > 0) || '']"
            >
            </q-input>
          </div>
          <div>
            <q-input
              label="Masukkan Email"
              color="black"
              v-model="newBranch.email"
              outlined
              type="email"
              :rules="[(val) => (val && val.length > 0) || '']"
            >
            </q-input>
          </div>
          <div>
            <q-input
              label="Masukkan Password"
              color="black"
              v-model="newBranch.password"
              outlined
              type="text"
              :rules="[(val) => (val && val.length > 7) || 'Isi minimal 8 karakter']"
            >
            </q-input>
          </div>
          <div>
            <q-input
              label="Nama Toko"
              color="black"
              v-model="newBranch.shop_name"
              outlined
              type="text"
              :rules="[(val) => (val && val.length > 0) || '']"
            >
            </q-input>
          </div>
          <div>
            <q-input
              label="Deskripsi Toko"
              color="black"
              v-model="newBranch.shop_desc"
              outlined
              type="text"
              :rules="[(val) => (val && val.length > 0) || '']"
            >
            </q-input>
          </div>

          <div class="row q-pt-lg q-pb-sm">
            <div class="col text-right q-pr-sm">
              <q-btn
                class="q-px-md"
                style="background-color: #6295ff; border-radius: 10px"
                text-color="white"
                label="Tambahkan"
                @click="addNewBranch()"
              />
            </div>
            <div class="col text-left q-pl-sm">
              <q-btn
                class="q-px-lg"
                style="background-color: #fff; border-radius: 10px"
                text-color="black"
                label="Cancel"
                @click="$router.push('/cabang-owner')"
              />
            </div>
          </div>
        </q-form>
      </div>
      <div
        style="
          position: absolute;
          z-index: -1;
          vertical-align: text-bottom;
          width: 100%;
        "
      >
        <q-img src="~/assets/br.png" />
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      newBranch: {
        name: "",
        email: "",
        password: "",
        shop_name: "",
        shop_desc: "",
      },
    };
  },
  computed: {
    ...mapState(["Auth"]),
  },
  mounted() {
    console.log('auth', this.Auth.auth)
  },
  methods: {
    addNewBranch() {
      console.log("cek file", this.newBranch);
      this.$refs.form.validate().then((valid) => {
        if (valid) {
          this.$store
            .dispatch("Branch/addNewBranch", this.newBranch)
            .then((res) => {
              console.log("res", res);
              this.$q.notify({
                position: "top",
                message: "Berhasil tambah cabang",
              });
              this.$router.push("/cabang-owner");
            })
            .catch((err) => {
              console.log("err", err);
              this.$q.notify({
                position: "top",
                message: "Gagal tambah cabang, email sudah terdaftar",
              });
            })
            
        } else {
          this.$q.notify("Silahkan isi form yang ada dengan benar");
        }
      });
    },
  },
};
</script>

<style></style>
