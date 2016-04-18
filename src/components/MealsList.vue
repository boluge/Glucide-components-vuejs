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
        <ajax-json json="{{json}}"></ajax-json>
    </div>
</template>

<script>
  import MakeAjax from './AjaxJson.js'

  export default {
    components: {
      'ajax-json': new MakeAjax(this.json)
    },
    props: ['json'],
    computed: {
      toto () {
        return 'Yo ça marche !'
      }
    }
  }
</script>
