import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./index.css"; // pastikan Tailwind sudah setup

createApp(App).use(router).mount("#app");
