<template>
  <div class="toast-wrapper" :class="toastClasses">
    <div class="toast">
      {{message}}
      <y-icon v-if="closeButton" name="close" @click="close" class="icon"></y-icon>  
    </div>
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
      type: [Number,Boolean],
      default: 2,
      validator(value){
        return value === false || typeof value === 'number'
      }
    },
    closeButton: {
      type: Boolean,
      default: false
    },
    message: {
      type: [String],
      default: 'This is message'
    },
    position: {
      type: String,
      default: 'top',
      validator(value){
        return ['top','bottom','middle'].indexOf(value) >= 0
      }
    }

  },
  computed: {
    toastClasses(){
      return {[`position-${this.position}`]: true}
    }
  },
  methods: {
    close(){
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    execAutoClose(){
      if(!this.closeButton){
        setTimeout(()=>{
          this.close()
        },this.autoClose * 1000)
      }
    }
  },
  mounted(){
    this.execAutoClose()
  }
}
</script>

<style lang='scss' scoped>
  $font-size: 18px;
  $font-color: rgb(24, 144, 255);
  $toast-min-height: 40px;
  $toast-bg: #fff;
  $close-color: #b3b3b3;
  $close-hover: rgb(0, 179, 134);
  $animation-duration: 300ms;  
  @keyframes slide-down {
    0% {opacity: 0; transform: translateY(-100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }
  @keyframes slide-up {
    0% {opacity: 0; transform: translateY(100%);}
    100% {opacity: 1;transform: translateY(0%);}
  }
  @keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
  } 
  .toast-wrapper{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top{
      top: 3%;
      .toast{
        animation: slide-down $animation-duration;
      }
    }
    &.position-bottom{
      bottom: 3%; 
      .toast{
        animation: slide-up $animation-duration;
      }    
    }
    &.position-middle{
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      .toast{
        animation: fade-in $animation-duration;
      }
    }
    .toast {
      color: $font-color;
      background: $toast-bg;
      font-size: $font-size;
      line-height: 1.8;
      min-height: $toast-min-height;
      box-shadow: 0 2px 8px rgba(0,0,0,.5);
      border-radius: 4px;
      padding: 0 16px;
      display: flex;
      align-items: center;
      padding: .5em .8em;
      animation: slide .3s;
      .icon {
        font-size: $font-size;
        margin-left: 2em;
        display: inline-flex;
        cursor: pointer;
        fill: $close-color;
        width: 1.3em;
        height: 1.3em;
        &:hover{
          fill: $close-hover;
        }
      }
    }
  }
</style>