import { createWebHistory, createRouter } from 'vue-router';
import MainPage from '@/Pages/MainPage';
import HomePage from '@/Pages/HomePage';
const routes = [
    {
        path: '/',
        name: 'Index',
        component: MainPage,
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;