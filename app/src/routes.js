import Vue from 'vue'

export default {
  '/': {
    component: Vue.component('landing-page', require('./components/LandingPageView')),
    name: 'landing-page'
  },
  '/list': {
    component: Vue.component('coffee-list', require('./components/CoffeeListView')),
    name: 'coffee-list'
  }
}
