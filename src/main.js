import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate () {
    // Install global event bus
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
