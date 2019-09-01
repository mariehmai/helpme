import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import i18n from '@/plugins/i18n'
import router from '@/plugins/router'
import App from '@/App.vue'
import theme from '@/theme.js'

Vue.config.productionTip = true

Vue.use(Vuetify, {
  theme,
  options: {
    customProperties: true
  }
})

new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
