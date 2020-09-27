<!-- @Author Yongqian Huang, created at 20/08/2020
 -->
<template>
  <div class="custom-file" style="margin-top: 10px">
    <input
      type="file"
      id="file"
      accept="image/*"
      ref="file"
      name="file"
      class="custom-file-input"
      v-on:change="upload()"
    />
    <label class="custom-file-label" for="file">Choose file</label>
  </div>
</template>

<script>
export default {
  name: "AvatarUploader",
  methods: {
    upload() {
      const file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("enctype", "multipart/form-data");
      formData.append("image", file);
      this.$axios
        .patch(`${this.$carshare}/customers/avatar`, formData, {
          headers: this.header
        })
        .then(res => {
          if (res.data.message === "success") {
            this.flashMessage.success({
              title: "Success",
              message: "Upload avatar sucessfully!"
            });
            this.$router.go();
          } else {
            this.flashMessage.error({
              title: "Error",
              message: "Only png and jpg below 2mb is accepted!"
            });
          }
        });
    }
  }
};
</script>
<style scoped>
.custom-file {
  margin-top: 20px;
  margin-bottom: 10px;
  width:200px;
}
.custom-file-label{
    text-align: left;
    padding-left: 30px;
}
</style>