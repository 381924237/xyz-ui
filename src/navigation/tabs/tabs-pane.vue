<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'YTabsPane',
  data(){
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true
    }
  },
  computed: {
    classes(){
      return {
        active: this.active
      }
    }
  }
  ,
  inject: ['eventBus'],
  created(){
    this.eventBus.$on('update:selected',(name) => {
      this.active = (name === this.name)
    })
  }
}
</script>

<style lang='scss' scoped>
  .tabs-pane{
    &.active{
      background: rgba(0,0,0,.06);
    }
  }
</style>