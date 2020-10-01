/*
    @Author Yongqian Huang 1/10/2020
*/

<template>
    <div>
        <table class='table'>
            <thead class='thead-light'>
                <tr>
                    <th scope="col">Customer name</th>
                    <th scope="col">Stars</th>
                    <th scope='col'>Comment</th>
                </tr>
            </thead>
            <tbody v-for="comment in comments" v-bind:key="comment.id">
                <CommentRow :comment='comment' />
            </tbody>
        </table>
    </div>
</template>

<script>
import CommentRow from './CommentRow'
export default {
    name: 'CommentList',
    props: ['comments'],
    components:{
        CommentRow
    }
}
</script>