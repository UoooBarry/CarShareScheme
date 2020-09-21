/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 24/08/2020
                      Yongqian Huang, add preview 24/08/2020           *
 ***********************************************************************/
<template>
  <div>
    <div
      class="container-fluid my-4 car"
      style="width: 100%; cursor: pointer;"
      v-on:click="$router.push({name: 'CarDetail', params:{ id: car.id}})"
    >
      <img
        class="card-img"
        :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Car/' + car.id"
        alt="Car"
      />

      <div class="info-box">
        <div class="row">
          <div class="col">
            <h1 class="car-model">{{car.brand}} {{car.model}}</h1>
          </div>

          <div class="price col">${{car.price}}/day</div>
        </div>

        <div class="row">
          <div class="col function">
            <font-awesome-icon icon="chair" />
            {{car.seats}}
            <span>Seats</span>
          </div>
          <div class="col function">
            <font-awesome-icon icon="door-closed" />
            {{car.doors}}
            <span>Doors</span>
          </div>
        </div>
        <div class="row ">
          <div class="col function">
            <font-awesome-icon icon="suitcase" />
            {{car.luggages}}
            <span>Luggage Space</span>
          </div>
          <div class="col function">
            <font-awesome-icon icon="cogs" />
            {{car.gear}}
            <span>gearbox</span>
          </div>
        </div>
        <div class="row">
          <div class="col function">
            <font-awesome-icon icon="list-ul" />
            {{car.addons}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarCard",
  props: ["car"],
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
.car {
  display: flex;
  flex-direction: row;
}
.card-img {
  width: 33%;
  margin-top: 0;
  background-color: white;
}
.info-box {
  background-color: #f0f0f0;
  width: 100%;
}
.car-model {
  text-align: left;
  margin-top: 50px;
  margin-left: 20px;
}
.price {
  text-align: right;
  font-size: 20px;
  margin-top: 56px;
  margin-right: 30px;
}
.function{
    text-align: left;
    margin-left: 40px;
    margin-top: 10px;
    font-size: 20px;
}
</style>