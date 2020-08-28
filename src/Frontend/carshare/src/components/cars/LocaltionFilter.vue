<template>
    <div class="col-sm-3.5 my-1 btn" style="float:right">
              <label class="sr-only" for="address">Address</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
                </div>
                  <input ref="autocomplete" class='form-control mr-sm-2 address-bar' type="text" id='address' :value="address" >
                  <button type="submit" class="btn btn-outline-success my-2 my-sm-0" @click="updateAdress">Change address</button>
              </div>
    </div>
</template>


<script>
export default {
    name: 'LocationFilter',
    props: ['address'],
    mounted() {
      this.autoComplete = new window.google.maps.places.Autocomplete(
          (this.$refs.autocomplete),
          {types: ['geocode'], componentRestrictions: {country: "au"}}
        );
    },
    methods:{
      updateAdress(){
        const newAddress = document.getElementById('address').value;
        this.$emit('onAddressChange', newAddress);
      }
    }
}
</script>


<style scoped>
.btn-outline-success {
  color: black;
  border-color: #a9a0a0;
}
.btn-outline-success:hover {
  color: #fff;
  background-color: #a9a0a0;
  border-color: #a9a0a0;
}
.nav-item {
  margin-left: 20px;
}
.btn-outline-dark {
  border: none;
  margin: 10px;
}
.btn {
  border-radius: 0;
}
.btn-outline-dark:not(:disabled):not(.disabled).active,
.btn-outline-dark:not(:disabled):not(.disabled):active,
.show > .btn-outline-dark.dropdown-toggle {
  color: #fff;
  background-color: #a9a0a0;
  border-color: #a9a0a0;
}
.btn-outline-dark:hover {
  color: #fff;
  background-color: #a9a0a0;
  border-color: #a9a0a0;
}
.address-bar{
  width: 400px;
}
</style>