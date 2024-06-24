import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";


const routes =  [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Home.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})