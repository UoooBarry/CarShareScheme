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
      <a class="subnav-item" id="users" v-on:click="listUser">User list</a>
      <a class="subnav-item" id="cars" v-on:click="listCars">Car list</a>
      <a class="subnav-item" id="add" v-on:click="addCar">Add new car</a>
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
    },
    listUser() {
      this.$router.push("/admin36737123719368365255336327043632505/users");
      this.setUserSelected();
    },
    listCars() {
      this.$router.push("/admin36737123719368365255336327043632505/cars");
      this.setCarsSelected();
    },
    addCar() {
      this.$router.push("/admin36737123719368365255336327043632505/addcar");
      this.setAddSelected();
    },
    setUserSelected() {
      document.getElementById("users").style.backgroundColor = "#648cb5";
      document.getElementById("add").style.backgroundColor = "#F8F8F8";
      document.getElementById("cars").style.backgroundColor = "#F8F8F8";
    },
    setCarsSelected() {
      document.getElementById("cars").style.backgroundColor = "#648cb5";
      document.getElementById("users").style.backgroundColor = "#F8F8F8";
      document.getElementById("add").style.backgroundColor = "#F8F8F8";
    },
    setAddSelected() {
      document.getElementById("add").style.backgroundColor = "#648cb5";
      document.getElementById("cars").style.backgroundColor = "#F8F8F8";
      document.getElementById("users").style.backgroundColor = "#F8F8F8";
    }
  },
  mounted() {
    if (
      this.$router.currentRoute.path ===
      "/admin36737123719368365255336327043632505/users"
    ) {
      this.setUserSelected();
    } else if (
      this.$router.currentRoute.path ===
      "/admin36737123719368365255336327043632505/cars"
    ) {
      this.setCarsSelected();
    } else if (
      this.$router.currentRoute.path ===
      "/admin36737123719368365255336327043632505/addcar"
    ) {
      this.setAddSelected();
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
</style>
