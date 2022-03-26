<template>
  <q-layout>
    <q-page-container>
      <div class="fixed-top shadow-2 bg-white" style="z-index: 999">
        <q-header class="bg-transparent" elevated>
          <div class="row full-width q-py-sm bg-white justify-center">
            <div class="col-4 q-px-sm self-center">
              <q-btn
                flat
                round
                size="10px"
                @click="$router.push('/make-an-order')"
              >
                <q-avatar
                  size="20px"
                  icon="fas fa-arrow-left"
                  style="color: #888888"
                >
                </q-avatar>
              </q-btn>
            </div>
            <div
              class="col-4 self-center text-weight-medium text-center text-black"
              style="font-size: 20px"
            >
              Affiliate
            </div>
            <div class="col-4 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div class="q-px-sm q-py-sm">
          <q-card class="q-px-" style="border-radius: 10px">
            <div class="q-px-sm">
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/trg.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div>Nama Owner</div>
                  <div class="text-black">Hisyam Bagus Prasetyo</div>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2 ">
                  <img src="~/assets/lcb.png" style="width: 80%; height: 80%" />
                </div>
                <div class=" col-10 text-h6 self-center">
                  <q-expansion-item expand-separator label="List Cabang" style="color:#B8B8B8">
                    <q-card>
                      <q-card-section>
                        <div class="text-black" style="font-size: 18px">
                            - cabang amsterdam
                        </div>
                        <div class="text-black" style="font-size: 18px">
                            - cabang utrecth
                        </div>
                        <div class="text-black" style="font-size: 18px">
                            - cabang barcelona
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </div>
              </div>
            </div>
          </q-card>
        </div>

        <div class="q-px-sm q-py-sm">
          <q-card class="q-px-" style="border-radius: 10px">
            <div class="q-px-sm">
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/trg.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div>Nama Owner</div>
                  <div class="text-black">Hisyam Bagus Prasetyo</div>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2 ">
                  <img src="~/assets/lcb.png" style="width: 80%; height: 80%" />
                </div>
                <div class=" col-10 text-h6 self-center">
                  <q-expansion-item expand-separator label="List Cabang" style="color:#B8B8B8">
                    <q-card>
                      <q-card-section>
                        <div class="text-black" style="font-size: 18px">
                            - cabang amsterdam
                        </div>
                        <div class="text-black" style="font-size: 18px">
                            - cabang utrecth
                        </div>
                        <div class="text-black" style="font-size: 18px">
                            - cabang barcelona
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </div>
              </div>
            </div>
          </q-card>
        </div>
        <div class="q-px-sm q-py-sm">
          <q-card class="q-px-" style="border-radius: 10px">
            <div class="q-px-sm">
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/trg.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div>Nama Owner</div>
                  <div class="text-black">Hisyam Bagus Prasetyo</div>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2 ">
                  <img src="~/assets/lcb.png" style="width: 80%; height: 80%" />
                </div>
                <div class=" col-10 text-h6 self-center">
                  <q-expansion-item expand-separator label="List Cabang" style="color:#B8B8B8">
                    <q-card>
                      <q-card-section>
                        <div class="text-black" style="font-size: 18px">
                            - cabang amsterdam
                        </div>
                        <div class="text-black" style="font-size: 18px">
                            - cabang utrecth
                        </div>
                        <div class="text-black" style="font-size: 18px">
                            - cabang barcelona
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </div>
              </div>
            </div>
          </q-card>
        </div>
        <div class="q-px-sm q-py-sm">
          <q-card class="q-px-" style="border-radius: 10px">
            <div class="q-px-sm">
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/trg.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div>Nama Owner</div>
                  <div class="text-black">Hisyam Bagus Prasetyo</div>
                </div>
              </div>
              <div class="row">
                <div class="text-center self-center col-2 ">
                  <img src="~/assets/lcb.png" style="width: 80%; height: 80%" />
                </div>
                <div class=" col-10 text-h6 self-center">
                  <q-expansion-item expand-separator label="List Cabang" style="color:#B8B8B8">
                    <q-card>
                      <q-card-section>
                        <div class="text-black" style="font-size: 18px">
                            - cabang amsterdam
                        </div>
                        <div class="text-black" style="font-size: 18px">
                            - cabang utrecth
                        </div>
                        <div class="text-black" style="font-size: 18px">
                            - cabang barcelona
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </div>
              </div>
            </div>
          </q-card>
        </div>


        <q-dialog v-model="alert">
          <q-card>
            <q-card-section class="text-center">
              <q-img src="~/assets/alert.png" style="width: 40%; height: 40%" />
            </q-card-section>
            <q-card-section class="text-center">
              <div class="text-h6">
                Apakah anda benar- benar yakin untuk mengganti Paket?
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Jika Yakin tekan Yakin, Jika tidak tekan Tidak
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Tidak" color="grey" v-close-popup />
              <q-btn flat label="Yakin" color="red" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  data() {
    return {
      alert: ref(false),
    };
  },
  mounted() {},
};
</script>

<style>
.bgCard {
  background-image: linear-gradient(to left, #74b6ff, #00bef8);
}
</style>
