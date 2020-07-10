import axios from 'axios'

const service = axios.create({
	baseURL: 'http://localhost:8080',
	timeout: 5000,
})

service.interceptors.request.use(
	function(config) {
		return config
	},
	function(error) {
		return Promise.reject(error)
	}
)

service.interceptors.response.use((res) => res.data)
export default service
