<template>
  <div>
    <div class="card car" style="width: 18rem;" @mouseover="cardHover = true" @mouseleave="cardHover = false" :class="{hover: cardHover}">
      <div class="hover-info" v-on:mousemove="draw" v-on:mouseover="hover" v-on:mouseleave="hover">
        <img class="card-img-top" src="../../../public/img/defaultcar.png" alt="Card image cap" />
      </div>

      <div class="card-body">
        <h5 class="card-title">{{car.name}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{car.brand}}</h6>
        <a href="#" class="btn btn-primary">Get now</a>
      </div>
    </div>
    <CarPreview :id="`preview${car.id}`" v-if="hovering" v-bind:car="this.car"/>
  </div>
</template>

<script>
import CarPreview from './CarPreview';
export default {
  name: "CarCard",
  props: ["car"],
  data(){
    return{
      cardHover: false,
      hovering: false
    }
  },
  components:{
    CarPreview
  },
  methods: {
    draw(event){
      const tip = document.getElementById(`preview${this.car.id}`);
      //Get the offset
      var offset = event.target.getBoundingClientRect()
      //Change left and top with the offset
      tip.style.left = event.pageX - offset.left + 'px';
      tip.style.top = event.pageY - offset.top + 'px';
    },
    hover(){
      this.hovering = !this.hovering;
    },
    hoverEffect(event){
      const element = event.target;
      element.style.width = "20rem";
    }
  }
};
</script>

<style scoped>
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

.card.car{
  border-radius: 16px;
  overflow: hidden;
	-webkit-transition: margin 0.5s ease-out;
  -moz-transition: margin 0.5s ease-out;
  -o-transition: margin 0.5s ease-out;
}
.card.car:hover {
	/* cursor:pointer; */
  margin-top: -15px;
}
</style>