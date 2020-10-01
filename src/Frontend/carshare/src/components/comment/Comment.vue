/*
    @Author Yongqian Huang 1/10/2020
*/
<template>
    <div>
        <CommentForm @onCommentCreate='pushComment'/>
    </div>
</template>


<script>
import CommentForm from './CommentForm';
export default {
    name: 'Comment',
    props: ['comments'],
    components:{
        CommentForm
    },
    methods:{
        pushComment(comment){
            this.components.push(comment);
        }
    }
}
</script>