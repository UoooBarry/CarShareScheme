<template >
  <div>
    <div class="container">
      <AddCarForm v-bind:locations="this.locations" class="car-form" />
    </div>
  </div>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";
import AddCarForm from "@/components/admin/AddCarForm";

export default {
  name: "AddCar",
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
}

#dark-footer {
  display: none !important;
}

.main {
  height: 930px;
}
</style>