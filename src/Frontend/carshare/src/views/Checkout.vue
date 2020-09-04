<template>
  <div class="row">
    <div class="col">
      <ProgressionBar />
      <Review id="review" :car="car" :day="day" v-on:update-day="update" />
      <Pickup id="pickup" :location="location" />
      <Payment id="payment" />
      <div class="space"></div>
      <button id="btn-progress" type="button" class="btn btn-success customize-button">Next</button>
      <CompleteOrderButton id="btn-order" class="btn customize-button" />
    </div>
    <div class="col">
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
      day: 1,
      subTotalKey: 0,
      location: ""
    };
  },
  methods: {
    update(day) {
      console.log("test");
      this.day = day;
      this.subTotalKey++;
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
    const $ = require("jquery");
    window.$ = $;
    $(document).ready(function() {
      $("#btn-progress").click(function() {
        var classes = ["step1", "step2", "step3", "step4"];
        $("#checkout-bar").each(function() {
          this.className =
            classes[($.inArray(this.className, classes) + 1) % classes.length];
          if (this.className === "step1") {
            $("#review").show();
            $("#pickup").hide();
            $("#payment").hide();
          } else if (this.className === "step2") {
            $("#review").hide();
            $("#pickup").show();
            $("#payment").hide();
          } else if (this.className === "step3") {
            $("#review").hide();
            $("#payment").show();
            $("#pickup").hide();
          }
        });
      });
    });
  }
};
</script>


<style scoped>
button {
  border: none;
  background: none;
}
.customize-button {
  margin-bottom: 90px !important;
}
.btn {
  display: inline-block;
  padding: 6px 12px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  margin: 0 auto;
}

.btn-success {
  display: block;
  min-width: 220px;
  text-transform: uppercase;
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}

.btn-success:hover {
  color: #fff;
  background-color: #449d44;
  border-color: #398439;
}

.btn.focus,
.btn:focus,
.btn:hover {
  color: #fff;
  text-decoration: none;
}

.space {
  width: 100%;
  float: left;
  clear: both;
  height: 200px;
}

#payment,
#pickup,
#btn-order {
  display: none;
}
</style>  