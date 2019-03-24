<template>
  <div>
    <div class="box">
      <y-input value="Default"></y-input>
    </div>
    <div class="box">
      <y-input value="Disabled" disabled></y-input>
    </div>
    <div class="box">
      <y-input value="Readonly" readonly></y-input>
    </div>
    <div class="box">
      <y-input value="Error" error="Error Message"></y-input>
    </div>
    <div class="box">
      <y-input v-model="message"></y-input>
      <span style="marginLeft: 4px">{{message}}</span>
    </div>
  </div>
</template>


<script>
import Input from '../../../src/input/input'

export default {
  components: {
    'y-input': Input
  },
  data(){
    return {
      message: 'v-model'
    }
  }
}
</script>

<style lang='scss' scoped>
  .box {
    margin: 10px 0;
  }
</style>