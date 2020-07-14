import { login, addData } from '../../Api/index'

const state = {
	token: '',
	username: '',
}
const mutations = {
	SET_USERNAME: (s, v) => {
		s.username = v
	},
	SET_TOKEN: (s, v) => {
		s.token = v
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
