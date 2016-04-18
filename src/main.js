import Vue from 'vue'
import MealsList from './components/MealsList'

/* eslint-disable no-new */
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
