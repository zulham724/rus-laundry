<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Tambah Paket Baru</q-toolbar-title
        >
        <q-btn
          @click="store()"
          no-caps
          flat
          color="grey"
          class="text-right"
        >
          <div class="text-weight-medium">Tambah</div>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <q-card flat class="q-mt-md bg-white text-subtitle2">
          <q-input
          v-model="package.name"
            class="text-subtitle2"
            bg-color="white"
            filled
            flat
            color="transparent"
            label="Nama Paket"
          />
        </q-card>

        <q-input
        v-model="package.price"
          class="q-my-sm text-subtitle2"
          label="Harga"
          filled
          bg-color="white"
          color="transparent"
        >
          <template v-slot:append>
            <q-btn
              no-caps
              style="float: right"
              color="grey"
              class="bg-transparent no-shadow q-mr-sm"
              outline
              :label="'/'+service_category.service_unit.name"
            />
          </template>
        </q-input>

        <q-card flat class="q-my-sm bg-white text-subtitle2">
          <q-input
          v-model="package.process_time"
            class="text-subtitle2"
            bg-color="white"
            filled
            flat
            color="transparent"
            label="Waktu Pengerjaan"
          />
        </q-card>

        <q-card
          flat
          no-caps
          class="q-my-sm q-px-md text-caption bg-white"
          style="color: silver"
        >
          Jenis Pakaian
        </q-card>

        <q-card flat class="q-mt-sm full-width">
          <q-card-actions>
            <div
              class="text-subtitle2 text-left q-pa-sm"
              style="color: #888888"
            >
              {{ service_category.name }}
            </div>
            <q-space></q-space>
            <div class="text-caption q-pr-md" style="color: grey">
              {{ service_category.service_unit.name }}
            </div>
            <div class="q-px-sm">
              <img
                src="~/assets/cart-pesanan.svg"
                style="width: 25px; height: 25px"
              />
            </div>
          </q-card-actions>
        </q-card>

        <q-dialog v-model="dialogTambahPaket">
            <q-card>
              <q-card-section>
                <div
                  class="text-weight-bold text-left"
                  style="font-size: 16px"
                >
                  Tambah pakaian baru?
                </div>

                <div
                  class="text-weight-light text-left q-mt-none"
                  style="width: 300px; font-size: 12px"
                >
                  yakin ingin membuat jenis pakaian baru?
                </div>
              </q-card-section>

              <q-card-actions class="text-primary" vertical>
                <div class="col-9"></div>
                <div class="col-3 text-right"><q-btn
                class="text-white"
                  to="/input-new-clothes"
                  no-caps
                  flat
                  label="Oke"
                  style="width:30px;background-color: #49c2c0; color: white"
                /></div>
                </q-card-actions>
            </q-card>
          </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  props:["categoryid"],
  computed:{
    ...mapState(["Orders"])
  },
  data() {
    return {
      dialogTambahPaket: false,
      package: {},
      service_category: {
        service_unit:{}
      },
    };
  },
  mounted(){
    this.getCategory();
  },
  methods:{
    buttonAddPackage() {
      this.dialogTambahPaket = true;
    },
    getCategory(){
     this.service_category = this.Orders.order.cart.find(item => item.id == this.categoryid)
    },
    store(){
      this.package.service_category_id = this.categoryid
      this.$store.dispatch("Services/store", this.package).then(res => {
        this.$router.push(`/package-list-first/${this.categoryid}`)
        this.$q.notify("Paket telah ditambahkan")
      })
    }
  }
};
</script>

<style></style>
