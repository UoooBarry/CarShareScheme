<!-- Yongqian Huang created at 1/09/2020 -->
<template>
  <div>
    <div class="sub-header">
      <h1>Nearest return location</h1>
    </div>
    <div class="container">
      <Loading />
      <LocationTable :locations="locations" />
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import LocationTable from "@/components/locations/locationTable";
export default {
  name: "Locations",
  data() {
    return {
      locations: [],
      address: ""
    };
  },
  components: {
    LocationTable,
    Loading
  },
  created() {
    navigator.geolocation.getCurrentPosition(position => {
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
          this.$axios
            .get(`${this.$carshare}/locations//list/nearest`, {
              params: {
                from: this.address
              }
            })
            .then(res => {
              this.locations = res.data.locations;
            });
        });
    });
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  min-height: 700px;
}
</style>