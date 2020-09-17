/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 28/08/2020                *
 ***********************************************************************/
<template>
  <div id="car-description">
    <div class="product-image">
      <img
        class="car-img img-fluid"
        :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Car/' + car.id"
        alt="Car"
      />
      <Popular v-if="car.popular" />
      <br />  
    </div>
    <div class="car-details">
        <h3>About our {{ car.name }}</h3>
        <p v-html="car.description" class="description-text"></p>
        
        
        <h3>Security</h3>
        <p
          class="description-text"
        >Our company guarantees that we have each car checked before any renting transactions, so the users will not need to worry about the safety. We are also very strict on where the car’s come from, as a result there are no bad influences on the car.</p>
        
        <br />
        <br />
        <p class="description-text">
          We provide a few of
          <a
            style="font-weight: bold; cursor:pointer"
            v-on:click="redirect"
          >insurance plans</a> for the customers to enhance the security during their renting experience.
        </p>
        <h3>Wide options</h3>
        <p
          class="description-text"
        > We have a wide range of cars from family, casual car to SUVs, sport cars and even luxury cars. We also offer to install some equipment, such as baby-seat, or bike rack on cars that you favour with specialists. You can also choose how long you want to rent the car for, so you can meet your needs.</p>

        <h3>Convenient way of renting</h3>
        <p
          class="description-text"
        >Customers will be able to view their previous renting histories to make sure that they can find the details about your transaction once you have started renting. We allow you to pick a car near a specific location for rental, and you can also pick a location for us to collect it.</p>
    </div>
  </div>
</template>

<script>
import Popular from "./Popular";
export default {
  name: "CarDescription",
  props: ["car"],
  components: {
    Popular
  },
  methods: {
    redirect() {
      this.$router.push({name: 'FAQ'}).then(() => {
        document.querySelector("#insurance").scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 30px 0;
  font-size: 2.3rem;
  font-weight: bold;
}
.car-details {
  text-align: left;
  font-family: AvenirLTStd-Black;
  margin-bottom: 50px;
}
.product-image .car-img {
  display: block;
  width: 100%;
  height: auto;
  /* max-height: 100%; */
  margin-top: 50px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12);
}
.description-text {
  font-size: 1.35rem;
  color: #828282;
  padding: 0;
  line-height: 1.6;
  margin-top: 10px;
}

p { 
overflow: visible;
overflow-wrap: break-word;
}

@media only screen and (max-width: 600px) {
  .description-text {
   overflow-wrap: break-word;
  }
  .product-image .car-img  {
    display: none;
  }
}

.popular {
  margin-top: -50px;
  width: 200px;
  height: 150px;
}
#car-description {
  min-width: 600px;
  margin-right: 100px;
}
</style>