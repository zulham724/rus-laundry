<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-header>
      <q-toolbar class="bg-white q-py-md">
        <q-btn flat round size="10px" to="/basket">
          <q-avatar size="25px" icon="fas fa-arrow-left" style="color: #888888">
          </q-avatar>
        </q-btn>
        <q-toolbar-title
          class="text-left text-weight-medium"
          style="color: #888888; font-size: 16px"
          >Tambah Paket Baru</q-toolbar-title
        >
        <q-btn
          to="/confirm-package"
          no-caps
          flat
          color="grey"
          class="text-right"
        >
          <div class="text-weight-medium">Selesai</div>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container style="background-color: #fafafa">
      <q-page>
        <q-card flat class="q-mt-md bg-white text-subtitle2">
          <q-input
            class="text-subtitle2"
            bg-color="white"
            filled
            flat
            color="transparent"
            label="Nama Paket"
          />
        </q-card>

        <q-input
          class="q-my-sm text-subtitle2"
          label="Harga"
          filled
          bg-color="white"
          color="transparent"
        >
          <template v-slot:append>
            <q-btn-dropdown
              no-caps
              style="float: right"
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
          </template>
        </q-input>

        <q-card flat class="q-my-sm bg-white text-subtitle2">
          <q-input
            class="text-subtitle2"
            bg-color="white"
            filled
            flat
            color="transparent"
            label="Waktu Pengerjaan"
          />
        </q-card>

        <q-card
          flat
          no-caps
          class="q-my-sm q-px-md text-caption bg-white"
          style="color: silver"
        >
          Jenis Pakaian
        </q-card>

        <q-card flat class="q-mt-sm full-width">
          <q-card-actions>
            <div
              class="text-subtitle2 text-left q-pa-sm"
              style="color: #888888"
            >
              Pakaian halus
            </div>
            <q-space></q-space>
            <div class="text-caption q-pr-md" style="color: grey">
              kilogram(kg)
            </div>
            <div class="q-px-sm">
              <img
                src="~/assets/cart-pesanan.svg"
                style="width: 25px; height: 25px"
              />
            </div>
          </q-card-actions>
        </q-card>
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
