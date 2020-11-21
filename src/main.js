import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import Login from './components/Login'
import Posts from './components/Posts'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: "/posts",
    compoent: Posts
  }
];

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

