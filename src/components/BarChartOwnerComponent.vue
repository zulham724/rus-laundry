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
      default: 400,
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
  },
  data() {
    return {
      orderDataNull : {
        orders: 0,
      },

      array : [],
      orderData : {},
     
      chartData: {
        labels: [],
        datasets: [],
      },
      chartOptions: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
                }
            }

      },
    };
  },
  mounted(){
    this.getMonthlyOrder();
  },
  methods:{
    setChartData(){
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
          label: "Jumlah Pesanan",
          backgroundColor: "#3286A0",
          hoverBackgroundColor: "#000",
          data: [this.array[0].orders, this.array[1].orders, this.array[2].orders, this.array[3].orders, this.array[4].orders, this.array[5].orders, this.array[6].orders, this.array[7].orders, this.array[8].orders, this.array[9].orders, this.array[10].orders, this.array[11].orders],
          borderRadius: Number.MAX_VALUE,
        }
      ];
    },
    getMonthlyOrder() {
      this.$store
        .dispatch("MasterOrders/getMonthlyOrder")
        .then(res => {
          this.filterMonth(res.data);
        })
        .catch(err => {
          console.log("terjadi kesalahan getMonthlyOrder barchart", err);
        });
    },
    filterMonth(value){
      for (let i = 1; i < 13; i++) {
          let bulan = value.filter(obj => {
            return obj.month === i;
          });
          if(bulan.length){
            let zero = this.orderDataNull.orders = 0;
            zero = bulan[0];
            this.array.push(zero);
          } else {
            this.orderDataNull.orders = 0;
            this.array.push(this.orderDataNull);
          };
      }
      this.setChartData();
    }
  }
};
</script>
