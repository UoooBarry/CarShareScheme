/***********************************************************************
 *           @AUTHOR: SHUYUAN ZHANG, CREATED AT: 11/08/2020           *
 *           @AUTHOR: Bach Dao, Updated AT: 15/08/2020 
                      Yongqian Huang           20/08/2020             *
 ***********************************************************************/
<template>
  <div>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="fname" class="control-label">{{ $t('FirstName') }}:</label>
        <input
          type="text"
          name="fname"
          class="form-control custom-text-input"
          id="fname"
          :value="customer.first_name"
        />

        <label for="sname" class="control-label">{{ $t('FamilyName') }}:</label>
        <input
          type="text"
          name="sname"
          class="form-control custom-text-input"
          id="sname"
          :value="customer.family_name"
        />

        <label for="phone" class="control-label">{{ $t('Phone') }}</label>
        <input
          type="text"
          name="phone"
          class="form-control custom-text-input"
          id="phone"
          :value="customer.contact_number"
        />

        <label for="dob" class="control-label">{{ $t('Birth') }}:</label>
        <input type="date" name="dob" class="form-control custom-text-input" id="dob" :value="customer.date_of_birth" required />

        <div class='row'>
          <div class='col'>
            <input type="submit" class="btn-scss-lg" id="update" :value="$t('Update')"
 />
          </div>
          <div class='col'>
            <button  class="btn-scss-lg" @click="nextStep()">{{ $t('LicenseValidation') }} ></button>
          </div>
        </div>
        
        <!-- <br> -->
        
      </div>
      
    </form>
  </div>
</template>

<script>
export default {
  name: "InformationProfile",
  data() {
    return {
      firstName: ""
    };
  },
  methods: {
    nextStep(){
      this.$emit('nextStep')
    },
    submit() {
      this.$axios
        .patch(
          `${this.$carshare}/customers/`,
          {
            first_name: document.getElementById("fname").value,
            family_name: document.getElementById("sname").value,
            contact_number: document.getElementById("phone").value,
            date_of_birth: document.getElementById("dob").value
          },
          { headers: this.header }
        )
        .then(res => {
          if (res.data.message === "fail") {
            res.data.errors.forEach(error => {
              this.flashMessage.error({
                title: "Update detail",
                message: error
              });
            });
            return;
          }

          this.flashMessage.success({
            title: "Update success!",
            message: "Update successfully!"
          });
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.firstName = this.customer.first_name;
  },
  props: ["customer"]
};
</script>

<style scoped>

</style>

<style lang="scss">
.btn-scss-lg {
    margin-top: 1rem;
    background: transparent;
    color: rgb(63, 63, 63);
    cursor: pointer;
    font-size: 1.5em;
    padding: 1.0rem;
    border: 0;
    transition: all 0.5s;
    border-radius: 10px;
    width: auto;
    position: relative;

    &::after {
        content: "\f054";
        font-weight: 400;
        position: absolute;
        left: 85%;
        top: 31%;
        right: 5%;
        bottom: 0;
        opacity: 0;

    }

    &:hover {
        background: transparent;
        transition: all 0.5s;
        border-radius: 10px;
        box-shadow: 0px 6px 15px #47474761;
        padding:  1.0rem;

    
    }
}
</style>

