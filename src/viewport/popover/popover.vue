<template>
  <div class="popover" @click="onClick" ref="popover"> 
    <div class="content-wrapper" v-if="visible" ref="contentWrapper"
      :class="{[`position-${position}`]:true}"
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>


<script>
export default {
  name: "YPopover",
  data(){
    return {
      visible: false
    }
  },
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value){
        return ['top','bottom','left','right'].indexOf(value) >= 0
      }
    }
  },
  mounted(){
  
  },
  methods: {
    positionContent(){
      const {contentWrapper, triggerWrapper} = this.$refs
      document.body.appendChild(contentWrapper)
      let {width,height,top,left} = triggerWrapper.getBoundingClientRect()
      if(this.position === 'top'){
        contentWrapper.style.left = left + window.scrollX +'px'
        contentWrapper.style.top = top + window.scrollY + 'px'
      }else if(this.position === 'bottom'){
        contentWrapper.style.left = left + window.scrollX +'px'
        contentWrapper.style.top = height + top + window.scrollY + 'px'
      }else if(this.position === 'left'){
        let {height: height2} = contentWrapper.getBoundingClientRect()
        contentWrapper.style.left = left + window.scrollX +'px'
        contentWrapper.style.top = top + window.scrollY + ((height - height2) / 2) + 'px'
      }else if(this.position === 'right'){
        let {height: height2} = contentWrapper.getBoundingClientRect()
        contentWrapper.style.left = width + left + window.scrollX +'px'
        contentWrapper.style.top = top + window.scrollY + ((height - height2) / 2) + 'px'
      }
      
    },
    onClickDocument(e){
      if(this.$refs.popover && 
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target)) 
      ){return}
      if(this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))           
      ){return}
      this.close()
    },
    open(){
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click',this.onClickDocument)
      })
    },
    close(){
      this.visible = false
      document.removeEventListener('click',this.onClickDocument)
    },
    onClick(event){
      if(this.$refs.triggerWrapper.contains(event.target)){
        if(this.visible === true){
          this.close()
        }else{
          this.open()
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  $border-color: rgb(0, 179, 134);
  $border-radius: 4px;
  $border-width: 2px;
  $calc: calc(100% - 3px);
  .popover {
    display: inline-block;
    position: relative;
    > .triggerWrapper{
      display: inline-block;
    }
  }
  .content-wrapper {
    position: absolute;
    border: $border-width solid $border-color;
    border-radius: $border-radius;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: white;
    z-index: 20;
    &::before,&::after{
      content: '';
      display: block;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      position: absolute;
    }

    &.position-top{
      transform: translateY(-100%);
      margin-top: -10px;
      &::before, &::after{
        left: 10px;
      }
      &::before{
        border-top-color: $border-color;
        top: 100%;
      }    
      &::after{
        border-top-color: white;
        top: $calc;
      }
    }

    &.position-bottom{
      margin-top: 10px;
      &::before, &::after{
        left: 10px;
      }
      &::before{
        border-bottom-color: $border-color;
        bottom: 100%;
      }    
      &::after{
        border-bottom-color: white;
        bottom: $calc;
      }
    }
    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before, &::after{
        top: 50%;
        transform: translateY(-50%);
      }
      &::before{
        border-left-color: $border-color;
        left: 100%;
      }    
      &::after{
        border-left-color: white;
        left: $calc;
      }
    }
    &.position-right{
      margin-left: 10px;
      &::before, &::after{
        top: 50%;
        transform: translateY(-50%);
      }
      &::before{
        border-right-color: $border-color;
        right: 100%;
      }    
      &::after{
        right: $calc;
        border-right-color: white;
      }
    }           
  }  
  
</style>