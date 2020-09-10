<!-- @Author Yongqian Huang, created at 10/09/2020-->
<template>
    <div>
        <Loading />
        <div class='container'>
            <div v-if="rent">
             <PickUpMap v-bind:location='rent.car.location'  />
            </div>
        </div>
        
       
    </div>
</template>

<script>
import Loading from '@/components/Loading';
import PickUpMap from '@/components/receipt/PickUpMap';
import authorizeMixin from '@/mixins/authorizeMixin';
export default {
    name: 'Receipt',
    components: {
        PickUpMap,
        Loading
    },
    mixins: [authorizeMixin],
    data(){
        return{
            rent: ''
        }
    },
    created(){
        const rent_id = sessionStorage.getItem('rent_id');
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