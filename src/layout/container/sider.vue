<template>
  <div class="sider">
    <y-icon name="close" class="icon" v-if="closeButton"></y-icon>    
    <slot></slot>
  </div>
</template>


<script>
import Icon from '../../icon/icon'

export default {
  name: 'YSider',
  props: {
    closeButton: {type: Boolean, default: false}  
  },
  components: {
    'y-icon': Icon
  }
}
</script>

<style lang='scss' scoped>
  .sider {
    position: relative;
    .icon {
      position: absolute;
      right: 4px;
      top: 4px;
      width: 18px;
      height: 18px
    }
  }
</style>