<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <div class="text-center bg-transparent" style="height: 200px">
          <!-- Header Image -->
          <q-img
            src="~/assets/header-mesin-cuci.svg"
            style="height: 200px"
            class="fixed-top mbl-child"
            no-spinner
          >
            <q-toolbar class="bg-transparent">
              <q-btn
                :ripple="true"
                flat
                round
                size="sm"
                @click="$router.push('/transaction')"
              >
                <q-avatar
                  size="20px"
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
        <div v-if="isLoad">
          <skeleton-detail-transaction-component></skeleton-detail-transaction-component>
        </div>
        <q-page
          class="front"
          style="
            background-color: white;
            margin-top: -35px;
            position: relative;
            border-radius: 50px 50px 0px 0px;
          "
          v-if="detail_order"
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
            class="bg-transparent text-white shadow-4 rounded-borders q-pa-none q-mb-lg"
          >
            <q-carousel-slide
              :name="`slide-${service.id}`"
              v-for="service in detail_order.services"
              :key="service.id"
            >
              <div class="row q-pt-xl justify-start" v-if="!isLoad">
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
                    <q-btn
                      no-caps
                      dense
                      flat
                      @click="$router.push(`/order-code/${detail_order.id}`)"
                    >
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
                      <q-icon
                        size="20px"
                        color="grey-8"
                        name="fas fa-share-alt"
                      ></q-icon>
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
                      >{{ service.process_time }} Hari</q-item-label
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
                    <q-img
                      src="~/assets/icon-cuci-detail.svg"
                      style="width: 30px"
                      no-spinner
                    />
                  </q-item-section>
                </q-item>
                <q-item class="q-my-sm">
                  <q-item-section class="self-center">
                    <q-item-label
                      class="text-weight-regular"
                      style="color: #c9c9c9; font-size: 12px"
                      >Jenis Item</q-item-label
                    >
                    <q-item-label
                      caption
                      lines="1"
                      class="text-weight-bold"
                      style="font-size: 14px"
                      >{{ service.category }}</q-item-label
                    >
                  </q-item-section>
                  <q-space></q-space>
                  <q-item-section avatar>
                    <q-img src="~/assets/msc.svg" no-spinner width="30px" />
                  </q-item-section>
                </q-item>
                <q-item class="q-my-sm">
                  <q-item-section class="self-center">
                    <q-item-label
                      class="text-weight-regular"
                      style="color: #c9c9c9; font-size: 12px"
                      >Berat/Hitungan</q-item-label
                    >
                    <q-item-label
                      caption
                      lines="1"
                      class="text-weight-bold"
                      style="font-size: 14px"
                      >
                      <!-- {{ detail_order.services[0].quantity }}
                      {{ detail_order.services[0].service_unit }} -->

                      {{ service.quantity }}
                      {{ service.service_unit }}

                      </q-item-label
                    >
                  </q-item-section>
                  <q-space></q-space>
                  <q-item-section avatar>
                    <q-img
                      src="~/assets/icon-kilogram.svg"
                      style="width: 30px"
                      no-spinner
                    />
                  </q-item-section>
                </q-item>
                <!-- <q-item class="q-my-sm">
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
                </q-item> -->
                <q-item class="q-my-sm">
                  <q-item-section class="self-center">
                    <q-item-label
                      class="text-weight-regular"
                      style="color: #c9c9c9; font-size: 12px"
                      >Foto Item</q-item-label
                    >
                    <q-item-label
                      caption
                      lines="1"
                      class="text-weight-bold"
                      style="font-size: 14px"
                      v-if="service.pre_order_photo"
                    >
                      Sudah Ada Bukti Foto
                    </q-item-label>
                    <q-item-label
                      caption
                      lines="1"
                      class="text-weight-bold"
                      style="font-size: 14px"
                      v-if="!service.pre_order_photo"
                    >
                      Belum ada Foto
                    </q-item-label>
                  </q-item-section>
                  <q-space></q-space>
                  <q-item-section
                    avatar
                    @click="testPreviewPhoto1(service.pre_order_photo)"
                  >
                    <q-avatar size="30px" class="bg-transparent">
                      <q-img src="~/assets/gbr2.svg" />
                    </q-avatar>
                  </q-item-section>
                </q-item>
                <q-item class="q-my-sm">
                  <q-item-section class="self-center">
                    <q-item-label
                      class="text-weight-regular"
                      style="color: #c9c9c9; font-size: 12px"
                      >Foto Konfirmasi Pesanan</q-item-label
                    >
                    <q-item-label
                      caption
                      lines="1"
                      class="text-weight-bold"
                      style="font-size: 14px"
                      v-if="order.photo != null"
                    >
                      Sudah Ada Bukti Foto
                    </q-item-label>
                    <q-item-label
                      caption
                      lines="1"
                      class="text-weight-bold"
                      style="font-size: 14px"
                      v-if="order.photo == null"
                    >
                      Belum Ada Bukti Foto
                    </q-item-label>
                  </q-item-section>
                  <q-space></q-space>
                  <q-item-section avatar @click="testPreviewPhoto2()">
                    <q-avatar size="30px" class="bg-transparent">
                      <q-img src="~/assets/foto.svg" />
                    </q-avatar>
                  </q-item-section>
                </q-item>
                <q-item class="q-my-xs self-center">
                  <q-item-section class="self-center">
                    <q-item-label
                      @click="percobaanService(service)"
                      caption
                      lines="1"
                      class="text-weight-bold"
                      style="font-size: 14px"
                      >Status Cucian</q-item-label
                    >
                  </q-item-section>

                  <q-item-section class="self-center">
                    <q-linear-progress
                      stripe
                      style="
                        max-width: 30vw;
                        max-height: 35px;
                        border-radius: 50px;
                        color: #49c26b;
                      "
                      class="q-mb-md q-mt-lg"
                      size="10vw"
                      :value="service.service_status_id == 3 ? 100 : progress"
                    >
                      <div class="absolute-full flex flex-center self-center">
                        <q-badge
                          style="font-size: 20px"
                          class="bg-transparent"
                          text-color="white "
                          :label="
                            service.service_status_id == 3
                              ? 100 + '%'
                              : progress
                          "
                        />
                      </div>
                    </q-linear-progress>
                  </q-item-section>

                  <q-item-section class="self-center" avatar>
                    <q-btn
                      round
                      flat
                      @click="
                        $router.push(
                          `/${detail_order.id}/status-cucian/${service.id}`
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
                      class="text-weight-regular q-pt-md"
                      style="color: #c9c9c9; font-size: 15px"
                      >Status Pesanan</q-item-label
                    >
                    <q-item-label
                      caption
                      class="text-weight-bold"
                      style="font-size: 14px"
                      >{{ detail_order.status.description }}</q-item-label
                    >
                  </q-item-section>
                  <q-space></q-space>
                  <q-item-section class="self-center q-pa-lg" side>
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
            v-if="detail_order.percentage == 100 && detail_order.photo == null"
            @click="
              order.paid_sum < order.total_sum
                ? PaymentComponent()
                : buttonConfirm()
            "
            no-caps
            class="fixed-bottom mbl-child"
            :style="`background-color: ${
              order.paid_sum < order.total_sum ? '#49c2c0' : '#66BB6A'
            }; color: #fafafa; width: 100%`"
          >
            <div class="q-py-sm text-weight-regular">
              {{ order.paid_sum < order.total_sum ? "Bayar" : "Konfirmasi" }}
            </div>
          </q-btn>
          <q-btn
            v-if="detail_order.percentage == 100 && detail_order.photo != null"
            @click="this.$router.push(`/invoice-page/${detail_order.id}`)"
            no-caps
            class="fixed-bottom mbl-child"
            :style="`background-color:#49C2C0 ; color: #fafafa; width: 100%`"
          >
            <div class="q-py-sm text-weight-regular">Lihat Invoice</div>
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
              <!--
              <q-card-section>
                <div
                  class="text-weight-light text-center q-mt-none"
                  style="width: 300px"
                >
                  Transaksi akan diproses selesai
                </div>
              </q-card-section>
              -->

              <q-card-actions class="text-primary" vertical>
                <q-btn
                  @click="confirmService()"
                  no-caps
                  flat
                  label="Konfirmasi Transaksi"
                  style="background-color: #49c2c0; color: white"
                />
                <!-- <q-btn
                  @click="$router.push(`/postorderphoto/${order.id}`)"
                  no-caps
                  flat
                  label="Tambahkan Bukti Foto"
                  style="background-color: #49c2c0; color: white"
                /> -->
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
                  <!-- Button Facebook 
                  <q-btn
                    round
                    size="20px"
                    outline
                    color="primary"
                    class="q-mx-xs"
                  >
                    <q-avatar
                      avatar
                      icon="fab fa-facebook-f"
                      size="30px"
                    ></q-avatar>
                  </q-btn> -->

                  <!-- Button Instagram
                  <q-btn
                    round
                    size="20px"
                    outline
                    color="pink-9"
                    class="q-mx-xs"
                  >
                    <q-avatar icon="fab fa-instagram" size="30px"></q-avatar>
                  </q-btn>  -->

                  <!-- Button WhatsApp -->
                  <q-btn
                    round
                    size="20px"
                    outline
                    color="green-8"
                    class="q-mx-xs"
                    @click="submitMessage()"
                  >
                    <q-avatar icon="fab fa-whatsapp" size="30px"></q-avatar>
                  </q-btn>

                  <!-- Button Telegram 
                  <q-btn round size="20px" outline color="blue" class="q-mx-xs">
                    <q-avatar
                      icon="fab fa-telegram-plane"
                      size="30px"
                    ></q-avatar>
                  </q-btn> -->
                </div>

                <!-- Link Share -->
                <q-card-actions class="justify-center">
                  <div class="q-py-sm">Or copy link</div>
                  <q-input
                    class="full-width justify-center"
                    outlined
                    bg-color="transparent"
                    v-model="link"
                    ref="copy"
                  >
                    <!-- <q-btn
                      v-if="$q.platform.is.desktop"
                      class="self-center q-px-xl"
                      label="Copy"
                      color="deep-purple-13"
                      @click="copyLink()"
                    />
                    <q-btn
                      v-if="$q.platform.is.mobile"
                      class="self-center q-px-xl"
                      label="Copy"
                      color="deep-purple-13"
                      @click="copyLinkMbl()"
                    /> -->
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
        <q-dialog v-model="alert">
          <q-card
            class="q-px-xl q-py-xl text-center"
            style="border-radius: 10px"
          >
            <div class="text-h6 text-weight-bold">Tambahkan Foto Dahulu</div>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import SkeletonDetailTransactionComponent from "src/components/SkeletonDetailTransactionComponent";
