<template  view="lHh lpR fFf" >
  <q-layout class="mbl" style="background-color: #fafafa">
    <q-page>
      <!--Header Pagi-->
      <div
      v-if="d >= 0 && d <= 10"
        class="row"
        style="
          min-height: 220px;
          background-image: linear-gradient(to top right,#ffffff,#ffecc1,#b4e6ea);
        "
      >
        <div class="row full-width">
          <!--Waktu sekarang-->
          <div class="q-py-md" style="height: 80px; min-width: 75vw">
            <div
              class="row full-width bg-white q-pr-xs shadow-3 mbl-child"
              style="
                width: 80px;
                height: 50px;
                border-radius: 0px 50px 50px 0px;
              "
            >
              <!--Image-->
              <div class="self-center">
                <q-img
                  no-spinner
                  src="~/assets/cuaca-pagi.svg"
                  style="width: 80px; height: 50px"
                ></q-img>
              </div>
              <div
                class="row col justify-end"
                style="border-radius: 0px 50px 50px 0px"
              >
                <!--Text-->
                <div class="self-center">
                  <div
                    class="text-weight-bold"
                    style="color: #ffa85a; font-size: 15px"
                  >
                    Selamat Pagi
                  </div>
                  <div
                    class="text-weight-medium"
                    style="color: #313131; font-size: 13px"
                  >
                    IndonesiaLaundry
                  </div>
                </div>

                <!--Avatar-->
                <div class="self-center q-pl-sm">
                  <q-avatar>
                    <q-img
                      no-spinner
                      src="~/assets/Avatar.png"
                      size="40px"
                    ></q-img>
                  </q-avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--info saldo-->
        <div
          class="full-width row bg-white"
          style="opacity: 0.8; height: 100px"
        >
          <div
            class="col-6 q-px-sm self-center"
            style="
              border-right: solid;
              border-width: 2px;
              border-color: #f3f3f3;
              opacity: 1;
            "
          >
            <div class="full-width">
              <div
                class="text-weight-medium"
                style="color: #313131; font-size: 15px"
              >
                Saldo masuk hari ini
              </div>
              <div
                class="text-weight-medium"
                style="color: #a3a3a3; font-size: 12px"
              >
                {{ moment().format("DD MMMM YYYY") }}
              </div>
              <div
                class="text-weight-bold"
                style="color: #313131; font-size: 18px"
              >
                Rp 1.000.000,00
              </div>
            </div>
          </div>
          <div class="col-6 q-px-sm self-center" style="opacity: 1">
            <div class="full-width">
              <div
                class="text-weight-medium"
                style="color: #313131; font-size: 15px"
              >
                Saldo keluar hari ini
              </div>
              <div
                class="text-weight-medium"
                style="color: #a3a3a3; font-size: 12px"
              >
                {{ moment().format("DD MMMM YYYY") }}
              </div>
              <div
                class="text-weight-bold"
                style="color: #313131; font-size: 18px"
              >
                Rp 0
              </div>
            </div>
          </div>
        </div>

        <!-- Scan Area -->
        <div class="row full-width">
          <div class="col-6">
            <q-btn
              style="
                background-image: linear-gradient(to bottom right,#f6d365,#fda085);
                width: 100%;
                height: 50px;
                color: white;
              "
              flat
              no-caps
            >
              <div class="row self-center">
                <q-img
                  no-spinner
                  src="~/assets/icon_scan_button.svg"
                  class="self-center"
                  style="width: 40px"
                ></q-img>
                <div
                  class="text-weight-medium self-center q-pl-sm"
                  style="color: white; font-size: 14px"
                >
                  Scan Absen
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col-6">
            <q-btn
              style="
                background-image: linear-gradient(to bottom right,#4ecebf,#3fafb6);
                width: 100%;
                height: 50px;
                color: white;
              "
              flat
              no-caps
            >
              <div class="row self-center">
                <q-img
                  no-spinner
                  src="~/assets/icon_scan_barcode.svg"
                  class="self-center justify-center"
                  style="width: 50px; height: 40px; color: white"
                ></q-img>
                <div
                  class="text-weight-medium self-center q-pl-sm"
                  style="color: white; font-size: 14px"
                >
                  Scan Barang
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>

      <!--Header Siang-->
      <div
      v-else-if="d >= 11 && d <= 17"
        class="row"
        style="
          min-height: 220px;
          background-image: linear-gradient(to top right,#ffffff,#70C7E2,#4CA6E5);
        "
      >
        <div class="row full-width">
          <!--Waktu sekarang-->
          <div class="q-py-md" style="height: 80px; min-width: 75vw">
            <div
              class="row full-width bg-white q-pr-xs shadow-3 mbl-child"
              style="
                width: 80px;
                height: 50px;
                border-radius: 0px 50px 50px 0px;
              "
            >
              <!--Image-->
              <div class="self-center">
                <q-img
                  no-spinner
                  src="~/assets/cuaca_siang.svg"
                  style="width: 80px; height: 50px"
                ></q-img>
              </div>
              <div
                class="row col justify-end"
                style="border-radius: 0px 50px 50px 0px"
              >
                <!--Text-->
                <div class="self-center">
                  <div
                    class="text-weight-bold"
                    style="color: #70C7E2; font-size: 15px"
                  >
                    Selamat Siang
                  </div>
                  <div
                    class="text-weight-medium"
                    style="color: #313131; font-size: 13px"
                  >
                    IndonesiaLaundry
                  </div>
                </div>

                <!--Avatar-->
                <div class="self-center q-pl-sm">
                  <q-avatar>
                    <q-img
                      no-spinner
                      src="~/assets/Avatar.png"
                      size="40px"
                    ></q-img>
                  </q-avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--info saldo-->
        <div
          class="full-width row bg-white"
          style="opacity: 0.8; height: 100px"
        >
          <div
            class="col-6 q-px-sm self-center"
            style="
              border-right: solid;
              border-width: 2px;
              border-color: #f3f3f3;
              opacity: 1;
            "
          >
            <div class="full-width">
              <div
                class="text-weight-medium"
                style="color: #313131; font-size: 15px"
              >
                Saldo masuk hari ini
              </div>
              <div
                class="text-weight-medium"
                style="color: #a3a3a3; font-size: 12px"
              >
                {{ moment().locale('ID').format("dddd, DD MMMM YYYY") }}
              </div>
              <div
                class="text-weight-bold"
                style="color: #313131; font-size: 18px"
              >
                Rp 1.000.000,00
              </div>
            </div>
          </div>
          <div class="col-6 q-px-sm self-center" style="opacity: 1">
            <div class="full-width">
              <div
                class="text-weight-medium"
                style="color: #313131; font-size: 15px"
              >
                Saldo keluar hari ini
              </div>
              <div
                class="text-weight-medium"
                style="color: #a3a3a3; font-size: 12px"
              >
                {{ moment().locale('ID').format("dddd, DD MMMM YYYY") }}
              </div>
              <div
                class="text-weight-bold"
                style="color: #313131; font-size: 18px"
              >
                Rp 0
              </div>
            </div>
          </div>
        </div>

        <!-- Scan Area -->
        <div class="row full-width">
          <div class="col-6">
            <q-btn
              style="
                background-image: linear-gradient(to bottom right,#f6d365,#fda085);
                width: 100%;
                height: 50px;
                color: white;
              "
              flat
              no-caps
            >
              <div class="row self-center">
                <q-img
                  no-spinner
                  src="~/assets/icon_scan_button.svg"
                  class="self-center"
                  style="width: 40px"
                ></q-img>
                <div
                  class="text-weight-medium self-center q-pl-sm"
                  style="color: white; font-size: 14px"
                >
                  Scan Absen
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col-6">
            <q-btn
              style="
                background-image: linear-gradient(to bottom right,#4ecebf,#3fafb6);
                width: 100%;
                height: 50px;
                color: white;
              "
              flat
              no-caps
            >
              <div class="row self-center">
                <q-img
                  no-spinner
                  src="~/assets/icon_scan_barcode.svg"
                  class="self-center justify-center"
                  style="width: 50px; height: 40px; color: white"
                ></q-img>
                <div
                  class="text-weight-medium self-center q-pl-sm"
                  style="color: white; font-size: 14px"
                >
                  Scan Barang
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>

      <!--Header Malam-->
      <div
      v-else-if="d >= 18 && d <= 23"
        class="row"
        style="
          min-height: 220px;
          background-image: linear-gradient(to top right,#ffffff,#505483,#000650);
        "
      >
        <div class="row full-width">
          <!--Waktu sekarang-->
          <div class="q-py-md" style="height: 80px; min-width: 75vw">
            <div
              class="row full-width bg-white q-pr-xs shadow-3 mbl-child"
              style="
                width: 80px;
                height: 50px;
                border-radius: 0px 50px 50px 0px;
              "
            >
              <!--Image-->
              <div class="self-center">
                <q-img
                  no-spinner
                  src="~/assets/cuaca_malam.svg"
                  style="width: 80px; height: 50px"
                ></q-img>
              </div>
              <div
                class="row col justify-end"
                style="border-radius: 0px 50px 50px 0px"
              >
                <!--Text-->
                <div class="self-center">
                  <div
                    class="text-weight-bold"
                    style="color: #515583; font-size: 15px"
                  >
                    Selamat Malam
                  </div>
                  <div
                    class="text-weight-medium"
                    style="color: #313131; font-size: 13px"
                  >
                    IndonesiaLaundry
                  </div>
                </div>

                <!--Avatar-->
                <div class="self-center q-pl-sm">
                  <q-avatar>
                    <q-img
                      no-spinner
                      src="~/assets/Avatar.png"
                      size="40px"
                    ></q-img>
                  </q-avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--info saldo-->
        <div
          class="full-width row bg-white"
          style="opacity: 0.8; height: 100px"
        >
          <div
            class="col-6 q-px-sm self-center"
            style="
              border-right: solid;
              border-width: 2px;
              border-color: #f3f3f3;
              opacity: 1;
            "
          >
            <div class="full-width">
              <div
                class="text-weight-medium"
                style="color: #313131; font-size: 15px"
              >
                Saldo masuk hari ini
              </div>
              <div
                class="text-weight-medium"
                style="color: #a3a3a3; font-size: 12px"
              >
                {{ moment().locale('ID').format("dddd, DD MMMM YYYY") }}
              </div>
              <div
                class="text-weight-bold"
                style="color: #313131; font-size: 18px"
              >
                Rp 1.000.000,00
              </div>
            </div>
          </div>
          <div class="col-6 q-px-sm self-center" style="opacity: 1">
            <div class="full-width">
              <div
                class="text-weight-medium"
                style="color: #313131; font-size: 15px"
              >
                Saldo keluar hari ini
              </div>
              <div
                class="text-weight-medium"
                style="color: #a3a3a3; font-size: 12px"
              >
                {{ moment().locale('ID').format("dddd, DD MMMM YYYY") }}
              </div>
              <div
                class="text-weight-bold"
                style="color: #313131; font-size: 18px"
              >
                Rp 0
              </div>
            </div>
          </div>
        </div>

        <!-- Scan Area -->
        <div class="row full-width">
          <div class="col-6">
            <q-btn
              style="
                background-image: linear-gradient(to bottom right,#f6d365,#fda085);
                width: 100%;
                height: 50px;
                color: white;
              "
              flat
              no-caps
            >
              <div class="row self-center">
                <q-img
                  no-spinner
                  src="~/assets/icon_scan_button.svg"
                  class="self-center"
                  style="width: 40px"
                ></q-img>
                <div
                  class="text-weight-medium self-center q-pl-sm"
                  style="color: white; font-size: 14px"
                >
                  Scan Absen
                </div>
              </div>
            </q-btn>
          </div>
          <div class="col-6">
            <q-btn
              style="
                background-image: linear-gradient(to bottom right,#4ecebf,#3fafb6);
                width: 100%;
                height: 50px;
                color: white;
              "
              flat
              no-caps
            >
              <div class="row self-center">
                <q-img
                  no-spinner
                  src="~/assets/icon_scan_barcode.svg"
                  class="self-center justify-center"
                  style="width: 50px; height: 40px; color: white"
                ></q-img>
                <div
                  class="text-weight-medium self-center q-pl-sm"
                  style="color: white; font-size: 14px"
                >
                  Scan Barang
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>

      <!-- Transaksi Hari ini -->
      <div class="shadow-1 bg-white q-mt-sm q-pa-md">
        <q-btn class="full-width" flat no-caps dense @click="$router.push('/transaction')">
          <div class="row full-width self-center">
            <div
              class="col-6 text-weight-medium text-left self-center"
              style="color: #313131; font-size: 15px"
            >
              Transaksi hari ini
            </div>
            <div class="col-6 self-center text-right">
              <q-icon
                name="fas fa-angle-right"
                size="20px"
                color="black"
              ></q-icon>
            </div>
          </div>
        </q-btn>
        <div
          class="text-weight-medium q-pl-xs"
          style="color: #a3a3a3; font-size: 12px"
        >
          {{ moment().locale('ID').format("dddd, DD MMMM YYYY") }}
        </div>
        <div
          class="row q-mt-md"
          style="background-color: #ebebeb; border-radius: 5px"
        >
          <div
            class="text-weight-medium q-pa-sm"
            style="color: #313131; font-size: 15px"
          >
            10 Pesanan baru
          </div>
        </div>
      </div>

      <!-- Komunitas -->
      <div class="q-mt-xs q-pa-md" style="background-color: white">
        <div class="q-pb-xs text-weight-medium">Komunitas</div>
        <div class="row">
          <!--Button Kursus-->
          <div class="col-4 text-center q-px-xs" style="height: 150px">
            <q-btn
            @click="$router.push('/course-of-home')"
              no-caps
              class="shadow-2 q-px-md full-height full-width"
              style="border-radius: 10px"
            >
              <div class="self-center text-center full-height">
                <div class="q-pt-lg">
                  <q-img
                    no-spinner
                    src="~/assets/button_kursus.svg"
                    width="50px"
                    height="50px"
                  >
                  </q-img>
                </div>

                <div
                  class="text-weight-medium q-pt-md text-center"
                  style="color: #31313; font-size: 15px"
                >
                  Kursus
                </div>
              </div>
            </q-btn>
          </div>
          <!--Button Postingan-->
          <div class="col-4 text-center q-px-xs" style="height: 150px">
            <q-btn
            @click="$router.push('/community')"
              no-caps
              class="shadow-2 q-px-md full-height full-width"
              style="border-radius: 10px"
            >
              <div class="self-center text-center full-height">
                <div class="q-pt-lg">
                  <q-img
                    no-spinner
                    src="~/assets/button_post.svg"
                    width="35px"
                    height="50px"
                  >
                  </q-img>
                </div>

                <div
                  class="text-weight-medium q-pt-md text-center"
                  style="color: #31313; font-size: 15px"
                >
                  Postingan
                </div>
              </div>
            </q-btn>
          </div>
          <!--Button Marketplace-->
          <div class="col-4 text-center q-px-xs" style="height: 150px">
            <q-btn
            @click="$router.push('/marketplace-home')"
              no-caps
              class="shadow-2 q-px-md full-height full-width"
              style="border-radius: 10px"
            >
              <div class="self-center text-center full-height">
                <div class="q-pt-lg">
                  <q-img
                    no-spinner
                    src="~/assets/button_marketplace.svg"
                    width="50px"
                    height="50px"
                  >
                  </q-img>
                </div>

                <div
                  class="text-weight-medium q-pt-md text-center"
                  style="color: #31313; font-size: 15px"
                >
                  Marketplace
                </div>
              </div>
            </q-btn>
          </div>
        </div>
      </div>

      <!--Kategori Layanan-->
      <div class="full-width">
        <q-img no-spinner src="~/assets/bg_kategori_layanan_new.svg" width="100vw" height="220px" class="row full-width">
          <div
            class="
              row
              full-width
              full-height
              bg-transparent
              justify-end
              q-pa-none
              self-center
            "
          >
            <div class="col-2 bg-transparent self-start">
              <q-img no-spinner src="~/assets/logo_kategori_layanan.svg" width="70px" ></q-img>
            </div>
            <div class="col-5 bg-transparent text-center justify-center self-center" style="border-radius: 10px">
            
                <q-img @click="$router.push('/add-clothes')" no-spinner src="~/assets/card_item.svg" ></q-img>
                
            </div>
            <div class="col-5 bg-transparent self-center" style="border-radius: 20px">
                <q-img @click="$router.push('/package-list-first')" no-spinner src="~/assets/card_layanan.svg" width="100%" height="100%"></q-img>
            </div>
              

          </div>
        </q-img>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import moment from "moment";
import { mapState } from "vuex";

export default {
  name: "HomePage",
  keepalive: true,
  computed: {
    ...mapState(["Auth", "Orders"]),
  },

  data() {
    return {
      d: null,
    }
  },

  mounted() {
    this.timeChecker();
  },

  methods: {
    moment,
    timeChecker() {
      this.d = new Date().getHours();
      // console.log(this.d.getHours() > 10 && this.d.getHours() < 17)
    },
  },

};
</script>

<style>
</style>