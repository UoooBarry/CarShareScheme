<template>
  <div class="carlist container" >
    <div class="row">
      <div v-for="(car) in pageOfItems" v-bind:key="car.id" class="col-sm-3 car">
        <CarCard v-bind:car="car" />
      </div>
    </div>
    <div class="page-footer"  :if="cars">
            <jw-pagination :items="cars" :pageSize=8 @changePage="onChangePage" :labels="customLabels"></jw-pagination>
      </div>
  </div>
</template>

<script>
import CarCard from "./CarCard.vue";
const customLabels = {
    first: 'First',
    last: 'Last',
    previous: '<',
    next: '>'
};
export default {
  name: "CarList",
  components: {
    CarCard
  },
  props: ["cars"],
  data() {
    return {
      pageOfItems: [],
      customLabels
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    }
  }
};
</script>


<style scoped>
.page-footer{
  border-top: 1px solid lightgrey;
  padding-top:10px;
  width: 96%;
}
.col-sm-3.car {
  margin-bottom: 40px;
}

.carlist {
  min-height: 800px;
  max-width: 1500px;
}
.page-item.active .page-link{
    z-index: 3;
    color: #fff;
    background: #a9a0a0 !important;
    border-color:  #b1bfd8;
}
</style>