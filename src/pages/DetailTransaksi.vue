<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <!-- Header Image -->
        <div class="text-center bg-transparent" style="margin-left: -34px">
          <q-img src="~/assets/header-mesincuci.png" class="q-mr-md"> </q-img>
        </div>
        <!-- Button Back, No Pesanan, Button Share -->
        <q-card class="q-my-xs" flat>
          <q-card-actions class="text-center">
            <q-btn
              class="q-ml-xs"
              ripple="false"
              flat
              icon="fas fa-arrow-left"
              style="color: #888888; width: 5vw"
              to="/home"
            >
            </q-btn>
            <q-space></q-space>
            <div
              class="q-mr-xl text-weight-light"
              style="font-size: 2vh; font-family: roboto"
            >
              NO. PESANAN.211228BH7A4AA
            </div>

            <q-btn
              ripple="false"
              flat
              class="q-pa-xs q-mr-xs absolute-right"
              @click="buttonShare()"
            >
              <img src="~/assets/icon-share.svg" style="width: 5vw" />
            </q-btn>
          </q-card-actions>
        </q-card>
        <!-- Progress Pakaian -->
        <q-card flat style="background-color: #ffffff">
          <q-card-actions vertical>
            <q-list
              class="text-black bordered"
              style="max-width: 100vw; width: 100%; background-color: #ffffff"
            >
              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="~/assets/id-card-detail.svg" style="width: 5vh" />
                  </q-avatar>
                </q-item-section>
                <q-item-section style="font-size: 2vh">Hisyam</q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="~/assets/icon-telpon.svg" style="width: 5vh" />
                  </q-avatar>
                </q-item-section>
                <q-item-section style="font-size: 2vh"
                  >087583452474</q-item-section
                >
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="~/assets/icon-kalender.svg" style="width: 5vh" />
                  </q-avatar>
                </q-item-section>
                <q-item-section style="font-size: 2vh"
                  >24,12,2022 - 26,12,2022</q-item-section
                >
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img
                      src="~/assets/icon-cuci-detail.svg"
                      style="width: 5vh"
                    />
                  </q-avatar>
                </q-item-section>
                <q-item-section style="font-size: 2vh"
                  >Cuci Kilat</q-item-section
                >
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="~/assets/icon-payment.svg" style="width: 5vh" />
                  </q-avatar>
                </q-item-section>
                <q-item-section style="font-size: 2vh">Tertunda</q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="~/assets/icon-baju.svg" style="width: 5vh" />
                  </q-avatar>
                </q-item-section>
                <q-item-section style="font-size: 2vh"
                  >Baju dan sarung
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="~/assets/icon-tag-harga.svg" style="width: 5vh" />
                  </q-avatar>
                </q-item-section>
                <q-item-section style="font-size: 2vh">20.000</q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-avatar>
                    <img src="~/assets/icon-kilogram.svg" style="width: 5vh" />
                  </q-avatar>
                </q-item-section>
                <q-item-section style="font-size: 2vh">4kg</q-item-section>
              </q-item>
            </q-list>
          </q-card-actions>
        </q-card>
        <!-- Button Status  Cucian -->
        <q-card class="q-mt-xs text-center" flat bordered>
          <q-btn
            to="/status-cucian"
            flat
            class="text-subtitle2 full-width"
            no-caps
            style="font-size: 2vh"
          >
            Status Cucian
          </q-btn>
        </q-card>
        <!-- Button Share Click -->
        <q-dialog
          v-model="dialogShare"
          position="bottom"
          style="border-radius: 100px 100px 0px 0px"
        >
          <q-card class="full-width">
            <q-card-section class="row items-center no-wrap">
              <div>
                <q-card flat class="my-card full-width">
                  <q-card-section class="full-width">
                    <div
                      class="text-subtitle1 text-weight-medium text-left"
                      style="
                        font-family: roboto;
                        font-size: 5vw;
                        margin-left: -2vh;
                      "
                    >
                      Share Media
                    </div>
                    <q-avatar
                      class="q-pt-sm absolute-right"
                      size="50px"
                      style="margin-top: -5px"
                    >
                      <q-btn
                        size="2vh"
                        v-ripple
                        flat
                        icon="far fa-times-circle"
                        color="grey"
                        style="background-color: transparent"
                        v-close-popup
                      />
                    </q-avatar>
                  </q-card-section>
                  <q-separator size="1px" />
                  <div
                    class="q-pa-sm text-subtitle1"
                    style="margin-left: -10px; font-size: 4vw"
                  >
                    Share this link via
                  </div>

                  <q-card-actions class="justify-center">
                    <q-avatar
                      rounded
                      flat
                      style="border-size: 15px"
                      class="q-mx-sm"
                    >
                      <!-- <q-btn outlined round flat icon="fab fa-facebook-f" color="blue" /> -->
                      <q-btn
                        size="2vh"
                        outline
                        round
                        color="primary"
                        icon="fab fa-facebook-f"
                      />
                    </q-avatar>

                    <!-- <q-avatar
                      rounded
                      flat
                      style="border-size: 15px"
                      class="q-mx-xs"
                    >
                      <q-btn
                        size="2vh"
                        class="bg-blue"
                        outline
                        round
                        color="white"
                        icon="fab fa-twitter"
                        style="background-color: blue"
                      />
                    </q-avatar> -->

                    <q-avatar
                      rounded
                      flat
                      style="border-size: 15px"
                      class="q-mx-sm"
                    >
                      <q-btn
                        size="2vh"
                        outline
                        round
                        color="pink-9"
                        icon="fab fa-instagram"
                      />
                    </q-avatar>

                    <q-avatar
                      rounded
                      flat
                      style="border-size: 15px"
                      class="q-mx-sm"
                    >
                      <q-btn
                        size="2vh"
                        outline
                        round
                        color="green-8"
                        icon="fab fa-whatsapp"
                      />
                    </q-avatar>

                    <q-avatar
                      rounded
                      flat
                      style="border-size: 15px"
                      class="q-mx-sm"
                    >
                      <q-btn
                        size="2vh"
                        outline
                        round
                        color="blue"
                        icon="fab fa-telegram-plane"
                      />
                    </q-avatar>
                  </q-card-actions>
                  <q-card-actions class="justify-center">
                    <div class="q-py-sm">Or copy link</div>
                    <q-input
                      class="full-width"
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
              </div>
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
      link: "example.com/share-link",
    };
  },

  methods: {
    buttonShare() {
      this.dialogShare = true;
    },
  },
};
</script>

<style></style>
