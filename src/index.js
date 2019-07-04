import Vue from 'vue'
import router from './router'
import App from './App'
import Test from '../modules/vue-test/dist'

import 'assets/css/app.styl'
console.log(Test)
Vue.use(Test)
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
