<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <q-page>
        <!-- Header -->
        <div class="text-center bg-transparent" style="height: 200px">
          <!-- Header Image -->
          <q-img
            src="~/assets/bgrck.png"
            style="height: 200px; z-index: 999"
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
                  style="color: #fff"
                >
                </q-avatar>
              </q-btn>
            </q-toolbar>

            <div
              class="bg-transparent full-width q-mx-xl"
              style="position: absolute; bottom: 0"
            >
              <div
                class="text-left text-weight-bold bg-transparent q-mt-xl q-ml-md"
                style="color: #fff; font-size: 20px; max-width: 250px"
              >
                {{ module.tittle.substring(0, 34) }} . . .
              </div>

              <!-- Info -->
              <div
                class="row full-width q-pa-md text-weight-medium self-center q-mt-sm"
                style="background-color: #ffd53f; border-radius: 5px"
              >
                <div class="col-6 text-left">
                  <div style="color: white; font-size: 13px">Waktu kursus</div>
                  <!-- Waktu course -->
                  <div
                    v-if="module.sum_duration"
                    style="color: black; font-size: 10px"
                  >
                    {{ module.sum_duration }} menit
                  </div>
                  <div v-else style="color: black; font-size: 10px">
                    Tidak ada waktu
                  </div>
                </div>
                <!-- Progress -->
                <!-- <div class="col-2 q-pr-xs">
                  <q-circular-progress
                    style="color: #0c1e7f"
                    show-value
                    font-size="10px"
                    :value="value"
                    size="35px"
                    :thickness="0.22"
                    track-color="white"
                  >
                    {{ module.count_content_is_read }}/{{
                      module.count_contents
                    }}
                  </q-circular-progress>
                </div> -->
                <div class="col-6">
                  <div
                    style="color: #fdfdfe; font-size: 10px"
                    class="text-left q-pb-xs"
                  >
                    Materi
                  </div>
                  <div
                    class="row q-gutter-x-sm"
                    style="color: #5a5656; font-size: 7px"
                  >
                    <!-- video -->
                    <div class="row q-gutter-x-xs self-center">
                      <q-icon
                        name="fas fa-video"
                        size="10px"
                        style="color: #5a5656"
                      ></q-icon>
                      <div class="q-pl-xs">
                        {{ module.count_content_video }} video
                      </div>
                    </div>

                    <!-- Text/materi -->
                    <div class="row q-gutter-x-xs self-center">
                      <q-icon
                        name="fas fa-pen"
                        size="10px"
                        style="color: #5a5656"
                      ></q-icon>
                      <div class="q-pl-xs">
                        {{ module.count_content_text }} materi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-img>
        </div>

        <div class="q-py-sm"></div>
        <!-- Step course -->
        <div v-for="(content, c) in module.contents" :key="content.id">
          <!-- Container -->
          <div
            @click="detailCourse(content.id, c)"
            class="full-width q-py-sm row"
          >
            <!-- Thumbnail video -->
            <div class="col-5 text-center self-center" style="z-index: -1">
              <div v-if="content.type == 'Materi'">
                <q-img
                  v-if="content.thumbnail"
                  fit="cover"
                  width="90%"
                  :ratio="16 / 9"
                  no-spinner
                  :src="`${STORAGE_URL}/${content.thumbnail.src}`"
                />
                <q-img
                  v-else
                  fit="cover"
                  width="90%"
                  :ratio="16 / 9"
                  no-spinner
                  src="~/assets/mtrksg.svg"
                />
              </div>
              <div v-else>
                <q-img
                  v-if="content.thumbnail"
                  fit="cover"
                  width="90%"
                  :ratio="16 / 9"
                  no-spinner
                  :src="`${STORAGE_URL}/${content.thumbnail.src}`"
                />
                <q-img
                  v-else
                  fit="cover"
                  width="90%"
                  :ratio="16 / 9"
                  no-spinner
                  src="~/assets/vdksg.svg"
                />
              </div>
            </div>
            <div class="col-7 q-pt-sm q-px-sm">
              <!-- Judul -->
              <div
                class="text-weight-bold"
                style="color: #5f5959; font-size: 14px"
              >
                {{ content.tittle.substring(0, 20) }} . . .
              </div>
              <!-- Deskripsi -->
              <div
                class="text-weight-regular"
                style="color: #5a5656; font-size: 9px"
              >
                {{ moment(content.created_at).format("DD MMMM YYYY") }}
                <!-- <VueReadMoreSmooth :lines="3">
                  <div v-html="content.description"></div>
                </VueReadMoreSmooth> -->
              </div>
            </div>
          </div>
          <div>
            <div class="row text-center">
              <div class="col"></div>
              <div class="col"></div>
              <div
                class="col text-weight-medium q-py-xs"
                style="
                  color: #fff;
                  background-color: #d637b3;
                  border-radius: 5px 0 0 0;
                  font-size: 11px;
                "
              >
                {{ content.type }}
              </div>
              <div
                v-if="content.duration"
                class="col text-weight-medium q-py-xs"
                style="
                  color: #fff;
                  background-color: #0c1e7f;
                  border-radius: 0 0 0 0;
                  font-size: 11px;
                "
              >
                {{ content.duration }} menit
              </div>
              <div
                v-else
                class="col text-weight-medium q-py-xs"
                style="
                  color: #fff;
                  background-color: #0c1e7f;
                  border-radius: 0 0 0 0;
                  font-size: 11px;
                "
              >
                Tidak ada waktu
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
              <q-img no-spinner src="~/assets/animation-lock.gif" sizes="50px">
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
import { mapGetters } from "vuex";
import VueReadMoreSmooth from "./ReadMore";
import moment from "moment";

export default {
  //setup read more smooth
  name: "app",
  components: { VueReadMoreSmooth },

  props: ["moduleid"],
  computed: {
    ...mapGetters(["ModuleContent"]),
  },
  data() {
    return {
      lorem:
        "Lorem fistrum adipisicing apetecan elit diodeno torpedo al ataquerl incididunt quietooor fistro. Cillum consequat ese que llega aliqua esse veniam de la pradera. Aliquip aliquip qué dise usteer al ataquerl hasta luego Lucas. Benemeritaar ese hombree condemor ullamco veniam ese hombree fistro no puedor quietooor dolor apetecan. Pupita te voy a borrar el cerito diodenoo te va a hasé pupitaa fistro tempor duis caballo blanco caballo negroorl. Hasta luego Lucas no te digo trigo por no llamarte Rodrigor a wan commodo enim et et nisi nisi. Eiusmod voluptate nostrud exercitation ullamco. Magna incididunt la caidita pupita elit sit amet tiene musho peligro.",
      value: 1,
      lockDuration: false,
      dialogLock: false,
      module: [],
      STORAGE_URL: STORAGE_URL,
    };
  },
  mounted() {
    this.getModuleContents();
  },
  methods: {
    moment,
    buttonLock() {
      this.dialogLock = true;
    },
    getModuleContents() {
      this.$store.dispatch("Module/show", this.moduleid).then((res) => {
        console.log("res", res);
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

<style></style>
