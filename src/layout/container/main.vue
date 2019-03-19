<template>
  <div class="main">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'YMain'
}
</script>

<style lang='scss' scoped>
  .main {
    flex-grow: 1;
  }
</style>