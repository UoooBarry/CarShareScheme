<template>
  <div class="overdue-container">
    <div class="sub-header">
      <h1>Over due bills</h1>
    </div>
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
  </div>
</template>

<script>
export default {
  name: "Overdue",
  data() {
    return {
      bills: []
    };
  },
  async created() {
    const response = await this.$axios.get(
      `${this.$carshare}/customers/overdue/all`,
      {
        headers: this.header
      }
    );
    this.bills = response.data.bills;
  }
};
</script>

<style scoped>
.overdue-container {
  min-height: 700px;
}
</style>>
