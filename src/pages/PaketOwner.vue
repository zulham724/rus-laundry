<template>
  <q-layout  class="mbl" view="lHh lpR fFf">
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
              Paket
            </div>
            <div class="col-4 self-center text-right q-px-sm"></div>
          </div>
        </q-header>
      </div>
      <q-page>
        <div v-for="q in 5" :key="q" class="q-px-sm q-py-sm">
          <q-card class="bgCard" style="border-radius: 10px">
            <div class="bgCardTop text-h6 text-white text-center q-py-sm">
              Paket Reguler
            </div>
            <div class="q-px-sm">
              <div class="row q-py-xs">
                <div class="text-center self-center col-2">
                  <img src="~/assets/dm.png" />
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div>1 Cabang</div>
                </div>
              </div>
              <div class="row q-py-xs">
                <div class="text-center self-center col-2">
                  <img src="~/assets/dm.png" />
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div>1Unlimited Transaksi</div>
                </div>
              </div>
              <div class="row q-py-xs">
                <div class="text-center self-center col-2">
                  <img src="~/assets/dm.png" />
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div>Unlimited Employee</div>
                </div>
              </div>
              <div class="row q-py-xs">
                <div class="text-center self-center col-2">
                  <img src="~/assets/dm.png" />
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div>Unlimited Customer</div>
                </div>
              </div>
              <div class="row q-py-xs">
                <div class="text-center self-center col-2">
                  <img src="~/assets/dm.png" />
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div>3 Paket</div>
                </div>
              </div>
              <div class="row q-py-xs">
                <div class="text-center self-center col-2">
                  <img src="~/assets/cs.png" />
                </div>
                <div class="q-pl-sm col-10 text-h6 text-grey self-center">
                  <div>Rp 1.000.000</div>
                </div>
              </div>
            </div>

            <q-btn
              no-caps
              @click="payment1 = true"
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
                    a.n/ Aryoseto Wahyatma Bryan Hisyam
                  </div>
                  <div class="text-black">3047530475036506034</div>
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
              <div class="text-h6">Rp 1.000.000</div>
              <div>
                Unggah Bukti Pembayaran Jika Anda Salah Input No.Rekening
              </div>
            </q-card-section>

            <q-card-actions align="left">
              <q-btn
                flat
                label="Konfirmasi"
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
              <div class="text-h6">3047530475036506034</div>
              <q-btn no-caps style="background-color: #ddca1d">
                <q-avatar square size="15px">
                  <q-img src="~/assets/cp.png" />
                </q-avatar>
              </q-btn>

              <div>Jumlah Yang Harus Dibayarkan :</div>
              <div class="text-h6">Rp 1.000.000</div>
            </q-card-section>

            <q-card-actions align="left">
              <q-btn
                @click="payment3 = true"
                flat
                label="Konfirmasi"
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
                  <q-img src="~/assets/ctg2.png" width="60%"/>
              </div>
            </q-card-section>
            <q-card-section>
              <div class="text-center text-black text-weight-bold">
                Pembaaran Berhasil
              </div>
              <div class="text-center text-black">15 Maret 2022 14:44 WIB</div>
              <q-separator />
              <q-item>
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label>Lintangsssss</q-item-label>
                  <q-item-label caption>No. anggota 1234567</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator />
              <div style="color: #8B8484">Transfer Ke:</div>
              <q-item>
                
                <q-item-section top avatar>
                  <q-avatar>
                    <img src="~/assets/bnk.svg" />
                  </q-avatar>
                </q-item-section>

                <q-item-section>
                  <q-item-label caption class="text-black">a.n/Aryoseto Wahyatma  Bryan Hisyam</q-item-label>
                  <q-item-label class="text-weight-bold" >3047530475036506034</q-item-label>
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
                <div class="q-mx-sm" style="color:#fff">
                  Selesai
                </div>
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

export default {
  data() {
    return {
      payment1: ref(false),
      payment2: ref(false),
      payment3: ref(false),
    };
  },
  mounted() {},
};
</script>

<style>
.bgCardTop {
  background-image: linear-gradient(to bottom right, #00c6ff, #0072ff);
}
</style>
