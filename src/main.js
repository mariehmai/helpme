import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/emergency-numbers', component: Home },
  { path: '/emergency-contacts', component: Home },
  { path: '/police', component: Home },
  { path: '/hospitals', component: Home }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
