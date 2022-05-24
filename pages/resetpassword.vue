<template>
  <section class="c-resetpassword">
        <hgroup>
            <h1>Cambio de contraseña</h1>
        </hgroup>

        <form class="c-resetpassword-form"  @submit.prevent="resetPass">
            <input type="password" placeholder="Contraseña" v-model="registerData.password">
            <input type="password" placeholder="Repetir contraseña" v-model="registerData.password2">

            <button class="btn-primary" type="submit" >Cambiar</button>
        </form>

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
                password: "",
                password2: ""
            },
            error: ''
        }
    },
    methods: {
        async resetPass(){
            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/
            let condicionText = "Minimo 8 caracteres, Maximo 15, Una letra mayúscula, Una letra minuscula, Un dígito, Al menos 1 caracter especial ($, @, !, %, *, ?, &)"

            if(!regex.test(this.registerData.password)){
                this.error = condicionText
                return
            }else{
                if(this.registerData.password !== this.registerData.password2){
                    this.error = "La contraseña no coincide"
                    return
                }
            }

            try{
                this.error = ''
                if(this.registerData.password != '' && this.registerData.password2 != ''){
                    this.$axios.put(`reset/password?id=${this.$route.query.id}&token=${this.$route.query.token}`, { password: this.registerData.password})
                    .then((datos)=>{
                        this.error = datos.data.error
                        this.registerData.password= ''
                        this.registerData.password2= ''

                    }).catch((datos)  =>{
                        this.error = datos.data.error
                    })
                }else{
                    this.error = "Hay un campo vacio"
                }
            }catch(err){
                this.error = "No se a podido cambiar la contraseña"
            }
        }
    }
}
</script>

<style lang="sass" scoped>
    .c-resetpassword
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

    .c-errors
        margin-top: 10px
</style>