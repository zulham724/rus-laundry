<template>
  <q-layout>
    <q-header>
      <q-toolbar class="bg-white shadow-1">
        <q-btn
          @click="$router.back()"
          no-caps
          class="q-pa-md"
          flat
          style="color: white"
        >
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #49c2c0">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-weight-medium text-subtitle2"
          style="color: black; font-size: 16px"
          >Komentar</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pb-xl">
        <div class="row q-ma-md">
          <!-- Profil -->
          <div
            class="row col-12 q-px-sm"
            style="
              border-radius: 20px 0px 20px 0px;
              background-color: #f7f7f7;
              width: auto;
            "
          >
            <div class="col-3 q-pa-xs self-center">
              <q-avatar size="40px">
                <q-img src="~/assets/Avatar.png" no-spinner></q-img>
              </q-avatar>
            </div>
            <div class="col self-center q-pr-sm">
              <div
                class="text-weight-bold"
                style="color: #3a3838; font-size: 17px; width: auto"
              >
                IndonesiaLaundry
              </div>
              <div
                class="text-weight-medium"
                style="color: #b1b1b1; font-size: 12px"
              >
                2 hari
              </div>
            </div>
          </div>

          <!-- Isi Comment -->

          <div
            class="row q-pa-md text-weight-regular"
            style="font-size: 15px; color: #5a5656"
          >
            <div
              class="full-height"
              style="display: block; background-color: #c4c4c4; width: 1px"
            ></div>
            <div class="col q-pl-sm">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </div>
          </div>
        </div>
        <q-separator size="2px"></q-separator>

        <!-- Comment balasan -->
        <div v-for="n in 5" :key="n">
          <div class="row q-ma-md">
            <div class="row col-12">
              <!-- Profil     -->
              <div
                class="row col-12 q-px-sm"
                style="
                  border-radius: 20px 0px 20px 0px;
                  background-color: #f7f7f7;
                  width: auto;
                "
              >
                <div class="col-3 q-pa-xs self-center">
                  <q-avatar size="40px">
                    <q-img src="~/assets/Avatar.png" no-spinner></q-img>
                  </q-avatar>
                </div>
                <div class="col self-center q-pr-sm">
                  <div
                    class="text-weight-bold"
                    style="color: #3a3838; font-size: 17px; width: auto"
                  >
                    IndonesiaLaundry
                  </div>
                  <div
                    class="text-weight-medium"
                    style="color: #b1b1b1; font-size: 12px"
                  >
                    30 menit
                  </div>
                </div>
              </div>

              <q-space></q-space>

              <!-- Button like -->
              <q-btn
                dense
                round
                flat
                size="20px"
                @click="like++ && changeButtonColor()"
              >
                <q-icon
                  id="iconLike"
                  name="far fa-heart"
                  size="20px"
                  style="color: #b1b1b1"
                ></q-icon>
              </q-btn>
            </div>

            <!-- Isi Comment -->

            <div
              class="row q-pa-md text-weight-regular"
              style="font-size: 15px; color: #5a5656"
            >
              <div
                class="full-height"
                style="display: block; background-color: #c4c4c4; width: 1px"
              ></div>
              <div class="col q-pl-sm">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's
              </div>
            </div>

            <!-- Button reply & jumlah like -->
            <div class="row col-12 self-center q-pl-md q-pr-xs">
              <div
                class="text-weight-medium q-pr-sm"
                style="color: #b1b1b1; font-size: 12px"
              >
                Balas
              </div>
              <div
                class="text-weight-medium q-pl-xs"
                style="color: #b1b1b1; font-size: 12px"
              >
                {{ like }} suka
              </div>
              <q-space></q-space>
              <div
                v-if="lihatBalasan"
                class="text-weight-medium"
                style="color: #b1b1b1; font-size: 12px"
              >
                Lihat 1 balasan
              </div>
            </div>

            <!-- Lihat Comment balasan -->
            <div v-for="n in 5" :key="n">
              <div class="row q-ma-md q-pl-md">
                <div class="row col-12">
                  <!-- Profil     -->
                  <div
                    class="row col-12 q-px-sm"
                    style="
                      border-radius: 20px 0px 20px 0px;
                      background-color: #f7f7f7;
                      width: auto;
                    "
                  >
                    <div class="col-3 q-pa-xs self-center">
                      <q-avatar size="40px">
                        <q-img src="~/assets/Avatar.png" no-spinner></q-img>
                      </q-avatar>
                    </div>
                    <div class="col self-center q-pr-sm">
                      <div
                        class="text-weight-bold"
                        style="color: #3a3838; font-size: 17px; width: auto"
                      >
                        IndonesiaLaundry
                      </div>
                      <div
                        class="text-weight-medium"
                        style="color: #b1b1b1; font-size: 12px"
                      >
                        30 menit
                      </div>
                    </div>
                  </div>

                  <q-space></q-space>

                  <!-- Button like -->
                  <q-btn dense round flat size="20px">
                    <q-icon
                      name="far fa-heart"
                      size="20px"
                      style="color: #b1b1b1"
                    ></q-icon>
                  </q-btn>
                </div>

                <!-- Isi Comment -->

                <div
                  class="row q-pa-md text-weight-regular"
                  style="font-size: 15px; color: #5a5656"
                >
                  <div
                    class="full-height"
                    style="
                      display: block;
                      background-color: #c4c4c4;
                      width: 1px;
                    "
                  ></div>
                  <div class="col q-pl-sm">
                    What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's
                  </div>
                </div>

                <!-- Button reply & jumlah like -->
                <div class="row col-12 self-center q-pl-md q-pr-xs">
                  <div
                    class="text-weight-medium q-pr-sm"
                    style="color: #b1b1b1; font-size: 12px"
                  >
                    Balas
                  </div>
                  <div
                    class="text-weight-medium q-pl-xs"
                    style="color: #b1b1b1; font-size: 12px"
                  >
                    {{ like }}
                  </div>
                  <q-space></q-space>
                  <div
                    class="text-weight-medium"
                    style="color: #b1b1b1; font-size: 12px"
                  >
                    Lihat 1 balasan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Type comment -->
        <div
          class="
            row
            full-width
            bg-white
            shadow-3
            self-center
            q-py-sm q-px-md
            fixed-bottom
          "
        >
          <!-- Profile -->
          <div class="col-2 self-end">
            <q-avatar size="40px">
              <q-img src="~/assets/Avatar.png" no-spinner></q-img>
            </q-avatar>
          </div>

          <!-- Type of comment -->
          <div class="col-9 self-center">
            <q-input
              color="white"
              dense
              autogrow
              square
              v-model="text"
              hide-bottom-space
              placeholder="Tambahkan komentar..."
            />
          </div>

          <!-- Button Send -->
          <div class="col-1 self-end">
            <q-btn dense round flat size="20px">
              <q-icon
                name="far fa-paper-plane"
                size="20px"
                style="color: #49c2c0"
              ></q-icon>
            </q-btn>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      text: ref(""),
      lihatBalasan: false,
      like: "100",
    };
  },
  methods: {
    changeButtonColor() {
      var icon = document.getElementById("iconLike");
      if (icon.className == "far fa-heart") {
        icon.className = "fas fa-heart";
      } else {
        icon.className = "far fa-heart";
      }
    },
  },
};
</script>

<style>
.fas.fa-heart {
    color: red !important;
}
</style>
