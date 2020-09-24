<!-- @Author Yongqian Huang created at 24/09/2020 -->
<template>
    <tr>
        <td>
            {{license.id}}
        </td>
        <td>
            {{license.user.first_name}}
        </td>
        <td>
            {{license.user.family_name}}
        </td>
        <td class="hover_img">
            <a href='#'>Front<span><img :src="'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/license/front/' + license.user.id " alt="front"></span> </a>
        </td>
        <td  class="hover_img">
            <a href='#'>Back<span><img :src="'https://carshare-image-pbd.s3-ap-southeast-2.amazonaws.com/license/back/' + license.user.id " alt="back"></span> </a>
        </td>
        <td>
            {{license.isValidated}}
        </td>
        <td v-if="!license.isValidated">
            <button class="btn btn-primary" @click="approve()">Approve</button>
        </td>
    </tr>
</template>


<script>
export default {
    name: 'LicenseRow',
    props: ['license'],
    methods:{
        approve(){
            this.$axios.patch(`${this.$carshare}/licenses/${this.license.id}/accept`, {}, {
            headers: this.header
        })
        .then((res) => {
            if(res.data.message === 'success'){
                this.flashMessage.success({
                  title: "Approve success!",
                  message: "Approve successfully!"
                });
                this.license.isValidated = true;
            }else{
                this.flashMessage.error({
                    title: "Error!",
                    message: "Unexcpted error!"
                });
            }
        })
        }
    }
}
</script>

<style scoped>
.hover_img a { position:relative; }
.hover_img a span { position:absolute; display:none; z-index:99; }
.hover_img a:hover span { display:block; }
img {
  width: 300px;
  height: 150px;
  margin-top: 20px;
  overflow: hidden;
}
</style>