<template>
  <q-layout class="mbl">
    <q-page-container>
      <div class="row">
        <q-page>
          <img
            class="bg-red full-width"
            src="~/assets/jualan1.svg"
            style="height: 300px"
          />
          <q-btn
            style="border-radius: 90px; background: rgba(0, 0, 0, 0.5)"
            class="absolute-top-left q-mt-md q-ml-md"
            size="18px"
          >
            <q-icon color="white" name="fas fa-arrow-left" size="25px"></q-icon>
          </q-btn>
          <label style="font-family: roboto; font-size: 23px" class="q-pl-lg"
            >Rp 2.000.000</label
          >
          <div class="float-right q-mr-md q-mt-xs">
            <Icon
              class="q-mr-md"
              style="font-size: 17px"
              icon="akar-icons:heart"
            />
            <Icon class="q-mt-xs" style="font-size: 17px" icon="cil:share" />
          </div>
          <div class="q-pb-xs">
            <label
              class="q-py-xs q-px-xs q-mx-lg"
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
          <div>
            <label
              class="q-ml-lg"
              style="font-family: roboto; font-size: 19px; color: #5f5f5f"
              for=""
              >Sabun Pembersih Dosa</label
            >
          </div>
          <label
            class="q-ml-lg q-pb-lg"
            style="color: #cdcdcd; font-size: 10px"
            for=""
            >2M Orang Suka</label
          >
          <q-separator> </q-separator>
          <div class="flex">
            <img
              class="q-pt-sm q-ml-md"
              src="~/assets/Avatar.png"
              style="width: 10%"
              alt=""
            />
            <div class="column q-ml-lg">
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
                  style="font-size: 13px; font-family: roboto; color: #cdcdcd"
                  >Kota Barzah</label
                >
              </div>
              <q-btn
                no-caps
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
          <div class="q-ml-lg column">
            <div
              class=""
              style="color: #5f5f5f; font-family: roboto; font-size: 20px"
            >
              Detail Produk
            </div>
            <div class="row">
              <div class="col-3">
                <div class="column">
                  <div style="color: #cdcdcd" class="text-subtitle2">
                    Kondisi
                  </div>
                  <div style="color: #cdcdcd" class="text-subtitle2">Berat</div>
                </div>
              </div>
              <div class="col-6"></div>
              <div class="col-3">
                <div class="column">
                  <div style="color: #cdcdcd" class="text-subtitle2">
                    Second
                  </div>
                  <div style="color: #cdcdcd" class="text-subtitle2">10 KG</div>
                </div>
              </div>
            </div>
          </div>
          <q-separator></q-separator>
          <div class="q-ml-lg">
            <div style="font-size: 20px; color: #5f5f5f; font-family: roboto">
              Deskripsi Barang
            </div>
            <div style="font-size: 10px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              aliquid alias ex optio minima accusantium natus vitae! Consectetur
              sequi repellendus nihil consequatur exercitationem, cumque est
              atque adipisci nisi, veniam debitis ipsum quae culpa aut ea
              veritatis sunt dolor dicta. Iste sint magnam nam, hic, dolorem
              pariatur non ad veniam neque vero, itaque nisi amet. Numquam odit,
              a incidunt praesentium amet officia quam accusantium similique et
              recusandae, quae voluptatum porro nulla? Ab libero, illum eum sunt
              ea nobis modi nihil quasi, ipsum omnis nesciunt exercitationem
              animi, labore et odit praesentium cum doloribus iste temporibus?
              Odit dolor optio minus, ipsum assumenda quidem.
            </div>
          </div>
          <q-separator></q-separator>
        <div class="row">
          <div class=" col-6 " style="font-size: 20px; font-family: roboto;" >Produk Dari Toko Lainnya</div>
          <div class="col-2"></div>
          <div class="q-ml-xl" style="color: #CDCDCD;">Lihat Selengkapnya</div>
        </div>
        </q-page>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>

<style></style>
