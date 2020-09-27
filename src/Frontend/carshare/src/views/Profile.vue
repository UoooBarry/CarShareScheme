/***********************************************************************
 *           @AUTHOR: Bach Dao, CREATED AT: 11/08/2020                *
 * @AUTHOR: Bach Dao, Updated AT: 15/08/2020   Fetch Data, update profile to database*
* @AUTHOR: Bach Dao, Updated AT: 20/08/2020  Fix responsive layout    *          
 ***********************************************************************/
<template>
  <div class="profile">
    <br><br><br><br>
    <!-- <Loading/> -->
    <AvatarHolder v-bind:customer="this.customer"/>

    <ProfileAndValidation v-bind:customer="this.customer" />
    </div>
</template>
<style>

.profile {
  height: 1000px;
  background-image: url("../assets/img/bg.jpg");
  background-color: transparent;
  background-repeat: repeat-y;
  background-size: cover;
  background-attachment: fixed;
}

</style>
  
<script>
// import Loading from '@/components/Loading';
import ProfileAndValidation from '@/components/profile/ProfileAndValidation';
import AvatarHolder from "@/components/profile/AvatarHolder";
export default {
  name: "Profile",
  components: {
    AvatarHolder,
    ProfileAndValidation,
    // Loading
  },
  data(){
    return{
      customer: ""
    }
  },
  async created(){ 
    const response = await this.$axios.get(`${this.$carshare}/customers/`,{headers: this.header});
    if(response.data.message === "success"){
      this.customer = response.data.customer;
    }else{
      this.flashMessage.error({
            title: 'Error',
            message: 'Need to sign in first!'
          });
      this.$router.push({name: 'Home'});
    }
  }
};
</script>