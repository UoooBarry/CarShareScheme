<!-- @Author Yongqian Huang, created at 20/08/2020
 -->
<template>
    <div class="col-md-3 justify-content-md-center">
        <img :src="imageSrc" alt="licenses" @error='defaultImage'>
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
        <label class="custom-file-label" for="file">Upload license {{dimension}} image</label>
    </div>
</div>

</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";
export default {
  name: "ValidationUploader",
  mixins: [authorizeMixin],
  props: ['dimension','customer_id'],
  data(){
    return{
      imageSrc:  `https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/license/${this.dimension}/${this.customer_id}`,
      defaultImageFile: "@/assets/img/avatar_2x.png"
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
        .post(`${this.$carshare}/customers/licenses/${this.dimension}`, formData, {
          headers: this.header
        })
        .then(res => {
          if (res.data.message === "success") {
            this.flashMessage.success({
              title: "Success",
              message: "Upload licenses sucessfully!"
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