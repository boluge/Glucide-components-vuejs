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
    </div>
</template>

<script>
  export default {
    props: ['json'],
    computed: {
      toto () {
        return 'Yo ça marche !'
      }
    }
  }
</script>
