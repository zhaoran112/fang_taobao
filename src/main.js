import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/base.css";
import router from "./router";
import Vant from "vant";
import "vant/lib/index.css";

createApp(App).use(router).use(Vant).mount("#app");
