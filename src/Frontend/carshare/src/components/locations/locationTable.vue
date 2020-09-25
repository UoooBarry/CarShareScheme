<!-- @Author Yongqian Huang, created at 10/09/2020-->
<template>
  <div class="row">
    <div class="col-lg-auto item1">
      <div v-for="location in locations" v-bind:key="location.id" class="location-item">
        <LocationRow :location="location" />
      </div>
    </div>
    <div class="col item2">
      <div id="location-map"></div>
    </div>
  </div>
</template>

<script>
import LocationRow from "@/components/locations/locationRow";
export default {
  name: "LocationTable",
  props: ["locations"],
  data() {
    return {
      // locationAddresses: this.locations.address
      position: {},
      address: "100 Furlong Rd, Cairnlea VIC 3023"
    };
  },
  components: {
    LocationRow
  },
  created() {
    this.$axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            address: this.address,
            key: this.$google_api_key
          }
        }
      )
      .then(res => {
        this.position = res.data.results[0].geometry.location;
        this.initMap();
      });
  },

  methods: {
    initMap() {
      // The map, centered at Uluru
      const map = new window.google.maps.Map(
        document.getElementById("location-map"),
        {
          zoom: 15,
          center: this.position
        }
      );
      //   The marker, positioned at Uluru
      new window.google.maps.Marker({ position: this.position, map: map });
    }
  }
};
</script>
<style scoped>
.item1,
.item2 {
  padding: 0;
  margin: 20px;
  height: 600px;
}
.item1 {
  width: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
}
#location-map {
  width: 100%;
  height: 100%;
  background-color: grey;
}
.location-item {
  margin-bottom: 20px;
}
</style>