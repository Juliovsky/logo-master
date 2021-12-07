import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueScrollactive from 'vue-scrollactive';
import router from '../src/router/index.js'

Vue.use(VueScrollactive);

Vue.use(BootstrapVue)

Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router : router,

}).$mount('#app')
