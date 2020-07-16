<template>
  <div>
    <el-row class="bt10">
      <el-col :span="4">
        <img src="../assets/left_pic.jpg" alt="" class="w160">
      </el-col>
      <el-col :span="8" :offset="12">
        <el-button type="success" round class="mr20" @click="increase">新增</el-button>
        <el-select v-model="selvalue" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="550px">
      <el-form ref="form" label-width="80px">
        <el-form-item label="名称">
          <el-input v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="setvalue" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="text" type="textarea" :rows="2" resize='none'></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="save">保存</el-button>
    </el-dialog>
  </div>
</template>
<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  import cateName from '../model/cateEnum'
  import DataHelper from '../model/dataHelper'
  let dataHelper = new DataHelper('alldata')
  @Component
  export default class Title extends Vue {
    options: any = [{
      label: '学习',
      value: cateName.study
    }, {
      label: '游戏',
      value: cateName.game
    }, {
      label: '感情',
      value: cateName.emotion
    }];
    selvalue: number = 0;
    dialogVisible: boolean = false;
    name: string = '';
    setvalue: number = 1;
    text: string = '';
    increase() {
      this.dialogVisible = true
    }
    save(){
      if(this.name&&this.text){
        dataHelper.addData(this.name,this.setvalue,this.text)
        // 读取全部  根据状态修改
        let list = dataHelper.readData()
        this['$store'].commit('changeList',list)
        this.dialogVisible = false
      }else {
        this['$message']({
          message: '请填写完整',
          type: 'warning'
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  .bt10 {
    border-bottom: 10px solid #eee;
  }

  .w160 {
    width: 160px;
  }

  .mr20 {
    margin-right: 20px;
  }
</style>