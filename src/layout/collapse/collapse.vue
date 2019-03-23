<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>


<script>
import Vue from 'vue'
export default {
  name: 'YCollapse',
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      eventBus: new Vue()
    }
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  },
  mounted(){
    this.eventBus.$emit('update:selected',this.selected)

    this.eventBus.$on('update:addSelected',(name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if(this.single){
        selectedCopy = [name]
      }else{
        console.log('push')
        selectedCopy.push(name)
      }
      console.log(selectedCopy)
      this.$emit('update:selected',selectedCopy)
      this.eventBus.$emit('update:selected',selectedCopy)
    })

    this.eventBus.$on('update:removeSelected',(name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index,1)
      this.$emit('update:selected',selectedCopy)
      this.eventBus.$emit('update:selected',selectedCopy)
    })
  }
}
</script>

<style lang='scss' scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  .collapse{
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
</style>