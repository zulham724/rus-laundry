<template>

  <q-slide-item
    v-if="paket != null"
    :ref="`paket_${paket.id}`"
    @right="onRight"
    right-color="white"
    center-color="black"
  >
    <template v-slot:right class="full-width">
      <div class="row full-width">
        <div class="col-9">
          <q-input
            :disable="Loading"
            v-model="text"
            label="Ubah nama paket"
            dense
          >
            <template v-slot:append>
              <q-btn
                flat
                round
                color="black"
                icon="close"
                @click="buttonBack"
                size="40%"
              />
              <!-- <q-icon name="close"  @click="text = '' && buttonBack" size="80%" /> -->
            </template>
          </q-input>
        </div>
        <div class="col-3 text-center self-center">
          <q-btn
            :disable="Loading"
            @click="updateName"
            flat
            label="simpan"
            color="white"
            text-color="black"
          />
        </div>
      </div>
    </template>

    <q-item>
      <q-item-section>
        <q-item-label> {{ paket.name }} </q-item-label>
        <q-item-label caption>{{
          paket.category.service_unit.name
        }}</q-item-label>
      </q-item-section>
      <q-item-section side v-if="chooseMode">
        <q-checkbox v-model="paket.checked" />
      </q-item-section>
    </q-item>
  </q-slide-item>
</template>
<script>
import { debounce } from "quasar";
import { useQuasar } from "quasar";
import { onBeforeUnmount } from "vue";

export default {
  props: {
    paket:null,
    chooseMode:false,
  },

  name: "package-list-first-list",
  data() {
    return {
      search: null,
      packages: [],
      packages_temp: [],
      dialog_addPackage: false,
      dialog_deletePackage: false,
      //ini untuk men-disable input saat proses save
      loading: false,
      isLoad: false,
      filterOptions: ["Terbaru", "Terlama", "A-Z", "Z-A"],
      selectedFilterOption: null,
      Loading: false,
      //ini untuk menyimpan string ketika updata nama
      text: "",
    };
  },

  mounted() {
    this.filterCategory = debounce(this.filterCategory, 1000);
    // this.getPackages();
    this.text = this.paket.name;
  },

  methods: {
    buttonAddClothes() {
      this.dialogTambahPakaian = true;
    },
    getPackages() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("Services/index")
          .then((res) => {
            this.packages = this.packages_temp = res.data.map((item) => {
              item.checked = false;
              return item;
            });
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    update(value) {
      if (value == "") {
        this.packages = this.packages_temp;
      }

      const needle = value.toLowerCase();
      this.packages = this.packages_temp.filter(
        (v) => v.name.toLowerCase().indexOf(needle) > -1
      );
      if (!this.categories.length) {
        this.categories = this.categories_temp.filter(
          (v) => v.service_unit.name.toLowerCase().indexOf(needle) > -1
        );
      }
    },
    filterCategory(val) {
      this.update(val);
    },
    deletePackage() {
      this.loading = true;
      let package_choosed = this.packages
        .filter((item) => item.checked)
        .map((item) => item.id);

      this.$store
        .dispatch("Services/destroy", package_choosed)
        .then((res) => {
          this.packages = this.packages.filter((item) => !item.checked);
          this.$q.notify("Berhasil");
        })
        .finally(() => {
          this.loading = false;
        });
    },

    refresh(done) {
      this.getPackages().then((res) => {
        if (done) done();
      });
    },
    updateName(reset) {
      this.Loading = true;
      const payload = {
        id: this.paket.id,
        name: this.text,
      };
      this.$store
        .dispatch("Services/updateName", payload)
        .then((res) => {
          this.Loading = true;
          this.paket.name = res.data.name;
        })
        .finally(() => {
          this.$refs["paket_" + this.paket.id].reset();
          this.Loading = false;
        });
    },
    buttonBack(reset) {
      this.$refs["paket_" + this.paket.id].reset();
      this.text = this.paket.name;
    }
  },
};
</script>
<style>
.q-slide-item__right {
  justify-content: normal;
  width: 100%;
  /* background-color: blueviolet; */
}

.q-slide-item__right > div {
  width: 100%;
  /* background-color:aqua; */
  padding: 0px;
}
</style>