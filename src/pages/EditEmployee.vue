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
            <q-img
              v-if="
                employee.avatar == 'users/default.png' && encodedImage == null
              "
              no-spinner
              src="~/assets/Avatar.png"
            ></q-img>
            <q-img
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
            />
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
          multiple
        ></q-file>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { toBase64, jsonToFormData } from "./../helpers";

export default {
  props: ["employeeid"],
  data() {
    return {
      employee: null,
      jabatan: "Karyawan",
      encodedImage: null,
    };
  },
  methods: {
    openMedia() {
      this.$refs.addImages.pickFiles();
    },
    async previewImages(files) {
      if (files.length > 1) {
        this.$q.notify("Hanya bisa menambahkan 1 foto");
      } else {
        console.log("sebelum base 64", files);
        this.employee.avatar = files[0];
        let promise = toBase64(files[0]);
        promise.then((res) => {
          // console.log("setelah base 64", res.src);
          this.encodedImage = res.src;
          console.log('ini encoded img', this.encodedImage)
        });
        this.updateImages();
      }
      
    },
    updateImages() {
      const payload = {
        id: this.employee.id,
        formData: jsonToFormData(this.employee)
      }
      console.log('data employee update', this.employee)
      this.$store.dispatch(`Employee/updateImage`, payload);
    },
    getEmployee() {
      this.$store.dispatch("Employee/show", this.employeeid).then((res) => {
        this.employee = res.data;
        console.log('data karyawan', this.employee)
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
    this.getEmployee();
  },
};
</script>

<style></style>
