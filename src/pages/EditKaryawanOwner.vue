<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page class="mbl-child">
      <div class="q-px-sm bg-white" style="border-radius: 5px">
        <q-form>
          <div class="text-center q-py-md">
            <q-avatar @click="openMedia()" size="150px" color="grey-4">
              <q-img
                v-if="updateEmployee.avatar"
                no-spinner
                :src="avatar64"
              ></q-img>
            </q-avatar>
            <q-file
              accept="image/*"
              ref="addImages"
              @update:model-value="previewImages"
              v-show="false"
            ></q-file>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Nama"
              color="black"
              v-model="updateEmployee.name"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Email"
              color="black"
              v-model="updateEmployee.email"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="Alamat"
              color="black"
              v-model="updateEmployee.home_address"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="q-py-sm">
            <q-input
              label="No. Telp"
              color="black"
              v-model="updateEmployee.contact_number"
              outlined
              type="search"
            >
            </q-input>
          </div>
          <div class="row q-pt-lg q-pb-sm">
            <div class="col text-right q-pr-sm">
              <q-btn
                class="q-px-md"
                style="background-color: #6295ff; border-radius: 10px"
                text-color="white"
                label="Simpan"
                @click="update()"
              />
            </div>
            <div class="col text-left q-pl-sm">
              <q-btn
                @click="$router.back()"
                class="q-px-lg"
                style="background-color: #fff; border-radius: 10px"
                text-color="black"
                label="Cancel"
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
import { toBase64, jsonToFormData, base64ToFile } from "./../helpers";
import CropPhotoComponent from "src/components/CropPhotoComponent.vue";
export default {
  props: ["employeeid"],
  data() {
    return {
      updateEmployee: {
        name: "",
        email: "",
        home_address: "",
        contact_number: "",
      },
      avatar64: null,
      currentBranch: {},
      STORAGE_URL: STORAGE_URL,
      previewImage: null,
    };
  },
  mounted() {
    console.log("emi", this.employeeid);
    this.getEmployeeById();
  },
  methods: {
    openMedia() {
      this.$refs.addImages.pickFiles();
    },
    async previewImages(file) {
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
            this.currentBranch.avatar = file;
            // this.avatar = file;
            // console.log("avatar file", this.avatar);
            // this.updateImages(file);
          });
      });
    },
    print() {
      console.log("res print", this.updateEmployee);
    },
    init(init) {
      if (init.avatar) {
        this.avatar64 = this.STORAGE_URL + "/" + init.avatar;
      }
      this.updateEmployee.name = init.name;
      this.updateEmployee.avatar = init.avatar;
      this.updateEmployee.email = init.email;
      this.updateEmployee.home_address = init.home_address;
      this.updateEmployee.contact_number = init.contact_number;
    },
    getEmployeeById() {
      this.$store
        .dispatch("MasterBranchOrders/getEmployeeById", this.employeeid)
        .then((res) => {
          console.log("ini res getEmployeeById", res.data);
          this.currentBranch = res.data;
          this.init(res.data);
        })
        .catch((err) => {
          console.log("terjadi kesalhaan getEmployeeById", err);
        });
    },
    update() {
      this.currentBranch.name = this.updateEmployee.name;
      this.currentBranch.email = this.updateEmployee.email;
      this.currentBranch.home_address = this.updateEmployee.home_address;
      this.currentBranch.contact_number = this.updateEmployee.contact_number;
      console.log("ini currentBranch", this.currentBranch);
      const payload = this.currentBranch;
      let formData = jsonToFormData(payload);
      console.log("ce", payload, formData);
      this.$store
        .dispatch(`MasterBranchOrders/updateEmployee`, {
          id: payload.id,
          formData: formData,
        })
        .then((res) => {
          console.log("ini res update", res);
          this.$q.notify({
            position: "bottom",
            message: "Berhasil mengedit data karyawan",
          });
          this.$router.back();
        })
        .catch((err) => {
          this.$q.notify({
            position: "bottom",
            message: "Gagal mengedit data karyawan",
          });
          console.log("terjadi kesalhaan update", err);
        });
    },
  },
};
</script>

<style></style>
