import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";


const routes =  [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/ttv',
        name: 'AddTTV',
        component: () => import('../views/ttv/AddTTV.vue')
    },
    {
        path: '/ttv/:id',
        name: 'EditTTV',
        component: () => import('../views/ttv/EditTTV.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})