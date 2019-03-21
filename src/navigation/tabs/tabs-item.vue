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
      this.eventBus.$emit('update:selected',this.name,this)
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
  $active-color: rgb(0, 179, 134);
  .tabs-item{
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
      background: rgba(0,0,0,.04);
      color: $active-color;
      font-weight: bold;
    }
  }
</style>