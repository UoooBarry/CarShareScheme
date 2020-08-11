<template>
  <div class="profile" style>
    <h1>This is a Profile page</h1>
    <AvatarHolder />

    <InformationProfile />
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
};
</script>