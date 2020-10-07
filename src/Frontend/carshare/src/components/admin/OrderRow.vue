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
            {{rent.car.brand}} {{rent.car.model}}
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
        <td v-if="rent.bill.isPaid">
            Wait for pay...
        </td>
        <td v-else-if="rent.status == 'In progress'">
            <select v-model="selectedLocation" class="form-control" >
                <option v-for="location in locations" :key="location.id"  :value='location.id'>{{location.name}}</option>
            </select>
            <button class='btn btn-primary' @click="returnCar">Return Car</button>
        </td>
        <td v-else-if="rent.status == 'Not picked'">
            <button class='btn btn-primary' @click="pickUpCar">Pickup Car</button>
        </td>
        <td v-else>

        </td>
        <td>
            <button class='btn btn-danger' @click="remove">Delete</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'OrderRow',
    props: ['rent', 'locations'],
    data(){
        return{
            selectedLocation: ''
        }
    },
    methods:{
        remove(){
             this.$axios.delete(`${this.$carshare}/orders/${this.rent.id}`,
                {
                    headers: this.header
                }
             )
             .then(() => {
                this.flashMessage.success({
                    title: "Update success!",
                    message: "Update successfully!"
                });
                this.$router.go();
            })
            .catch(()=> {
                this.flashMessage.error({
                        title: "Update detail",
                        message: "Fail"
                });
            })
        },
        returnCar(){
            this.$axios.patch(`${this.$carshare}/orders/return`, {
                    rent_id: this.rent.id,
                    location_id: this.selectedLocation
                }, 
                {
                    headers: this.header
                }
            )
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
        },
        pickUpCar(){
            this.$axios.patch(`${this.$carshare}/orders/pickup`, {
                    rent_id: this.rent.id,
                }, 
                {
                    headers: this.header
                }
            )
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

                this.rent.status = 'In progress';

            })
        }
    }
}

</script>