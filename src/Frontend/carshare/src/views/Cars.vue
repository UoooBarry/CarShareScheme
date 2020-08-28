<template>
  <div>
    <Loading :key="loadingKey"/>
    <h4>SHOWING CAR LIST RESULT</h4>
    <CarFilterHeader  v-on:onFilter="update" :address='address' v-on:onAddressChange="changeAddress"/>
    <CarList v-bind:cars="cars" />
  </div>
</template>

<script>
import CarMixin from '@/mixins/carMixin';
import LocationMixin from '@/mixins/locationMixin';
import Loading from "@/components/Loading";
import CarFilterHeader from "@/components/layouts/CarFilterHeader.vue";
import CarList from "@/components/cars/CarList.vue";
export default {
  name: "Cars",
  mixins:[CarMixin, LocationMixin],
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
    },
    changeAddress(address){
      this.address = address;
      this.$axios.get(`${this.$carshare}/cars`,{
        params: {
          from: address
        }
      })
      .then((res) => {
        if(res.data.locations.length === 0){
          this.flashMessage.warning({
            title: 'Not found cars',
            message: 'No cars in that location can be found'
          });
          window.location.reload();
        }
        this.cars = this.getCarData(res);
        this.update();
      })
      .catch(err => console.log(err));
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