/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 16/08/2020                *
 ***********************************************************************/
<template >
  <div>
    <div class="container">
      <RentList v-bind:rents="this.rents" class='user-list'/>
    </div>
  </div>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";
import RentList from "@/components/rent/RentList";

export default {
  name: "User",
  components: {
    RentList
  },
  mixins: [authorizeMixin],
  data() {
    return {
      rents: []
    }
  },
  async created() {
    const response = await this.$axios.get(`${this.$carshare}/orders/`, {
      headers: this.header
    });
    this.rents = response.data.rents;
  }
};
</script>

<style>
.car-item {
  display: inline-block;
  margin: 10px;
  width: 375px;
  float: left;
}
.item {
  display: inline-block;
  margin: 10px;
  width: 125px;
}
.user-list{
  margin-top: 10px;

}


#dark-footer {
  display: none !important;
}

.main {
  height: 930px;
}
</style>