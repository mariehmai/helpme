import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/emergency-numbers', component: Home },
  { path: '/emergency-contacts', component: Home },
  { path: '/police', component: Home },
  { path: '/hospitals', component: Home }
]

export default new VueRouter({
  routes
})
