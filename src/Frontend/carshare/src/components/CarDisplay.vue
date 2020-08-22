<template>
  <div class="carlist container">
    <div class="row">
      <div v-for="car in cars" v-bind:key="car.id" class="col-sm-4">
        <CarList v-bind:car="car" />
      </div>
    </div>
  </div>
</template>

<script>
import CarList from "@/components/CarList.vue";

export default {
  name: "CarDisplay",
  components: {
    CarList
  },
  props: ["cars"]
};
</script>


<style>
.col-sm-4{
  margin-bottom:40px;
}
</style>