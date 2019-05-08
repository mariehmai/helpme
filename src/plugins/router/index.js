import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home'
import EmergencyNumbers from '@/components/EmergencyNumbers'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/emergency-numbers', component: EmergencyNumbers },
  { path: '/emergency-contacts', component: Home },
  { path: '/police', component: Home },
  { path: '/hospitals', component: Home }
]

export default new VueRouter({
  routes
})
