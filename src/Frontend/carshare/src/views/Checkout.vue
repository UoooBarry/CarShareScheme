<!-- Yongqian Huang updated at 04/09/2020, fixed mutated error-->
<template>
  <div class="row">
    <div class="col">
      <ProgressionBar id='progress' />
      <Review id="review" :car="car" v-on:update-day="update"  v-on:nextStep='nextStep()'/>
      <Pickup id="pickup" :location="location" v-on:lastStep="lastStep"  v-on:nextStep='nextStep()'/>
      <Payment id="payment" v-on:lastStep="lastStep"  v-on:nextStep='nextStep()'/>

      <CompleteOrderButton id="btn-order" />
    </div>
    <div class="col" style="min-height:700px">
      <SubTotal :car="car" :day="day" :key="subTotalKey" />
    </div>
  </div>
</template>

<script>
import ProgressionBar from "@/components/order/ProgressionBar";
import SubTotal from "@/components/order/SubTotal";
import Pickup from "@/components/order/PickUp";
import Payment from "@/components/order/Payment";
import CompleteOrderButton from "@/components/order/CompleteOrderButton";
import Review from "@/components/order/Review";
export default {
  name: "Checkout",
  components: {
    ProgressionBar,
    Review,
    SubTotal,
    Pickup,
    Payment,
    CompleteOrderButton
  },
  data() {
    return {
      car: "",
      step: 1,
      day: 1,
      subTotalKey: 0,
      location: "",
      stepElements: ''
    };
  },
  methods: {
    update(day) {
      this.day = day;
      this.subTotalKey++;
    },
    nextStep(){
      this.step ++;
      this.show();
    },
    lastStep(){
      console.log('emited');
      this.step --;
      this.show()
    },
    show() {
      //Change progress bar
      const progressBar = document.getElementById('checkout-bar');
      progressBar.className =`step${this.step}`;

      //Show the step elment
      const currentStepElement = this.stepElements[this.step - 1];
      currentStepElement.style.display = 'block';

      //Filter then hide other elements
      const otherElements = this.stepElements.filter( (element) => {
        return element !== currentStepElement;
      })
      for(const element of otherElements){
        element.style.display = 'none';
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
      document.getElementById('review'),
      document.getElementById('pickup'),
      document.getElementById('payment')
    ]
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
</style>  