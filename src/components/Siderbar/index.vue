<template>
	<div class="siderbar">
		<div class="photograph">
			<img
				src="../../assets/images/logo.png"
				class="logo-img"
				alt="背景图"
			/>
		</div>
		<el-row class="tac">
			<el-col :span="12">
				<el-menu default-active="2" class="el-menu-vertical-demo">
					<el-menu-item style="background-color:#1890ff">
						<span slot="title" class="siderbar-page">表格页</span>
					</el-menu-item>
					<el-submenu index="1">
						<template slot="title">
							<span class="siderbar-page">Dashboard</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">分析页</el-menu-item>
							<el-menu-item index="1-2">监控页</el-menu-item>
							<el-menu-item index="1-3">v-charts</el-menu-item>
							<el-menu-item index="1-1">轨迹图</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title">
							<span class="siderbar-page">D3</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">bar</el-menu-item>
							<el-menu-item index="1-2">line</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title">
							<span class="siderbar-page">g2</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">bar</el-menu-item>
							<el-menu-item index="1-2">line</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<!-- <el-menu-item index="2">
						<i class="el-icon-menu"></i>
						<span slot="title">导航二</span>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-document"></i>
						<span slot="title">导航三</span>
					</el-menu-item>
					<el-menu-item index="4">
						<i class="el-icon-setting"></i>
						<span slot="title">导航四</span>
					</el-menu-item> -->
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {}
</script>

<style lang="less" scope>
.siderbar {
	width: 200px;
	height: 100%;
	float: left;
	background-color: rgba(74, 72, 72, 0.65);
	color: aliceblue;
	.photograph {
		width: 200px;
		height: 64px;

		.logo-img {
			line-height: 40px;
			width: 40px;
			margin: 12px;
		}
	}
	.tac {
		box-shadow: 0 0 1px aliceblue;
		height: 100%;
	}
	.el-menu-vertical-demo {
		width: 200px;
		height: 100%;

		.siderbar-page {
			width: 200px;
			height: 60px;
			line-height: 60px;
			padding: 0px 20px 0px 20px;
			color: aliceblue;
			// .siderbar-li {
			// 	width: 200px;
			// 	height: 190px;
			// }
		}
		.siderbar-page:hover {
			color: #1890ff;
		}
	}
}
</style>
