const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/navigation/tabs/tabs'
import TabsHead from '../src/navigation/tabs/tabs-head'
import TabsItem from '../src/navigation/tabs/tabs-item'
import TabsBody from '../src/navigation/tabs/tabs-body'
import TabsPane from '../src/navigation/tabs/tabs-pane'
Vue.component('y-tabs',Tabs)
Vue.component('y-tabs-head',TabsHead)
Vue.component('y-tabs-item',TabsItem)
Vue.component('y-tabs-body',TabsBody)
Vue.component('y-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected prop', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <y-tabs selected="finance">
        <y-tabs-head>
          <y-tabs-item name="sports"> 体育 </y-tabs-item>
          <y-tabs-item name="finance"> 财经 </y-tabs-item>
          <y-tabs-item name="game"> 游戏 </y-tabs-item>
        </y-tabs-head>
        <y-tabs-body>
          <y-tabs-pane name="sports"> 体育资讯 </y-tabs-pane>
          <y-tabs-pane name="finance"> 财经资讯 </y-tabs-pane>
          <y-tabs-pane name="game"> 游戏资讯 </y-tabs-pane>
        </y-tabs-body>
      </y-tabs>
    `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let ele = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
      expect(ele.classList.contains('active')).to.be.true
      done()
    })
  })
  
  it('接受 direction prop',() => {
    
  })
})