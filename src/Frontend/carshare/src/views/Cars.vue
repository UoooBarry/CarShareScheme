<template>
  <div>
    <Loading :key="loadingKey"/>
    <h4>SHOWING CAR LIST RESULT</h4>
    <CarFilterHeader  v-on:onFilter="update"/>
    <CarList v-bind:cars="cars" />
  </div>
</template>

<script>
import CarMixin from '@/mixins/carMixin';
import Loading from "@/components/Loading";
import CarFilterHeader from "@/components/layouts/CarFilterHeader.vue";
import CarList from "@/components/cars/CarList.vue";
export default {
  name: "Cars",
  mixins:[CarMixin],
  data(){
    return{
      cars: [],
      loadingKey: 0
    }
  },
  components: {
    Loading,
    CarFilterHeader,
    CarList
  },
  methods:{
    update(cars){
      this.cars = cars;
      this.loadingKey ++;
    }
  }
};
</script>


<style>
body {
  background-color: #f0f8ff;
}
.main {
  min-height: 600px;
}
</style>  