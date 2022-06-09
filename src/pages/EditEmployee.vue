<template>
  <q-layout>
    <q-header>
      <q-toolbar style="background-color: #49c2c0">
        <q-btn
          @click="$router.back()"
          no-caps
          class="q-pa-md"
          flat
          style="color: white"
        >
          <q-icon size="20px" name="fas fa-arrow-left" style="color: #white">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-subtitle2"
          style="color: white; font-size: 16px"
          >Edit Data Karyawan</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page v-if="employee">
        <div class="text-center q-py-md" style="background-color: #49c2c0">
          <q-avatar @click="openMedia()" size="150px" color="grey-4">
            <q-img v-if="employee.avatar" no-spinner :src="avatar64"></q-img>
            <!-- <q-img
              v-else-if="
                employee.avatar != 'users/default.png' && encodedImage == null
              "
              :src="`${$storageUrl}/${employee.avatar}`"
              no-spinner
            />
            <q-img
              v-else-if="encodedImage != null"
              no-spinner
              :src="encodedImage"
            /> -->
          </q-avatar>
        </div>

        <div class="q-mt-lg q-mx-sm q-gutter-y-md">
          <q-input
            input-class="q-pa-sm q-px-md text-weight-medium"
            input-style="color: #888888; background-color: #F1F3FD; border-radius: 10px; font-size: medium"
            placeholder="Nama"
            v-model="employee.name"
          />
          <q-input
            input-class="q-pa-sm q-px-md text-weight-medium"
            input-style="color: #888888; background-color: #F1F3FD; border-radius: 10px; font-size: medium"
            placeholder="Jabatan"
            v-model="jabatan"
            readonly
          />
          <q-input
            input-class="q-pa-sm q-px-md text-weight-medium"
            input-style="color: #888888; background-color: #F1F3FD; border-radius: 10px; font-size: medium"
            type="number"
            placeholder="No Telephone"
            v-model="employee.contact_number"
          />
          <q-input
            input-class="q-pa-sm q-px-md text-weight-medium"
            input-style="color: #888888; background-color: #F1F3FD; border-radius: 10px; font-size: medium"
            placeholder="Alamat Email"
            v-model="employee.email"
            type="email"
          />
        </div>

        <div class="q-mt-md q-mx-sm">
          <q-btn
            @click="update()"
            no-caps
            style="width: 100%; background-color: #49c2c0; font-size: large"
          >
            <div class="q-pa-sm text-weight-medium" style="color: #fafafa">
              Simpan
            </div>
          </q-btn>
        </div>
        <q-file
          ref="addImages"
          @update:model-value="previewImages"
          v-show="false"
        ></q-file>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { toBase64, jsonToFormData, base64ToFile } from "./../helpers";
import CropPhotoComponent from "src/components/CropPhotoComponent.vue";

export default {
  props: ["employeeid"],
  data() {
    return {
      employee: null,
      jabatan: "Karyawan",
      encodedImage: null,
      avatar64: null,
      avatar: null,
      STORAGE_URL: STORAGE_URL,
    };
  },
  methods: {
    init() {
      if (this.employee.avatar) {
        this.avatar64 = this.STORAGE_URL + "/" + this.employee.avatar;
      }
    },
    openMedia() {
      this.$refs.addImages.pickFiles();
    },
    updateImages(file) {
      let avatar = file;
      // console.log("ini avatar", avatar);
      let formData = new FormData();
      formData.append("avatar", avatar);
      console.log("ini form data", formData);
      const payload = {
        id: this.employee.id,
        formData: formData,
      };
      // console.log('data employee update', this.employee)
      this.$store
        .dispatch(`Employee/updateImage`, payload)
        .then((res) => {})
        .finally(() => {
          this.$q.notify("Foto Berhasil di tambahkan");
        });
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
            this.avatar = file;
            // console.log("avatar file", this.avatar);
            this.updateImages(file);
          });
      });
    },
    getEmployee() {
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch("Employee/show", this.employeeid)
          .then((res) => {
            this.employee = res.data;
            console.log("data karyawan", this.employee);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
    update() {
      let id = this.employee.id;
      this.$store.dispatch("Employee/update", this.employee).then((res) => {
        this.$router.push(`/detail-employee/${id}`);
        this.$q.notify("Berhasil");
      });
    },
  },
  mounted() {
    // console.log(this.$storageUrl)
    this.getEmployee().then((res) => {
      this.init();
    });
  },
};
</script>

<style></style>
