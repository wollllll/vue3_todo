import './bootstrap';
import { createApp } from "vue";
import Vue from "./App.vue";
import {router} from "./router";

const app = createApp(Vue)

app
    .use(router)
    .mount("#app");
