<template>
    <tr>
        <td>{{location.name}}</td>
        <td>{{location.address}}</td>
        <td>{{location.distance}} km</td>
    </tr>
</template>

<script>
export default {
    name: 'LocationRow',
    props: ['location']
}
</script>