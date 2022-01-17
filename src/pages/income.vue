<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container
      style="background-image: linear-gradient(to top right, #48c6ef, #6f86d6)"
    >
      <q-page>
        <div>
          <q-img >
            <div
              class="text-center text-subtitle2 text-weight-regular bg-transparent q-mt-xl"
              style="width: 100%"
            >
              Saldo Masuk Minggu Ini
              <br />
              <div class="text-center text-h4 text-weight-medium">
                Rp.10.000.000
              </div>
            </div>
          </q-img>
        </div>
        <div
          class="front q-pb-lg"
          style="
            border-radius: 30px 30px 0 0;
            background-color: #fafafa;
            margin-top: -75px;
            position: relative;
          "
        >
          <q-tabs v-model="tab" no-caps class=" text-black" style="border-radius: 30px 30px 0 0;">
            <q-tab name="mails" label="Mails" />
            <q-tab name="alarms" label="Alarms" />
            <q-tab name="movies" label="Movies" />
          </q-tabs>
          <div>
            <img src="">
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tab: "mails",
    };
  },
};
</script>

<style></style>