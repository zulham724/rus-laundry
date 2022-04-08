<template>
  <q-layout class="mbl">
    <div class="fixed-top" style="z-index: 999">
      <q-header class="text-center shadow-1">
        <q-toolbar class="bg-white">
          <q-btn flat round @click="confirm = true">
            <q-avatar
              size="25px"
              style="color: #7d7d7d"
              icon="fas fa-arrow-left"
            ></q-avatar>
          </q-btn>
          <q-toolbar-title
            class="text-left text-weight-medium text-body1"
            style="color: #484848"
            >tambah produk</q-toolbar-title
          >
          <q-btn
            flat
            no-caps
            class="text-indigo-10"
            @click="store()"
            :disable="loading == true"
          >
            Simpan Produk
            <q-spinner
              v-if="loading"
              class="q-mx-xs"
              color="black"
              :thickness="2"
            />
          </q-btn>
        </q-toolbar>
        <q-dialog v-model="confirm" persistent>
          <q-card>
            <q-card-section class="row items-center">
              <div class="text-h6">Yakin ingin keluar ?</div>
              <span class="q-ml-sm">keluar akan menghapus produk ini</span>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                flat
                no-caps
                dense
                label="keluar"
                style="background-color: #9b27f1"
                color="white"
                @click="$router.back()"
              />
              <q-btn
                flat
                no-caps
                dense
                label="batal"
                color="black"
                v-close-popup
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-header>
    </div>
    <q-page-container>
      <q-page class="q-pa-sm">
        <q-form ref="form">
          <div class="row q-mx-sm q-mt-md">
            <q-virtual-scroll :items="images" virtual-scroll-horizontal>
              <template v-slot:before>
                <div
                  @click="openMedia()"
                  class="col-4 text-white justify-center self-center q-px-md"
                  style="
                    height: 150px;
                    background-color: #d0d1dc;
                    border-radius: 10px;
                    margin-left: 12px;
                  "
                >
                  <div class="full-height self-center q-pt-xl">tambah foto</div>
                </div>
              </template>
              <template v-slot="{ item, index }">
                <div :key="index" class="q-px-md">
                  <q-img
                    :src="item"
                    width="130px"
                    height="150px"
                    style="border-radius: 10px"
                    class="shadow-2"
                  >
                    <q-btn
                      round
                      style="
                        background-color: rgba(0, 0, 0, 0.4);
                        position: absolute;

                        right: 0;
                        z-index: 1;
                      "
                      color="white"
                      flat
                      dense
                      class="all-pointer-events"
                      icon="close"
                      @click="removeImage(index)"
                    />
                  </q-img>
                </div>
              </template>
            </q-virtual-scroll>
          </div>
          <div class="q-ml-lg q-mt-md text-caption text-black">
            Pilih foto utama anda terlebih dahulu
            <br />maks. 10 foto
          </div>
          <div>
            <div class="text-body2 text-weight-medium q-ml-lg q-mt-md row">
              <div class="col-6">Nama Produk</div>
              <div
                class="col-6 q-pr-md text-right text-weight-light"
                style="color: #d0d1dc"
              >
                200
              </div>
            </div>
            <q-input
              class="q-ml-md q-mt-sm"
              style="width: 95%"
              outlined
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || '']"
              v-model="product.tittle"
              placeholder="Masukkan nama produk"
            />
          </div>
          <div>
            <div class="text-body2 text-weight-medium q-ml-lg q-mt-md row">
              <div class="col-6">Harga Produk</div>
              <div
                class="col-6 q-pr-md text-right text-weight-light"
                style="color: #d0d1dc"
              >
                Rp
              </div>
            </div>
            <q-input
              type="number"
              class="q-ml-md q-mt-sm"
              style="width: 95%"
              outlined
              lazy-rules
              :rules="[(val) => val || '']"
              v-model.number="product.price"
              placeholder="Masukkan harga produk"
            />
          </div>
          <div>
            <div class="text-body2 text-weight-medium q-ml-lg q-mt-md row">
              <div class="col-6">Deskripsi Produk</div>
              <div
                class="col-6 q-pr-md text-right text-weight-light"
                style="color: #d0d1dc"
              >
                200
              </div>
            </div>
            <q-input
              autogrow
              class="q-ml-md q-mt-sm"
              style="width: 95%"
              outlined
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || '']"
              v-model="product.description"
              placeholder="Masukkan Deskripsi produk"
            />
          </div>
          <div class="q-ml-lg q-mt-lg text-weight-medium">Detail Produk</div>
          <div>
            <div class="text-body2 text-weight-medium q-ml-lg q-mt-md row">
              <div class="col-6 text-caption" style="color: #d0d1dc">
                Berat Produk
              </div>
              <div
                class="col-6 q-pr-md text-right text-weight-light"
                style="color: #d0d1dc"
              >
                kg
              </div>
            </div>
            <q-input
              type="number"
              class="q-ml-md q-mt-sm"
              style="width: 95%"
              outlined
              lazy-rules
              :rules="[(val) => val || '']"
              v-model.number="product.weight"
              placeholder="Masukkan berat produk"
            />
          </div>
          <div class="text-body2 text-weight-medium q-ml-lg q-mt-md row">
            <div class="col-6 text-caption" style="color: #d0d1dc">
              kondisi Produk
            </div>
          </div>
          <q-input
            readonly
            type="text"
            @click="dialogKondisiBarang = true"
            class="q-ml-md q-mt-sm"
            style="width: 95%"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '']"
            outlined
            :model-value="
              product.is_new != undefined
                ? product.is_new
                  ? 'Baru'
                  : 'Bekas'
                : null
            "
            placeholder="Masukkan kondisi produk"
          />

          <!-- Dialog kondisi barang -->
          <q-dialog v-model="dialogKondisiBarang" position="bottom" persistent>
            <q-card class="row full-width q-pa-sm">
              <div
                class="full-width row justify-center text-weight-bold"
                style="color: #161952; font-size: 17px"
              >
                Kondisi
              </div>
              <q-form class="full-width">
                <!-- Kondisi barang baru -->
                <div class="row full-width q-pa-sm">
                  <q-radio
                    @click="StatusProduct()"
                    keep-color
                    name="kondisiBarang"
                    label="Baru"
                    val="1"
                    v-model="is_new"
                  />
                </div>
                <!-- Kondisi barang Bekas -->
                <div class="row full-width q-pa-sm">
                  <q-radio
                    @click="StatusProduct()"
                    keep-color
                    name="kondisiBarang"
                    label="Bekas"
                    val="0"
                    v-model="is_new"
                  />
                </div>

                <!-- Button konfirmasi -->
                <div class="row full-width q-pa-xs q-pt-md">
                  <q-btn
                    @click="input_is_new = true"
                    v-close-popup
                    no-caps
                    flat
                    class="full-width"
                    style="background-color: #9b27f1"
                  >
                    <div
                      class="text-weight-medium q-pa-xs"
                      style="color: #f1f1f1; font-size: 17px"
                    >
                      Konfirmasi
                    </div>
                  </q-btn>
                </div>
              </q-form>
            </q-card>
          </q-dialog>
        </q-form>
      </q-page>
      <q-file
        ref="addImages"
        @update:model-value="previewImages"
        v-show="false"
      ></q-file>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { toBase64, jsonToFormData, base64ToFile } from "./../helpers";
