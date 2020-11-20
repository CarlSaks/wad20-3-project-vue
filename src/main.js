import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
//import Login from './components/Login'
import Header from './components/Header'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/Posts',
    redirect: {
      name: 'Header'
      },
      component: Header
    }
  ]
})
