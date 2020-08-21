<template>
    <div class="carlist">
        
      <div v-for="car in cars" v-bind:key="car.id" class="container">
          
        <CarList v-bind:car="car" />
      </div>
    </div>
</template>

<script>
import CarList from '@/components/CarList.vue';

export default {
    name: 'CarDisplay',
    components:{
        CarList
    },
    props: ['cars'],
    created() {
        console.log(this.cars.length);
    }
}
</script>


<style>


</style>