/***********************************************************************
*           @AUTHOR: Bach Dao, CREATED AT: 11/08/2020                  *
*       Updated: Yongqian Huang, 11/09/2020  Optmize code              *
************************************************************************/
<template>
  <header>
    <nav id="mainHeader" class="navbar navbar-light navbar-expand-md navbar-transparency">
      <a id="title">
        <img class="titlelink" src="../../../public/img/brand.png" alt="Home logo" /> PBD Car Share
      </a>
    </nav>

    <nav class="subnav" id="myDIV">
      <a>
        <img class="imglink" src="../../assets/home-1.png" alt="Home logo" />
      </a>
      <a class="subnav-item" id="users" v-bind:class="{'activate': getActive('AdminUser')}" v-on:click="$router.push({name: 'AdminUser'})">User list</a>
      <a class="subnav-item" id="cars"  v-bind:class="{'activate': getActive('AdminCars')}" v-on:click="$router.push({name: 'AdminCars'})">Car list</a>
      <a class="subnav-item" id="add" v-bind:class="{'activate': getActive('AdminAddCar')}" v-on:click="$router.push({name: 'AdminAddCar'})">Add new car</a>
      <a class="subnav-item" id="orders" v-bind:class="{'activate': getActive('AdminOrders')}"  v-on:click="$router.push({name: 'AdminOrders'})">Order list</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AdminHeader",
  methods: {
    getActive(expected) {
      if (expected == this.$route.name) return true;
      return false;
    }
  }
};
</script>

<style scoped>
.titlelink {
  max-width: 50px;
  overflow: hidden;
  margin-top: -6px;

  margin-right: 10px;
}
#title {
  color: azure;
  font-size: 2em;
}
.imglink {
  max-width: 30px;
  overflow: hidden;
  margin-top: 5px;
  margin-right: 10px;
}

#mainHeader {
  background-color: #648cb5;
  height: 60px;
  text-decoration: none;
}

.subnav {
  width: 100%;
  height: 43px;
  border-bottom: 1px solid black;
}
.subnav a {
  float: left;
}
.subnav-item {
  font-size: 15px;
  padding: 10px;
  cursor: pointer;
  margin-left: 10px;
}

.subnav-item:hover {
  background-color: #648cb5;
}

.subnav-item.activate{
  background-color: #648cb5;
}
</style>
