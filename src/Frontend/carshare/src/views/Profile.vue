<template>
  <div class="profile" style>
    <h1>This is a Profile page</h1>
    <AvatarHolder />

    <InformationProfile v-bind:customer="this.customer"/>
    </div>
</template>
<style>

.profile {
  height: 1000px;
  background-image: url("../assets/img/bg.jpg");
  background-repeat: none;
  background-size: cover;
  background-attachment: fixed;
}

</style>
  
<script>
import AvatarHolder from "@/components/AvatarHolder";
import InformationProfile from "@/components/InformationProfile";
export default {
  name: "Profile",
  components: {
    AvatarHolder,
    InformationProfile
  },
  data(){
    return{
      customer: ""
    }
  },
  async created(){
    const response = await this.$axios.get(`${this.$carshare}/customers/${this.$session.get('id')}`);
    this.customer = response.data[0];
    console.log(this.customer);
  }
};
</script>