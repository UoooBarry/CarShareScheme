<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Distance</th>
            </tr>
        </thead>
        <tbody v-for="location in locations" v-bind:key="location.id">
            <LocationRow :location="location" />
        </tbody>
    </table>
</template>

<script>
import LocationRow from '@/components/locations/locationRow';
export default {
    name: 'LocationTable',
    props: ['locations'],
    components:{
        LocationRow
    }
}
</script>