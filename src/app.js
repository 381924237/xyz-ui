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
import plugin from './viewport/toast/plugin'
import Tabs from './navigation/tabs/tabs'
import TabsHead from './navigation/tabs/tabs-head'
import TabsItem from './navigation/tabs/tabs-item'
import TabsBody from './navigation/tabs/tabs-body'
import TabsPane from './navigation/tabs/tabs-pane'
import Popover from './viewport/popover/popover'

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
Vue.component('y-tabs',Tabs)
Vue.component('y-tabs-head',TabsHead)
Vue.component('y-tabs-item',TabsItem)
Vue.component('y-tabs-body',TabsBody)
Vue.component('y-tabs-pane',TabsPane)
Vue.component('y-popover',Popover)
Vue.use(plugin)

new Vue({
  el: '#app',
  data(){
    return {
      message: 'v-model',
      selectedTab: 'sports'
    }
  },
  methods: {
    showToast1(){
      this.$toast({
        closeButton: true
      })
    },
    showToast2(){
      this.$toast({
        closeButton: true,
        position: 'bottom'
      })
    },
    showToast3(){
      this.$toast({
        closeButton: true,
        position: 'middle'
      })
    }
  }
})

