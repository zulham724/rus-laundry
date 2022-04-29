<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <div class="fixed-top shadow-2 bg-white" style="z-index: 999">
        <q-header class="bg-transparent" elevated>
          <div class="row full-width q-py-sm bg-white justify-center">
            <div class="col-4 q-px-sm self-center">
              <q-btn
                flat
                round
                size="10px"
                @click="$router.push(`/home-owner`)"
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
              Cabang
            </div>
            <div class="col-4 self-center text-right q-px-sm">
              <q-btn
                class="q-px-sm"
                no-caps
                dense
                @click="alert = true"
                color="white"
                text-color="black"
                size="small"
                label="Tambah"
              />
            </div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div
          v-if="dataBranch"
          class="q-px-sm q-py-sm"
          v-for="item in dataBranch"
          :key="item.id"
        >
          <q-card class="bgCard" style="border-radius: 10px">
            <div class="q-px-sm">
              <div class="row">
                <div class="col-6 q-pt-sm">
                  <div>Nama Laundry</div>
                  <div class="text-white text-h6">{{ item.shop.name }}</div>
                </div>
                <div class="col-6 self-center text-right">
                  <q-btn
                    round
                    flat
                    @click="dialogDelete(item.shop.id, item.id)"
                  >
                    <img
                      src="~/assets/trash.png"
                      style="width: 60%; height: 60%"
                    />
                  </q-btn>
                </div>
              </div>
              <div>
                <div>
                  <div>Tanggal Pembuatan</div>
                  <div class="text-white text-h6">
                    {{ moment(item.created_at).locale("id").format("L, LT") }}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div>Jumlah Pesanan</div>
                  <div class="text-white text-h6">{{ item.orders_count }}</div>
                </div>
              </div>
              <div>
                <div>
                  <div>Status</div>
                  <!-- cabang aktif -->
                  <div class="row" v-if="this.Auth.auth.apiStatus == 'Hidup'">
                    <div class="col-3">
                      <div class="text-white text-h6">Hidup</div>
                    </div>
                    <div class="col-9 self-center">
                      <div class="dot dota"></div>
                    </div>
                  </div>
                  <!-- cabang mati -->
                  <div class="row" v-if="this.Auth.auth.apiStatus == 'Mati'">
                    <div class="col-3">
                      <div class="text-white text-h6">Mati</div>
                    </div>
                    <div class="col-9 self-center">
                      <div class="dotm dota"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <q-btn
              no-caps
              class="full-width"
              style="
                background-color: #22c7dd;
                border-radius: 0px 0px 10px 10px;
              "
              @click="$router.push(`/detail-cabang-owner/${item.shop.id}`)"
            >
              <div class="text-h6" style="color: #fff">Detail Cabang</div>
            </q-btn>
          </q-card>
        </div>

        <q-dialog v-model="alert">
          <q-card>
            <q-card-section class="text-center">
              <q-img src="~/assets/alert.png" style="width: 40%; height: 40%" />
            </q-card-section>
            <q-card-section class="text-center">
              <div class="text-h6">
                Apakah anda benar- benar yakin untuk menambah Cabang?
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Jika Yakin tekan Yakin, Jika tidak tekan Tidak
            </q-card-section>

            <q-card-actions align="right">
              <q-btn no-caps flat label="Tidak" color="grey" v-close-popup />
              <q-btn
                no-caps
                flat
                label="Yakin"
                color="red"
                @click="checkLimitBranch()"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="alertDelete" persistent>
          <q-card>
            <q-card-section class="text-center">
              <q-img src="~/assets/alert.png" style="width: 40%; height: 40%" />
            </q-card-section>
            <q-card-section class="text-center">
              <div class="text-h6">
                Apakah anda benar- benar yakin untuk menghapus Cabang?
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              Jika Yakin tekan Yakin, Jika tidak tekan Tidak
            </q-card-section>

            <q-card-actions align="right">
              <q-btn
                no-caps
                flat
                label="Tidak"
                color="grey"
                v-close-popup
                :disable="loadingDelete"
              />
              <q-btn
                :disable="loadingDelete"
                :loading="loadingDelete"
                no-caps
                flat
                label="Yakin"
                color="red"
                @click="deleteBranch()"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";
