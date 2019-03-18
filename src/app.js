import Vue from 'vue'
import Button from './button/button'
import Icon from './icon/icon'
import ButtonGroup from './button-group/button-group'
import Input from './input/input'
import Row from './layout/grid/row'
import Col from './layout/grid/col'


Vue.component('y-button',Button)
Vue.component('y-icon',Icon)
Vue.component('y-button-group',ButtonGroup)
Vue.component('y-input',Input)
Vue.component('y-row',Row)
Vue.component('y-col',Col)

new Vue({
  el: '#app',
  data(){
    return {
      message: 'v-model'
    }
  }
})

