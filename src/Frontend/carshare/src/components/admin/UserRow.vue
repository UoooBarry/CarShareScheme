<template>
    <div>
        <div class="item">{{ customer.customer.first_name }}</div>
        <div class="item">{{ customer.customer.family_name }}</div>
        <div
          class="item"
        >{{ customer.customer.date_of_birth === null? "null" : customer.date_of_birth }}</div>
        <div class="item">{{ customer.customer.contact_number }}</div>
        <div class="item">{{ customer.customer.createdAt | formatDate }}</div>
        <div class="item">{{ customer.customer.updatedAt | formatDate}}</div>
        <div class="item">
         
          <div class="form-check pl-0">
            <input class="form-check-input" type="checkbox" :checked="customer.activate" v-on:click="activate" />
          </div>
        </div>
    </div>
</template>

<script>
import authorizeMixin from "@/mixins/authorizeMixin";

export default {
    name: "UserRow",
    mixins: [authorizeMixin],
    props: ['customer'],
    methods:{
        activate() {
            this.$axios.patch(`${this.$admin}/activate/${this.customer.customer.id}`, {}, {headers: this.header})
                        .then((res) => {
                             this.flashMessage.info({
                                title: 'Messsage',
                                message: res.data.message
                            });
                        })
                        .catch(() => {
                            this.flashMessage.error({
                                title: 'Error',
                                message: 'Authentication error !'
                            });
                        })
        }
    }
}
</script>

<style scoped>
    .item {
        display: inline-block;
        margin: 10px;
        width: 125px;
    }
</style>