<template>
  <q-dialog v-model="showDialog" ref="dialog" class="full-width" persistent>
    <q-card class="full-width">
      <q-card-section v-if="!printerList.length">
        <div class="text-center q-py-lg">
          <q-img
            src="~/assets/double-arrow-cross-of-shuffle1.png"
            width="20%"
          />
        </div>
        <div class="text-weight-bold text-center" style="font-size: 15px">
          Belum ada printer yang tersanding
        </div>
        <div
          class="text-weight-light text-center q-px-md"
          style="font-size: 12px"
        >
          Sandingkan device ke printer terlebih dahulu sebelum anda mencetak
          invoice
        </div>
        <div
          class="text-weight-light text-center q-px-md"
          style="font-size: 12px"
        >
          <q-btn
            class="text-center"
            color="white"
            flat
            text-color="#49C2C0"
            style="color: #49c2c0"
            label="Segarkan"
            @click="getListPrinters()"
          />
          <q-spinner v-if="loading" color="black" :thickness="2" />
        </div>
      </q-card-section>

      <q-card-section v-else>
        <div class="text-center q-py-lg">
          <q-img src="~/assets/pr.png" width="20%" />
        </div>
        <div class="text-weight-bold text-center" style="font-size: 15px">
          Belum ada printer yang terhubung
        </div>
        <div
          class="text-weight-light text-center q-px-md"
          style="font-size: 12px"
        >
          Hubungkan device ke printer terlebih dahulu sebelum anda mencetak
          invoice
        </div>
        <q-btn-dropdown
          :color="connectedPrinter ? 'green-5' : 'grey-5'"
          text-color="white"
          class="full-width q-my-lg"
          :label="
            connectedPrinter
              ? connectedPrinter.name
              : 'pilih printer yang tersanding'
          "
        >
          <q-list>
            <q-item
              v-ripple
              v-for="printer in printerList"
              :key="printer"
              clickable
              @click="printer.connect_status ? disconnect(printer.name) :  connect(printer.name)"
            >
              <div class="row full-width">
                <div class="col-2 self-center">
                  <q-img src="~/assets/image5.svg" width="80%" />
                </div>
                <div class="col-4 self-center">{{ printer.name }}</div>
                <div :loading="showDialog == false" class="col-6 self-center">
                  {{ printer.connect_status ? "Terhubung" : "Available" }}
                </div>
              </div>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-card-section>
    </q-card>
    <q-card class="bg-transparent" flat>
      <q-btn
        round
        color="white"
        flat
        class="bg-white no-shadow"
        @click="showDialog = false"
      >
        <q-img src="~/assets/aa.png" width="22px" />
      </q-btn>
    </q-card>
  </q-dialog>
</template>

<script>
import { mapState } from "vuex";
import { ref } from "vue";

export default {
  data() {
    return {
      tampilkan: true,
      fixed: ref(false),
      printerList: [],
      loading: false,
      showDialog: false,
      connectedPrinter: null,
      loading: false
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    closeDialog() {
      this.showDialog = false;
    },
    refresh() {
      this.init();
    },
    init(){
      this.$store.dispatch('Printer/run').then(res=>{
        this.printerList = res.available
        this.connectedPrinter = res.connected
        if(!res.connected){
          this.showDialog = true
        }
      }).catch(err=>{
        this.showDialog = true
      })
    },
    connect(name){
      this.$store.dispatch('Printer/connect',name).then(res=>{
        this.printerList = res.available
        this.connectedPrinter = res.connected
      })
    },
    disconnect(name){
      this.$store.dispatch('Printer/disconnect',name).then(res=>{
        this.printerList = res.available
        this.connectedPrinter = res.connected
      })
    },
    show() {
      // this.$refs.dialog.show();
    },

    // following method is REQUIRED
    // (don't change its name --> "hide")
    hide() {
      this.$refs.dialog.hide();
    },

    onDialogHide() {
      // required to be emitted
      // when QDialog emits "hide" event
      this.$emit("hide");
    },

    onOKClick() {
      // on OK, it is REQUIRED to
      // emit "ok" event (with optional payload)
      // before hiding the QDialog
      this.$emit("ok");
      // or with payload: this.$emit('ok', { ... })

      // then hiding dialog
      this.hide();
    },

    onCancelClick() {
      // we just need to hide dialog
      this.hide();
    },
  },
};
</script>

<style></style>
