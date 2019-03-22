<template>
  <div class="popover" @click="onClick" ref="popover"> 
    <div class="content-wrapper" v-if="visible" ref="contentWrapper">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
  mounted(){
  
  },
  methods: {
    positionContent(){
      document.body.appendChild(this.$refs.contentWrapper)
      let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.left = left + window.scrollX +'px'
      this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
    },
    onClickDocument(e){
      if(this.$refs.popover && 
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target)) 
      ){return} 
      this.close()
    },
    open(){
      console.log('open',this)
      this.visible = true
      this.$nextTick(() => {
        this.positionContent()
        document.addEventListener('click',this.onClickDocument)
      })
    },
    close(){
      console.log('close',this)
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
  .popover {
    display: inline-block;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid;
    padding: .5em;
    transform: translateY(-100%);
  }
  
</style>