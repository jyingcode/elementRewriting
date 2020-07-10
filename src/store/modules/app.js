import { login } from '../../Api/index'
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

	TOGGLE_SIDEBAR: (state) => {
		state.sidebar.opened = !state.sidebar.opened
		state.sidebar.withoutAnimation = false
	},
	CLOSE_SIDEBAR: (state, withoutAnimation) => {
		state.sidebar.opened = false
		state.sidebar.withoutAnimation = withoutAnimation
	},
	TOGGLE_DEVICE: (state, device) => {
		state.device = device
	},
	SET_SIZE: (state, size) => {
		state.size = size
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
}

export default {
	state,
	mutations,
	actions,
}
