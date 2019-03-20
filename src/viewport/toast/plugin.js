import Toast from './toast'

let currentToast

export default {
  install (Vue,options) {
    Vue.prototype.$toast = function (toastOptions) {
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({
        Vue, 
        propsData: toastOptions,
        onClose:() => {currentToast = null}
      })
    }
  }
}



function createToast({Vue,propsData,onClose}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsData})
  toast.$mount()
  toast.visible = true
  toast.$on('close',onClose)
  document.body.appendChild(toast.$el)
  return toast   
}