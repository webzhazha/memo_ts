<template>
  <div id="app">
      <Title />
      <Content />
  </div>
</template>

<script lang='ts'>
import Title from './components/title.vue'
import Content from './components/content.vue'
import { Component, Prop, Vue } from 'vue-property-decorator';
import DataHelper from './model/dataHelper'
let dataHelper = new DataHelper('alldata')
@Component({
  components: {
    Title,
    Content
  }
  
})
export default class App extends Vue{
  mounted (){
    // 先读取 赋值
    let list = dataHelper.readData()
    console.log(list);
    
    this['$store'].commit('changeList',list)
  }
}
</script>

<style lang='scss'>
</style>
