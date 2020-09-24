<!-- @Author Yongqian Huang created at 24/09/2020 -->
<template>
    <div>
        <div class='order-list-title'>VALIDATION LIST</div>
        <hr class='user'>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Validation id</th>
                    <th scope="col">User first name</th>
                    <th scope="col">User last name</th>
                    <th scope="col">Front image</th>
                    <th scope="col">Back image</th>
                    <th scope="col">Is validated?</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="license in licenses" v-bind:key="license.id">
                <LicenseRow v-bind:license="license" />
            </tbody>
        </table>
    </div>
</template>

<script>
import LicenseRow from './LicenseRow';
export default {
    name: "LicenseList",
    props:['licenses'],
    components:{
        LicenseRow
    }
}
</script>