import MakePaymentDialogVue from "src/components/MakePaymentDialog";
import PreviewPhotoComponentVue from "src/components/PreviewPhotoComponent";
import SubmitPaymentComponentVue from "src/components/DetailFirstPaymentComponent.vue";
import SecondaryPaymentComponentVue from "src/components/secondaryPaymentComponent.vue";
import moment from "moment";
import { mapState } from "vuex";
import { useQuasar } from "quasar";
import { Platform } from "quasar";

export default {
  computed: {
    ...mapState(["Auth"]),
  },

  props: ["orderid"],
  components: {
    SkeletonDetailTransactionComponent: SkeletonDetailTransactionComponent,
  },
  data() {
    return {
      progress: 0 * 100 + "%",
      slide: null,
      dialogShare: false,
      dialogConfirm: false,
      link: null,
      detail_order: null,
      isLoad: false,
      copy: false,
      order: null,
      STORAGE_URL: STORAGE_URL,
      APP_URL: APP_URL,
      statusCucian: null,
      message: "",
      source: null,
      finalLink: null,
      alert: false,
      whatsappLoop: "",
      bankAccount: [],
      bankAccountLoop: "",
    };
  },

  mounted() {
    this.getDetailOrder();
    this.getBankInformation();
    this.link = `${this.APP_URL}/preview-detail-transaksi-3/${this.Auth.auth.shop.id}/${this.orderid}`;
  },

  methods: {
    submitMessage() {
      this.setTextMessage();

      let url = `https://api.whatsapp.com/send?phone=${this.formatPhoneNumber(
        this.order.customer.contact_number
      )}&text=${encodeURI(this.message)}`;
      window.open(url, "_system");
    },
    setTextMessage() {
      console.log("this.order", this.order);
      if (this.order) {
        let url = `${this.APP_URL}/preview-detail-transaksi-3/${this.order.id}`;
        let customer = this.order.customer.name;
        let customer_number = this.order.customer.contact_number;
        let employee = this.order.employee.name;
        let shop = this.order.shop.name;
        let current_date = moment().locale("id").format("LLL");
        let price = new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(this.order.total_sum);
        let debt = new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(this.order.total_sum - this.order.paid_sum);
        let paymnent_id = this.order.id;

        for (let i = 0; i < this.order.services.length; i++) {
          console.log("tmp2", this.order.services[i]);
          let tmp3 = `${this.order.services[i].name}📝 ${
            this.order.services[i].quantity
          } ${this.order.services[i].service_unit} x ${new Intl.NumberFormat(
            "id-ID",
            {
              style: "currency",
              currency: "IDR",
            }
          ).format(this.order.services[i].price)}
Keterangan : ${this.order.services[i].process_time} Jam\n`;

          this.whatsappLoop += tmp3;
        }

        let tmp = `
===== 🧾 NOTA =====\n
PESAN OTOMATIS\n
Outlet : ${shop}
Kasir : ${employee} \n
Nama Pelanggan : ${customer}
No Handphone :  ${customer_number}\n
Kode Nota. ${paymnent_id}
Tgl. Nota : ${current_date}\n
Detail
--------------------------------
${this.whatsappLoop}
🕕 Selesai : ${current_date} \n
=========================
Total : ${price}
=========================
Sisa Tagihan : ${debt}\n
--------------------------------
Informasi Nota, Pembayaran Non-tunai dan Virtual Account di
${url}
--------------------------------
Jika kamu belum membayar pesanan, kamu bisa transfer melalui nomor rekening di bawah ini
${this.bankAccountLoop}`;
        this.message = tmp;
      }
    },
    formatPhoneNumber(number) {
      // console.log(typeof(String(number)))
      let formatted = String(number).replace(/\D/g, "");

      if (formatted.startsWith("0")) {
        formatted = "+62" + formatted.substr(1);
      }

      if (formatted.startsWith("62")) {
        formatted = "+62" + formatted.substr(2);
      }

      return formatted;
    },
    PaymentComponent() {
      if (this.order.payments.length == 0) {
        this.$q
          .dialog({
            component: SubmitPaymentComponentVue,

            componentProps: {
              orderSend: this.order,
            },
          })
          .onOk((res) => {
            this.order.payments = res.order.payments;
            this.order.paid_sum = res.order.paid_sum;
            console.log("OK", res);
          });
      } else {
        this.$q
          .dialog({
            component: SecondaryPaymentComponentVue,

            componentProps: {
              orderSend: this.order,
            },
          })
          .onOk((res) => {
            this.order.payments = res.order.payments;
            this.order.paid_sum = res.order.paid_sum;
            console.log("OK", res);
          });
      }
    },
    getBankInformation() {
      this.$store
        .dispatch("Bank/getAccountBank", this.Auth.auth.shop.id)
        .then((res) => {
          this.bankAccount = res.data;
          for (let i = 0; i < this.bankAccount.length; i++) {
            console.log("this.bankaccount[i]", this.bankAccount[i]);
            let tmp4 = `
${this.bankAccount[i].name} : ${this.bankAccount[i].account_name} 
No Rekening : ${this.bankAccount[i].account_number} 
--------------------------------`;
            this.bankAccountLoop += tmp4;
          }
          console.log("this.bankAccountLoop", this.bankAccountLoop);
          console.log("res", res.data);
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    testPreviewPhoto1(sendedLink) {
      console.log("ini link preorder", sendedLink);
      this.dialogPreviewPhoto(sendedLink);
    },
    testPreviewPhoto2(sendedLink) {
      console.log("ini order.photo", this.order.photo);
      this.dialogPreviewPhoto(this.order.photo);
    },
    dialogPreviewPhoto(src) {
      if (src) {
        this.finalLink = `${STORAGE_URL}/${src.src}`;
        console.log("finalLink", this.finalLink);
        this.$q.dialog({
          component: PreviewPhotoComponentVue,
          componentProps: {
            src: this.finalLink,
          },
        });
      } else {
        console.log("src kosong");
        this.alert = true;
      }
    },
    makePayment() {
      this.$q
        .dialog({
          component: MakePaymentDialogVue,

          // props forwarded to your custom component
          componentProps: {
            order: this.order,
            // ...more..props...
          },
        })
        .onOk((res) => {
          this.order.payments = res.order.payments;
          this.order.paid_sum = res.order.paid_sum;
          console.log("OK", res);
        })
        .onCancel(() => {
          console.log("Cancel");
        })
        .onDismiss(() => {
          console.log("Called on OK or Cancel");
        });
    },
    percobaanService(service) {
      console.log("ini service", service);
    },
    confirmService() {
      console.log("ini detail order", this.detail_order);
      const payload = {
        id: this.detail_order.id,
        order_status_id: 4,
      };
      // this.$store.dispatch("Orders/updateStatus", payload).then((res) => {
      //   this.$router.push(`/invoice-page/${this.detail_order.id}`);
      // });
      this.$router.push(`/postorderphoto/${this.detail_order.id}`);
    },
    photoProduct() {
      id: this.detail_order.id;
    },
    buttonShare() {
      this.dialogShare = true;
    },
    buttonConfirm() {
      this.dialogConfirm = true;
    },
    getDetailOrder() {
      this.isLoad = true;
      this.$store
        .dispatch("Orders/show", this.orderid)
        .then((res) => {
          this.detail_order = res.data;
          console.log('ini detail order', this.detail_order)
          if (res.data.services.length) {
            this.slide = `slide-${res.data.services[0].id}`;
            this.order = res.data;
            console.log("Ini Data Pelanggan", this.order);
          } else {
            this.slide = "slide-0";
          }
        })
        .finally(() => {
          this.isLoad = false;
        });
    },
    updateStatusOrder() {
      alert("tess");
    },
    copyLink() {
      var modelValue = this.$refs.copy.modelValue;

      navigator.clipboard.writeText(modelValue);
      this.$q.notify("Link tersalin");
    },
    copyLinkMbl() {
      var text = this.link;

      // window.cordova.plugins.clipboard.copy({
      //     type: "text", // default, so not needed for text
      //     data: text
      // }, (res) => {
      //     console.log(res);
      // });
      this.$notify("Link tersalin");
    },
  },
};
</script>

<style></style>
