/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 27/08/2020                *
 * Yongqian Huang, updated at 04/10/2020 try to fixed image upload internel error*
 ***********************************************************************/
<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">Upload car image for car id {{carid}}:</slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <p>File type: .PNG</p>
          <div class="custom-file" style="margin-top: 10px">
            <input
              type="file"
              accept="image/*"
              name="file"
              style="margin-top:20px; margin-bottom:10px; border: 1px solid #ada7a7;"
              class="custom-file-input"
              v-on:change="bindFile($event)"
            />
            <label class="custom-file-label" for="file">Choose file</label>
            <button class="btn btn-primary" v-on:click="upload()"> Upload </button>
          </div>
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <button type="button" class="btn-green" @click="close">Cancel</button>
        </slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "uploadCarImage",
  props: ["carid"],
  data() {
    return {
      file: ""
    };
  },
  methods: {
    bindFile(event) {
      this.file = event.target.files[0];
    },
    upload() {
      let formData = new FormData();
      formData.append("enctype", "multipart/form-data");
      formData.append("image", this.file);
      this.$axios
        .patch(`${this.$carshare}/cars/image/${this.carid}`, formData, {
          headers: this.header
        })
        .then(res => {
          if (res.data.message === "success") {
            this.flashMessage.success({
              title: "Success",
              message: "Upload car image sucessfully!"
            });
            //Reload the window so that duplicate image can be reupload
            window.location.reload();
          } else {
            this.flashMessage.error({
              title: "Error",
              message: "Only png and jpg below 2mb is accepted!"
            });
          }
        });
    },
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 30%;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>