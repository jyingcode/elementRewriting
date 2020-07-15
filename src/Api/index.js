import request from '../utils/request'

export function login(data) {
	return request({
		url: '/login',
		method: 'post',
		data,
	})
}
export function addData(data) {
	return request({
		url: '/addData',
		method: 'post',
		data,
	})
}
export function getList(params) {
	return request({
		url: '/getList',
		method: 'get',
		params,
	})
}
export function modifyData(data) {
	return request({
		url: '/modifyData',
		method: 'post',
		data,
	})
}
