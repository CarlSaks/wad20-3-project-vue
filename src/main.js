import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Login'
import Posts from './components/Posts'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Axios)

const routes = [
  {path: '/', name: 'logIn', component: Login},
  {path: '/posts', component: Posts },
  {path: '*', redirect: '/'}
]

const router = new VueRouter({ routes })

const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  getters: {
    isLogin() {
      return
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

