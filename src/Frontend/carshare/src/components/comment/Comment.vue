/*
    @Author Yongqian Huang 1/10/2020
*/
<template>
    <div>
        <CommentForm @onCommentCreate='pushComment'/>
        <CommentList :comments='comments' :key='comments.length' v-if='comments'/>
        
    </div>
</template>


<script>
import CommentForm from './CommentForm';
import CommentList from './CommentList';
export default {
    name: 'Comment',
    props: ['comments'],
    components:{
        CommentForm,
        CommentList
    },
    methods:{
        pushComment(comment){
            this.comments.push(comment);
        }
    }
}
</script>