import Vue from 'vue'
import App from './components/App/App.vue'
import './theme/global.css'

window.addEventListener('load', function () {
  // NOTE: need this because this side effect is expected!
  /* eslint-disable-next-line no-new */
  new Vue({
    el: '#app',
    render: h => h(App)
  })
})
