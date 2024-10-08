import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', name: 'Home', component: () => import('./pages/Home.vue') },
    { path: '/:catchAll(.*)', name: '404', component: () => import('./pages/404.vue') },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;