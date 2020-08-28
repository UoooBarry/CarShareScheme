<template>
  <div class="product-content">
    <div class="intro">
      <h3 class="title">{{car.brand}}</h3>
      <h1>{{ car.name }}</h1>
      <h4>{{car.model}}</h4>
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
        <div class="button">
          <div id="anim">
             <font-awesome-icon icon="box" class="Pack" style="color: white"/>
            <div class="Car">
              
              <font-awesome-icon icon="shipping-fast" style="color: white"/>
            </div>
            <div class="path">
              Please Wait...
            
            </div>
            <a class="final">Order Placed</a>
          </div>
          <a href="#anim" class="text">Book Now</a>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarContent",
  props: ["car"]
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
  min-width: 300px;
  margin-top: 48px;
  margin-bottom: 128px;

  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 64px;
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
  marging: 0 auto;
  z-index: 0;
  display: flex;
  cursor: pointer;
  padding: 15px;
}
.text {
  z-index: 1;
  color: white;
  font-size: 20px;
  margin: auto;
  text-decoration: none;
}
#anim {
  display: none;
}
#anim:target {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: black;
  overflow-x: hidden;
}
#anim:target + a {
  display: none;
}
#anim:target > .path {
  font-size:20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  position: absolute;
  left: 200%;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
  -webkit-animation: linear alternate;
  -webkit-animation-name: path;
  -webkit-animation-duration: 4s;
  -webkit-animation-delay: 3s;
}

#anim:target > .Pack {
  width: 15px;
  height: 15px;
  align-self: center;
  -webkit-box-shadow: -3px -5px 9px 0px rgba(56, 54, 45, 1);
  -moz-box-shadow: -3px -5px 9px 0px rgba(56, 54, 45, 1);
  box-shadow: -3px -5px 9px 0px rgba(56, 54, 45, 1);
  position: relative;
  z-index: 400;
  right: 200%;
  position: absolute;
  -webkit-animation: linear alternate;
  -webkit-animation-name: pack;
  -webkit-animation-duration: 5s;
}
#anim:target > .Car {
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: black;
  position: relative;
  -webkit-box-shadow: -3px -5px 9px 0px rgba(56, 54, 45, 1);
  -moz-box-shadow: -3px -5px 9px 0px rgba(56, 54, 45, 1);
  box-shadow: -3px -5px 9px 0px rgba(56, 54, 45, 1);
  z-index: 500;
  position: absolute;
  left: 200%;
  -webkit-animation: ease-in-out alternate;
  -webkit-animation-name: example;
  -webkit-animation-duration: 5s;
}
/* transition of car */
@-webkit-keyframes example {
  0% {
    left: 200%;
  }
  30% {
    left: 10%;
  }
  40% {
    left: 10%;
  }
  100% {
    left: 200%;
  }
}
/* transition of waiting message */
@-webkit-keyframes path {
  0% {
    left: 50%;
  }
  50% {
    left: -40%;
  }
  100% {
    left: 200%;
  }
}
/* transition of package */
@-webkit-keyframes pack {
  0% {
    right: 70%;
  }
  30% {
    left: 0;
  }
  40% {
    left: 15%;
  }
  100% {
    left: 200%;
  }
}

#anim:target > .final {
  text-align: center;
  position: relative;
  z-index: -700;
  color: white;
  font-size: 20px;
  margin: auto;
  text-decoration: none;
  -webkit-animation: linear alternate;
  -webkit-animation-name: final;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-delay: 1s;
  -webkit-animation-duration: 10s;
}

@-webkit-keyframes final {
  0% {
    z-index: -700;
  }
  100% {
    z-index: 700;
  }
}
</style>