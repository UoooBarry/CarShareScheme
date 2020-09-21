/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 03/09/2020                *
  *   Bach Dao, Updated AT: 03/08/2020  Create components transition  *
 *   Bach Dao, Updated AT: 04/08/2020      fix layouts                *
 *  Yongqian Huang updated at 04/09/2020   fixed mutated error        *
*   Bach Dao, Updated AT: 06/08/2020  Create animation of complete button *
 ***********************************************************************/
<!-- Yongqian Huang updated at 04/09/2020, fixed mutated error-->
<template>
<div class="container-fluid" style="max-width:80%">
    <div class="row justify-content-between">
      <div class="col-auto order-el">
        <ProgressionBar id="progress" />
        <Review
          id="review"
          :car="car"
          v-on:update-start="updateStart"
          v-on:update-day="updatePeriod"
          v-on:nextStep="nextStep()"
        />
        <Pickup
          id="pickup"
          :location="location"
          v-on:lastStep="lastStep"
          :period="day"
          v-on:createRent="creatRent"
          v-on:createBill="createBill"
          :start_from="start_from"
          v-on:nextStep="nextStep()"
        />
        <Payment id="payment" v-on:lastStep="lastStep" :bill="bill" :rent="rent" v-on:nextStep="nextStep()" />
      </div>
      <div class="col-auto" style="min-height:700px">
        <SubTotal :car="car" :day="day" />
      </div>
    </div>
    </div>
</template>

<script>
import ProgressionBar from "@/components/order/ProgressionBar";
import SubTotal from "@/components/order/SubTotal";
import Pickup from "@/components/order/PickUp";
import Payment from "@/components/order/Payment";
import Review from "@/components/order/Review";
export default {
  name: "Checkout",
  components: {
    ProgressionBar,
    Review,
    SubTotal,
    Pickup,
    Payment
  },
  data() {
    return {
      car: "",
      step: 1,
      day: 1,
      location: "",
      stepElements: "",
      start_from: new Date().toISOString().substring(0, 10),
      bill: "",
      rent: ''
    };
  },
  methods: {
    updatePeriod(day) {
      this.day = day;
    },
    updateStart(date) {
      this.start_from = date;
    },
    createBill(bill) {
      this.bill = bill;
    },
    creatRent(rent){
      this.rent = rent;
    },
    nextStep() {
      this.step++;
      this.show();
    },
    lastStep() {
      this.step--;
      this.show();
    },
    show() {
      //Change progress bar
      const progressBar = document.getElementById("checkout-bar");
      progressBar.className = `step${this.step}`;

      //Show the step elment
      const currentStepElement = this.stepElements[this.step - 1];
      currentStepElement.style.display = "block";

      //Filter then hide other elements
      const otherElements = this.stepElements.filter(element => {
        return element !== currentStepElement;
      });
      for (const element of otherElements) {
        element.style.display = "none";
      }
    }
  },
  async created() {
    await this.$axios
      .get(`${this.$carshare}/cars/${this.$route.params.id}`)
      .then(res => {
        this.car = res.data.car;
      })
      .catch(() => {
        this.flashMessage.error({
          title: "Fail",
          message: "Get car data incorrectly!"
        });
        this.$router.push({
          name: "CarDetail",
          params: { id: this.$route.params.id }
        });
      });
    await this.$axios
      .get(`${this.$carshare}/locations/${this.car.location_id}`)
      .then(res => {
        this.location = res.data.location;
      })
      .catch(() => {
        this.flashMessage.error({
          title: "Fail",
          message: "Get car data incorrectly!"
        });
        this.$router.push({
          name: "CarDetail",
          params: { id: this.$route.params.id }
        });
      });
  },
  mounted() {
    this.stepElements = [
      document.getElementById("review"),
      document.getElementById("pickup"),
      document.getElementById("payment")
    ];
  }
};
</script>


<style scoped>
button {
  border: none;
  background: none;
}

#payment,
#pickup,
#btn-order {
  display: none;
}

.order-el{
  width:100%;
  max-width: 800px;
}
@media only screen and (max-width: 1024px) {
  .justify-content-between {
    overflow-y: auto;
    overflow-wrap: break-word;
  }
}
@media only screen and (max-width: 414px) {
  #progress{
    display: none;
  }
}

</style>  