<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {},
}
</script>

<style>
html,
body {
	height: 100%;
}
#app {
	width: 100%;
	height: 100%;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.login-input input {
	padding: 0 15px;
	height: 40px;
	width: 250px;
	margin-top: 20px;
	border: 1px solid #cccccc;
	border-radius: 2px;
	outline: none;
	margin-left: -80px;
}
.el-menu-item:hover {
	background-color: rgba(152, 144, 144, 0.65) !important;
}
.el-submenu__title:hover {
	background-color: rgba(152, 144, 144, 0.65) !important;
}
</style>
