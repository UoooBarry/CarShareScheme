<template>
    <header >
        <nav  id = "mainHeader" class="navbar navbar-light navbar-expand-md navbar-transparency ">
            <a id="title"><img class="titlelink" src="../../../public/img/brand.png" alt="Home logo"> PBD Car Share</a>
        </nav>
        
        <nav class="navbar navbar-expand-md subHeader">
            <div class="btn-group btn-group-toggle subHeader_div" data-toggle="buttons">
                    <a><img class="imglink" src="../../assets/home-1.png" alt="Home logo"></a>
                <label class="btn btn-outline-dark otherLinks">
                    <input type="radio" name="sort" checked value="default" /> USER LIST
                </label>

                <label class="btn btn-outline-dark otherLinks" >
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
.titlelink{
     max-width: 50px;
    overflow: hidden;
    margin-top: -6px;
    
    margin-right:10px;

}
#title{
    color:azure;
    font-size:2em;
}
.imglink{
    max-width: 30px;
    overflow: hidden;
    margin-top:5px;
    margin-right:10px;
} 

#mainHeader{
    background-color:#648CB5; 
    height:60px;
    text-decoration: none; 
    }

.subHeader{
  height:40px;
}

.subHeader_div{
  height:40px;

}
  
.btn-outline-dark {
  border: none;
  padding:none;
  margin:none;
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

.otherLinks{
  color: #648CB5;
}
 
.otherLinks:hover {
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
