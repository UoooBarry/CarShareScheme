<template>
    <div>
        <OrderList :rents='rents' :locations='locations' />
    </div>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";
import OrderList from '@/components/admin/OrderList';
export default {
    name: 'Orders',
    mixins: [authorizeMixin],
    components:{
        OrderList
    },
    data(){
        return{
            rents: [],
            locations: []
        }
    },
    created(){
        this.$axios.get(`${this.$carshare}/orders`, {
            headers: this.header
        })
        .then((res) => {
            this.rents = res.data.rents;
        })
        .catch(()=> {
        });

        this.$axios.get(`${this.$carshare}/locations`, {
            headers: this.header
        })
        .then((res) => {
            this.locations = res.data.locations;
        })
        .catch(()=> {
        });
    }
}
</script>