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
            <span class="q-ml-sm">keluar akan menghapus product ini</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              no-caps
              dense
              label="keluar"
              style="background-color: #9b27f1"
              color="white"
              @click="$router.push('/marketplace-add-product-owner')"
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
      <q-page class="q-pa-sm" v-if="product">
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
                  <q-spinner
                    class="full-width full-height"
                    v-if="item.id == photoId"
                    color="white"
                    size="3em"
                    :thickness="1"
                  />
                  <q-btn
                    :disable="disableButton"
                    style="position: absolute; bottom: 0; right: 0; z-index: 1"
                    color="red"
                    flat
                    dense
                    class="all-pointer-events"
                    icon="close"
                    v-model="testSelect"
                    @click="deleteImages(item.id, index)"
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
            <div class="col-6">Nama produk</div>
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
            v-model="product.tittle"
            placeholder="Masukkan nama product"
          />
        </div>
        <div>
          <div class="text-body2 text-weight-medium q-ml-lg q-mt-md row">
            <div class="col-6">Harga produk</div>
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
            v-model="product.price"
            placeholder="Masukkan harga product"
          />
        </div>
        <div>
          <div class="text-body2 text-weight-medium q-ml-lg q-mt-md row">
            <div class="col-6">Deskripsi produk</div>
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
            v-model="product.description"
            placeholder="Masukkan Deskripsi product"
          />
        </div>
        <div class="q-ml-lg q-mt-lg text-weight-medium">Detail produk</div>
        <div>
          <div class="text-body2 text-weight-medium q-ml-lg q-mt-md row">
            <div class="col-6 text-caption" style="color: #d0d1dc">
              Berat produk
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
            v-model="product.weight"
            placeholder="Masukkan berat product"
          />
        </div>
        <div class="text-body2 text-weight-medium q-ml-lg q-mt-md row">
          <div class="col-6 text-caption" style="color: #d0d1dc">
            kondisi produk
          </div>
        </div>
        <q-input
          readonly
          :disable="Loading"
          type="text"
          @click="dialogKondisiBarang = true"
          class="q-ml-md q-mt-sm"
          style="width: 95%"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          outlined
          :model-value="
            product.is_new != undefined
              ? product.is_new
                ? 'Baru'
                : 'Bekas'
              : null
          "
          placeholder="Masukkan kondisi product"
        />

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
      product: null,
      images: [],
      is_new: null,
      confirm: false,
      //ini untuk men-disable button ketika proses saving data
      Loading: false,
      STORAGE_URL: STORAGE_URL,
      photoId: null,
      dialogKondisiBarang: false,
      ftld: false,
      disableButton: false,
    };
  },

  mounted() {
    this.getProduct();
  },

  methods: {
    StatusProduct() {
      this.product.is_new = parseInt(this.is_new);
      console.log("test status produk", this.product.is_new);
    },
    update() {
      this.Loading = true;
      this.$store
        .dispatch("MasterProduct/updateProduct", this.product)
        .then((res) => {
          this.Loading = true;
          this.product = res.data;
          console.log("ini data setelah update", res.data);
        })
        .finally(() => {
          this.Loading = false;
          this.$router.push("/marketplace-add-product-owner");
        });
    },
    getProduct() {
      this.Loading = true;
      this.$store
        .dispatch("MasterProduct/show", this.productid)
        .then((res) => {
          this.Loading = true;
          this.product = res.data;
          console.log("ini data foto", res.data.images);
          console.log("ini detail product", res.data);
        })
        .finally(() => {
          this.images = this.product.images;
          this.Loading = false;
        });
    },
    getProducts() {
      this.$store.dispatch("MasterProduct/getProductByShop").then((res) => {
        this.products = this.products_temp = res.data;
      });
    },
    openMedia() {
      this.$refs.addImages.pickFiles();
    },
    async previewImages(files) {
      let payload = {
        product_id: this.product.id,
        images: files,
      };

      let formData = this.jsonToFormData(payload);
      this.$store.dispatch("MasterProduct/testadd", formData).then((res) => {
        this.images = res.data.images;
      });
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

    deleteImages(photoId, index) {
      this.disableButton = true;
      this.photoId = photoId;
      this.$store
        .dispatch("MasterProduct/deleteImagesTest", { id: photoId })
        .then((res) => {
          this.images.splice(index, 1);
        })
        .finally(() => {
          this.disableButton = false;
        });
    },
  },
  //setup inner loading
};
</script>

<style></style>
