import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import Vcharts from 'v-charts'
import store from './store'
import { mockXHR } from '../src/mock/index'
import 'element-ui/lib/theme-chalk/index.css'
mockXHR()
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vcharts)
new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount('#app')
