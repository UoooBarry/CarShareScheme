 /***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 23/09/2020                  *
 *   Bach Dao, Updated AT: 24/08/2020      sorting                      *
 *   Bach Dao, Updated AT: 25/08/2020      navigation layout            *
 *   Bach Dao, Updated AT: 27/08/2020      tool tips                    *  
 *Yongqian Huang updated at 27/08/2020 Add location check to display cars*
 ***********************************************************************/
<template>
  <div>
    <Loading :key="loadingKey" />
    <h4>SHOWING CAR LIST RESULT</h4>
    <CarFilterHeader
      v-on:onFilter="update"
      :address="address"
      v-on:onAddressChange="changeAddress"
    />
    <CarList v-bind:cars="cars" />
  </div>
</template>

<script>
import CarMixin from "@/mixins/carMixin";
import Loading from "@/components/Loading";
import CarFilterHeader from "@/components/layouts/CarFilterHeader.vue";
import CarList from "@/components/cars/CarList.vue";
export default {
  name: "Cars",
  mixins: [CarMixin],
  data() {
    return {
      cars: [],
      address: "",
      loadingKey: 0
    };
  },
  created() {
    navigator.geolocation.getCurrentPosition(position => {
      //Get user address by using gooogle map api with a cors anywhere proxy
      this.$axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json",
          {
            params: {
              latlng: `${position.coords.latitude},${position.coords.longitude}`,
              key: this.$google_api_key
            }
          }
        )
        .then(res => {
          //Get the first result as formatted_address
          this.address = res.data.results[0].formatted_address;
          //Send request to backend get all avalible cars
          this.$axios
            .get(`${this.$carshare}/cars`, {
              params: {
                from: this.address
              }
            })
            .then(res => {
              //If no car fond, display a message
              if (res.data.locations.length === 0) {
                this.flashMessage.warning({
                  title: "Not found cars",
                  message:
                    "No cars in that location can be found, please re-enter a location"
                });
              }
              //Set cars
              this.cars = this.getCarData(res);
            })
            .catch(err => {
              console.log(err);
            });
        });
    })
  },
  components: {
    Loading,
    CarFilterHeader,
    CarList
  },
  methods: {
    update(cars) {
      this.cars = cars;
      this.loadingKey++;
    },
    //Change address, resend request
    changeAddress(address) {
      this.address = address;
      this.$axios
        .get(`${this.$carshare}/cars`, {
          params: {
            from: address
          }
        })
        .then(res => {
          //No car fond
          if (res.data.locations.length === 0) {
            this.flashMessage.warning({
              title: "Not found cars",
              message:
                "No cars in that location can be found, please re-enter a location"
            });
            this.loadingKey++;
          }
          //Update cars
          this.cars = this.getCarData(res);
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