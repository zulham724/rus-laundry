<template>
  <q-slide-item
    v-if="category != null"
    :ref="`category_${category.id}`"
    @right="onRight"
    right-color="white"
    center-color="black"
  >
    <template v-slot:right class="full-width">
      <div class="row full-width">
        <div class="col-9">
          <q-input v-model="text" label="Ubah nama pakaian" dense>
            <template v-slot:append>
              <q-btn
                flat
                round
                color="black"
                icon="close"
                @click="buttonBack && updateName"
                size="40%"
              />
              <!-- <q-icon name="close"  @click="text = '' && buttonBack" size="80%" /> -->
            </template>
          </q-input>
        </div>
        <div class="col-3 text-center self-center">
          <q-btn
            @click="buttonSimpan"
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
        <q-item-label> {{ category.name }} </q-item-label>
        <q-item-label caption>{{ category.service_unit.name }}</q-item-label>
      </q-item-section>
      <q-item-section side v-if="chooseMode">
        <q-checkbox v-model="categories[c].checkCategory" />
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
    category: null,
  },

  name: "add-clothes-list-component",
  data() {
    return {
      search: "",
      options: ["Terbaru", "Terlama", "A-Z", "Z-A"],
      categories: [],
      categories_temp: [],
      chooseMode: false,
      isLoad: false,
      val: null,
    };
  },

  methods: {
    buttonAddClothes() {
      this.dialogTambahPakaian = true;
    },
    getClothes() {
      return new Promise((resolve, reject) => {
        this.isLoad = true;
        this.$store
          .dispatch("ServiceCategories/index")
          .then((res) => {
            this.categories = this.categories_temp = res.data.map((item) => {
              item.checkCategory = false;
              return item;
            });
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
            // console.log(err);
          })
          .finally(() => {
            this.isLoad = false;
          });
      });
    },
    update(value) {
      if (value == "") {
        this.categories = this.categories_temp;
      }

      const needle = value.toLowerCase();
      this.categories = this.categories_temp.filter(
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
    deleteClothes() {
      let categories = this.categories
        .filter((item) => item.checkCategory)
        .map((item) => item.id);

      this.$store
        .dispatch("ServiceCategories/destroy", categories)
        .then((res) => {
          this.categories = this.categories.filter(
            (item) => !item.checkCategory
          );
          this.$q.notify("Berhasil");
        });
    },

    refresh(done) {
      this.getClothes().then((res) => {
        if (done) done();
      });
    },
    orderBy(val) {
      if (val == "Terbaru") {
        this.categories.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        });
      } else if (val == "Terlama") {
        this.categories.sort((a, b) => {
          return new Date(a.created_at) - new Date(b.created_at);
        });
      } else if (val == "A-Z") {
        this.categories.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      } else if (val == "Z-A") {
        this.categories.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
    },
    updateName() {
      let id = this.clothes.id;
      this.$store.dispatch("ServiceCategories", this.clothes).then((res) => {
        this.$router.push("/detail-clothes/${id}");
        this.$q.notify("Berhasil");
      });
    },
    // onRight({ reset }) {
    //   this.$q.notify("Right action triggered. Resetting in 100 second.");

    // },
    buttonSimpan(reset) {
      // const $q = useQuasar();[0].reset()
      // console.log(this.$refs.update);
      this.$refs["category_" + this.category.id].reset();
    },
    buttonBack(reset) {
      // const $q = useQuasar();
      this.$refs["category_" + this.category.id].reset();
    },
  },
  mounted() {
    this.filterCategory = debounce(this.filterCategory, 1000);
    this.getClothes();
  },

  // setup() {
  //   const $q = useQuasar();
  //   let timer;

  //   function finalize(reset) {
  //     timer = setTimeout(() => {
  //       reset();
  //     }, 1000);
  //   }

  //   onBeforeUnmount(() => {
  //     clearTimeout(timer);
  //   });

  //   return {
  //     onRight({ reset }) {
  //       $q.notify("Back button triggered. Resetting in 1 second.");
  //       finalize(reset);
  //     },
  //   };
  // },
};
</script>

<style>
.q-slide-item__right {
  justify-content: normal;
  width: 100%;
}

.q-slide-item__right > div {
  width: 100%;
  padding: 0px;
}
</style>
