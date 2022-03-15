<template>
  <q-layout class="mbl" view="lHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="shadow-3" style="background-color: white">
      <div class="q-gutter-none" style="max-width: 100%">
        <q-tabs v-model="tab" class="text-black" indicator-color="purple-6" switch-indicator>
          <q-tab name="profile-other" no-caps @click="$router.push('/my-profile')"
            ><q-img
              class="q-pa-sm"
              no-spinner
              style="width: 20px; height: 22px"
              :src="
                tab == 'profile-other'
                  ? require('../assets/profile-other-active.svg')
                  : require('../assets/profile-other.svg')
              "
            ></q-img>
          </q-tab>

          <q-tab name="like" no-caps @click="$router.push('/my-profile-like')"
            >
            <q-img
              class="q-pa-sm"
              no-spinner
              style="width: 20px; height: 18px"
              :src="
                tab == 'like'
                  ? require('../assets/profile-like-active.svg')
                  : require('../assets/profile-like.svg')
              "
            ></q-img>
          </q-tab>

          <q-tab name="private" no-caps @click="$router.push('/my-profile-like')"
            ><q-img
              class="q-pa-sm"
              no-spinner
              style="width: 18px; height: 21px"
              :src="
                tab == 'private'
                  ? require('../assets/my-profile-private.svg')
                  : require('../assets/my-profile-private.svg')
              "
            ></q-img>
          </q-tab>
        </q-tabs>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MyProfileLayout",
  data() {
    return {
      tab: this.$route.name,
      include: ["MyProfilePage", "MyProfileLikePage"],
    };
  },
};
</script>

<style></style>
