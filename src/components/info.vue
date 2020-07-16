<template>
  <div class="info">
    <div class="overhide borb lhh30">
      <span class="left">
        {{obj.name}}
      </span>
      <span class="right">
        <span>
          <i class="el-icon-edit mr10 hidden pointer"></i>
          <i class="el-icon-delete pointer"></i>
        </span>
      </span>
    </div>
    <div class="overhide borb lhh30">
      <span class="left">{{item.time}}</span>
      <span class="right">分类:{{statusName}}</span>
    </div>
    <div class="lh20">
      {{obj.text}}
    </div>
  </div>
</template>
<script lang='ts'>
import {Component, Vue, Prop, Watch} from 'vue-property-decorator'
export default class Info extends Vue {
  statusName:string = ''
  @Prop()
    obj: object = {}
  mounted() {
    console.log(3333);
    
    console.log(this.obj);
     
  }
  @Watch('statusName')
    getobj(val:any){
      this.statusName='我是'
    }
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
    margin-bottom: 10px;
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