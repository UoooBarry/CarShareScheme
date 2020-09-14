<template>
  <div>
    <div class="container">
      <h1>Rent History</h1>

      <hr class="user" />
      <div class="row" style="padding: 1rem!important;">
        <div class="car-item">Car</div>
        <div class="pickup-item">Pick Up Location</div>
        <div class="rent-table-item">Payment Status</div>
        <div class="rent-table-item">Total Price</div>
        <div class="rent-table-item">Order Status</div>
      </div>
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
