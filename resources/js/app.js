import './bootstrap';
import { createApp } from "vue";
import Vue from "./App.vue";
import {router} from "./router";
import { createPinia } from 'pinia'

const app = createApp(Vue)

app
    .use(createPinia())
    .use(router)
    .mount("#app");
