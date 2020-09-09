/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 03/09/2020                *
 ***********************************************************************/
<template>
  <div class="container">
    <div class="checkout-wrap">
      <ul id="checkout-bar" class="step1">
        <li class="step1">
          <span>Car</span>
        </li>
        <li class="step2">
          <span>PickUp</span>
        </li>
        <li class="step3">
          <span>Payment</span>
        </li>
      </ul>
    </div>
  
  </div>
</template>

<script>

export default {
  name: "ProgressionBar",
  components: {},
  data() {
    return {};
  },
  mounted() {
    
  }
};
</script>


<style scoped>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: "PT Sans", sans-serif;
  font-size: 14px;
  background-color: #eee;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #F8F8F8;
  margin-top:10px;
}

.checkout-wrap {
  padding: 30px 50px;
  background-color: #F8F8F8;
  border-radius: 5px;
  overflow: hidden;
}

#checkout-bar {
  position: relative;
  width: 99%;
  padding: 0;
  margin: 0 auto;
  list-style: none;
  float: left;
  clear: both;
}

#checkout-bar li {
  position: relative;
  width: 33%;
  float: left;
  text-align: center;
  color: #999;
  text-transform: uppercase;
}

#checkout-bar li:after {
  position: relative;
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  top: 2.5px;
  left: 50%;
  border: 2px solid #ddd;
  background-color: #fff;
  border-radius: 100%;
  z-index: 4;
}

#checkout-bar.step1 .step1:after,
#checkout-bar.step2 .step2:after,
#checkout-bar.step3 .step3:after{
  background-color: #21a9af;
  -webkit-transition: width 2s;
  /* Safari */
  transition: all 3s;
}

#checkout-bar li span {
  position: relative;
  display: block;
  left: 50%;
}

#checkout-bar:before,
#checkout-bar:after {
  position: absolute;
  content: "";
  top: 50%;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  margin: auto 0;
  background-color: #c3c3c3;
  z-index: 1;
}

#checkout-bar.step1:after,
#checkout-bar.step2:after,
#checkout-bar.step3:after{
  width: 33%;
  background-color: #21a9af;
  z-index: 2;
  -webkit-transition: width 2s;
  /* Safari */
  transition: width 2s;
}

#checkout-bar.step2:after {
  width: 66%;
}

#checkout-bar.step3:after {
  width: 100%;
}


</style>  