/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 28/08/2020
*      Yongqian Huang updated at 25/09/2020  Fixed router              *
 ***********************************************************************/
<template>
  <div class="product-content" v-if="car">
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
              <div class="row package">{{ car.location.address }}</div>
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
      <div class="col price" style="margin-left:-30px">
        <router-link class="button" :to="{name: 'Checkout', params:{ id: car.id }}">Check out</router-link>
        <router-link class="ip-checkout" :to="{name: 'Checkout', params:{ id: car.id}}">
          <font-awesome-icon icon="shopping-cart" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarContent",
  props: ["car"],
  methods: {},
};
</script>

<style scoped>
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
  width: 100%;
  margin-top: 48px;
  margin-bottom: 128px;
  margin-left: 50px;
  display: block;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 32px;
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
.ip-checkout {
  display: none;
  color: black;
  margin-left: 30px;
  font-size: 30px;
}
/* ORDER BUTTON */
.button {
  width: 70%;
  min-width: 177px;
  padding: 5px 0;
  text-align: center !important;
  border-radius: 30px;
  background-color: black;
  z-index: 0;
  display: block;
  cursor: pointer;
  text-decoration: none;
  font-size: 26px;
  color: white;
  margin-left: 30px;
}

@media only screen and (max-width: 600px) {
  .product-content {
    overflow-y: auto;
    overflow-wrap: scroll;
    min-width: 600px;
    margin-left: 0 !important;
  }
}
@media only screen and (max-width: 414px) {
  .product-content {
    overflow-y: auto;
    overflow-wrap: scroll;
    min-width: 280px;
    margin-left: 0;
  }
  .price {
    font-size: 20px !important;
  }
  .ip-checkout {
    display: block;
  }
  .button {
    display: none;
  }
}
@media only screen and (max-width: 1024) {
  .product-content {
    overflow-y: auto;
    overflow-wrap: scroll;
    max-width: 20%;
  }
  .ip-checkout {
    display: block;
  }
  .button {
    display: none;
  }
}
</style>