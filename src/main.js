import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Login'
import Posts from './components/Posts'
import Browse from './components/Browse'
import User from "@/models/User"
//import Post from "@/models/Post"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Axios)

const routes = [
  {path: '/', name: 'logIn', component: Login},
  {path: '/posts', component: Posts },
  {path: '/browse', component: Browse},
  {path: '*', redirect: '/'}
]

const router = new VueRouter({ routes })

const store = new Vuex.Store({

  state: {
    user: new User(),
    profiles: [],
    posts: []
  },


  mutations: {

    // toggle follow buttons
    toggleFollow: (state, id) => {
      let index = state.user.following.indexOf(id)

      if (index > -1) {
        state.user.following.splice(index, 1)
        return false
      }

      state.user.following.push(id)
      return true
    },

    toggleLike: (state, id) => {
      let index = state.user.likes.indexOf(id)

      if (index > -1) {
        state.user.likes.splice(index, 1)
        return false
      }

      state.user.likes.push(id)
      return true
    },

    assignPosts(state, posts) {
      state.posts = posts
    },
    assignUsers(state, users){
      state.users = users
    },

  },


  getters: {
    followingUser: (state) => (id) => {
      return state.user.following.indexOf(id)  > -1
    },

    liked: (state) => (id) => {
      return state.user.likes.indexOf(id) > -1
    }
  },


  actions: {

    getPosts ({commit}) {
      Axios.get("https://private-anon-5c37796155-wad20postit.apiary-mock.com/posts")
          .then(response => commit("assignPosts", response.data))
          .catch(error => console.log("Failed to fetch posts" + error))
    },

    getUsers ({commit}){
      Axios.get("https://private-anon-c71abc3c34-wad20postit.apiary-mock.com/profiles")
          .then(response => commit("assignUsers", response.data))
          .catch(error => console.log("Failed to fetch profiles" + error))
    },
  },
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

