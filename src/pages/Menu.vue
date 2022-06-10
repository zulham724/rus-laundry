<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container style="background-color: #fafafa">
      <q-page style="background-color: #fafafa">
        <!-- menu list -->
        <q-list
          separator
          style="background-color: #fafafa; position: relative"
          class="q-mt-xs"
        >
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
            @click="$router.push('/attendance-menu')"
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

          <q-item
            class="q-py-md"
            clickable
            style="background-color: #ffffff"
            @click="$router.push('/profile-account-setting')"
          >
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
            class="q-py-md"
            clickable
            style="background-color: #ffffff"
            @click="$router.push('/rekening-bank')"
          >
            <q-item-section avatar class="self-center">
              <q-avatar square size="40px">
                <q-img
                  no-spinner
                  src="~/assets/creditcard.png"
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
                Rekening Bank
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

        <!-- logout dialog -->
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
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      dialogLogout: false,
    };
  },
  computed: {
  },
  mounted() {},
  methods: {
    // function for popup logout dialog
    buttonLogout() {
      this.dialogLogout = true;
    },
    // function for logout
    doLogout() {
      let reset_auth_order_data = this.$store.dispatch("Orders/clear");
      let reset_auth_data = this.$store.dispatch("Auth/logout");

      Promise.all([reset_auth_order_data, reset_auth_data]).then((res) => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style></style>
