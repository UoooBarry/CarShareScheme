/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 16/08/2020
                      Yongqian Huang add admin-main class 24/09/2020    *
*Yongqian Huang, make authorze mixin global 24/09/2020                *
 ***********************************************************************/
<template >
  <div class='admin-main'>
    <div class="container">
      <UserList v-bind:customers="this.customers" class='user-list' v-if='this.customers.length > 0'/>
    </div>
  </div>
</template>

<script>
import UserList from "@/components/admin/UserList";

export default {
  name: "User",
  components: {
    UserList
  },
  data() {
    return {
      customers: []
    }
  },
  async created() {
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