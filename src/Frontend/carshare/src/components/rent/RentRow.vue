/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 15/08/2020                *
 ***********************************************************************/
<template>
  <div class="shadow-sm p-3 mb-4 bg-white rounded">
    <div class="row bill-id">
      <a
        :href="'/receipt/' + rent.id"
        class="col-auto"
      >{{ rent.createdAt | formatDate }} - Rent ID: {{ rent.id }} - Period: {{ rent.period }} days</a>
      <div
        class="col"
        style="text-align:right; margin-right:20px"
        v-if="this.rent.status === 'In progress' && this.rent.bill.isPaid"
      >
        <a style="cursor:pointer" @click="showModal">Extend your rent</a>
        <Extend
          v-if="rent"
          v-show="isModalVisible"
          :rentId="rent.id"
          :fee="rent.car.price"
          @close="closeModal"
        />
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
              <b>{{rent.car.name}}</b>
            </p>
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
          <div v-else-if="this.rent.status === 'Wait for review'">
            <a class="pay-now collapsible" @click="showReviewBox">Review</a>
          </div>
          <div v-else-if="this.rent.status === 'Overdue'">
            <a class="pay-now overdue" href="/overdue">Overdue</a>
          </div>
          <div v-else>{{ rent.status }}</div>
        </div>
        <div v-else>
          <a class="pay-now" @click="showModal">Pay now</a>
          <PayNow
            v-show="isModalVisible"
            :rentId="rent.id"
            :fee="rent.bill.fee"
            :billId="rent.bill.id"
            :billType="rent.bill.type"
            @close="closeModal"
          />
        </div>
      </div>
      <ReviewBox :id="reviewBox" :carId="this.rent.car.id" :rentId="this.rent.id" />
    </div>
  </div>
</template>

<script>
import PayNow from "./PayNow";
import Extend from "./Extend";
import ReviewBox from "./ReviewBox";
export default {
  name: "RentRow",
  components: {
    PayNow,
    Extend,
    ReviewBox
  },
  props: ["rent"],
  data() {
    return {
      isModalVisible: false,
      reviewBox: "review-box-rent" + this.rent.id,
      comment: "",
      stars: 0
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showReviewBox() {
      var content = document.getElementById(this.reviewBox);
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
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
.bill-id {
  text-align: left;
  padding-left: 30px;
}

</style>