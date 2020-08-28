/***********************************************************************
 *           @AUTHOR: SHUYUAN ZHANG, CREATED AT: 11/08/2020           *
 *           @AUTHOR: Bach Dao, Updated AT: 15/08/2020                *
 ***********************************************************************/
<template>
     <div id="first-container" class="container">
      <div class="col-md-3" style="display: inline-block;">
        <img :src=" 'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/Avatar/' + customer.id" alt="Avatar" />
       
        <AvatarUploader />
        
      </div>
      <div class="col-md-9" style=" display: inline-block;  vertical-align: top;padding: 50px 0 0 200px"> 
        <div class="row"><a>Hello {{ customer.first_name }} {{ customer.family_name }}</a></div>
        <div class="row">You have joined Car Share since {{ customer.createdAt | formatDate }}</div> 
        <div class="row">You last updated your Profile on {{ customer.updatedAt | formatDate }}</div> 
        <div class="row">Your personal information is completely save with us!</div> 
      </div>
    </div>

</template>

<script>
import AvatarUploader from '@/components/AvatarUploader';
export default {
  name: "AvatarHolder",
  props: ['customer'],
  components:{
    AvatarUploader
  }
};
</script>

<style scoped>

.col-md-9 > .row{
  margin-bottom: 15px;
}
img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-top: 20px;
  overflow: hidden;
}
#first-container{
    margin-bottom: 50px;
  border-radius: 8px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
}
</style>