import CropPhotoComponent from "src/components/CropPhotoComponent.vue";

export default {
  data() {
    return {
      product: {
        images: [],
      },
      images: [],
      is_new: null,
      confirm: false,
      dialogKondisiBarang: false,
      is_new: null,
      loading: false,
      encodedImage: null,
      arrEncodedImage: [],
    };
  },
  mounted() {},
  methods: {
    StatusProduct() {
      this.product.is_new = parseInt(this.is_new);
      // console.log("test status produk", this.product.is_new)
    },
    openMedia() {
      this.$refs.addImages.pickFiles();
    },
    async previewImages(file) {
      // console.log("cek file", file);
      let promise = toBase64(file);
      promise.then((res) => {
        this.$q
          .dialog({
            component: CropPhotoComponent,
            componentProps: {
              ImgBS64: res.src,
            },
          })
          .onOk((data) => {
            // console.log("cek hasil crop", data);
            let imageBase64 = data.dataUrl;
            this.images.push(imageBase64);
            let imgTo64 = base64ToFile(imageBase64, "avatar");
            this.product.images.push(imgTo64);
          });
      });
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
    store() {
      console.log("ini sebelum simpan gambar", this.images);
      this.$refs.form.validate().then((success) => {
        if (success) {
          if (this.product.images.length) {
            this.loading = true;
            if ((this.is_new = "baru")) {
              this.product.is_new == 1;
            } else {
              this.product.is_new == 0;
            }
            let formData = this.jsonToFormData(this.product);
            this.$store
              .dispatch("Product/store", formData)
              .then((res) => {
                this.$router.push("/marketplace-add-product");
                this.$q.notify("Berhasil");
                this.product = {};
                this.images = [];
                this.is_new = null;
              })
              .finally(() => {
                this.loading = false;
              });
          } else {
            this.$q.notify("Silahkan masukan gambar");
          }
        } else {
          this.$q.notify("Periksa kembali");
        }
      });
    },
    cekdata() {
      let cekgan = this.jsonToFormData(this.product);
      if (this.product) {
        console.log("isi dulu gan");
      } else if (!this.product) {
        console.log("sip gan");
      }
    },

    //method convert to base64
    toBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>
          resolve({
            type: file.type,
            src: reader.result,
          });
        reader.onerror = (error) => reject(error);
      });
    },
    //method auto convert to formData
    jsonToFormData(data) {
      const formData = new FormData();

      this.buildFormData(formData, data);

      return formData;
    },
    buildFormData(formData, data, parentKey) {
      if (
        data &&
        typeof data === "object" &&
        !(data instanceof Date) &&
        !(data instanceof File)
      ) {
        Object.keys(data).forEach((key) => {
          this.buildFormData(
            formData,
            data[key],
            parentKey ? `${parentKey}[${key}]` : key
          );
        });
      } else {
        const value = data == null ? "" : data;

        formData.append(parentKey, value);
      }
    },
  },
  //setup dialog
};
</script>

<style></style>
