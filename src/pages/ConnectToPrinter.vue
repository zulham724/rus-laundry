<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #49c2c0">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 20px"
          >Hubungkan Perangkat</q-toolbar-title
        >
        <q-btn class="float-right" text-color="grey-8" flat />
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-pull-to-refresh>
        <q-page>
          <div class="q-py-md q-px-md" style="color: #888888; font-size: 17px">
            Perangkat yang Tersedia
          </div>
          <q-list>
            <q-item v-for="(printer, p) in printers" :key="p" class="bg-white">
              <q-item-section avatar>
                <q-img src="~/assets/image5.svg" width="32px" />
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  <div>
                    {{ printer.name }}
                  </div>
                </q-item-label>
                <q-item-label caption>
                  <div v-if="printer.connect_status">Terhubung</div>
                  <div v-else>Tersedia</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn flat :ripple="false">
                  <q-icon name="fas fa-ellipsis-v" size="18px" />
                  <q-menu auto-close :offset="[-20, 0]">
                    <q-list style="min-width: 100px">
                      <q-item
                        v-if="!printer.connect_status"
                        clickable
                        @click="connectPrinter(printer.name)"
                      >
                        <q-item-section>Sambung Perangkat</q-item-section>
                      </q-item>
                      <q-item
                        v-else
                        clickable
                        @click="disconnectPrinter(printer.name)"
                      >
                        <q-item-section>Putus Perangkat</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-list>
          <div class="q-py-md q-px-md" style="color: #888888; font-size: 17px">
            Riwayat
          </div>
          <q-list>
            <q-item
              v-for="(history_printer, hp) in Printer.history_printers"
              :key="hp"
              class="bg-white"
            >
              <q-item-section avatar>
                <q-img src="~/assets/image5.svg" width="32px" />
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  <div>
                    {{ history_printer.name }}
                  </div>
                </q-item-label>
                <q-item-label caption>
                  <div v-if="history_printer.connect_status">Terhubung</div>
                  <div v-else>Terputus</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn flat :ripple="false">
                  <q-icon name="fas fa-ellipsis-v" size="18px" />
                  <q-menu auto-close :offset="[-20, 0]">
                    <q-list style="min-width: 100px">
                      <q-item
                        v-if="!history_printer.connect_status"
                        clickable
                        @click="connectPrinter(history_printer.name)"
                      >
                        <q-item-section>Sambung Perangkat</q-item-section>
                      </q-item>
                      <q-item
                        v-else
                        clickable
                        @click="disconnectPrinter(history_printer.name)"
                      >
                        <q-item-section>Putus Perangkat</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-list>
        </q-page>
      </q-pull-to-refresh>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["Printer"]),
  },
  data() {
    return {
      printers: [],
      histories: [],
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$store.dispatch('Printer/run').then(res=>{
        this.printers = res.available
      })
    },
    connectPrinter(name) {
      this.$store.dispatch("Printer/connect",name).then(res=>{
        this.printers = res.available
      })
    },
    disconnectPrinter(name) {
      this.$store.dispatch('Printer/disconnect',name).then(res=>{
        this.printers = res.available
      })
    },
  },
};
</script>

<style></style>
