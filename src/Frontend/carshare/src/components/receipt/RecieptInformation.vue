<!-- @Author Yongqian Huang, created at 10/09/2020-->
<template>
    <div class='receipt-container'>
        <div class='order-confirm-text'>Receipt information</div>
        <div class='row'>
            <div class='col'>
                <div class='item'>
                    <b>Contact information</b>
                    <p>{{rent.user.contact_number}}</p>
                </div>
                <div class='item'>
                    <b>Pick up information</b>
                    <p>Ref: {{rent.car.id}}</p>
                    <p>{{rent.car.name}}</p>
                    <p>{{rent.car.location.address}}</p>
                </div>
                <div class='item'>
                    <b>Pick up Date</b>
                    <p>Start date: {{rent.start_from | formatDate }}</p>
                    <p>Period: {{rent.period}}</p>
                </div>
            </div>
            <div class='col'>
                <div class='item'>
                    <b>Payment</b>
                    <p>Total fee: ${{rent.bill.fee }}</p>
                </div>
                <div class='item'>
                    <b>Customer</b>
                    <p>{{ rent.user.first_name}} {{rent.user.family_name}}</p>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    name: 'ReciptInformation',
    props: ['rent']
}
</script>

<style scoped>
.receipt-container{
    margin-top: 20px;
    margin-left: 20%;
    width: 60%;
    border-radius: 8px;
    border: 1px solid rgb(150, 150, 150);
    margin-bottom:20px ;
}

.order-confirm-text{
    margin: 5px;
    margin-left: 10px;
    text-align: left;
    font-size: 20px;
}



.item{
    display: block;
}

</style>