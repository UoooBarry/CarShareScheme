<template>
    <div>
        <OrderList :rents='rents' />
    </div>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";
import OrderList from '@/components/admin/Order/OrderList';
export default {
    name: 'Orders',
    mixins: [authorizeMixin],
    components:{
        OrderList
    },
    data(){
        return{
            rents: [],
        }
    },
    created(){
        this.$axios.get(`${this.$carshare}/orders`, {
            headers: this.header
        })
        .then((res) => {
            this.rents = res.data.rents;
        })
        .catch((err)=> {
            console.log(err);
        })
    }
}
</script>