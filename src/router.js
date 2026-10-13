import { createRouter, createWebHistory } from 'vue-router';
import Home from './shared/presentation/views/home.vue';
import PageNotFound from './shared/presentation/views/page-not-found.vue';
import showroomRoutes from './showroom/presentation/showroom-routes.js';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/vehicle', children: showroomRoutes },
  { path: '/:pathMatch(.*)*', name: 'page-not-found', component: PageNotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
