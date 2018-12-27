import Vue from 'vue';
import Router from 'vue-router';
// views
import Home from './views/Home.vue';
import Tournaments from './views/Tournaments.vue';
import Login from './views/Login.vue';
import Donate from './views/Donate.vue';
import RegisterClub from './views/RegisterClub.vue';
import RegisterUser from './views/RegisterUser.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/torneos',
      name: 'tournaments',
      component: Tournaments,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/donar',
      name: 'donate',
      component: Donate,
    },
    {
      path: '/clubregistrar',
      name: 'clubRegistration',
      component: RegisterClub,
    },
    {
      path: '/usarioregistracion',
      name: 'userRegistration',
      component: RegisterUser,
    },
  ],
});
