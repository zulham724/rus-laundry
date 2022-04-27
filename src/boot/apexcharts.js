import VueApexCharts from "vue3-apexcharts";
// import ApexCharts from "apexcharts";

import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
    app.use(VueApexCharts);
});