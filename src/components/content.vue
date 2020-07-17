<template>
  <div class="pt10">
    <Info v-for="item in list" :key="item.id" :obj='item' />
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
  get list(){
    return this['$store'].getters['list']
  }
}
</script>
<style lang='scss'>
.pt10 {
  padding-top: 10px;
}
</style>