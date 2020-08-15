/***********************************************************************
 *           @AUTHOR: SHUYUAN ZHANG, CREATED AT: 11/08/2020           *
 ***********************************************************************/
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
        <label for="fname" class="control-label" >First Name: </label>
        <input type="text" name="fname" class="form-control" id="fname" :value="customer.first_name" />

        <label for="sname" class="control-label" >Family Name: </label>
        <input type="text" name="sname" class="form-control" id="sname" :value="customer.family_name" />

        <label for="phone" class="control-label" >Phone</label>
        <input type="text" name="phone" class="form-control" id="phone" :value="customer.contact_number" />

        <label for="dob" class="control-label" >Date of birth:</label>
        <input type="date" name="dob" class="form-control" id="dob" :value="customer.date_of_birth" />

        <input type="submit" class="form-control" id="update" value="update" />
        
      </div>
    </div>
 

</template>

<script>
export default {
  name: "InformationProfile",
  method: {
  async submit(){
        this.$axios.update("/:id/", {
                first_name: this.first_name,
                family_name: this.family_name,
                contact_number: this.contact
            })
    }
  },
  props: ['customer']
};
</script>

<style scoped>
#update{
  margin: 20px 200px 20px;
  width: 80px;
  float: right;
  }
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
