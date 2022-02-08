<template>
  <q-layout class="mbl">
    <q-page-container>
      <q-page>
        <q-carousel animated v-model="slide" arrows navigation infinite>
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
        <q-btn
          round
          dense
          class="absolute-top-left q-mt-md q-ml-md"
          style="background-color: RGB(0, 0, 50%)"
          size="15px"
        >
          <q-icon color="white" name="fas fa-arrow-left" />
        </q-btn>
        <label style="font-family: roboto; font-size: 23px" class="q-pl-sm"
          >Rp 2.000.000</label
        >
        <div class="float-right q-mt-xs">
          <q-btn size="12px" dense flat
            ><q-icon style="color: #6a6a6a" name="far fa-heart"
          /></q-btn>
          <q-btn class="q-ml-sm" dense flat
            ><Icon style="font-size: 20px; color: #6a6a6a" icon="cil:share"
          /></q-btn>
        </div>
        <div class="q-pb-xs">
          <label
            class="q-py-xs q-px-xs q-mx-sm"
            style="
              font-size: 8px;
              background: rgba(211, 35, 204, 0.63);
              border-radius: 5px;
              color: #ffffff;
            "
            for=""
            >40%</label
          >
          <label
            class=""
            style="text-decoration: line-through; color: #cdcdcd"
            for=""
            >Rp 2.900.000</label
          >
        </div>
        <div
          class="q-ml-sm text-subtitle2"
          style="font-size: 20px; color: #5f5f5f"
        >
          Sabun Pembersih Dosa
        </div>
        <div
          class="text-caption q-ml-sm"
          style="font-size: 10px; color: #cdcdcd"
        >
          2M orang suka
        </div>
        <q-separator class="q-mb-sm"> </q-separator>
        <div class="flex">
          <q-avatar class="q-ml-sm q-mt-sm">
            <img src="~/assets/Avatar.png" />
          </q-avatar>
          <div class="column q-ml-sm">
            <label
              class=""
              style="font-family: roboto; font-size: 17px; color: #5f5f5f"
              for=""
              >LaundryTopSpeed
            </label>
            <div>
              <img
                style="width: 10px; height: 12px"
                src="~/assets/locate.svg"
                alt=""
              />
              <label
                class="text-caption q-ml-xs"
                style="font-size: 13px; font-family: roboto; color: #c5c5c5"
                >Kota Darjo</label
              >
            </div>
            <q-btn
              class="q-mb-sm"
              no-caps
              dense
              style="
                background: rgba(211, 35, 204, 0.63);
                color: #ffffff;
                width: 49px;
              "
              size="70%"
              >Ikuti</q-btn
            >
          </div>
        </div>
        <q-separator></q-separator>
        <div class="q-ml-sm column">
          <div class="text-subtitle2" style="color: #5f5f5f; font-size: 20px">
            Detail Produk
          </div>
          <div class="row">
            <div class="col-3">
              <div class="column">
                <div style="color: #cdcdcd" class="text-subtitle2">Kondisi</div>
                <div style="color: #cdcdcd" class="text-subtitle2">Berat</div>
              </div>
            </div>
            <div class="col-6"></div>
            <div class="col-3">
              <div class="column">
                <div style="color: #cdcdcd" class="text-subtitle2 text-right q-pr-sm">Second</div>
                <div style="color: #cdcdcd" class="text-subtitle2 text-right q-pr-sm">10 KG</div>
              </div>
            </div>
          </div>
        </div>
        <q-separator></q-separator>
        <div class="q-ml-sm">
          <div style="font-size: 20px; color: #5f5f5f; font-family: roboto">
            Deskripsi Barang
          </div>
          <div class="q-pb-sm" style="font-size: 10px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aliquid alias ex optio minima accusantium natus vitae! Consectetur
            sequi repellendus nihil consequatur exercitationem, cumque est atque
            adipisci nisi, veniam debitis ipsum quae culpa aut ea veritatis sunt
            dolor dicta. Iste sint magnam nam, hic, dolorem pariatur non ad
            veniam neque vero, itaque nisi amet. Numquam odit, a incidunt
            praesentium amet officia quam accusantium similique et recusandae,
            quae voluptatum porro nulla? Ab libero, illum eum sunt ea nobis modi
            nihil quasi, ipsum omnis nesciunt exercitationem animi, labore et
            odit praesentium cum doloribus iste temporibus? Odit dolor optio
            minus, ipsum assumenda quidem.
          </div>
        </div>
        <div class="row">
          <div
            class="col-6 q-pl-sm text-weight-bold q-pb-md"
            style="background-color: #f5f7f9;font-size:12px"
          >
            Produk Lainnya dari toko ini
          </div>
          <div 
            class="col-6 text-right q-pr-sm text-weight-regular q-pb-md"
            style="background-color: #f5f7f9; color: #707070;font-size:12px"
          >
            Lihat selengkapnya
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <q-card class="q-pb-xl q-mx-sm">
              <img
                class="bg-red"
                src="~/assets/jualan1.svg"
                style="height: 150px"
              />
              <div
                class="text-caption text-weight-medium q-pl-xs"
                style="color: #5f5f5f"
              >
                Detergen Rinso anti Belanda Murah
              </div>
              <div
                class="text-caption text-weight-regular q-pl-xs"
                style="color: #c5c5c5"
              >
                Rp.15.000
              </div>
              <div
                class="text-subtitle2 text-weight-medium q-pl-xs"
                style="color: #161952"
              >
                Rp.10.000
              </div>
              <div class="text-caption q-pl-xs">
                <q-icon name="fas fa-map-marker-alt" color="red" />Kota Kudus
              </div>
            </q-card>
          </div>
          <div class="col-6">
            <q-card class="q-pb-xl q-mx-sm">
              <img
                class="bg-red"
                src="~/assets/jualan1.svg"
                style="height: 150px"
              />
              <div
                class="text-caption text-weight-medium q-pl-xs"
                style="color: #5f5f5f"
              >
                Detergen Rinso anti Belanda Murah
              </div>
              <div
                class="text-caption text-weight-regular q-pl-xs"
                style="color: #c5c5c5"
              >
                Rp.15.000
              </div>
              <div
                class="text-subtitle2 text-weight-medium q-pl-xs"
                style="color: #161952"
              >
                Rp.10.000
              </div>
              <div class="text-caption q-pl-xs">
                <q-icon name="fas fa-map-marker-alt" color="red" />Kota Kudus
              </div>
            </q-card>
          </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[7, 10]">
          <q-btn
            no-caps
            color="green"
            icon="fab fa-whatsapp"
            label="Pesan Sekarang"
            style="
              width: 240px;
              height: 45px;
              background-color: #49c958;
              border-radius: 0 15px 0 15px;
            "
          />
        </q-page-sticky>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

export default {
  data() {
    return {
      slide: ref(1),
    };
  },
  components: {
    Icon,
  },
};
</script>

<style></style>
