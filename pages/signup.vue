<template>
    <section class="c-signup">
        <hgroup>
            <h1>Crear cuenta</h1>
        </hgroup>
        <form class="c-signup-form" id="signup">
            <input type="text" placeholder="Nombre" id="name">
            <input type="email" placeholder="E-mail" id="email">
            <input type="password" placeholder="Contraseña" id="passport1">
            <input type="password" placeholder="Repetir contraseña" id="passport2">
            <div class="c-signup-form-check">
                <input type="checkbox" id="check_email">
                <p>Recibir notificaciones por e-mail</p>
            </div>
        </form>
        <div class="btn-primary" v-on:click="sendData()">
            <p>Crear cuenta</p>
        </div>

        <div class="line"></div>

        <NuxtLink class="btn-secundary" to="/signin">Iniciar sesión</NuxtLink>
    </section>
</template>

<script>
export default {
    layout: 'Piscina',
    methods:{
        async sendData(){
            let object = {}
            let data = document.querySelectorAll('input')

            data.forEach(function(item){
                object[item.id] = item.value
                item.value = ''
            })
            console.log("Enviado", object)

            let res = await this.$axios.post(`/api/auth/signup`, object)
            console.log("aqui: ", res)
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
            margin-top: 10px
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

</style>