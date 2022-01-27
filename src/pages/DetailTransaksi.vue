<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container style="background-color: #fafafa" v-if="detail_order">
      <q-page>
        <div class="text-center bg-transparent" style="height:200px">
          <!-- Header Image -->
          <q-img src="~/assets/header-mesin-cuci.svg" style="height:200px" class="fixed-top mbl-child" no-spinner>
            <q-toolbar class="bg-transparent">
              <q-btn :ripple="true" flat round size="sm" @click="$router.back()">
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
          style="background-color: white; margin-top: -35px; position: relative; border-radius: 50px 50px 0px 0px; "
        >
          <q-carousel
            style="height: 100%"
            v-model="slide"
            transition-prev="jump-right"
            transition-next="jump-left"
            swipeable
            animated
            control-type="regular"
            control-color="blue"  
           navigation-active-icon="local_laundry_service"
            navigation-position="top"
            navigation
            class="bg-transparent text-white shadow-4 rounded-borders q-pa-none"
            
          >
            <q-carousel-slide :name="`slide-${service.id}`" v-for="service in detail_order.services" :key="service.id">
              <div class="row q-pt-xl justify-start ">
                <div class="col-6">
                  <!-- No Pesanan  -->
                  <div
                    class="q-pl-md text-weight-regular"
                    style="color: #c9c9c9"
                  >
                    No Pesanan
                  </div>
                  <div
                    class="q-pl-md text-weight-regular"
                    style="color: #313131"
                  >
                    {{ detail_order.id }}
                  </div>
                </div>
                <div class="col-6">
                  <div class="row justify-end">
                  <q-btn no-caps dense flat @click="$router.push('/order-code')">
                    <div
                      class="text-weight-regular text-center q-px-xs"
                      style="
                        font-size: 10px;
                        color: #fafafa;
                        background-color: #3ec0e9;
                        border-radius: 3px 3px 3px 3px;
                      "
                    >
                      Cetak kode pesanan
                    </div>
                  </q-btn>

                  <!-- Button Share -->
                  <q-btn
                    dense
                    round
                    size="13px"
                    ripple
                    flat
                    @click="buttonShare()"
                  >
                    <q-icon size="20px" color="grey-8" name="fas fa-share-alt"></q-icon>
                  </q-btn>
                  </div>
                </div>
              </div>

              <!-- List Isi -->
              <q-list
                separator
                style="background-color: #ffffff"
                class="full-width"
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
                      >{{ detail_order.customer.name }}</q-item-label
                    >
                  </q-item-section>
                  <q-space></q-space>
                  <q-item-section avatar>
                    <q-avatar size="30px" class="bg-transparent">
                      <q-img
                        src="~/assets/id-card-detail.svg"
                        style="width: 5vh"
                        no-spinner
                      />
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
                      >{{ detail_order.customer.contact_number }}</q-item-label
                    >
                  </q-item-section>
                  <q-space></q-space>
                  <q-item-section avatar>
                    <q-avatar size="30px" class="bg-transparent">
                      <q-img
                        src="~/assets/icon-telpon.svg"
                        style="width: 5vh"
                        no-spinner
                      />
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
                      >{{
                       service.process_time
                      }}
                      Jam</q-item-label
                    >
                  </q-item-section>
                  <q-space></q-space>
                  <q-item-section avatar>
                    <q-avatar size="30px" class="bg-transparent">
                      <q-img
                        src="~/assets/icon-kalender.svg"
                        style="width: 5vh"
                        no-spinner
                      />
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
                      >{{ service.name }}</q-item-label
                    >
                  </q-item-section>
                  <q-space></q-space>
                  <q-item-section avatar>
                    <q-avatar size="30px" class="bg-transparent">
                      <q-img
                        src="~/assets/icon-cuci-detail.svg"
                        style="width: 5vh"
                        no-spinner
                      />
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
                      >{{
                        service.category.name
                      }}</q-item-label
                    >
                  </q-item-section>
                  <q-space></q-space>
                  <q-item-section avatar>
                    <q-avatar size="30px" class="bg-transparent">
                      <q-img src="~/assets/icon-baju.svg" no-spinner />
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
                      >{{ detail_order.services[0].pivot.quantity }}
                      {{
                        detail_order.services[0].category.service_unit.name
                      }}</q-item-label
                    >
                  </q-item-section>
                  <q-space></q-space>
                  <q-item-section avatar>
                    <q-avatar size="30px" class="bg-transparent">
                      <q-img
                        src="~/assets/icon-kilogram.svg"
                        style="width: 5vh"
                        no-spinner
                      />
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

                  <q-item-section avatar class="q-mt-xl">
                    <q-btn
                      round
                      flat
                      @click="
                        $router.push(
                          `/${detail_order.id}/laundry-details-other`
                        )
                      "
                    >
                      <q-avatar size="30px" class="bg-transparent">
                        <q-img
                          src="~/assets/icon-status-cucian.svg"
                          style="width: 5vh"
                          no-spinner
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

                  <q-item-section avatar>
                    <q-btn
                      round
                      flat
                      @click="$router.push(`/${detail_order.id}/status-cucian/${service.id}`)"
                    >
                      <q-avatar size="30px" class="bg-transparent">
                        <q-img
                          src="~/assets/icon-status-cucian.svg"
                          style="width: 5vh"
                          no-spinner
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
                      >{{ detail_order.status.name }}</q-item-label
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
                    >
                      {{
                        new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(detail_order.total_sum)
                      }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-carousel-slide>
          </q-carousel>
          <q-btn
            @click="buttonConfirm()"
            no-caps
            class="fixed-bottom mbl-child"
            style="background-color: #49c2c0; color: #fafafa; width:100%;"
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

        <!-- Kondisi apabila pesanan belum di proses (perlu klik proses pesanan) -->

        <!-- <div class="row absolute-bottom q-pb-md">
          <div class="col-6 text-center">
            
            <q-btn
              no-caps
              style="
                color: white;
                background-color: #49c2c0;
                font-size: 14px;
                max-width: 50vw;
                border-radius: 5px 5px 5px 5px;
              "
              class="text-weight-regular"
            >
              <div class="q-py-sm">Proses Pesanan</div>
            </q-btn>
          </div>
          <div class="col-6 text-center">
            
            <q-btn
              no-caps
              style="
                color: #313131;
                background-color: white;
                font-size: 14px;
                max-width: 50vw;
                border-radius: 5px 5px 5px 5px;
              "
              class="text-weight-regular"
            >
              <div class="q-py-sm">Batalkan Pesanan</div></q-btn
            >
          </div>
        </div> -->
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  props: ["orderid"],
  data() {
    return {
      slide: null,
      dialogShare: false,
      dialogConfirm: false,
      link: "example.com/share-link",
      detail_order: null,
    };
  },

  methods: {
    buttonShare() {
      this.dialogShare = true;
    },
    buttonConfirm() {
      this.dialogConfirm = true;
    },
    getDetailOrder() {
      this.$store.dispatch("Orders/show", this.orderid).then((res) => {
        this.detail_order = res.data;
        this.slide = `slide-${res.data.services[0].id}`
      });
    },
    
  },
  mounted() {
    this.getDetailOrder();
  },
};
</script>

<style></style>
