<template>
  <div class="info">
    <div class="overhide borb lhh30">
      <span class="left">
        显示名称
      </span>
      <span class="right">
        <span>
          <i class="el-icon-edit mr10 hidden pointer"></i>
          <i class="el-icon-delete pointer"></i>
        </span>
      </span>
    </div>
    <div class="overhide borb lhh30">
      <span class="left">2017:25:4454</span>
      <span class="right">分类:学习</span>
    </div>
    <div class="lh20">
      这是内容
    </div>
  </div>
</template>
<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator'
export default class Info extends Vue {

}
</script>
<style lang='scss' scoped>
  .info {
    width: 300px;
    display: inline-block;
    border: 5px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    margin-right: 30px;
  }
  .lhh30 {
    height: 30px;
    line-height: 30px;
  }
  .lh20 {
    line-height: 20px;
  }
  .borb {
    border-bottom: 1px solid #ccc;
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .overhide {
    overflow: hidden;
  }
  .mr10 {
    margin-right: 10px;
  }
  .pointer {
    cursor: pointer;
  }
</style>