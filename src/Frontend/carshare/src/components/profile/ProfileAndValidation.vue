<!-- @Author Yongqian Huang, created at 19/09/2020
 -->
<template>
    <div  id="second-container" class="container">
    <div
      class="row"
      style="background-color: #a9a0a0; font-weight: bold;; color: white;font-size: 20px;padding: 20px;border-bottom:none;"
    >
      <div v-if="step == 1">
        <font-awesome-icon icon="user-cog" style="margin-right:8px" />{{ $t('PersonalInformation') }}
      </div>
      <div v-if="step == 2">
        <font-awesome-icon icon="id-badge" style="margin-right:8px" />{{ $t('LicenseInformation') }}
      </div>
    </div>
        <InformationProfile v-bind:customer="customer"  v-on:nextStep="step++" v-if="step == 1"/>
        <ValidationHolder v-bind:customer="customer" v-on:lastStep="step--" v-if="step == 2"/>
    </div>
</template>

<script>
import InformationProfile from './InformationProfile';
import ValidationHolder from './ValidationHolder';
export default {
    name: "profileAndValidation",
    props: ['customer'],
    components:{
        InformationProfile,
        ValidationHolder
    },
    data(){
        return{
            step: 1
        }
    }
}
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
