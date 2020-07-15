export default [
	{
		url: '/modifyData',
		type: 'post',
		response: () => {
			return {
				code: 0,
				msg: '',
				// list: [
				// 	{
				// 		date: '2016-05-04',
				// 		loginName: '王小虎',
				// 		linkPerson: '上海',
				// 		roleId: '0',
				// 		status: '0',
				// 	},
				// 	{
				// 		date: '2016-05-04',
				// 		loginName: '王小虎',
				// 		linkPerson: '上海',
				// 		roleId: '1',
				// 		status: '1',
				// 	},
				// 	{
				// 		date: '2016-05-04',
				// 		loginName: '张三',
				// 		linkPerson: '上海',
				// 		roleId: '2',
				// 		status: '2',
				// 	},
				// ],
			}
		},
	},
]
