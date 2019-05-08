import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import FlagIcon from 'vue-flag-icon'

import i18n from '@/plugins/i18n'
import router from '@/plugins/router'
import App from '@/App.vue'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(FlagIcon)

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
