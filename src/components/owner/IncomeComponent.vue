<template>
  <div>
    <!-- loading -->
    <div v-if="isLoad" class="q-mt-sm q-px-sm" v-for="item in 5" :key="item">
      <q-item v-ripple class="bg-white shadow-1" style="border-radius: 25px">
        <q-item-section avatar>
          <q-avatar>
            <q-skeleton type="QAvatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label><q-skeleton type="text" width="80%" /></q-item-label>
          <q-item-label caption class="text-black"
            ><q-skeleton type="text" width="80%"
          /></q-item-label>
        </q-item-section>

        <q-item-section side style="width: 60px">
          <q-item-label caption style="color: #00ff38" class="full-width"
            ><q-skeleton type="text" class="full-width"
          /></q-item-label>
        </q-item-section>
      </q-item>
    </div>

    <!-- DATA -->
    <div
      v-else-if="isLoad == false && this.incomeData.length"
      class="q-mt-sm q-px-sm"
      v-for="item in incomeData"
      :key="item.id"
    >
      <q-item v-ripple class="bg-white shadow-1" style="border-radius: 25px">
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ item.customer }}</q-item-label>
          <q-item-label caption class="text-black">{{
            moment(item.created_at).locale("id").format("LL, HH:mm")
          }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-item-label caption style="color: #00ff38"
            >+{{
              new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(item.value)
            }}</q-item-label
          >
        </q-item-section>
      </q-item>
    </div>

    <!-- ITEM NULL -->
    <div v-else class="q-mt-sm q-px-sm text-center q-py-lg">
      <q-img src="~/assets/itmn.png" width="40%" />
      <div class="text-h6 q-py-sm">Tidak Ada Pemasukan</div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      isLoad: false,
      shopsId: [],
      incomeData: [],
    };
  },
  computed: {
    auth() {
      return this.$store.getters["Auth/auth"];
    },
  },
  mounted() {
    this.getShopId();
    this.getIncome();
  },
  methods: {
    moment,
    getIncome() {
      return new Promise((resolve, reject) => {
        let shopId = this.shopsId;
        this.isLoad = true;
        this.$store
          .dispatch("Payment/getIncome", shopId)
          .then((res) => {
            this.incomeData = res.data;
            let total = res.data.forEach((item) => {
              return item.value;
            });
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    getShopId() {
      return new Promise((resolve, reject) => {
        let shopsId = [];
        this.auth.slaves.forEach((slave) => {
          shopsId.push(slave.shop.id);
        });
        this.shopsId = shopsId;
        // console.log("ini shopsId", shopsId);
      });
    },
  },
};
</script>

<style></style>
