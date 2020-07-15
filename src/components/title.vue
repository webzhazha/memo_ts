<template>
  <div>
    <el-row class="bt10">
      <el-col :span="4">
        <img src="../assets/left_pic.jpg" alt="" class="w160">
      </el-col>
      <el-col :span="6" :offset="14">
        <el-button type="success" round class="mr20">新增</el-button>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in list" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    
  </div>
</template>
<script lang='ts'>
  import { Component, Vue } from 'vue-property-decorator'
  @Component
  export default class Title extends Vue {
    list: any = [{
      label: '学习',
      value: 1
    }];
    value: number=1;
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