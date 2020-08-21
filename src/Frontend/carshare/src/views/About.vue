<template>
  <div>
      <Loading />
      <h1>Showing car listing result</h1>
      <CarFilterHeader />
      <CarDisplay v-bind:cars="this.cars"/>
  </div>
  

</template>

<script>
import Loading from '@/components/Loading';
import CarFilterHeader from '@/components/layouts/CarFilterHeader.vue';
import CarDisplay from '@/components/CarDisplay.vue'
import authorizeMixin from "@/mixins/authorizeMixin";
export default {
  name: "About",
  components:{
    Loading,
    CarFilterHeader,
    CarDisplay
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
    console.log(this.cars);
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