/***********************************************************************
 *           @AUTHOR: Bach Dao, Updated AT: 21/08/2020                *
 *           @UPDATING AUTHOR: DAWANAME DAWANAME, Updated AT: 01/10/2020                *
 ***********************************************************************/
<template>
  <div v-on:scroll.native="scrollFunction">
    <div class="parallax p1">
      <div class="description main">
        <h1>The New Car Share System Is There</h1>
        <p>
          Get your favorite car anytime, anywhere,
          <br />everything as you want
        </p>
      </div>
    </div>
    <div class="parallax p2">
      <div class="description family">
        <h1>Top pick for family car renting</h1>
        <p>
          We have the best renting policies with insurance
          covered in the <br />renting package, Users can enjoy a
          fun weekend with<br /> the family to a new location
          without any problem!
        </p>
      </div>
    </div>
    <div class="parallax p3">
      <div class="description purpose">
        <h1> Easy Renting process with enough supports </h1>  
        <p>
          Our company has wide range of cars that supports all purpose of <br /> renting
          and many off-site locations for users to rentthe cars  easily<br />
          for all kinds of renting purpose.
        </p>
        <a class="btn btn-light btn-lg action-button car-list-btn" href="/Login">Get A Car Now</a>
      </div>
    </div>
    <BackToTop />
  </div>
</template>

<style scoped>

.p1,
.p2,
.p3 {
  height: 900px;
}
.description {
  position: relative;

  transform: translate(-50%, -50%);
  color: whitesmoke;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}

.description.main {
  left: 50%;
  top: 50%;
}
.description.main,
.description.family,
.description.purpose {
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
}
.car-list-btn {
  border: 1px solid black;
  border-radius: 40px;
  color: black;
  box-shadow: none;
  text-shadow: none;
  padding: 0.3rem 0.8rem;
  background: 0 0;
  transition: background-color 0.25s;
  outline: 0;
}

.description.family {
  text-align: left;
  top: 20%;
  left: 100%;
  color: black;
}

.description.purpose {
  text-align: right;
  color: black;
  top: 25%;
}

h1 {
  margin-bottom: 25px;
}

</style>
<script>
//Get the button

import BackToTop from "@/components/BackToTop";
export default {
  name: "Home",
  components: {
    BackToTop
  },
};
</script>