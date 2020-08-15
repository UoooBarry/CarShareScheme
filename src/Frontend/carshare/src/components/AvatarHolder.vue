/***********************************************************************
 *           @AUTHOR: SHUYUAN ZHANG, CREATED AT: 11/08/2020           *
 ***********************************************************************/
<template>
     <div id="first-container" class="container">
      <div class="col-md-3" style="display: inline-block;">
        <img src="../assets/img/Johndoe.png" alt="Avatar" />
        <button type="button" class="btn btn-light" style="margin-top:20px; margin-bottom:10px; border: 1px solid #ada7a7;">Upload Picture</button>
        
      </div>
      <div class="col-md-9" style=" display: inline-block;  vertical-align: top;padding: 50px 0 0 200px"> 
        <div class="row"><a>Hello {{ customer.first_name }} {{ customer.family_name }}</a></div>
        <div class="row">You have joined Car Share since {{ customer.createdAt | formatDate }}</div> 
        <div class="row">You last updated your Profile on {{ customer.updatedAt}}</div> 
        <div class="row">You last updated your Profile on {{ customer.date_of_birth }}</div> 
      </div>
    </div>

</template>

<script>
export default {
  name: "AvatarHolder",
  props: ['customer']
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
