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
	// {
	// 	url: '/addData',
	// 	type: 'post',
	// 	response: () => {
	// 		return {
	// 			code: 0,
	// 			data: {
	// 				loginName: 'cc5456645c',
	// 			},
	// 		}
	// 		// return {
	// 		// 	code: -1,
	// 		// 	data: {},
	// 		// 	msg: '添加失败',
	// 		// }
	// 	},
	// },
]
