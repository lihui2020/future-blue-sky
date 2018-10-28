<template>
  <div class="login-page">
    <div class="login-box">
      <div class="login-title">未来蓝天生物质吹暖炉</div>
      <el-form class="login-form" :model="loginForm" ref="loginForm" :rules="loginRules" label-width="135px">
        <div class="title">登录</div>
        <el-form-item label="用户名：" prop="username">
          <el-input type="text" class="input-w315" v-model.trim="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input type="password" class="input-w315" v-model.trim="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" class="input-w315 fs18">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { ajax } from '@/assets/utils.js'
import { Message } from 'element-ui';
import store from 'store'

export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [{required: true, message: '请输入用户名', trigger: ['change', 'blur']}],
        password: [{required: true, message: '请输入密码', trigger: ['change', 'blur']}]
      }
    }
  },
  mounted () {},
  methods: {
    handleLogin () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          ajax({
            url: 'api/web/v1/sites/login',
            type: 'post',
            data: { ...this.loginForm },
            success: (data) => {
               console.log(data)
              if (data.code === 200) {
                store.set('login_token', data)
                Message.success('登录成功')
                let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                this.$router.push({
                  path: redirect,
                })
              }
            },
            error: (error) => {
              console.log(error)
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-page {
    background-image: url('../assets/images/login-bg.jpg');
    -webkit-background-size: cover;
    background-size: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .login-box {
    width: 540px;
    margin: 100px auto 0;
  }
  .login-title {
    font-size: 30px;
    font-width: bold;
    color: #fff;
    text-align: center;
  }
  .login-form {
    background-color: #e6e8ef;
    padding: 30px 0 30px 0;
    border-radius: 10px;
    margin-top: 20px;
  }
  .input-w315{
    width: 315px
  }
  .title {
    text-align: center;
    color: #333;
    font-size: 36px;
    letter-spacing: 8px;
    margin-bottom: 20px;
  }
  .fs18 {
    font-size: 18px;
    letter-spacing: 5px;
  }
</style>
