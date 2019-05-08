import Vue from 'vue'
import FlagIcon from 'vue-flag-icon'

import i18n from '@/plugins/i18n'
import router from '@/plugins/router'
import App from '@/App.vue'

Vue.config.productionTip = false

Vue.use(FlagIcon)

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
