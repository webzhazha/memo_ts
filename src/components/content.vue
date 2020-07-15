<template>
  <div class="pt10">
    <Info />
    <Info />
    <Info />
    <Info />
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
  memoList:any=[];
}
</script>
<style lang='scss'>
.pt10 {
  padding-top: 10px;
}
</style>