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
                @click="$router.push('/home-owner')"
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
        <div v-if="isLoad"></div>
        <div
          v-else-if="!isLoad && affiliate_list.length"
          class="q-px-sm q-py-sm"
        >
          <q-card
            class="q-py-xs q-my-sm"
            style="border-radius: 10px"
            v-for="affiliate in affiliate_list"
            :key="affiliate.id"
          >
            <div class="q-px-sm">
              <div class="row">
                <div class="text-center self-center col-2">
                  <q-avatar>
                    <img src="~/assets/trg.png" />
                  </q-avatar>
                </div>
                <div class="q-pl-sm col-10 self-center">
                  <div
                    class="text-grey text-weight-bold"
                    style="font-size: larger"
                  >
                    Nama Owner
                  </div>
                  <div
                    class="text-black text-weight-medium"
                    style="font-size: medium"
                  >
                    {{ affiliate.name }}
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 self-center">
                  <q-expansion-item dense expand-separator>
                    <template v-slot:header>
                      <q-item-section avatar class="text-center self-center">
                        <q-avatar size="40px">
                          <q-img src="~/assets/lcb.png" />
                        </q-avatar>
                      </q-item-section>
                      <q-item-section
                        class="text-grey text-weight-medium"
                        style="font-size: medium"
                      >
                        List Cabang
                      </q-item-section>
                    </template>
                    <q-card>
                      <q-card-section>
                        <div v-if="affiliate.slaves.length">
                          <div
                            v-for="(branch, i) in affiliate.slaves"
                            :key="branch.id"
                            class="text-black text-weight-medium"
                            style="font-size: medium"
                          >
                            <div>{{ i + 1 }}. {{ branch.shop.name }}</div>
                          </div>
                        </div>
                        <!-- Belum ada cabang -->
                        <div v-else>
                          <div
                            class="text-black text-weight-medium"
                            style="font-size: medium"
                          >
                            <div>Belum ada cabang</div>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </div>
              </div>
            </div>
          </q-card>
        </div>
        <div class="text-center fixed-center" v-else>
          <q-img
            no-spinner
            src="~/assets/not-found-affiliate.gif"
            style="width: 150px; height: 150px"
          ></q-img>
          <div class="text-grey text-weight-medium" style="font-size: medium">
            Belum ada affiliate
          </div>
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
      affiliate_list: [],
      isLoad: false,
    };
  },
  computed: {
    auth() {
      return this.$store.getters["Auth/auth"];
    },
  },
  mounted() {
    console.log("cek auth", this.auth);
    this.getAffiliateList();
  },
  methods: {
    getAffiliateList() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Affiliate/getAffiliateList", this.auth.id)
          .then((res) => {
            this.affiliate_list = res.data;
            console.log("cek affiliate", this.affiliate_list);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
  },
};
</script>

<style>
.bgCard {
  background-image: linear-gradient(to left, #74b6ff, #00bef8);
}
</style>
