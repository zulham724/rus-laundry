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
        <q-btn
          @click="buttonTambah()"
          style="color: #d0caca"
          no-caps
          flat
          class="text-right"
        >
          <div class="text-weight-medium">Tambah</div>
        </q-btn>
        <q-dialog v-model="dialogConfirm">
          <q-card>
            <q-card-section>
              <div>
                <q-img
                  src="~/assets/confirm-package-unscreen.gif"
                  style="width: 80vw"
                ></q-img>
              </div>
            </q-card-section>

            <q-card-section>
              <div class="text-weight-bold text-center" style="font-size: 16px">
                Paket telah ditambahkan
              </div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="primary" to="/choose-package" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <q-input
          borderless
          class="q-pl-md q-my-md text-weight-regular"
          label="Jenis Pakaian"
          style="background-color: #ffffff; color: #888888; font-size: 16px"
        />

        <q-card flat class="q-mt-md">
          <div
            class="q-pa-md text-weight-regular"
            style="color: #888888; font-size: 16px"
          >
            Hitungan Menurut
            <q-btn-dropdown
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
            </q-btn-dropdown>
          </div>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      dialogConfirm: false,

      onMainClick() {},
      onItemClick(category) {
        this.selectedCategory = category;
      },

      categories: [
        {
          name: "kilogram(kg)",
        },
        {
          name: "Satuan(pcs)",
        },
      ],
      selectedCategory: null,
    };
  },

  methods: {
    buttonTambah() {
      this.dialogConfirm = true;
    },
  },
};
</script>

<style></style>
