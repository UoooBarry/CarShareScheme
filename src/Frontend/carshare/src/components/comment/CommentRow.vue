<template>
    <tr>
        <td>{{comment.user.first_name}} {{comment.user.family_name}}</td>
        <td>{{comment.stars}}</td>
        <td>{{comment.comment}}</td>
    </tr>
</template>

<script>
export default {
    name: 'CommentRow',
    props: ['comment']
}
</script>