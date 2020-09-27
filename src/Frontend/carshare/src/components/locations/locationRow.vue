<!-- @Author Yongqian Huang, created at 10/09/2020
      Bach Dao update better UI 28/09/2020-->
<template>
  <div>
    <div
      class="row location-backdrop-1"
      :id="id"
      @click="zoomLocation"
      style="background: white; padding-top:10px;padding-bottom:20px"
    >
      <div class="col">
        <img id="location-img" src="../../../public/img/location.jpg" />
      </div>
      <div class="col">
        <div class="location-name">{{location.name}}</div>
        <div class="location-address">
          <a :href="linkToGoogleMap" title="Redirect to google map.">{{location.address}}</a>
        </div>
        <div class="text-muted">{{(location.distance)/1000}} Km far away</div>
        <div class="text-muted">
          <font-awesome-icon icon="phone-alt" />
          <u>(03) 9466 2866</u>
        </div>
      </div>
    </div>
    <div
      class="row"
      style="background: #BDC3C7; padding:10px; align-items: center;justify-content: center;"
    >
      <font-awesome-icon icon="clock" id="icon-clock" />Opening hours: 9:00 am - 5:00 pm
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationRow",
  props: ["location", "map"],
  data() {
    return {
      linkToGoogleMap: `https://www.google.com/maps/place/${this.location.address}/`,
      id: "location-backdrop-" + this.location.id,
      marker: "",
      infowindow: new window.google.maps.InfoWindow({
        content:
          '    <div class="row location-backdrop-1" style="background: white; padding-top:10px;padding-bottom:20px; width:320px;"><div class="col" style="margin-left:0; padding-right:0;margin-right:0; width: 50% !important"><img id="another-location-img" style="max-width: 100% !important" src="https://www.abc.net.au/cm/rimage/5391246-16x9-xlarge.jpg?v=5" /></div><div class="col"><div class="location-name">' +
          this.location.name +
          '</div><div class="location-address">' +
          this.location.address +
          '</div><a href="https://www.google.com/maps/place/' +
          this.location.address +
          '/" title="Redirect to google map.">Show direction</a><div class="text-muted"><u>(03) 9466 2866</u></div></div></div>'
      })
    };
  },
  created() {
    var iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
    this.$axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json",
        {
          params: {
            address: this.location.address,
            key: this.$google_api_key
          }
        }
      )
      .then(res => {
        this.marker = new window.google.maps.Marker({
          position: res.data.results[0].geometry.location,
          title: this.location.name,
          icon: iconBase + "parking_lot_maps.png",
          animation: window.google.maps.Animation.DROP
        });
        this.marker.addListener("click", this.highlight);
        this.marker.setMap(this.map);
        var divId = this.id;
        window.google.maps.event.addListener(
          this.infowindow,
          "closeclick",
          function() {
            document.getElementById(divId).style.background = "white";
          }
        );
      });
  },
  methods: {
    highlight() {
      document.getElementById(this.id).style.background = "rgb(223, 223, 223)";
      this.infowindow.open(this.map, this.marker);
    },
    zoomLocation() {
      this.map.setCenter(this.marker.getPosition());
      this.smoothZoom(this.map, 15, this.map.getZoom());
    },
    // the smooth zoom function
    smoothZoom(map, max, cnt) {
      if (cnt >= max) {
        return;
      } else {
        var that = this;
        var z = window.google.maps.event.addListener(
          map,
          "zoom_changed",
          function() {
            window.google.maps.event.removeListener(z);
            that.smoothZoom(map, max, cnt + 1);
          }
        );
        setTimeout(function() {
          map.setZoom(cnt);
        }, 80);
      }
    }
  }
};
</script>
<style scoped>
#location-img {
  margin-top: 0 !important;
  width: 100%;
  float: left;
}
.location-name {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
}
.location-address a {
  font-size: 14px;
  color: black;
}
#icon-clock {
  font-size: 16px;
  margin-right: 10px;
}
</style>