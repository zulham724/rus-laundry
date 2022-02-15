<template>
  <q-layout class="mbl">
    <q-header class="text-center shadow-1">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="confirm = true">
          <q-avatar size="25px" style="color: #7d7d7d" icon="fas fa-arrow-left">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium text-body1"
          style="color: #484848"
          >edit produk
        </q-toolbar-title>
        <q-btn flat no-caps class="text-indigo-10" @click="update()"
          >Simpan</q-btn
        >
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
              @click="$router.push('/marketplace-add-product')"
              v-close-popup
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
    <q-page-container>
      <q-page class="q-pa-sm">
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
                  :src="STORAGE_URL + '/' + item.src"
                  width="150px"
                  height="150px"
                >
                  <q-btn
                    style="position: absolute; bottom: 0; right: 0; z-index: 1"
                    color="red"
                    flat
                    dense
                    class="all-pointer-events"
                    icon="close"
                    @click="deleteImages()"
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
            :disable="Loading"
            class="q-ml-md q-mt-sm"
            style="width: 95%"
            outlined
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
            v-model="text_product_tittle"
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
            :disable="Loading"
            type="number"
            class="q-ml-md q-mt-sm"
            style="width: 95%"
            outlined
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
            v-model="text_product_price"
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
            :disable="Loading"
            autogrow
            class="q-ml-md q-mt-sm"
            style="width: 95%"
            outlined
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
            v-model="text_product_description"
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
            :disable="Loading"
            type="number"
            class="q-ml-md q-mt-sm"
            style="width: 95%"
            outlined
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
            v-model="text_product_weight"
            placeholder="Masukkan berat produk"
          />
        </div>
        <div class="text-body2 text-weight-medium q-ml-lg q-mt-md row">
          <div class="col-6 text-caption" style="color: #d0d1dc">
            kondisi Produk
          </div>
        </div>
        <q-input
          :disable="Loading"
          class="q-ml-md q-mt-sm"
          style="width: 95%"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          outlined
          v-model="text_product_is_new"
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
  props: ["productid"],

  data() {
    return {
      product: {},
      produk: null,
      images: [],
      is_new: null,
      confirm: false,
      text_product_tittle: "",
      text_product_price: "",
      text_product_description: "",
      text_product_weight: "",
      text_product_is_new: "",
      Loading: false,
      STORAGE_URL: STORAGE_URL,
      testDelete: [],
    };
  },

  mounted() {
    this.getProduct();
  },

  methods: {
    update(reset) {
      this.Loading = true;
      const payload = {
        id: this.produk.id,
        name: this.text_product_tittle,
        price: this.text_product_price,
        description: this.text_product_description,
        weight: this.text_product_weight,
        is_new: this.text_product_is_new,
      };
      this.$store
        .dispatch("Product/updateProduct", payload)
        .then((res) => {
          this.Loading = true;
          this.produk.tittle = res.data.tittle;
          this.produk.price = res.data.price;
          this.produk.description = res.data.description;
          this.produk.weight = res.data.weight;
          this.produk.is_new = res.data.is_new;
          console.log("ini data setelah update", res.data);
        })
        .finally(() => {
          this.Loading = false;
        });
    },
    getProduct() {
      this.Loading = true;
      this.$store
        .dispatch("Product/show", this.productid)
        .then((res) => {
          this.Loading = true;
          this.produk = res.data;
          this.testDelete = res.data.images.map((item) => {
            return item;
          });
          console.log("ini data foto", res.data.images);
          console.log("ini detail produk", res.data);
        })
        .finally(() => {
          this.text_product_tittle = this.produk.tittle;
          this.text_product_price = this.produk.price;
          this.text_product_description = this.produk.description;
          this.text_product_weight = this.produk.weight;
          this.text_product_is_new = this.produk.is_new;
          this.images = this.produk.images;
          this.Loading = false;
        });
    },
    getProducts() {
      this.$store.dispatch("Product/getProductByShop").then((res) => {
        this.products = this.products_temp = res.data;
      });
    },
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
      if ((this.is_new = "baru")) {
        this.product.is_new == 1;
      } else {
        this.product.is_new == 0;
      }
      let formData = this.jsonToFormData(this.product);
      this.$store.dispatch("Product/store", formData).then((res) => {
        this.$q.notify("Berhasil");
        this.product = {};
        this.images = [];
        this.is_new = null;
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

    deleteImages() {
      let dft = this.testDelete.map((item) => item.id);
      this.$store.dispatch("Product/deleteImagesTest", dft).then((res) => {
        this.images.splice(this.images.findIndex, 1);
      });
    },
  },
};
</script>

<style></style>
