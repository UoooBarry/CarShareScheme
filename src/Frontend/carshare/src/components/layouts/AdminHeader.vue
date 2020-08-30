<template>
  <header>
    <nav id="mainHeader" class="navbar navbar-light navbar-expand-md navbar-transparency">
      <a id="title">
        <img class="titlelink" src="../../../public/img/brand.png" alt="Home logo" /> PBD Car Share
      </a>
    </nav>

    <nav class="navbar navbar-expand-md" id="myDIV">
      <a>
        <img class="imglink" src="../../assets/home-1.png" alt="Home logo" />
      </a>
      <button class="btn active" v-on:click="listUser()">User list</button>
      <button class="btn" v-on:click="listCars()">Car list</button>
      <button class="btn">3</button>
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
      
    },
    listCars() {
      this.$router.push("/admin36737123719368365255336327043632505/cars");
    }
  },
  mounted() {
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
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

.navbar {
  padding: 0 14px;
}

.btn {
  cursor: pointer;
  margin-left: 10px;
}
.active,
.btn:hover {
  background-color: #648cb5;
}
</style>
