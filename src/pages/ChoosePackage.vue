<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/basket">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Pilih Paket</q-toolbar-title
        >

        <!-- <q-btn
          @click="addPackage()"
          no-caps
          flat
          color="grey"
          class="text-right"
        >
          <div class="text-weight-medium">Selesai</div>
        </q-btn> -->

      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>

        <q-card flat class="q-mt-sm no-shadow">
          <div
            class="q-px-md q-py-sm text-weight-regular"
            style="color: #888888; font-size: 16px"
          >
            <div class="row">
              <div class="col-6">
                <q-input
                  dense
                  class="q-ml-sm text-caption"
                  type="search"
                  style="width: 150px; color: black; font-size: 15px"
                  rounded
                  outlined
                  v-model="search"
                  placeholder="Cari Paket"
                >
              <q-icon
                name="search"
                class="self-center"
                size="20px"
                color="grey"
              />
            </q-input>
              </div>
              <div class="col-6">
                <div class="row justify-end">
                  <div class="col-6">
                    <q-select
                      flat
                      label-color="black"
                      dense
                      option-label="name"
                      label="Filter"
                      color=""
                      class="bg-transparent no-shadow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card>
        
          <!-- <q-card class="no-shadow">
            <q-card-section>
              <div class="row">
                <div class="col-6">
                  <q-input
                    dense
                    v-model="search"
                    outlined
                    rounded
                    type="search"
                    label="Cari"
                  >
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </div>
                <div class="col-6"></div>
              </div>
            </q-card-section>
          </q-card> -->

        <!-- Skeleton -->
        <div v-if="isLoad == true">
          <div>
            <q-list>
              <q-item
                clickable                
                v-for="n in 5"
                :key="n"
                class="bg-white q-mt-sm"
              >
                <q-item-section avatar>
                  <q-skeleton size="20px" />
                </q-item-section>
                <q-item-section>
                  <q-skeleton type="text" width="130px"/>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <div v-else-if="isLoad == false && packages.length">
          <div>
            <q-list>
              <q-item
                clickable
                @click="choosed(paket.id)"
                v-for="paket in packages"
                :key="paket.id"
                class="bg-white q-mt-sm"
              >
                <q-item-section avatar>
                  <q-img src="~/assets/package-icon.svg" style="width: 60%" />
                </q-item-section>
                <q-item-section>
                  {{ paket.name }}
                </q-item-section>
                <q-item-section side>
                  <div v-if="paket.choosed">
                    <q-icon name="done" size="md" />
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <div v-else>
          <div class="text-center" style="margin-top: 65px">
            <img
              src="~/assets/kategori-kosong-unscreen.gif"
              style="width: 275px; height: 275px"
            />
          </div>
          <div class="text-center text-weight-bold q-pa-md">
            Belum ada Kategori
          </div>
        </div>

        <div class="absolute-bottom" v-if="packages.length">
          <q-btn no-caps class="full-width q-py-sm" style="background-color:#49C2C0" @click="addPackage()">
            <div class="text-weight-regular" style="color:white;">
              Tambah Paket
            </div>
          </q-btn>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["categoryid"],
  computed: {
    ...mapState(["Orders"]),
  },
  data() {
    return {
      dialogAddPackage: false,
      search: null,
      packages: [],
      isLoad: false,
    };
  },
  methods: {
    getPackages() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store.dispatch("Services/getServicesByCategory", this.categoryid).then((res) => {
        this.packages = res.data;
      }).catch((err) => {
            reject(err);
            
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
      
    },
    choosed(id) {
      this.packages = this.packages.map((item) => {
        if (item.id == id) {
          item.choosed = true;
        } else {
          item.choosed = false;
        }
        return item;
      });
    },
    addPackage() {
      // this.dialogAddPackage = true;
      
      this.packages.forEach((paket) => {
        if (paket.choosed) {
          
          const payload = {
            id: this.categoryid,
            paket: paket,
          };

          this.$store.commit("Orders/add_paket_in_chart", payload)
          // console.log(this.Orders.order.charts)
          this.$router.push("/basket")
        }
      });
    },
  },
  mounted() {
    this.getPackages();
  },
};
</script>

<style></style>
