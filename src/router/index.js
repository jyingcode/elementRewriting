import Vue from 'vue'
import Router from 'vue-router'
import Dashbaord from '../components/Dashbaord'
import Login from '../components/Login'
Vue.use(Router)

export const constantRoutes = [
	{
		path: '/dashbaord',
		component: Dashbaord,
		hidden: true,
	},
	{
		path: '/login',
		component: Login,
		hidden: true,
	},
]

const createRouter = () =>
	new Router({
		scrollBehavior: () => ({ y: 0 }),
		routes: constantRoutes,
	})

const router = createRouter()

export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher
}

export default router
