import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./index.css";
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

app.use(router);
app.use(VueApexCharts);
app.component("apexchart", VueApexCharts);

app.mount("#app");
