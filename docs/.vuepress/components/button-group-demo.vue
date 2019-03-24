<template>
  <div>
    <y-button-group>
      <y-button icon="left">Last</y-button>
      <y-button>Option</y-button>
      <y-button icon="right" position="right">Next</y-button>
    </y-button-group>
  </div>
</template>


<script>
import ButtonGroup from '../../../src/button-group/button-group'
import Button from '../../../src/button/button'

export default {
  components: {
    'y-button-group': ButtonGroup,
    'y-button': Button 
  }
}
</script>

<style lang='scss' scoped>

</style>