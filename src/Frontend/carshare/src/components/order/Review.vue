<template>
  <div class="card border-0">
    <div class="card-header card-2">
      <p class="card-text text-muted mt-md-4 mb-2" style="font-size:30px">YOUR ORDER</p>
    </div>
    <div class="card-body pt-0">
      <div class="row justify-content-between item">
        <div class="col-auto col-md-7">
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
        </div>

        <div class="pl-0 flex-sm-col col-auto my-auto">
          <p style="font-size:20px">
              <input type="number" v-model="day" v-on:change.prevent="setDate" id="day" name="day" min="1" >
            <b>Days</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const $ = require("jquery");
window.$ = $;

export default {
  name: "Review",
  props: ['car'],
  components: {},
  data() {
    return {
      day: 1
    };
  },
  methods: {
    setDate() {
      this.day = document.getElementById('day').value;
      this.$emit("update-day", this.day);
    }
  },
  mounted() {}
};
</script>


<style scoped>
.img-fluid {
  margin: 0;
  width: 80%;
  height: 80%;
}
.card-body {
  background-color: #f8f8f8;
}
.item {
  margin-top: 30px;
}
#day{
  width:100px;
  text-align: center;
  margin-right: 20px;
}
</style>  