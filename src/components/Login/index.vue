<template>
	<div class="login">
		<div class="log-login">
			<div class="logo-wrapper">
				<img
					src="../../assets/images/logo.png"
					class="logo"
					alt="背景图"
				/>
				<span class="title"
					>VUE-ANTD-<br />
					PRO</span
				>
			</div>
			<el-form
				ref="form"
				class="login-color"
				style="width: 460px;"
				:body-style="{ padding: '84px 64px' }"
				:model="form"
				:rules="rules"
				label-width="80px"
			>
				<el-form-item prop="username">
					<el-input
						class="login-input"
						v-model="form.username"
						placeholder="用户名"
					></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						class="login-input"
						v-model="form.password"
						placeholder="密码"
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-button
						class="login-button"
						type="primary"
						@click="onSubmit"
						>登录</el-button
					>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
const validusername = (rule, value, callback) => {
	const reg = /^[a-zA-Z]{1}[A-Z|a-z|0-9]{5,29}/
	if (reg.test(value)) {
		callback(new Error('请输入正确帐号'))
	} else callback()
}
const validpassword = (rule, value, callback) => {
	const reg = /[A-Za-z]+[0-9]+/
	if (reg.test(value)) {
		callback(new Error('请输入正确密码'))
	} else callback()
}
export default {
	data() {
		return {
			form: {
				username: '',
				password: '',
			},
			rules: {
				username: [{ validator: validusername, trigger: 'blur' }],
				password: [{ validator: validpassword, trigger: 'blur' }],
			},
		}
	},
	methods: {
		onSubmit() {
			const data = {
				username: this.form.username,
				password: this.form.password,
			}
			console.log('onSubmit')
			this.$refs.form.validate((valiad) => {
				console.log(valiad)
				if (valiad) {
					console.log('submit')
					this.$store
						.dispatch('login', data)
						.then(() => {
							console.log('login succuss')
							this.$router.push('dashbaord')
						})
						.catch(({ code, msg }) => {
							console.log(code, msg)
						})
				} else {
					console.log('99999')
					return
				}
			})
		},
	},
}
</script>

<style lang="less">
.login {
	position: relative;
	min-height: 100vh;
	background: #f0f2f5 url('../../assets/images/login_bg.png');
	background-size: cover;
	background-repeat: no-repeat;
	.log-login {
		position: absolute;
		left: 50%;
		top: 50%;
		width: 458px;
		height: 504px;
		transform: translate(-50%, -50%);
		background-color: #f0f2f5;

		.logo-wrapper {
			margin: 0 auto;
			background-color: #f0f2f5;
			padding: 84px 64px;
			width: 459px;
			height: 210px;
			text-align: center;
			user-select: none;
			.logo {
				display: inline-block;
				width: 80px;
				margin-right: 16px;
			}
			.title {
				font-size: 32px;
				font-weight: bolder;
			}
		}
		.login-color {
			background-color: #f0f2f5;
			padding: 0px 65px;
			width: 404px;
			height: 296px;
			text-align: center;
			.login-button {
				// padding: 0 15px;
				font-size: 16px;
				height: 40px;
				width: 100%;
				margin-top: 20px;
				background-color: #1890ff;
				margin-left: -80px;
				border: 1px solid #cccccc;
				outline: none;
			}
		}
	}
}
</style>
