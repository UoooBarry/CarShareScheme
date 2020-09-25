<!-- @Author Yongqian Huang, created at 20/08/2020
 -->
<template>
    <div class="col justify-content-center uploader">
        <img :src="imageSrc" alt="licenses" @error='defaultImage' class='license-image'>
        <div class="custom-file" style="margin-top: 10px">
        <input
            type="file"
            accept="image/*"
            ref="file"
            name="file"
            class="custom-file-input"
            v-on:change="upload()"
        />
        <label class="custom-file-label" for="file">{{labelText}}</label>
    </div>
</div>

</template>

<script>
export default {
  name: "ValidationUploader",
  props: ['dimension','customer_id'],
  data(){
    return{
      imageSrc:  `https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/license/${this.dimension}/${this.customer_id}`,
      defaultImageFile: "@/assets/img/avatar_2x.png",
      labelText: `Upload license ${this.dimension}`
    }
  },
  methods: {
    defaultImage(e){
      e.target.style.display = 'none'
    },
    upload() {
      const file = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("enctype", "multipart/form-data");
      formData.append("image", file);
      this.$axios
        .post(`${this.$carshare}/licenses/upload/${this.dimension}`, formData, {
          headers: this.header
        })
        .then(res => {
          if (res.data.message === "success") {
            this.flashMessage.success({
              title: "Success",
              message: "Upload licenses sucessfully!"
            });
            this.labelText = "Uploaded sucessfully";
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
@media only screen and (max-width: 600px) {
  .license-image{
    display: none;
  }
  .uploader{
    width: 100%;
    display: block;
    min-width: 100%;
  }
}

.license-image{
  border-radius: 8px;
}

.custom-file {
  margin-top: 20px;
  margin-bottom: 10px;
  width:300px;
}
.custom-file-label{
    text-align: left;
    padding-left: 30px;
}
img {
  width: 300px;
  height: 150px;
  margin-top: 20px;
  overflow: hidden;
}
</style>