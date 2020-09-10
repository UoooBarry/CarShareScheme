<!-- @Author Yongqian Huang, created at 10/09/2020-->
<template>
    <tr>
        <td>{{location.name}}</td>
        <td><a :href='linkToGoogleMap' title="Redirect to google map.">{{location.address}}</a></td>
        <td>{{(location.distance)/1000}} Km</td>
    </tr>
</template>

<script>
export default {
    name: 'LocationRow',
    props: ['location'],
    data(){
        return{
            linkToGoogleMap: `https://www.google.com/maps/place/${this.location.address}/`
        }
    }
}
</script>