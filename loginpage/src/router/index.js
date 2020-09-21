import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Pagination from "../components/Pagination";
import ShowUserInfo from "../views/ShowUserInfo";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/userinfo',
    name: 'ShowUserInfo',
    component: ShowUserInfo
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
