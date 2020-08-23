<template>
  <div class="carlist container">
    <div class="row">
      <div v-for="(car) in cars" v-bind:key="car.id" class="col-sm-3 car">
        <CarCard v-bind:car="car" />
      </div>
    </div>
  </div>
</template>

<script>
import CarCard from "./CarCard.vue";

export default {
  name: "CarList",
  components: {
    CarCard
  },
  props: ["cars"]
};
</script>


<style>
.col-sm-4.car{
  margin-bottom:40px;
}

.carlist{
  min-height: 1000px;
  max-width: 1500px;
}
</style>