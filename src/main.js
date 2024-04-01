import { createApp } from "vue";
import { Tabs, Tab } from "vue3-tabs-component";
import "./style.css";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";

createApp(App).component("tabs", Tabs).component("tab", Tab).mount("#app");
