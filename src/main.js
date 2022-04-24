import Vue from 'vue'

import * as i18n from './plugins/i18n'
import router from '@/plugins/router'
import App from '@/App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
