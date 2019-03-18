const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在', () => {
    expect(Input).to.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('接受 value', () => {
      vm = new Constructor({
        propsData: {
          value: 'test'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('test')
    })

    it('接受 disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })

    it('接受 readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('接受 error', () => {
      vm = new Constructor({
        propsData: {
          error: 'error'
        }
      }).$mount()
      const use = vm.$el.querySelector('use')
      expect(use.getAttribute('xlink:href')).to.equal('#icon-error')

      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerText).to.equal('error')
    })
  })

  describe('事件', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('支持 change/input/focus/blur 事件', () => {
      ['change','input','focus','blur'].forEach((eventName)=>{
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName,callback)
        let event = new Event(eventName)
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
      })
    })
  })
})