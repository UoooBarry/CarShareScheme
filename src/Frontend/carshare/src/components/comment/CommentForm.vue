/*
    @Author Yongqian Huang 1/10/2020
*/
<template>
    <div class="form-group">
        <form @submit.prevent="submitComment">
            <div class='form-group'>
                <label for="stars">Stars: </label>
                <input type="number" class="form-control" max="5" id='stars' v-model="stars">
            </div>
            <div class="form-group">
                <label for="comment">Comment: </label>
                <input type="text" class="form-control" id='comment' v-model="comment">
            </div>
            <button type="submit" class='btn btn-lg btn-primary'>Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CommentForm',
    data(){
        return{
            comment: '',
            stars: 0
        }
    },
    methods:{
        submitComment(){
            this.$axios.post(`${this.$carshare}/comments/create/${this.$route.params.id}`, {
                stars: this.stars,
                comment: this.comment
            }, {
                headers: this.header
            })
            .then((res) => {
                    if (res.data.message === "success") {
                        this.flashMessage.success({
                            title: "Comment create successfully!",
                            message: "Comment create successfully"
                        });
                        console.log(res.data);
                        this.$emit('onCommentCreate', res.data.comment); //update comment list
                    } else {
                        res.data.errors.forEach(error => {
                            this.flashMessage.error({
                                title: "Register detail",
                                message: error
                            });
                        });
                    }
            })
            .catch(() => {
                this.flashMessage.error({
                            title: "Comment create fail!",
                            message: "Please make sure you have login."
                });
            })
            ;
        }
    }
}
</script>