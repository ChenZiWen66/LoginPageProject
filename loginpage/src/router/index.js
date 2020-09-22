import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import ShowUserInfo from "../views/ShowUserInfo.vue";
import MediaView from "../views/MediaView.vue";

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
  },
  {
    path:'/media',
    name:'Mediaview',
    component:MediaView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
