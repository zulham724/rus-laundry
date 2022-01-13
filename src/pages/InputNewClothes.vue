<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/add-clothes">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Tambah Jenis Pakaian</q-toolbar-title
        >
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
};
</script>

<style></style>
