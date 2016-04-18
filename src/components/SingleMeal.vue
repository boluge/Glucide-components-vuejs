<style>
.mealslist {
    margin: 30px;
    background: #455A64;
    padding: 10px
}
 h2 {
     color: #fff;
     font-size: 16px;
     margin: 10px;
     margin-left: 55px;
 }
 .meal {
   position: relative;
 }
 .glycemie {
   position: absolute;
   color: #333;
   left: 0;
   top: 50%;
   margin-top: -19px;
   line-height: 38px;
   text-align: center;
   font-size: 12px;
   display: block;
   height: 38px;
   width: 38px;
   border-radius: 50%;
 }
 .sugar-hypo {
   background: #4FC3F7;
 }
 .sugar-normal {
   background: #9CCC65;
 }
 .sugar-warning {
   background: #FFC107;
 }
 .sugar-hyper {
   background: #E57373;
 }
</style>

<template>
  <div class="meal">
    <span class="glycemie {{class}}">{{sugar}}</span>
    <h2>{{name}}</h2>
  </div>

  <!--<meal name="{{meal.name}}" sugar="{{meal.blood_sugar}}" created="{{meal.created_at}}"></meal>-->
</template>

<script>
  export default {
    props: {
      'name': {type: String},
      'sugar': {type: String},
      'created': {type: String}
    },
    computed: {
      class () {
        if (this.sugar <= 0.7) {
          return 'sugar-hypo'
        } else if (this.sugar > 0.7 && this.sugar <= 1.2) {
          return 'sugar-normal'
        } else if (this.sugar > 1.2 && this.sugar <= 1.7) {
          return 'sugar-warning'
        } else {
          return 'sugar-hyper'
        }
      }
    }
  }
</script>
