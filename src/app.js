import Vue from 'vue'
import App from './components/App/App.vue'
import './theme/global.css';

window.addEventListener('load', function () {
  new Vue({
    el: '#app',
    render: h => h(App)
  })
})