import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import { mockXHR } from '../src/mock/index'
import 'element-ui/lib/theme-chalk/index.css'
mockXHR()
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
	store,
	router,
	render: (h) => h(App),
}).$mount('#app')
