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
          class="form-control"
          id="fname"
          :value="customer.first_name"
          disabled
        />

        <label for="sname" class="control-label">License Holder Last Name:</label>
        <input
          type="text"
          name="sname"
          class="form-control"
          id="sname"
          :value="customer.family_name"
          disabled
        />
        <label for="sname" class="control-label">License Validating Staus:</label>
        <input
          type="text"
          class="form-control"
          :value="validateResult"
          disabled
        />
      </div>

      
    </div>

    <div class='row justify-content-between'>
      <div class='col'>
        <ValidationUploader :dimension="'front'" :customer_id="customer.id"/>
      </div>
      <div class='col'>
        <ValidationUploader :dimension="'back'" :customer_id="customer.id"/>
      </div>
    </div>
   
    <button  class="btn-scss-lg" @click="lastStep()">&lt; User Profile</button>
  </div>
</template>

<script>
import authorizeMixin from '@/mixins/authorizeMixin';
import ValidationUploader from '@/components/profile/ValidationUploader'


export default {
  name: "ValidationHolder",
  data() {
    return {
      firstName: "",
      validateResult: this.getValidateResult()
    };
  },
  components:{
    ValidationUploader
  },
  mixins: [authorizeMixin],
  created() {
    this.firstName = this.customer.first_name;
  },
  props: ["customer"],
  methods:{
    lastStep(){
      this.$emit('lastStep');
    },
    getValidateResult(){
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
</style>
