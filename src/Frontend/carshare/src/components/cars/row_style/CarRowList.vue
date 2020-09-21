/***********************************************************************
 *           @AUTHOR: Shuyuan Zhanf, Created AT: 22/09/2020                *
 ***********************************************************************/
<template>
  <div class="carlist container">
    <div v-for="(car) in pageOfItems" v-bind:key="car.id" class="row car">
      <CarRow v-bind:car="car" style="max-width: 100%" />
    </div>

    <div class="page-footer" :if="cars">
      <jw-pagination :items="cars" :pageSize="6" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
    </div>
  </div>
</template>

<script>
import CarRow from "./CarRow.vue";

const customLabels = {
  first: "First",
  last: "Last",
  previous: "<",
  next: ">"
};
export default {
  name: "CarList",
  components: {
    CarRow
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
.page-footer {
  border-top: 1px solid lightgrey;
  padding-top: 10px;
  width: 96%;
}


</style>
