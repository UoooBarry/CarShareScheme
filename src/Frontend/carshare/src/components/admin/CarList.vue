<!-- @Author Yongqian Huang 29/08/2020!-->
<template>
    <div>
      <div class="container">
        <div class='car-list-title'>USER LIST</div>
        <hr class='user'>
        <div class="item">Name</div>
        <div class="item">Brand</div>
        <div class="item">Model</div>
        <div class="item">Purchase_date</div>
        <div class="item">Seats</div>
        <div class="item">Luggages</div>
        <div class="item">Doors</div>
        <div class="item">Price</div>
        <div class="item">Features</div>
        <div class="item">Created at</div>
        <div class="item">Updated at</div>
        <div class="item">Viewed</div>
        <hr class='user'>
      </div>
      
      <div v-for="car in cars" v-bind:key="car.car.id" class="container">
        <CarRow v-bind:car="car" />
      </div>
    </div>
</template>

<script>
import CarRow from './CarRow';
export default {
    name: 'CarList',
    components: {
        CarRow
    },
    props: ['cars']
}
</script>

<style scoped>
hr.user{
  margin-top: 5px;
  margin-bottom: 5px;
}

.car-list-title{
  text-align: left;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
.item {
  display: inline-block;
  margin: 10px;
  width: 125px;
}
.user {
  padding-left: 20px;
}
header#header {
  display: none !important;
}
#dark-footer {
  display: none !important;
}

.main {
  height: 9
}
</style>