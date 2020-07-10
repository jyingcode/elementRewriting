export default [
	{
		url: '/login',
		type: 'post',
		response: () => {
			return {
				code: 0,
				data: {
					username: 'ccc',
					token: 'fddfsdr',
				},
			}
			// return {
			// 	code: -1,
			// 	data: {},
			// 	msg: '登录失败',
			// }
		},
	},
]
