/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 24/08/2020                *
 ***********************************************************************/
<template>
  <div class="carlist container" >
    <div class="row">
      <div v-for="(car) in pageOfItems" v-bind:key="car.id" class="col-sm-3 car">
        <CarCard v-bind:car="car" style="max-width: 100%"/> 
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

.col-sm-3.car {
  margin-bottom: 40px;
}


</style>