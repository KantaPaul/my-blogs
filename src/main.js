// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueresource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(vueresource)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

Vue.directive('rainbow', {
  bind (el, binding, vnode) {
    el.style.color = '#' + Math.random().toString(16).slice(2, 8)
  }
})

Vue.directive('backgound', {
  bind (el, binding, vnode) {
    el.style.background = '#' + Math.random().toString(10).slice(2, 10)
    el.style.boxShadow = 'rgba(208, 208, 208, 0.48) -1px 0px 16px 6px'
    el.style.marginBottom = '50px'
  }
})

Vue.directive('layout', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1170px'
      el.style.margin = '20px auto'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '500px'
      el.style.margin = '20px auto'
    } else {
      el.style.maxWidth = '800px'
      el.style.margin = '20px auto'
    }
    if (binding.arg === 'colum') {
      el.style.background = 'rgb(239, 239, 239)'
      el.style.padding = '40px'
    }
  }
})

Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase()
})

Vue.filter('to-lowercase', function (value) {
  return value.toLowerCase()
})

Vue.filter('char_length', function (value) {
  return value.slice(0, 100) + '...'
})

Vue.filter('char_length_50', function (value) {
  return value.slice(0, 50) + '...'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
