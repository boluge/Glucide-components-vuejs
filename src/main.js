import Vue from 'vue'
import VueRessource from 'vue-resource'

import MealsList from './components/MealsList'

/* eslint-disable no-new */
Vue.use(VueRessource)

new Vue({
  el: 'body',
  components: {
    mealslist: MealsList
  },
  methods: {
    say: function (msg) {
      console.log(msg)
    }
  }
})
