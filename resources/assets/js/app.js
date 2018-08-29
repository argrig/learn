require('./mathjax');
require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter) ;

Vue.component('mymenu', require('./components/MyMenu.vue'));
Vue.component('menuItem', require('./components/MenuItem.vue'));
Vue.component('StatusBar', require('./components/StatusBar.vue'));

const Home = Vue.component('Home', require('./components/Home.vue'));

const EditProblem = Vue.component('EditProblem', require('./components/EditProblem.vue'));
const EditTest = Vue.component('EditTest', require('./components/EditTest.vue'));
const EditTheory = Vue.component('EditTheory', require('./components/EditTheory.vue'));

const Problem = Vue.component('Problem', require('./components/Problem.vue'));
const Test = Vue.component('Test', require('./components/Test.vue'));
const Theory = Vue.component('Theory', require('./components/Theory.vue'));
const Stats = Vue.component('Stats', require('./components/Stats.vue'));

const Register = Vue.component('Register', require('./components/Register.vue'));
const Login = Vue.component('Login', require('./components/Login.vue'));

const routes = [
  { path: '/home', component: Home },
  { path: '/edit/problem', component: EditProblem },
  { path: '/edit/test', component: EditTest },
  { path: '/edit/theory', component: EditTheory },
  { path: '/problem', component: Problem },
  { path: '/theory', component: Theory },
  { path: '/test', component: Test   },
  { path: '/stats', component: Stats },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

const app = new Vue({
  el: '#app',
  router
});
