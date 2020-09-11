<template>
  <div>
    <div class="container">
      <h1>Rent History</h1>
      <hr class="user" />
      <div class="car-item">Car</div>
      <div class="item">Pick Up Location</div>
      <div class="item">Payment Status</div>
      <div class="item">Total Price</div>
      <div class="item">Order Status</div>
      <hr class="user" />
    </div>

    <div v-for="rent in rents" v-bind:key="rent.id" class="container">
      <RentRow v-bind:rent="rent" />
    </div>
  </div>
</template>

<script>
import RentRow from "./RentRow";

export default {
  name: "RentList",
  components: {
    RentRow
  },
  props: ["rents"]
};
</script>


<style>
hr.user {
  margin-top: 5px;
  margin-bottom: 5px;
}

.user-list-title {
  text-align: left;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}

.item {
  display: inline-block;
  margin: 10px;
  width: 125px;
}
.user {
  padding-left: 20px;
}
header#header {
  display: none !important;
}
#dark-footer {
  display: none !important;
}

.main {
  height: 930px;
}
</style>