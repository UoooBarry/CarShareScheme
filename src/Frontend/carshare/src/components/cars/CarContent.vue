/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 28/08/2020                *
 ***********************************************************************/
<template>
  <div class="contianer product-content">
    <div id="new-tab"></div>
    <div class="intro">
      <h3 class="title">{{car.brand}}</h3>
      <h1>{{car.model}}</h1>

      <br />
      <br />
    </div>
    <div class="row">
      <div class="col">
        <font-awesome-icon icon="chair" />
        {{car.seats}}
        <span>Seats</span>
      </div>
      <div class="col">
        <font-awesome-icon icon="door-closed" />
        {{car.doors}}
        <span>Doors</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <font-awesome-icon icon="suitcase" />
        {{car.luggages}}
        <span>Luggage Space</span>
      </div>
      <div class="col">
        <font-awesome-icon icon="cogs" />
        {{car.gear}}
        <span>gearbox</span>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <font-awesome-icon icon="list-ul" />
        {{car.addons}}
      </div>
    </div>
    <br />
    <br />
    <h3>Package includes:</h3>
    <div class="row" style="margin-top:15px;">
      <div class="col">
        <ul class="list-unstyled">
          <li>
            <font-awesome-icon icon="medal" />Unlimited mileage
          </li>
          <li>
            <font-awesome-icon icon="medal" />Collision damage waiver (deductible: $5000.00)
          </li>
          <li>
            <font-awesome-icon icon="medal" />Thief protection
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="list-unstyled">
          <div class="row">
            <div class="col-sm-2" style="padding-top:15px">
              <font-awesome-icon icon="gas-pump" />
            </div>
            <div class="col">
              <div class="row package package-title">fuel policy</div>
              <div class="row package">same to same</div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-2" style="padding-top:15px">
              <font-awesome-icon icon="map-marker-alt" />
            </div>
            <div class="col">
              <div class="row package package-title">pick-up location</div>
              <div class="row package">free shuttle service</div>
            </div>
          </div>
        </ul>
      </div>
    </div>

    <div class="row" style="margin-top:15px;">
      <div class="col price" style="margin-left:20px; padding-top:7px;">
        <span class="amount">${{car.price}}</span>
        <span class="daily">/day</span>
      </div>
      <div class="col price" style="margin-left:-100px">
   
        <router-link class="button" :to="{name: 'Checkout', params:{ id: car.id}}">Check out</router-link>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarContent",
  props: ["car"],
  methods: {

  }
};
</script>

<style scoped>

@media only screen and (max-width: 600px) {
  .product-content  {
    overflow: visible;
    overflow-wrap: break-word;
  }
}

.package-title {
  font-weight: bold !important;
}
.package {
  font-size: 18px !important;
}
ul li {
  font-size: 18px;
}
.row {
  font-size: 20px;
  text-transform: capitalize;
}
.product-content {
  min-width: 600px;
  margin-top: 48px;
  margin-bottom: 128px;
  display: block;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 32px 0 32px 32px;
  border-radius: 8px;
  background-color: #fff;
  box-sizing: border-box;
  text-align: left;
  font-family: AvenirLTStd-Black;
}

.product-content intro a {
  font-size: 1rem;
}
.product-content .price {
  margin: 16px 0;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  font-size: 30px;
  padding: 0;
}
/* ORDER BUTTON */
.button {
  width: 300px;
  height: 60px;
  border-radius: 30px;
  background-color: black;
  z-index: 0;
  display: flex;
  cursor: pointer;
  padding: 12px 0 0 65px;
  text-decoration: none;
  font-size: 26px;
  color: white;
}

</style>