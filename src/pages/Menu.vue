<template class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
  <q-page-container>
    <q-page style="background-color: #fafafa">
      <div
        class="text-center"
        style="
          border-radius: 0px 0px 0px 70px;
          background-image: linear-gradient(to bottom right, #1ca9f9, #b761ec);
        "
      >
        <q-img
          no-spinner
          src="~/assets/header-menu-1.svg"
          alt="header-menu"
          class="shadow-1"
          style="border-radius: 0px 0px 0px 70px; height: 25vh"
        >
        </q-img>
      </div>

      <q-list separator style="background-color: #fafafa" class="q-mt-xs">
        <q-item
          class="q-py-md"
          clickable
          style="background-color: #ffffff"
          @click="$router.push('/add-item')"
        >
          <q-item-section avatar class="self-center">
            <q-avatar square size="40px">
              <q-img
                no-spinner
                src="~/assets/kategori-layanan.svg"
                width="40px"
                height="40px"
              ></q-img>
            </q-avatar>
          </q-item-section>

          <q-item-section class="self-center">
            <q-item-label
              class="text-weight-regular"
              style="color: #888888; font-size: 16px"
            >
              Kategori Layanan
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          class="q-py-md"
          clickable
          style="background-color: #ffffff"
          @click="$router.push('/employee')"
        >
          <q-item-section avatar class="self-center">
            <q-avatar square size="40px">
              <q-img
                no-spinner
                src="~/assets/karyawan.svg"
                width="40px"
                height="40px"
              ></q-img>
            </q-avatar>
          </q-item-section>

          <q-item-section class="self-center">
            <q-item-label
              class="text-weight-regular"
              style="color: #888888; font-size: 16px"
            >
              Karyawan
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          class="q-py-md"
          clickable
          style="background-color: #ffffff"
          @click="$router.push('/customer')"
        >
          <q-item-section avatar class="self-center">
            <q-avatar square size="40px">
              <q-img
                no-spinner
                src="~/assets/pelanggan.svg"
                width="40px"
                height="40px"
              ></q-img>
            </q-avatar>
          </q-item-section>

          <q-item-section class="self-center">
            <q-item-label
              class="text-weight-regular"
              style="color: #888888; font-size: 16px"
            >
              Pelanggan
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          class="q-py-md"
          clickable
          style="background-color: #ffffff"
          @click="$router.push('/connect-to-printer')"
        >
          <q-item-section avatar class="self-center">
            <q-avatar square size="40px">
              <q-img
                no-spinner
                src="~/assets/hubungkan-perangkat.svg"
                width="40px"
                height="40px"
              ></q-img>
            </q-avatar>
          </q-item-section>

          <q-item-section class="self-center">
            <q-item-label
              class="text-weight-regular"
              style="color: #888888; font-size: 16px"
            >
              Hubungkan perangkat
            </q-item-label>
          </q-item-section>

          <q-item-section side class="text-center justify-center">
            <div
              class="justify-center text-center"
              v-if="$store.getters['Printer/get_connected_printer']"
            >
              <q-avatar size="30px">
                <q-img
                  no-spinner
                  src="~/assets/status-print-name.svg"
                  width="30px"
                  height="30px"
                ></q-img>
              </q-avatar>

              <q-item-label
                class="text-weight-regular text-center"
                style="color: #888888; font-size: 10px"
              >
                {{ $store.getters["Printer/get_connected_printer"].name }}
              </q-item-label>
            </div>
          </q-item-section>
        </q-item>
        <q-item
          class="q-py-md"
          clickable
          style="background-color: #ffffff"
          @click="$router.push('/attendance')"
        >
          <q-item-section avatar class="self-center">
            <q-avatar square size="40px">
              <q-img
                no-spinner
                src="~/assets/rekab-absen.svg"
                width="40px"
                height="40px"
              ></q-img>
            </q-avatar>
          </q-item-section>

          <q-item-section class="self-center">
            <q-item-label
              class="text-weight-regular"
              style="color: #888888; font-size: 16px"
            >
              Rekab absen
            </q-item-label>
          </q-item-section>
        </q-item>
        <!--<q-item class="q-py-md" clickable style="background-color: #ffffff">
          <q-item-section avatar class="self-center">
            <q-avatar square size="40px">
              <q-img no-spinner src="~/assets/pengeluaran.svg" width="40px" height="40px"></q-img>
            </q-avatar>
          </q-item-section>

          <q-item-section class="self-center">
            <q-item-label
              class="text-weight-regular"
              style="color: #888888; font-size: 16px"
            >
              Pengeluaran
            </q-item-label>
          </q-item-section>
        </q-item>-->
        <q-item class="q-py-md" clickable style="background-color: #ffffff">
          <q-item-section avatar class="self-center">
            <q-avatar square size="40px">
              <q-img
                no-spinner
                src="~/assets/pesan-masal.svg"
                width="40px"
                height="40px"
              ></q-img>
            </q-avatar>
          </q-item-section>

          <q-item-section class="self-center">
            <q-item-label
              class="text-weight-regular"
              style="color: #888888; font-size: 16px"
            >
              Kirim pesan massal
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item class="q-py-md" clickable style="background-color: #ffffff">
          <q-item-section avatar class="self-center">
            <q-avatar square size="40px">
              <q-img
                no-spinner
                src="~/assets/setting-akun.svg"
                width="40px"
                height="40px"
              ></q-img>
            </q-avatar>
          </q-item-section>

          <q-item-section class="self-center">
            <q-item-label
              class="text-weight-regular"
              style="color: #888888; font-size: 16px"
            >
              Pengaturan akun
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          @click="buttonLogout()"
          class="q-py-md q-mt-md"
          clickable
          style="background-color: #ffffff"
        >
          <q-item-section class="self-center">
            <q-item-label
              class="text-weight-regular text-center"
              style="color: #e75252; font-size: 20px"
            >
              Keluar
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>
      </q-list>

      <q-dialog v-model="dialogLogout">
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-weight-bold text-left" style="font-size: 15px">
              Logout
            </div>
            <div class="text-weight-light text-left" style="font-size: 10px">
              yakin ingin logout sekarang?
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
                  @click="doLogout()"
                  class="shadow-1"
                  no-caps
                  flat
                  label="Logout"
                  style="background-color: #49c2c0; color: white"
                />
              </div>
            </div>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
  </q-page-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialogLogout: false,
    };
  },
  computed: {
    // ...mapGetters(["Printer/get_connected_printer"]),
  },
  mounted() {},
  methods: {
    buttonLogout() {
      this.dialogLogout = true;
    },
    doLogout() {
      this.$store.dispatch("Auth/logout").then((res) => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style></style>
