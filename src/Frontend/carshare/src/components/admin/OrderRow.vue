<!-- @Author Yongqian Huang 11/09/2020-->
<template>
    <tr>
        <td>
            {{rent.id}}
        </td>
        <td>
            {{rent.start_from | formatDate}}
        </td>
        <td>
            {{rent.period}}
        </td>
        <td>
            {{rent.car.name}}
        </td>
        <td>
            {{rent.car.location.name}}
        </td>
        <td>
            {{rent.user_id}}
        </td>
        <td>
            ${{rent.bill.fee}}
        </td>
        <td>
            {{rent.status}}
        </td>
        <td>
            <button class='btn btn-primary' @click="returnCar">Return Car</button>
        </td>
    </tr>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";
export default {
    name: 'OrderRow',
    props: ['rent'],
    mixins: [authorizeMixin],
    methods:{
        returnCar(){
            this.$axios.patch(`${this.$carshare}/orders/return`, {rent_id: this.rent.id}, {
                headers: this.header
            })
            .then((res) => {
                if (res.data.message == "fail") {
                    this.flashMessage.error({
                        title: "Update detail",
                        message: res.data.err
                    });
                    return;
                }

                this.flashMessage.success({
                    title: "Update success!",
                    message: "Update successfully!"
                });

                this.rent.status = 'Completed';

            })
        }
    }
}

</script>