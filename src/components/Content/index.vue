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
			<el-form-item v-if="show" label="角色">
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
				<el-button type="primary" @click="onrefresh" class="but">
					<i class="el-icon-refresh refresh"></i>重置
				</el-button>

				<span
					v-if="!show"
					type="primary"
					@click="onDeleft"
					class="but1"
				>
					展开<i class="el-icon-arrow-down"></i>
				</span>
				<span v-if="show" type="primary" @click="onshow" class="but1">
					收起 <i class="el-icon-arrow-up"></i></span
			></el-form-item>
		</el-form>

		<el-row>
			<el-button type="primary" @click="changeData(search)"
				>新增</el-button
			>
		</el-row>
		<el-dialog :visible.sync="dialogTableVisible">
			<el-form
				ref="form"
				class="father-element"
				:model="search"
				label-width="80px"
			>
				<el-form-item label="登录名" prop="loginName">
					<el-input
						v-model="search.loginName"
						placeholder="请输入内容"
					></el-input>
				</el-form-item>
				<el-form-item label="联系人" prop="linkPerson">
					<el-input
						v-model="search.linkPerson"
						disabled
						placeholder="请输入内容"
					></el-input>
				</el-form-item>
				<el-form-item label="角色" prop="roleId">
					<el-input
						v-model="search.roleId"
						placeholder="请输入内容"
					></el-input>
				</el-form-item>
				<el-form-item label="状态" prop="status">
					<el-input
						v-model="search.status"
						placeholder="请输入内容"
					></el-input>
				</el-form-item>
				<el-form-item label="时间更新" prop="date">
					<el-input
						v-model="search.date"
						placeholder="请输入内容"
					></el-input>
				</el-form-item>
				<button class="submit-but">确定</button>
			</el-form>
		</el-dialog>
		<el-table
			ref="singleTable"
			:data="tableData"
			border
			style="width: 100%"
			class="stern-table"
		>
			<el-table-column fixed prop="date" label="更新时间" width="150">
			</el-table-column>

			<el-table-column prop="loginName" label="登录名" width="120">
			</el-table-column>
			<el-table-column prop="linkPerson" label="联系人" width="120">
			</el-table-column>
			<el-table-column prop="roleId" label="角色" width="120">
			</el-table-column>
			<el-table-column prop="status" label="状态" width="300">
			</el-table-column>

			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button
						@click="handleClick(scope.$index, tableData)"
						type="text"
						size="small"
						>删除</el-button
					>
					<el-button
						type="text"
						size="small"
						@click="changeData(search)"
						>编辑</el-button
					>
				</template>
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
			dialogTableVisible: false,
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
					loginName: '王小虎',
					linkPerson: '上海',
					roleId: '普陀区',
					status: '上海市普陀区金沙江路 1518 弄',
				},

				{
					date: '2016-05-04',
					loginName: '王小虎',
					linkPerson: '上海',
					roleId: '普陀区',
					status: '上海市普陀区金沙江路 1517 弄',
				},
				{
					date: '2016-05-01',
					loginName: '王小虎',
					linkPerson: '上海',
					roleId: '普陀区',
					status: '上海市普陀区金沙江路 1519 弄',
				},
				{
					date: '2016-05-03',
					loginName: '王小虎',
					linkPerson: '上海',
					roleId: '普陀区',
					status: '上海市普陀区金沙江路 1516 弄',
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
		handleClick(index, rows) {
			rows.splice(index, 1)
		},
		changeData(search) {
			console.log(search)
			this.dialogTableVisible = true
			this.search = JSON.parse(JSON.stringify(search))
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
	.but {
		width: 97.89x;
		height: 40px;
		margin: 0 0 20px 15px;
	}
	.but1 {
		margin-top: 15px;
		color: #1890ff;
		margin-left: 15px;
	}
}
</style>
