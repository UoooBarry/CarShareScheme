/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 03/09/2020                *
 ***********************************************************************/
<template>
  <div class="row item-row">
    <div class="media flex-column flex-sm-row">
      <img
        class="img-fluid"
        :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Car/' + car.id"
      />
      <div class="media-body my-auto">
        <div class="flex-column">
          <p class="mb-0" style="font-size:26px">
            <b>{{car.model}}</b>
          </p>
          <small class="text-muted" style="font-size:20px">{{car.brand}}</small>
        </div>
      </div>
    </div>

    <div class="col">
      <hr class="my-3" />
      <div class="row coupon">
        <label class="coupon__label" for="coupon_code">Promotional code</label>
        <div class="coupon__input">
          <input type="text" name="coupon_code" class="coupon_input_field" value placeholder />
        </div>
        <a class="button coupon_button">Redeem</a>
      </div>
      <hr class="my-3" />
      <div class="row justify-content-between">
        <div class="col-4">
          <p>
            Sub Total
          </p>
        </div>
        <div class="flex-sm-col col-auto">
          <p class="mb-1">
            {{(day * car.price).toFixed(2)}}
          </p>
        </div>
      </div>
      <hr class="my-3" />
      <div class="row justify-content-between">
        <div class="col-4">
          <p>
            Reserve fee
          </p>
        </div>
        <div class="flex-sm-col col-auto">
          <p class="mb-1">
            {{(car.price*0.1).toFixed(2)}}
          </p>
        </div>
      </div>
      <hr class="my-3" />
      <div class="row justify-content-between" style="margin-bottom: 50px">
        <div class="col-4 total-col">
          <p class="total-text">
            <b>Total</b>
          </p>
        </div>
        <div class="flex-sm-col col-auto">
          <p class="mb-1 total-text">
            <b>{{(day * car.price + car.price*0.1).toFixed(2)}}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubTotal",
  components: {},
  props: ["car", "day"],
  methods: {
    addDay() {}
  }
};
</script>


<style scoped>
.item-row {
  max-width: 450px;
  margin: 100px 10px 0 150px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
.img-fluid {
  margin: 30px;
  width: 30%;
}
p {
  margin: 0;
}
.total-text {
  font-weight: bold;
  font-size: 3vh;
}
.my-3 {
  padding-left: 30px;
}
.coupon {
  text-align: left;
  display: flex;
  flex-wrap: wrap;
  padding-left: 43px;
  padding-right: 25px;
}
.coupon__label {
  width: 100%;
  text-transform: uppercase;
}
.coupon__input {
  flex-grow: 1;
  margin-right: 8px;
  font-size:22px;
}
 .coupon_input_field{
    width: 100%;
  }
.coupon_button {
  height: 40px;
  padding: 8px;
  background-color: #d5d5d5;
  border-color: #d5d5d5;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}

@media only screen and (max-width: 414px) {
  .item-row {
    width: 100%;
    margin: 0 !important;
    overflow-y: auto;
    overflow-wrap: visible;
  }
  .total-text{
    font-size: 3vh;
  }
  .img-fluid{
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
  .media-body{
    width: 100%;
  }
  .total-col{
    display: flex;
  }
 
}
</style>  