<template>
  <div>
    <y-popover>
      <template slot="content">
        <div>内容1</div>
      </template>
      <y-button>Top</y-button>
    </y-popover>
    <y-popover position="bottom">
      <template slot="content">
        <div>内容2</div>
      </template>
      <y-button>Bottom</y-button>
    </y-popover>
    <y-popover position="left">
      <template slot="content">
        <div>内容3</div>
      </template>
      <y-button>Left</y-button>
    </y-popover>
    <y-popover position="right">
      <template slot="content">
        <div>内容4</div>
      </template>
      <y-button>Right</y-button>
    </y-popover>

    <y-popover trigger="hover">
      <template slot="content">
        <div>内容5</div>
      </template>
      <y-button>Hover</y-button>
    </y-popover>
  </div>
</template>


<script>
import Popover from '../../../src/viewport/popover/popover'
import Button from '../../../src/button/button'
export default {
  components: {
    'y-popover': Popover,
    'y-button': Button
  }
};
</script>

<style lang='scss' scoped>
</style>