export default [
	{
		url: '/getList',
		type: 'get',
		response: ({ query }) => {
			const {
				loginName = '',
				linkPerson = '',
				roleId = '',
				status = '',
				date = '',
			} = query
			let list = [
				{
					date: '2016-05-04',
					loginName: '王小虎',
					linkPerson: '上海',
					roleId: '0',
					status: '0',
				},
				{
					date: '2016-05-04',
					loginName: '王小虎',
					linkPerson: '上海',
					roleId: '1',
					status: '1',
				},
				{
					date: '2016-05-04',
					loginName: '张三',
					linkPerson: '上海',
					roleId: '2',
					status: '2',
				},
			]
			if (loginName) {
				list = list.filter((el) => el.loginName === loginName)
			}
			if (linkPerson) {
				list = list.filter((el) => el.linkPerson === linkPerson)
			}
			if (roleId) {
				list = list.filter((el) => el.roleId === roleId)
			}
			if (status) {
				list = list.filter((el) => el.status === status)
			}
			if (date) {
				list = list.filter((el) => el.date === date)
			}

			return {
				code: 0,
				msg: '',
				list,
			}
		},
	},
]
