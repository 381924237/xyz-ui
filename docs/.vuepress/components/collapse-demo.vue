<template>
  <y-collapse :selected.sync="selectedItem">
    <y-collapse-item title="标题1" name="1">内容1</y-collapse-item>
    <y-collapse-item title="标题2" name="2">内容2</y-collapse-item>
    <y-collapse-item title="标题3" name="3">内容3</y-collapse-item>
  </y-collapse>
</template>


<script>
import Collapse from '../../../src/layout/collapse/collapse'
import CollapseItem from '../../../src/layout/collapse/collapse-item'

export default {
  components: {
    'y-collapse': Collapse,
    'y-collapse-item': CollapseItem
  },
  data(){
    return {
      selectedItem: ['1']
    }
  }
}
</script>

<style lang='scss' scoped>

</style>