<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/add-clothes">
          <q-icon size="25px" name="fas fa-arrow-left" style="color: #888888">
          </q-icon>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Tambah Jenis Pakaian</q-toolbar-title
        >
        <q-btn flat color="grey-6" label="Tambah" size="md" @click="inputClothesType()"/>
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <q-input
          borderless
          v-model="clothes_type"
          class="q-pl-md q-my-md text-weight-regular"
          label="Jenis Pakaian"
          style="background-color: #ffffff; color: #888888; font-size: 16px"
        />

        <q-card flat class="q-mt-md">
          <div
            class="q-pa-md text-weight-regular"
            style="color: #888888; font-size: 16px"
          >
            <div class="row">
              <div class="col-6">
                <div class="text-subtitle1">Hitungan Menurut</div>
              </div>
              <div class="col-6">
                <div class="row justify-end">
                  <div class="col-6">
                    <q-select
                      dense
                      outlined
                      v-model="selectedUnit"
                      option-label="name"
                      :options="service_units"
                      label="Pilih"
                      color="grey"
                      class="bg-transparent no-shadow"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- <q-btn-dropdown
              no-caps
              style="float: right; margin-top: -6px"
              color="grey"
              class="bg-transparent no-shadow"
              outline
              :label="selectedCategory ? selectedCategory.name : 'Pilih'"
              @click="onMainClick"
            >
              <q-list>
                <q-item
                  no-caps
                  clickable
                  v-close-popup
                  v-for="category in categories"
                  :key="category.name"
                  @click="onItemClick(category)"
                >
                  <q-item-section>
                    <q-item-label>{{ category.name }} </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown> -->
          </div>
        </q-card>

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn fab round style="width: 60px; height: 60px">
            <img src="~/assets/cart-pesanan.svg" />
          </q-btn>
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      service_units: [],
      selectedUnit: null,
      clothes_type: null
    };
  },
  mounted() {
    this.getUnitsCategories();
  },
  methods: {
    getUnitsCategories() {
      this.$store.dispatch("ServiceUnits/index").then((res) => {
        this.service_units = res.data.map((item) => {
          return {
            name: item.name,
            id: item.id,
          };
        });
      });
    },
    inputClothesType(){
      const payload = {
        name: this.clothes_type,
        service_unit_id: this.selectedUnit.id
      }
      this.$store.dispatch("ServiceCategories/store", payload).then(res => {
        this.$router.push('/list-type-of-clothes')
        this.$q.notify("Berhasil menambah jenis pakaian")
      })
    }
  },
};
</script>

<style></style>
