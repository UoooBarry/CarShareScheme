<template>
    <div>
      <div class="user">
        <div class="item">first name</div>
        <div class="item">family name</div>
        <div class="item">date of birth</div>
        <div class="item">contact number</div>
        <div class="item">created at</div>
        <div class="item">updated at</div>
        <div class="item">activate</div>
      </div>

      <div v-for="customer in customers" v-bind:key="customer.customer.id" class="user">
        <UserRow v-bind:customer="customer" />
      </div>
    </div>
</template>

<script>
import UserRow from './UserRow';

export default {
    name: 'UserList',
    components:{
        UserRow
    },
    props: ['customers']
}
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