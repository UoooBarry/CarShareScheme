<template>
  <div class="profile" style>
    <br><br><br><br>
    <AvatarHolder v-bind:customer="this.customer" />

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
  methods:{
    // ...
  dateToYYYYMMDD(d) {
    return d && new Date(d.getTime()-(d.getTimezoneOffset()*60*1000)).toISOString().split('T')[0];
  }
  },
  async created(){
    const response = await this.$axios.get(`${this.$carshare}/customers/${this.$session.get('id')}`);
    this.customer = response.data[0];
  }
};
</script>