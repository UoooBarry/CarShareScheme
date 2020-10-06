/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 16/08/2020
*Yongqian Huang, make authorze mixin global 24/09/2020                *
 ***********************************************************************/
<template >
  <div>
    <div class="sub-header">
      <h1>Rent History</h1>
    </div>
    <div class="container">
      <RentList v-bind:rents="rents" class="user-list" />
    </div>
  </div>
</template>

<script>
import RentList from "@/components/rent/RentList";

export default {
  name: "History",
  components: {
    RentList
  },
  data() {
    return {
      rents: []
    };
  },
  async created() {
    const response = await this.$axios.get(
      `${this.$carshare}/orders/list/personal`,
      {
        headers: this.header
      }
    );
    this.rents = response.data.rents;
  }
};
</script>

<style>

@media only screen and (max-width: 1200px) {
  .item-list-panel{
    display: none;
  }
}

@media only screen and (max-width: 400px) {
  .sub-header h1{
    font-size: 30px;
  }
}
</style>