<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'YTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String|Number,
      required: true
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
      console.log(name)
    })
  }
}
</script>

<style lang='scss' scoped>

</style>