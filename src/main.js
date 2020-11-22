import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/Login'
import Posts from './components/Posts'
import Browse from './components/Browse'
import User from "@/models/User"
import Post from "@/models/Post"

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
    // "me", local user
    user: new User(
        "Carl",
        "Saks",
        "c2rl.saks@gmail.com",
        "https://dch81km8r5tow.cloudfront.net/wp-content/uploads/2019/02/Cover-photo-of-Limmy-copy.jpg"),

    // browser profiles
    users: [
        // new User()
        new User(
            "Kathrine",
            "Wayne",
            "kathrine@mail.com",
            "https://a.wattpad.com/cover/170111558-288-k501303.jpg"),
      new User(
          "Carl",
          "Saks",
          "c2rl.saks@gmail.com",
          "https://dch81km8r5tow.cloudfront.net/wp-content/uploads/2019/02/Cover-photo-of-Limmy-copy.jpg")
    ],

    // all posts
    posts: [
        // new Post()

        new Post(
            new User(
                "Carl",
                "Saks",
                "c2rl.saks@gmail.com",
                "https://dch81km8r5tow.cloudfront.net/wp-content/uploads/2019/02/Cover-photo-of-Limmy-copy.jpg"),
            new Date,
            "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fsnowrunner%2Fhome%2FSnowRunner_Screenshot_01_nologo-1920x1080-53d86bf87615b553f7fc071e1fe42aa7837b59af.jpg",
            "Aye! Finally in Alaska!!!"
        )
    ]
  },
  mutations: {

    // toggle follow buttons
    toggleFollow: (state, id) => {
      let index = state.user.following.indexOf(id)

      if (index > -1) {
        state.user.following.splice(index, 1)
        console.log("false", id, index, state.user.following)
        return false
      }

      state.user.following.push(id)
      console.log("true", id, index, state.user.following)
      return true
    }
  },
  getters: {
    followingUser: (state) => (id) => {
      return state.user.following.indexOf(id)  > -1
    },
    getUser: (state) => (id) => {
      return state.users[id]
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

