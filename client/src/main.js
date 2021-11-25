import * as Vue from "vue";
import Buefy from "buefy";
import App from "./App.vue";
import "buefy/dist/buefy.css";

const app = Vue.createApp(App);
app.use(Buefy, {
  defaultIconPack: "fas",
});
app.mount("#app");
