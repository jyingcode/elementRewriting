import { login, addData } from '../../Api/index'
// import { resolve, reject } from 'core-js/fn/promise'
const state = {
	token: '',
	username: '',
	loginName: '',
}
const mutations = {
	SET_USERNAME: (s, v) => {
		s.username = v
	},
	SET_TOKEN: (s, v) => {
		s.token = v
	},
	SET_LOGINNAME: (s, v) => {
		s.loginName = v
	},
}

const actions = {
	login({ commit }, data) {
		console.log(data)
		console.log(commit)
		return new Promise((resolve, reject) => {
			login(data)
				.then(({ code, data, msg }) => {
					if (code === 0) {
						commit('SET_USERNAME', data.username)
						commit('SET_TOKEN', data.token)
						resolve({ code, data })
					} else {
						reject({ code, data, msg })
					}
				})
				.catch((err) => {
					reject(err)
				})
		})
	},
	addData({ commit }, data) {
		console.log(commit)
		console.log(data)
		return new Promise((resolve, reject) => {
			addData(data)
				.then(({ code, data, msg }) => {
					if (code === 0) {
						commit('SET_LOGINNAME', data.loginName)
						resolve({ code, data })
					} else {
						reject({ code, data, msg })
					}
				})
				.catch((err) => {
					reject(err)
				})
		})
	},
}

export default {
	state,
	mutations,
	actions,
}