import moment from "moment";

export default {
  data() {
    return {
      alert: ref(false),
      dataBranch: [],
      expired_date: null,
      current_date: null,
      shop_id: null,
      user_id: null,
      alertDelete: false,
      loadingDelete: false,
    };
  },
  computed: {
    ...mapState(["Auth"]),
  },
  mounted() {
    // console.log("auth", this.Auth.auth);
    this.getMonthlyOrdersEachBranches();
    this.checkActivePackageUser();
  },
  methods: {
    moment,
    checkLimitBranch() {
      let limit_branch =
        this.Auth.auth.active_package_user.package.package_limits.find(
          (item) => {
            return item.entity == "slaves_count";
          }
        );
      // console.log("cek limit branch", limit_branch.limit);

      if (this.dataBranch.length == limit_branch.limit) {
        this.$q.notify("Maaf, Anda sudah mencapai batas maksimal cabang");
        // this.$router.push(`/buat-cabang-owner`);
      } else {
        this.$router.push(`/buat-cabang-owner`);
      }
    },
    dialogDelete(shop_id, user_id) {
      this.shop_id = shop_id;
      this.user_id = user_id;
      // console.log("cek id", this.shop_id);
      this.alertDelete = true;
    },
    deleteBranch() {
      let payload = {
        // shop_id: this.shop_id,
        user_id: this.user_id,
      };
      // console.log("id", payload);
      this.loadingDelete = true;
      this.$store
        .dispatch("Branch/deleteBranch", payload)
        .then((res) => {
          this.$q.notify("Berhasil Menghapus Cabang");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.loadingDelete = false;
          this.alertDelete = false;
          this.$router.go();
        });
    },
    checkActivePackageUser() {
      let date = this.Auth.auth.active_package_user.expired_date;
      this.expired_date = moment(date).locale("id").format("LL");
      this.current_date = moment().locale("id").format("LL");
      // console.log("expired_date", this.expired_date);
    },
    getMonthlyOrdersEachBranches() {
      this.$store
        .dispatch("MasterOrders/getMonthlyOrdersEachBranches")
        .then((res) => {
          this.dataBranch = res.data;
          console.log("all res", this.dataBranch);
        })
        .catch((err) => {
          console.log("err");
        });
    },
    filterMonthGetMonthlyOrder(value) {
      for (let i = 1; i < 13; i++) {
        let bulan = value.filter((obj) => {
          return obj.month === i;
        });
        if (bulan.length) {
          bulan[0].show = bulan[0].orders;

          let counter = 0;
          counter = bulan[0].show;
          this.arrayCounter.push(+counter);

          let zero = bulan[0];
          this.array.push(zero);
          this.sendDataBoolean = true;
          // console.log("iniarrrrrrrrrr", this.array);
        } else {
          this.orderDataNull.orders = 0;
          this.array.push(this.orderDataNull);
          this.sendDataBoolean = true;

          let counter = 0;
          this.arrayCounter.push(counter);
        }
      }
      this.topValueCounter();
      console.log("ini array", this.array);
    },
  },
};
</script>

<style>
.bgCard {
  background-image: linear-gradient(to left, #74b6ff, #00bef8);
}

/*blinking dot*/
@keyframes blink {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.dota {
  animation: blink 2s infinite;
}

.dot {
  height: 13px;
  width: 13px;
  background-color: #00ff00;
  border-radius: 50%;
  display: inline-block;
}

.dotm {
  height: 13px;
  width: 13px;
  background-color: #ff0000;
  border-radius: 50%;
  display: inline-block;
}
</style>
