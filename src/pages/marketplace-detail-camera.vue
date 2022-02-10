<template>
  <q-layout class="mbl">
    <q-page-container>
      <q-page>
          <div class="absolute q-mt-md q-ml-sm"><q-btn flat dense><img src="~/assets/switchcam1.svg"></q-btn></div>
          <div class="absolute-right q-mt-md q-mr-sm"><q-btn flat dense><img src="~/assets/noflash1.svg"></q-btn></div>
        <div style="margin-top:-6px">
          <img style="width: 100%" src="~/assets/camrev1.svg" />
        </div>
        <div class="q-mt-lg text-center">
          <q-btn outline round color="black" icon="close" />
          <q-btn
            round
            class="q-mx-md"
            size="30px"
            style="border: solid; border-color: #9b27f1; border-width: 10px"
          />
          <q-btn outline round color="black" icon="done" />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style>
</style>