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
					<el-menu-item>
						<i class="el-icon-date"></i>
						<span slot="title" class="siderbar-page">表格页</span>
					</el-menu-item>
					<el-submenu index="1" class="siderbar-title">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span class="siderbar-page">Dashboard</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1" class="siderbar-li"
								>分析页</el-menu-item
							>
							<el-menu-item index="1-2" class="siderbar-li"
								>监控页</el-menu-item
							>
							<el-menu-item index="1-3" class="siderbar-li"
								>v-charts</el-menu-item
							>
							<el-menu-item index="1-1" class="siderbar-li"
								>轨迹图</el-menu-item
							>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2" class="siderbar-title">
						<template slot="title">
							<i class="el-icon-menu"></i>
							<span class="siderbar-page">D3</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1" class="siderbar-li"
								>bar</el-menu-item
							>
							<el-menu-item index="1-2" class="siderbar-li"
								>line</el-menu-item
							>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3" class="siderbar-title">
						<template slot="title">
							<i class="el-icon-setting"></i>
							<span class="siderbar-page">g2</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1" class="siderbar-li"
								>bar</el-menu-item
							>
							<el-menu-item index="1-2" class="siderbar-li"
								>line</el-menu-item
							>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {}
</script>

<style lang="less">
.siderbar {
	width: 200px;
	height: 100%;
	float: left;
	background-color: #1f2327;
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
		width: 201px;
		height: 100%;
		background-color: #1f2327;
		.siderbar-title {
			.el-menu {
				background-color: #1f2327;
			}
		}
		.siderbar-li {
			width: 200px;
			height: 60px;
			line-height: 60px;
			&:hover {
				background-color: '#ccc';
				color: #409eff;
			}
		}
		.siderbar-li.is-active {
			background-color: #409eff;
			color: #fff;
		}

		.siderbar-page {
			width: 200px;
			height: 60px;
			line-height: 60px;
			padding: 0px 20px 0px 20px;
			color: #fff;
		}
	}
}
</style>
