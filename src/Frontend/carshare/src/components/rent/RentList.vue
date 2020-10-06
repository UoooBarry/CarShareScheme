<template>
  <div>
    <div class="container item-list-panel">
      <div class="row" style="padding: 1rem!important;">
        <div class="car-item">Car</div>
        <div class="pickup-item">Pick Up Location</div>
        <div class="rent-table-item">Payment Status</div>
        <div class="rent-table-item">Total Price</div>
        <div class="rent-table-item">Action</div>
      </div>
      <hr class="user" />
    </div>

    <div v-for="rent in pageOfItems" v-bind:key="rent.id" class="container">
      <RentRow v-bind:rent="rent" />
    </div>
    <div class="page-footer" v-if="rents.length">
      <jw-pagination :items="rents" :pageSize="6" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
    </div>
    <div v-else>
      <h1>You don't have any rent history</h1>
    </div>
  </div>
</template>

<script>
import RentRow from "./RentRow";
const customLabels = {
  first: "First",
  last: "Last",
  previous: "<",
  next: ">"
};
export default {
  name: "RentList",
  components: {
    RentRow
  },
  props: ["rents"],
  data() {
    return {
      pageOfItems: [],
      customLabels
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    }
  }
};
</script>
