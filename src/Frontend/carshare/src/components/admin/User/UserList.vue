<template>
    <div>
      <div class="container">
        <div class='user-list-title'>USER LIST</div>
        <hr class='user'>
        <div class="item">First name</div>
        <div class="item">Family name</div>
        <div class="item">Date of birth</div>
        <div class="item">Contact number</div>
        <div class="item">Created at</div>
        <div class="item">Updated at</div>
        <div class="item">Activate</div>
        <hr class='user'>
      </div>
      
      <div v-for="customer in customers" v-bind:key="customer.id" class="container">
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

hr.user{
  margin-top: 5px;
  margin-bottom: 5px;
}

.user-list-title{
  text-align: left;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
}
.item {
  display: inline-block;
  margin: 10px;
  width: 125px;
}
.user {
  padding-left: 20px;
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