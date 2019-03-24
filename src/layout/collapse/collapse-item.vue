<template>
  <div class="collapse-item"> 
    <div class="title" @click="toggle" :class="{selected: selected.indexOf(name)>=0}">
      {{title}}
      <y-icon name="right" class="icon"></y-icon>
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>


<script>
import Icon from '../../icon/icon'
export default {
  name: 'YCollapseItem',
  components: {
    'y-icon': Icon
  },
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    selected(){
      return this.$parent.selected
    }
  },
  data(){
    return {
      open: false
    }
  },
  inject: ['eventBus'],
  methods: {
    toggle(){
      if(this.open){
        this.eventBus.$emit('update:removeSelected',this.name)
      }else{
        this.eventBus.$emit('update:addSelected',this.name)
      }
    }
  },
  mounted(){
    this.eventBus.$on('update:selected',(names) => {
      if(names.indexOf(this.name) >= 0){
        this.open = true
      }else{
        this.open = false
      }
    })
  }
}
</script>

<style lang='scss' scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  .collapse-item{
    > .title{
      border: 1px solid $border-color;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: .5em .5em;
      cursor: pointer;
      background: #eee;
      display: flex;
      align-items: center;
      > .icon {
        margin-left: auto;
        transition: all .4s;
      }
      &.selected{
        > .icon{
           transform: rotateZ(90deg);
        }
      }
    }    
    &:first-child{
      > .title{
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child{
      > .title:last-child{
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
    > .content{
      padding: .3em .5em;
    }    
  }
</style>