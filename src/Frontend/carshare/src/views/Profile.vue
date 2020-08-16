/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 11/08/2020           *
 *           @AUTHOR: Bach Dao, Updated AT: 15/08/2020                *
 ***********************************************************************/
<template>
  <div class="profile" style>
    <br><br><br><br>
    <AvatarHolder v-bind:customer="this.customer" />

    <InformationProfile v-bind:customer="this.customer"/>
    </div>
</template>
<style>

.profile {
  height: 1000px;
  background-image: url("../assets/img/bg.jpg");
  background-repeat: none;
  background-size: cover;
  background-attachment: fixed;
}

</style>
  
<script>
import AvatarHolder from "@/components/AvatarHolder";
import InformationProfile from "@/components/InformationProfile";
export default {
  name: "Profile",
  components: {
    AvatarHolder,
    InformationProfile
  },
  data(){
    return{
      customer: ""
    }
  },
 
  async created(){
    const header = {
      authorization: `PBD ${localStorage.getItem('authToken')}`
    }
    
    const response = await this.$axios.get(`${this.$carshare}/customers/`,{headers: header});
    if(response.data.message === "success"){
      this.customer = response.data.customer;
    }else{
      this.flashMessage.error({
            title: 'Error',
            message: 'Authentication error !'
          });
          this.$router.push({name: 'Home'});
    }
    
  }
};
</script>