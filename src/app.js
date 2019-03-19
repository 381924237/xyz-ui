import Vue from 'vue'
import Button from './button/button'
import Icon from './icon/icon'
import ButtonGroup from './button-group/button-group'
import Input from './input/input'
import Row from './layout/grid/row'
import Col from './layout/grid/col'
import Container from './layout/container/container'
import Header from './layout/container/header'
import Main from './layout/container/main'
import Sider from './layout/container/sider'
import Footer from './layout/container/footer'

Vue.component('y-button',Button)
Vue.component('y-icon',Icon)
Vue.component('y-button-group',ButtonGroup)
Vue.component('y-input',Input)
Vue.component('y-row',Row)
Vue.component('y-col',Col)
Vue.component('y-container',Container)
Vue.component('y-header',Header)
Vue.component('y-main',Main)
Vue.component('y-sider',Sider)
Vue.component('y-footer',Footer)


new Vue({
  el: '#app',
  data(){
    return {
      message: 'v-model'
    }
  }
})

