import {createRouter, createWebHistory} from "vue-router";
import Top from "./pages/Top.vue";
import UsersByIndex from "./pages/users/index.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'top',
            component: Top
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersByIndex
        }
    ]
})
