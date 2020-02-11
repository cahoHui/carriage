<template>
    <div class="carriage-login">
        <div class="login-box">
        <div class="login-title"></div>
        <div class="login-message">
            <div class="login-user">
            <span class="user-icon">
                <i class="fa fa-user" aria-hidden="true"></i>
            </span>
            <input class="user-input" type="text" placeholder="用户名">
            </div>
            <div class="login-user">
            <span class="user-icon">
                <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
            <input class="user-input" type="password" placeholder="密码">
            </div>
            <div class="login-verify">
            <div class="verify-box">
                <span class="verify-icon">
                <i class="fa fa-shield" aria-hidden="true"></i>
                </span>
                <input class="verify-input" type="text" placeholder="验证码">
            </div>
            <div class="verify-pic"></div>
            </div>
            <div class="login-button" @click="login">登录</div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {}
    },
    methods: {
      login() {
        this.$router.push({path: '/device'})
      }
    }
}
</script>

<style lang="css" scoped>
.carriage-login {
  width: 100%;
  height: 100%;
  background: url(./img/login.png) center center no-repeat;
  background-size: cover;
}
.carriage-login .login-box {
  position: absolute;
  top: 46%;
  left: 15%;
  width: 700px;
  height: 460px;
  margin-top: -230px;
}
.carriage-login .login-title {
  height: 130px;
  background: url(./img/logo.png) center center no-repeat;
  background-size: 100% 100%;
}
.carriage-login .login-message {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carriage-login .login-user {
  position: relative;
  display: flex;
  width: 430px;
  height: 40px;
  margin-top: 20px;
  padding-left: 40px;
  border: 1px solid #124570;
}
.carriage-login .user-icon, .carriage-login .verify-icon {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 39px;
  height: 36px;
  background-color: #124570;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #77c5d9;
}
.carriage-login .user-icon .fa {
  font-size: 20px;
}
.carriage-login .user-input, .carriage-login .verify-input {
  flex: 1;
  height: 100%;
  padding-left: 5px;
  background-color: transparent;
  border:none;
  outline: none;
  font-size: 14px;
  color: #a0d9ed;
}
.carriage-login input::-webkit-input-placeholder {
  color: #a0d9ed;
}
.carriage-login .login-verify {
  display: flex;
  width: 430px;
  height: 40px;
  margin-top: 20px;
}
.carriage-login .verify-box {
  position: relative;
  display: flex;
  width: 320px;
  height: 100%;
  padding-left: 40px;
  border: 1px solid #124570;
}
.carriage-login .verify-pic {
  width: 100px;
  height: 100%;
  margin-left: 10px;
  border: 1px solid #124570;
}
.carriage-login .login-button {
  width: 430px;
  height: 40px;
  margin-top: 20px;
  text-align: center;
  line-height: 40px;
  background-color: #093c67;
  border-radius: 2px;
  font-size: 17px;
  color: #66b4db;
  letter-spacing: 10px;
  text-indent: 10px;
  cursor: pointer;
}
</style>