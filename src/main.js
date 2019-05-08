import Vue from 'vue'
import VueRouter from 'vue-router'
import i18n from '@/plugins/i18n/i18n'
import FlagIcon from 'vue-flag-icon'

import App from './App.vue'
import Home from './components/Home'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(FlagIcon)

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
  i18n,
  render: h => h(App)
})
