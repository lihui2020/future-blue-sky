<template>
  <div class="login-page">
    <div class="login-box">
      <el-form :model="loginForm" ref="loginForm" :rules="loginRules" label-width="120px">
        <el-form-item label="用户名：" prop="username">
          <el-input type="text" size="mini" class="input-w200" v-model.trim="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input type="password" size="mini" class="input-w200" v-model.trim="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="mini" @click="handleLogin" class="input-w200">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { ajax } from '@/assets/utils.js'
import 'element-ui/lib/theme-chalk/index.css';
// import { login } from '../service'

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
            url: '/fbs/boiler/api/web/v1/sites/login',
            type: 'post',
            data: { ...this.loginForm },
            seccess: (data) => {
              // console.log(data)
              if (data.code === 200) {
                store.set('login_token', data)
                MessageBox.alert('登录成功').then(() => {
                  let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                  this.$router.push({
                    path: redirect,
                  })
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
.login-box {
  width: 500px;
  margin: 0 auto;
  border-radius: 10px;
}
.input-w200{
  width: 200px
}
</style>
