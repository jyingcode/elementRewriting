<template>
	<div class="form-list">
		<div class="head-title">用户管理</div>
		<el-form :inline="true" :model="search" class="demo-form-inline">
			<el-form-item label="登录名">
				<el-input v-model="search.loginName" placeholder=""></el-input>
			</el-form-item>
			<el-form-item label="联系人">
				<el-input
					v-model="search.linkPerson"
					placeholder="审批人"
				></el-input>
			</el-form-item>
			<el-form-item label="角色">
				<el-select v-model="search.roleId" placeholder="请选择">
					<el-option
						v-for="(item, index) in role"
						:label="item.name"
						:value="item.id"
						:key="index"
					></el-option>
				</el-select>
			</el-form-item>

			<el-form-item v-if="show" label="状态">
				<el-select v-model="search.status" placeholder="请选择">
					<el-option
						v-for="(item, index) in status"
						:label="item.value"
						:value="item.enable"
						:key="index"
					></el-option>
				</el-select>
			</el-form-item>
			<el-form-item v-if="show" label="时间更新">
				<el-date-picker
					v-model="search.date"
					type="daterange"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
				>
				</el-date-picker>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">
					<i class="el-icon-search search"></i>
					查询</el-button
				>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onrefresh">
					<i class="el-icon-refresh refresh"></i>重置</el-button
				>
			</el-form-item>

			<el-button v-if="!show" type="primary" @click="onDeleft"
				>收起</el-button
			>
			<el-button v-if="show" type="primary" @click="onshow"
				>张开</el-button
			>
		</el-form>
		<el-row>
			<el-button type="primary">主要按钮</el-button>
		</el-row>

		<el-table
			:data="tableData"
			border
			style="width: 100%"
			class="stern-table"
		>
			<el-table-column fixed prop="date" label="日期" width="150">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120">
			</el-table-column>
			<el-table-column prop="province" label="省份" width="120">
			</el-table-column>
			<el-table-column prop="city" label="市区" width="120">
			</el-table-column>
			<el-table-column prop="address" label="地址" width="300">
			</el-table-column>
			<el-table-column prop="zip" label="邮编" width="120">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<el-button
					@click="handleClick(scope.row)"
					type="text"
					size="small"
					>查看</el-button
				>
				<el-button type="text" size="small">编辑</el-button>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			role: [
				{
					name: '超级管理员',
					id: 1,
				},
				{
					name: '管理员',
					id: 2,
				},
				{
					name: '操作员A',
					id: 3,
				},
				{
					name: '操作员B',
					id: 4,
				},
			],
			search: {
				loginName: '',
				linkPerson: '',
				roleId: '',
				status: '',
				date: '',
			},
			status: [
				{
					enable: false,
					value: '禁用',
				},
				{
					enable: true,
					value: '启用',
				},
			],
			tableData: [
				{
					date: '2016-05-02',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1518 弄',
					zip: 200333,
				},
				{
					date: '2016-05-04',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1517 弄',
					zip: 200333,
				},
				{
					date: '2016-05-01',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1519 弄',
					zip: 200333,
				},
				{
					date: '2016-05-03',
					name: '王小虎',
					province: '上海',
					city: '普陀区',
					address: '上海市普陀区金沙江路 1516 弄',
					zip: 200333,
				},
			],
		}
	},
	methods: {
		onSubmit() {
			console.log('submit!')
		},
		onrefresh() {
			console.log('refresh!')
			this.search = {
				loginName: '',
				linkPerson: '',
				roleId: '',
				status: '',
				date: '',
			}
		},
		onDeleft() {
			this.show = true
		},
		onshow() {
			this.show = false
		},
		handleClick(row) {
			console.log(row)
		},
	},
}
</script>

<style lang="less" scope>
.form-list {
	width: 878px;
	height: 683px;
	.head-title {
		line-height: 56px;
		height: 56px;
		padding-left: 24px;
		box-shadow: 0 1px 0 0 #e2dada;
	}
	.demo-form-inline {
		margin-top: 35px;
	}
	.stern-table {
		margin-top: 35px;
	}
	.search,
	.refresh {
		margin-right: 10px;
	}
}
</style>
