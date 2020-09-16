/***********************************************************************
 *           @AUTHOR: Bach Dao, Created AT: 15/08/2020                *
 ***********************************************************************/
<template>
    <div>
        <div class="item">{{ customer.user.first_name }}</div>
        <div class="item">{{ customer.user.family_name }}</div>
        <div
          class="item"
        >{{ customer.user.date_of_birth === null? "null" : customer.user.date_of_birth }}</div>
        <div class="item">{{ customer.user.contact_number }}</div>
        <div class="item">{{ customer.user.createdAt | formatDate }}</div>
        <div class="item">{{ customer.user.updatedAt | formatDate}}</div>
        <div class="item">
         
          <div class="form-check pl-0">
              <toggle-button :value="customer.activate"
               color="#82C7EB"
               v-on:change="activate"
               :labels="true"/>
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
            this.$axios.patch(`${this.$admin}/activate/${this.customer.user.id}`, {}, {headers: this.header})
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