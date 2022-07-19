<template>
  <q-layout>
    <q-header>
      <q-toolbar class="bg-white shadow-1">
        <q-btn
          no-caps
          class="q-pa-md"
          flat
          style="color: white"
          @click="$router.push('/employee')"
        >
          <q-icon size="20px" name="fas fa-arrow-left" style="color: #888888">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-subtitle2"
          style="color: #888888; font-size: 16px"
          >Cetak ID Card</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <q-form ref="form">
          <div class="text-center">
            <q-avatar @click="openMedia()" class="q-ma-xl" size="150px">
              <q-img
                v-if="!encodedImage"
                no-spinner
                src="~/assets/empty-avatar.svg"
              />
              <q-img v-else no-spinner :src="encodedImage" />
            </q-avatar>
            <!-- <q-avatar class="q-ma-xl" size="150px">
              <q-img  no-spinner v-for="pict in encodedImage" :key="pict.id" :src="encodedImage.src" />
            </q-avatar> -->
            <!-- <q-avatar class="q-ma-xl" size="150px">
              <q-img  no-spinner :src="encodedImage" />
            </q-avatar> -->
          </div>

          <q-input
            class="q-mx-lg q-py-md"
            rounded
            outlined
            label="Nama"
            v-model="employee.name"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            class="q-mx-lg q-py-sm"
            rounded
            outlined
            label="Jabatan"
            model-value="Karyawan"
            readonly
          />
          <q-input
            v-model="employee.contact_number"
            class="q-mx-lg q-py-md"
            rounded
            outlined
            type="number"
            label="No Telephone"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
          <q-input
            v-model="employee.email"
            class="q-mx-lg q-py-md"
            rounded
            outlined
            type="email"
            label="Alamat Email"
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </q-form>
      </q-page>

      <q-footer>
        <q-btn
          @click="this.dialogAdd = true"
          class="q-py-md"
          no-caps
          style="width: 100%; background-color: #49c2c0"
        >
          Tambah Data karyawan
        </q-btn>
      </q-footer>

      <q-dialog v-model="dialogAdd">
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-weight-bold text-left" style="font-size: 15px">
              Tambah data?
            </div>
            <div class="text-weight-light text-left" style="font-size: 10px">
              yakin ingin menambah data?
            </div>
          </q-card-section>

          <q-card-actions>
            <div class="row col-12">
              <div class="col-9 text-right q-pr-sm">
                <q-btn
                  :disable="loading"
                  class="shadow-1"
                  no-caps
                  flat
                  label="Batal"
                  style="color: #888888"
                  v-close-popup
                />
              </div>
              <div class="col-3 text-left q-pr-sm">
                <q-btn
                  :disable="loading"
                  @click="store()"
                  class="shadow-1"
                  no-caps
                  flat
                  label="Oke"
                  style="background-color: #49c2c0; color: white"
                />
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-file
        accept="image/*"
        ref="addImages"
        @update:model-value="previewImages"
        v-show="false"
      ></q-file>
    </q-page-container>
  </q-layout>
</template>

<script>
import { toBase64, jsonToFormData } from "./../helpers";
import { base64ToFile } from "./../helpers";
import CropPhotoComponent from "src/components/CropPhotoComponent.vue";
export default {
  data() {
    return {
      imgSrc: null,
      photo: {
        images: [],
      },
      encodedImage: null,
      dialogAdd: false,
      employee: {},
      images_videos: [],
      files: [],
      loading: false,
    };
  },

  methods: {
    openMedia() {
      this.$refs.addImages.pickFiles();
    },
    store() {
      console.log("this.employee", this.employee);
      this.$refs.form.validate().then((success) => {
        if (success) {
          this.loading = true
          let res = jsonToFormData(this.employee);
          this.$store
            .dispatch("Employee/store", res)
            .then((res) => {
              this.$router.push("/employee");
              this.$q.notify("Berhasil");
            })
            .catch((err) => {
              this.$q.notify({
                position: "top",
                message: "Alamat Email Sudah Terpakai!",
              });
            }).finally(() => {
              this.loading = false
            })
        } else {
          this.$q.notify({
            position: "top",
            message: "Lengkapi Data",
          });
        }
      });
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
              console.log("cek hasil crop", data);
              data.type = res.type;
              let imageBase64 = data;
              console.log("ini foto yang sudah jadi base 64", imageBase64);
              this.images_videos.push(imageBase64);
              console.log("image video", this.images_videos);

              this.encodedImage = this.images_videos[0].dataUrl;
              let imgTo64 = base64ToFile(imageBase64.dataUrl, "avatar");
              console.log("ini image sudah kembali menjadi file", imgTo64);
              this.files.push(imgTo64);
              this.employee.avatar = this.files[0];
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
    // async previewImages(files) {
    //   console.log('ini files sebelum apa apa ', files)
    //   if (files.length > 1) {
    //     this.$q.notify("Hanya bisa menambahkan 1 foto");
    //   } else {
    //     console.log("sebelum base 64", files);
    //     this.employee.avatar = files[0];
    //     let promise = toBase64(files[0]);
    //     promise.then((res) => {
    //       console.log("setelah base 64", res.src);
    //       this.encodedImage = res.src;
    //     });
    //   }
    // },
  },
};
</script>
