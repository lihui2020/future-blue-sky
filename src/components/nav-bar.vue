<template>
  <div class="nav-box">
    <div class="nav-box-inner">
      <div class="nav-box-left">
        <div><img class="logo" src="../assets/images/logo.png" alt=""></div>
        <ul class="nav-list">
          <li class="nav-item">
            <router-link to="/run-analysis">
              <span class="icon-nav iconfont icon-72"></span>
              <p class="nav-text">运行分析</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/device-operation">
              <span class="icon-nav iconfont icon-xinxinicon"></span>
              <p class="nav-text">设备运维</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sale-ledger">
              <span class="icon-nav iconfont icon-icon-test"></span>
              <p class="nav-text">销售台账</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/debug">
              <span class="icon-nav iconfont icon-tiaoshi"></span>
              <p class="nav-text">出厂调试</p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="nav-box-right">
        <ul>
          <li>
            <router-link to="/setting">
              <!--<span class="icon-nav iconfont icon-icon_shezhi"></span>-->
              <el-button type="text" icon="el-icon-setting" class="fs18 white pd0"></el-button>
              <span class="text">设置</span>
            </router-link>
          </li>
          <li>
            <span class="icon-nav iconfont icon-gerenzhongxin"></span>
            <span class="text">WX138603233</span>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data () {
      return {

      }
    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .fs18{
    font-size: 18px;
  }
  .white{
    color: #fff;
  }
  .pd0{
    padding: 0px;
  }
  .nav-box{
    background-color: #06123f;
    .nav-box-inner{
      width: 1200px;
      height: 90px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
        .nav-box-left{
          width: 78.3%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .logo{
            height: auto;
          }
          .nav-list{
            display: flex;
            justify-content: flex-start;
            .nav-item{
              margin-left: 20px;
              text-align: center;
              a{
                color: #ddd;
              }
              a.active{
                color: #fff;
              }
              .router-link-active{
                color: #fff;
              }
              .icon-nav{
                font-size: 32px;
                display: inline-block;
                height: 34px;
                line-height:34px;
              }
              .icon-72{
                font-size:34px;
              }
              .icon-icon-test{
                font-size: 28px;
              }
            }
          }
        }
        .nav-box-right ul{
          display: flex;
          align-items: center;
          color:#fff;
          height: 100%;
          li a{
            color:#fff;
          }
          .icon-nav{
            font-size: 22px;
          }
          .text{
            font-size: 14px;
          }
          li:first-child {
            border-right: 1px solid #fff;
            margin-right: 10px;
            padding-right: 10px
          }
        }
      }
    }
</style>
