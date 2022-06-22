<template>
  <q-layout
    class="mbl"
    view="lHh lpR fFf"
    style="background-color: #ffffff; height: 100%"
  >
    <q-header>
      <q-toolbar class="bg-white shadow-3">
        <q-btn no-caps flat style="color: white" @click="$router.back()">
          <q-icon size="20px" name="fas fa-arrow-left" style="color: #888888">
          </q-icon>
        </q-btn>

        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Cetak ID Card</q-toolbar-title
        >
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page v-if="employee">
        <q-card flat class="q-mt-lg bg-white q-mx-md" style="">
          <div class="row">
            <div>
              <q-avatar size="80px">
                <q-img :src="`${$storageUrl}/${employee.avatar}`" no-spinner />
              </q-avatar>
            </div>
            <div class="q-px-md">
              <div
                class="q-mt-sm text-center text-weight-medium q-px-sm"
                style="
                  background-color: #4cd4f2;
                  border-radius: 3px;
                  color: white;
                "
              >
                Karyawan
              </div>
              <div class="q-pt-xs text-weight-medium" style="color: #4cd4f2">
                Nomor ID
              </div>
              <div class="text-weight-medium" style="color: #756a6a">
                {{ employee.id }}
              </div>
            </div>
          </div>
          <div class="q-mt-xl text-weight-medium" style="color: #4cd4f2">
            Nama
          </div>
          <div class="text-subtitle2 text-weight-medium" style="color: #756a6a">
            {{ employee.name }}
          </div>

          <div class="q-mt-sm text-weight-medium" style="color: #4cd4f2">
            No telephone
          </div>
          <div class="text-subtitle2 text-weight-medium" style="color: #756a6a">
            {{ employee.contact_number }}
          </div>

          <div class="q-mt-sm text-weight-medium" style="color: #4cd4f2">
            Email
          </div>
          <div class="text-subtitl text-weight-medium" style="color: #756a6a">
            {{ employee.email }}
          </div>

          <div
            class="text-center text-weight-medium q-mt-xl"
            style="color: #756a6a"
          >
            Code QR untuk absen
          </div>
          <div class="row col-12 q-mt-sm text-center justify-center">
            <div
              class="full-width bg-transparent"
              style="width: 150px; height: 150px; z-index: 999"
            >
              <vue-qr
                :text="employee.id.toString()"
                :callback="getData"
                :qid="employee.id"
              ></vue-qr>
            </div>
          </div>
          
        </q-card>
        <div
          class="col-12 text-center"
          style="margin-top: 50px"
        >
          <q-img src="~/assets/bg-card.svg" no-spinner />
        </div>
        <!-- <div
          class="col-12 text-center absolute-bottom"
          style="margin-bottom: -50px"
        >
          <q-img src="~/assets/bg-card.svg" no-spinner />
        </div> -->
      </q-page>
      
      <q-footer class="elevated" v-if="false">
        <div style="background-color: #49c2c0; height: 60px">
          <q-btn
            @click="buttonPrintCard()"
            class="text-center q-pa-md text-subtitle1"
            style="width: 100%"
            no-caps
            flat
            color="white"
          >
            Cetak Kartu
          </q-btn>
        </div>
      </q-footer>

      <q-dialog v-model="dialogPrintCard">
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-weight-bold text-left" style="font-size: 15px">
              Cetak Kartu
            </div>
            <div class="text-weight-light text-left" style="font-size: 10px">
              yakin ingin mencetak kartu?
            </div>
          </q-card-section>

          <q-card-actions>
            <div class="row col-12">
              <div class="col-9 text-right q-pr-sm">
                <q-btn
                  class="shadow-1"
                  no-caps
                  flat
                  label="Batal"
                  style="color: #888888"
                  v-close-popup
                />
              </div>
              <div class="col-3 text-left q-pr-sm">
                <q-btn
                  class="shadow-1"
                  no-caps
                  flat
                  label="Oke"
                  style="background-color: #49c2c0; color: white"
                />
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>

<script>
import vueQr from "vue-qr/src/packages/vue-qr.vue";

export default {
  props: ["employeeid"],
  components: {
    vueQr,
  },
  data() {
    return {
      dialogPrintCard: false,
      employee: null,
    };
  },

  methods: {
    getData(dataUrl, id) {
      console.log(dataUrl, id);
    },

    buttonPrintCard() {
      this.dialogPrintCard = true;
    },
    getEmployee() {
      this.$store.dispatch("Employee/show", this.employeeid).then((res) => {
        this.employee = res.data;
      });
    },
  },
  mounted() {
    this.getEmployee();
  },
};
</script>

<style></style>
