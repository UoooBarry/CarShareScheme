<template>
      <div id="second-container" class="container">
      <div
        class="row"
        style="background-color: #007bff; font-weight: bold;; color: white;font-size: 20px;padding: 20px;border-bottom:none;"
      >
        <div style="margin-right:8px">
          <font-awesome-icon icon="info-circle" />
        </div>About
      </div>
      <div class="form-group">
        <label for="Email" class="control-label" >Email</label>
        <input type="text" name="name" class="form-control" id="name" value="example@mail.com" />

        <label for="Phone" class="control-label" >Phone</label>
        <input type="text" name="name" class="form-control" id="name" value="8888-8888" />

           <label for="Address" class="control-label" >Address</label>
        <input type="text" name="name" class="form-control" id="name" value="Burke st, Melbourne" />
      </div>
    </div>
 

</template>

<script>
export default {
  name: "AvatarHolder",
};
</script>

<style scoped>
#second-container {
  border-radius: 8px;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
}
input[type="text"] {
  background: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}

input[type="text"]:focus {
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: transparent;
}
.control-label {
    margin-top:10px;
    margin-left:10px;
    margin-bottom: 0;
    float: left;
    font-weight: bold;
    color: gray;
}
</style>
