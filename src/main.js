import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

// https://www.vue-valittle.jpolski.com/ - my custom validaton plugin
import vaLittle from 'vue-valittle';

import VueTheMask from 'vue-the-mask'

Vue.config.productionTip = false

Vue.use(VueAxios, axios);
Vue.use(vaLittle);
Vue.use(VueTheMask);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
