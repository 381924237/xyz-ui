<template>
  <div class="container" :class="containerClass">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'YContainer',
  data(){
    return {
      containerClass: {
        hasSider: false
      }
    }
  },
  mounted(){
    this.$children.forEach((vm) => {
      if(vm.$options.name === 'YSider'){
        this.containerClass.hasSider = true
      }
    })
  }
}
</script>

<style lang='scss' scoped>
  .container {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    &.hasSider {
      flex-direction: row;
    }
  }
</style>