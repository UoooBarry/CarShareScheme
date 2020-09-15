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
    const response = await this.$axios.get(`${this.$carshare}/orders/list/personal`, {
      headers: this.header
    });
    this.rents = response.data.rents;
  }
};
</script>

<style scoped>






</style>