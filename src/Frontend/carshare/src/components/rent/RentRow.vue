/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 15/08/2020                *
 ***********************************************************************/
<template>
  <div class="shadow-lg p-3 mb-1 bg-white rounded">
    <div
      class="row bill-id"
    >{{ rent.createdAt | formatDate }} - Rent ID: {{ rent.id }} - Period: {{ rent.period }} days</div>
    <hr class="user" />
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
            <p class="mb-0" style="font-size:30px; margin-top:20px">
              <b>{{rent.car.model}}</b>
            </p>
            <small class="text-muted" style="font-size:24px">{{rent.car.brand}}</small>
          </div>
        </div>
      </div>
      <div class="pickup-item">{{ rent.car.location.address }}</div>

      <div class="item">
        <div v-if="this.rent.bill.isPaid">Paid</div>
        <div v-else>Unpaid</div>
      </div>
      <div class="item">${{ rent.bill.fee }}</div>
      <div class="item">
        <div v-if="this.rent.bill.isPaid">{{ rent.status }}</div>
        <div v-else>
          <a class="pay-now">Pay now</a>
        </div>
      </div>
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
    return {};
  },
  created() {}
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
.bill-id {
  display: block;
  text-align: left;
  padding-left: 30px;
}
.pay-now {
  color: #4c4c4c;
  border: 2px solid #4c4c4c;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  padding: 8px;
  font-size: 15px;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  letter-spacing: 1.3px;
}
</style>