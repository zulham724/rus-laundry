<template class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
  <q-page style="background-color: #fafafa">
    <div style="height: 220px">
      <div
        class="fixed mbl-child"
        style="
          width: 100%;
          height: 100%;
          background-image: linear-gradient(to top right, #48c6ef, #6f86d6);
        "
      >
        <div
          class="text-weight-regular text-center q-pt-xl"
          style="color: white; font-size: 18px"
        >
          Saldo Masuk Hari ini
        </div>
        <div
          class="text-weight-bold text-center"
          style="color: white; font-size: 38px"
        >
          Rp.10.000.000
        </div>
      </div>
    </div>

    <div
      class="q-pb-lg"
      style="
        border-radius: 30px 30px 0 0;
        background-color: #fafafa;
        margin-top: -30px;
        position: relative;
      "
    >
      <q-tabs
        stretch
        id="thing_to_stick"
        active-color="white"
        active-bg-color="light-blue-4"
        v-model="tab"
        no-caps
        class="text-weight-regular"
        style="
          color: #756a6a;
          font-size: 14px;
          border-radius: 30px 30px 0 0;
          background-color: #fafafa;
        "
      >
        <q-tab
          name="hari"
          label="Hari ini"
          style="border-radius: 0px 0px 15px 15px"
        />
        <q-tab
          name="minggu"
          label="Minggu ini"
          style="border-radius: 0px 0px 15px 15px"
        />
        <q-tab
          name="bulan"
          label="Bulan ini"
          style="border-radius: 0px 0px 15px 15px"
        />
        <q-tab
          name="custom"
          label=" Custom"
          style="border-radius: 0px 0px 15px 15px"
        />
      </q-tabs>

      <div
        class="row text-left q-pl-md q-pt-sm text-weight-regular"
        style="font-size: 20px; color: #756a6a"
      >
        Transaksi
      </div>
      <!-- List Pesanan -->
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="hari">
          <!-- Skeleton -->
          <div v-if="isLoad">
            <q-item
              v-for="n in 9"
              :key="n"
              class="q-my-sm q-mx-md"
              style="
                border-radius: 10px 10px 10px 10px;
                background-color: #fafafa;
              "
            >
              <q-item-section avatar >
                <q-skeleton size="60px" type="QAvatar"/>
              </q-item-section>

              <q-item-section class="self-center">
                <q-item-label class="text-weight-medium">
                  <q-skeleton type="text" height="20px"/>
                </q-item-label>
                <q-item-label>
                  <q-skeleton type="text" width="15vw"/>
                </q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label class="self-center on-right">
                  <q-skeleton width="50px" type="text" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <q-list
            v-else-if="isLoad == false && orders.length"
            bordered
            separator
            class="q-mx-md q-my-xs"
            style="background-color: #fff; border-radius: 20px 20px 20px 20px"
          >
            <q-item
              v-for="order in orders"
              :key="order.id"
              class="q-my-sm q-mx-md"
              clickable
              @click="$router.push(`/detail-transaksi/${order.id}`)"
            >
              <q-item-section avatar>
                <q-avatar
                  color="primary"
                  text-color="white"
                  size="60px"
                  style="margin-left: -20px"
                >
                  <q-img
                    src="~/assets/avatar-box.png"
                    alt="avatar-box"
                    no-spinner
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section class="self-center">
                <q-item-label class="text-weight-medium">{{
                  order.customer.name
                }}</q-item-label>
                <q-item-label caption lines="1" class="q-mb-sm">
                  {{ moment(order.created_at).format("lll") }}</q-item-label
                >
              </q-item-section>

              <q-item-section
                class="text-weight-regular"
                side
                style="color: #54d240; font-size: 12px"
              >
                +100.000
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>
        <q-tab-panel name="minggu">
          <!-- Skeleton -->
          <div v-if="isLoad">
            <q-item
              v-for="n in 9"
              :key="n"
              class="q-my-sm q-mx-md"
              style="
                border-radius: 10px 10px 10px 10px;
                background-color: #fafafa;
              "
            >
              <q-item-section avatar >
                <q-skeleton size="60px" type="QAvatar"/>
              </q-item-section>

              <q-item-section class="self-center">
                <q-item-label class="text-weight-medium">
                  <q-skeleton type="text" height="20px"/>
                </q-item-label>
                <q-item-label>
                  <q-skeleton type="text" width="15vw"/>
                </q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label class="self-center on-right">
                  <q-skeleton width="50px" type="text" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <q-list
            v-else-if="isLoad == false && orders.length"
            bordered
            separator
            class="q-mx-md q-my-xs"
            style="background-color: #fff; border-radius: 20px 20px 20px 20px"
          >
            <q-item
              v-for="order in orders"
              :key="order.id"
              class="q-my-sm q-mx-md"
              clickable
              @click="$router.push(`/detail-transaksi/${order.id}`)"
            >
              <q-item-section avatar>
                <q-avatar
                  color="primary"
                  text-color="white"
                  size="60px"
                  style="margin-left: -20px"
                >
                  <q-img
                    src="~/assets/avatar-box.png"
                    alt="avatar-box"
                    no-spinner
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section class="self-center">
                <q-item-label class="text-weight-medium">{{
                  order.customer.name
                }}</q-item-label>
                <q-item-label caption lines="1" class="q-mb-sm">
                  {{ moment(order.created_at).format("lll") }}</q-item-label
                >
              </q-item-section>

              <q-item-section
                class="text-weight-regular"
                side
                style="color: #54d240; font-size: 12px"
              >
                +100.000
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>
        <q-tab-panel name="bulan">
          <!-- Skeleton -->
          <div v-if="isLoad">
            <q-item
              v-for="n in 9"
              :key="n"
              class="q-my-sm q-mx-md"
              style="
                border-radius: 10px 10px 10px 10px;
                background-color: #fafafa;
              "
            >
              <q-item-section avatar >
                <q-skeleton size="60px" type="QAvatar"/>
              </q-item-section>

              <q-item-section class="self-center">
                <q-item-label class="text-weight-medium">
                  <q-skeleton type="text" height="20px"/>
                </q-item-label>
                <q-item-label>
                  <q-skeleton type="text" width="15vw"/>
                </q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label class="self-center on-right">
                  <q-skeleton width="50px" type="text" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <q-list
            v-else-if="isLoad == false && orders.length"
            bordered
            separator
            class="q-mx-md q-my-xs"
            style="background-color: #fff; border-radius: 20px 20px 20px 20px"
          >
            <q-item
              v-for="order in orders"
              :key="order.id"
              class="q-my-sm q-mx-md"
              clickable
              @click="$router.push(`/detail-transaksi/${order.id}`)"
            >
              <q-item-section avatar>
                <q-avatar
                  color="primary"
                  text-color="white"
                  size="60px"
                  style="margin-left: -20px"
                >
                  <q-img
                    src="~/assets/avatar-box.png"
                    alt="avatar-box"
                    no-spinner
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section class="self-center">
                <q-item-label class="text-weight-medium">{{
                  order.customer.name
                }}</q-item-label>
                <q-item-label caption lines="1" class="q-mb-sm">
                  {{ moment(order.created_at).format("lll") }}</q-item-label
                >
              </q-item-section>

              <q-item-section
                class="text-weight-regular"
                side
                style="color: #54d240; font-size: 12px"
              >
                +100.000
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>
        <q-tab-panel name="custom">
          <div class="row justify-between q-ma-md">
            <div
              class="text-left text-weight-regular self-center"
              style="font-size: 12px; color: #888888"
            >
              Custom Tanggal
            </div>

            <q-btn
              :ripple="true"
              dense
              no-caps
              outline
              class="q-px-sm"
              style="width: 100px"
            >
              <div class="text-left" style="color: #888888">Harian</div>
              <q-space />
              <q-icon name="fas fa-chevron-down" size="15px"></q-icon>

              <q-popup-proxy
                ref="qDateProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date" range>
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-btn>

            <!-- <q-select
              style="width: 130px"
              outlined
              dense
              label="Harian"
              color="grey"
              class="bg-transparent no-shadow"
            ></q-select> -->
          </div>

          <!-- Skeleton -->
          <div v-if="isLoad" class="q-mx-md q-my-xs">
            <q-item
              v-for="n in 9"
              :key="n"
              class="q-my-sm q-mx-md"
              style="
                border-radius: 10px 10px 10px 10px;
                background-color: #fafafa;
              "
            >
              <q-item-section avatar >
                <q-skeleton size="60px" type="QAvatar"/>
              </q-item-section>

              <q-item-section class="self-center">
                <q-item-label class="text-weight-medium">
                  <q-skeleton type="text" height="20px"/>
                </q-item-label>
                <q-item-label>
                  <q-skeleton type="text" width="15vw"/>
                </q-item-label>
              </q-item-section>

              <q-item-section>
                <q-item-label class="self-center on-right">
                  <q-skeleton width="50px" type="text" />
                </q-item-label>
              </q-item-section>
            </q-item>
          </div>

          <q-list
            v-else-if="isLoad == false && orders.length"
            bordered
            separator
            class="q-mx-md q-my-xs"
            style="background-color: #fff; border-radius: 20px 20px 20px 20px"
          >
            <q-item
              v-for="order in orders"
              :key="order.id"
              class="q-my-sm q-mx-md"
              clickable
              @click="$router.push(`/detail-transaksi/${order.id}`)"
            >
              <q-item-section avatar>
                <q-avatar
                  color="primary"
                  text-color="white"
                  size="60px"
                  style="margin-left: -20px"
                >
                  <q-img
                    src="~/assets/avatar-box.png"
                    alt="avatar-box"
                    no-spinner
                  />
                </q-avatar>
              </q-item-section>

              <q-item-section class="self-center">
                <q-item-label class="text-weight-medium">{{
                  order.customer.name
                }}</q-item-label>
                <q-item-label caption lines="1" class="q-mb-sm">
                  {{ moment(order.created_at).format("lll") }}</q-item-label
                >
              </q-item-section>

              <q-item-section
                class="text-weight-regular"
                side
                style="color: #54d240; font-size: 12px"
              >
                +100.000
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import moment from "moment";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["Auth"]),
  },

  data() {
    return {
      date: ref("2022/01/19"),
      tab: "hari",
      orders: [],
      isLoad: false,
    };
  },

  mounted() {
    this.getOrders();
  },

  methods: {
    moment() {
      return moment();
    },

    getOrders() {
      this.isLoad = true;
      this.$store
        .dispatch("Orders/getOrdersByShop", this.Auth.auth.shop.id)
        .then((res) => {
          this.orders = res.data;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isLoad = false;
        });
    },
  },
};
</script>

<style>
#thing_to_stick {
  position: sticky;
  top: 0px;
  z-index: 999;
}
</style>
