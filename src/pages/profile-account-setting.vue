<template>
  <q-layout class="mbl">
    <q-page-container>
      <q-page class="">
        <!-- button back & judul pengaturan akun -->
        <div class="q-pt-md q-px-md row">
          <div class="col-1">
            <q-btn dense flat no-caps @click="$router.push('/menu')">
              <q-icon name="fas fa-arrow-left" color="black" />
            </q-btn>
          </div>
          <div class="col-11 self-center">
            <div class="text-subtitle1 q-pl-md text-black">Pengaturan Akun</div>
          </div>
        </div>

        <div class="q-my-md q-mx-xl text-center">
          <q-img src="~/assets/Group5656.png" width="40%" />
        </div>

        <q-form>
          <div>
            <div
              class="text-caption text-weight-medium q-pl-md"
              style="color: #888888"
            >
              Username
            </div>
            <q-input
              placeholder="Ketik username disini..."
              class="relative-center q-px-md"
              style="background-color:#F0F3FD"
              outlined
              type="text"
              :rules="[(val) => !!val || 'mohon diisi']"
            />
          </div>
          <div>
            <div
              class="text-caption text-weight-medium q-pl-md"
              style="color: #888888"
            >
              Email
            </div>
            <q-input
              placeholder="Ketik email disini..."
              class="relative-center q-px-md"
              :rules="[(val) => !!val || 'mohon diisi']"
              outlined
              type="text"
            />
          </div>
          <div>
            <div
              class="text-caption q-pl-md text-weight-medium"
              style="color: #888888"
            >
              Kata sandi
            </div>
            <q-input
              placeholder="Ketik kata sandi disini...."
              class="relative-center q-px-md"
              :rules="[(val) => !!val || 'mohon diisi']"
              outlined
              type="password"
            />
          </div>
          <div>
            <div
              class="text-caption q-pl-md text-weight-medium"
              style="color: #888888"
            >
              Alamat
            </div>
            <q-input
              placeholder="sidoarjo,Sidoarjo"
              class="relative-center q-px-md"
              :rules="[(val) => !!val || 'mohon diisi']"
              outlined
              type="text"
            />
          </div>
        </q-form>

        <div class="q-pt-md">
          <q-list>
            <q-item
              clickable
              @click="$router.push('/account-change-password')"
              v-ripple
            >
              <q-item-section avatar class="q-pl-md">
                <q-img style="width: 25px" src="~/assets/keyicon1.svg" />
              </q-item-section>
              <q-item-section
                class="text-weight-medium text-body2"
                style="color: #313131"
                >Ganti Kata sandi</q-item-section
              >
              <q-item-section avatar>
                <q-icon
                  class="q-pr-md"
                  color="black"
                  name="fas fa-angle-right"
                />
              </q-item-section>
            </q-item>

            <q-separator color="grey" />

            <q-item clickable v-ripple>
              <q-item-section avatar class="q-pl-md">
                <q-img style="width: 22px" src="~/assets/map-pin-icon2.svg" />
              </q-item-section>
              <q-item-section
                class="text-weight-medium text-body2"
                style="color: #313131"
                >Lokasi Bisnis</q-item-section
              >
              <q-item-section avatar>
                <q-icon
                  class="q-pr-md"
                  color="black"
                  name="fas fa-angle-right"
                />
              </q-item-section>
            </q-item>
            <q-separator color="grey" />
          </q-list>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>

<style></style>
