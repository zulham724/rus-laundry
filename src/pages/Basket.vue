<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn
          :disable="loading"
          flat
          round
          size="10px"
          @click="$router.push('/list-type-of-clothes')"
        >
          <q-avatar size="20px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Keranjang
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <!-- TAB ITEM BARU -->
        <div
          v-if="Orders.order.charts.length"
          class="q-px-sm"
          style="height: 100vh"
        >
          <div
            v-for="(category, c) in Orders.order.charts"
            :key="category.id"
            style="align-item: center"
            class="q-my-sm"
          >
            <q-card class="shadow-1 q-py-sm" style="border-radius: 10px">
              <div class="row">
                <div class="col-3 text-center self-center">
                  <q-img src="~/assets/bjmn.png" width="75%" />
                </div>
                <div class="col-5 self-center">
                  <div class="row text-weight-bold" style="line-height: 100%">
                    {{ category.name }}
                  </div>
                  <div class="row" style="font-size: 12px">
                    Jumlah ({{ category.service_unit.name }})
                  </div>
                  <div class="row self-center">
                    <div class="row">
                      <div class="col q-pr-xs text-weight-bold self-center">
                        <q-btn
                          @click="kurangkg(c)"
                          size="sm"
                          round
                          flat
                          style="background-color: #fafafa"
                          text-color="black"
                        >
                          <q-icon
                            name="fas fa-minus"
                            style="height: 5px; width: 5px"
                          ></q-icon>
                        </q-btn>
                      </div>
                      <div
                        class="col q-px-xs self-center text-h6 text-weight-bold"
                      >
                        {{
                          category.quantity
                            ? category.quantity.toFixed(1)
                            : null
                        }}
                      </div>
                      <div class="col q-pl-xs self-center">
                        <q-btn
                          @click="tambahkg(c)"
                          size="sm"
                          flat
                          class="text-weight-bold"
                          round
                          style="background-color: #49c2c0"
                          text-color="white"
                        >
                          <q-icon
                            name="fas fa-plus"
                            style="height: 5px; width: 5px"
                          ></q-icon
                        ></q-btn>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4 self-center">
                  <div
                    v-if="this.Orders.order.charts[c].total_price"
                    class="self-center text-weight-medium"
                  >
                    {{
                      new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(this.Orders.order.charts[c].total_price)
                    }}
                  </div>
                </div>
              </div>
            </q-card>
            <!-- TAB LAYANAN -->
            <div class="full-width text-center">
              <q-btn
                @click="$router.push(`/${category.id}/choose-package`)"
                dense
                flat
                class="q-py-none"
                style="
                  background-color: #49c2c0;
                  width: 90%;
                  border-radius: 0px 0px 10px 10px;
                "
              >
                <q-item dense class="full-width">
                  <q-item-section avatar>
                    <q-img
                      src="~/assets/bgg.png"
                      style="width: 70%; heigth: 70%"
                    />
                  </q-item-section>
                  <q-item-section
                    v-if="this.Orders.order.charts[c].package"
                    class="text-white text-left"
                    style="font-size: 12px"
                    >{{
                      this.Orders.order.charts[c].package.name
                    }}</q-item-section
                  >
                  <q-item-section
                    v-else
                    class="text-white"
                    style="font-size: 12px"
                  >
                    Tambah Layanan
                  </q-item-section>
                  <q-item-section side class="text-h5 text-white">
                    >
                  </q-item-section>
                </q-item>
              </q-btn>
            </div>
            <!-- TAB TAMBAH GAMBAR -->
            <div
              class="full-width text-center"
              v-if="
                !category.pre_order_photo && this.Orders.order.charts[c].package
              "
            >
              <q-btn
                @click="$router.push(`/postpreorderphoto/${category.id}`)"
                dense
                class="q-py-xs q-px-sm text-center text-weight-medium"
                style="
                  width: 80%;
                  border-radius: 0px 0px 10px 10px;
                  margin: auto;
                "
              >
                Tambahkan Bukti Foto
              </q-btn>
            </div>
            <!-- TAB TAMBAH GAMBAR & GANTI GAMBAR -->
            <div
              class="full-width text-center row"
              v-if="category.pre_order_photo"
            >
              <div class="col-6 text-right">
                <q-btn
                  @click="dialogPreviewPhoto(category.pre_order_photo)"
                  dense
                  no-caps
                  class="q-py-xs text-center text-weight-medium"
                  style="
                    padding-right: 8.5px;
                    width: 80%;
                    border-radius: 0px 0px 0px 10px;
                  "
                >
                  Lihat Gambar
                </q-btn>
              </div>
              <div class="col-6 text-left">
                <q-btn
                  @click="$router.push(`/postpreorderphoto/${category.id}`)"
                  dense
                  no-caps
                  class="q-py-xs text-white text-center text-weight-medium"
                  style="
                    background-color: #49c1bf;
                    width: 80%;
                    border-radius: 0px 0px 10px 0px;
                  "
                >
                  Ganti Gambar
                </q-btn>
              </div>
            </div>
          </div>

          <div
            class="fixed-bottom mbl-child"
            v-if="this.Orders.order.total_price"
          >
            <q-card class="q-pa-sm" style="border-radius: 20px 20px 0px 0px">
              <q-card-section>
                <div class="text-caption">Total Harga</div>
                <div class="text-subtitle1">
                  {{
                    new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(this.Orders.order.total_price)
                  }}
                </div>
                <div class="col-12">
                  <q-card class="no-shadow">
                    <q-card-section class="text-left q-pa-none">
                      <div class="row">
                        <div class="col-6">
                          <q-btn
                            dense
                            flat
                            :icon-right="
                              expanded
                                ? 'keyboard_arrow_up'
                                : 'keyboard_arrow_down'
                            "
                            color="grey-6"
                            @click="expanded = !expanded"
                          >
                            <div class="text-caption" style="color: #888888">
                              Estimasi Pesanan
                            </div>
                          </q-btn>
                        </div>
                        <div class="col-6 text-right">
                          <!--
                          <q-btn
                            v-if="!payment"
                            class="bg-cyan-5 text-grey-1"
                            size="sm"
                            flat
                            @click="paymentDialog = true"
                            >Tambah Pembayaran</q-btn
                          >
                          <q-btn
                            size="sm"
                            v-else
                            flat
                            @click="paymentDialog = true"
                          >
                            Pembayaran sejumlah RP.
                            {{ this.Orders.order.payment.toLocaleString() }} dimasukan (KLIK UNTUK
                            UBAH)
                          </q-btn>
                          -->
                        </div>
                      </div>
                    </q-card-section>

                    <q-slide-transition>
                      <div v-show="expanded">
                        <q-separator />
                        <q-card-section
                          style="color: #888888"
                          v-for="category in this.Orders.order.charts"
                          :key="category.id"
                        >
                          <div class="text-caption">
                            {{ category.name }}
                          </div>
                          <div class="text-caption" v-if="category.package">
                            {{ category.package.process_time }} Jam
                          </div>
                        </q-card-section>
                      </div>
                    </q-slide-transition>
                    <q-btn
                      :disable="loading"
                      @click="alert = true"
                      class="full-width q-mt-sm"
                      style="border-radius: 10px"
                      color="grey-7"
                      label="Buat Pesanan"
                    />
                  </q-card>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <!-- UNTUK MENCIPTAKAN MARGIN Bottom -->
        <q-card
          class="q-pa-sm full-width"
          v-if="this.Orders.order.total_price"
          style="border-radius: 20px 20px 0px 0px; z-index: -1"
        >
          <q-card-section>
            <div class="text-caption">Total Harga</div>
            <div class="text-subtitle1">
              {{
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(this.Orders.order.total_price)
              }}
            </div>
            <div class="col-12">
              <q-card class="no-shadow">
                <q-card-section class="text-left q-pa-none">
                  <div class="row">
                    <div class="col-6">
                      <q-btn
                        dense
                        flat
                        :icon-right="
                          expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                        "
                        color="grey-6"
                        @click="expanded = !expanded"
                      >
                        <div class="text-caption" style="color: #888888">
                          Estimasi Pesanan
                        </div>
                      </q-btn>
                    </div>
                    <div class="col-6 text-right">
                      <!--
                          <q-btn
                            v-if="!payment"
                            class="bg-cyan-5 text-grey-1"
                            size="sm"
                            flat
                            @click="paymentDialog = true"
                            >Tambah Pembayaran</q-btn
                          >
                          <q-btn
                            size="sm"
                            v-else
                            flat
                            @click="paymentDialog = true"
                          >
                            Pembayaran sejumlah RP.
                            {{ this.Orders.order.payment.toLocaleString() }} dimasukan (KLIK UNTUK
                            UBAH)
                          </q-btn>
                          -->
                    </div>
                  </div>
                </q-card-section>

                <q-slide-transition>
                  <div v-show="expanded">
                    <q-separator />
                    <q-card-section
                      style="color: #888888"
                      v-for="category in this.Orders.order.charts"
                      :key="category.id"
                    >
                      <div class="text-caption">
                        {{ category.name }}
                      </div>
                      <div class="text-caption" v-if="category.package">
                        {{ category.package.process_time }} Jam
                      </div>
                    </q-card-section>
                  </div>
                </q-slide-transition>
                <q-btn
                  :disable="loading"
                  @click="alert = true"
                  class="full-width q-mt-sm"
                  style="border-radius: 10px"
                  color="grey-7"
                  label="Buat Pesanan"
                />
              </q-card>
            </div>
          </q-card-section>
        </q-card>

        <div v-else-if="!Orders.order.charts.length">
          <div class="text-center q-ma-xl">
            <img
              src="~/assets/krj.png"
              style="width: 175px; height: 175px; margin-top: 50px"
            />
          </div>
          <div class="text-h6 text-center">Wah Keranjangmu Kosong</div>
        </div>

        <!-- dialog payment  -->
        <q-dialog v-model="paymentDialog">
          <q-card>
            <q-card-section>
              <div class="text-h6">Pembayaran Lunas/ DP</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-form ref="paymentForm">
                <q-input
                  type="number"
                  @keypress="isNumber($event)"
                  placeholder="Masukan Nominal"
                  v-model="payment"
                ></q-input>
              </q-form>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" @click="submitPayment()" />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="alert" position="bottom">
          <q-card class="" style="border-radius: 20px 20px 0px 0px">
            <q-card-section>
              <q-carousel
                height="10%"
                animated
                swipeable
                v-model="slide"
                infinite
                :autoplay="autoplay"
                transition-prev="slide-right"
                transition-next="slide-left"
                @mouseenter="autoplay = false"
                @mouseleave="autoplay = true"
              >
                <q-carousel-slide :name="1" class="text-center">
                  <q-img
                    src="~/assets/right-arrow1.png"
                    width="150px"
                    height="150px"
                  />
                  <div class="q-mb-md">
                    Pesanan bisa di bayar nanti dan anda bisa skip langkah ini.
                  </div>
                  <div></div>
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="text-center">
                  <q-img
                    src="~/assets/credit-card-payment2.png"
                    width="150px"
                    height="150px"
                  />
                  <div class="q-mb-md">
                    Pesanan bisa dibayar di muka. Lanjutkan untuk memasukan
                    nominal uang muka
                  </div>
                </q-carousel-slide>
                <q-carousel-slide :name="3" class="text-center">
                  <q-img
                    src="~/assets/money-bag1.png"
                    width="150px"
                    height="150px"
                  />
                  <div style="margin-bottom: -5px">
                    Pesanan bisa dibayar sekarang. Lanjutkan untuk mengisi
                    nominal sesuai dengan harga pesanan
                  </div>
                </q-carousel-slide>
              </q-carousel>
            </q-card-section>

            <!--
            <q-card-section class="q-pt-none">
                  <q-img
                    src="~/assets/Ellipse175.png"
                    width="10px"
                    height="10px"
                  />
                  <q-img
                    src="~/assets/Ellipse176.png"
                    width="10px"
                    height="10px"
                  />
                  <q-img

                    src="~/assets/Ellipse176.png"
                    width="10px"
                    height="10px"
                  />
            </q-card-section>
            -->

            <q-card-actions>
              <q-btn
                class="full-width"
                flat
                label="Lewati"
                :disable="btnDisable == true"
                :loading="btnDisable"
                color="black"
                @click="store()"
              />
            </q-card-actions>
            <q-card-actions>
              <q-btn
                class="bg-teal-14 full-width"
                flat
                label="Lanjutkan"
                color="white"
                @click="popupComponent()"
              />
            </q-card-actions>
          </q-card>
        </q-dialog>

        <q-dialog v-model="paymentDialogDetail" persistent>
          <q-card class="full-width" style="border-radius: 20px">
            <q-card-section>
              <div class="row text-center">
                <div class="col-10 text-left" text-h5>
                  <div>Total Harga</div>
                  <div
                    v-if="this.Orders.order.total_price"
                    style="font-size: 28px; font-weight: bold"
                  >
                    {{
                      new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(this.Orders.order.total_price)
                    }}
                  </div>
                  <div
                    v-if="!this.Orders.order.total_price"
                    style="font-size: 28px; font-weight: bold"
                  >
                    Kosong
                  </div>
                </div>

                <div class="col-2">
                  <q-btn @click="this.payment = null" round flat v-close-popup>
                    <q-avatar>
                      <img
                        src="~/assets/x.png"
                        style="width: 35%; height: 35%"
                      />
                    </q-avatar>
                  </q-btn>
                </div>
              </div>
            </q-card-section>

            <!-- Img ketika memasukkan nominal -->
            <div v-if="!this.payment" class="text-center">
              <q-img
                src="~/assets/coding1.png"
                style="width: 100px; height: 100px"
              />
              <div class="q-my-md" style="font-size: 16px; font-weight: bold">
                Masukkan nominal form di bawah
              </div>
            </div>

            <!-- Img ketika inputan lunas -->
            <div
              v-if="this.payment == this.Orders.order.total_price"
              class="text-center"
            >
              <q-img
                src="~/assets/payment-method1.png"
                style="width: 100px; height: 100px"
              />
              <div
                class="q-my-md"
                style="font-size: 16px; font-weight: bold; color: #7ed396"
              >
                Pembayaran Lunas
              </div>
            </div>

            <!-- Img ketika inputan tidak lunas -->
            <div
              v-if="
                this.payment != this.Orders.order.total_price &&
                this.payment > 0
              "
              class="text-center"
            >
              <q-img
                src="~/assets/installment1.png"
                style="width: 100px; height: 100px"
              />
              <div
                class="q-my-md"
                style="font-size: 16px; font-weight: bold; color: #8b8484"
              >
                Bayar Sebagian
              </div>
            </div>

            <q-input
              type="number"
              @keypress="isNumber($event)"
              v-model="payment"
              square
              color="black"
              outlined
              label="Masukkan Nominal"
            />
            <div
              @click="submitPayment()"
              class="bg-teal-14 text-center q-py-md"
              style="color: #fff"
              :disable="btnDisable == true"
            >
              Lanjutkan
            </div>
          </q-card>
        </q-dialog>
        <!-- end dialog payment  -->
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import { ref } from "vue";
import SubmitPaymentComponentVue from "src/components/SubmitPaymentComponent";
import { toBase64, jsonToFormData } from "./../helpers";
import PreviewPhotoComponentVue from "src/components/PreviewPhotoComponent";

