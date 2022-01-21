<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container>
      <q-page>
        <div
          class="text-center"
          style="
            height: 270px;
            background-image: linear-gradient(to top left, #179ce7, #a3f2f1);
          "
        >
          <q-img
          no-spinner
            src="~/assets/bg-add-item.svg"
            class="fixed-top mbl-child"

          />
        </div>

        <div
          class="q-pb-lg"
          style="
            border-radius: 20px 20px 0 0;
            background-color: #fafafa;
            margin-top: -30px;
            position: relative;
          "
        >
          <div
            class="text-weight-bold text-weight-bold q-pt-lg q-pl-md q-pb-md"
            style="font-size: 24px"
          >
            Kategori
          </div>

          <div class="row">
            <div class="col-6 text-center">
              <q-btn :ripple="true" dense flat style="border-radius: 10px 10px 10px 10px" @click="$router.push('/add-clothes')">
                <q-img
                no-spinner
                  src="~/assets/card-pakaian.svg"
                  style="
                    width: 150px;
                    height: 200px;
                    border-radius: 10px 10px 10px 10px;
                  "
                />
              </q-btn>
            </div>
            <div class="col-6 text-center">
              <q-btn :ripple="true" dense flat style="border-radius: 10px 10px 10px 10px" @click="$router.push('/package-list-first')">
                <q-img
                no-spinner
                  src="~/assets/card-paket-item.svg"
                  style="
                    width: 150px;
                    height: 200px;
                    border-radius: 10px 10px 10px 10px;
                  "
                />
              </q-btn>
            </div>
          </div>
          <q-img
          no-spinner
            style="
              height: 200px;
            "
            class="fixed-bottom front mbl-child"
            src="~/assets/bg-gelombang-bawah.svg"
          ></q-img>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name:'AddItemPage',
  data() {
    return {
      tab: "kategori",
    };
  },
};
</script>

<style></style>
