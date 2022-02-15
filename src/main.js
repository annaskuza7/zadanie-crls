import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/js/all";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
