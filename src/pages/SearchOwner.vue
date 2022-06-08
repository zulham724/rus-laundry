<template>
  <q-layout class="mbl">
    <div class="fixed-top bg-white" style="z-index: 999">
      <q-header class="text-center shadow-1">
        <div class="row q-gutter-x-sm q-pa-md bg-white">
          <div class="col-1 self-center">
            <q-btn dense no-caps flat @click="$router.back()">
              <q-icon
                size="20px"
                name="fas fa-arrow-left"
                style="color: #3a3838"
              >
              </q-icon>
            </q-btn>
          </div>
          <div class="col-10">
            <div class="row justify-center">
              <q-input
                @update:model-value="filter(search)"
                dense
                class="q-mx-xs full-width"
                type="search"
                outlined
                v-model="search"
                placeholder="Cari"
              >
                <template v-slot:prepend>
                  <q-icon
                    name="search"
                    class="self-center"
                    size="25px"
                    color="grey"
                  />
                </template>
              </q-input>
            </div>
          </div>
        </div>
      </q-header>
    </div>

    <q-page-container>
      <q-page class="q-pt-sm">
        <!-- Histori pencarian -->
        <div
          class="row text-weight-medium q-px-md q-py-sm"
          v-if="list_history.length && !search.length"
        >
          <div class="row col-12 justify-between">
            <div
              class="col-6 text-left self-center"
              style="font-size: 15px; color: #3a3838"
            >
              Histori pencarian
            </div>
            <q-btn
              @click="clearAllHistory()"
              no-caps
              flat
              dense
              class="col-4 text-right self-center"
              style="font-size: 12px; color: #b1b1b1"
            >
              Hapus semua
            </q-btn>
          </div>

          <!-- List histori pencarian -->
          <q-list class="full-width">
            <div v-for="item in list_history.slice(0, 3)" :key="item.id">
              <q-item class="row q-gutter-none">
                <q-item-section avatar>
                  <q-icon
                    name="fas fa-history"
                    size="20px"
                    color="black"
                  ></q-icon>
                </q-item-section>

                <q-item-section>
                  <div style="color: #8b8787">{{ item.name }}</div>
                </q-item-section>

                <q-item-section side class="text-right">
                  <q-btn dense round flat @click="clearHistory(item)">
                    <q-icon
                      name="fas fa-times"
                      size="20px"
                      color="black"
                    ></q-icon>
                  </q-btn>
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </div>

        <!-- =============================================== -->
        <q-list class="full-width" v-if="list.length && search.length">
          <q-item
            @click="clickToProfile(user)"
            clickable
            v-ripple
            v-for="user in list"
            :key="user.id"
            class="row q-gutter-none"
          >
            <q-item-section avatar>
              <q-avatar
                style="width: 40px; background-color: #fafafa"
                class="shadow-2"
              >
                <q-img
                  v-if="user.avatar"
                  no-spinner
                  :src="`${STORAGE_URL}/${user.avatar}`"
                ></q-img>
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <div style="color: #8b8787">{{ user.name }}</div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  computed: {
    list_history() {
      return this.$store.getters["HistorySearchOwner/list_history"].reverse();
    },
    auth() {
      return this.$store.getters["Auth/auth"];
    },
  },

  data() {
    return {
      STORAGE_URL: STORAGE_URL,
      search: "",
      list: [],
      list_temp: [],
    };
  },

  mounted() {
    console.log("ini dari state", this.list_history);
    this.getAllUser();
  },

  methods: {
    clearAllHistory() {
      this.$store.commit("HistorySearchOwner/clear_all_history");
    },
    clearHistory(item) {
      this.$store.commit("HistorySearchOwner/clear_history", item.id);
    },
    clickToProfile(item) {
      // masuk history
      this.$store.commit("HistorySearchOwner/add_history", item);

      // console.log(item);
      if (item.id == this.auth.id) {
        this.$router.push(`/my-profile-owner`);
      } else {
        this.$router.push(`/profile-other-2-owner/${item.id}`);
      }
    },
    filter(value) {
      console.log(value);
      const needle = value.toLowerCase();
      this.list = this.list_temp.filter(
        (v) => v.name.toLowerCase().indexOf(needle) > -1
      );
    },
    getAllUser() {
      return new Promise((resolve, reject) => {
        this.$store
          .dispatch("HistorySearchOwner/getAllUser")
          .then((res) => {
            this.list = this.list_temp = res.data;
            // console.log(res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
};
</script>

<style></style>
