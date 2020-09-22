/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 15/08/2020                *
 ***********************************************************************/
<template>
  <div class="shadow-sm p-3 mb-4 bg-white rounded">
    <div class="row bill-id">
      <div
        class="col-auto"
      >{{ rent.createdAt | formatDate }} - Rent ID: {{ rent.id }} - Period: {{ rent.period }} days</div>
      <div
        class="col"
        style="text-align:right; margin-right:20px"
        v-if="(this.rent.status === 'In progress' || this.rent.status === 'Not picked' ) && this.rent.bill.isPaid"
      >
        <a style="cursor:pointer" @click="showModal">Extend your rent</a>
        <Extend v-show="isModalVisible" :rentId="rent.id"  @close="closeModal" />
      </div>
    </div>
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
            <p class="mb-0" style="font-size: 24px; margin-top:20px">
              <b>{{rent.car.model}}</b>
            </p>
            <small class="text-muted" style="font-size:18px">{{rent.car.brand}}</small>
          </div>
        </div>
      </div>
      <div class="pickup-item">{{ rent.car.location.address }}</div>

      <div class="rent-table-item">
        <div v-if="this.rent.bill.isPaid">Paid</div>
        <div v-else>Unpaid</div>
      </div>
      <div class="rent-table-item">${{ rent.bill.fee }}</div>
      <div class="rent-table-item">
        <div v-if="this.rent.bill.isPaid">
          <div v-if="this.rent.status === 'In progress'">
            <a class="pay-now" href="/locations">Return</a>
          </div>
          <div v-else>{{ rent.status }}</div>
        </div>
        <div v-else>
          <a class="pay-now" @click="showModal">Pay now</a>
          <PayNow
            v-show="isModalVisible"
            :rentId="rent.id"
            :fee="rent.bill.fee"
            @close="closeModal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";
import PayNow from "./PayNow";
import Extend from "./extend/Extend"
export default {
  name: "RentRow",
  mixins: [authorizeMixin],
  components: {
    PayNow,
    Extend
  },
  props: ["rent"],
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
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