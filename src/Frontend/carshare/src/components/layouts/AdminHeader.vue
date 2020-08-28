<template>
  <header >
    <nav  id = "mainHeader" class="navbar navbar-light navbar-expand-md navbar-transparency">
        <Brand />
    </nav>
    <nav class="subHeader">
                <ul >

                    <!-- <a class="navbar-brand-img" href="#" >  -->
                        <img class="brand-img" src="../../assets/home.png" alt="Home logo">
                        <!-- </a>  -->
                    <div id="text-link">
                    <a class="navbar-brand active" href="#" ><li> USER LIST </li></a>
                    <a class="navbar-brand" href="#"><li > CAR LIST </li></a>
                    </div>
                    
                </ul>
        </nav>
</header>
</template>

<script>
import Brand from '@/components/layouts/Brand';

export default {
  name: "AdminHeader",
  components:{
      Brand
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