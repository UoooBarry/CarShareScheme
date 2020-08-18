<template >
  <div>
    <div class="container">
      <UserList v-bind:customers="this.customers" class='user-list'/>
    </div>
  </div>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";
import UserList from "@/components/admin/UserList";

export default {
  name: "User",
  components: {
    UserList
  },
  mixins: [authorizeMixin],
  data() {
    return {
      customers: []
    }
  },
  async created() {
    this.checkLoggedIn();
    const response = await this.$axios.get(`${this.$admin}/customers/`, {
      headers: this.header
    });
    this.customers = response.data.customers;
  }
};
</script>

<style>
.item {
  display: inline-block;
  margin: 10px;
  width: 125px;
}
.user-list{
  margin-top: 40px;
  border: 1px solid #9D9B9B;
  border-radius: 10px;
}


#dark-footer {
  display: none !important;
}

.main {
  height: 930px;
}
</style>