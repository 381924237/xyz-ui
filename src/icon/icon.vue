<template>
  <span class="icon-wrapper" @click="$emit('click')">
    <svg class="y-icon" >  
      <use :xlink:href="`#icon-${name}`"/>
    </svg>
  </span>

</template>

<script>
import './iconfont.js'

export default {
  name: 'yIcon',
  props: ['name']
}

</script>
<style lang='scss' scoped>
  .icon-wrapper{
    display: inline-flex;
    justify-content: center;
    align-content: center;
    width: 1em;
    height: 1em;
    .y-icon {
    height: 100%;
    width: 100%;
    vertical-align: top;
    overflow: hidden;
    }
  }

</style>