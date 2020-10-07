/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 15/08/2020                *
 ***********************************************************************/
<template>
  <div class="shadow-sm p-3 mb-4 bg-white rounded" style="padding-bottom: 0 !important;">
    <div class="row bill-id">
      <a
        :href="'/receipt/' + bill.rent.id"
        class="col-auto"
      >Bill created at {{ bill.createdAt | formatDate }} - Rent ID: {{ bill.rent.id }} - Bill ID: {{bill.id}}</a>
    </div>

    <hr class="user" />
    <div class="row">
      <div class="car-item">
        <div class="row">
          <div class="col">
            <img
              class="img-fluid"
              :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Car/' + bill.rent.car_id"
            />
          </div>
          <div class="col">
            <p class="mb-0" style="font-size: 24px; margin-top:20px">
              <b>{{bill.rent.car.name}}</b>
            </p>
          </div>
        </div>
      </div>
      <div class="pickup-item">{{ bill.rent.car.location.address }}</div>

      <div class="rent-table-item">
        <div v-if="this.bill.isPaid">Paid</div>
        <div v-else>Unpaid</div>
      </div>
      <div class="rent-table-item">${{ bill.fee }}</div>
      <div class="rent-table-item">
        <div v-if="this.bill.isPaid">Completed</div>
        <div v-else>
          <a class="pay-now overdue" @click="showModal">Pay now</a>
          <PayNow
            v-show="isModalVisible"
            :rentId="bill.rent.id"
            :fee="bill.fee"
            :billId="bill.id"
            :billType="bill.type"
            @close="closeModal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PayNow from "../rent/PayNow";
export default {
  name: "OverdueRow",
  components: { PayNow },
  props: ["bill"],
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