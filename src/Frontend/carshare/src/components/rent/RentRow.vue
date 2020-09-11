/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 15/08/2020                *
 ***********************************************************************/
<template>
  <div>
    <div
      class="row"
    >{{ rent.createdAt | formatDate }} Rent ID: {{ rent.id }} Period: {{ rent.period }}days</div>
    <div class="row">
      <div class="car-item">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Car/' + rent.car_id"
            />
          </div>
          <div class="col">
            <p class="mb-0" style="font-size:30px">
              <b>{{rent.car.model}}</b>
            </p>
            <small class="text-muted" style="font-size:24px">{{rent.car.brand}}</small>
          </div>
        </div>
      </div>
      <div class="item">{{ rent.car.location.address }}</div>

      <div class="item">{{ this.paymentStatus }}</div>
      <div class="item">${{ rent.bill.fee }}</div>
      <div class="item">{{ this.orderStatus}}</div>
    </div>
  </div>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";

export default {
  name: "RentRow",
  mixins: [authorizeMixin],
  props: ["rent"],
   data() {
    return {
      paymentStatus: "Unpaid",
      orderStatus: "In Progress"
    }
  },
  created() {
      if (this.rent.bill.complete){
          this.paymentStatus = "Paid"
      }
    if (this.rent.complete){
          this.paymentStatus = "Returned"
      }
  }
};
</script>

<style scoped>
.item {
  display: inline-block;
  margin: 10px;
  width: 125px;
}
img {
  margin: 0;
}
</style>