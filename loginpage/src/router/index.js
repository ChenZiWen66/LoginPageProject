import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import ShowUserInfo from "../views/ShowUserInfo.vue";
import MediaView from "../views/MediaView.vue";
import ImagePage from "../views/ImagePage";
import VideoPage from "../views/VideoPage";
import Bootstraptest from "../views/Bootstraptest";

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
    component:MediaView,
    children:[
      {
        path:'/media/img',
        name:'ImagePage',
        component:ImagePage
      },{
        path:'/media/video',
        name:'VideoPage',
        component:VideoPage
      }
    ]
  },
  {
    path:'/test',
    name:'Test',
    component:Bootstraptest
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
