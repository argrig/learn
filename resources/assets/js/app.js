require('./mathjax');
require('./bootstrap');
window.s = {"role":"guest","problems":[]} ; //GLOBAL SESSION OBJECT
window.Vue = require('vue');
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import axios from 'axios' ;
import VueAxios from 'vue-axios' ;
window.MyInit = new (require('./my-init')) ;
window.MyRender = new (require('./my-render')) ;
//MyRender.render() ;
Vue.use(VueRouter) ;
Vue.use(BootstrapVue) ;
Vue.use(VueAxios, axios) ;
Vue.prototype.$bus = new Vue();

Vue.component('MyMenu', require('./components/MyMenu.vue'));
Vue.component('MenuItem', require('./components/MenuItem.vue'));
Vue.component('MyContent', require('./components/MyContent.vue'));
Vue.component('StatusBar', require('./components/StatusBar.vue'));

const Home = Vue.component('Home', require('./components/Home.vue'));

const EditProblem = Vue.component('EditProblem', require('./components/EditProblem.vue'));
const EditProblemAdd = Vue.component('EditProblemAdd', require('./components/EditProblemAdd.vue'));
const EditTest = Vue.component('EditTest', require('./components/EditTest.vue'));
const EditTheory = Vue.component('EditTheory', require('./components/EditTheory.vue'));

const Problem = Vue.component('Problem', require('./components/Problem.vue'));
const ProblemShow = Vue.component('ProblemShow', require('./components/ProblemShow.vue'));
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
  { path: '/problem/show/:id', component: ProblemShow },
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
  data: {
    s: window.s
  },
  el: '#app',
  router
});

