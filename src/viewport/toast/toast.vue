<template>
  <div class="toast">
    <slot></slot>
    <y-icon v-if="closeButton" name="close" @click="close"></y-icon>  
  </div>
</template>


<script>
import Icon from '../../icon/icon'
export default {
  name: 'YToast',
  components: {
    Icon
  },
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 2
    },
    closeButton: {
      type: Boolean,
      default: false
    }

  },
  methods: {
    close(){
      this.$el.remove()
      this.$destroy()
    }
  },
  mounted(){
    if(!this.closeButton){
      setTimeout(()=>{
        this.close()
      },this.duration * 1000)
    }
  }
}
</script>

<style lang='scss' scoped>
  $font-size: 18px;
  $toast-height: 40px;
  $toast-bg: #fff;
  $close-color: #b3b3b3;
  $close-hover: rgb(0, 179, 134);
  .toast {
    position: fixed;
    top: 3%;
    left: 50%;
    color: black;
    background: $toast-bg;
    transform: translateX(-50%);
    font-size: $font-size;
    line-height: 1.8;
    height: $toast-height;
    box-shadow: 0 2px 8px rgba(0,0,0,.5);
    border-radius: 4px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    padding: .5em .8em;
    .icon-wrapper {
      font-size: $font-size;
      margin-left: 2em;
      display: inline-flex;
      cursor: pointer;
      fill: $close-color;
      &:hover{
        fill: $close-hover;
      }
    }
  }
</style>