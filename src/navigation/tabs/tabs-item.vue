<template>
  <div class="tabs-item" :class="classes" @click="xxx">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'YTabsItem',
  data(){
    return {
      active: false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
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
  },
  inject: ['eventBus'],
  methods: {
    xxx(){
      this.eventBus.$emit('update:selected',this.name)
    }
  },
  created(){
    this.eventBus.$on('update:selected',(name) => {
      this.active = (name === this.name)
    })
  }
}
</script>

<style lang='scss' scoped>
  .tabs-item{
    flex-shrink: 0;
    padding: 0 2em;
    &.active{
      background: #bbb;
    }
  }
</style>