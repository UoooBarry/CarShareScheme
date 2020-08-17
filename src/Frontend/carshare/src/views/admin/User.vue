<template >
  <div>
    <AdminHeader />
    <div class="container">
      <h1>USER LIST PAGE</h1>
      <UserList v-bind:customers="this.customers" />
    </div>
  </div>
</template>

<script>
import AdminHeader from "@/components/layouts/AdminHeader.vue";
import authorizeMixin from "@/mixins/authorizeMixin";
import UserList from "@/components/admin/UserList";

export default {
  name: "User",
  components: {
    AdminHeader,
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
.user {
  padding: 20px;
  border-bottom: 1px solid black;
}
header#header {
  display: none !important;
}
#dark-footer {
  display: none !important;
}

.main {
  height: 930px;
}
</style>