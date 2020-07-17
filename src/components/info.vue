<template>
  <div class="info">
    <div class="overhide borb lhh30">
      <span class="left">
        {{obj.name}}
      </span>
      <span class="right">
        <span>
          <i class="el-icon-edit mr10 hidden pointer" @click='change(obj.id)'></i>
          <i class="el-icon-delete pointer" @click='delets(obj.id)'></i>
        </span>
      </span>
    </div>
    <div class="overhide borb lhh30">
      <span class="left">{{obj.time}}</span>
      <span class="right">分类:{{statusName}}</span>
    </div>
    <div class="lh20">
      {{obj.text}}
    </div>
  </div>
</template>
<script lang='ts'>
import {Component, Vue, Prop, Watch, Inject} from 'vue-property-decorator'
import cateEnum from '../model/cateEnum'
import ItemData from '../model/createInfo'
import DataHelper from '../model/dataHelper'
let dataHelper = new DataHelper('alldata')
@Component
export default class Info extends Vue {
  statusName:string = ''
  @Prop()
    obj!: ItemData;
  mounted() {
    switch (this.obj.status) {
      case 1:
        this.statusName = '学习'
        break;
      case 2: 
        this.statusName = '游戏'
        break;
      case 3:
        this.statusName = '感情'
        break;
      default:
        break;
    }
  }
  @Inject() edit!:any
  change(id:number){
    // 
    this.edit(id)
    
  }
  delets(id:number){
    dataHelper.delData(id)
    this['$store'].commit('changeList')
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