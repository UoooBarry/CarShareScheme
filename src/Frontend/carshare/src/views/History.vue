/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 16/08/2020                *
 ***********************************************************************/
<template >
  <div>
    <div class="container">
      <RentList v-bind:rents="this.rents" class="user-list" />
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
    };
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
  display: flex;
  margin: 10px;
  width: 375px;
  justify-content: center;
  align-items: center;
}
.item {
  display: flex !important;
  margin: 10px;
  width: 125px;
  justify-content: center;
  align-items: center;
}
.pickup-item{
    display: flex !important;
  margin: 10px;
  width: 225px;
  justify-content: center;
  align-items: center;
}
.user-list {
  margin-top: 10px;
}

#dark-footer {
  display: none !important;
}

.main {
  height: 930px;
}
</style>