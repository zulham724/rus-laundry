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
                  <q-avatar style="background-color: #888888">
                    <q-img no-spinner src="~/assets/ld.png" ></q-img>
                  </q-avatar>
                </div>
                <div v-else-if="Auth.auth.avatar" class="self-center ">

                  <q-avatar  style="background-color: #888888">
                    <q-img no-spinner :src="storageUrl + `/` + Auth.auth.avatar" ></q-img>
                  </q-avatar>
                </div>
              <!-- <q-avatar
                style="background-color: #888888"
                @click="$router.push('/profile-of-course')"
              >
                <q-img no-spinner src="~/assets/Avatar.png"></q-img>
              </q-avatar> -->
            </div>
            <div class="col-9 self-center q-pl-sm">
              <div
                class="row text-weight-medium q-pb-xs"
                style="font-size: 18px; color: white"
              >
                {{ Auth.auth.shop.name }}
              </div>
              <div class="row q-gutter-x-sm">
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
                40 Total Materi
              </div>

              <!-- Point -->
              <div
                class="col-4 q-px-md self-center"
                style="
                  background-color: #fff;
                  border-radius: 20px;
                  width: auto;
                  font-size: 10px;
                  color: #ff843e;
                "
              >
                1 Diselesaikan
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
              <template v-slot:prepend>
                <q-icon
                  name="search"
                  class="self-center"
                  size="20px"
                  color="grey"
                />
              </template>

              <template v-slot:append>
                <q-icon
                  name="close"
                  @click="clear = ''"
                  class="cursor-pointer"
                />
              </template>
            </q-input>
          </div>
        </div>
      </div>

      <div v-for="module in modules" :key="module.id" class=" ">
        <!-- Container -->
        <div
          class="full-width row q-pt-sm"
          @click="$router.push(`/${module.id}/list-of-course`)"
        >
          <!-- Thumbnail video -->
          <div class="col-5 text-center self-center">
            <!-- <q-avatar
            square
            style="width: 140px; height: 80px; border-radius: 5px"
            color="grey"
          > -->
            <q-img
              style="border-radius: 5px"
              fit="cover"
              width="90%"
              :ratio="16 / 9"
              v-if="module.banner"
              no-spinner
              :src="storageUrl + `/` + module.banner.src"
            >
            </q-img>
            <q-img
              style="border-radius: 5px"
              fit="cover"
              width="90%"
              :ratio="16 / 9"
              v-else
              no-spinner
              src="dfltpht.svg"
            >
            </q-img>
            <!-- </q-avatar> -->
          </div>
          <div class="col-7">
            <!-- Judul -->
            <div
              class="text-weight-bold"
              style="color: #5f5959; font-size: 14px"
            >
              {{ module.tittle }}
            </div>
            <!-- Deskripsi -->
            <div
              class="text-weight-regular"
              style="color: #5a5656; font-size: 9px"
            >
              {{ module.description }}
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
export default {
  name: "CourseOfHomePage",
  include: ["CourseOfHomePage"],
  computed: {
    ...mapState(["Auth"]),
  },
  data() {
    const progress1 = ref(0.5);
    return {
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
    getModule() {
      this.$store.dispatch("Module/index").then((res) => {
        this.modules = this.module_temp = res.data;
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
