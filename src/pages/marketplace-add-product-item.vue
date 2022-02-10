<template>
  <q-layout class="mbl">
    <q-header class="text-center shadow-1">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.back()">
          <q-avatar size="25px" style="color: #7d7d7d" icon="fas fa-arrow-left">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium text-body1"
          style="color: #484848"
          >tambah produk
        </q-toolbar-title>
        <q-btn flat class="text-indigo-10" @click="store()">Simpan</q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-sm">
        <div class="row q-mx-sm q-mt-md">
          <q-virtual-scroll :items="images" virtual-scroll-horizontal>
            <template v-slot:before>
              <div
                @click="openMedia()"
                class="col-4 text-white q-pr-sm q-pt-lg text-center"
                style="
                  height: 150px;
                  background-color: #d0d1dc;
                  border-radius: 10px;
                "
              >
                tambah foto
              </div>
            </template>
            <template v-slot="{ item, index }">
              <div :key="index" class="q-px-md">
                <q-img :src="item.src" width="150px" height="150px">
                  <q-btn
                    style="position: absolute; bottom: 0; right: 0; z-index: 1"
                    color="red"
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
          Pilih foto utama anda terlebih dahulu <br />
          maks. 10 foto
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
            v-model="product.description"
            placeholder="Masukkan nama produk"
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
          class="q-ml-md q-mt-sm"
          style="width: 95%"
          outlined
          v-model="is_new"
          placeholder="Masukkan kondisi produk"
        />
      </q-page>
      <q-file
        ref="addImages"
        @update:model-value="previewImages"
        v-show="false"
        multiple
      ></q-file>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      images: [],
      is_new: null,
    };
  },
  methods: {
    openMedia() {
      this.$refs.addImages.pickFiles();
    },
    async previewImages(files) {
      if (files.length > 10) {
        this.$q.notify("Hanya bisa menambahkan 10 foto");
      } else {
        this.product.images = files;

        let array = [];
        await files.forEach((images, i) => {
          array[i] = this.toBase64(images);
        });

        Promise.all(array).then((res) => {
          this.images = res;
        });
      }
    },
    removeImage(index) {
      this.images.splice(index, 1);
    },
    store() {
      if(this.is_new = "baru"){
        this.product.is_new == 1
      }else{
        this.product.is_new == 0
      }
      let formData = this.jsonToFormData(this.product);
      this.$store.dispatch("Product/store", formData).then((res) => {
        this.$q.notify("Berhasil");
        this.product = {};
        this.images = [];
        this.is_new = null
      });
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
};
</script>

<style>
</style>