<template>
	<div class="nav">
		<div class="nav-trigger"></div>
		<div class="nav-action"></div>
		<div class="nav-shut"></div>
		<div class="nav-avtar"></div>
		<div class="nav-login"></div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="less" scope>
.nav {
	position: relative;
	height: 64px;
	width: calc(100% - 200px);
	background-color: bisque;
	float: left;
	.nav-trigger {
		width: 24px;
		height: 24px;
		position: absolute;
		left: 20px;
		top: 20px;
		background-color: red;
	}
	.nav-action {
		width: 24px;
		height: 24px;
		position: absolute;
		left: 800px;
		top: 20px;
		background-color: blue;
	}
	.nav-shut {
		width: 24px;
		height: 24px;
		position: absolute;
		left: 850px;
		top: 20px;
		background-color: aqua;
	}
	.nav-avtar {
		width: 24px;
		height: 24px;
		position: absolute;
		left: 900px;
		top: 20px;
		background-color: aqua;
	}
	.nav-login {
		width: 150px;
		height: 24px;
		position: absolute;
		right: 30px;
		top: 20px;
		background-color: yellowgreen;
	}
}
</style>
