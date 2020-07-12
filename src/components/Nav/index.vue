<template>
	<div class="nav">
		<div class="nav-title">
			<div class="nav-trigger">
				<i class="el-icon-s-fold"></i>
			</div>
		</div>
		<div class="nav-rump">
			<span class="nav-action">
				<i class=" el-icon-pie-chart"></i>
			</span>
			<span class="nav-shut">
				<i class="el-icon-switch-button"></i>
			</span>
			<span class="nav-avtar">
				<i class=" el-icon-warning-outline"></i>
			</span>
			<span class="nav-login">欢迎您，kevin_Hyatt</span>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="less" scope>
.nav {
	height: 64px;
	width: calc(100% - 200px);
	float: left;

	.nav-title {
		float: left;
		width: 50%;
		height: 64px;
		min-width: 200px;
		.nav-trigger {
			width: 16px;
			height: 64px;
			margin-left: 34px;
			line-height: 64px;
		}
	}
	.nav-rump {
		display: block;
		width: 50%;
		height: 64px;
		float: left;
		min-width: 200px;
		.nav-action {
			width: 16px;
			height: 64px;

			float: left;
			margin-left: 50px;
			line-height: 64px;
		}
		.nav-shut {
			width: 16px;
			height: 64px;

			float: left;
			margin-left: 50px;
			line-height: 64px;
		}
		.nav-avtar {
			width: 16px;
			height: 64px;

			float: left;
			margin-left: 50px;
			line-height: 64px;
		}
		.nav-login {
			width: 150px;
			height: 64px;
			float: left;
			margin-left: 50px;
			line-height: 64px;
			font-size: 14px;
		}
	}
}
</style>
