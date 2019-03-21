const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/viewport/toast/toast'
import Icon from '../src/icon/icon'
Vue.component('y-icon',Icon)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props', function(){
    it('接受 autoClose', (done) => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      vm.$on('close',() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        vm.$el.remove()
        vm.$destroy()
        done()
      })
    })

    it('接受 closeButton', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: true
        }
      }).$mount()
      const Icon = vm.$el.querySelector('.icon')
      expect(Icon).to.exist
      vm.$el.remove()
      vm.$destroy()
    })

    it('接受 message', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          message: 'message'
        }
      }).$mount()
      const toast = vm.$el.querySelector('.toast')
      expect(toast.textContent.trim()).to.eq('message')    
      vm.$el.remove()
      vm.$destroy()
    })

    it('接受 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
      vm.$el.remove()
      vm.$destroy()
    })
  })
})