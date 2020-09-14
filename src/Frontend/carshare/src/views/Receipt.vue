<!-- @Author Yongqian Huang, created at 10/09/2020-->
<template>
    <div style="min-height:800px">
        <Loading />
        <div class='container'>
            <div v-if="rent">
             <PickUpMap v-bind:location='rent.car.location'  />
             <RecieptInformation :rent='rent'/>
            </div>
        </div>
    </div>
</template>

<script>
import RecieptInformation from '@/components/receipt/RecieptInformation';
import Loading from '@/components/Loading';
import PickUpMap from '@/components/receipt/PickUpMap';
import authorizeMixin from '@/mixins/authorizeMixin';
export default {
    name: 'Receipt',
    components: {
        PickUpMap,
        Loading,
        RecieptInformation
    },
    mixins: [authorizeMixin],
    data(){
        return{
            rent: ''
        }
    },
    created(){
        const rent_id = this.$route.params.id;
        if(!rent_id) this.$router.push({name: 'Home'});
        this.$axios.get(`${this.$carshare}/orders/${rent_id}`, {headers: this.header})
                    .then((res) => {
                        this.rent = res.data.rent;
                    })
                    .catch((err) => {
                        console.log(err);
                    })
    }
}
</script>