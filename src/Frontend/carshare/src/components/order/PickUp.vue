/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 03/09/2020                *
 ***********************************************************************/
<template>
  <div style="min-width:770px">
    <div class="card border-0">
      <div class="card-header card-2">
        <p class="card-text text-muted mt-md-4 mb-2" style="font-size:30px">
          <font-awesome-icon icon="chevron-left" id="b-2-car" @click='lastStep' />PICK UP INFORMATION
        </p>
      </div>
    </div>
    <div class="location-form">
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label font-weight-bold">Pick up location</label>
        <div class="col-sm-10">
          <input type="text" v-model="location.name" class="form-control" readonly />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label font-weight-bold">Return Date</label>
        <div class="col-sm-10">
          <input type="input" class="form-control" :value="calculateDay(period).toISOString().substring(0, 10)" readonly/>
        </div>
      </div>
    </div>
    <div class="space"></div>
    <button id="btn-progress" type="button" class="btn btn-next customize-button" @click='nextStep()' >Confirm Order</button>
  </div>
</template>

<script>
import authorizeMixin from '@/mixins/authorizeMixin';
export default {
  name: "Pickup",
  components: {},
  mixins: [authorizeMixin],
  props: ["location", "period", "start_from"],
  data() {
    return {};
  },
  methods: {
    nextStep(){
      this.$axios.post(`${this.$carshare}/orders/create`,{
        car_id: this.$route.params.id,
        start_from: this.start_from,
        period: this.period,
      },{headers: this.header})
        .then((res) => {
          if (res.data.message == "fail") {
          
              this.flashMessage.error({
                title: "Order failed",
                message: res.data.errors
              });

            return;
          }

          this.flashMessage.success({
            title: "Order confrimed!",
            message: "Order confrimed successfully!"
          });

          this.$emit('createRent', res.data.rent);
          this.$emit('createBill', res.data.bill);
          this.$emit('updateFee', res.data.feeToPay);
          this.$emit('nextStep');
        })
    },
    lastStep(){
      this.$emit('lastStep');
    },
    calculateDay(period){
      const date = new Date(this.start_from);
      //Add period to days
      date.setTime(date.getTime() + period * 86400000)
      return date;
    }
  },
  mounted() {}
};
</script>


<style scoped>
.location-form {
  width: 80%;
  margin: 50px 0 0 50px;
}
#b-2-car {
  float: left;
  margin-top: 7px;
  cursor: pointer;
}
</style>  