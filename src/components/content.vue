<template>
  <div class="pt10">
    <Info v-for="item in list" :key="item.id" :obj='item' />
    {{list}}
  </div>
</template>
<script lang='ts'>
import Info from './info.vue'
import {Component, Vue} from 'vue-property-decorator'
@Component({
  components: {
    Info
  }
})
export default class Content extends Vue {
  list:any=[];
  mounted() {
    console.log(5666);
    this.$nextTick(()=>{
      this.list = this['$store'].getters.list
    })
    
    console.log(this.list);
    
  }
}
</script>
<style lang='scss'>
.pt10 {
  padding-top: 10px;
}
</style>