<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div class="text-center bg-transparent">
          <!-- Header Image -->
          <q-img src="~/assets/header-mesin-cuci.svg">
            <q-toolbar class="bg-transparent">
              <q-btn flat round size="10px" to="/home">
                <q-avatar
                  size="25px"
                  icon="fas fa-arrow-left"
                  style="color: #888888"
                >
                </q-avatar>
              </q-btn>
              <q-toolbar-title
                class="text-left text-weight-medium"
                style="color: #888888; font-size: 16px"
                >Detail Pesanan</q-toolbar-title
              >
            </q-toolbar>
          </q-img>
        </div>
        <q-page
          class="front"
          style="
            border-radius: 30px;
            background-color: white;
            margin-top: -35px;
            position: relative;
          "
        >
          <!-- Button Share -->
          <div class="float-right q-mr-md q-mt-sm">
            <q-btn round size="15px" ripple flat @click="buttonShare()">
              <q-avatar size="20px" icon="fas fa-share-alt"></q-avatar>
            </q-btn>
          </div>

          <!-- No Pesanan  -->
          <div class="row q-pt-md q-pl-lg">
            <div class="text-weight-regular" style="color: #c9c9c9">
              No Pesanan
            </div>
          </div>
          <div class="row">
            <div class="q-pl-lg text-weight-regular" style="color: #313131">
              211228BH7A4AA
            </div>
          </div>

          <!-- List Isi -->
          <q-list
            separator
            style="background-color: #ffffff"
            class="q-my-xs q-mx-md"
          >
            <q-item class="q-my-sm">
              <q-item-section class="self-center">
                <q-item-label
                  class="text-weight-regular"
                  style="color: #c9c9c9; font-size: 12px"
                  >Nama Pelanggan</q-item-label
                >
                <q-item-label
                  caption
                  lines="1"
                  class="text-weight-bold"
                  style="font-size: 14px"
                  >Alif</q-item-label
                >
              </q-item-section>
              <q-space></q-space>
              <q-item-section avatar>
                <q-avatar size="30px" class="bg-transparent">
                  <img src="~/assets/id-card-detail.svg" style="width: 5vh" />
                </q-avatar>
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm">
              <q-item-section class="self-center">
                <q-item-label
                  class="text-weight-regular"
                  style="color: #c9c9c9; font-size: 12px"
                  >No Telephone</q-item-label
                >
                <q-item-label
                  caption
                  lines="1"
                  class="text-weight-bold"
                  style="font-size: 14px"
                  >087831409898</q-item-label
                >
              </q-item-section>
              <q-space></q-space>
              <q-item-section avatar>
                <q-avatar size="30px" class="bg-transparent">
                  <img src="~/assets/icon-telpon.svg" style="width: 5vh" />
                </q-avatar>
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm">
              <q-item-section class="self-center">
                <q-item-label
                  class="text-weight-regular"
                  style="color: #c9c9c9; font-size: 12px"
                  >Estimasi Pesanan</q-item-label
                >
                <q-item-label
                  caption
                  lines="1"
                  class="text-weight-bold"
                  style="font-size: 14px"
                  >2 Hari</q-item-label
                >
              </q-item-section>
              <q-space></q-space>
              <q-item-section avatar>
                <q-avatar size="30px" class="bg-transparent">
                  <img src="~/assets/icon-kalender.svg" style="width: 5vh" />
                </q-avatar>
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm">
              <q-item-section class="self-center">
                <q-item-label
                  class="text-weight-regular"
                  style="color: #c9c9c9; font-size: 12px"
                  >Paket</q-item-label
                >
                <q-item-label
                  caption
                  lines="1"
                  class="text-weight-bold"
                  style="font-size: 14px"
                  >Reguler kering + setrika</q-item-label
                >
              </q-item-section>
              <q-space></q-space>
              <q-item-section avatar>
                <q-avatar size="30px" class="bg-transparent">
                  <img src="~/assets/icon-cuci-detail.svg" style="width: 5vh" />
                </q-avatar>
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm">
              <q-item-section class="self-center">
                <q-item-label
                  class="text-weight-regular"
                  style="color: #c9c9c9; font-size: 12px"
                  >Jenis Pakaian</q-item-label
                >
                <q-item-label
                  caption
                  lines="1"
                  class="text-weight-bold"
                  style="font-size: 14px"
                  >Pakaian Halus</q-item-label
                >
              </q-item-section>
              <q-space></q-space>
              <q-item-section avatar>
                <q-avatar size="30px" class="bg-transparent">
                  <img src="~/assets/icon-baju.svg" />
                </q-avatar>
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm">
              <q-item-section class="self-center">
                <q-item-label
                  class="text-weight-regular"
                  style="color: #c9c9c9; font-size: 12px"
                  >Berat</q-item-label
                >
                <q-item-label
                  caption
                  lines="1"
                  class="text-weight-bold"
                  style="font-size: 14px"
                  >5 kg</q-item-label
                >
              </q-item-section>
              <q-space></q-space>
              <q-item-section avatar>
                <q-avatar size="30px" class="bg-transparent">
                  <img src="~/assets/icon-kilogram.svg" style="width: 5vh" />
                </q-avatar>
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm">
              <q-item-section class="self-center q-mt-xl">
                <q-item-label
                  caption
                  lines="1"
                  class="text-weight-bold"
                  style="font-size: 14px"
                  >Paket Lainnya</q-item-label
                >
              </q-item-section>

              <!-- Button Paket Lainnya -->
              <q-item-section avatar class="q-mt-xl">
                <q-btn round flat>
                  <q-avatar size="30px" class="bg-transparent">
                    <img
                      src="~/assets/icon-status-cucian.svg"
                      style="width: 5vh"
                    />
                  </q-avatar>
                </q-btn>
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm">
              <q-item-section class="self-center">
                <q-item-label
                  caption
                  lines="1"
                  class="text-weight-bold"
                  style="font-size: 14px"
                  >Status Cucian</q-item-label
                >
              </q-item-section>

              <!-- Button Status Cucian -->

              <q-item-section avatar>
                <q-btn round flat to="/status-cucian">
                  <q-avatar size="30px" class="bg-transparent">
                    <img
                      src="~/assets/icon-status-cucian.svg"
                      style="width: 5vh"
                    />
                  </q-avatar>
                </q-btn>
              </q-item-section>
            </q-item>
            <q-item class="q-my-sm">
              <q-item-section class="self-center">
                <q-item-label
                  class="text-weight-regular q-pt-md"
                  style="color: #c9c9c9; font-size: 15px"
                  >Status Pembayaran</q-item-label
                >
                <q-item-label
                  caption
                  lines="1"
                  class="text-weight-bold"
                  style="font-size: 14px"
                  >Tertunda</q-item-label
                >
              </q-item-section>
              <q-space></q-space>
              <q-item-section class="self-center" side>
                <q-item-label
                  class="text-weight-regular q-pt-md"
                  style="color: #c9c9c9; font-size: 15px"
                  >Harga</q-item-label
                >
                <q-item-label
                  caption
                  lines="1"
                  class="text-weight-bold"
                  style="font-size: 14px"
                  >Rp 25.000</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
          <q-btn
            @click="buttonConfirm()"
            no-caps
            class="full-width q-mt-sm"
            style="background-color: #49c2c0; color: #fafafa"
          >
            <div class="q-py-sm text-weight-regular">Konfirmasi Pesanan</div>
          </q-btn>

          <q-dialog v-model="dialogConfirm">
            <q-card>
              <q-card-section>
                <div
                  class="text-weight-bold text-center"
                  style="font-size: 16px"
                >
                  Konfirmasi pesanan ini?
                </div>
              </q-card-section>

              <q-card-section>
                <div
                  class="text-weight-light text-center q-mt-none"
                  style="width: 300px"
                >
                  Transaksi akan diproses selesai dan pelanggan harus membayar
                  sesuai harga yang tertera
                </div>
              </q-card-section>

              <q-card-actions class="text-primary" vertical>
                <q-btn
                  to="/invoice-page"
                  no-caps
                  flat
                  label="Konfirmasi Transaksi"
                  style="background-color: #49c2c0; color: white"
                />
                <q-btn
                  no-caps
                  flat
                  label="Batal"
                  style="color: #888888"
                  v-close-popup
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </q-page>
        <!-- Button Share Click -->
        <q-dialog v-model="dialogShare" position="bottom">
          <q-card class="justify-center full-width">
            <q-card-section class="items-center no-wrap">
              <q-card flat class="my-card">
                <div class="row">
                  <div
                    class="col-8 text-subtitle1 text-weight-medium text-left"
                    style="font-family: roboto; font-size: 18px"
                  >
                    Share Media
                  </div>
                  <!-- Button Close -->
                  <div class="col-4 text-right">
                    <q-btn
                      flat
                      round
                      v-ripple
                      style="background-color: transparent"
                      v-close-popup
                    >
                      <q-avatar
                        icon="far fa-times-circle"
                        size="30px"
                      ></q-avatar>
                    </q-btn>
                  </div>
                </div>

                <q-separator size="1px" />
                <div
                  class="q-pa-sm text-subtitle1"
                  style="margin-left: -10px; font-size: 14px"
                >
                  Share this link via
                </div>

                <div class="row justify-center">
                  <!-- Button Facebook -->
                  <q-btn
                    round
                    size="20px"
                    outline
                    color="primary"
                    class="q-mx-xs"
                  >
                    <q-avatar icon="fab fa-facebook-f" size="30px"></q-avatar>
                  </q-btn>

                  <!-- Button Instagram -->
                  <q-btn
                    round
                    size="20px"
                    outline
                    color="pink-9"
                    class="q-mx-xs"
                  >
                    <q-avatar icon="fab fa-instagram" size="30px"></q-avatar>
                  </q-btn>

                  <!-- Button WhatsApp -->
                  <q-btn
                    round
                    size="20px"
                    outline
                    color="green-8"
                    class="q-mx-xs"
                  >
                    <q-avatar icon="fab fa-whatsapp" size="30px"></q-avatar>
                  </q-btn>

                  <!-- Button Telegram -->
                  <q-btn round size="20px" outline color="blue" class="q-mx-xs">
                    <q-avatar
                      icon="fab fa-telegram-plane"
                      size="30px"
                    ></q-avatar>
                  </q-btn>
                </div>

                <!-- Link Share -->
                <q-card-actions class="justify-center">
                  <div class="q-py-sm">Or copy link</div>
                  <q-input
                    class="full-width justify-center"
                    outlined
                    bg-color="transparent"
                    v-model="link"
                  >
                    <q-btn
                      class="self-center q-px-xl"
                      label="Copy"
                      color="deep-purple-13"
                    />
                    <template v-slot:prepend>
                      <q-icon name="fas fa-link" />
                    </template>
                  </q-input>
                </q-card-actions>
              </q-card>
              <q-space />
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      dialogShare: false,
      dialogConfirm: false,
      link: "example.com/share-link",
    };
  },

  methods: {
    buttonShare() {
      this.dialogShare = true;
    },
    buttonConfirm() {
      this.dialogConfirm = true;
    },
  },
};
</script>

<style></style>
