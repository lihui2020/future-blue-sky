<template>
  <div class="home-page">
    <nav-bar></nav-bar>
    <div class="container">
      <el-table :data="tableData" stripe>
        <el-table-column label="设备型号" prop="model"></el-table-column>
        <el-table-column label="设备ID" prop="deviceId"></el-table-column>
        <el-table-column label="控制器ID" prop="controlId"></el-table-column>
        <el-table-column label="出厂日期" prop="date"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-edit-outline" class="blue">启动编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import {ajax} from '../assets/utils'
  import NavBar from '../components/nav-bar.vue'
  export default {
    name: 'debug',
    components: {
      NavBar
    },
    data () {
      return {
        tableData: []
      }
    },
    mounted () {
      this.getData()
    },
    methods: {
      getData () {
        ajax({
          url: '/debug',
          type: 'post',
          data: {
            type: 'top',
            key: '123456'
          },
          mock: true,
          success: (data) => {
            console.log(JSON.parse(data))
            this.tableData = data.debugList
            if (typeof (data) === 'string') {
              this.tableData = JSON.parse(data).debugList
            }
          },
          error: (error) => {
            console.log(error)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home-page{
    .container{
      width: 1200px;
      margin: 0 auto;
    }
  }
  .blue {
    color: #409EFF;
  }
</style>
