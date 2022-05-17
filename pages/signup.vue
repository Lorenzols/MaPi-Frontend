<template>
    <section class="c-signup">
        <hgroup>
            <h1>Crear cuenta</h1>
        </hgroup>
        <form class="c-signup-form" id="signup" >
            <input type="text" placeholder="Nombre" v-model="registerData.firstName">
            <input type="email" placeholder="E-mail" v-model="registerData.email">
            <input type="password" placeholder="Contraseña" v-model="registerData.password">
            <input type="password" placeholder="Repetir contraseña" v-model="password2">
        </form>
        <div class="btn-primary" v-on:click="register()">
            <p>Crear cuenta</p>
        </div>

        <div class="line"></div>

        <NuxtLink class="btn-secundary" to="/signin">Iniciar sesión</NuxtLink>

        <div class="c-errors">
            <p>{{error}}</p>
        </div>
    </section>
</template>

<script>
export default {
    layout: 'Piscina',
    data() {
        return {
            registerData: {
                firstName: "",
                email: "",
                password: ""
            },
            password2: "",
            error: ''
        }
    },
    methods:{
        async register() {
            this.error = ""
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/

            let condicionText = "Minimo 8 caracteres, Maximo 15, Una letra mayúscula, Una letra minucula, Un dígito, No espacios en blanco, Al menos 1 caracter especial"

            if(this.registerData.firstName != '' && this.registerData.email != '' && this.registerData.password != '' && this.password2){
                if(this.registerData.password == this.password2){
                    try {
                        const user = await this.$axios.$post("/auth/signup", {
                            firstName: this.registerData.firstName,
                            email: this.registerData.email,
                            password: this.registerData.password
                        })
                        
                        if(!user.isEmail){
                            try {
                                let response  = await this.$auth.loginWith("local", {
                                    data: {email: this.registerData.email, password: this.registerData.password}
                                })
                                if(response.data.error){
                                    this.error = response.data.error
                                }else{
                                    this.$router.push("/piscina/analisis")
                                }
                            }catch (err){
                                this.error = "Error en el servidor itentelo más tarde."
                            }
                        }else{
                            this.error = "El email ya existe"
                        }

                    }catch(err) {
                        this.error = "Error en el servidor itentelo más tarde."
                    }
                }else{
                    this.error = "Las contraseñas no coinciden"
                }
            }else{
                this.error = "Hay un campo vacio"
            }  
        }
    }
}
</script>

<style lang="sass" scoped>
    .c-signup
        padding: 20px 40px
        padding-top: 100px
        width: 35vw
        height: 100%
        box-sizing: border-box
        background: #a36142
        @media (max-width: 767px)
            width: 100%

        &-form
            display: flex
            flex-direction: column
            grid-gap: 20px
            margin-top: 30px

            input
                padding: 15px
                outline: none
                border: 2px solid white
                background: #a36142
                border-radius: 5px
                font-size: 20px
                
                &::placeholder
                    color: white
                    font-size: 22px
            &-check
                display: flex
                gap: 10px
                align-items: center
    .btn
        &-primary
            padding: 15px
            background: #EA7F54
            border: none
            border-radius: 5px
            font-size: 22px
            cursor: pointer
            width: 100%
            margin-top: 20px
            box-sizing: border-box
            text-align: center

        &-secundary
            background: #FFD8AB
            padding: 15px
            width: 100%
            border-radius: 5px
            color: #522C1D
            font-size: 22px
            text-decoration: none
            display: block
            box-sizing: border-box
            text-align: center


    .line
        width: 100%
        height: 2px
        background: white
        margin: 20px 0 

    .c-errors
        margin-top: 10px
</style>