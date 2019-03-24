<template>
  <div>
    <y-button @click="showToast1">自动关闭</y-button>
    <y-button @click="showToast2">上方弹出</y-button>
    <y-button @click="showToast3">下方弹出</y-button>
    <y-button @click="showToast4">中间弹出</y-button>
  </div>
  
</template>


<script>
import Vue from 'vue'
import Toast from '../../../src/viewport/toast/toast'
import Button from '../../../src/button/button'
import plugin from '../../../src/viewport/toast/plugin'
Vue.use(plugin)

export default {
  components: {
    'y-toast': Toast,
    'y-button': Button
  },
  methods: {
    showToast1(){
      this.$toast({
        autoClose: 2
      })
    },
    showToast2(){
      this.$toast({
        closeButton: true,
        message: '这是一条消息'
      })
    },
    showToast3(){
      this.$toast({
        closeButton: true,
        position: 'bottom'
      })
    },
    showToast4(){
      this.$toast({
        closeButton: true,
        position: 'middle'
      })
    }
  }
}
</script>

<style lang='scss' scoped>

</style>