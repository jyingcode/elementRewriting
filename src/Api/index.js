import request from '../utils/request'

export function login(data) {
	return request({
		url: '/login',
		method: 'post',
		data,
	})
}
// export function addData(data) {
// 	return request({
// 		url: '/addData',
// 		method: 'post',
// 		data,
// 	})
// }
