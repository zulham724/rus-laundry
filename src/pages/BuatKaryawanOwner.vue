<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page class="mbl-child">
      <div class="q-px-sm bg-white" style="border-radius: 5px">
        <q-form>
          <div class="text-center">
            <q-avatar @click="openMedia()" class="q-ma-xl" size="150px">
              <q-img
                v-if="!encodedImage"
                no-spinner
                src="~/assets/empty-avatar.svg"
              />
              <q-img v-else no-spinner :src="encodedImage" />
            </q-avatar>
            <q-file
              accept="image/*"
              ref="addImages"
              @update:model-value="previewImages"
              v-show="false"
            ></q-file>
            <!-- <q-avatar class="q-ma-xl" size="150px">
              <q-img  no-spinner v-for="pict in encodedImage" :key="pict.id" :src="encodedImage.src" />
            </q-avatar> -->
            <!-- <q-avatar class="q-ma-xl" size="150px">
              <q-img  no-spinner :src="encodedImage" />
            </q-avatar> -->
          </div>
          <div class="q-py-sm">
            <q-input
              label="Nama Karyawan"
              color="black"
              v-model="addKaryawan.name"
              outlined
              type="text"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Email"
              color="black"
              v-model="addKaryawan.email"
              outlined
              type="email"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Alamat"
              color="black"
              v-model="addKaryawan.home_address"
              outlined
              type="text"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="No. Telp"
              color="black"
              v-model="addKaryawan.contact_number"
              outlined
              type="number"
            >
            </q-input>
          </div>
          <div class="row q-pt-lg q-pb-sm">
            <div class="col text-right q-pr-sm">
              <q-btn
                class="q-px-sm"
                style="background-color: #6295ff; border-radius: 10px"
                text-color="white"
                label="Tambahkan"
                @click="print()"
              />
            </div>
            <div class="col text-left q-pl-sm">
              <q-btn
                class="q-px-lg"
                style="background-color: #fff; border-radius: 10px"
                text-color="black"
                label="Cancel"
                @click="$router.back()"
              />
            </div>
          </div>
        </q-form>
      </div>
      <!--
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
      -->
    </q-page>
  </q-layout>
</template>

<script>
import { toBase64, jsonToFormData } from "./../helpers";
import { base64ToFile } from "./../helpers";
import CropPhotoComponent from "src/components/CropPhotoComponent.vue";
export default {
  props: ["branchid"],
  data() {
    return {
      encodedImage: null,
      addKaryawan: {},
    };
  },
  mounted() {
    console.log("bid", this.branchid);
  },
  methods: {
    openMedia() {
      this.$refs.addImages.pickFiles();
    },
    async previewImages(file) {
      console.log("ini file sebelum apa apa", file);
      if (file.type.includes("image")) {
        let promise = this.toBase64(file);
        promise.then((res) => {
          console.log("ini res", res);
          this.$q
            .dialog({
              component: CropPhotoComponent,
              componentProps: {
                ImgBS64: res.src,
              },
            })
            .onOk((data) => {
              // console.log("cek hasil crop", data);
              data.type = res.type;
              let imageBase64 = data;
              // console.log("ini foto yang sudah jadi base 64", imageBase64);
              this.encodedImage = imageBase64.dataUrl;
              let imgTo64 = base64ToFile(imageBase64.dataUrl, "avatar");
              // console.log("ini image sudah kembali menjadi file", imgTo64);
              this.addKaryawan.avatar = imgTo64;
            });
        });
      } else {
        console.log("bismillah ini bukan foto gan");
        this.$q.notify({
          position: "top",
          message: "Pastikan file berupa gambar",
        });
      }
    },
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>
          resolve({
            src: reader.result,
            type: file.type,
          });
        reader.onerror = (error) => reject(error);
      });
    },
    print() {
      this.addKaryawan.shop_id = this.branchid;
      console.log("ini res print", this.addKaryawan);
      this.createBranchEmployee();
    },
    createBranchEmployee() {
      let formData = jsonToFormData(this.addKaryawan);
      this.$store
        .dispatch("MasterBranchOrders/createBranchEmployee", formData)
        .then(() => {
          console.log("ini res createBranchEmployee", this.addKaryawan);
          this.$router.push(`/detail-karyawan-owner/${this.branchid}`);
          this.$q.notify({
            position: "bottom",
            message: "Berhasil menambah karyawan",
          });
        })
        .catch((err) => {
          this.$q.notify({
            position: "bottom",
            message: "Email sudah digunakan",
          });
          console.log("terjadi kesalahan createBranchCustomer", err);
        });
    },
  },
};
</script>

<style></style>
