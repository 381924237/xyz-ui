const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/layout/grid/row'
import Col from '../src/layout/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.be.ok
  })

  it('接受 gutter 属性', () => {
    Vue.component('y-row', Row)
    Vue.component('y-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <y-row gutter="20">
        <y-col span="12"></y-col>
        <y-col span="12"></y-col>
      </y-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      vm.$el.remove()
      vm.$destroy()
    })
  })

  it('接受 align 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        align: 'left'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.eq('flex-start')
    div.remove()
    vm.$destroy()
  })
})