<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <!-- Header -->
    <q-page>
      <!-- Container -->
      <div
        class="full-width"
        style="
          height: 180px;
          background-color: #fafafa;
          z-index: 999;
          position: relative;
        "
      >
        <!-- Background blue -->
        <div
          class="mbl-child fixed-top gradHead"
          style="
            z-index: 200;
            height: 150px;
            background-color: #3789e1;
            border-radius: 0px 0px 50px 50px;
          "
        >
          <!-- Profile -->
          <div class="row q-pt-md">
            <div class="col-1 text-right self-center q-pl-sm">
              <q-btn
                round
                @click="$router.push('/')"
                no-caps
                dense
                flat
                style="color: white"
              >
                <q-icon
                  size="20px"
                  name="fas fa-arrow-left"
                  style="color: #ffffff"
                >
                </q-icon>
              </q-btn>
            </div>
            <div class="col-2 text-center q-pl-sm">
              <!--Avatar-->
              <div v-if="!Auth.auth.avatar" class="self-center">
                <q-avatar style="background-color: #888888" class="shadow-1">
                  <q-img no-spinner src="~/assets/ld.png"></q-img>
                </q-avatar>
              </div>
              <div v-else-if="Auth.auth.avatar" class="self-center">
                <q-avatar class="self-center" style="background-color: #888888">
                  <q-img
                    no-spinner
                    :src="storageUrl + `/` + Auth.auth.avatar"
                  ></q-img>
                </q-avatar>
              </div>
            </div>
            <div class="col-9 self-center q-pl-sm">
              <div
                class="row text-weight-medium "
                style="font-size: 18px; color: white"
              >
                Kursus Digital
              </div>
              <div class="row ">
                <div
                  class="col-4 q-px-sm self-center"
                  style="
                    background-color: #ff843e;
                    border-radius: 20px;
                    width: auto;
                    font-size: 12px;
                    color: white;
                  "
                >
                  {{ Auth.auth.shop.name }}
                </div>
              </div>
            </div>
          </div>
          <!-- Search bar -->
          <div
            class="row q-px-xl full-width"
            style="z-index: 999; position: absolute; bottom: 0"
          >
            <q-input
              style="border-radius: 10px 10px 0px 0px"
              dense
              class="bg-white full-width"
              type="search"
              filled
              v-model="search"
              @update:model-value="filterModule(search)"
              placeholder="Cari"
            >
              <template  v-slot:prepend>
                <q-icon
                  name="search"
                  class="self-center"
                  size="20px"
                  color="grey"
                />
              </template>

              <template v-if="this.search.length" v-slot:append>
                <q-icon
                  name="close"
                  @click="test()"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>
        </div>
      </div>

      <div v-for="module in modules" :key="module.id">
        <!-- Container -->
        <div
          class="full-width row q-pt-sm"
          @click="$router.push(`/${module.id}/list-of-course`)">
          <!-- Thumbnail video -->
          <div class="col-5 text-center self-center">
            <q-img
              v-if="module.banner"
              style="border-radius: 5px"
              fit="cover"
              width="90%"
              :ratio="16 / 9"
              no-spinner
              :src="storageUrl + `/` + module.banner.src"
            >
            </q-img>
            <q-img
              v-else
              style="border-radius: 5px"
              fit="cover"
              width="90%"
              :ratio="16 / 9"
              no-spinner
              src="~/assets/dfltpht.svg"
            >
            </q-img>
          </div>
          <div class="col-7 q-px-sm">
            <!-- Judul -->
            <div
              class="text-weight-bold"
              style="color: #5f5959; font-size: 14px"
            >
              {{ module.tittle.substring(0, 38) }} . . .
            </div>
            <!-- Deskripsi -->
            <div
              class="text-weight-regular"
              style="color: #5a5656; font-size: 9px"
            >
              <VueReadMoreSmooth :lines="3">
                  <p>
                    {{ module.description }}
                  </p>
                </VueReadMoreSmooth>
            </div>
          </div>
          <!-- durasi video -->
        </div>
        <div class="row text-center">
          <div class="col"></div>
          <div class="col"></div>
          <div class="col"></div>
          <div
            class="col text-weight-medium q-py-xs"
            style="
              color: #fff;
              background-color: #0c1e7f;
              border-radius: 5px 0 0 0;
              font-size: 11px;
            "
          >
            {{ module.sum_duration }} menit
          </div>
        </div>
        <q-separator />
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";
import VueReadMoreSmooth from "./ReadMore";

export default {
  name: "app",
  components: { VueReadMoreSmooth },

  name: "CourseOfHomePage",
  include: ["CourseOfHomePage"],
  computed: {
    ...mapState(["Auth"]),
  },
  data() {
    const progress1 = ref(0.5);
    return {
      search: "",
      progress1,
      progressLabel1: (progress1.value * 100).toFixed(2) + "%",
      lockDuration: false,
      clear: ref(""),
      modules: [],
      module_temp: [],
      storageUrl: STORAGE_URL,
    };
  },
  mounted() {
    this.getModule();
  },
  methods: {
    test() {
      console.log(this.search);
      this.search = "";
      this.getModule();
    },
    getModule() {
      this.$store.dispatch("Module/index").then((res) => {
        this.modules = this.module_temp = res.data;
        console.log('ini module', this.modules);
      });
    },
    filterModule(value) {
      this.update(value);
    },
    update(val) {
      if (val == "") {
        this.modules = this.module_temp;
      }

      let needle = val.toLowerCase();
      this.modules = this.module_temp.filter(
        (v) => v.tittle.toLowerCase().indexOf(needle) > -1
      );
    },
  },
};
</script>

<style>
.grad {
  background-image: linear-gradient(red, yellow);
}
.gradHead {
  background-image: linear-gradient(to bottom right, #3789e1, #1c309b);
}
</style>
