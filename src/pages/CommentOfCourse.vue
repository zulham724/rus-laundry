<template>
  <q-layout>
    <!-- Header -->
    <q-header>
      <q-toolbar class="shadow-1" style="background-color: #1c309b">
        <q-btn
          @click="$router.push('/detail-course')"
          no-caps
          class="q-pa-md"
          flat
          style="color: white"
          round
        >
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #ffffff">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-weight-medium text-subtitle2"
          style="color: white; font-size: 16px"
          >Komentar</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="q-pa-md">
        <!-- Container -->
        <div v-for="n in 5" :key="n" class="q-pb-lg">
          <div class="row">
            <div class="col-8 row">
              <!-- Photo profile -->
              <div class="col-2 text-left self-center">
                <q-avatar size="30px" color="grey">
                  <q-img no-spinner src="~/assets/Avatar.png"></q-img>
                </q-avatar>
              </div>
              <!-- Name of profile -->
              <div
                class="col text-weight-bold self-center q-pl-xs"
                style="color: #3a3838; font-size: 15px"
              >
                Laundry_lain
              </div>
              <!-- Time of post -->
              <div
                class="col text-weight-medium self-center q-pl-sm"
                style="color: #b1b1b1; font-size: 10px"
              >
                30 menit
              </div>
            </div>

            <div class="col-4 row justify-end">
              <!-- Level -->
              <div
                class="q-px-sm self-center justify-end"
                style="
                  background-color: #ff843e;
                  border-radius: 20px;
                  width: auto;
                  font-size: 12px;
                  color: white;
                "
              >
                Lv.20
              </div>
              <!-- button like -->
              <div class="self-center q-pl-xs">
                <q-btn round dense flat>
                  <q-icon name="far fa-heart" color="grey" size="20px"></q-icon>
                </q-btn>
              </div>
            </div>
          </div>

          <!-- Isi comment -->
          <div
            class="row text-weight-regular q-pt-sm"
            style="color: #5a5656; font-size: 15px"
          >
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages
          </div>

          <!-- Reply comment & count like -->
          <div
            class="row text-weight-medium q-pt-sm"
            style="color: #b1b1b1; font-size: 12px"
          >
            <div>Balas</div>
            <!-- Count like -->
            <div class="q-pl-md">100 suka</div>
          </div>
        </div>

        <!-- Container Reply-->
        <div v-if="commentReply = false">
          <div v-for="n in 5" :key="n" class="q-pb-lg q-pl-sm">
            <div class="row">
              <div class="col-8 row">
                <!-- Photo profile -->
                <div class="col-2 text-left self-center">
                  <q-avatar size="30px" color="grey">
                    <q-img no-spinner src="~/assets/Avatar.png"></q-img>
                  </q-avatar>
                </div>
                <!-- Name of profile -->
                <div
                  class="col text-weight-bold self-center q-pl-xs"
                  style="color: #3a3838; font-size: 15px"
                >
                  Laundry_lain
                </div>
                <!-- Time of post -->
                <div
                  class="col text-weight-medium self-center q-pl-sm"
                  style="color: #b1b1b1; font-size: 10px"
                >
                  30 menit
                </div>
              </div>

              <div class="col-4 row justify-end">
                <!-- Level -->
                <div
                  class="q-px-sm self-center justify-end"
                  style="
                    background-color: #ff843e;
                    border-radius: 20px;
                    width: auto;
                    font-size: 12px;
                    color: white;
                  "
                >
                  Lv.20
                </div>
                <!-- button like -->
                <div class="self-center q-pl-xs">
                  <q-btn round dense flat>
                    <q-icon
                      name="far fa-heart"
                      color="grey"
                      size="20px"
                    ></q-icon>
                  </q-btn>
                </div>
              </div>
            </div>

            <!-- Isi comment -->
            <div
              class="row text-weight-regular q-pt-sm"
              style="color: #5a5656; font-size: 15px"
            >
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages
            </div>

            <!-- Reply comment & count like -->
            <div
              class="row text-weight-medium q-pt-sm"
              style="color: #b1b1b1; font-size: 12px"
            >
              <div>Balas</div>
              <!-- Count like -->
              <div class="q-pl-md">100 suka</div>
            </div>
          </div>
        </div>

        <!-- Type comment -->
        <div
          class="row full-width bg-white shadow-3 self-center q-py-sm q-px-md fixed-bottom"
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
              v-model="comment"
              hide-bottom-space
              placeholder="Tambahkan komentar..."
            />
          </div>

          <!-- Button Send -->
          <div class="col-1 self-end q-pr-lg">
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
export default {
  data() {
    return {
      comment: null,
      commentReply: false,
    };
  },
};
</script>

<style></style>
