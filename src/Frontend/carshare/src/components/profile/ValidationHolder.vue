/***********************************************************************
 *           @AUTHOR: Yongqian Huang, CREATED AT: 19/09/2020           *
 *                                                                    *
 ***********************************************************************/
<template>
  <div>
    <div>
      <div class="form-group">
        <label for="fname" class="control-label">License Holder First Name:</label>
        <input
          type="text"
          name="fname"
          class="form-control custom-text-input"
          id="fname"
          :value="customer.first_name"
          disabled
        />

        <label for="sname" class="control-label">License Holder Last Name:</label>
        <input
          type="text"
          name="sname"
          class="form-control custom-text-input"
          id="sname"
          :value="customer.family_name"
          disabled
        />
        <label for="sname" class="control-label">License Validating Staus:</label>
        <input
          type="text"
          class="form-control custom-text-input"
          :value="validateResult"
          disabled
        />
      </div>

      
    </div>

    <div class='row justify-content-between'>
        <ValidationUploader :dimension="'front'" :customer_id="customer.id"/>
        <ValidationUploader :dimension="'back'" :customer_id="customer.id"/>
    </div>
   
    <button  class="btn-scss-lg" @click="lastStep()">&lt; User Profile</button>
  </div>
</template>

<script>
import ValidationUploader from '@/components/profile/ValidationUploader'


export default {
  name: "ValidationHolder",
  data() {
    return {
      firstName: "",
      validateResult: this.getValidateResult(),
    };
  },
  components:{
    ValidationUploader
  },
  created() {
    this.firstName = this.customer.first_name;
  },
  props: ["customer"],
  methods:{
    lastStep(){
      this.$emit('lastStep');
    },
    getValidateResult(){
      if(!this.customer.License) return "Not upload license yet";
      if(this.customer.License.isValidated)
        return 'Validated'
      else
        return 'Pending'
    }
  }
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
.btn-scss-lg{
  margin-bottom: 10px;
}
</style>
