<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <div class="fixed-top shadow-2 bg-white" style="z-index: 999">
        <q-header class="bg-transparent" elevated>
          <div class="row full-width q-py-sm bg-white justify-center">
            <div class="col-4 q-px-sm self-center">
              <q-btn flat round size="10px" @click="$router.back()">
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
              Paket
            </div>
            <div class="col-4 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div
          v-for="item in this.packageData"
          :key="item.id"
          class="q-px-sm q-py-sm"
        >
          <q-card flat class=" no-shadow" style="border-radius: 10px, ">
            <div class="bgCardTop text-h6 text-white text-center q-py-sm">
              {{ item.name }}
            </div>
            <div class="q-px-sm bg-white">
              <div v-for="paket in item.package_contents" :key="paket.id">
                <div class="row q-py-xs">
                  <div class="text-center self-center col-2">
                    <img src="~/assets/dm.png" />
                  </div>
                  <div class="q-pl-sm col-10 text-h6 text-black self-center">
                    <div>{{ paket.value }}</div>
                  </div>
                </div>
              </div>
              <div class="row q-py-xs">
                <div class="text-center self-center col-2">
                  <img src="~/assets/cs.png" />
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div>
                    {{
                      new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(item.price)
                    }}
                  </div>
                </div>
              </div>
            </div>

            <div v-if="this.Auth.auth.active_package_user">
              <q-btn
                v-if="item.id >= this.Auth.auth.active_package_user.package.id"
                no-caps
                @click="nextPayment(item)"
                class="full-width bgCardTop"
                style="
                  background-color: #22c7dd;
                "
              >
                <div class="text-h6 q-py-sm" style="color: #fff">
                  Lanjutkan Ke Pembayaran
                </div>
              </q-btn>
            </div>
            <div v-if="this.Auth.auth.active_package_user">
              <q-btn
                v-if="item.id < this.Auth.auth.active_package_user.package.id"
                no-caps
                disable
                class="full-width bgCardTop"
                style="
                  background-color: #22c7dd;
                "
              >
                <div class="text-h6 q-py-lg" style="color: #fff"></div>
              </q-btn>
            </div>
            <div v-if="this.Auth.auth.active_package_user == null">
              <q-btn
                no-caps
                @click="nextPayment(item)"
                class="full-width bgCardTop"
                style="
                  background-color: #22c7dd;
                  border-radius: 0px 0px 10px 10px;
                "
              >
                <div class="text-h6 q-py-sm" style="color: #fff">
                  Lanjutkan Ke Pembayaran
                </div>
              </q-btn>
            </div>
          </q-card>
        </div>

        <q-dialog v-model="payment1" persistent position="bottom">
          <q-card>
            <q-card-section
              class="text-center"
              style="background-color: #b43f3f"
            >
              <div class="text-white">
                Sesuaikan nominal pembayaran sesuai yang ditujukan, jika ada
                kesalahan silahkan hubungi kami
              </div>
            </q-card-section>
            <q-card-section class="q-pt-sm">
              <div>Transfer Pembayaran Ke No.Rekening :</div>
              <div class="row">
                <div class="text-center self-center col-2">
                  <img src="~/assets/bni.png" style="width: 100%" />
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div class="text-black" style="font-size: 16px">
                    a.n/ Ardian Rizky Rahmawan
                  </div>
                  <div class="text-black">0262628673</div>
                </div>
              </div>
              <q-btn
                no-caps
                rounded
                text-color="white"
                label="Salin No Rekening"
                style="background-color: #ddca1d"
              />
            </q-card-section>

            <q-separator color="grey" class="q-mx-sm" />

            <q-card-section class="q-pt-sm">
              <div>Jumlah Yang Harus Dibayarkan :</div>
              <div class="text-h6">
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(paymentPackageData.price)
                }}
              </div>
              <div>
                Unggah Bukti Pembayaran Jika Anda Salah Input No.Rekening
              </div>
            </q-card-section>

            <q-card-actions align="left">
              <q-btn
                flat
                label="Proses Pesanan"
                @click="payment2 = true"
                rounded
                style="background-color: #6295ff"
                color="white"
                v-close-popup
              />
              <q-btn
                flat
                label="Batal"
                rounded
                style="background-color: #7e8385"
                color="white"
                v-close-popup
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="payment2" persistent position="bottom">
          <q-card>
            <q-card-section class="text-center">
              <div class="text-black">
                Segera lakukan pembayaran dalam waktu :
              </div>
            </q-card-section>
            <q-card-section
              class="text-center"
              style="background-color: #b43f3f"
            >
              <div class="text-white">
                Layanan pembayaran Anda akan berakhir dalam : 24 Jam <br />
                Jika melebihi 24 Jam Maka akan EXPIRED!
              </div>
            </q-card-section>
            <q-card-section class="q-pt-sm">
              <div>Kode Pembayaran :</div>
              <div class="text-h6">0262628673</div>
              <q-btn no-caps style="background-color: #ddca1d">
                <q-avatar square size="15px">
                  <q-img src="~/assets/cp.png" />
                </q-avatar>
              </q-btn>

              <div>Jumlah Yang Harus Dibayarkan :</div>
              <div class="text-h6">
                {{
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(paymentPackageData.price)
                }}
              </div>
            </q-card-section>

            <q-card-actions align="left">
              <q-btn
                @click="
                  (payment3 = true) & this.addPackage() & this.getCurrentDate()
                "
                flat
                label="Proses Pesanan"
                rounded
                style="background-color: #6295ff"
                color="white"
                v-close-popup
              />
              <q-btn
                flat
                label="Batal"
                rounded
                style="background-color: #7e8385"
                color="white"
                v-close-popup
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="payment3" persistent>
          <q-card style="border-radius: 24px">
            <q-card-section class="text-center">
              <div class="text-black">
                <q-img src="~/assets/ctg2.png" width="60%" />
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-center text-black text-weight-bold">
                Pembaaran Berhasil
              </div>
              <div
                v-if="this.currentDate != null"
                class="text-center text-black"
              >
                {{ currentDate }}
              </div>
              <q-separator />
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>{{ this.Auth.auth.name }}</q-item-label>
                  <!--<q-item-label caption>No. anggota 1234567</q-item-label>-->
                </q-item-section>
              </q-item>
              <q-separator />
              <div style="color: #8b8484">Transfer Ke:</div>
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/bnk.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label caption class="text-black"
                    >a.n/Ardian Rizky Rahmawan</q-item-label
                  >
                  <q-item-label class="text-weight-bold"
                    >0262628673</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-card-section>

            <q-card-actions align="left">
              <q-btn
                flat
                rounded
                style="background-color: #6295ff"
                v-close-popup
              >
                <div class="q-mx-sm" style="color: #fff">Selesai</div>
              </q-btn>
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
  computed: {
    ...mapState(["Auth"]),
  },
  data() {
    return {
      payment1: ref(false),
      payment2: ref(false),
      payment3: ref(false),

      packageData: null,
      paymentPackageData: null,

      currentDate: null,
    };
  },
  mounted() {
    console.log("dataAuth", this.Auth.auth);
    this.getPackages();
  },
  methods: {
    getCurrentDate() {
      this.currentDate = null;
      this.currentDate = moment()
        .locale("ID")
        .format("dddd, MMMM Do YYYY, h:mm:ss a");
    },
    addPackage() {
      // console.log("ini formdata", this.paymentPackageData);

      this.$store
        .dispatch("MasterPayment/store", this.paymentPackageData)
        .then((res) => {
          console.log("ini res sudah bayar", res.data);
        })
        .catch((err) => {
          console.log("terjadi kesalahan addPackage", err);
        });
    },
    nextPayment(data) {
      this.paymentPackageData = null;
      this.paymentPackageData = data;
      console.log("data", data);
      this.payment1 = true;
    },
    getPackages() {
      this.$store
        .dispatch("MasterOrders/getPackages")
        .then((res) => {
          console.log("ini res getPackages", res);
          this.packageData = res.data;
        })
        .catch((err) => {
          console.log("terjadi kesalahan getPackages", err);
        });
    },
  },
};
</script>

<style>
.bgCardTop {
  background-image: linear-gradient(to bottom right, #00c6ff, #0072ff);
}
</style>
