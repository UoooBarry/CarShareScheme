<template>
    <div class="form-group">
        <form @submit.prevent="comment">
            <div class='form-group'>
                <label for="stars">Stars: </label>
                <input type="number" class="form-control" max="5" id='stars' v-model="stars">
            </div>
            <div class="form-group">
                <label for="comment">Comment: </label>
                <input type="text" class="form-control" id='comment' v-model="comment">
            </div>
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
        comment(){
            this.$axios.post(`${this.$carshare}/comment/create/${this.$route.params.id}`, {
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
                        this.$emit('onCommentCreate', res.data.comment); //update comment list
                    } else {
                        res.data.errors.forEach(error => {
                            this.flashMessage.error({
                                title: "Register detail",
                                message: error
                            });
                        });
                    }
            });
        }
    }
}
</script>