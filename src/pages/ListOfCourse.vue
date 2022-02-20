<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <!-- Header -->
        <div class="text-center bg-transparent" style="height: 200px">
          <!-- Header Image -->
          <q-img
            src="~/assets/header-mesin-cuci.svg"
            style="height: 200px"
            class="fixed-top mbl-child"
            no-spinner
          >
            <q-toolbar class="bg-transparent" style="z-index: 999">
              <q-btn
                :ripple="true"
                flat
                round
                size="sm"
                @click="$router.push('/course-of-home')"
              >
                <q-avatar
                  size="25px"
                  icon="fas fa-arrow-left"
                  style="color: #000"
                >
                </q-avatar>
              </q-btn>
            </q-toolbar>

            <div class="bg-transparent full-width q-mx-xl">
              <div
                class="
                  text-left text-weight-bold
                  bg-transparent
                  q-mt-xl q-ml-md
                "
                style="color: #fff; font-size: 20px; max-width: 250px"
              >
                Latihan dasar laundry untuk pemula
              </div>

              <!-- Info -->
              <div
                class="
                  row
                  full-width
                  q-pa-md
                  text-weight-medium
                  self-center
                  q-mx-xl q-mt-sm
                "
                style="background-color: #ffd53f; border-radius: 5px"
              >
                <div class="col-6 text-left">
                  <div style="color: white; font-size: 13px">Waktu kursus</div>
                  <!-- Waktu course -->
                  <div style="color: black; font-size: 10px">
                    {{ module.sum_duration }} menit
                  </div>
                </div>
                <!-- Progress -->
                <div class="col-2 q-pr-xs">
                  <q-circular-progress
                    style="color: #0c1e7f"
                    show-value
                    font-size="10px"
                    :value="value"
                    size="35px"
                    :thickness="0.22"
                    track-color="white"
                  >
                    0/{{ value }}
                  </q-circular-progress>
                </div>
                <div class="col-4">
                  <div
                    style="color: #fdfdfe; font-size: 10px"
                    class="text-left q-pb-xs"
                  >
                    Materi
                  </div>
                  <div class="row" style="color: #5a5656; font-size: 7px">
                    <!-- video -->
                    <q-icon
                      name="fas fa-video"
                      size="10px"
                      style="color: #5a5656"
                    ></q-icon>
                    <div class="q-pl-sm">
                      {{ module.count_contents_video }} video
                    </div>

                    <!-- Text/materi -->
                    <q-icon
                      name="fas fa-pen"
                      size="10px"
                      style="color: #5a5656"
                      class="q-pl-md"
                    ></q-icon>
                    <div class="q-pl-sm">
                      {{ module.count_contents_teks }} video
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-img>
        </div>

        <!-- Step course -->
        <div v-for="(content, c) in module.contents" :key="content.id">
          <!-- Container -->
          <div @click="detailCourse(content.id, c)" class="full-width row">
            <!-- Thumbnail video -->
            <div class="col-5 text-center self-center" style="z-index: -1">
              <!-- <q-avatar
                square
                style="width: 140px; height: 80px; border-radius: 5px"
                color="grey"
              > -->
              <q-img
                v-if="content.thumbnail"
                fit="cover"
                width="140px"
                height="80px"
                no-spinner
                :src="storageUrl + content.thumbnail.src"
              >
              </q-img>
              <!-- </q-avatar> -->
            </div>
            <div class="col-7 q-pt-sm">
              <!-- Judul -->
              <div
                class="text-weight-bold"
                style="color: #5f5959; font-size: 14px"
              >
                {{ content.tittle }}
              </div>
              <!-- Deskripsi -->
              <div
                class="text-weight-regular"
                style="color: #5a5656; font-size: 9px"
              >
                {{ content.description }}
              </div>
              <!-- durasi video -->
              <div v-if="lockDuration == false" class="row justify-end q-pt-sm">
                <div
                  class="text-weight-medium row self-center"
                  style="
                    color: white;
                    border-radius: 5px 0 0 0;
                    font-size: 11px;
                  "
                >
                  <div
                    class="col-6 q-px-md q-py-xs"
                    style="background-color: #d637b3; border-radius: 5px 0 0 0"
                  >
                    Video
                  </div>
                  <div
                    class="col q-px-sm q-py-xs"
                    style="
                  background-color: #0c1e7f;
                  border-radius: 5px 0 0 0;
                "
                  >
                    {{ content.duration }} menit
                  </div>
                </div>
              </div>

              <!-- jika video terkunci -->
              <div v-else class="row justify-end q-pt-sm">
                <div
                  class="text-weight-medium q-px-md q-py-xs"
                  style="
                    color: white;
                    background-color: #0c1e7f;
                    border-radius: 5px 0 0 0;
                    font-size: 11px;
                  "
                >
                  Terbuka level 40
                </div>
              </div>
            </div>
          </div>
          <q-separator></q-separator>
        </div>

        <!-- Dialog lock content -->
        <q-dialog v-model="dialogLock">
          <q-card style="border-radius: 20px">
            <!-- Image lock -->
            <div>
              <q-img
                no-spinner
                src="~/assets/animation-lock.gif"
                sizes="50px"
              >
              </q-img>
            </div>

            <div
              class="text-weight-bold text-center q-py-sm"
              style="color: #5f5959; font-size: 13px"
            >
              Konten ini Terkunci
            </div>
            <div
              class="text-weight-medium text-center q-px-md q-pb-xl"
              style="color: #b8b8b8; font-size: 13px"
            >
              Kamu sepertinya belum menyelesaikan pembelajaran di konten
              sebelumnya. Yuk selesaikan dulu!
            </div>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ["moduleid"],
  computed:{
    ...mapGetters(["ModuleContent"])
  },
  data() {
    return {
      value: 1,
      lockDuration: false,
      dialogLock: false,
      module: [],
      storageUrl: STORAGE_URL,
    };
  },
  mounted() {
    this.getModuleContents();
  },
  methods: {
    buttonLock() {
      this.dialogLock = true;
    },
    getModuleContents() {
      this.$store.dispatch("Module/show", this.moduleid).then((res) => {
        this.module = res.data;
      });
    },
    detailCourse(id) {
      let id_content = this.module.contents.map((item) => {
        return item.id;
      });
      this.$store.commit("ModuleContent/set_contents", {
        data: id_content,
      });
       
      this.$router.push(`/${id}/detail-course`);
    },
  },
};
</script>

<style>
</style>
