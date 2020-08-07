<template>
    <div class="parallax" style="margin-bottom: 60px;">
        <div class="row">
            <div class="container">
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="email">Email: </label>
                        <input class="form-control" v-model="email" id="email" name="email" type="text">
                    </div>

                    <div class="form-group">
                        <label for="password">Password: </label>
                        <input class="form-control" v-model="password" id="password" name="password" type="password">
                    </div>

                    <div class="form-group">
                        <label for="retype">Retype Password: </label>
                        <input class="form-control" v-model="retype" id="retype" name="retype" type="password">
                    </div>
                    
                    <div class="form-group">
                        <label for="first_name">First Name: </label>
                        <input class="form-control" v-model="first_name" id="first_name" name="first_name" type="text">
                    </div>

                    <div class="form-group">
                        <label for="family_name">Family Name: </label>
                        <input class="form-control" v-model="family_name" id="family_name" name="family_name" type="text">
                    </div>

                    <div class="form-group">
                        <label for="contact_number">Contact number: </label>
                        <input class="form-control" v-model="contact" id="contact" name="contact" type="number">
                    </div>
                    <input class="btn btn-primary" type="submit" value="Register">
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RegisterForm",
    methods: {
        async register() {
            await this.$recaptchaLoaded();
            const token = await this.$recaptcha('register');

            if(this.password != this.retype){
                this.flashMessage.error({title: 'Register detail', message: 'Password and retype password not matched.'});
                return;
            }

            this.$axios.post(`${this.$auth}/register`,{
                email: this.email,
                password: this.password,
                first_name: this.first_name,
                family_name: this.family_name,
                contact_number: this.contact,
                recaptcha_token: token
            })
                .then( (res) => {
                    if(res.data.message == "fail"){
                        this.flashMessage.setStrategy('multiple');
                        res.data.errors.forEach(error => {
                            this.flashMessage.error({title: 'Register detail', message: error});
                        });
                        return; 
                    }

                    this.flashMessage.success({title: 'Register success!', message: "Register successfully!"});
                    this.$router.push({name: "Home"});
                    
                })
                .catch(err => console.log(err));
        }
    },
    data() {
        return{
            email: '',
            contact: '',
            first_name: '',
            family_name: '',
            password: '',
            retype: ''
        }
    }
}
</script>