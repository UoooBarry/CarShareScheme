<template>
  <div class="container">
    <div class="button">
      <div id="anim">
        <font-awesome-icon icon="box" class="Pack" style="color: white" />
        <div class="Car">
          <font-awesome-icon icon="shipping-fast" style="color: white" />
        </div>
        <div class="path">Please Wait...</div>
        <a class="final">Order Placed</a>
      </div>
      <a href="#anim" class="text">Book Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompleteOrderButton",
  components: {},
  data() {
    return {};
  },
  mounted() {}
};
</script>


<style scoped>
.button {
  width: 300px;
  height: 60px;
  border-radius: 30px;
  background-color: black;
  margin: 0 auto;
  z-index: 0;
  display: flex;
  cursor: pointer;
  padding: 15px;
  margin-bottom: 90px;
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
  font-size: 20px;
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
.Car{
  font-size:20px;
}
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