export default {
  computed: {
    ...mapState(["Orders"]),
  },
  data() {
    return {
      y: true,
      //hanya untuk test

      btnDisable: false,
      slide: ref(1),
      autoplay: ref(true),
      alert: false,
      expanded: false,
      loading: false,
      paymentDialog: false,
      paymentDialogDetail: false,
      payment: null,
      btnConfirmPayment: false,
      bs64: null,
    };
  },
  methods: {
    dialogPreviewPhoto(value) {
      console.log("ini value", value);
      let promise = toBase64(value);
      promise.then((res) => {
        console.log("setelah base 64", res);
        this.$q.dialog({
          component: PreviewPhotoComponentVue,

          componentProps: {
            src: res.src,
          },
        });
      });
    },
    popupComponent() {
      this.$q.dialog({
        component: SubmitPaymentComponentVue,
      });
    },
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    submitPayment() {
      if (this.payment > this.Orders.order.total_price) {
        this.btnDisable = true;
        this.$q.notify({
          position: "top",
          message: "Pembayaran melebihi batas",
        });
        this.btnDisable = false;
      } else if (!this.payment) {
        this.$q.notify({
          position: "top",
          message: "Masukkan jumlah yang ingin di bayar",
        });
      } else {
        this.btnDisable = true;
        this.$q.notify({
          position: "top",
          message: "Pembayaran dimasukkan",
        });
        this.payment = parseInt(this.payment);
        this.Orders.order.payment = this.payment;
        // console.log('ini jumlah order', this.Orders.order.payment)
        this.paymentDialog = false;
        btnDisable = false;
      }
    },
    checkPcs(c) {
      console.log("ini pcs", this.Orders.order.charts[c].quantity);
    },
    // tambahpcs(index) {
    //   this.Orders.order.charts[index].quantity += 1;
    //   this.getPrice();
    //   console.log("index", this.Orders.order.charts[index].quantity);
    // },
    // kurangpcs(index) {
    //   this.Orders.order.charts[index].quantity -= 1;
    //   if (this.Orders.order.charts[index].quantity < 1) {
    //     this.$store.commit("Orders/remove_order_chart", {
    //       id: this.Orders.order.charts[index].id,
    //     });
    //   }
    //   this.getPrice();
    // },
    tambahkg(index) {
      this.Orders.order.charts[index].quantity +=
        this.Orders.order.charts[index].service_unit.input;
      this.getPrice();
    },
    kurangkg(index) {
      this.Orders.order.charts[index].quantity -=
        this.Orders.order.charts[index].service_unit.input;
      if (
        this.Orders.order.charts[index].quantity <
        this.Orders.order.charts[index].service_unit.input
      ) {
        this.$store.commit("Orders/remove_order_chart", {
          id: this.Orders.order.charts[index].id,
        });
      }
      console.log(
        "quantity",
        this.Orders.order.charts[index].quantity,
        "service_unit",
        this.Orders.order.charts[index].service_unit.input
      );
      this.getPrice();
    },
    getOrderServiceCategory() {
      this.Orders.order.charts = this.Orders.order.charts.map((category) => {
        console.log("this orders service category", this.Orders.order.charts);
        if (category.quantity) {
          return category;
        } else {
          category.quantity = 1;
          return category;
        }
      });
    },
    getPrice() {
      this.Orders.order.charts = this.Orders.order.charts.map((category) => {
        if (category.package) {
          category.total_price = category.quantity * category.package.price;
        }
        return category;
      });
      let total_price = 0;
      this.Orders.order.charts.forEach((category) => {
        total_price += category.total_price;
      });
      this.Orders.order.total_price = total_price;
      this.payment = this.Orders.order.payment;
    },
    store() {
      this.btnDisable = true;
      this.loading = true;
      let order = this.Orders.order;
      console.log("order sebelum formData", order);
      let formData = jsonToFormData(order);
      console.log("order sesudah formData ", formData);
      this.$store
        .dispatch("Orders/store", formData)
        .then((res) => {
          this.btnDisable = true;
          this.$q.notify({
            position: "top",
            message: "Berhasil membuat pesanan",
          });
          this.$router.push(`/confirm-order/${res.data.id}`);
        })
        .finally(() => {
          this.btnDisable = false;
          this.loading = false;
        });
    },
    showNotif() {},
  },
  mounted() {
    this.getOrderServiceCategory();
    this.getPrice();
  },
};
</script>

<style></style>
