<template>
  <q-layout class="mbl">
    <q-header class="shadow-1">
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #49c2c0">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #5a5656; font-size: 16px"
          >Buat Postingan</q-toolbar-title
        >
        <q-btn no-caps flat color="grey" @click="store()" class="text-right">
          <div class="text-weight-medium text-subtitle2" style="color: #5a5656">
            Posting
          </div>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <div class="row">
          <div class="col-8 q-pt-lg q-pb-md q-pl-sm q-pr-lg">
            <div
              class="row q-pa-sm q-pl-md"
              style="
                width: 80%;
                border-radius: 20px 0 20px 0;
                background-color: #f7f7f7;
              "
            >
              <q-avatar class="q-mt-xs" size="30px"
                ><img src="~/assets/Avatar.png"
              /></q-avatar>
              <div class="q-pl-sm column">
                <div class="text-weight-medium" style="font-size: 12px">
                  Indonesia Loundry
                </div>
                <div
                  class="text-caption text-weight-medium"
                  style="color: #b1b1b1; font-size: 10px"
                >
                  2 Hari
                </div>
              </div>
            </div>
          </div>
          <div class="col-4 q-pt-lg">
            <q-btn-dropdown
              flat
              no-caps
              style="
                width: 70%;
                height: 40%;
                background-color: #f5f7f9;
                border-radius: 5px;
                margin-left: 20px;
              "
            >
              <template v-slot:label>
                <div class="row no-wrap">
                  <q-icon
                    class="q-pt-xs"
                    size="15px"
                    name="fas fa-globe-asia"
                  />
                  <div class="text-center text-caption q-ml-xs">Publik</div>
                </div>
              </template>
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label caption>Private</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
        </div>
        <div class="row">
          <div class="q-pb-xl" style="height: 200px; width: 100%">
            <q-form ref="form">
            <q-input
              :disable="loading"
              class="q-px-md"
              placeholder="Apa yang kamu pikirkan hari ini"
              borderless
              v-model="post.body"
              style="width: 100%"
              autogrow
              :rules="[ val => val && val.length > 0 || 'Silahkan masukan sesuatu']"
            />
            </q-form>
            <div class="row">
              <div v-for="(file, f) in images_videos" :key="f" class="q-pa-md">
                <div v-if="file.type.includes('image')">
                  <q-img :src="file.src" width="100px" height="100px">
                    <q-btn
                      style="
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        z-index: 1;
                      "
                      color="red"
                      flat
                      dense
                      class="all-pointer-events"
                      icon="close"
                      @click="removeImage(f)"
                    />
                  </q-img>
                </div>
                <div v-else-if="file.type.includes('video')">
                  <vue-plyr :options="{ ratio: '1:1' }">
                    <video
                      preload="metadata"
                      :src="`${file.src}#t=0.1}`"
                      style="
                        margin-left: auto;
                        margin-right: auto;
                        display: block;
                        height: 50vw;
                      "
                    ></video>
                  </vue-plyr>
                </div>
              </div>
            </div>
            <q-file
              v-show="false"
              dense
              filled
              ref="selectfiles"
              @update:model-value="previewImages"
              multiple
              bg-color="transparent"
            >
            </q-file>
            <div>
              <q-btn
                dense
                outline
                no-caps
                style="font-size: 8px; border-radius: 10px"
                class="q-ml-md q-mb-md q-mt-xl text-caption"
                ># Tambah Hastag</q-btn
              >
            </div>
            <q-separator />
            <q-list class="text-weight-medium">
              <q-item tag="label" v-ripple :disable="loading">
                <q-item-section>
                  <q-item-label>Share ke WhatsApp</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle v-model="value2" color="light-green-13" />
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple :disable="loading">
                <q-item-section>
                  <q-item-label>Jadwalkan untuk nanti</q-item-label>
                </q-item-section>
                <q-item-section avatar>
                  <q-toggle v-model="value1" color="light-green-13" />
                </q-item-section>
              </q-item>

              <q-item
                tag="label"
                @click="open('bottom')"
                v-model="value1"
                v-ripple
                :disable="loading"
              >
                <q-item-section>
                  <q-item-label>Hari Ini 06:57</q-item-label>
                </q-item-section>
                <q-item-section avatar class="q-mr-md">
                  <q-icon size="15px" name="fas fa-chevron-right" />
                </q-item-section>
              </q-item>
            </q-list>
            <q-dialog v-model="dialog" position="bottom">
              <q-card>
                <q-date
                  style="width: 100%; height: 20%"
                  v-model="date"
                  minimal
                />
              </q-card>
            </q-dialog>
          </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-fab
            icon="fas fa-plus"
            external-label
            vertical-actions-align="left"
            direction="up"
            color="teal"
          >
            <q-fab-action
              external-label
              label-class="bg-transparent text-weight-medium text-grey-8 text-body1"
              style="color: #dc2baa"
              label-position="left"
              class="shadow-1"
              @click="openMedia()"
              icon="perm_media"
              label="Media"
            />
            <q-fab-action
              external-label
              label-class="bg-transparent text-weight-medium text-grey-8 text-body1"
              style="color: #dc2baa"
              label-position="left"
              class="shadow-1"
              @click="cek()"
              icon="photo_camera"
              label="Kamera"
            />
          </q-fab>
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      value1: false,
      value2: false,
      dialog: false,
      date: "2019/02/01",
      loading: false,
      images_videos: [],
      files: [],
      isMultipleFile: true,
      post: {},
    };
  },
  methods: {
    cek() {
      this.files.map((item) => {
        item.visible = "ada";
      });
      this.$forceUpdate();
      console.log(this.files);
    },
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
    openMedia() {
      // console.log(this.$refs.media)
      this.$refs.selectfiles.pickFiles();
    },
    async previewImages(files) {
      // 1. convert masing2 files jadi base64
      this.files = files;
      let array = [];
      await files.forEach((file, f) => {
        array[f] = this.toBase64(file);
      });

      Promise.all(array).then((res) => {
        this.images_videos = res;
        console.log(this.images_videos);
      });
    },
    removeImage(index) {
      this.images_videos.splice(index, 1);
    },
    store() {
      this.$refs.form.validate().then((success) =>{
        if(success){
          let formData = new FormData();
          this.files.forEach((file) => {
            // console.log(typeof image, image);
            formData.append("files[]", file);
          });
          formData.append("tittle", "LAUNDRY POST");
          formData.append("body", this.post.body);
          formData.append("status", "PUBLISHED");
          formData.append("featured", 0);
          this.$store.dispatch("Post/store", formData).then((res) => {
            this.$router.push('/community');
            this.$q.notify("Berhasil");
          });
        }else{
          alert('gagal')
        }
      })
    },
  },
};
</script>

<style></style>
