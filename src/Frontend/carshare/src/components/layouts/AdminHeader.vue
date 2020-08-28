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
  components:{
     
  },
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
.subHeader{
    background-color:whitesmoke;
    max-height:45px;
    
    }

ul{
    display:flex;  
    list-style:none;
}
li{
    padding: 3px 20px;
    }
img {
  max-width: 30px;
  height: 30px;
  position:fix;
}

.navbar-brand{
    font-family: 'Suisseintl webm', sans-serif;
    font-weight: 500;
    letter-spacing: 0.3px;
    text-transform: none;
    font-size:1em;
    margin-right: -0px;
    color:rgba(65, 119, 153, 0.726);
    height:35px;
}

.active{
  
    background-color:#648CB5;
  color: aliceblue;
}

 .navbar-brand:hover {
    background-color:#648cb5e7;
    color: aliceblue;
 }

 #text-link{
     padding-left: 15px;
 }
  
</style>
