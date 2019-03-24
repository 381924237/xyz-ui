<template>
  <div>
    <y-button>Default</y-button>
    <y-button icon="setting">Icon</y-button>
    <y-button icon="setting" position="right">Icon</y-button>
    <y-button icon="download" loading>Click me!</y-button>
  </div>
  
</template>


<script>
import Button from '../../../src/button/button'

export default {
  components: {
    'y-button': Button
  }
}
</script>

<style lang='scss' scoped>

</style>