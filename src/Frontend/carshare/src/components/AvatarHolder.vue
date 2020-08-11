/***********************************************************************
 *           @AUTHOR: SHUYUAN ZHANG, CREATED AT: 11/08/2020           *
 ***********************************************************************/
<template>
     <div id="first-container" class="container">
      <div class="col-md-3" style="display: inline-block;">
        <img src="../assets/img/Johndoe.png" alt="Avatar" />
        <button type="button" class="btn btn-light" style="margin-top:20px;">Upload Picture</button>
      </div>
      <div class="col-md-9" style=" display: inline-block;  vertical-align: top;">Thing to display</div>
    </div>

</template>

<script>
export default {
  name: "AvatarHolder",
};
</script>

<style scoped>
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
