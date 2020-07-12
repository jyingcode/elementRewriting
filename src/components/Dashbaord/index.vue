<template>
	<div class="dashbaord">
		<Siderbar />
		<Nav />
		<div class="content">
			<router-view />
		</div>
	</div>
</template>

<script>
import Nav from '../Nav'
import Siderbar from '../Siderbar'
export default {
	name: 'App',
	components: {
		Nav,
		Siderbar,
	},
}
</script>

<style>
.dashbaord {
	height: 100%;
}
.content {
	width: calc(100% - 200px);
	height: calc(100% - 64px);
	float: left;
	padding: 0 30px 0 30px;
}
</style>
