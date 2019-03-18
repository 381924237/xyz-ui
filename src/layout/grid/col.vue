<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>  
  </div>
</template>


<script>
let validator = (value) => {
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if(!['span','offset'].includes(key)){
      valid = false
    }
  })
  return valid
}

export default {
  name: 'YCol',
  data () {
    return {
      gutter: 0
    }
  },
  props: {
    span: {type: [Number,String]},
    offset: {type: [Number,String]},
    ipad: {type: Object,validator},
    npc: {type: Object,validator},
    pc: {type: Object,validator},
    wpc: {type: Object,validator}
  },
  methods: {
    createClasses(obj,str=''){
      if(!obj) return []
      let arr = []
      if(obj.span) { arr.push(`col-${str}${obj.span}`) }
      if(obj.offset) { arr.push(`offset-${str}${obj.offset}`)}
      return arr 
    }
  },
  computed: {
    colStyle(){
      let {gutter} = this
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      }
    },
    colClass(){
      let { span,offset,ipad,npc,pc,wpc,createClasses } = this
      return [
        ...createClasses({span,offset}),
        ...createClasses(ipad,'ipad-'),
        ...createClasses(npc,'npc-'),
        ...createClasses(pc,'pc-'),
        ...createClasses(wpc,'wpc-'),
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  .col{
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }

    @media (min-width: 577px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) *100%;
        }
      }

      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 769px) {
      $class-prefix: col-npc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) *100%;
        }
      }

      $class-prefix: offset-npc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 993px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) *100%;
        }
      }

      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }

    @media (min-width: 1201px) {
      $class-prefix: col-wpc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) *100%;
        }
      }

      $class-prefix: offset-wpc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
  }
</style>