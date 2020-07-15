import Vue from 'vue'
import Router from 'vue-router'
import Dashbaord from '../components/Dashbaord'
import Login from '../components/Login'
import Index from '../components/Content/index'
import Add from '../components/Content/Add'
Vue.use(Router)

export const constantRoutes = [
	{
		path: '/dashbaord',
		component: Dashbaord,
		redirect: '/dashbaord/index',
		children: [
			{
				path: 'index',
				component: Index,
				hidden: true,
			},
			{
				path: 'add',
				component: Add,
				hidden: true,
			},
		],
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
