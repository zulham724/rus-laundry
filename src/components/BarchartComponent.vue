<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 400,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
    data: {
      type: Object,
      default: () => {},
    },
    dataTop: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }],
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: this.dataTop + (10 / 100) * this.dataTop,
          },
        },
      },
    };
  },
  mounted() {
    this.setChartData();
    console.log("this.data", this.data);
    // console.log("nilai terbesar", Math.max(this.data.show));
    // console.log("ini sended data", this.data);
  },
  methods: {
    setChartData() {
      this.chartData.labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Okt",
        "Nov",
        "Des",
      ];
      this.chartData.datasets = [
        {
          label: "Data Perbulan",
          backgroundColor: "#3286A0",
          hoverBackgroundColor: "#000",
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
          borderRadius: Number.MAX_VALUE,
        },
      ];
    },
  },
};
</script>
