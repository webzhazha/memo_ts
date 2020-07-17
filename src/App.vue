<template>
  <div id="app">
      <Title ref='title' />
      <Content />
  </div>
</template>

<script lang='ts'>
import Title from './components/title.vue'
import Content from './components/content.vue'
import { Component, Prop, Vue, Provide, Ref } from 'vue-property-decorator';
@Component({
  components: {
    Title,
    Content
  }
})
export default class App extends Vue{
  public $refs!: {
    title: Title
  }
  @Provide()
    edit(id:number){
     let alldata = this['$store'].getters['list']
     let obj = alldata.find((item:any)=>{
       return item.id==id
     })
      this.$refs['title'].id = id
      this.$refs['title'].name = obj.name
      this.$refs['title'].setvalue = obj.status
      this.$refs['title'].text = obj.text
      this.$refs['title'].dialogVisible = true
    }
  mounted() {
    this['$store'].commit('changeList')
  }
  
}
</script>

<style lang='scss'>
</style>
