<template>
  <div>
      <Loading />
      <h4>SHOWING CAR LIST RESULT</h4>
      <CarFilterHeader />
      <CarList v-bind:cars="this.cars"/>
  </div>
  

</template>

<script>
import Loading from '@/components/Loading';
import CarFilterHeader from '@/components/layouts/CarFilterHeader.vue';
import CarList from '@/components/cars/CarList.vue'
import authorizeMixin from "@/mixins/authorizeMixin";
export default {
  name: "Cars",
  components:{
    Loading,
    CarFilterHeader,
    CarList
  },
  mixins: [authorizeMixin],
  data() {
    return {
      cars: []
    }
  },
  async created() {
    const response = await this.$axios.get(`${this.$carshare}/cars/`, {
      headers: this.header
    });
    this.cars = response.data.cars;
  }
}
</script>


<style>
body{
  background-color:#F0F8FF;
}
.main{
  min-height: 600px;
}
</style>  