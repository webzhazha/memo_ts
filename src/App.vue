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
@Component({
  components: {
    Title,
    Content
  }
})
export default class App extends Vue{

}
</script>

<style lang='scss'>
</style>
