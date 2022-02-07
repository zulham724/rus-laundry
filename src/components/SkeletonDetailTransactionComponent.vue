<template>
  <div>
    <div class="row q-pt-xl justify-start">
      <div class="col-6">
        <!-- No Pesanan  -->
        <div
          v-if="chooseMode"
          class="q-pl-md text-weight-regular"
          style="color: #c9c9c9"
        >
          No Pesanan
        </div>
        <div class="q-pl-md text-weight-regular" style="color: #313131">
          <!--{{ detail_order.id }}-->
          <q-skeleton width="40px" />
        </div>
      </div>
      <div class="col-6">
        <div class="row justify-end">
          <q-btn no-caps dense flat @click="$router.push('/order-code')">
            <div
              class="text-weight-regular text-center q-px-xs"
              style="
                font-size: 10px;
                color: #fafafa;

                border-radius: 3px 3px 3px 3px;
              "
            >
              <q-skeleton width="100px" />
            </div>
          </q-btn>

          <!-- Button Share -->
          <q-btn dense round size="13px" ripple flat @click="buttonShare()">
            <q-skeleton width="20px" />
          </q-btn>
        </div>
      </div>
    </div>

    <!-- List Isi -->
    <q-list separator style="background-color: #ffffff" class="full-width">
      <q-item class="q-my-sm">
        <q-item-section class="self-center">
          <q-item-label
            class="text-weight-regular"
            style="color: #c9c9c9; font-size: 12px"
            ><q-skeleton type="text" width="120px"
          /></q-item-label>
          <q-item-label
            caption
            lines="1"
            class="text-weight-bold"
            style="font-size: 14px"
            ><q-skeleton width="120px"
          /></q-item-label>
        </q-item-section>
        <q-space></q-space>
        <q-item-section avatar>
          <q-avatar size="30px" class="bg-transparent">
            <q-skeleton height="200px" width="100px" square />
          </q-avatar>
        </q-item-section>
      </q-item>
      <q-item class="q-my-sm">
        <q-item-section class="self-center">
          <q-item-label
            class="text-weight-regular"
            style="color: #c9c9c9; font-size: 12px"
            ><q-skeleton type="text" width="120px"
          /></q-item-label>
          <q-item-label
            caption
            lines="1"
            class="text-weight-bold"
            style="font-size: 14px"
            ><q-skeleton width="120px"
          /></q-item-label>
        </q-item-section>
        <q-space></q-space>
        <q-item-section avatar>
          <q-avatar size="30px" class="bg-transparent">
            <q-skeleton height="200px" width="100px" square />
          </q-avatar>
        </q-item-section>
      </q-item>
      <q-item class="q-my-sm">
        <q-item-section class="self-center">
          <q-item-label
            class="text-weight-regular"
            style="color: #c9c9c9; font-size: 12px"
            ><q-skeleton type="text" width="120px"
          /></q-item-label>
          <q-item-label
            caption
            lines="1"
            class="text-weight-bold"
            style="font-size: 14px"
            ><q-skeleton width="120px" height="20px"
          /></q-item-label>
        </q-item-section>
        <q-space></q-space>
        <q-item-section avatar>
          <q-avatar size="30px" class="bg-transparent">
            <q-skeleton height="200px" width="100px" square />
          </q-avatar>
        </q-item-section>
      </q-item>
      <q-item class="q-my-sm">
        <q-item-section class="self-center">
          <q-item-label
            class="text-weight-regular"
            style="color: #c9c9c9; font-size: 12px"
            ><q-skeleton type="text" width="120px"
          /></q-item-label>
          <q-item-label
            caption
            lines="1"
            class="text-weight-bold"
            style="font-size: 14px"
            ><q-skeleton width="120px" height="20px"
          /></q-item-label>
        </q-item-section>
        <q-space></q-space>
        <q-item-section avatar>
          <q-avatar size="30px" class="bg-transparent">
            <q-skeleton height="200px" width="100px" square />
          </q-avatar>
        </q-item-section>
      </q-item>
      <q-item class="q-my-sm">
        <q-item-section class="self-center">
          <q-item-label
            class="text-weight-regular"
            style="color: #c9c9c9; font-size: 12px"
            ><q-skeleton type="text" width="120px"
          /></q-item-label>
          <q-item-label
            caption
            lines="1"
            class="text-weight-bold"
            style="font-size: 14px"
            ><q-skeleton width="120px" height="20px"
          /></q-item-label>
        </q-item-section>
        <q-space></q-space>
        <q-item-section avatar>
          <q-avatar size="30px" class="bg-transparent">
            <q-skeleton height="200px" width="100px" square />
          </q-avatar>
        </q-item-section>
      </q-item>
      <q-item class="q-my-sm">
        <q-item-section class="self-center">
          <q-item-label
            class="text-weight-regular"
            style="color: #c9c9c9; font-size: 12px"
            ><q-skeleton type="text" width="120px"
          /></q-item-label>
          <q-item-label
            caption
            lines="1"
            class="text-weight-bold"
            style="font-size: 14px"
            > <q-skeleton width="120px" height="20px"
          /></q-item-label>
        </q-item-section>
        <q-space></q-space>
        <q-item-section avatar>
          <q-avatar size="30px" class="bg-transparent">
            <q-skeleton height="200px" width="100px" square />
          </q-avatar>
        </q-item-section>
      </q-item>
      <q-item class="q-my-sm">
        <q-item-section class="self-center q-mt-xl">
          <q-item-label
            caption
            lines="1"
            class="text-weight-bold"
            style="font-size: 14px"
            ><q-skeleton type="text" width="120px"
          /></q-item-label>
        </q-item-section>

        <q-item-section avatar class="q-mt-xl">
          <q-btn
            round
            flat
            @click="$router.push(`/${detail_order.id}/laundry-details-other`)"
          >
            <q-avatar size="30px" class="bg-transparent">
              <q-skeleton height="200px" width="100px" square />
            </q-avatar>
          </q-btn>
        </q-item-section>
      </q-item>
      <q-item class="q-my-sm">
        <q-item-section class="self-center">
          <q-item-label
            caption
            lines="1"
            class="text-weight-bold"
            style="font-size: 14px"
            ><q-skeleton type="text" width="120px"
          /></q-item-label>
        </q-item-section>

        <q-item-section avatar>
          <q-btn
            round
            flat
            @click="
              $router.push(`/${detail_order.id}/status-cucian/${service.id}`)
            "
          >
            <q-avatar size="30px" class="bg-transparent">
              <q-skeleton height="200px" width="100px" square />
            </q-avatar>
          </q-btn>
        </q-item-section>
      </q-item>
      <q-item class="q-my-sm">
        <q-item-section class="self-center">
          <q-item-label
            class="text-weight-regular q-pt-md"
            style="color: #c9c9c9; font-size: 15px"
            ><q-skeleton type="text" width="60px"
          /></q-item-label>
          <q-item-label
            caption
            lines="1"
            class="text-weight-bold"
            style="font-size: 14px"
            ><q-skeleton width="150px"
          /></q-item-label>
        </q-item-section>
        <q-space></q-space>
        <q-item-section class="self-center" side>
          <q-item-label
            class="text-weight-regular q-pt-md"
            style="color: #c9c9c9; font-size: 15px"
            ><q-skeleton type="text" width="60px"
          /></q-item-label>
          <q-item-label
            caption
            lines="1"
            class="text-weight-bold"
            style="font-size: 14px"
          >
            <q-skeleton width="100px" />
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
