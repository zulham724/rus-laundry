<template>
  <q-layout class="mbl" view="lHh lpR fFf" style="background-color: #fafafa">
    <q-page-container>
        <q-page>
            <div class="text-center" style="background-image: linear-gradient(to top left, #179CE7, #A3F2F1)">
            <img src="~/assets/bg-add-item.svg" style="width:357px;height:293px;">
            </div>

            <div class="q-pb-lg"
          style="
            border-radius: 20px 20px 0 0;
            background-color: #fafafa;
            margin-top: -30px;
            position: relative;
          ">
            <div class="text-weight-bold text-h6 q-pt-xl q-pl-md q-pb-md">
                Kategori
            </div>
                  <div class="text-center">
                    <q-btn flat class="" style="width:165px; height:203px">
                        <img src="~/assets/card-pakaian.svg">
                    </q-btn>

                    <q-btn flat class="q-ml-md" style="width:165px; height:203px">
                        <img src="~/assets/card-paket-item.svg">
                    </q-btn>
                  </div>
            </div>
            <div class="absolute-bottom" style="margin-bottom: -30px">
                <q-img style="height:290px" src="~/assets/bg-gelombang-bawah.svg"></q-img>
            </div>
        </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tab: "kategori",
    }
  },

}
</script>

<style>

</style>