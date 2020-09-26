<!-- @Author Yongqian Huang created at 24/09/2020 -->
<template>
    <div class='admin-main'>
        <LicenseList :licenses='licenses'/>
    </div>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";
import LicenseList from '@/components/admin/LicenseList'
export default {
    name: 'Licenses',
    mixins: [authorizeMixin],
    components:{
        LicenseList
    },
    data(){
        return{
            licenses: []
        }
    },
    created(){
        this.$axios.get(`${this.$carshare}/licenses/pending`,{
            headers: this.header
        })
        .then((res) => {
            this.licenses = res.data.pending;
        })
    }
}
</script>