<template>
  <div>
    <router-link :to="{name: 'CarDetail', params:{ id }}">
      <div
        class="card car"
        style="width: 18rem;cursor: pointer;"
        @mouseover="cardHover = true"
        @mouseleave="cardHover = false"
        :class="{hover: cardHover}"
        onclick="location.href='#';" 
      >
        <div class="hover-info" v-on:mousemove="draw" v-on:mouseover="hover" v-on:mouseleave="hover">
          <img :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Car/' + car.id" alt="Car" style="width:216px; heigh: 137px" />
        </div>

        <div class="card-body">
          <h5 class="card-title car">{{car.name}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{car.brand}}</h6>
          <p class="price">${{car.price}}/day</p>
        </div>
      </div>
      <CarPreview :id="`preview${car.id}`" v-if="hovering" v-bind:car="this.car" />
    </router-link>
  </div>
</template>

<script>
import CarPreview from "./CarPreview";
export default {
  name: "CarCard",
  props: ["car"],
  data() {
    return {
      cardHover: false,
      hovering: false,
      id: this.car.id
    };
  },
  components: {
    CarPreview
  },
  methods: {
    draw(event) {
      const tip = document.getElementById(`preview${this.car.id}`);
      //Get the offset
      var offset = event.target.getBoundingClientRect();
      //Change left and top with the offset
      tip.style.left = event.pageX - offset.left + "px";
      tip.style.top = event.pageY - offset.top + "px";
    },
    hover() {
      this.hovering = !this.hovering;
    },
    hoverEffect(event) {
      const element = event.target;
      element.style.width = "20rem";
    }
  }
};
</script>

<style scoped>
a{
  color: black;
}
.card-img-top {
  margin-top: 0;
}

.hover-info:hover .hover-info-tip {
  display: block;
}

.hover-info-tip {
  display: none;
  margin-left: 28px;
  padding: 10px;
  position: absolute;
  z-index: 1000;
  width: 200px;
  height: 300px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
}
.button:hover{
	text-decoration: none;
	color: white;
  background: linear-gradient(to right, #b1bfd8 0%,  #6782b4 100%);
}


.card-title.car{

  margin-top: 8px;
    font-family: AvenirLTStd-Black;
    letter-spacing: .125rem;
    width: 100%;
}

.card.car {
  border-radius: 16px;
  overflow: hidden;
  -webkit-transition: margin 0.5s ease-out;
  -moz-transition: margin 0.5s ease-out;
  -o-transition: margin 0.5s ease-out;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,.12);
}
.card.car:hover {
  /* cursor:pointer; */
  margin-top: -15px;
}
</style>