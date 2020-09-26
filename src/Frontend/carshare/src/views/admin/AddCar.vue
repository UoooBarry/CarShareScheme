/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 31/08/2020
                      Yongqian Huang add admin-main class 24/09/2020    *
*Yongqian Huang, make authorze mixin global 24/09/2020                *
 ***********************************************************************/
<template >
  <div class='admin-main'>
    <div class="container">
      <AddCarForm v-bind:locations="this.locations" class="car-form" />
    </div>
  </div>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";
import AddCarForm from "@/components/admin/AddCarForm";

export default {
  name: "AdminAddCar",
  components: {
    AddCarForm
  },
  mixins: [authorizeMixin],
  data() {
    return {
        locations: []
    };
  },
  async created() {
    const response = await this.$axios.get(`${this.$carshare}/locations/`, {
      headers: this.header
    });
    this.locations = response.data.locations;
  }
};
</script>

<style>
.item {
  display: inline-block;
  margin: 10px;
  width: 125px;
}
.car-form {
  margin-top: 40px;
  border: 1px solid #9d9b9b;
  border-radius: 10px;
  padding: 20px 50px;
}

#dark-footer {
  display: none !important;
}

.main {
  height: 930px;
}
</style>