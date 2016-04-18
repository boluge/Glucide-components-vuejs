<style>
.mealslist {
    margin: 30px;
    background: #E3F2FD;
    padding: 5px 15px;
}
 h2 {
     color: #08c;
     font-family: sans-serif;
 }
</style>

<template>
    <div class="mealslist">
        <h2>Meals lists</h2>
        <p>Blood sugar + color + date + time ++</p>
        <p>Adress of json file : <a href="{{json}}">{{json}}</a></p>
        <p>{{meals | json 2}}</p>

    </div>
</template>

<script>
  export default {
    data: function () {
      return {
        meals: []
      }
    },
    props: ['json'],
    ready () {
      this.fetchLeft()
    },
    methods: {
      fetchLeft: function () {
        this.$http.get(this.json).then(function (results) {
          this.$set('meals', results.data)
        })
      }
    }
  }
</script>
