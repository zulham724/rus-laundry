<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-header class="text-center">
      <q-toolbar class="bg-white">
        <q-btn flat round @click="$router.back()">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #49c2c0">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #3a3838; font-size: 20px"
          >Pengeluaran
        </q-toolbar-title>
        <q-item-section
          side
          class="text-left text-weight-medium"
          style="color: #5a5656; font-size: 15px"
        >
          <q-btn @click="storeSpend()" no-caps dense flat>
            <div>Simpan</div></q-btn
          >
        </q-item-section>
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-pull-to-refresh>
        <q-page>
          <q-form ref="form">
            <q-input
              class="q-px-sm q-py-md"
              outlined
              label="Nama Pengeluaran"
              v-model="newSpend.name"
            />
            <q-input
              class="q-px-sm q-py-md"
              outlined
              v-model="newSpend.created_at"
              type="date"
            />
            <q-input
              class="q-px-sm q-py-md"
              outlined
              label="Jumlah Pengeluaran"
              type="number"
              v-model="newSpend.value"
            />
            <q-input
              class="q-px-sm q-py-md"
              outlined
              label="Deskripsi"
              type="textarea"
              v-model="newSpend.note"
            />
          </q-form>
        </q-page>
        <q-footer>
          <q-btn
            @click="alert = true"
            class="full-width"
            no-caps
            style="background-color: #49c2c0; color: #fafafa"
          >
            Laporkan
          </q-btn>

          <q-dialog v-model="alert">
            <q-card>
              <q-card-section>
                <q-img
                  no-spinner
                  src="~/assets/report.gif"
                  style="width: 200px"
                />
              </q-card-section>

              <q-card-section>
                Kami telah menerima laporanmu. <br />
                Terimakasih.
              </q-card-section>

              <q-card-section align="right">
                <q-btn flat label="OK" v-close-popup> </q-btn>
              </q-card-section>
            </q-card>
          </q-dialog>
        </q-footer>
      </q-pull-to-refresh>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState } from "vuex";
import { ref } from "vue";
export default {
  computed: {
    ...mapState(["Printer"]),
  },
  data() {
    return {
      printers: [],
      newSpend: {},
      spend: {},
    };
  },
  methods: {
    storeSpend() {
      this.$store
        .dispatch("Spend/store", this.newSpend)
        .then((res) => {
          resolve(res.data);
        })
        .finally(() => {
          this.$router.push(`/income`);
        });
    },
  },
  mounted() {},
};
</script>

<style></style>
