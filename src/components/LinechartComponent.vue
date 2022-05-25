<template>
  <apexchart
    height="300"
    type="area"
    :options="options"
    :series="series"
  ></apexchart>
</template>

<script>
import { defineComponent } from "vue";
import { getCssVar } from "quasar";
export default defineComponent({
  name: "Apexline",
  props: ["data"],
  data() {
    return {
      options: {
        // title: {
        //   text: "a",
        //   align: "left",
        // },
        chart: {
          id: "apex-line",
        },
        colors: [
          getCssVar("primary"),
          getCssVar("secondary"),
          getCssVar("negative"),
        ],
        markers: {
          size: 4,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      },
      series: [
        {
          name: "series-1",
          // data: [
          //   this.data[0].show,
          //   this.data[1].show,
          //   this.data[2].show,
          //   this.data[3].show,
          //   this.data[4].show,
          //   this.data[5].show,
          //   this.data[6].show,
          //   this.data[7].show,
          //   this.data[8].show,
          //   this.data[9].show,
          //   this.data[10].show,
          //   this.data[11].show,
          // ],
          data: [
            this.data[0].show,
            this.data[1].show,
            this.data[2].show,
            this.data[3].show,
            this.data[4].show,
            this.data[5].show,
            this.data[6].show,
            this.data[7].show,
            this.data[8].show,
            this.data[9].show,
            this.data[10].show,
            this.data[11].show,
          ],
        },
      ],
    };
  },
  mounted() {
    console.log("ini data line chart", this.data);
  },
  methods: {},
});
</script>
