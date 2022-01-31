<template class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
  <q-layout style="background-color: #fafafa">
    <q-header style="background-color: #ffffff" class="q-pb-md">
      <!-- <q-pull-to-refresh @refresh = "refresh" > -->
      <div class="row q-pa-md self-center bg-white">
        <div
          class="col-5 text-weight-medium self-center"
          style="color: #3a3838; font-size: 20px"
        >
          Postingan
        </div>
        <div class="col-5">
          <q-btn flat dense no-caps @click="$router.push('/make-post')">
            <div
              class="row justify-center q-px-sm q-py-xs"
              style="background-color: #f5f7f9; border-radius: 10px"
            >
              <q-icon
                class="self-center"
                name="far fa-image"
                size="15px"
                style="color: #000000"
              />
              <div
                class="text-weight-medium q-pl-sm"
                style="font-size: 14px; color: #3a3838"
              >
                Buat postingan
              </div>
            </div>
          </q-btn>
        </div>
        <div class="col-1 text-center self-center">
          <q-btn dense round flat>
            <q-icon
              name="far fa-bell"
              sizes="20px"
              style="color: #888888"
            ></q-icon>
          </q-btn>
        </div>
        <div class="col-1 text-center q-pr-xs self-center">
          <q-avatar size="35px" style="background-color: #888888">
            <q-img src="~/assets/Avatar.png"></q-img>
          </q-avatar>
        </div>
      </div>
      <div class="row q-px-md">
        <!-- Search -->
        <q-input
          dense
          class="q-ml-sm full-width"
          type="search"
          rounded
          outlined
          v-model="search"
          label="Cari"
        >
          <template v-slot:prepend>
            <q-icon
              name="search"
              class="self-center"
              size="25px"
              color="grey"
            />
          </template>
        </q-input>
      </div>
      <!-- </q-pull-to-refresh>  -->
    </q-header>
    <q-page-container>
      <q-page class="q-mt-sm bg-white">
        <!-- Postingan -->
        <div v-for="n in 5" :key="n" class="q-ma-md q-py-md">
          <div class="row">
            <div class="col-2">
              <!-- Image profile -->
              <q-avatar size="60px" style="background-color: #888888">
                <q-img no-spinner src="~/assets/Avatar.png"></q-img>
              </q-avatar>
            </div>
            <div class="col-8 q-pl-md">
              <!-- Nama Profile -->
              <div
                class="text-weight-medium"
                style="color: #3a3838; font-size: 20px"
              >
                IndonesiaLaundry
              </div>
              <!-- Waktu posting -->
              <div
                class="text-weight-medium"
                style="color: #b1b1b1; font-size: 12px"
              >
                2 hari
              </div>
            </div>
            <div class="col-2 text-right">
              <!-- Button option -->
              <q-btn dense flat round @click="buttonOption()">
                <q-icon name="fas fa-ellipsis-v" size="16px"></q-icon>
              </q-btn>
            </div>
          </div>

          <!-- Isi post -->
          <div class="row">
            <div
              class="q-py-sm text-weight-medium text-justify"
              style="font-size: 15px; color: #5a5656"
            >
              <div>
                <span v-if="!readMoreActivated"
                  >{{ longText.slice(0, 130) }}
                </span>
                <a
                  style="color: #b1b1b1; font-size: 12px"
                  class="cursor-pointer text-weight-light"
                  v-if="!readMoreActivated"
                  @click="activateReadMore"
                >
                  ..selengkapnya
                </a>
                <span v-if="readMoreActivated" v-html="longText"></span>
              </div>
            </div>
          </div>
          <!-- Isi video/foto -->
          <div class="row bg-blue full-width q-my-xs" style="height: auto">
            <q-img
              no-spinner
              src="https://source.unsplash.com/random/600x400/?laundry"
            />
          </div>

          <!-- Button like, comment, show -->
          <div class="row">
            <div class="row col-3 self-center">
              <q-btn dense round flat size="18px">
                <q-Icon
                  name="far fa-heart"
                  size="25px"
                  style="color: #b1b1b1"
                ></q-Icon>
              </q-btn>
              <div
                class="text-weight-medium self-center"
                style="color: #b1b1b1; font-size: 15px"
              >
                2000
              </div>
            </div>
            <div class="row col-3 self-center">
              <q-btn dense round flat size="18px">
                <q-Icon
                  name="far fa-comments"
                  size="25px"
                  style="color: #b1b1b1"
                ></q-Icon>
              </q-btn>
              <div
                class="text-weight-medium self-center"
                style="color: #b1b1b1; font-size: 15px"
              >
                100
              </div>
            </div>
            <div class="row col-3 self-center">
              <q-btn dense round flat size="18px">
                <q-Icon
                  name="far fa-eye"
                  size="25px"
                  style="color: #b1b1b1"
                ></q-Icon>
              </q-btn>
              <div
                class="text-weight-medium self-center"
                style="color: #b1b1b1; font-size: 15px"
              >
                100
              </div>
            </div>
          </div>

          <!-- Button show comment -->
          <div
          @click="$router.push('/comment-of-post')"
            class="text-weight-regular"
            style="color: #b1b1b1; font-size: 10px"
          >
            Lihat 200 komentar
          </div>

          <!-- Show comment  -->
          <div class="row self-center">
            <div
              class="text-weight-regular self-center"
              style="font-size: 12px; color: #3a3838"
            >
              kios_laundry
            </div>
            <div
              class="text-weight-regular self-center q-pl-sm"
              style="color: #b1b1b1; font-size: 10px"
            >
              Kenapa kok pake vanish?...
            </div>
          </div>
        </div>

        <q-dialog v-model="dialogOption" position="bottom">
          <q-card class="justify-center full-width">
            <q-card-section>
              <div
                class="justify-center full-width text-center q-px-xl"
                style="display: block; border-radius: 10px; align: center"
              >
                <q-separator size="5px"></q-separator>
              </div>
            </q-card-section>
            <!-- Button Share -->
            <q-card-actions class="q-pt-md">
              <q-btn no-caps class="full-width" dense flat>
                <div class="row full-width q-py-sm">
                  <div class="col-3">
                    <q-btn dense outline round size="25px">
                      <q-icon
                        name="fas fa-share-alt"
                        style="color: #787878"
                        size="25px"
                      ></q-icon>
                    </q-btn>
                  </div>
                  <div
                    class="col-8 text-weight-medium self-center text-left"
                    style="color: #3a3838; font-size: 20px"
                  >
                    Bagikan postingan
                  </div>
                </div>
              </q-btn>
            </q-card-actions>

            <!-- Button Report -->
            <q-card-actions>
              <q-btn no-caps class="full-width" dense flat>
                <div class="row full-width q-py-sm">
                  <div class="col-3">
                    <q-btn dense outline round size="25px">
                      <q-icon
                        name="fas fa-exclamation-triangle"
                        style="color: #787878"
                        size="25px"
                      ></q-icon>
                    </q-btn>
                  </div>
                  <div
                    class="col-8 text-weight-medium self-center text-left"
                    style="color: #3a3838; font-size: 20px"
                  >
                    Laporkan postingan
                  </div>
                </div>
              </q-btn>
            </q-card-actions>

            <!-- Button Hide Post -->
            <q-card-actions>
              <q-btn no-caps class="full-width" dense flat>
                <div class="row full-width q-py-sm">
                  <div class="col-3">
                    <q-btn dense outline round size="25px">
                      <q-icon
                        name="far fa-eye-slash"
                        style="color: #787878"
                        size="25px"
                      ></q-icon>
                    </q-btn>
                  </div>
                  <div
                    class="col-8 text-weight-medium self-center text-left"
                    style="color: #3a3838; font-size: 20px"
                  >
                    Sembunyikan postingan
                  </div>
                </div>
              </q-btn>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "PostPage",
  include: ["PostPage"],
  data() {
    return {
      tab: "postingan",
      search: "",
      dialogOption: false,
      readMoreActivated: false,
      longText:  `Cara membersihkan pakaian dari minyakss dan kotoran membandel. bisa
            simak video yang saya bagikan. Masukkan pakaian kotor dan detergen ke dalam tabung mesin cuci.
Isi tabung dengan air bersuhu sesuai kebutuhan. Untuk menentukan volume air yang sesuai, mengaculah pada buku manual mesin cuci.
Jalankan siklus pencucian. `,
    };
  },
  methods: {
    buttonOption() {
      this.dialogOption = true;
    },
    activateReadMore() {
      this.readMoreActivated = true;
    },
  },
};
</script>

<style></style>
