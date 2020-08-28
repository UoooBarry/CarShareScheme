<template>
    <header >
        <nav  id = "mainHeader" class="navbar navbar-light navbar-expand-md navbar-transparency">
            <a class="navbar-main" href="#"> <img class="brand-img" src="../../../public/img/brand.png" alt="">  PBD Car Share</a>
        </nav>
    
        <nav class="navbar navbar-expand-md">
            <img class="brand-img" src="../../assets/home-1.png" alt="Home logo">

            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-outline-dark">
                    <input type="radio" name="sort" checked value="default" /> USER LIST
                </label>

                <label class="btn btn-outline-dark">
                    <input type="radio" name="sort" autocomplete="off"  /> CAR LIST
                </label>

            </div>

            
        </nav>
  </header> 
</template>

<script>

export default {
  name: "AdminHeader",
  methods:{
       getActive(expected) {
            if (expected == this.$route.name) return true;
            return false;
        },
  }
};
</script>


<style scoped>
#mainHeader{
    background-color:#648CB5;
    }

img {
  max-width: 30px;
  height: 30px;
  position:fix;
}


.navbar, navbar-expand-md{
 padding-top:0px;
 border:none;
 padding-bottom:0px;
}

.navbar-main{
    font-family: 'Suisseintl webm', sans-serif;
    font-weight: 500;
    letter-spacing: 0.3px;
    text-transform: none;
    font-size:25px;
    color:aliceblue;
    text-decoration: none;
}




.btn-outline-success {
  color: black;
  border-color: #a9a0a0;

  color: cornflowerblue;
}
.btn-outline-dark {
  border: none;
}
.btn {
  border-radius: 0;
}
.btn-outline-dark:not(:disabled):not(.disabled).active,
.btn-outline-dark:not(:disabled):not(.disabled):active,
.show > .btn-outline-dark.dropdown-toggle {
  background-color:#648CB5;
  color: aliceblue;
}

.btn-outline-dark:hover {
 background-color:#648cb5de;
  color: aliceblue;
  
 
}

/* this is the code showing for the border--according to inspect, but how to change it? */
/* the code below does not change anything */
.btn-outline-dark focus active{
    /* border:none !important; */
    
  border-color: whitesmoke;
}
</style>
