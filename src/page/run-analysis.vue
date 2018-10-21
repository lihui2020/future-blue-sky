<template>
  <div class="page-wrap">
    <nav-bar></nav-bar>
    <div class="test">
      <div class="child">test</div>
    </div>
  </div>
</template>

<script>
  import NavBar from '../components/nav-bar.vue'
  import _ from 'lodash'
  export default {
    name: 'runAnalysis',
    components: {
      NavBar
    },
    data () {
      return {
        test: '111'
      }
    },
    mounted () {
      var array = [1];
      var other = _.concat(array, 2, [3], [[4]]);

      console.log(other);
    },
    method: {}
  }
</script>

<style lang="stylus" scoped>
  .test
    background-color #ccc
    .child
      border 1px solid red
      font-size 29px
      color red
</style>
