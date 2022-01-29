<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round  @click="$router.back()">
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
            Printer Baru
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
                  <div>Paired</div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn flat :ripple="false">
                  <q-icon name="fas fa-ellipsis-v" size="18px" />
                  <q-menu auto-close :offset="[-20, 0]">
                    <q-list style="min-width: 100px">
                      <q-item clickable @click="connectPrinter(printer.name)">
                        <q-item-section>Sambung</q-item-section>
                      </q-item>
                      <q-item clickable @click="disconnectPrinter(printer.name)">
                        <q-item-section>Putus</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-btn>
              </q-item-section>
            </q-item>
          </q-list>
          <div class="q-py-md q-px-md" style="color: #888888; font-size: 17px">
            Riwayat Printer
          </div>
          <q-list>
            <q-item v-for="(history_printer, hp) in Printer.history_printers" :key="hp" class="bg-white">
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
                  <div v-if="history_printer.status_pairing">
                    Terhubung
                  </div>
                  <div v-else>
                    Terputus
                  </div>
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn flat :ripple="false">
                  <q-icon name="fas fa-ellipsis-v" size="18px" />
                  <q-menu auto-close :offset="[-20, 0]">
                    <q-list style="min-width: 100px">
                      <q-item clickable @click="connectPrinter(history_printer.name)">
                        <q-item-section>Sambung</q-item-section>
                      </q-item>
                      <q-item clickable @click=" disconnectPrinter(history_printer.name)">
                        <q-item-section>Putus</q-item-section>
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
    };
  },
  mounted() {
    this.$store.dispatch("Printer/getListPrinter").then(res => {
      this.printers = res
      console.log(this.Printer.history_printers)
      this.$store.dispatch("Printer/checkingConnectStatus", res)
    })
  },
  methods: {
    connectPrinter(name) {
      window.BTPrinter.connect(
        (data) => {
          console.log("Connected");
          console.log(data);
          this.printers.forEach((item) => {
            if(item.name == name){
              console.log("Status berubah")
              item.status_pairing = true
              this.$store.commit("Printer/update_connect_status_printer", {printer: item})
            }
          })
        },
        (err) => {
          console.log("Error");
          console.log(err);
        },
        name
      );
    },
    disconnectPrinter(name) {
      window.BTPrinter.disconnect(
        (data) => {
          console.log("Disconnected");
          console.log(data);
          this.printers.forEach((item) => {
            if(item.name == name){
               console.log("Status berubah")
              item.status_pairing = false
              this.$store.commit("Printer/update_connect_status_printer", {printer: item})
            }
          })
        },
        (err) => {
          console.log("Error");
          console.log(err);
        },
        name
      );
    },
  },
};
</script>

<style></style>
