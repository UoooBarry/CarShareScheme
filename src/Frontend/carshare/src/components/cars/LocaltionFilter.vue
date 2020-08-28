<template>
    <div class="col-sm-3.5 my-1 btn" style="float:right">
              <label class="sr-only" for="address">Address</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
                </div>
                  <input ref="autocomplete" class='form-control mr-sm-2' type="text" id='address' :value="address" >
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