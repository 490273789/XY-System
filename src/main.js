import Vue from 'vue'
import 'normalize.css/normalize.css'
import App from './App'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import store from './store/index'
import './permission'
import '@/icons' // icon
import '@/styles/index.scss' // global css

Vue.use(ElementUI, {locale})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
