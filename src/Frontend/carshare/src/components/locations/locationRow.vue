<!-- @Author Yongqian Huang, created at 10/09/2020-->
<template>
  <div>
    <div class="row" style="background: white; padding-top:10px;padding-bottom:20px">
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
      style="background: #dfdfdf; padding:10px; align-items: center;justify-content: center;"
    >
      <font-awesome-icon icon="clock" id="icon-clock" />Opening hours: 9:00 am - 5:00 pm
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationRow",
  props: ["location"],
  data() {
    return {
      linkToGoogleMap: `https://www.google.com/maps/place/${this.location.address}/`
    };
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