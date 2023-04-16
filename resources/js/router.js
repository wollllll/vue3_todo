import {createRouter, createWebHistory} from "vue-router";
import Top from "./pages/Top.vue";
import Login from "./pages/auths/Login.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'top',
            component: Top
        },
        {
            path: '/auths/login',
            name: 'Login',
            component: Login
        },
    ]
})
