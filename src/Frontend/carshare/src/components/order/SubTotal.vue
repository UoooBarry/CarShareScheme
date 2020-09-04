<template>
  <div class="row item-row">
    <div class="media flex-column flex-sm-row">
      <img
        class="img-fluid"
        :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Car/' + car.id"
      />
      <div class="media-body my-auto" style="margin-left:30px">
        <div class="row">
          <div class="col-auto">
            <p class="mb-0" style="font-size:30px">
              <b>{{car.model}}</b>
            </p>
            <small class="text-muted" style="font-size:24px">{{car.brand}}</small>
          </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="row justify-content-between">
        <div class="col-4">
          <p>
            <b>Promotion</b>
          </p>
        </div>
        <div class="flex-sm-col col-auto">
          <p class="mb-1">
            <b>Promotion</b>
          </p>
        </div>
      </div>
      <hr class="my-3" />
      <div class="row justify-content-between">
        <div class="col-4">
          <p>
            <b>Sub Total</b>
          </p>
        </div>
        <div class="flex-sm-col col-auto">
          <p class="mb-1">
            <b>{{day}}</b>
          </p>
        </div>
      </div>
      <hr class="my-3" />
      <div class="row justify-content-between">
        <div class="col-4">
          <p>
            <b>Extra fee</b>
          </p>
        </div>
        <div class="flex-sm-col col-auto">
          <p class="mb-1">
            <b>fee</b>
          </p>
        </div>
      </div>
      <hr class="my-3" />
      <div class="row justify-content-between" style="margin-bottom: 50px">
        <div class="col-4">
          <p class="total-text">
            <b>Total</b>
          </p>
        </div>
        <div class="flex-sm-col col-auto">
          <p class="mb-1 total-text">
            <b>fee</b>
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
  mounted() {
      
  }
};
</script>


<style scoped>
.item-row {
  width: 70%;
  margin-top: 50px;
  margin-left: 120px;
  border: 1px solid gray;
  border-radius: 25px;
}
.img-fluid {
  margin: 30px;
  width: 30%;
}
p {
  margin: 0;
}
.total-text{
  font-weight: bold;
  font-size: 24px;
}
.my-3{
  padding-left: 30px;
}
</style>  